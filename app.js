const url = `https://api.binance.com/api/v3/ticker/price`;

async function api() {
    const res =  await fetch(url);
    const data = await res.json();
    
    pintarTabla(data);
    BuscarCripto(data)

}

function pintarTabla(data) {
    celdas = ` `;
    for (let i = 0; i < data.length; i++) {
        celdas += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
    }
    document.getElementById(`datos`).innerHTML = celdas;
}

function BuscarCripto(data) {

    const monedas = document.getElementsByTagName(`tr`)
    const buscador = document.getElementById(`buscador`);

    buscador.addEventListener("keyup", ()=>{
        let texto = buscador.value;

        //Para coparar la cadena ingresada y la "i" para que no distinga entre mayusculas y minuscula
        let coparar = new RegExp(texto, "i");

        for (let i = 0; i < monedas.length; i++) {
            //valor de la moneda (texto)
            let valor =monedas[i];
            //console.log(valor);
            //el .test nos da un boleano si la cadena es igual o o
            if (coparar.test(valor.innerText)) {
                valor.classList.remove(`ocultar`);
            } else {
                console.log(valor);
                valor.classList.add(`ocultar`);
            }
            
        };
    })
    
}

//buscador
//const buscador = document.getElementById(`buscador`);


api();