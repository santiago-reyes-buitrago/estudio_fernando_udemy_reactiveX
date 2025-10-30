import {ARRAY_CHARACTER} from "@constants/arrays.constants";
import {observer} from "@helpers/observer";
import {distinctUntilKeyChanged, from} from "rxjs";

const [Batman,Robin,Joker] = ARRAY_CHARACTER;
const characters$ = from([Batman,Batman,Joker,Joker,Batman,Batman,Robin,Robin,Batman,Joker])
characters$.pipe(
    distinctUntilKeyChanged("tipo")
).subscribe(observer);