import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'app-leo-scorebar',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.css']
})
export class ScoreBoardComponent implements OnInit {
    @Input() list_score: Object[] = [{}];
    ngOnInit(): void {

    }
}
