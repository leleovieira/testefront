import {NgModule } from '@angular/core';
import {CommonModule } from '@angular/common';
import {TableRepositiveComponent} from './table.repositive.component';

@NgModule({
    declarations: [TableRepositiveComponent],
    exports: [TableRepositiveComponent],
    imports: [CommonModule]
})
export class TableRepositiveModule {}
