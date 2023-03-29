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