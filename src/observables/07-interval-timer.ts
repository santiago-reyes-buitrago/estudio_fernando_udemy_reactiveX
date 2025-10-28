import {interval,timer, Observer} from "rxjs";


const observer:Observer<any> = {
    next: value => console.log('next', value),
    error: value => console.log('error', value),
    complete: () => console.log('complete'),
}

const today5 = new Date();
today5.setSeconds(today5.getSeconds()+5)

const interval$ = interval(1000);
const timer$ = timer(today5);
// interval$.subscribe(observer);
timer$.subscribe(observer);
