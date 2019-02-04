import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../service/global.service';
import { AlertService } from '../../../../shared/alert/alert.service';
import { ViewSerice } from '../../../../service/view.service';


@Component({
    selector: 'app-leo-navbar',
    templateUrl: './nav.bar.component.html',
    styleUrls: ['./nav.bar.component.css']
})
export class NavBarComponent {
    @Input() lista_rota: Object[] = [{}];
    constructor(private rota: Router, public global: GlobalService, public alert: AlertService, public view: ViewSerice) {}

    fSelecionaMenu(dp) {
        if (this.global.vClienteSelecionado !== '') {
            if (this.view.dpListaNotaControle.length === 0) {
                this.rota.navigateByUrl(dp.url);
            } else {
                this.alert.danger('CONFIRME OU LIMPE A LISTA DE NOTAS');
            }
       } else {
            this.alert.danger('SELECIONE UM CLIENTE');
        }
    }


}
