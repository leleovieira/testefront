import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../../service/global.service';



@Component({
    selector: 'app-leo-titlebar',
    templateUrl: 'title.bar.component.html',
    styleUrls: ['./title.bar.component.css']
})
export class TitleBarComponent implements OnInit {

    @Input() title_menu = '';
    constructor(public global: GlobalService) {}
    ngOnInit(): void {

    }

    fExibeView() {
        this.global.fExibeMenu();
    }
}
