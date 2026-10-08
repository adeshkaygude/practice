async function voting(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("you can vote ");
    } else {
      reject("you are not eligibal for vote");
    }
  });
}

async function checkvoting() {
  try {
    const result = await voting(20);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkvoting();
