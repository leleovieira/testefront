import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'app-leo-input-query',
    templateUrl: './input.query.component.html',
    styleUrls: ['./input.query.component.css']
})
export class InputQueryComponent implements OnInit, OnDestroy {

    @Output() ontype = new EventEmitter<string>();
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(): void {
        this.fQueryString();
    }

    fQueryString(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(
                    dados => {
                        this.ontype.emit(dados);
                    }
            );
    }

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}

