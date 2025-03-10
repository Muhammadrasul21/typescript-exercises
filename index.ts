{
  // 1 masala.
  const firstLetter = function (name: string): string {
    let str = "";
    name.split(" ").forEach((item) => {
      str += item[0].toUpperCase();
    });
    return str;
  };
  console.log(firstLetter("John Doe"));
}

{
  // 2 masala.
  const answer = function (input: string): boolean | null {
    const ans = input.toLocaleLowerCase();
    return ans === "yes" ? true : ans === "no" ? false : null;
  };
  console.log(answer("yes"));
}

{
  // 3 masala.
  const foo = function (name: string, age: number, isStudent: boolean): string {
    return isStudent === true
      ? `John is ${age} years old and is a student`
      : `John is ${age} years old and is not a student`;
  };
  console.log(foo("John", 15, true));
}

{
  // 4 masala.
  function num(input: string | number): string | number {
    return typeof input === "number" ? input * input : `Hello ${input}`;
  }
  console.log(num(4));
}

{
  // 5 masala.
  let User: [number, string, boolean] = [1, "Emily", true];
  console.log(User);
}

{
  // 6 masala.
  interface Car {
    brand: string;
    year: number;
    isElectrick: boolean;
  }

  let myCar: Car = {
    brand: "BMW",
    year: 2022,
    isElectrick: false,
  };
  console.log(myCar);
}

{
  // 7 masala.
  function getLength(input: string | any[]): number {
    return input.length;
  }
  console.log(getLength("Hello"));
}

{
  // 8 masala.
  function number(n: number): number[] {
    let arr: number[] = [];
    if (n > 0) {
      for (let i = 1; i <= n; i++) {
        arr.push(i);
      }
    }
    return arr;
  }
  console.log(number(10));
}

{
  // 9 masala.
  function numbers(k: number, n: number): number[] {
    let arr: number[] = [];
    if (n > k) {
      for (let i = k; i <= n; i += 2) {
        arr.push(i);
      }
    }
    return arr;
  }
  console.log(numbers(2, 10));
}

{
  // 10 masala.
  function err(): never {
    throw new Error("error");
  }
}
