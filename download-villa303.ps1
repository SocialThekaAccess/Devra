$images = @{
  "res-villa-303-4.jpg" = "https://framerusercontent.com/images/wR7u79xd1NLCFukvUZrXY7MJN3U.jpg"
  "res-villa-303-5.jpg" = "https://framerusercontent.com/images/uC6JKqgwxiuD8rJ1dzONbz6czs.jpg"
  "res-villa-303-6.jpg" = "https://framerusercontent.com/images/mSQ4hhBIMdzMShsS7ojjCGaqe1c.jpg"
  "res-villa-303-7.jpg" = "https://framerusercontent.com/images/oBXdkmvfTXw358gOsj5gG3sxBE.jpg"
  "res-villa-303-8.jpg" = "https://framerusercontent.com/images/jf6pEpdXmJVvY3GOeOczqKunBPQ.jpg"
  "res-villa-303-9.jpg" = "https://framerusercontent.com/images/ib0QCaB3B5SrAgPwKrvGCbsOck.jpg"
}
$dest = "src\assets\projects"
foreach ($name in $images.Keys) {
  $url = $images[$name]; $path = Join-Path $dest $name
  Write-Host "Downloading $name ..."
  Invoke-WebRequest -Uri $url -OutFile $path -UseBasicParsing
  Write-Host "  OK" -ForegroundColor Green
}
Write-Host "Done."
