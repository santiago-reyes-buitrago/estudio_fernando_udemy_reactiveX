import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {debounceTime, distinctUntilChanged, fromEvent, map} from "rxjs";

// mousekey$.pipe(
//     tap(()=> console.log('click')),
//     debounceTime(1000)
// ).subscribe(observer)


// segundo ejemplo

const input = document.createElement('input');
document.body.append(input);

const input$= fromEvent(input,'keyup')

input$.pipe(
    debounceTime(3000),
    map<any,any>(({target}) => target.value),
    distinctUntilChanged(),
).subscribe(observer)
