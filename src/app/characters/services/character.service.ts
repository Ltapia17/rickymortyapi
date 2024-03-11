import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, RickMorty } from '../interfaces/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public tag: string = '';
  public api: string = 'https://rickandmortyapi.com/api/character';
  public characters:Character[] = [];

  constructor(private http: HttpClient) {}

  characterList(): Observable<RickMorty> {
    return this.http.get<RickMorty>(this.api);
  }

  searchCharacter(tag: string):void{
    if(tag === '')return;

     this.http.get<RickMorty>(`${this.api}/?name=${tag}`)
      .subscribe(resp =>{
        this.characters = resp.results;

      })

  }
}
[];
