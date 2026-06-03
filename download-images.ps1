$images = @{
  # Residential
  "res-121-122.jpg"    = "https://framerusercontent.com/images/ONgBZ7BBZtKrP3LjEUMwpKSHBw.jpg"
  "res-villa-361.jpg"  = "https://framerusercontent.com/images/3kL9s1wlbGBJVdFEVlfVG2WhM.jpg"
  "res-villa-58.jpg"   = "https://framerusercontent.com/images/WR4z8Lg2CzPCeTmNKXjlZXPMc.jpg"
  "res-villa-303.jpg"  = "https://framerusercontent.com/images/kytvxY9krsiDsM6bS1FzRAT4Y.jpg"
  "res-villa-201d.jpg" = "https://framerusercontent.com/images/PuHcCoXgr8cZOD8ZsskL2eAHxQ.jpg"
  "res-kangs.jpg"      = "https://framerusercontent.com/images/nCNpabaGsQPg2vB7Nt1HDyY2Vk.jpg"
  "res-supreet.jpg"    = "https://framerusercontent.com/images/rvwNvfJpDOA6CoWh8GLNbYlxKw.jpg"
  "res-midhas.jpg"     = "https://framerusercontent.com/images/9oekKkjztZnZt4Mvgnf3NYgo4.jpg"
  "res-minzs.jpg"      = "https://framerusercontent.com/images/zFVSXwJIombj8DxFRlRBLsx0Q.jpg"
  # Commercial
  "com-devra.jpg"      = "https://framerusercontent.com/images/lx4j6SbKV6uqcH8dDGXzMBWaz4I.jpg"
  # Schools
  "sch-ms-school.png"  = "https://framerusercontent.com/images/QdjhAjHcCMmHvoDR1EkZajaLFAs.png"
  # Hospitality
  "hos-castle-grey.jpg"= "https://framerusercontent.com/images/8TgdDaV3GXdnhfwW484FsleGI.jpg"
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

Write-Host "`nDone. Images saved to $dest"
