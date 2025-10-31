import {mousekey$} from "@observables/05-fromEvent";
import {observer} from "@helpers/observer";
import {throttleTime, fromEvent, tap, map, distinctUntilChanged, asyncScheduler} from "rxjs";

// mousekey$.pipe(
//     tap(()=> console.log('click')),
//     throttleTime(3000)
// ).subscribe(observer)


// segundo ejemplo

const input = document.createElement('input');
document.body.append(input);

const input$= fromEvent(input,'keyup')

input$.pipe(
    throttleTime(1000,asyncScheduler,{
        leading:true,
        trailing:true
    }),
    map<any,any>(({target}) => target.value),
    distinctUntilChanged(),
).subscribe(observer)