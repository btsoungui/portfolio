import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isDark = false;
  menuOuvert = false;

toggleMenu() {
  this.menuOuvert = !this.menuOuvert;
}

  toggleTheme() {
    this.isDark = !this.isDark;
    document.body.classList.toggle('light-mode');
  }
}
