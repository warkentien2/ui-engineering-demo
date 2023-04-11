import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appActiveLink]',
})
export class ActiveLinkDirective implements OnInit, OnDestroy {
  @Input('appActiveLink') activeLink: string;
  private subscription: Subscription;

  constructor(private el: ElementRef, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => this.updateActiveState());
    this.updateActiveState();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private updateActiveState(): void {
    if (this.router.url.startsWith(this.activeLink)) {
      this.el.nativeElement.classList.add('active');
    } else {
      this.el.nativeElement.classList.remove('active');
    }
  }
}
