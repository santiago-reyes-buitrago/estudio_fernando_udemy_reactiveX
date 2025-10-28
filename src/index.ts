import {map, Observer, range,fromEvent} from "rxjs"

const observer:Observer<any> = {
    next: val => console.log('next: ',val),
    error: err => console.log('error: ',err),
    complete: () => console.log('complete')
}

// range(1,5).pipe(map<number,string>(x => `${x*10}`)).subscribe(observer);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')
    .pipe(
        map(value => value.code)
    );
keyUp$.subscribe(val => console.log('next: ',val));