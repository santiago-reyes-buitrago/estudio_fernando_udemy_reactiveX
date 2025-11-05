import {catchError, exhaustMap, fromEvent, map, mergeMap, of, switchMap, tap} from "rxjs";
import {observer} from "@helpers/observer";
import {reqresApi} from "@constants/apiUrl.constants";
import {ajax} from "rxjs/internal/ajax/ajax";

// helper

const handleLogin = <T>(data:T) => {
    return ajax.post(`${reqresApi}/login?delay=1`,data,{'x-api-key': 'reqres-free-v1'}).pipe(
        map(({response}) => response['token']),
        catchError(err => of(null))
    )
}

// creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = "eve.holt@reqres.in";
const inputPass = document.createElement('input');
inputPass.type = 'password';
inputPass.placeholder = 'contraseña';
inputPass.value = "cityslicka";
const button = document.createElement('button');
button.textContent = 'Enviar';
form.append(inputEmail,inputPass, button);
document.body.append(form);


// Streams
const form$ = fromEvent<Event>(form,'submit').pipe(
    tap(event => event.preventDefault()),
    map(event => ({
        email: event.target[0].value,
        password: event.target[1].value
    })),
    // mergeMap(handleLogin)
    // switchMap(handleLogin)
    exhaustMap(handleLogin)
);

form$.subscribe(observer)