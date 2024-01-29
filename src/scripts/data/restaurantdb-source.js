// import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  //   static async home() {
  //     const response = await fetch(API_ENDPOINT.HOME);
  //     const responseJson = await response.json();
  //     return responseJson.results;
  //   }

  //   static async detailMovie(id) {
  //     const response = await fetch(API_ENDPOINT.DETAIL(id));
  //     return response.json();
  //   }

  static async home() {
    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    return responseRecords.restaurants;
  }

  static async detail(id) {
    if (!id) {
      alert('Data dengan id yang dicari tidak ditemukan');
      return;
    }

    const fetchRecords = await fetch('/data/DATA.json');
    const responseRecords = await fetchRecords.json();
    const restaurantRecord = responseRecords.restaurants;
    const dataRecord = restaurantRecord.find((item) => `id=${item.id}` === id);
    return dataRecord;
  }
}

export default RestaurantDbSource;
