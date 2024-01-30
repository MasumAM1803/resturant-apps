import CONFIG from '../globals/config';
import NotificationHelper from './notification-helper';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurant = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${restaurant.title} is on cinema!`,
      options: {
        body: restaurant.overview,
        image: `${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}`,
      },
    });
  },
};
export default WebSocketInitiator;
