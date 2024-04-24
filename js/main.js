let API_URL = "https://dummyjson.com/users";
let loading = document.querySelector(".loading")
let wrapCards = document.querySelector(".wrapper");

async function getData(URL) {
  let data = await fetch(URL, {
    method: "GET",
  });
  data
    .json()
    .then((res) => mapData(res))
    .catch((err) => console.log(err));
}

getData(API_URL);

function mapData(about) {
  let usersData = "";

  about.users.forEach((el) => {
    usersData += `
    <div class="wrapper__card">
                <div class="wrapper__card__img">
                    <img src=${el.image} alt="">
                </div>
                <div class="wrapper__card__info">
                    <h3 class="wrapper__card__info__title">${
                      el.firstName + " " + el.lastName + " " + el.maidenName
                    }</h3>
                    <p class="wrapper__card__info__text">gender: ${el.email}</p>
                    <p class="wrapper__card__info__text">email: ${el.email}</p>
                    <p class="wrapper__card__info__text">username: ${
                      el.username
                    }</p>
                    <p class="wrapper__card__info__text">birthDate: ${
                      el.birthDate
                    }</p>
                    <a type="tel:${el.phone}" href="#">tel: <span>${el.phone}</span></a>
                </div>
            </div>
    `;
    wrapCards.innerHTML = usersData;
  });
}


function createLoad(load) {
  let loadItems = "";
  for (let i = 0; i < load; i++) {
    loadItems += `
        <div class="loading__image">
            <div class="loading__img bg__animation"></div>
            <div class="loading__title bg__animation"></div>
            <div class="loading__title bg__animation"></div>
            <div class="loading__title bg__animation"></div>
            <div class="loading__title bg__animation"></div>
        </div>
        `;
  }
  loading.innerHTML = loadItems;
}


createLoad(8)