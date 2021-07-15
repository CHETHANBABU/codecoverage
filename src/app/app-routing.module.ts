import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'codecoverage', pathMatch: 'full' },
  { path: 'codecoverage', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
