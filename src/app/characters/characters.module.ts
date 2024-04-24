import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MainPageComponent,
    CardListComponent,
    SearchBoxComponent,
    CharacterPageComponent
  ],
  exports:[
    MainPageComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CharactersModule { }
