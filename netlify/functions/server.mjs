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

export default async (request) => handler(request)
