import { NgModule } from '@angular/core';
import { InputQueryComponent } from './input.query.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [InputQueryComponent],
    exports: [InputQueryComponent],
    imports: [CommonModule]
})
export class InputQueryModule {}
