import { NgModule } from '@angular/core';
import { DropDownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [DropDownComponent],
    exports: [DropDownComponent],
    imports: [CommonModule]
})
export class DropDownModule {}
