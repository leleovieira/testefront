import { NgModule } from '@angular/core';
import { BtnToolBarComponent } from './btn.toolbar.component';
import { CommonModule } from '@angular/common';


@NgModule({
        declarations: [BtnToolBarComponent],
        exports: [BtnToolBarComponent],
        imports: [CommonModule]
})
export class BtnToolBarModule {


}
