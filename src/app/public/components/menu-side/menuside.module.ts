import { NgModule } from '@angular/core';
import { ListSearchComponent } from './listsearch/list.search.component';
import { MenuSideComponent } from './menuside.component';
import { CommonModule } from '@angular/common';

import { InputQueryModule } from '../../../shared/input-query/input.query.module';
import { InputQueryPipe } from '../../../pipe/input.query.pipe';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    declarations: [ListSearchComponent, MenuSideComponent, InputQueryPipe, ProfileComponent],
    exports: [MenuSideComponent],
    imports: [CommonModule, InputQueryModule]
})
export class MenuSideModule {}
