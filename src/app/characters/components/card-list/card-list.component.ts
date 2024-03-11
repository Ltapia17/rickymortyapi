import { Component, Input, OnInit } from '@angular/core';
import { Character, RickMorty } from '../../interfaces/character.interface';
import { CharacterService } from '../../services/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {


  public charactersList:Character[] = [];
  @Input()
  public characterListSearch:Character[]=[];


  constructor(private characterServices: CharacterService){}

  ngOnInit(): void {
    this.characterServices.characterList()
    .subscribe(resp =>{
      this.charactersList = resp.results;
    })
  }


}
