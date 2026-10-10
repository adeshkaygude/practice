const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [3, 4, 5, 6, 7, 8];

function common(arr1, arr2) {
  return new Promise((resolve, reject) => {
    let result = [];

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          if (!result.includes(arr1[i])) {
            result.push(arr1[i]);
          }
        }
      }
    }

    resolve(result);
  });
}

async function find_common(arr1, arr2) {
  try {
    const answer = await common(arr1, arr2);
    console.log(answer);
  } catch (err) {
    console.log(err);
  }
}

find_common(arr1, arr2);
