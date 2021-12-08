// Simulacion de tienda virtual mediante prompt

let vehiculo;
let modelo;
let producto;

let vehiculo1;
let modelo1;
let producto1;

let vehiculo2;
let modelo2;
let producto2;

let vehiculo3;
let modelo3;
let producto3;

function mensajeBienvenida(){
    return prompt(`Bienvenidos a la tienda online de Weskan. Seleccione un numero:
                        1- Comprar (Puede comprar hasta 3 productos)
                        2- Ver Carrito
                        3- Finzalizar Compra`);
}

function comprar(a, b, c){
    let salir = 0;
    while(salir == 0){
        let opcion = prompt(`Seleccione un numero:
                            1- ${a}
                            2- ${b}
                            3- ${c}`)
        switch(opcion){
            case '1':
                salir = 1;
                return a;
                break;
            case '2':
                salir = 1;
                return b;
                break;
            case '3':
                salir = 1;
                return c;
                break;
            default:
                break
        }
    }
}

function mostrarProducto(num){
    switch(num){
        case 1:
            return console.log(`Producto: ${producto1} de ${modelo1} para ${vehiculo1}`);

        case 2:
            return console.log(`Producto: ${producto2} de ${modelo2} para ${vehiculo2}`);

        case 3:
            return console.log(`Producto: ${producto3} de ${modelo3} para ${vehiculo3}`);

        default:
            return;
    }
}

function asignarProducto(posicion){
    switch(posicion){
        case 0:
            vehiculo1 = vehiculo;
            modelo1 = modelo;
            producto1 = producto;
            break;

        case 1:
            vehiculo2 = vehiculo;
            modelo2 = modelo;
            producto2 = producto;
            break;

        case 2:
            vehiculo3 = vehiculo;
            modelo3 = modelo;
            producto3 = producto;
            break;
    }
    return;
}

let i = 0;
let salir = 0;
while((i <=2) && salir == 0){
    switch(mensajeBienvenida()){
        case '1':
            vehiculo = comprar("Auto", "Moto","-");
            if(vehiculo == 'Auto'){
                modelo = comprar("BMW", "Mercedes Benz","-");
                producto = comprar("Asiento de valvula", "Guia de Valvula", "Valvula");
            }
            else{
                modelo = comprar("Yamaha", "Kawasaki","-");
                producto = comprar("Asiento de valvula", "Guia de Valvula", "Valvula");
            }
            asignarProducto(i);
            i++;
            break;
        
        case '2':
            for(let j = 0; j <= i; j++){
                mostrarProducto(j);
            }
            break;

        case '3':
            salir = 1;
            break;
    }
}

for(let k = 0; k<= i; k++){
    mostrarProducto(k);
}
