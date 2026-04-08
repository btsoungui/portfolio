import { Component, signal } from '@angular/core';
import { Navbar } from "./components/navbar/navbar";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { Contact } from "./components/contact/contact";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [Navbar, About, Hero, Projects, Skills, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
