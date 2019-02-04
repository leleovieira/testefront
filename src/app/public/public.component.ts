import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../service/connection.service';
import { ViewSerice } from '../service/view.service';
import { GlobalService } from '../service/global.service';


@Component({
    templateUrl: './public.component.html'
})
export class PublicComponent implements OnInit {
    vRegCliente: Object = {};
    legend_title = 'Fidelidade';
    dprota_public: Object[] = [   {
                                label: 'Transações',
                                url: '/app/main/transaction',
                                index : 0
                            },
                            {
                                label: 'Beneficios',
                                url: '/app/main/benefits',
                                index : 1
                            },
                            {
                                label: 'Históricos',
                                url: '/app/main/historic',
                                index : 2
                            }
                        ];

    constructor(private view: ViewSerice, public global: GlobalService) {}

    ngOnInit(): void {
        this.view.fLimpaHistorico();
    }
}
