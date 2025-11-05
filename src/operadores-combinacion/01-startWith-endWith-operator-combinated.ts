import {obs$} from "@observables/04-of";
import {observer} from "@helpers/observer";
import {endWith, startWith} from "rxjs";

obs$.pipe(
    startWith(-2,-1,0),
    endWith(7,8,9)
).subscribe(observer)