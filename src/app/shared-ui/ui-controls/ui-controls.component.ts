import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ui-controls',
  templateUrl: './ui-controls.component.html',
  styleUrls: ['./ui-controls.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class UiControlsComponent implements OnInit {
  @HostBinding('class') hostClasses = 'ui-controls-anchor';

  showForm = false;
  isDarkMode = true;
  textDirection = 'ltr';
  baseFontSize = 16;
  hasReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

  ngOnInit(): void {
    this.cleanUpBody();
    this.loadSettings();
    this.applyChanges();
  }

  toggleForm(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }

    this.showForm = !this.showForm;
  }

  closeForm(event?: MouseEvent): void {
    if (event) {
      event.stopPropagation();
    }

    if (this.showForm) {
      this.showForm = false;
    }
  }

  cleanUpBody(): void {
    const body = document.body;
    const htmlElement = document.documentElement;

    body.removeAttribute('dark-mode');
    body.removeAttribute('light-mode');
    body.removeAttribute('vertical');
    body.removeAttribute('rtl');
    body.removeAttribute('reduced-motion');
    htmlElement.removeAttribute('style');
  }

  applyChanges(): void {
    const body = document.body;
    const htmlElement = document.documentElement;

    console.log('updated UI settings: ');
    console.log({
      darkMode: this.isDarkMode,
      textDirection: this.textDirection,
      baseFontSize: this.baseFontSize,
      prefersReducedMotion: this.hasReducedMotion,
    });

    this.cleanUpBody();

    // update

    if (this.isDarkMode) {
      body.setAttribute('dark-mode', '');
    } else {
      body.setAttribute('light-mode', '');
    }
    body.setAttribute(this.textDirection, '');

    if ( this.hasReducedMotion) {
      body.setAttribute('reduced-motion', '');
    }

    htmlElement.style.fontSize = `${this.baseFontSize}px`;

    this.saveSettings();
  }

  private loadSettings(): void {
    const settings = localStorage.getItem('ui-controls-settings');
    if (settings) {
      const parsedSettings = JSON.parse(settings);
      this.isDarkMode = parsedSettings.darkMode;
      this.textDirection = parsedSettings.textDirection;
      this.baseFontSize = parsedSettings.baseFontSize;
      this.hasReducedMotion = parsedSettings.prefersReducedMotion;

      console.log('cached UI settings: ');
      console.log(parsedSettings);
    }
  }

  private saveSettings(): void {
    const settings = {
      darkMode: this.isDarkMode,
      textDirection: this.textDirection,
      baseFontSize: this.baseFontSize,
      prefersReducedMotion: this.hasReducedMotion
    };
    localStorage.setItem('ui-controls-settings', JSON.stringify(settings));
  }

  // Fix two-way data binding checkbox bug

  onDarkModeCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.isDarkMode = target.checked;
  }

  onReducedMotionCheckboxChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.hasReducedMotion = target.checked;
  }
}
