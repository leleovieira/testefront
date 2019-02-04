import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { VoNota } from '../../../interface/voNota';
import { VoDetalhes } from '../../../interface/voDetalhes';
import { GlobalService } from '../../../service/global.service';
import { AlertService } from '../../../shared/alert/alert.service';
import { ViewSerice } from '../../../service/view.service';
import { Router, RouterLinkActive } from '@angular/router';


@Component({
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

    vRegNota = <VoNota>{};
    dpListaNota: VoNota[] = [];
    dataatual: number = Date.now();
    formnotas: FormGroup;

    tabletitle = ['LOJA', 'NO NOTA', 'DATA DA NOTA', 'CADASTRO', 'VALOR', ''];



    dpTIPOPAGAMENTO = [
        {'CAMPO': '', 'DESCRICAO': 'Selecionar'},
        {'CAMPO': 'A', 'DESCRICAO': 'A VISTA'},
        {'CAMPO': 'B', 'DESCRICAO': 'BOLETO'},
        {'CAMPO': 'CH', 'DESCRICAO': 'CHEQUE'},
        {'CAMPO': 'TB', 'DESCRICAO': 'TRANSFERENCIA BANCARIA'}
    ];

    constructor(private form: FormBuilder , private view: ViewSerice ,
                public global: GlobalService, public alert: AlertService) {}

    ngOnInit(): void {
        this.vRegNota = <VoNota>{};
        this.view.fLimpaListaControle();
        this.formnotas = this.form.group({
            loja: ['', Validators.required],
            nonota: ['', Validators.required],
            datanota: ['', Validators.required],
            valor : ['', Validators.required],
            tipopagamento : ['', Validators.required]
        });
    }

    fCarregaNota(): VoNota {
        const vNOTA = <VoNota>{};
            vNOTA.loja = this.formnotas.get('loja').value;
            vNOTA.nonota = this.formnotas.get('nonota').value;
            vNOTA.datanota = this.formnotas.get('datanota').value;
            vNOTA.valor = this.formnotas.get('valor').value;
            vNOTA.tipopagamento = this.formnotas.get('tipopagamento').value;
            vNOTA.cadastro = this.dataatual;
        return vNOTA;
    }

    fAdionaLista(): boolean {
         if (this.global.vClienteSelecionado !== '') {
            if (!this.formnotas.invalid) {
                this.vRegNota = this.fCarregaNota();
                this.dpListaNota.push(this.vRegNota);
                this.view.fSetListaControle(this.vRegNota);
                this.fLimpaNota();
                this.alert.success('Nota Cadastrada Com Sucesso!');
                return true;
            } else {
                this.fAlertaErroForm();
            }
        } else {
            this.alert.danger('SELECIONE UM CLIENTE');
        }
        return false;
    }

    fAlertaErroForm(): void {
        if (this.formnotas.get('loja').invalid) {
            this.alert.warning('Preencha a Loja');
        }

        if (this.formnotas.get('nonota').invalid) {
            this.alert.warning('Preencha o Numero da Nota');
        }

        if (this.formnotas.get('datanota').invalid) {
            this.alert.warning('Preencha a Data da Nota');
        }

        if (this.formnotas.get('tipopagamento').invalid) {
            this.alert.warning('Preencha o Tipo de Pagamento da Nota');
        }

        if (this.formnotas.get('valor').invalid) {
            this.alert.warning('Preencha o Valor da Nota');
        }
    }

    fSalvaLista(evento): boolean {
        if (this.global.vClienteSelecionado !== '') {
            if (this.dpListaNota.length > 0) {
                this.view.fSetHistorico(this.dpListaNota);
                this.dpListaNota = [];
                this.alert.success('Lista Cadastrada Com Sucesso!');
                return true;
            } else {
                this.alert.danger('ATENÇÃO A LISTA ESTÁ VAZIA');
            }
        } else {
            this.alert.danger('SELECIONE UM CLIENTE');
        }
        return false;
    }

    fLimpaNota(): void {
        this.vRegNota = <VoNota>{};
        this.formnotas.reset();
    }

    fLimpaListaNota(evento): void {
        this.vRegNota = <VoNota>{};
        this.dpListaNota = [];
    }

    fRemoveNota(event, index): boolean {
        if (this.dpListaNota.length > 0) {
            this.dpListaNota = this.dpListaNota.filter(function(elem) {
                if (elem !== index) {
                   return elem;
                }
            });
            this.alert.danger('Item Removido da Lista!');
            return true;
        }
        return false;
    }


}
