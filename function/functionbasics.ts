/********** type of declaration of function *****/
// arrow function
const arrowFunction = (a: number, b: number): number => {
  return a * b;
};

//  both are same
// const arrowFunction: (a: number, b: number) => number = (
//   a: number,
//   b: number
// ): number => {
//   return a * b;
// };

// normal function
function fnWithFnKeyword(a: number, b: number): number {
  return a * b;
}

// anonymousFunction
const anonymousFunction = function (a: number, b: number): number {
  return a * b;
};

console.log(arrowFunction(2, 3) === fnWithFnKeyword(2, 3));
console.assert(arrowFunction(2, 3) === fnWithFnKeyword(2, 3));

console.log(fnWithFnKeyword(2, 3) === anonymousFunction(2, 3));
console.assert(fnWithFnKeyword(2, 3) === anonymousFunction(2, 3));

/**********  return type of function void versus undefined **/
const returnVoid = (str: String): void => {
  console.log(str);
};

// with return type void we can return null or undefined
const returnVoidWithNull = (str: String): void => {
  console.log(str);
  // return null;
};
const returnVoidWithUndefined = (str: String): void => {
  console.log(str);
  return undefined;
};

/**********  return type never **/
const returnNever = (message: String): never => {
  throw new Error("message");
};

const returnVoid1 = (message: String): void => {
  if (message == null) {
    throw new Error("message is null");
  }
};

/**********  destructing **/
const todaysWeather = {
  date: new Date(),
  weather: "Sunny",
};

const logWeather = (forecast: { date: Date; weather: String }): void => {
  console.log(forecast.date, "  ", forecast.weather);
};

// Es2015 destructring
// const logWeatherES2015 = ({ date, weather }) => {
//   console.log(date, "  ", weather);
// };

// destructing in typescript
const logWeatherDestructed = ({
  date,
  weather,
}: {
  date: Date;
  weather: String;
}): void => {
  console.log(date, "  ", weather);
};
