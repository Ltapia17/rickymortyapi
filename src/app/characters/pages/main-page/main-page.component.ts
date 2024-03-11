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


   get searchCharacterList():Character[]{
    return this.characterServices.characters;
   }

}
