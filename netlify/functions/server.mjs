import { createRequire } from "node:module"
import { createRequestHandler } from "react-router"

const require = createRequire(import.meta.url)

let build
try {
  build = require("./server-build.cjs")
} catch {
  build = require("../../build/server/index.js")
}

const handler = createRequestHandler(build, "production")

function toRequest(event) {
  const headers = new Headers()

  for (const [key, value] of Object.entries(event.headers ?? {})) {
    if (value == null) continue
    headers.set(key, Array.isArray(value) ? value.join(",") : String(value))
  }

  const host = headers.get("host") ?? "localhost"
  const rawUrl = event.rawUrl ?? event.url ?? event.path ?? "/"
  const url = rawUrl.startsWith("http")
    ? rawUrl
    : `https://${host}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`

  const method = event.httpMethod ?? event.method ?? "GET"
  const body =
    event.body == null || event.body === ""
      ? undefined
      : event.isBase64Encoded && typeof event.body === "string"
        ? Buffer.from(event.body, "base64")
        : event.body

  return new Request(url, {
    method,
    headers,
    body,
  })
}

export default async (event) => {
  const request = toRequest(event)
  const response = await handler(request)
  const headers = Object.fromEntries(response.headers.entries())

  return {
    statusCode: response.status,
    headers,
    body: await response.text(),
    isBase64Encoded: false,
  }
}
