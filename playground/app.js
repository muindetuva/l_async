let user1 = {
  name: "Alfred",
  email: "alfred@mail.com",
  age: 40,
  nationality: "Kenyan",
};

user1.ssn;

user1.parents;

user;

let user2 = {
  name: "Chiamaka",
  email: "chiamaka@mail.com",
  age: 40,
  nationality: "Kenyan",
};

let { name, email } = user2;

console.log(name, email);

function sayHi({ ssnn, parents }) {
  console.log(name + " says Hi");
}
