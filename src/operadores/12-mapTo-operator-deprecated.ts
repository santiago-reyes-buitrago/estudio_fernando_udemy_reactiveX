import {keyUp$} from "../observables/05-fromEvent";
import {mapTo} from "rxjs";
import {observer} from "../helpers/observer";

// Deprecated
const keyUpMapTo$ = keyUp$.pipe(
    mapTo('Tecla Presionada') // reemplazo map(() => value),
);

keyUpMapTo$.subscribe(observer);