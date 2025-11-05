import {keyUp$, mousekey$} from "@observables/05-fromEvent";
import {map, merge} from "rxjs";
import {observer} from "@helpers/observer";

merge(keyUp$.pipe(map(event => event.code)), mousekey$.pipe(map(event => event.x))).subscribe(observer);