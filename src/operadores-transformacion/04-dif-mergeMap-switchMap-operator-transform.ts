import {mousekey$} from "@observables/05-fromEvent";
import {interval$} from "@observables/07-interval-timer";
import {observer} from "@helpers/observer";
import {mergeMap, switchMap} from "rxjs";

mousekey$.pipe(
    // mergeMap(() => interval$)
    switchMap(() => interval$)
).subscribe(observer)
