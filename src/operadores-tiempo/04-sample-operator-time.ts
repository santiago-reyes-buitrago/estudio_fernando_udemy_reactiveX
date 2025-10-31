import {interval$} from "@observables/07-interval-timer";
import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {sample, takeWhile} from "rxjs";

interval$.pipe(
    sample(mousekey$),
    takeWhile(x => x < 10)
).subscribe(observer);