// console.log("Hello!");
import './style.css';
import {pageLoad} from './pageload.js';
import {menuLoad} from './menuLoad.js';
import {aboutLoad} from './aboutLoad.js';
pageLoad();

let btnHome = document.querySelector("#btnHome");
btnHome.addEventListener('click', function(event) {
    pageLoad();
})

let btnMenu = document.querySelector("#btnMenu");
btnMenu.addEventListener('click', function(event) {
    menuLoad();
})

let btnAbout = document.querySelector("#btnAbout");
btnAbout.addEventListener('click', function(event) {
    aboutLoad();
})