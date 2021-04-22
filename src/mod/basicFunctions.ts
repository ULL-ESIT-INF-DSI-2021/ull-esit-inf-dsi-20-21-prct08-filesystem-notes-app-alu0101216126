abstract class Reduce {
  constructor(protected array: number[]) {}

  run() {
    let result: number = this.array[0];

    for (let i: number = 1; i < this.array.length; i++) {
      result = this.reduceOperation(result, this.array[i]);
      this.showResult(result);
    }
  }

  abstract reduceOperation(a: number, b: number): number;

  showResult(result: number) {}
}

class AddReduce extends Reduce {
  constructor(protected array: number[]) {
    super(array);
  }

  reduceOperation(a: number, b: number): number {
    return a+b;
  }

  showResult(result: number) {
    console.log(`La suma es ${result}`);
  }
}

class ProdReduce extends Reduce {
  constructor(protected array: number[]) {
    super(array);
  }

  reduceOperation(a: number, b: number): number {
    return a*b;
  }

  showResult(result: number) {
    console.log(`La multiplicación es ${result}`);
  }
}

const suma = new AddReduce([2, 5, 1]);
suma.run();
console.log('\n\n');
const mul = new ProdReduce([2, 5, 1]);
mul.run();


// -------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------------------------- //

abstract class MapReduce {
  constructor(protected array: number[]) {}

  run() {
    const resultMap: number[] = this.map((num) => {
      return num + 1;
    });

    this.afterMap(resultMap);

    let result: number = 0;

    for (let i: number = 1; i < resultMap.length; i++) {
      result = this.reduceOperation(result, resultMap[i]);
      this.showResult(result);
    }
  }

  map(myFunction:(a: number) => number): number[] {
    const arrayAux: number[] = [];
    this.array.forEach((element) => {
      arrayAux.push(myFunction(element));
    });
    return arrayAux;
  }

  abstract reduceOperation(a: number, b: number): number;

  showResult(result: number) {}

  afterMap(array: number[]) {}
}

class AddMapReduce extends MapReduce {
  constructor(protected array: number[]) {
    super(array);
  }

  reduceOperation(a: number, b: number): number {
    return a+b;
  }

  showResult(result: number) {
    console.log(`La suma es ${result}`);
  }
}

class ProdMapReduce extends MapReduce {
  constructor(protected array: number[]) {
    super(array);
  }

  reduceOperation(a: number, b: number): number {
    return a*b;
  }

  showResult(result: number) {
    console.log(`La multiplicación es ${result}`);
  }
}


