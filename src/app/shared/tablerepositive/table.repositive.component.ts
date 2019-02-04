import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-leo-table-repositive',
    templateUrl: './table.repositive.component.html',
    styleUrls: ['./table.repositive.component.css']
})
export class TableRepositiveComponent {
    @Input() columns = [];
    @Input() dplista: any = [{}];
}
