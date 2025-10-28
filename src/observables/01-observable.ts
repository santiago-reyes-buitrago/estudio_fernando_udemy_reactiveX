import {Observable} from 'rxjs';
import {observer} from "../helpers/observer";

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