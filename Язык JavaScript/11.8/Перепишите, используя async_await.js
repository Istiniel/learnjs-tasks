let alert = (...args) => console.log(...args);

// Перепишите один из примеров раздела Цепочка промисов, используя async/await вместо .then/catch:

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

async function loadJson1(url) {
  let content = await fetch(url);

  if (content.status === 200) {
    return content.json();
  }
}

loadJson1('no-such-user.json') // (3)
  .catch(alert); // Error: 404
