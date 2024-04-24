import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
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


  @Output()
  public onValue = new EventEmitter<string>();


  searchTag(term:string):void{

    this.onValue.emit(term);
    this.tagInput.nativeElement.value = '';

  }

}
