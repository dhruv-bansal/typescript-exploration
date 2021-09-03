import RealUser, { FakeUser } from "./User";

const fakeUser = new FakeUser();
const user = new RealUser("realUser");

console.log(fakeUser);
console.log(user);
