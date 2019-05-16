import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTreeGridComponent } from './components/Examples/BasicTreeGridComponent';
import { AddEditDeleteComponent } from './components/Examples/AddEditDeleteComponent';
import { CondRowEditComponent } from './components/Examples/CondRowEditComponent';
import { CustomViewComponent } from './components/Examples/CustomViewComponent';
import { CustomEditorComponent } from './components/Examples/CustomEditor.component';
import { EditDeleteResolverComponent } from './components/Examples/EditDeleteResolver.component';
import { FilterComponent } from './components/Examples/Filter.component';

const routes: Routes = [
  { path: '', component: BasicTreeGridComponent },
  { path: 'basic_tree_grid', component: BasicTreeGridComponent },
  { path: 'add_edit_delete', component: AddEditDeleteComponent },
  { path: 'cond_row_edit', component: CondRowEditComponent },
  { path: 'custom_view_component', component: CustomViewComponent },
  { path: 'custom_edit_component', component: CustomEditorComponent },
  { path: 'resolve_row_add', component: EditDeleteResolverComponent },
  { path: 'filter_column', component: FilterComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}