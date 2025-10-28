import {of, from, Observer} from "rxjs";

const observer:Observer<any> = {
    next: val => console.log('next: ',val),
    error: err => console.log('error: ',err),
    complete: () => console.log('complete')
}

const MyGenerator = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = MyGenerator();
// for (let id of miIterable){
//     console.log('id:', id);
// }
from(miIterable).subscribe(observer);

// of = toma argumentos y genera secuencia


// from = array, promise , iterable a observable
// const source$ = from([1,2,3,4,5]);
// const source$ = of(...[1,2,3,4,5]);
// const source$ = from('fernando');
// const source$ = of('fernando');
const source$ = from(fetch('https://api.github.com/users/klerith'));

// source$.subscribe(observer);
// source$.subscribe(async(resp) => {
//     const body = await resp.json();
//     console.log(body);
// })