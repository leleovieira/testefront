import { Component, Output, EventEmitter, Input } from '@angular/core';
import { GlobalService } from '../../../../service/global.service';
import { VoDetalhes } from '../../../../interface/voDetalhes';



@Component({
    selector: 'app-leo-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


    @Output() exibir =  new EventEmitter<boolean>();
    @Input() vReg = <VoDetalhes>{};



    constructor(public global: GlobalService) {}

    fMudaView() {
            this.exibir.emit(true);
    }

    fExibeView() {
        this.global.fExibeMenu();
    }
}
