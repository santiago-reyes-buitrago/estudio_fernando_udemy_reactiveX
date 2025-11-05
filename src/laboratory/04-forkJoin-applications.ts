import {catchError, forkJoin, of} from "rxjs";
import {observer} from "@helpers/observer";
import {ajax} from "rxjs/internal/ajax/ajax";
import {githubUrlApi} from "@constants/apiUrl.constants";

const USER = 'santiago-reyes-buitrago'

forkJoin({
    user: ajax.getJSON(`${githubUrlApi}/users/${USER}`),
    repos: ajax.getJSON(`${githubUrlApi}/users/${USER}/repos123123123`).pipe(
        catchError(err => of(err.message))
    ),
    gists: ajax.getJSON(`${githubUrlApi}/users/${USER}/gists`)
}).pipe(
    catchError(err => of(err.message))
).subscribe(observer)