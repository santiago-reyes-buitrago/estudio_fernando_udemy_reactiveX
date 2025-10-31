import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {auditTime, map, tap} from "rxjs";


mousekey$.pipe(
    map(({x}) => x),
    tap(event => console.log('Tap: ',event)),
    auditTime(1000),
).subscribe(observer)