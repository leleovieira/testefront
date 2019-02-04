
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder, Validators, FormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';


import { TransactionsComponent } from './transactions.component';
import { ViewsModule } from '../views.module';
import { ViewsComponent } from '../views.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownModule } from '../../../shared/dropdown/dropdown.module';
import { TableRepositiveModule } from '../../../shared/tablerepositive/table.repositive.module';
import { CardModule } from '../../../shared/card/card.module';
import { BtnToolBarModule } from '../../../shared/btntoolbar/btn.toolbar.module';
import { AppComponent } from '../../../app.component';
import { AlertService } from '../../../shared/alert/alert.service';
import { GlobalService } from '../../../service/global.service';
import { ViewSerice } from '../../../service/view.service';
import { VoDetalhes } from '../../../interface/voDetalhes';


describe('', () => {
  let component: TransactionsComponent;
  let formBuilder: FormBuilder;
  let alert: AlertService;
  let global: GlobalService;
  let view: ViewSerice;

  beforeEach(() => {
    formBuilder = new FormBuilder();
    alert = new AlertService();
    global = new GlobalService();
    view = new ViewSerice();
    component =  new TransactionsComponent(formBuilder, view, global, alert);
    component.formnotas = formBuilder.group({
      loja: ['', Validators.required],
      nonota: ['', Validators.required],
      datanota: ['', Validators.required],
      valor : ['', Validators.required],
      tipopagamento : ['', Validators.required]
    });
    component.ngOnInit();
  });

  afterEach(() => {
    formBuilder = null;
    alert = null;
    global = null;
    view = null;
    component =  null;
  });

  it('1) USUARIO NÃO SELECIONADO! CADASTROS DE NOTAS BLOQUEADO!', () => {
    expect(component.fAdionaLista()).toBeFalsy();
  });

  it('2) USUARIO SELECIONADO , CAMPOS  NÃO PREENCHIDOS , CADASTRO BLOQUEADO!', () => {
    const vt = <VoDetalhes>{};
    vt.codigo = '1';
    component.global.fSetSelecionado(vt);
    expect(component.fAdionaLista()).toBeFalsy();
  });

  it('3) USUARIO SELECIONADO , CAMPOS PREENCHIDOS , CADASTRO EFETUADO COM SUCESSO!', () => {
    const vt = <VoDetalhes>{};
    vt.codigo = '1';
    component.global.fSetSelecionado(vt);
    component.formnotas.controls['loja'].setValue('loja teste');
    component.formnotas.controls['nonota'].setValue('loja teste');
    component.formnotas.controls['datanota'].setValue('loja teste');
    component.formnotas.controls['valor'].setValue('loja teste');
    component.formnotas.controls['tipopagamento'].setValue('loja teste');
    expect(component.fAdionaLista()).toBeTruthy();
  });


  it('4) USUARIO SELECIONADO , UMA OU MAIS NOTAS CADASTRADAS , CONFIRMAÇÃO DO CADASTRO DE NOTAS REALIZADO COM SUCESSO!', () => {
    const vt = <VoDetalhes>{};
    vt.codigo = '1';
    component.global.fSetSelecionado(vt);
    component.formnotas.controls['loja'].setValue('loja teste');
    component.formnotas.controls['nonota'].setValue('loja teste');
    component.formnotas.controls['datanota'].setValue('loja teste');
    component.formnotas.controls['valor'].setValue('loja teste');
    component.formnotas.controls['tipopagamento'].setValue('loja teste');
    if (component.fAdionaLista()) {
      expect(component.fSalvaLista(true)).toBeTruthy();
    }
  });

});

