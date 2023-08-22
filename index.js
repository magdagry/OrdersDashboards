$(document).ready(function(){

    console.log('Jest OK!');
});

fetch("https://localhost:7282/dashboards/getforsalesdepartment")
.then(res => {
    if (!res.ok) {
        throw new Error(`Błąd HTTP: ${res.status}`);
    }
    return res.json();
})
    .then(data => {
        const waitingOrderCount = data.waitingCount;
        const inProgresCount = data.inProgresCount; 
        console.log(waitingOrderCount);

        const numberInProgressElement = document.getElementById("numberInProgress")
        numberInProgressElement.textContent = waitingOrderCount;

        const numberWaitingCountElement = document.getElementById("numberWaitingCount")
        numberWaitingCountElement.textContent = inProgresCount;

    })

    
        // const $box1 = document.getElementById("box1")
        // $box1.textContent = 'opracowywane zamówienia: ${inProgresCount}';
    // })
    .catch(error => {
        console.error('Błąd podczas pobierania danych z API:', error);
})



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