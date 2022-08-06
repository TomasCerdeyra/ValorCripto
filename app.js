const url = `https://api.binance.com/api/v3/ticker/price`;

async function api() {
    const res =  await fetch(url);
    const data = await res.json();
    
    console.log(data);
    pintarTabla(data);
    console.log(pintarTabla(data));
}

function pintarTabla(data) {
    celdas = ` `;
    for (let i = 0; i < data.length; i++) {
        celdas += `<td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
    }
    document.getElementById(`datos`).innerHTML = celdas;
}

api();