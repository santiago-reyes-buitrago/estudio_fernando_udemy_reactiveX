import {ajax} from "rxjs/internal/ajax/ajax";
import {observer} from "@helpers/observer";
import {catchError, map, of} from "rxjs";
import {dataUrlApi} from "@constants/apiUrl.constants";

const handleErrors = (response:Response) => {
    if (!response.ok){
        throw new Error(response.statusText)
    }
    return response
}


// const fetchTodos = fetch(url);

// fetchTodos
//     .then(handleErrors)
//     .then(resp => resp.json())
//     .then(val => console.log(val))
//     .catch(err => console.warn('error en usuarios: ',err))

ajax(dataUrlApi).pipe(
    map(({response}) => response),
    catchError(err => {
        console.warn('Servidor: ', err)
        // throw new Error('Fallo la peticion')
        return of([])
    })
).subscribe(observer)