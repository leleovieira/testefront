import { Component, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-leo-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['./dropdown.component.css']
})
export class DropDownComponent {
    @Output() onremove =  new EventEmitter<boolean>();
    @Output() onedit =  new EventEmitter<boolean>();

    fRemove() {
        this.onremove.emit(true);
    }

    fEdit() {
        this.onedit.emit(true);
    }
}
