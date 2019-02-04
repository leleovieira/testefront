import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-leo-listsearch',
    templateUrl: './list.search.component.html',
    styleUrls: ['./list.search.component.css']
})
export class ListSearchComponent {
    @Input() dplistagem: Object[] = [{}];
    @Input() vPesq = '' ;
    @Output() selecionado =  new EventEmitter<string>();

    fSelecionaLista(vCOD: string): void {
        console.log(vCOD);
        this.selecionado.emit(vCOD);
    }
}

