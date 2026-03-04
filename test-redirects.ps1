# Test ULTRAFLEX URL Redirects
Write-Host ""
Write-Host "=== Testing ULTRAFLEX Redirects ===" -ForegroundColor Cyan
Write-Host ""

$baseUrl = "http://localhost:8000"
$redirects = @{
    "/locations/gym-in-york" = "/locations/york"
    "/locations/gym-in-leeds" = "/locations/west-leeds"
    "/locations/gym-in-rotherham" = "/locations/rotherham"
    "/locations/gym-in-durham" = "/locations/durham"
    "/locations/gym-in-normanton" = "/locations/normanton"
    "/locations/gym-in-hull" = "/locations/hull"
    "/wp-content/uploads/2019/03/UFG-64-1024x615.jpg" = "/tours"
    "/locations/gym-in-leeds/personal-trainers" = "/trainers"
}

foreach ($old in $redirects.Keys) {
    $expected = $redirects[$old]
    try {
        $response = Invoke-WebRequest -Uri "$baseUrl$old" -MaximumRedirection 0 -UseBasicParsing -ErrorAction Ignore
        
        if ($response.StatusCode -eq 301) {
            $location = $response.Headers.Location
            if ($location -like "*$expected*") {
                Write-Host "PASS: $old -> $location" -ForegroundColor Green
            } else {
                Write-Host "FAIL: $old (Expected: $expected, Got: $location)" -ForegroundColor Red
            }
        } else {
            Write-Host "FAIL: $old (Status: $($response.StatusCode), Expected 301)" -ForegroundColor Red
        }
    } catch {
        Write-Host "ERROR: $old - $($_.Exception.Message)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== Test Complete ===" -ForegroundColor Cyan
Write-Host ""
