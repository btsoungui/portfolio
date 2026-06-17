import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isDark = false;
  menuOuvert = false;
  private readonly themeTransitionDurationMs = 300;
  private themeTransitionTimeout: ReturnType<typeof setTimeout> | undefined;

  toggleMenu() {
    this.menuOuvert = !this.menuOuvert;
  }

  closeMenu() {
    this.menuOuvert = false;
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.runThemeTransition();
  }

  private runThemeTransition(): void {
    clearTimeout(this.themeTransitionTimeout);

    if (document.startViewTransition) {
      document.body.classList.add('theme-view-transitioning');

      const transition = document.startViewTransition(() => {
        document.body.classList.toggle('light-mode');
      });

      transition.finished.finally(() => {
        document.body.classList.remove('theme-view-transitioning');
      });

      return;
    }

    document.body.classList.add('theme-transitioning');
    document.body.classList.toggle('light-mode');

    this.themeTransitionTimeout = setTimeout(() => {
      document.body.classList.remove('theme-transitioning');
    }, this.themeTransitionDurationMs);
  }
}
