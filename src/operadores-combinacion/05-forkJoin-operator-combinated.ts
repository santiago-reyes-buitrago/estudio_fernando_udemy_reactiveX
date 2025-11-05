import {interval$} from "@observables/07-interval-timer";
import {ARRAY_LETTERS, ARRAY_NUMBERS} from "@constants/arrays.constants";
import {delay, forkJoin, of, take} from "rxjs";
import {observer} from "@helpers/observer";


const numbers$ = of(...ARRAY_NUMBERS);
const intervalos$ = interval$.pipe(take(3));
const letters$ = of(...ARRAY_LETTERS).pipe(delay(650));

// deprecated
// forkJoin(numbers$,letters$,intervalos$).subscribe(observer);

// new signature

// forkJoin([numbers$,letters$,intervalos$]).subscribe(observer);

// forkJoin([numbers$,letters$,intervalos$]).subscribe({
//     next: value => {
//         console.log('numbers: ',value[0]);
//         console.log('letters: ',value[1]);
//         console.log('intervalos: ',value[2]);
//     }
// });

forkJoin({
    numeros: numbers$,
    letras: letters$,
    tiempo: intervalos$
}).subscribe({
    next: ({numeros,tiempo,letras}) => {
        console.log('numbers: ',numeros);
        console.log('letters: ',letras);
        console.log('intervalos: ',tiempo);
    }
});