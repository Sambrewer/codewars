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

//nato converter

function to_nato(words) {
  let nato = ['Alfa', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliett', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'Xray', 'Yankee', 'Zulu'];
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  toNato = []
  words.split('').map((letter, ind) => {
    if (letter !== ' ' && alphabet.indexOf(letter.toUpperCase()) !== -1) {
      toNato.push(nato[alphabet.indexOf(letter.toUpperCase())]);
    }
    if (alphabet.indexOf(letter.toUpperCase()) === -1 && letter !== ' ') {
      toNato.push(letter)
    }
    console.log(toNato)
  })
  return toNato.join(' ')
}

//which is in?

function inArray(array1,array2){
  let matches = []
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].indexOf(array1[i]) !== -1 && matches.indexOf(array1[i]) === -1) {
        matches.push(array1[i])
      }
    }
  }
  return matches.sort();
}

//detect panagram

function isPangram(string){
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let str = string.split('')
  for (var i = 0; i < alphabet.length; i++) {
    if (string.indexOf(alphabet[i]) === -1 && string.indexOf(alphabet[i].toUpperCase()) === -1) {
      return false;
    }
  }
  return true;
}
