import {of, take, tap} from "rxjs";
import {ARRAY_NUMBERS} from "@constants/arrays.constants";
import {observer} from "@helpers/observer";

const numbers$ = of(...ARRAY_NUMBERS).pipe(tap(x => console.log('antes', x)));


numbers$.pipe(
    take(2)
).subscribe(observer)
