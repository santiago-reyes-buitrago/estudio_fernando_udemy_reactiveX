import {keyUp$, mousekey$} from "@observables/05-fromEvent";
import {combineLatest, fromEvent, map} from "rxjs";
import {observer} from "@helpers/observer";

// deprecated
// combineLatest(keyUp$.pipe(map(event => event.code)), mousekey$.pipe(map(event => event.x))).subscribe(observer);
// new Signature
combineLatest([keyUp$.pipe(map(event => event.code)), mousekey$.pipe(map(event => event.x))]).subscribe(observer);

const input1 = document.createElement('input');
const input2 = document.createElement('input');
input1.placeholder = 'email@gmail.com';
input2.placeholder = '******';
input2.type = 'password';
document.body.append(input1,input2);


combineLatest([
    fromEvent<KeyboardEvent>(input1,'input').pipe(map((event: any) => event.target.value)),
    fromEvent<KeyboardEvent>(input2,'input').pipe(map((event: any) => event.target.value))
]).subscribe(observer)