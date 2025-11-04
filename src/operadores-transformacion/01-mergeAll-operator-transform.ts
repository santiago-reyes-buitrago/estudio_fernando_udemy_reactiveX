import {debounceTime, distinctUntilChanged, fromEvent, map, mergeAll, Observable} from "rxjs";
import {ajax} from "rxjs/internal/ajax/ajax";
import {GithubUserInterface} from "@interfaces/GithubUser.interface";
import {ResponseGithubInterface} from "@interfaces/ResponseGithub.interface";
import {githubUrlApi} from "@constants/apiUrl.constants";

const textInput = document.createElement('input');
const orderList = document.createElement('ol');
document.body.append(textInput,orderList);


// Strams

const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup').pipe(
    distinctUntilChanged<KeyboardEvent>(),
    debounceTime<KeyboardEvent>(1000),
    map<KeyboardEvent,string>(({target}: any) => target.value ),
    map<string,Observable<ResponseGithubInterface>>((term: string) => ajax.getJSON(`${githubUrlApi}${term}`)),
    mergeAll(),
    map<ResponseGithubInterface,GithubUserInterface[]>((data) => data.items)
);

input$.subscribe({
    next: (users) => {
        users.forEach(user => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const anchor = document.createElement('a');
            img.src = user.avatar_url;
            anchor.href = user.html_url;
            anchor.text = 'Ver pagina';
            anchor.target = '_blank';
            li.append(img);
            li.append(`${user.login} `)
            li.append(anchor);
            orderList.append(li);
        })

    },
})

