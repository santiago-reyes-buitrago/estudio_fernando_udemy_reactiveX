import {observer} from "@helpers/observer";
import {first, map, tap} from "rxjs";
import {mousekey$} from "@observables/05-fromEvent";

mousekey$.pipe(
    // take(1)
    tap<MouseEvent>(console.log),
    map<MouseEvent,{clientY,clientX}>(({clientY,clientX}) => ({clientY,clientX})),
    first(event => event.clientY > 150)
).subscribe(observer)