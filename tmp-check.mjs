import('./netlify/functions/server.mjs').then(async (mod) => {
    const event = {
        httpMethod: 'GET',
        headers: { host: 'example.com' },
        rawUrl: 'https://example.com/'
    }

    const result = await mod.default(event)
    console.log(JSON.stringify({
        statusCode: result.statusCode,
        contentType: result.headers['content-type'],
        bodyPreview: result.body.slice(0, 80)
    }, null, 2))
}).catch((err) => {
    console.error(err)
    process.exit(1)
})
