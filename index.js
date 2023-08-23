const apiUrl = "https://localhost:7282/dashboards/getforsalesdepartment";

$(document).ready(async function(){

    console.log('Jest OK!');

    const ordersData = await getData(apiUrl);

    console.log('ordersData: ', ordersData);

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
        }
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.error('Błąd podczas pobierania danych z API:', error);
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
    console.log('rows: ', rows);
    $("#"+id).html(rows);
}
