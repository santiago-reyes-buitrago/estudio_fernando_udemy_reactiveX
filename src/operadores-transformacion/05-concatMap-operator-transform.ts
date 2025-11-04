import {interval$} from "@observables/07-interval-timer";
import {concatMap, take} from "rxjs";
import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";

interval$.pipe(take(3))
mousekey$.pipe(
    concatMap(() => interval$)
).subscribe(observer)