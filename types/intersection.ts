type Age = {
  age: number;
};

type Name = {
  name: string;
};

type Person = Age & Name;

const printPerson = (person: Person): void => {
  console.log(person);
};

const person1 = {
  age: 10,
  name: "person1",
};
printPerson(person1);
