import {map, range, tap} from "rxjs";
import {observer} from "../helpers/observer";


const numero$ = range(1,5);

numero$.pipe(
    tap(x => {
        console.log('antes', x)
    }),
    map(x => x * 10),
    tap({
        next: x => console.log('despues', x),
        complete: () => console.log('completado tap')
    })
).subscribe(observer);