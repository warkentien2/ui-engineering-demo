import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { EpisodeApiResponse } from '../api_responses/episodeapiresponse';
import { EpisodesService } from '../episodes.service';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class EpisodesComponent implements OnInit {
  episodesCall: EpisodeApiResponse;
  pages: number[];
  currentPage = 1;

  constructor(private episodesService: EpisodesService) { }

  ngOnInit() { this.getEpisodes(); }

  getEpisodes(page = 1): void {
    this.episodesService.getEpisodes(page).subscribe(episodes => {
      this.episodesCall = episodes;
      this.fillInPageArray(episodes.info.pages);
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
