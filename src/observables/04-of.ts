import {of} from 'rxjs';
import {observer} from "../helpers/observer";


// const obs$ = of(1,2,3,4,5,6);
export const obs$ = of<number[]>(1,2,3,4,5,6);
// const obs$ = of([1,2],{a:1,b:2,c:3},true,Promise.resolve(true));

// console.log('inicio de un obs')
// obs$.subscribe(observer)
// console.log('Fin de un obs')