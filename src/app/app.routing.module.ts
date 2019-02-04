import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { PublicComponent } from './public/public.component';
import { ViewsComponent } from './public/views/views.component';
import { TransactionsComponent } from './public/views/transactions/transactions.component';
import { HistoricComponent } from './public/views/historic/historic.component';
import { BenefitsComponent } from './public/views/benefits/benefits.component';

const routes: Routes = [

    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'app/main/transaction'
    },

    {
        path: 'app',
        component: PublicComponent,
        children: [
            {
                path: 'main',
                component: ViewsComponent,
                children: [
                    {
                        path: 'transaction',
                        component: TransactionsComponent
                    },
                    {
                        path: 'historic',
                        component: HistoricComponent
                    },
                    {
                        path: 'benefits',
                        component: BenefitsComponent
                    }
                ]
            }
        ]
    },


    { path: '**', component: PublicComponent  },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
