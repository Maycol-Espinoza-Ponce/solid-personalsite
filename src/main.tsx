import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'

import { A, Routes, Route, Router } from "@solidjs/router"
import { Editor } from './editor'

import { JSX } from 'solid-js';
import { saveAs } from 'file-saver';


//---------------------------------------------------FUNTION OF THE DOWNLOAD BOTTON-------------------------------------------------------------------
const downloadBtn = document.getElementById('download-btn') as HTMLButtonElement;

downloadBtn.addEventListener('click', () => {
    // Código para descargar el archivo
    const contenido = 'Este es el contenido que deseas descargar';
    const blob = new Blob([contenido], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    a.download = 'my-cv-file.txt';

    a.dispatchEvent(new MouseEvent('click'));
});
//--------------------------------------------------END OF THE FUNCION DOWNDLOAD BOTTON-------------------------------------------------------------------


const button = document.querySelector('button[aria-controls="mobile-menu"]');
const menu = document.querySelector('#mobile-menu');

    button?.addEventListener('click', () => {
        
    // Cambia el icono del botón
    button.querySelector('svg:first-child')?.classList.toggle('hidden');
    button.querySelector('svg:last-child')?.classList.toggle('hidden');

    menu?.classList.toggle('hidden');
    menu?.classList.toggle('block');
});


  
/* error null 
2 caminos
1. ! no es nulo 
2. ? puede que no sea nulo

probar cada uno, en caso de que no se vaya el error
*/