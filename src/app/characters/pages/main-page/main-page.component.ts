import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {

  constructor(private characterServices: CharacterService){}



  public characterListSearch:Character[] = [];

   get characterList():Character[]{
    return this.characterServices.characters;
   }



   searchByCharacter(term:string):void{
      this.characterServices.searchByCharacter(term)
      .subscribe(resp =>{
        console.log(resp.results);
        this.characterListSearch = resp.results;

      });

   }

}
