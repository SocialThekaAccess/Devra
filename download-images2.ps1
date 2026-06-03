$images = @{
  # Commercial — Devra Architects Studio extras
  "com-devra-2.jpg"       = "https://framerusercontent.com/images/juzsPmgk9UK4yFOWebldYIVp4.jpg"
  "com-devra-3.jpg"       = "https://framerusercontent.com/images/2CTyugCovNK8LidCXlLqmzAgygM.jpg"

  # Schools — MS School extras
  "sch-ms-school-2.png"   = "https://framerusercontent.com/images/l5qAzypbzvHPB7HciyjrTAyThhA.png"
  "sch-ms-school-3.png"   = "https://framerusercontent.com/images/gaTgpxqZy3HSOzNwvTxIKBh0P0A.png"

  # Hospitality — Castle Grey extras
  "hos-castle-grey-2.jpg" = "https://framerusercontent.com/images/j496q2rw4oLukersZ1C1U7FCO7E.jpg"
  "hos-castle-grey-3.jpg" = "https://framerusercontent.com/images/mcvGSb22h9fTuiJOZltC0NSHMLA.jpg"
  "hos-castle-grey-4.jpg" = "https://framerusercontent.com/images/7miXZppKfyj10Xb89bYFCWTK6c.jpg"
  "hos-castle-grey-5.jpg" = "https://framerusercontent.com/images/rLBHnvCaeHTs0s1jpAoIoDulRmg.jpg"
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

Write-Host "`nDone."
