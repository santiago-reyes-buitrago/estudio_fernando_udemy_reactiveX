import {filter, from, map, range} from "rxjs";
import {keyUp$} from "../observables/05-fromEvent";
import {observer} from "../helpers/observer";


range(20,30).pipe(
    filter((value,index) => {
        console.log('index',index);
        return value % 2 === 1
    })
).subscribe(console.log)

interface Personaje { tipo: string, nombre: string }

const personajes:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
]

from(personajes).pipe(
    filter(p => p.tipo === 'heroe')
).subscribe(observer)

// Encadenamiento de operadores
keyUp$.pipe(
    map(event => event.key),
    filter(key => key === 'Enter')
).subscribe(observer)