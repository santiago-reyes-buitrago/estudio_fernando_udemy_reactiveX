import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {map, takeWhile} from "rxjs";

mousekey$.pipe(
    map(({x,y}) => ({x,y})),
    // takeWhile(({y}) => y <= 150)
    takeWhile(({y}) => y <= 150, true)
).subscribe(observer)