import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  currentRoute = '';

  constructor(private route: ActivatedRoute, private sharedService: SharedService, private router: Router) {
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentRoute = event.url;
      });
  }

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

  isActiveRoute(route: string): boolean {
    return this.currentRoute.startsWith(route);
  }
}
