import {delayUrlApi} from "@constants/apiUrl.constants";
import {ajax} from "rxjs/internal/ajax/ajax";
import {observer} from "@helpers/observer";

const url = `${delayUrlApi}/1`;

ajax.put(url,{
    id: 1,
    name: 'Santiago'
},{'Authorization': 'angasjigjaigjo'}).subscribe(observer)

ajax({
    url,
    method: 'PUT',
    body: {
        id: 1,
        name: 'Santiago'
    },
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'angasjigjaigjo'
    }
})