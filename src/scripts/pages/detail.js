const Detail = {
  async init() {
    await this._initialData();
  },

  async _initialData() {
    const restaurantId = this._getRestaurantId();

    if (!restaurantId) {
      alert('Data dengan name yang dicari tidak ditemukan');
      return;
    }

    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    const restaurantRecord = responseRecords.restaurants;

    const dataRecord = restaurantRecord.find((item) => item.id === restaurantId);

    this._populateStoriesData(dataRecord);
  },

  _getRestaurantId() {
    const searchParamDetail = new URLSearchParams(window.location.search);
    return searchParamDetail.has('id') ? searchParamDetail.get('id') : null;
  },

  _populateStoriesData(restaurantRecord = null, pictureId = '') {
    if (!(typeof restaurantRecord === 'object')) {
      throw new Error(
        `Parameter userProfile should be an object. The value is ${restaurantRecord}`,
      );
    }

    const recordCard = document.querySelector('#dataUser');

    recordCard.innerHTML = '';
    if (restaurantRecord.length <= 0) {
      recordCard.innerHTML = this._templateEmptyCard();
      return;
    }

    if (restaurantRecord.pictureId == null) {
      pictureId = 'https://dummyimage.com/500x750/cccccc/000000&text=No+Poster';
    } else {
      pictureId = restaurantRecord.pictureId;
    }
    return recordCard.innerHTML = `
      <div class="container detail-section">
          <div class="detail-container row">
          <div class="col-12 detail-title">
              <h2>${restaurantRecord.name}</h2>
              <h2>(${restaurantRecord.city})</h2>
          </div>
          <div class="content">
              <div class="detail-image">
                <img src="${pictureId}" alt="${restaurantRecord.name}-images" />
              </div>
              <p class="detail-rating">Rating: <span class="text-red">${restaurantRecord.rating}</span></p>
              <p class="detail-description">${restaurantRecord.description}</p>
          </div>
          </div>
      </div>
    `;
  },

  _templateEmptyCard() {
    return `
      <p>Restaurant Tidak ditemukan</p>
    `;
  },
};

export default Detail;
