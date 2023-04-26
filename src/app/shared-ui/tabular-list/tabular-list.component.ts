import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-tabular-list',
  templateUrl: './tabular-list.component.html',
  styleUrls: ['./tabular-list.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TabularListComponent {
  @HostBinding('class') hostClasses = 'tabular-list';

  onEnterKeyPressed(event: KeyboardEvent): void {
    event.preventDefault();
    (event.currentTarget as HTMLElement).click();
  }
}
