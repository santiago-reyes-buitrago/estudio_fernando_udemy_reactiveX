import {interval$} from "@observables/07-interval-timer";
import {concatMap, take} from "rxjs";
import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";

mousekey$.pipe(
    concatMap(() => interval$.pipe(take(3)))
).subscribe(observer)