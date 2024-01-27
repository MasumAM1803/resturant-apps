const Dashboard = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    this._restaurants = responseRecords.restaurants;
    this._populateTransactionsRecordToCard(this._restaurants);
  },

  _populateTransactionsRecordToCard(restaurants = null) {
    if (!(typeof restaurants === 'object')) {
      throw new Error(
        `Parameter restaurants should be an object. The value is ${restaurants}`,
      );
    }

    if (!Array.isArray(restaurants)) {
      throw new Error(
        `Parameter restaurants should be an array. The value is ${restaurants}`,
      );
    }

    const recordCard = document.querySelector('#recordsCard');

    recordCard.innerHTML = '';
    if (restaurants.length <= 0) {
      recordCard.innerHTML = this._templateEmptyCard();
      return;
    }

    restaurants.forEach((item, idx) => {
      recordCard.innerHTML += this._templateCard(idx, restaurants[idx]);
    });
  },

  _templateCard(index, restaurantRecord, pictureId = "") {
    if (restaurantRecord.pictureId == null) {
      pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster'
    } else {
      pictureId = restaurantRecord.pictureId
    }
    return `
      <div class="col-12 col-md-6 mt-3">
        <div class="card">
          <a class="" href="/pages/detail.html?id=${restaurantRecord.id}">
            <div class="card__header">
              <h2 class="card__header-city">${restaurantRecord.city}</h2>
              <img class="card__header-image" src="${pictureId}" alt="${restaurantRecord.name}-images">
            </div>
            <div class="card__body">
              <h3 class="card__body-rating">Rating: <span class="text-red">${restaurantRecord.rating}</span></h3>
              <h2 class="card__body-title">${restaurantRecord.name}</h2>
              <p class="card__body-description m-2 text-start">${restaurantRecord.description.slice(0, 100)} ...</p>
            </div>
          </a>
        </div>
      </div>
    `;
  },

  _templateEmptyCard() {
    return `
      <div class="card__header">
        <p>Tidak ada story</p>
      </div>
    `;
  },
};

export default Dashboard;
