import { Component, Input, OnInit } from '@angular/core';
import { ConnectionService } from '../../../service/connection.service';
import { VoClientes } from '../../../interface/voClientes';
import { VoDetalhes } from '../../../interface/voDetalhes';
import { VoPontos } from '../../../interface/voPontos';
import { AlertService } from '../../../shared/alert/alert.service';
import { GlobalService } from '../../../service/global.service';


@Component({
    selector: 'app-leo-menu',
    templateUrl: './menuside.component.html',
    styleUrls: ['./menuside.component.css']
})
export class MenuSideComponent implements OnInit {

    vQuery = '';
    vCODSELECIONADO = '';
    dpLista: VoClientes[] = [];
    dpDetalhes: VoDetalhes[] = [];

    vRegDetalhe = <VoDetalhes>{};
    vRegPonto = <VoPontos>{};

    vExibir = true;
    constructor(public con: ConnectionService , public alert: AlertService , public global: GlobalService) {}

    ngOnInit(): void {
         this.con
        .fGetListaCliente()
        .subscribe(
            data => {
              this.dpLista = data;
            }
        );
    }

    fSelecionaCliente(evento) {
        this.vCODSELECIONADO = evento;
        this.fGetDetalhes(evento);
    }

    fGetDetalhes(vCOD): void {
        this.vRegDetalhe = <VoDetalhes>{};
        this.vRegPonto = <VoPontos>{};
        this.con
            .fGetClienteSelecionado()
            .subscribe(
                dados => {
                  if (dados.codigo === vCOD) {
                         this.vRegDetalhe = dados;
                         this.global.fSetSelecionado(this.vRegDetalhe);
                         this.fMudaView('');
                         this.fGetPontos();

                  } else {
                     this.alert.warning('INFORMAÇÃO NÃO LOCALIZADA');
                  }
                }
             );
    }


    fGetPontos(): void {
         this
            .con
            .fGetPontos()
            .subscribe(dados => {
                          this.vRegPonto = dados;
                       }
            );
    }

    fGetPlacar() {
        if (!this.vExibir) {
            if (this.vRegDetalhe.codigo != null) {

                const saldo = this.vRegPonto.total - this.vRegPonto.utilizados - this.vRegPonto.expirados;
                return [
                   {
                       label: 'Saldo',
                       valor: saldo.toFixed(2),
                   },
                   {
                       label: 'Histórico',
                       valor: this.vRegPonto.total,
                   },
                   {
                       label: 'Utilizado',
                       valor: this.vRegPonto.utilizados,
                   },
                   {
                       label: 'Perdido',
                       valor: this.vRegPonto.expirados,
                   },
               ];
           } else {
                return [
                   {
                       label: 'Saldo',
                       valor: '--'
                   },
                   {
                       label: 'Histórico',
                       valor: '--'
                   },
                   {
                       label: 'Utilizado',
                       valor: '--'
                   },
                   {
                       label: 'Perdido',
                       valor: '--'
                   },
               ];
           }
        } else {
            return [
                {
                    label: 'Saldo',
                    valor: '--'
                },
                {
                    label: 'Histórico',
                    valor: '--'
                },
                {
                    label: 'Utilizado',
                    valor: '--'
                },
                {
                    label: 'Perdido',
                    valor: '--'
                },
            ];
        }
    }


    fMudaView(event) {
        this.vExibir = !this.vExibir;
        if (this.vExibir) {
            this.global.fSetSelecionado('');
        }
    }
}
