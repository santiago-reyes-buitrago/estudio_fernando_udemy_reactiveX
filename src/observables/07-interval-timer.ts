import {interval,timer} from "rxjs";
import {observer} from "../helpers/observer";

const today5 = new Date();
today5.setSeconds(today5.getSeconds()+5)

const interval$ = interval(1000);
const timer$ = timer(today5);
// interval$.subscribe(observer);
timer$.subscribe(observer);
