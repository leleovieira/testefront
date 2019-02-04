import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PublicComponent } from './public.component';
import { TopBarModule } from './components/top-bar/top.bar.module';
import { MenuSideModule } from './components/menu-side/menuside.module';
import { ViewsModule } from './views/views.module';
import { AlertComponent } from '../shared/alert/alert.component';
import { AlertModule } from '../shared/alert/alert.module';




@NgModule({
   declarations: [PublicComponent],
   exports: [PublicComponent],
   imports: [ CommonModule,
             HttpClientModule,
             TopBarModule,
             MenuSideModule,
             AlertModule,
             ViewsModule,
           ]

})
export class PublicModule {

}
