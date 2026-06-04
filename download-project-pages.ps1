$images = @{
  # 121-122
  "res-121-122-2.jpg"    = "https://framerusercontent.com/images/3FEmo06EWoRCxAgiu4GdaPpvNg.jpg"
  "res-121-122-3.jpg"    = "https://framerusercontent.com/images/FxzZ3D9e9lqm6wnapTW4KQ3GU.jpg"

  # Villa 361 extras
  "res-villa-361-2.jpg"  = "https://framerusercontent.com/images/Cp6IWcmpHiuCWfruytgqtkT5UpA.jpg"
  "res-villa-361-3.jpg"  = "https://framerusercontent.com/images/m81yEv9W6FuSIOkHs5uBzklQGs.jpg"

  # Villa 58 extras
  "res-villa-58-2.jpg"   = "https://framerusercontent.com/images/C59KCTdsYWHt7pjaDCp4ug4vI9E.jpg"
  "res-villa-58-3.jpg"   = "https://framerusercontent.com/images/Wls01n5Wnf752NYBOkA5ijUEmD4.jpg"

  # Villa 303 extras
  "res-villa-303-2.jpg"  = "https://framerusercontent.com/images/yKchffIBnEUdP5HXNY16zHCDA.jpg"
  "res-villa-303-3.jpg"  = "https://framerusercontent.com/images/iYI14L7ceHzDrcM2uuy6dgHANAQ.jpg"

  # Villa 201D extras
  "res-villa-201d-2.jpg" = "https://framerusercontent.com/images/1ybAmbPYjs3QzK6cnqKPb6Iq0.jpg"
  "res-villa-201d-3.jpg" = "https://framerusercontent.com/images/LrPcIgSYwuudLyFCUhwpqhgctg.jpg"

  # Kangs extras
  "res-kangs-2.jpg"      = "https://framerusercontent.com/images/Ij1yM0JshEeVLo8xMMuHVmEp1c.jpg"
  "res-kangs-3.jpg"      = "https://framerusercontent.com/images/Uk7OBa2qcEIfkkCh6cJHt8hHE2E.jpg"

  # Supreet extras
  "res-supreet-2.jpg"    = "https://framerusercontent.com/images/xfRwFD6AfSSyJ4PjobUhq7ME.jpg"
  "res-supreet-3.jpg"    = "https://framerusercontent.com/images/wmHGarjvPbUayEjFrhQm6d50J5w.jpg"

  # Midhas extras
  "res-midhas-2.jpg"     = "https://framerusercontent.com/images/pstxT2QRc88ABvWpZfDMPO7DjxM.jpg"
  "res-midhas-3.jpg"     = "https://framerusercontent.com/images/dRj2zR4f5Nk68lES6UXy0ARM.jpg"

  # Minzs extras
  "res-minzs-2.jpg"      = "https://framerusercontent.com/images/C6lfNFUd5rWw4lItizJP4U8BaVg.jpg"
  "res-minzs-3.jpg"      = "https://framerusercontent.com/images/k6rF6uL07eoqJDwCPwPh6XBiEAs.jpg"
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
