import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {debounceTime, tap} from "rxjs";

mousekey$.pipe(
    tap(()=> console.log('click')),
    debounceTime(1000)
).subscribe(observer)