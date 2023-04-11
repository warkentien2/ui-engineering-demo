import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from './services/shared.service';
@Component({
  selector: 'ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  characterPage = 1;
  characterNameSearch = '';

  constructor(private route: ActivatedRoute, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        if (params.fromPage)  {
          const cPageNum = Number(params.fromPage);
          if (!Number.isNaN(cPageNum)) {
            this.characterPage = cPageNum;
          }
        }
        if (params.nameSearch) { this.characterNameSearch = params.nameSearch; }
      });
  }

  onClick(): void {
    this.sharedService.triggerChildFunction();
  }
}
