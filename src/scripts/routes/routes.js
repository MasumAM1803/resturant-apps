import Home from '../pages/home';
import Detail from '../pages/detail';
import Like from '../pages/like';

const routes = {
  '/': Home,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
