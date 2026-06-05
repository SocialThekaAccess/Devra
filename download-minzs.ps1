$images = @{
  "res-minzs-4.jpg" = "https://framerusercontent.com/images/JzCLB0fjRh1IbBCjWOSbOAmSXI.jpg"
  "res-minzs-5.jpg" = "https://framerusercontent.com/images/bW6xZLMJNwjs565hx6aR3UmVo6Y.jpg"
  "res-minzs-6.jpg" = "https://framerusercontent.com/images/M09hkDKfEEniFIH8iVnI2hDzy7Y.jpg"
  "res-minzs-7.jpg" = "https://framerusercontent.com/images/ZlQjJlRVtEhHnf3mYLXGuTASf14.jpg"
  "res-minzs-8.jpg" = "https://framerusercontent.com/images/EGZzAseQWuW4OW9dsyhC1rCUo4M.jpg"
  "res-minzs-9.jpg" = "https://framerusercontent.com/images/Kc88FzZrdmgVe4gsbWHB3HD0gk.jpg"
}
$dest = "src\assets\projects"
foreach ($name in $images.Keys) {
  $url = $images[$name]; $path = Join-Path $dest $name
  Write-Host "Downloading $name ..."
  Invoke-WebRequest -Uri $url -OutFile $path -UseBasicParsing
  Write-Host "  OK" -ForegroundColor Green
}
Write-Host "Done."
