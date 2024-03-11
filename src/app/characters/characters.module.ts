import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CardListComponent,
    SearchBoxComponent
  ],
  exports:[
    MainPageComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class CharactersModule { }
