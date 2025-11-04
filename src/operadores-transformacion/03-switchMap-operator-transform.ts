import {fromEvent, map, switchMap} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {delayUrlApi} from "@constants/apiUrl.constants";
import {observer} from "@helpers/observer";

const textInput = document.createElement('input');
const orderList = document.createElement('ol');
document.body.append(textInput,orderList);


// Strams
const url = `${delayUrlApi}/1?arg=`
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup').pipe(
    map(({target}: any) => target.value ),
    switchMap((term: string) => ajax.getJSON(`${url}${term}`)),
);
input$.subscribe(observer)