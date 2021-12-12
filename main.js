// Simulacion de tienda virtual mediante prompt

class Producto{
    constructor(sku, vehiculo, marca, autoparte, stock, precio){
        this.sku = sku;
        this.vehiculo = vehiculo;
        this.marca = marca;
        this.autoparte = autoparte;
        this.stock = stock;
        this.precio = precio;
    }
}

const productoA = new Producto(1,"Auto", "Mercedes Benz", "Asiento de valvula", 100, 1500);
const productoB = new Producto(2,"Auto", "Mercedes Benz", "Guia de valvula", 100, 1000);
const productoC = new Producto(3,"Auto", "Mercedes Benz", "Valvula", 100, 2500);
const productoD = new Producto(4,"Auto", "BMW", "Asiento de valvula", 100, 1800);
const productoE = new Producto(5,"Auto", "BMW", "Guia de valvula", 100, 900);
const productoF = new Producto(6,"Auto", "BMW", "Valvula", 100, 2000);
const productoG = new Producto(7,"Moto", "Yamaha", "Asiento de valvula", 100, 600);
const productoH = new Producto(8,"Moto", "Yamaha", "Guia de valvula", 100, 500);
const productoI = new Producto(9,"Moto", "Yamaha", "Valvula", 100, 800);
const productoJ = new Producto(10,"Moto", "Kawasaki", "Asiento de valvula", 100, 700);
const productoK = new Producto(11,"Moto", "Kawasaki", "Guia de valvula", 100, 600);
const productoL = new Producto(12,"Moto", "Kawasaki", "Valvula", 100, 900);

let productos = [];
const listaProductos = [productoA,productoB,productoC,productoD,productoE,productoF,productoG,productoH,productoI,productoJ,productoK,productoL];

const opciones = ['Comprar','Ver Productos','Finzalizar Compra'];
const vehiculos = ['Auto', 'Moto'];
const marcasAutos = ['BMW','Mercedes Benz'];
const marcasMotos = ['Yamaha','Kawasaki'];
const marcas = [marcasAutos, marcasMotos];
const autopartes = ['Asiento de valvula','Guia de valvula', 'Valvula'];

function devolverProducto(a, b, c){
    let filtroA = listaProductos.filter(producto => producto.vehiculo == a);
    let filtroB = filtroA.filter(producto => producto.marca == b);
    let filtroC = filtroB.filter(producto => producto.autoparte == c);
    return filtroC;
}

function devolverNombre(num, lista){
    return lista[num-1];
}

function comprar(){
    let numeroA = parseInt(prompt(`Seleccione:
                                            1- ${vehiculos[0]}
                                            2- ${vehiculos[1]}`));
    let vehiculoElegido = devolverNombre(numeroA, vehiculos);
    console.log(vehiculoElegido);
    let numeroB = parseInt(prompt(`Seleccione:
                                    1- ${marcas[numeroA-1][0]}
                                    2- ${marcas[numeroA-1][1]}`));
    let marcaElegida = devolverNombre(numeroB,marcas[numeroA-1]);
    console.log(marcaElegida);
    let numeroC = parseInt(prompt(`Seleccione:
                                            1- ${autopartes[0]}
                                            2- ${autopartes[1]}
                                            3- ${autopartes[2]}`));
    let autoparteElegida = devolverNombre(numeroC, autopartes);
    console.log(autoparteElegida);
    let productoElegido = devolverProducto(vehiculoElegido, marcaElegida, autoparteElegida);
    console.log(productoElegido);
    return productoElegido;
    
}

function mostrarProductos(){
    for(let i = 0; i < cantidad; i++){
        console.log(productos[i]);
    }
    return;
}

let salir = 0;
let cantidad = 0;
while((cantidad <= 2) && (salir == 0)){
    let opcion = prompt(`Bienvenido a la tienda online. Seleccione un numero (max 3 items):
                            1- ${opciones[0]}
                            2- ${opciones[1]}
                            3- ${opciones[2]}`);
    console.log(opcion);
    switch(opcion){
        case '1':
            productos[cantidad] = comprar();
            cantidad ++;
            break;

        case '2':
            mostrarProductos();
            break;

        case '3':
            salir = 1;
            break;
    }
}

mostrarProductos();
