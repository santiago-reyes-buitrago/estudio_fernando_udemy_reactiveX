import {of} from 'rxjs';


// const obs$ = of(1,2,3,4,5,6);
const obs$ = of<number[]>(1,2,3,4,5,6);
// const obs$ = of([1,2],{a:1,b:2,c:3},true,Promise.resolve(true));

console.log('inicio de un obs')
obs$.subscribe({
    next: (val:any) => {
        console.log(val);
    },
    error: (val:any) => {},
    complete: () => {
        console.log('Terminado')
    }
})
console.log('Fin de un obs')