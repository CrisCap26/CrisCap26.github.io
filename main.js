const btnSwitch = document.querySelector('#dark');
const btnLight = document.querySelector('#light');
const btnBlack = document.querySelector('#black');

btnSwitch.addEventListener('click', () => {
    //Cambiar color de fondo del body
    document.body.classList.toggle('dark-mode');
    
    btnLight.classList.toggle('encendido');
    btnBlack.classList.toggle('apagado');

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


btn_menu.addEventListener('click', () => {
    
    icon_menu.classList.toggle('on');
    icon_close.classList.toggle('on');
    
    nav_menu.classList.toggle('on');

    if(icon_close.classList.contains('on')){
        document.getElementById('menu').style.top = '70%';
    } else {
        document.getElementById('menu').style.top = '-100%';
    }
});

//Obtener modo actual
if(localStorage.getItem('modo-dark') === 'true'){
    document.body.classList.add('dark-mode');
    btnBlack.classList.add('apagado');
    btnLight.classList.add('encendido');
  
} else {
    document.body.classList.remove('dark-mode');
    btnBlack.classList.remove('apagado');
    btnLight.classList.remove('encendido');
}




