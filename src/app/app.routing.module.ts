import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './characters/pages/main-page/main-page.component';
import { CharacterPageComponent } from './characters/pages/character-page/character-page.component';


const routes:Routes = [
  {
    path:'',
    component: MainPageComponent
  },
  {
    path:'characters/:id',
    component: CharacterPageComponent
  },


  {
    path: '**',
    redirectTo: ''
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {








}
