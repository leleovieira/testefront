import { NgModule } from '@angular/core';
import { ScoreBoardComponent } from './scoreboard/scoreboard.component';
import { TopBarComponent } from './top.bar.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar/nav.bar.component';
import { TitleBarComponent } from './titlebar/title.bar.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [ScoreBoardComponent, TopBarComponent, NavBarComponent, TitleBarComponent],
    exports: [TopBarComponent],
    imports: [CommonModule, RouterModule]
})
export class TopBarModule {}
