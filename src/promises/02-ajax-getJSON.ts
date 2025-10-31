import {delayUrlApi} from "@constants/apiUrl.constants";
import {ajax} from "rxjs/internal/ajax/ajax";
import {observer} from "@helpers/observer";

const url = `${delayUrlApi}/1`

const obs$ = ajax.getJSON(url,{
    'Content-Type': 'application/json',
    'Authorization': 'Bearer 123456'
}).subscribe(observer);