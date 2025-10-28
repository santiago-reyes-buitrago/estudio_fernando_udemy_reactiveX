import {map} from "rxjs"
import {keyUp$} from "../observables/05-fromEvent";
import {observer} from "../helpers/observer";


const keyUpMap$ = keyUp$.pipe(map(value => value.code));

keyUpMap$.subscribe(observer);