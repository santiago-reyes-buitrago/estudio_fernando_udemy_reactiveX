import {fromEvent} from "rxjs";

const mousekey$ = fromEvent<MouseEvent|PointerEvent>(document,'click');
export const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
//
// mousekey$.subscribe(({x,y}) =>{
//     console.log(x,y);
// })
// keyUp$.subscribe(event => {
//     console.log(event.key)
// })
