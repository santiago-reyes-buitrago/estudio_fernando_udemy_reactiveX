//  refrencias del html
import {ajax} from "rxjs/internal/ajax/ajax";
import {reqresApi} from "@constants/apiUrl.constants";
import {observer} from "@helpers/observer";
import {startWith} from "rxjs";

const  loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...'


//Streams

ajax.getJSON(`${reqresApi}/users/2?delay=3`,{'x-api-key': 'reqres-free-v1'}).pipe(
    startWith(true),
).subscribe({
    next: (response) => {
        if(response === true){
            document.body.appendChild(loadingDiv);
        }else{
            document.body.removeChild(loadingDiv);
        }
    }
})