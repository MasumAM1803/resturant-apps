/* eslint-disable import/prefer-default-export */
// import CONFIG from '../../globals/config';

const createCardTemplate = (restaurantRecord, pictureId) => `
    <div class="col-12 col-md-6 mt-3">
        <div class="card">
            <a class="" href="/#/detail/id=${restaurantRecord.id}">
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

const createCardDetail = (restaurantRecord, pictureId) => `
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

export { createCardTemplate, createCardDetail };
