import {GithubUserInterface} from "@interfaces/GithubUser.interface";

export interface ResponseGithubInterface {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUserInterface[];
}