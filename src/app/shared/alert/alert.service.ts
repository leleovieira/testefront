import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alert, AlertType } from './Alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    AlertSubject: Subject<Alert> = new Subject<Alert>();

    success(msg: string) {
         this.alert(AlertType.SUCCESS, msg);
    }

    warning(msg: string) {
        this.alert(AlertType.WARNING, msg);
    }

    danger(msg: string) {
        this.alert(AlertType.DANGER, msg);
    }

    info(msg: string) {
        this.alert(AlertType.INFO, msg);
    }


    private alert(alerttype: AlertType, msg: string) {
       this.AlertSubject.next(new Alert(alerttype, msg));
    }

    fGetAlert() {
        return this.AlertSubject.asObservable();
    }
}
