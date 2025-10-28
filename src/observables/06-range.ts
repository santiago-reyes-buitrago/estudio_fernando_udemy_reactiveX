import {asyncScheduler,range} from "rxjs";
import {observer} from "../helpers/observer";

//deprecated
const src$ = range(1,5,asyncScheduler)
// reemplazo
// const src$ = range(1,5).pipe(observeOn(asyncScheduler))
console.log('inicio');
src$.subscribe(observer)
console.log('fin');

// range(1,5).pipe(map<number,string>(x => `${x*10}`)).subscribe(observer);