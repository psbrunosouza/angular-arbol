import { Injectable } from '@angular/core';
import {IThemeService, DARK, LIGHT, Theme} from "./theme";

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements IThemeService{

  private active: Theme = LIGHT;

  private availableThemes: Theme[] = [DARK, LIGHT];

  constructor() { }

  init(): void {
    this.setActiveTheme(DARK);
  }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setActiveTheme(theme: Theme): void {
    this.active = theme;

    Object.keys(this.active.variables).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.variables[property]
      );
    });
  }
}
