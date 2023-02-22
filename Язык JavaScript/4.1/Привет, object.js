function alert(...args) {
  console.log(...args);
}

// Привет, object
let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
