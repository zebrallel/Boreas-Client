const url = 'ws://localhost:8080'

export default function initWebSocketService(options) {
    const ws = new WebSocket(url, 'echo-protocol')

    ws.onopen = options.onopen
    ws.onmessage = options.onmessage

    return ws
}
