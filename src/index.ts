import {lorep_ipsumConstants} from "./constants/lorep_ipsum.constants";
import {fromEvent} from "rxjs";

const text = document.createElement('div');
text.innerHTML = lorep_ipsumConstants;
const body = document.querySelector('body');
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(text);
body.append(progressBar);

//Streams

const scroll$ = fromEvent(document,'scroll');
// const scrollPorcentaje = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
// progressBar.style.width = scrollPorcentaje + '%';
const progress$ = scroll$.pipe(

)
progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}'%'` ;
});