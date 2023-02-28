import './index.css'
import { createSignal, Component, JSXElement } from 'solid-js'
import { render } from 'solid-js/web'

import { A, Routes, Route, Router } from "@solidjs/router"
import { Editor } from './editor'






                    const button = document.querySelector('button_menu[aria-controls="mobile-menu"]');
                    const menu = document.querySelector('#mobile-menu');
                  
                    button.addEventListener('click', () => {
                      // Cambia el icono del botón
                      button.querySelector('svg:first-child').classList.toggle('hidden');
                      button.querySelector('svg:last-child').classList.toggle('hidden');
                  
                      menu.classList.toggle('hidden');
                      menu.classList.toggle('block');
                    });
               