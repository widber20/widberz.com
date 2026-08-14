import http.server
import socketserver

PORT = 8000

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        return

    def end_headers(self):
        # Prevent caching during local development so CSS/JS updates appear immediately
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

if __name__ == '__main__':
    with socketserver.TCPServer(("127.0.0.1", PORT), QuietHandler) as httpd:
        print(f"Serving on http://127.0.0.1:{PORT}")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nStopping server")
