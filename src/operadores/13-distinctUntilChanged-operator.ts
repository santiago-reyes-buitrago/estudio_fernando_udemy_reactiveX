import {distinctUntilChanged, from, of} from "rxjs";
import {ARRAY_CHARACTER, ARRAY_NUMBERS} from "@constants/arrays.constants";
import {observer} from "@helpers/observer";

const numeros$ = of(...ARRAY_NUMBERS,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,3,1,4,)

numeros$.pipe(
    distinctUntilChanged()
).subscribe(observer);

const [Batman,Robin,Joker] = ARRAY_CHARACTER;
const characters$ = from([Batman,Batman,Joker,Joker,Batman,Batman,Robin,Robin,Batman,Joker])
characters$.pipe(
    // distinctUntilChanged()
    distinctUntilChanged((beforeCharacter,actualCharacter) => beforeCharacter.nombre === actualCharacter.nombre)
).subscribe(observer);