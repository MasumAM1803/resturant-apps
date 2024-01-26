const Dashboard = {
    async init() {
      await this._initialData();
    },
  
    async _initialData() {
      const fetchRecords = await fetch('/data/DATA.json');
      const responseRecords = await fetchRecords.json();
      this._restaurants = responseRecords.restaurants;
      this._populateTransactionsRecordToTable(this._restaurants);
    },
  
    _populateTransactionsRecordToTable(restaurants = null) {
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
  
      const recordBodyTable = document.querySelector('#recordsTable tbody');
  
      recordBodyTable.innerHTML = '';
      if (restaurants.length <= 0) {
        recordBodyTable.innerHTML = this._templateEmptyBodyTable();
        return;
      }
  
      restaurants.forEach((item, idx) => {
        recordBodyTable.innerHTML += this._templateBodyTable(idx, restaurants[idx]);
      });
    },
  
  
    _templateBodyTable(index, transactionRecord) {
      return `
        <tr>
          <th class="text-center">${parseInt(index, 10) + 1}</th>
          <td>
            <img width="40" src="${transactionRecord.pictureId}" alt="${transactionRecord.name}" />
          </td>
          <td>${transactionRecord.name}</td>
          <td>${transactionRecord.description.slice(0, 100)}</td>
          <td>${transactionRecord.city}</td>
          <td>${transactionRecord.rating}</td>
          <td>
            <div class="d-flex justify-content-center align-items-center gap-2">
              <a class="btn btn-sm btn-primary" href="#"
                 data-bs-toggle="modal" data-bs-target="#recordDetailModal" 
                 data-record-id="${transactionRecord.id}">
                <i class="bi bi-eye-fill me-1"></i>Show
              </a>
              <a class="btn btn-sm btn-warning" href="/transactions/edit.html?id=${
                transactionRecord.id
              }">
                <i class="bi bi-pen-fill me-1"></i>Edit
              </a>
              <a class="btn btn-sm btn-danger" href="#">
                <i class="bi bi-trash3-fill me-1"></i>Delete
              </a>
            </div>
          </td>
        </tr>
      `;
    },
  
    _templateEmptyBodyTable() {
      const recordHeadTable = document.querySelector('#recordsTable thead');
  
      return `
        <tr>
          <td colspan="${recordHeadTable.querySelectorAll('td,th').length}">
            <div class="text-center">Tidak ada catatan transaksi</div>
          </td>
        </tr>
      `;
    },
  };
  
  export default Dashboard;
  