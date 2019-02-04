import { NgModule } from '@angular/core';
import { ViewsComponent } from './views.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TransactionsComponent } from './transactions/transactions.component';
import { HistoricComponent } from './historic/historic.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from '../../shared/card/card.module';
import { TableRepositiveModule } from '../../shared/tablerepositive/table.repositive.module';
import { BtnToolBarModule } from '../../shared/btntoolbar/btn.toolbar.module';
import { DropDownModule } from '../../shared/dropdown/dropdown.module';


@NgModule({
    declarations: [ViewsComponent, TransactionsComponent, HistoricComponent, BenefitsComponent],
    exports: [ViewsComponent, TransactionsComponent, HistoricComponent, BenefitsComponent],
    imports: [CommonModule, RouterModule,
            FormsModule, ReactiveFormsModule, DropDownModule,
            CardModule, TableRepositiveModule, BtnToolBarModule]
})
export class ViewsModule {}
