import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-controls',
  templateUrl: './ui-controls.component.html',
  styleUrls: ['./ui-controls.component.scss']
})
export class UiControlsComponent implements OnInit {
  showForm = false;
  darkMode = false;
  textDirection = 'ltr';
  baseFontSize = 16;

  ngOnInit(): void {
    this.cleanUpBody();
    this.loadSettings();
    this.applyChanges();

    console.log('ngOnInit() called');
    console.log({
      darkMode: this.darkMode,
      textDirection: this.textDirection,
      baseFontSize: this.baseFontSize,
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  closeForm(): void {
    this.showForm = false;
  }

  cleanUpBody(): void {
    const body = document.body;
    const htmlElement = document.documentElement;

    body.removeAttribute('dark-mode');
    body.removeAttribute('light-mode');
    body.removeAttribute('vertical');
    body.removeAttribute('rtl');
    htmlElement.removeAttribute('style');
  }

  applyChanges(): void {
    const body = document.body;
    const htmlElement = document.documentElement;

    console.log('applyChanges() called');
    console.log({
      darkMode: this.darkMode,
      textDirection: this.textDirection,
      baseFontSize: this.baseFontSize,
    });

    this.cleanUpBody();

    // update

    if (this.darkMode) {
      body.setAttribute('dark-mode', '');
    } else {
      body.setAttribute('light-mode', '');
    }
    body.setAttribute(this.textDirection, '');
    htmlElement.style.fontSize = `${this.baseFontSize}px`;

    this.saveSettings();
  }

  private loadSettings(): void {
    const settings = localStorage.getItem('ui-controls-settings');
    if (settings) {
      const parsedSettings = JSON.parse(settings);
      this.darkMode = parsedSettings.darkMode;
      this.textDirection = parsedSettings.textDirection;
      this.baseFontSize = parsedSettings.baseFontSize;
      console.log(parsedSettings);
    }
  }

  private saveSettings(): void {
    const settings = {
      darkMode: this.darkMode,
      textDirection: this.textDirection,
      baseFontSize: this.baseFontSize,
    };
    localStorage.setItem('ui-controls-settings', JSON.stringify(settings));
  }
}
