let API_URL = "https://dummyjson.com/users";

async function fetchData(api) {
  const data = await fetch(api, {
    method: "GET",
  });

  data
  .json()
  .then((api) => console.log(api))
  .catch((res) => console.log(res))
}

fetchData(API_URL)