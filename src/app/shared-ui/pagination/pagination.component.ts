import { Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PaginationComponent implements OnChanges, OnInit {
  @Input() currentPage = 1;
  @Input() totalPages: number;
  @Output() pageChange = new EventEmitter<number>();

  visiblePages: number[] = [];
  maxVisibleItems = 14;

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.updateMaxVisibleItems();
  }

  ngOnInit(): void {
    this.updateMaxVisibleItems();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalPages || changes.currentPage) {
      this.generateVisiblePages();
    }
  }

  generateVisiblePages(): void {
    let start = Math.max(1, this.currentPage - Math.floor(this.maxVisibleItems / 2));
    const end = Math.min(this.totalPages, start + this.maxVisibleItems - 1);

    if (end - start < this.maxVisibleItems - 1) {
      start = Math.max(1, end - this.maxVisibleItems + 1);
    }

    this.visiblePages = Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  goToPage(page: number): void {
    this.pageChange.emit(page);

    // Update the URL query parameter
    this.router.navigate([], {
      queryParams: {
        fromPage: page,
        nameSearch: history.state.nameSearch || '',
      },
      queryParamsHandling: 'merge',
    });
  }

  generateVisiblePagesForNewRange(newPage: number): void {
    let start = Math.max(1, newPage - Math.floor(this.maxVisibleItems / 2));
    const end = Math.min(this.totalPages, start + this.maxVisibleItems - 1);

    if (end - start < this.maxVisibleItems - 1) {
      start = Math.max(1, end - this.maxVisibleItems + 1);
    }

    this.visiblePages = Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  changeRange(page: number = 1): void {
    this.generateVisiblePagesForNewRange(page);
  }

  changeRangeAndGoTo(page): void {
    this.changeRange(page);
    if (this.visiblePages.includes(page)) {
      this.goToPage(page);
    }
  }

  pixelsToRem(pixels: number): number {
    const baseFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return pixels / baseFontSize;
  }

  checkIfVertical(): boolean {
    return getComputedStyle(document.documentElement).writingMode ===
    'vertical-rl' || document.documentElement.hasAttribute('vertical');
  }

  updateMaxVisibleItems(): void {
    let screenInlineRem = this.pixelsToRem(window.innerWidth);

    if (this.checkIfVertical()) {
      screenInlineRem = this.pixelsToRem(window.innerHeight);
    }

    if (screenInlineRem <= 34 && this.maxVisibleItems !== 5) {
      this.maxVisibleItems = 3;
      this.generateVisiblePages();
    } else if (screenInlineRem <= 50 && this.maxVisibleItems !== 10) {
      this.maxVisibleItems = 7;
      this.generateVisiblePages();
    } else if (screenInlineRem > 50 && this.maxVisibleItems !== 14) {
      this.maxVisibleItems = 14;
      this.generateVisiblePages();
    }
  }
}
