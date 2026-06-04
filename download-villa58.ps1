$images = @{
  "res-villa-58-4.jpg" = "https://framerusercontent.com/images/q3fDHop18iZamm2CRehozkGgNOI.jpg"
  "res-villa-58-5.jpg" = "https://framerusercontent.com/images/0AxZA1DlN7W0ny4Dw6ctIChYB0.jpg"
  "res-villa-58-6.jpg" = "https://framerusercontent.com/images/gsYeP1PryaVI8krjHfMVxMBJJNY.jpg"
  "res-villa-58-7.jpg" = "https://framerusercontent.com/images/nPDlSEmKOoLvEoUDAhMJy6q7Xc.jpg"
  "res-villa-58-8.jpg" = "https://framerusercontent.com/images/awQkcyVEhGxM2VROAsDA2SoL3Ys.jpg"
}
$dest = "src\assets\projects"
foreach ($name in $images.Keys) {
  $url = $images[$name]; $path = Join-Path $dest $name
  Write-Host "Downloading $name ..."
  Invoke-WebRequest -Uri $url -OutFile $path -UseBasicParsing
  Write-Host "  OK" -ForegroundColor Green
}
Write-Host "Done."
