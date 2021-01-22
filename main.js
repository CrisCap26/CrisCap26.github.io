'use strict'

const btnSwitch = document.querySelector('#dark');
const btnLight = document.querySelector('#light');
const btnBlack = document.querySelector('#black');
let li_0 = document.querySelector('#li-0');
let li_1 = document.querySelector('#li-1');
let caja = document.querySelector('#box');
let in_0 = document.querySelector('#in-0');
let in_1 = document.querySelector('#in-1');
let in_2 = document.querySelector('#in-2');


btnSwitch.addEventListener('click', () => {
    //Cambiar color de fondo del body
    document.body.classList.toggle('dark-mode');
    
    btnLight.classList.toggle('encendido');
    btnBlack.classList.toggle('apagado');
    //Cambiar color de fondo del div box
    if(caja.className == 'box-style'){
        caja.className = 'box-dark';
    } else {
        caja.className = 'box-style';
    }

    //Cambiar color de fondo de los input
    if(in_0.className == 'style-input' && in_1.className == 'style-input' && 
        in_2.className == 'style-input'){

        in_0.className = 'style-input-dark';
        in_1.className = 'style-input-dark';
        in_2.className = 'style-input-dark';
    } else {
        in_0.className = 'style-input';
        in_1.className = 'style-input';
        in_2.className = 'style-input';
    }
    
});

