const url = `https://api.binance.com/api/v3/ticker/price`;

//agarro la api
async function api() {
    const res =  await fetch(url);
    const data = await res.json();
    
    //le paso la data a las funciones
    pintarTabla(data);
    BuscarCripto(data)

}

//fncion para pintar la tabla
function pintarTabla(data) {

    let celdas = ` `;
    //por cada moneda hago una celda con su nombre y precio
    for (let i = 0; i < data.length; i++) {
        celdas += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
    }
    //meto a celdas adentro de datos
    document.getElementById(`datos`).innerHTML = celdas;
}

//funcion para buscar una moneda
function BuscarCripto(data) {

    //agarro a la etiqueta tr para mostarla y sacarla 
    const monedas = document.getElementsByTagName(`tr`)
    const buscador = document.getElementById(`buscador`);

    buscador.addEventListener("keyup", ()=>{
        let texto = buscador.value;

        //Para coparar la cadena ingresada y la "i" para que no distinga entre mayusculas y minuscula
        let coparar = new RegExp(texto, "i");

        //paso el valor de moneda a la variable valor y si coincide con la variable comparar que muestre sino que oculte
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


api();