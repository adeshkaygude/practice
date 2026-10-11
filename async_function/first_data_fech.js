async function user() {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1",
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      const data = await response.json();
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
}

async function user_data() {
  try {
    const data = await user();

    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("City:", data.address.city);
  } catch (error) {
    console.log("Error:", error.message);
  }
}

user_data();
