import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
