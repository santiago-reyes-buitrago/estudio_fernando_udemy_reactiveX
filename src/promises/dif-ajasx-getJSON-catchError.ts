import {delayUrlApi} from "@constants/apiUrl.constants";
import {ajax} from "rxjs/internal/ajax/ajax";
import {observer} from "@helpers/observer";
import {AjaxError} from "rxjs/internal/ajax/errors";
import {catchError, of} from "rxjs";

const url = `${delayUrlApi}/ss1`

const handleErrors = (resp: AjaxError)=> {
    console.warn('error: ',resp.message)
    return of({
        ok: false,
        users: []
    })
}

const obs$ = ajax.getJSON(url,{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 123456'
}).pipe(
    catchError(handleErrors)
);

const obs2$ = ajax(url).pipe(
    catchError(handleErrors)
);

obs$.subscribe(observer);
obs2$.subscribe(observer);