import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  skills = [
    { nom: 'HTML / CSS', niveau: 80, affiche: 0 },
    { nom: 'JavaScript', niveau: 65, affiche: 0 },
    { nom: 'Angular', niveau: 40, affiche: 0 },
    { nom: 'Java', niveau: 60, affiche: 0 },
    { nom: 'SQL', niveau: 55, affiche: 0 },
  ];
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.skills = this.skills.map(skill => ({
        ...skill,
        affiche: skill.niveau
      }));
      this.cd.detectChanges(); // 👈 force Angular à redessiner
    }, 200);
  }
}