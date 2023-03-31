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