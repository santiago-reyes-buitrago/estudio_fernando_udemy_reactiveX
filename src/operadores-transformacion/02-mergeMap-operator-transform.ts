import {fromEvent, map, mergeMap, of, take, takeUntil} from "rxjs";
import {observer} from "@helpers/observer";
import {interval$} from "@observables/07-interval-timer";

const letters$ = of('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');

letters$.pipe(
    mergeMap(letter  => interval$.pipe(
        map(i => `${letter}-${i}`),
        take(3),
    ))
)
// .subscribe(observer)



const mouseDown$ = fromEvent(document,'mousedown');
const mouseUp$ = fromEvent(document,'mouseup');

mouseDown$.pipe(
    mergeMap(()=> interval$.pipe(
        takeUntil(mouseUp$)
    ))
)
// .subscribe(observer)