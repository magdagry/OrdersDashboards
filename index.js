const apiUrl = "https://localhost:7282/dashboards/getforsalesdepartment";

$(document).ready(async function(){

    console.log('Jest OK!');

    const ordersData = await getData(apiUrl);

    console.log('ordersData: ', ordersData);

    fillBox("numberWaitingCount", ordersData.waitingCount);
    fillBox("numberInProgress", ordersData.inProgresCount);


    const inProgressOrders = ordersData.inProgressOrders;
   

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
    const row = `<tr><th class="hidden">${orderNumber}</th><th>${orderPositionNumber}</th><th>${quantity}</th><th class="hidden-data">${shipDate}</th></tr>`;
    return row;
}



// fetch(apiUrl)
// .then(res => {
//     if (!res.ok) {
//         throw new Error(`Błąd HTTP: ${res.status}`);
//     }
//     console.log('res: ', res);
//     return res.json();
// })
//     .then(data => {
//         console.log('data: ', data);
//         const waitingOrderCount = data.waitingCount;
//         const inProgresCount = data.inProgresCount; 
//         console.log(waitingOrderCount);

//         const numberInProgressElement = document.getElementById("numberInProgress")
//         numberInProgressElement.textContent = waitingOrderCount;

//         const numberWaitingCountElement = document.getElementById("numberWaitingCount")
//         numberWaitingCountElement.textContent = inProgresCount;

//         const table = document.getElementById("myTable");
//         data.waitingOrders.forEach(order => {
//         const row = table.insertRow();
//         const orderNumberCell = row.insertCell(0);
//         const quantityCell = row.insertCell(2);
//         const shipDateCell = row.insertCell(3);


//         orderNumberCell.textContent = order.orderNumber;
//         orderPositionNumberCell.textContent = order.orderPositionNumber;
//         quantityCell.textContent = order.quantity;
//         shipDateCell.textContent = order.shipDate;
//     })  
//         // const $box1 = document.getElementById("box1")
//         // $box1.textContent = 'opracowywane zamówienia: ${inProgresCount}';
//     // })
//     .catch(error => {
//         console.error('Błąd podczas pobierania danych z API:', error);
// })


// })



// Adres api:
// https://localhost:7282/dashboards/getforsalesdepartment

// Zwracane dane z api:

//   {
//     "waitingOrders": [ // Tablica oczekujących zleceń - tabela
//       {
//         "id": 2,
//         "orderNumber": "0000000001",
//         "orderPositionNumber": "0000000002",
//         "quantity": 1,
//         "status": 1,
//         "shipDate": "2023-08-28T19:53:23.735316"
//       },
//       {
//         "id": 3,
//         "orderNumber": "0000000001",
//         "orderPositionNumber": "0000000003",
//         "quantity": 1,
//         "status": 1,
//         "shipDate": "2023-08-28T19:53:23.735317"
//       }
//     ],
//     "inProgressOrders": [ // Tablica opracowywanych zleceń - tabela
//       {
//         "id": 4,
//         "orderNumber": "0000000001",
//         "orderPositionNumber": "0000000004",
//         "quantity": 1,
//         "status": 2,
//         "shipDate": "2023-08-28T19:53:23.735318"
//       },
//       {
//         "id": 5,
//         "orderNumber": "0000000001",
//         "orderPositionNumber": "0000000005",
//         "quantity": 1,
//         "status": 2,
//         "shipDate": "2023-08-28T19:53:23.735319"
//       },
//       {
//         "id": 6,
//         "orderNumber": "0000000001",
//         "orderPositionNumber": "0000000006",
//         "quantity": 1,
//         "status": 2,
//         "shipDate": "2023-08-28T19:53:23.735321"
//       }
//     ],
//     "waitingCount": 2, // Liczba oczekujących zleceń - kafelek
//     "inProgresCount": 3 // Liczba opracowywanych zleceń - kafelek
//   }