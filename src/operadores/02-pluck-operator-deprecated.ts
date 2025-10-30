import {pluck} from "rxjs"
import {keyUp$} from "../observables/05-fromEvent";
import {observer} from "../helpers/observer";

// Deprecated
const keyUpPluck$ = keyUp$.pipe(
    pluck('target','baseURI') // reemplazo map(x => x?.key,
);

keyUpPluck$.subscribe(observer);