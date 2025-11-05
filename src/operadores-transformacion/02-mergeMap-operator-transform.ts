import {fromEvent, map, mergeMap, of, take, takeUntil} from "rxjs";
import {observer} from "@helpers/observer";
import {interval$} from "@observables/07-interval-timer";
import {ARRAY_LETTERS} from "@constants/arrays.constants";

const letters$ = of(...ARRAY_LETTERS);

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