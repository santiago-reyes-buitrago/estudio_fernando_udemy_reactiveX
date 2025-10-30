import {interval, reduce, take, tap} from "rxjs";
import {observer} from "@helpers/observer";
import {ARRAY_NUMBERS} from "@constants/arrays.constants";
import {totalReducer} from "@functions/accumulator.function";


const total = ARRAY_NUMBERS.reduce(totalReducer,0);
console.log(total);


interval(1000).pipe(
    take(5),
    tap(console.log),
    reduce(totalReducer,10)
).subscribe(observer)
