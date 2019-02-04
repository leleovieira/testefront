import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    vClienteSelecionado: any = '';
    vExibeMenu: Boolean = true;

    fSetSelecionado(vReg): void {
        this.vClienteSelecionado = vReg;
    }

    fExibeMenu(): void {
        this.vExibeMenu = !this.vExibeMenu;
    }
}
