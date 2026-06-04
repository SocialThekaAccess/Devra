$images = @{
  "res-villa-361-4.jpg" = "https://framerusercontent.com/images/TxW9RRSJyut8UwC97c88THDTOcs.jpg"
  "res-villa-361-5.jpg" = "https://framerusercontent.com/images/YNz3rV0fZhR9TsQTmQ1ubLR7aE.jpg"
  "res-villa-361-6.jpg" = "https://framerusercontent.com/images/xX6E0gSZVi2yMSuc387oX0jtNQ.jpg"
  "res-villa-361-7.jpg" = "https://framerusercontent.com/images/SaBavcS7tVS8Tgd4yjVRhTTRhQ.jpg"
  "res-villa-361-8.jpg" = "https://framerusercontent.com/images/KmjhZDgCTdIF2L1HblCHYD0MfM.jpg"
  "res-villa-361-9.jpg" = "https://framerusercontent.com/images/5O0HK6SYPb0KXoCfZ8DKqYvRxg.jpg"
}
$dest = "src\assets\projects"
foreach ($name in $images.Keys) {
  $url = $images[$name]; $path = Join-Path $dest $name
  Write-Host "Downloading $name ..."
  Invoke-WebRequest -Uri $url -OutFile $path -UseBasicParsing
  Write-Host "  OK" -ForegroundColor Green
}
Write-Host "Done."
