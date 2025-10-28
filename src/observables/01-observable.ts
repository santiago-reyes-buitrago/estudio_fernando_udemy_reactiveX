import {Observable, Observer} from 'rxjs';


const observer: Observer<any> = {
    next: function (value: any): void {
        console.log('next: ',value)
    },
    error: function (err: any): void {
        console.log('err', err)
    },
    complete: function (): void {
        console.log('completado')
    }
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('hola')
    subscriber.next('mundo')

    subscriber.next('hola')
    subscriber.next('mundo')

    // subscriber.error('fallo el servidor')
    subscriber.complete();

    subscriber.next('hola')
    subscriber.next('mundo')
});

// obs$.subscribe( console.log)
// obs$.subscribe(
//     value => console.log('siguiente: ',value),
//     err=> console.log('err: ',err),
//     () => console.log('complete: '),
// )

obs$.subscribe(observer);