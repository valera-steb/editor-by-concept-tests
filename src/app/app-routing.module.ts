import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Root11Component} from './test-11/root/root.component';
import {Test12RootComponent} from './test-12/test-12-root/test-12-root.component';
import {Test13RootComponent} from './test-13/test-13-root/test-13-root.component';

export const routes: Routes = [
  {path: 'test-11', component: Root11Component},
  {path: 'test-12', component: Test12RootComponent},
  {path: 'test-13', component: Test13RootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
