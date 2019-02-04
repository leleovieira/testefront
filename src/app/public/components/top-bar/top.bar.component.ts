import { Component, OnInit, Input } from '@angular/core';
import { VoPontos } from '../../../interface/voPontos';


@Component({
    selector: 'app-leo-topbar',
    templateUrl: './top.bar.component.html',
    styleUrls: ['./top.bar.component.css']
})
export class TopBarComponent implements OnInit {
    @Input() menu_rota: Object[] = [{}];
    @Input() list_scoreboard: VoPontos[] = [];
    @Input() leg_title = '';
    ngOnInit(): void {
    }
}
