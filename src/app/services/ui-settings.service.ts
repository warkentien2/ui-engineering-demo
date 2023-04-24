import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface UiSettings {
  darkMode: boolean;
  textDirection: string;
  baseFontSize: number;
  prefersReducedMotion: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UiSettingsService {
  private settings: UiSettings = {
    darkMode: false,
    textDirection: 'ltr',
    baseFontSize: 16,
    prefersReducedMotion: false,
  };

  private baseFontSizeChange = new BehaviorSubject<number>(this.settings.baseFontSize);
  baseFontSizeChange$ = this.baseFontSizeChange.asObservable();

  private textDirectionChange = new BehaviorSubject<string>(this.settings.textDirection);
  textDirectionChange$ = this.textDirectionChange.asObservable();

  updateSettings(newSettings: UiSettings): void {
    this.settings = newSettings;
    this.baseFontSizeChange.next(this.settings.baseFontSize);
    this.textDirectionChange.next(this.settings.textDirection);
  }

  getSettings(): UiSettings {
    return this.settings;
  }
}

