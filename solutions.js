//Remove Anchor from URL
function removeUrlAnchor(url){
  let urlStr = url.split('')
  console.log(urlStr)
  for (var i = 0; i < urlStr.length; i++) {
    if (urlStr[i] === '#')
    urlStr.splice([i])
  }
  return urlStr.join('');
}
