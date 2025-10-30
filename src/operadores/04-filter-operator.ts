import {filter, from, map, range} from "rxjs";
import {keyUp$} from "../observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {ARRAY_CHARACTER} from "@constants/arrays.constants";


range(20,30).pipe(
    filter((value,index) => {
        console.log('index',index);
        return value % 2 === 1
    })
).subscribe(console.log)


from(ARRAY_CHARACTER).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(observer)

// Encadenamiento de operadores
keyUp$.pipe(
    map(event => event.key),
    filter(key => key === 'Enter')
).subscribe(observer)