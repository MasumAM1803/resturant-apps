import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async home() {
    const response = await fetch(API_ENDPOINT.HOME);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    if (!id) {
      alert('Data dengan id yang dicari tidak ditemukan');
      return;
    }

    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default RestaurantDbSource;
