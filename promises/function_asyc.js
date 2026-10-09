async function voting(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("you are eligibal for vote");
    } else {
      reject("you are not eligbal for vote ");
    }
  });
}

async function checkvoting() {
  try {
    const result = await voting(55);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

checkvoting();
