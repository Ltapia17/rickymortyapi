import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character, RickMorty } from '../interfaces/character.interface';
import { Observable, catchError, of, tap } from 'rxjs';
import { CacheStorage } from '../interfaces/cache-storage.interface';


@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  public tag: string = '';
  public api: string = 'https://rickandmortyapi.com/api/character';
  public characters:Character[] = [];

  constructor(
    private http: HttpClient,

  ) {console.log('characterservices init');
  }

  public cacheStore:CacheStorage={

    term: '', character: []

  }

  characterList(): Observable<RickMorty |null> {
    return this.http.get<RickMorty>(this.api)
    .pipe(
      catchError( () =>of(null))
    );
  }

  searchByCharacter(term: string):Observable<RickMorty>{
    //if(tag === '')return;

     return this.http.get<RickMorty>(`${this.api}/?name=${term}`)
     .pipe(
      tap(
        characters => this.cacheStore = {term , character: characters.results}
      ),
      catchError( () =>of())
    );

  }

  searchIdCharacter(id:string):Observable<Character | null>{
    return this.http.get<Character>(`${this.api}/${id}`)
      .pipe(
        catchError( () =>of(null))
      )

  }

}
[];
