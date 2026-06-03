$images = @{
  # Farm Houses
  "fh-gills.png"          = "https://framerusercontent.com/images/1My43vetZ7pzIknbdhkpwMoXs.png"
  # Nagra has no image on devra.in
  # Use farmHouse.avif asset as fallback for Nagra — already exists
}

$dest = "src\assets\projects"
New-Item -ItemType Directory -Path $dest -Force | Out-Null

foreach ($name in $images.Keys) {
  $url  = $images[$name]
  $path = Join-Path $dest $name
  Write-Host "Downloading $name ..."
  try {
    Invoke-WebRequest -Uri $url -OutFile $path -UseBasicParsing
    Write-Host "  OK" -ForegroundColor Green
  } catch {
    Write-Host "  FAILED: $_" -ForegroundColor Red
  }
}
Write-Host "Done."
