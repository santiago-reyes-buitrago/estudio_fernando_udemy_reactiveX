import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {map, sampleTime, tap} from "rxjs";

mousekey$.pipe(
    tap(x => console.log(x)),
    sampleTime(2000),
    map(({x,y}) => ({x,y})),
).subscribe(observer)