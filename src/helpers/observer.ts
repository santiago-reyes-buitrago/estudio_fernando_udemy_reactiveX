import {Observer} from "rxjs";

export const observer: Observer<any> = {
    next: function (value: any): void {
        console.log('next: ',value)
    },
    error: function (err: any): void {
        console.log('err', err)
    },
    complete: function (): void {
        console.log('completado')
    }
}