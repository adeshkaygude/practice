function fech_data() {
  return new Promise((resolve, reject) => {
    let data = fetch("https://jsonplaceholder.typicode.com/users");

    if (true) {
      resolve("fetch data ");
    } else {
      reject("data not fetch");
    }
  });
}

function check_fetch(){
    
}