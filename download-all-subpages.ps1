$images = @{
  # Devra Architects Studio — 9 images (1 already downloaded)
  "com-devra-4.jpg"  = "https://framerusercontent.com/images/AcpUWb4AA4sHJ3G39wfz0daZQM.jpg"
  "com-devra-5.jpg"  = "https://framerusercontent.com/images/qioVyUVxDc6y8w7EDXcpag8i8I.jpg"
  "com-devra-6.jpg"  = "https://framerusercontent.com/images/4LtP84yIuSL2R9rcYzImt0B74.jpg"
  "com-devra-7.jpg"  = "https://framerusercontent.com/images/aQOqGYa1YA50So6LIAaFi133JxQ.jpg"
  "com-devra-8.jpg"  = "https://framerusercontent.com/images/cWtLHPC4LMJT426Xv1tYzoqlrQ.jpg"
  "com-devra-9.jpg"  = "https://framerusercontent.com/images/jiMBqp8yO7mMh1VpKw23nOScX4I.jpg"

  # Castle Grey extras (already have 1-5, need none more — devra.in shows 9 total)
  "hos-castle-grey-6.jpg" = "https://framerusercontent.com/images/HIaLBWhfP7b6CfCkkBsEYgjfU.jpg"
  "hos-castle-grey-7.jpg" = "https://framerusercontent.com/images/4WYtSHke7JwoV5SCU0DTMFOw2Ns.jpg"
  "hos-castle-grey-8.jpg" = "https://framerusercontent.com/images/V5X3hgg6XJBTxF48j1iljruWQUE.jpg"
  "hos-castle-grey-9.jpg" = "https://framerusercontent.com/images/yAaLmamNL2oQcDzDCYFAaamdo.jpg"

  # Gill's Farmhouse extras
  "fh-gills-2.jpg"   = "https://framerusercontent.com/images/rvwNvfJpDOA6CoWh8GLNbYlxKw.jpg"
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
Write-Host "`nAll done."
