$images = @{
  "res-villa-201d-4.jpg" = "https://framerusercontent.com/images/VMuqz7NpiR1resriwiUBbhQpQo.jpg"
  "res-villa-201d-5.jpg" = "https://framerusercontent.com/images/InPHcmdtV54VqSrKJSCKdIa9ho.jpg"
  "res-villa-201d-6.jpg" = "https://framerusercontent.com/images/DbZWNjcLfncunJSnCfjOEBMLMI.jpg"
  "res-villa-201d-7.jpg" = "https://framerusercontent.com/images/PsCPrdxBpiuixn9WCLO4Od9Q7E.jpg"
  "res-villa-201d-8.jpg" = "https://framerusercontent.com/images/7BhBTPQw0cbFbRlgOqjffNFNJg.jpg"
  "res-villa-201d-9.jpg" = "https://framerusercontent.com/images/YkCreqOPJsWkEk6pz3ltjaJig.jpg"
}
$dest = "src\assets\projects"
foreach ($name in $images.Keys) {
  $url = $images[$name]; $path = Join-Path $dest $name
  Write-Host "Downloading $name ..."
  Invoke-WebRequest -Uri $url -OutFile $path -UseBasicParsing
  Write-Host "  OK" -ForegroundColor Green
}
Write-Host "Done."
