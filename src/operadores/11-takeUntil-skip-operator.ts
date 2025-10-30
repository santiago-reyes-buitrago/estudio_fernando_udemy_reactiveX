import {fromEvent, skip, takeUntil, tap} from "rxjs";
import {interval$} from "@observables/07-interval-timer";
import {observer} from "@helpers/observer";

const button = document.createElement('button');
button.innerHTML = 'Detener Timer';

document.body.appendChild(button);

// const click$btns = fromEvent(button,'click');
const click$btns = fromEvent(button,'click').pipe(
    tap(() => console.log('Antes del skip')),
    skip(10),
    tap(() => console.log('Despues del skip')),
);
interval$.pipe(
    takeUntil(click$btns)
).subscribe(observer)