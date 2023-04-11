import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from '../api_responses/character';
import { CharactersService } from '../services/characters.service';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class IndividualComponent implements OnInit {
  character: Character;

  constructor(private route: ActivatedRoute, private charactersService: CharactersService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getCharacter(id);
  }

  getCharacter(id: string): void {
   this.charactersService.getCharacter(id).subscribe(character => {
     this.character = character;
    });
  }
}
