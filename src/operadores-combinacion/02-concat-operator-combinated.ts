import {interval$} from "@observables/07-interval-timer";
import {concat, take} from "rxjs";
import {observer} from "@helpers/observer";

concat(interval$.pipe(take(3)), interval$.pipe(take(5)))
    .subscribe(observer)
