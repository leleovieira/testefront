import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-leo-btn-toolbar',
    templateUrl: './btn.toolbar.component.html',
    styleUrls: ['./btn.toolbar.component.css']
})
export class BtnToolBarComponent {
    @Output() onconfirm =  new EventEmitter<boolean>();
    @Output() onclear =  new EventEmitter<boolean>();

    fConfirm(): void {
        this.onconfirm.emit(true);
    }

    fClear(): void {
        this.onclear.emit(true);
    }
}
