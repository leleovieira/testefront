export class Alert {
    constructor(
        public readonly alerttype: AlertType,
        public readonly msg: string
    ) {}
}

export enum AlertType   {
    SUCCESS ,
    DANGER ,
    INFO ,
    PRIMARY,
    WARNING
}
