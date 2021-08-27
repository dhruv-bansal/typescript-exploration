const profile = {
  name: "person1",
  age: 1,
  coordinate: {
    x: 10,
    y: 11,
  },

  setAge: function (age: number) {
    this.age = age;
  },

  setName(name: string) {
    this.name = name;
  },
};

// getting age by de-structing
// let { age } = profile;
// console.log(age);

// adding annotation to de-structed age

const logProperties = (): void => {
  let { age, name }: { age: number; name: string } = profile;
  console.log(age, name);
};
logProperties();

// destructing co-ordinates

let {
  coordinate: { x, y },
}: { coordinate: { x: number; y: number } } = profile;

console.log(x + " " + y);
