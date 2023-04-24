// Human Years Cat Years Dog Years
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
    // Your code here!
    let catYears, dogYears;
    switch (humanYears) {
      case 1:
        catYears = 15;
        dogYears = 15;
        break;
      case 2:
        catYears = 24
        dogYears = 24; 
        break;
      default:
        const over2 = humanYears - 2;
        catYears = 24 + (over2 * 4);
        dogYears = 24 + (over2 * 5);
        break;
    }
    return [humanYears,catYears,dogYears];
  }

// Testing 1-2-3

export function number(array: string[]): string[]{
    return array.map((str, ind) => `${ind + 1}: ${str}`);
}

// Wave

export function wave(str: string): Array<string>{
    const waveArr = [];
    const strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
      // waveArr.push(str.split('')[i].toUpperCase().join(''));
      const strNew = strArr
      i > 0 ? strNew[i - 1] = strArr[i - 1].toLowerCase() : null;
      strNew[i] = strArr[i].toUpperCase();
      waveArr.push(strNew.join(''));
    }
    return waveArr;
  }

  //Complementary DNA

  export class Kata {
  static dnaStrand(dna: string) {
    const dnaComp = dna.split('').map((str: string) => {
      switch (str) {
          case "A":
            return "T";
          case "T":
            return "A";
          case "C":
            return "G";
          case "G":
            return "C";      
      }
    })
    return dnaComp.join('')
  }
}

// Encode This

export const encryptThis = (str: string): string => {
  if (!str) {
    return str;
  }
  const parseWord = (subStr: string): string => {
    const strArr = subStr.split('');
    strArr.splice(0, 1, strArr[0].charCodeAt(0).toString())
    if (strArr.length > 1) {
      strArr.splice(1, 0, strArr[strArr.length - 1])
      strArr.pop()
    }
    return strArr.join('')
  }

  const encodedStr = str.split(" ").map(word => parseWord(word));
  return encodedStr.join(" ")
}

// Narccisitic Numbers

export function narcissistic(value: number): boolean {
  // your code here
  const numArr = value.toString().split('');
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total += parseInt(numArr[i]) ** numArr.length
  }
  return total.toString() === numArr.join('');
}

// Count Vowels

const getCount = (str: string): number => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = str.split('').filter(ltr => vowels.indexOf(ltr) != -1);
  return count.length;
}