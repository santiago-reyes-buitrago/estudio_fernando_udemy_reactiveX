import { Observable,Subject} from 'rxjs';
import {observer} from "../helpers/observer";

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(() => subs.next(Math.random()),1000)

    return () => {
        clearInterval(intervalID)
        console.log('Intervalo destruido')
    };
});

// const subs1 = intervalo$.subscribe(rnd => (console.log('sub1',rnd)));
// const subs2 = intervalo$.subscribe(rnd => (console.log('sub2',rnd)));

const subject$ = new Subject<number>();
const intervalSubject = intervalo$.subscribe(subject$);

const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();
},3000)