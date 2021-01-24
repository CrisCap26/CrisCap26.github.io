

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
    if(caja.classList.contains('box-style')){
        caja.classList.add('box-dark');
        caja.classList.remove('box-style');
    } else {
        caja.classList.add('box-style');
        caja.classList.remove('box-dark');
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

    //Guardar el mode en LocalStorage
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('modo-dark', 'true');
    
    } else {
        localStorage.setItem('modo-dark','false');
}
    
});

const btn_menu = document.querySelector('#btn-menu');
const icon_menu = document.querySelector('#icon-menu');
const icon_close = document.querySelector('#close');
const nav_menu = document.querySelector('#menu');
/* btnLight.classList.toggle('encendido');
btn_menu.addEventListener('click', () => {
    icon_menu.classList.toggle('apagado');
    icon_close.classList.toggle('encendido');
});*/

btn_menu.addEventListener('click', () => {
    
    icon_menu.classList.toggle('on');
    icon_close.classList.toggle('on');
    
    nav_menu.classList.toggle('on');
});

//Obtener modo actual
if(localStorage.getItem('modo-dark') === 'true'){
    document.body.classList.add('dark-mode');
    
    
    btnBlack.classList.add('apagado');
    btnLight.classList.add('encendido');
    caja.classList.add('box-dark');
    caja.classList.remove('box-style');
    in_0.classList.add('style-input-dark');
    in_0.classList.remove('style-input');
    in_1.classList.add('style-input-dark');
    in_1.classList.remove('style-input');
    in_2.classList.add('style-input-dark');
    in_2.classList.remove('style-input');
} else {
    document.body.classList.remove('dark-mode');
    
    
    btnBlack.classList.remove('apagado');
    btnLight.classList.remove('encendido');
    caja.classList.remove('box-dark');
    caja.classList.add('box-style');
    in_0.classList.remove('style-input-dark');
    in_0.classList.add('style-input');
    in_1.classList.remove('style-input-dark');
    in_1.classList.add('style-input');
    in_2.classList.remove('style-input-dark');
    in_2.classList.add('style-input');
}




