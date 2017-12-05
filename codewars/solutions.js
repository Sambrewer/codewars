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

//String Incrementor

function incrementString (strng) {
  strng = strng.split('')
  for (var i = 0; i < strng.length; i++) {
    if (Number(strng[i]) === 0 || Number(strng[i])) {
      num = strng.splice(i, strng.length)
      if (num.length > 1 && Number(num.join('')) < 10) {
        for (var j = 0; j < num.length - 1; j++) {
          strng.push('0')
        }
        strng.push(Number(num.join('')))
      } else {
        strng.splice(i, strng.length, (Number(num.join('') + 1)))
      }
    }
  }
  return strng.join('')
}

//Camel Case converter

function solution(string) {
  let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  let newString = string.split('')
  for (var i = 0; i < newString.length; i++) {
    console.log(string[i], i)
    if (alphabet.indexOf(string[i]) !== -1) {
      console.log(string[i], i)
      if (newString.indexOf(" ") !== -1) {
        newString.splice(i + 1, 0, ' ')
      } else {
        newString.splice(i, 0, ' ')
      }
    }
  }
  return newString.join('')
}

//Divisors

function divisors(integer) {
 let results = [];
 for (var i = 2; i < integer; i++) {
   if (integer % i === 0) {
     results.push(i)
   }
 }
 if (results.length) {
   return results;
 } else {
   return `${integer} is prime`;
 }
}

//Pyramid Slidedown

function longestSlideDown (pyramid) {
  let result = 0;
  result = pyramid[0][0]
  for (var i = 0; i < pyramid.length; i++) {
    let j = 0;
    switch (pyramid[i][j]) {
      case pyramid[i][j] < pyramid[i][j + 1]:
        result += pyramid[i][j + 1]
        j = j + 1
        break;
      case pyramid[i][j] < pyramid[i][j - 1]:
        result += pyramid[i][j - 1]
        j = j -1
        break;
      default:
        result += pyramid[i][j]
    }
  }
  return result;
}

//Merged String Checker

function isMerge(s, part1, part2) {
  let ind = 0;
  let ind2 = 0;
  for (var i = 0; i < part1.length; i++) {
    if (s.indexOf(part1[i]) >= ind){
    ind = s.indexOf(part1[i])
    } else {
      return false;
    }
  }
  for (var j = 0; j < part2.length; j++) {
    if (s.indexOf(part2[j]) >= ind2) {
      ind2 = s.indexOf(part2[j])
    } else {
      return false;
    }
  }
  for (var k = 0; k < s.length; k++) {
    if (part1.indexOf(s[k]) === -1 && part2.indexOf(s[k]) === -1) {
      return false
    }
  }
  return true;
}

//Largest 5 digit number in a series

function solution(digits){
  let digArr = digits.toString().split('')

  let numsArr = digArr.map((num, ind) => {
      return Number(digArr.join('').substring(ind, ind + 5))
    })
  return Math.max.apply(null, numsArr)
}

//Directions Reduction

function dirReduc(arr) {

  for (var i = 0; i < arr.length; i++) {
    switch(arr[i]) {
      case 'NORTH':
        if (arr[i + 1] == 'SOUTH') {
          arr.splice(i, 2);
          i -= 2;
        }
        break;
      case 'SOUTH':
        if (arr[i + 1] == 'NORTH') {
          console.log(arr[i + 1]);
          arr.splice(i, 2);
          i -= 2;
        }
        break;
      case 'EAST':
        if (arr[i + 1] == 'WEST') {
          arr.splice(i, 2);
          i -= 2;
        }
        break;
      case 'WEST':
        if (arr[i + 1] == 'EAST') {
          arr.splice(i, 2);
          i -= 2;
        }
    }
  }

  return arr

}
