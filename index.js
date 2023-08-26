$(document).ready(async function(){
    //hide alert
    const apiUrl = getApiUrl();
    const ordersData = await getData(apiUrl);

    // console.log('ordersData: ', ordersData);

    fillBox("numberWaitingCount", ordersData.waitingCount);
    fillBox("numberInProgress", ordersData.inProgresCount);


    const inProgressOrders = ordersData.inProgressOrders;
    const waitingOrders = ordersData.waitingOrders

    createAllRows("inProgressContent", inProgressOrders)
    createAllRows("waitingContent", waitingOrders);
});

async function getData(url) {
    let result = await fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Błąd HTTP: ${res.status}`);
            // showAlert
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Błąd podczas pobierania danych z API:', error);
        
        const alertElement = document.querySelector('.alert');
        alertElement.style.display = 'block';
        alertElement.addEventListener('click', function() {
            // Ukryj alert po kliknięciu
            alertElement.style.display = 'none';
        });
        alertElement.addEventListener('mouseenter', function() {
            alertElement.style.cursor = 'pointer';
        });

        alertElement.addEventListener('mouseleave', function() {
            alertElement.style.cursor = 'auto';
        });
        
        // showAlert
    })

    return result;
}

function fillBox(id, count){
    $("#"+id).text(count);
}

function createTableRow(orderNumber, orderPositionNumber, quantity, shipDate) {
    const row = `<tr><th class="hidden">${orderNumber}</th><th>${orderPositionNumber}</th><th>${quantity}</th><th class="hidden-data">${new Date(shipDate).toLocaleDateString()}</th></tr>`;
    return row;
}

function createAllRows(id, orders) {
    let rows = '<tr><th class="hidden">Numer zlecenia</th><th>Numer pozycji</th><th>Ilość</th><th class="hidden-data">Data dostawy</th></tr>';
    orders.forEach(order => {
        rows += createTableRow(order.orderNumber, order.orderPositionNumber, order.quantity, order.shipDate);
    });
    // console.log('rows: ', rows);
    $("#"+id).html(rows);
}

function getApiUrl() {
    if (window.location.pathname === '/index.html') {
        return "https://localhost:7282/dashboards/getforsalesdepartmentm";
    } else if (window.location.pathname === '/prepare.html') {
        return "https://localhost:7282/dashboards/productionpreparationdepartment";
    } else if (window.location.pathname === '/production.html') {
        return "https://localhost:7282/dashboards/productiondepartment";
    } else if (window.location.pathname === '/quality.html') {
        return "https://localhost:7282/dashboards/qualitycontroldepartment";
    } else if (window.location.pathname === '/packing.html') {
        return "https://localhost:7282/dashboards/packingdepartment";
    }
}