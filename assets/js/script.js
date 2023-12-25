'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);


window.onload=function(){
(function(d){/*  FUNZIONE EVENTI SWIPE DESTRA SINISTRA SU GIU'*/
 var
 ce=function(e,n){var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);e.target.dispatchEvent(a);a=null;return false},
 nm=true,sp={x:0,y:0},ep={x:0,y:0},
 touch={
  touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
  touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
  touchend:function(e){if(nm){ce(e,'fc')}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?'swl':'swr'):(y<0?'swu':'swd')))}};nm=true},
  touchcancel:function(e){nm=false}
 };
 for(var a in touch){d.addEventListener(a,touch[a],false);}
})(document);
var h=function(e){console.log(e.type,e)};
document.body.addEventListener('fc',h,false);// 0-50ms vs 500ms with normal click
    /*SWIPE A DESTRA*/
    document.getElementById('slider-cont').addEventListener('swr',mySlideRight,false);
    /*SWIPE A SINISTRA*/
document.getElementById('slider-cont').addEventListener('swl',mySlideLeft,false);
/*document.body.addEventListener('swu',h,false);
document.body.addEventListener('swd',h,false);*/
}
function mySlideRight(){
    /*SE SWIPE SULLA DESTRA*/
        /*Seleziona tutte le immagini della slide*/
        var sli=document.getElementsByClassName('cont-slider');
    for(var i=0;i<sli.length;i++){
        /*Se è la prima immagine, diventa l'ultima*/
        if(sli[i].id=="ext-1"){sli[i].id='ext-4'}else{
            /*Se non è la prima immagine...*/
        var eid=sli[i].id;
        var strnum = eid.match(/\d+$/)[0];
        var num=parseInt(strnum);
            /*...scorre indietro di uno*/
            strnum--;
        sli[i].id='ext-'+strnum;
        }
    }
    
}
function mySlideLeft(){
    /*SE SWIPE SULLA SINISTRA*/
        /*Seleziona tutte le immagini della slide*/
    var sli=document.getElementsByClassName('cont-slider');
    for(var i=0;i<sli.length;i++){
        /*Se è l'ultima immagine, diventa la prima*/
        if(sli[i].id=="ext-4"){sli[i].id='ext-1'}else{
            /*Se non è l'ultima immagine...*/
        var eid=sli[i].id;
        var strnum = eid.match(/\d+$/)[0];
        var num=parseInt(strnum);
            /*...scorre avanti di unos*/
            strnum++;
        sli[i].id='ext-'+strnum;
        }
    }
}
function selectSliderElement(e){
    /*Se viene cliccato un elemento della slider, viene in primo piano*/
    var idd=e.id;
    var numstr = idd.match(/\d+$/)[0];
    var numid=parseInt(numstr);
    var sli=document.getElementsByClassName('cont-slider');
    if(numid==1){}else{
        var times=9-numid;
        for (var z=0;z<times;z++)
        for(var i=0;i<sli.length;i++){
        /*Se è l'ultima immagine, diventa la prima*/
        if(sli[i].id=="ext-4"){sli[i].id='ext-1'}else{
            /*Se non è l'ultima immagine...*/
        var eid=sli[i].id;
        var strnum = eid.match(/\d+$/)[0];
        var num=parseInt(strnum);
            /*...scorre avanti di unos*/
            strnum++;
        sli[i].id='ext-'+strnum;
        }
    }}
    }
