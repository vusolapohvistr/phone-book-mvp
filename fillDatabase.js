import fetch from 'node-fetch';

const NUMBER_OF_CONTACTS = 100000;
const RESULTS_PER_PAGE = 5000;
const ITERATIONS = NUMBER_OF_CONTACTS / RESULTS_PER_PAGE;

for (let page = 1; page <= ITERATIONS; page++) {
  const randomUser = await fetch(`https://randomuser.me/api/?page=${page}&results=${RESULTS_PER_PAGE}`);

  const data = await randomUser.json();

  console.dir(data.info);

  await Promise.all(data.results.map(async user => {
    await fetch('http://localhost:3000/contacts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        city: user.location.city,
        company: "jobn't",
        position: "jobn't",
        phoneNumber: user.phone,
      }),
    });
  }));
}
