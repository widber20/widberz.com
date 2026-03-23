Add-Type -AssemblyName System.Net.HttpListener
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:8080/")
$listener.Start()
Write-Host "Serving on http://localhost:8080/"
while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $path = $request.Url.AbsolutePath.TrimStart('/')
    if ([string]::IsNullOrEmpty($path)) { $path = "index.html" }
    $file = Join-Path $PWD $path
    if (Test-Path $file) {
        $bytes = [System.IO.File]::ReadAllBytes($file)
        $context.Response.ContentType = "text/html"
        $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
        $context.Response.StatusCode = 404
        $context.Response.OutputStream.Write([System.Text.Encoding]::UTF8.GetBytes("Not Found"), 0, 9)
    }
    $context.Response.Close()
}
