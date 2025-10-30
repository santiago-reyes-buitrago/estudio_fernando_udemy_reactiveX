import {fromEvent, map} from "rxjs";
import {lorep_ipsumConstants} from "../constants/lorep_ipsum.constants";

interface paramCalculateProgressBar {
    scrollTop: number;
    scrollHeight: number
    clientHeight: number;
}

const text = document.createElement('div');
text.innerHTML = lorep_ipsumConstants;
const body = document.querySelector('body');
const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(text);
body.append(progressBar);

const calculateProgressBar = (params:paramCalculateProgressBar):number => {
    const {clientHeight=null,scrollHeight=null,scrollTop=null} = params;
    const error = []
    for (const param of Object.keys(params)) {
        if (!(+params[param]))  error.push(`Falta ${param}`);
    }
    if (error.length > 0) {
        console.log(error.join(' '));
        return ;
    }
    return (scrollTop / (scrollHeight - clientHeight)) * 100
}

//Streams
const scroll$ = fromEvent(document,'scroll');
// const scrollPorcentaje = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
// progressBar.style.width = scrollPorcentaje + '%';
const progress$ = scroll$.pipe(
    map((event) => {
        return calculateProgressBar({
            clientHeight: (event as any).target.documentElement.clientHeight,
            scrollHeight: (event as any).target.documentElement.scrollHeight,
            scrollTop: (event as any).target.documentElement.scrollTop
        });
    })
)
progress$.subscribe(porcentaje => {
    console.log(`${porcentaje}%`);
    progressBar.style.width = `${porcentaje}%` ;
});