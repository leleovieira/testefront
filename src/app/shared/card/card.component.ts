import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector: 'app-leo-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() title = '';
    @Input() subtitle = '';

    ngOnInit(): void {

    }
}
