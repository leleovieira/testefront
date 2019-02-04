import { Component, Input } from '@angular/core';
import { AlertService } from './alert.service';
import { Alert, AlertType } from './Alert';


@Component({
    selector: 'app-leo-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent  {


    @Input() timeOut = 3000;
    alerts: Alert[] = [];

    constructor(
        private alertservice: AlertService
    ) {
        this.alertservice
            .fGetAlert()
            .subscribe(
                dados => {
                    if (!dados) {
                        this.alerts = [];
                        return null;
                    }

                    this.alerts.push(dados);
                    setTimeout(() => this.fRemoveAlert(dados), this.timeOut);
                },
                err => {
                    console.log(err);
                }
            );

    }

    fRemoveAlert(alertremove: Alert) {
        this.alerts = this.alerts
                          .filter(
                            alert => alert !== alertremove
                          );
    }

    fGetAlertClass(al: Alert) {

        if (!alert) { return ''; }

        switch (al.alerttype) {
            case AlertType.DANGER:
                return 'alert alert-danger';
            case AlertType.SUCCESS:
                return 'alert alert-success';
            case AlertType.WARNING:
                return 'alert alert-warning';
            case AlertType.INFO:
                return 'alert alert-info';
        }
    }

    fGetIcon(al: Alert) {

        if (!alert) { return ''; }

        switch (al.alerttype) {
            case AlertType.DANGER:
                return 'fa fa-exclamation';
            case AlertType.SUCCESS:
                return 'fa fa-check';
            case AlertType.WARNING:
                return 'fa fa-warning';
            case AlertType.INFO:
                return 'fa fa-info';
        }
    }
}
