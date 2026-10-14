function fech_data() {
  return fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) {
        throw new Error("Data not fetched");
      }

      return response.json();
    },
  );
}

function check_fetch() {
  fech_data()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

check_fetch();
