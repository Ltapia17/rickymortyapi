import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { switchMap } from 'rxjs';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css'],
})

export class CharacterPageComponent implements OnInit {

  public character?:Character;

  constructor(
    private activateRoute: ActivatedRoute,
    private characterServices: CharacterService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
      .pipe(switchMap(({ id }) => this.characterServices.searchIdCharacter(id)))
      .subscribe((character) => {
        if(!character)return this.router.navigateByUrl('');
        return this.character = character;


      });
  }
}
