import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ViewSerice {
    dpHistorico: any = [];

    dpListaNotaControle = [];

    fSetHistorico(lista): void {
        this.dpHistorico.push(lista);
    }

    fLimpaHistorico(): void {
       this.dpHistorico = [];
    }

    fSetListaControle(lista): void {
        this.dpListaNotaControle.push(lista);
    }

    fLimpaListaControle(): void {
        this.dpListaNotaControle = [];
    }



}
