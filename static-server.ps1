$ErrorActionPreference = 'Stop'
Write-Host 'Serving on http://localhost:8080/'
& python -m http.server 8080 --bind 127.0.0.1
