import {from, map, Observable, reduce, scan} from "rxjs";
import {observer} from "@helpers/observer";
import {ARRAY_NUMBERS} from "@constants/arrays.constants";
import {totalReducer} from "@functions/accumulator.function";
import {UserInterface} from "@interfaces/user.interface";

console.log('Reduce')
from(ARRAY_NUMBERS).pipe(
    reduce(totalReducer,0)
).subscribe(observer)
console.log('Scan')
from(ARRAY_NUMBERS).pipe(
    scan(totalReducer,0)
).subscribe(observer)

// Redux


const user: UserInterface[] = [
    { id: 'fher', autenticado: false, token: null },
    { id: 'fher', autenticado: true, token: 'ABC' },
    { id: 'fher', autenticado: true, token: 'ABC123' },
];

const state$:Observable<UserInterface> = from( user ).pipe(
    scan<UserInterface>( (acc:any, cur) => ({ ...acc, ...cur }))
);
const id$ = state$.pipe(
    map( state => state.id )
);

id$.subscribe( console.log );