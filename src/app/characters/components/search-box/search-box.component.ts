import { Component, ElementRef, ViewChild } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../interfaces/character.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  constructor(private characterServices: CharacterService ){}

  @ViewChild('txtTag')
  public tagInput!: ElementRef<HTMLInputElement>;
  public listCharacterSerch :Character[] = [];


  searchTag():void{




    const newTag = this.tagInput.nativeElement.value;

    this.characterServices.searchCharacter(newTag);

    this.tagInput.nativeElement.value = '';

  }

}
