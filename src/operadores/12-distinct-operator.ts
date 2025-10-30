import {distinct, from, of} from "rxjs";
import {ARRAY_CHARACTER, ARRAY_NUMBERS} from "@constants/arrays.constants";
import {observer} from "@helpers/observer";

const numeros$ = of(...ARRAY_NUMBERS,...ARRAY_NUMBERS,...ARRAY_NUMBERS,...ARRAY_NUMBERS,3,4,)

numeros$.pipe(
    distinct()
).subscribe(observer);

const characters$ = from([...ARRAY_CHARACTER,...ARRAY_CHARACTER,...ARRAY_CHARACTER,...ARRAY_CHARACTER,{tipo:'heroe',nombre:'Spiderman'}])
characters$.pipe(
    distinct(character => character.nombre)
).subscribe(observer);