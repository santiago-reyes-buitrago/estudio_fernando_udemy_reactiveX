import { Observable, Observer} from 'rxjs';


const observer: Observer<any> = {
    next: function (value: any): void {
        console.log('next: ',value)
    },
    error: function (err: any): void {
        console.warn('err', err)
    },
    complete: function (): void {
        console.info('completado')
    }
}

const interval$ = new Observable<number>(subs => {
    let interval = 0
    const count = setInterval(()=> {
        subs.next(interval);
        interval++;
        console.log(interval)
    },1000)

    setTimeout(()=>{
        subs.complete();
    },2500)

    return () => {
        clearInterval(count);
        console.log('intervalo destruido')
    }
});


const subs1 = interval$.subscribe(observer);
const subs2 = interval$.subscribe(observer);
const subs3 = interval$.subscribe(observer);
const subs4 = interval$.subscribe(observer);

subs1.add(subs2.add(subs3.add(subs4)))

setTimeout(()=>{
    subs1.unsubscribe()
    // subs2.unsubscribe()
    // subs3.unsubscribe()
    // subs4.unsubscribe()

    console.log('completado timeout')
},6000)