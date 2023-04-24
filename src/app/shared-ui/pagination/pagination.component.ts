import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { UiSettingsService } from '../../services/ui-settings.service';

interface UiSettings {
  darkMode: boolean;
  textDirection: string;
  baseFontSize: number;
  prefersReducedMotion: boolean;
}

@Component({
  selector: 'ui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PaginationComponent implements OnChanges, OnDestroy, OnInit {
  @HostBinding('class') hostClasses = 'pagination';
  @Input() currentPage = 1;
  @Input() totalPages: number;
  @Output() pageChange = new EventEmitter<number>();

  private uiSettingsSubscription: Subscription;
  visiblePages: number[] = [];
  maxVisibleItems = 14;

  constructor(private router: Router, private uiSettingsService: UiSettingsService) {}

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    this.updateMaxVisibleItems();
  }

  ngOnInit(): void {
    this.updateMaxVisibleItems();

    this.uiSettingsSubscription = this.uiSettingsService.baseFontSizeChange$.subscribe((newBaseFontSize: number) => {
      this.updateMaxVisibleItems();
    });

    this.uiSettingsSubscription.add(
      this.uiSettingsService.textDirectionChange$.subscribe((newTextDirection: string) => {
        this.updateMaxVisibleItems();
      }),
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.totalPages || changes.currentPage) {
      this.generateVisiblePages();
    }
  }

  ngOnDestroy(): void {
    this.uiSettingsSubscription.unsubscribe();
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

    if (screenInlineRem <= 54.4 && this.maxVisibleItems !== 5) {
      this.maxVisibleItems = 3;
      this.generateVisiblePages();
    } else if (screenInlineRem <= 80 && this.maxVisibleItems !== 10) {
      this.maxVisibleItems = 7;
      this.generateVisiblePages();
    } else if (screenInlineRem > 80 && this.maxVisibleItems !== 14) {
      this.maxVisibleItems = 14;
      this.generateVisiblePages();
    }
  }
}
