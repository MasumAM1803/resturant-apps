/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
// import CONFIG from '../../globals/config';

const createCardTemplate = (restaurantRecord, pictureId) => `
    <div class="col-12 col-md-6 mt-3">
        <div class="card">
            <a class="card__link" href="/#/detail/id=${restaurantRecord.id}">
                <div class="card__header">
                <h2 class="card__header-city">${restaurantRecord.city}</h2>
                <img class="card__header-image lazyload" data-src="${pictureId}" alt="${restaurantRecord.name}-images">
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

const createCardDetail = (restaurantRecord, pictureId) => `
    <div class="container detail-section">
        <div class="detail-container row">
            <div class="col-12 detail-title">
                <h2>${restaurantRecord.name}</h2>
                <h2>(${restaurantRecord.city})</h2>
            </div>
            <div class="content">
                <div class="detail-image">
                    <img class="lazyload" data-src="${pictureId}" alt="${restaurantRecord.name}-images" />
                </div>
                <p class="detail-rating">Rating: <span class="text-red">${restaurantRecord.rating}</span></p>
                <p class="detail-rating">Address: ${restaurantRecord.address}</p>
                <p class="detail-description">${restaurantRecord.description}</p>
                <h3 class="detail__card-title">${restaurantRecord.name} Menu</h3>
                <div class="card h-fit rounded-default">
                    <div class="row justify-space-evenly p-2">
                        <div>
                            <h2>Food</h2>
                            <ul class="list-item">
                                ${createTableBodyTemplate(restaurantRecord.menus.foods)}
                            </ul>
                        </div>
                        <div>
                            <h2>Drink</h2>
                            <ul class="list-item">
                                ${createTableBodyTemplate(restaurantRecord.menus.drinks)}
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card h-fit border-none mt-4">
                    <h3 class="detail__card-title">Reviews</h3>
                    <ul class="list-item max-h-600 overflow-y-auto">
                        ${createCardReviewTemplate(restaurantRecord.customerReviews)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
`;

const createTableBodyTemplate = (menus) => {
  let html = '';
  menus.forEach((menu) => {
    html += `
        <li>${menu.name}</li>
    `;
    return html;
  });
  return html;
};

const createCardReviewTemplate = (reviews) => {
  let html = '';
  reviews.forEach((review) => {
    html += `
          <li>
            <div class="card p-2 rounded-default">
                <h3>${review.name}</h3>
                <h4>${review.date}</h4>
                <p>${review.review}</p>
            </div>
          </li>
      `;
    return html;
  });
  return html;
};

const createEmptyCardTemplate = () => `
    <div class="col-12 col-md-6 mt-3">
        <div class="restaurant-item__not__found">
            <p>Restaurant Not Found</p>
        </div>
    </div>
`;

export {
  createCardTemplate,
  createCardDetail,
  createTableBodyTemplate,
  createCardReviewTemplate,
  createEmptyCardTemplate,
};
