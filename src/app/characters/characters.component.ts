import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterApiResponse } from '../api_responses/characterapiresponse';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class CharactersComponent implements OnInit {
  characterCall: CharacterApiResponse;
  pages: number[];
  currentPage = 1;
  searchTerm = '';

  constructor(
    private charactersService: CharactersService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params.fromPage) {
          this.currentPage = Number(params.fromPage);
          if (Number.isNaN(this.currentPage)) { this.currentPage = 1; }
        }
        if (params.nameSearch) { this.searchTerm = params.nameSearch; }

        this.getCharacters(this.currentPage);
      });
  }

  getCharacters(page = 1): void {
    this.charactersService.getCharacters(page, this.searchTerm).subscribe(characters => {
      this.characterCall = characters;
      this.fillInPageArray(characters.info.pages);
      this.currentPage = page;
    });
  }

  fillInPageArray(total: number): void {
    this.pages = [] as number[];

    for (let counter = 1; counter <= total; counter++) {
      this.pages.push(counter);
    }
  }
}
