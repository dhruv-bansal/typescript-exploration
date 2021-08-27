const profile2 = {
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

const profile1 = {
  name: "person2",
  age: 3,
  coordinate: {
    x: 22,
    y: 33,
  },

  setAge: function (age: number) {
    this.age = age;
  },

  setName(name: string) {
    this.name = name;
  },
};

function doubleDestructing(profile: any, profile1: any) {
  let { age } = profile;
  console.log(age);

  // do stuff //
  ({ age } = profile1);
  console.log(age);
}

doubleDestructing(profile, profile1);
