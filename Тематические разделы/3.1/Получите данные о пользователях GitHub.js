async function getUsers(names) {
  let endpoint = 'https://api.github.com/users/';
  let users = [];
  for (const name of names) {
    try {
      response = await fetch(endpoint + name);
      if (response.status == 200) {
        let user = await response.json();
        users.push(user);
      } else {
        console.log(
          'fetching ' + name + ': ' + response.status + ' ' + response.message
        );
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return users;
}

// getUsers(['iliakan', 'remy', 'no.such.users']).then((users) =>
//   users.map((user) => console.log(user.login))
// );

document
  .querySelector('.fetch-users')
  .addEventListener('click', (event) =>
    getUsers(['iliakan', 'remy', 'no.such.users'])
  );
