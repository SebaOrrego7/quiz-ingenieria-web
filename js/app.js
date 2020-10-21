"use strict";
function menu(id) {
    if (id == 'electro') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en electro';
        document.body.style.backgroundColor = "#EC9312"; // naranjo cambiar color del fondo dependiendo donde se encuentra*/
        //document.body.style.backgroundColor = "#12EC90";// celeste
        // document.body.style.backgroundColor = "FF0087";// rosado
        //  document.body.style.backgroundColor = "F2EF0B";// amarillo
    }
    if (id == 'televisores') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en televisores';
        document.body.style.backgroundColor = "#EC9312"; // naranjo
    }
    if (id == 'audio') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en audio';
        document.body.style.backgroundColor = "#EC9312"; // naranjo
    }
    if (id == 'marca') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en marca destacada';
        document.body.style.backgroundColor = "#EC9312"; // naranjo
    }
    if (id == 'dormitorio') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en dormitorio';
        document.body.style.backgroundColor = "#12EC90"; // celeste
    }
    if (id == 'ropa') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en ropas de camas';
        document.body.style.backgroundColor = "#12EC90"; // celeste
    }
    if (id == 'camas') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en camas';
        document.body.style.backgroundColor = "#12EC90"; // celeste
    }
    if (id == 'muebles') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en muebles de dormitorio';
        document.body.style.backgroundColor = "#12EC90"; // celeste
    }
    if (id == 'colchones') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en colchones';
        document.body.style.backgroundColor = "#12EC90"; // celeste
    }
    if (id == 'mujer') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en mujer';
        document.body.style.backgroundColor = "#FF0087"; // rosado
    }
    if (id == 'ropadep') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en ropa deportiva para mujer';
        document.body.style.backgroundColor = "#FF0087"; // rosado
    }
    if (id == 'accesorios') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en accesorios para mujer';
        document.body.style.backgroundColor = "#FF0087"; // rosado
    }
    if (id == 'zapatos') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en zapatos para mujer';
        document.body.style.backgroundColor = "#FF0087"; // rosado
    }
    if (id == 'ofertas') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en oferta para mujer';
        document.body.style.backgroundColor = "#FF0087"; // rosado
    }
    if (id == 'hombre') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en hombre';
        document.body.style.backgroundColor = "#FFFC00"; // amarillo
    }
    if (id == 'ropadephombre') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en ropa deportiva de hombre';
        document.body.style.backgroundColor = "#FFFC00"; // amarillo
    }
    if (id == 'zapatoshombre') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en zapatos de hombre';
        document.body.style.backgroundColor = "#FFFC00"; // amarillo
    }
    if (id == 'ofertashombre') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en las ofertas para hombre';
        document.body.style.backgroundColor = "#FFFC00"; // amarillo
    }
    if (id == 'accesorioshombre') {
        document.getElementById("imprimir").innerHTML = 'Usted se encuentra en accesorios para hombre';
        document.body.style.backgroundColor = "#FFFC00"; // amarillo
    }
}
