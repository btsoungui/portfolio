import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements OnInit {
  getIconUrl(skillName: string): string {
    const lang = skillName.toLowerCase().split(' ')[0];
    return `https://unpkg.com/devicon@latest/icons/${lang}/${lang}-original.svg`;
  }
  skills = [
    { nom: 'HTML', niveau: 80, affiche: 0, image: 'html5', type: 'language' },
    { nom: 'CSS', niveau: 80, affiche: 0, image: 'css3', type: 'language' },
    { nom: 'JavaScript', niveau: 65, affiche: 0, image: 'javascript', type: 'language' },
    { nom: 'TypeScript', niveau: 70, affiche: 0, image: 'typescript', type: 'language' },
    { nom: 'Angular', niveau: 40, affiche: 0, image: 'angular', type: 'framework' },
    { nom: 'Java', niveau: 80, affiche: 0, image: 'java', type: 'language' },
    { nom: 'SQL', niveau: 65, affiche: 0, image: 'mysql', type: 'language' },
    { nom: 'PL/SQL', niveau: 65, affiche: 0, image: 'oracle', type: 'language' },
    { nom: 'MongoDB', niveau: 70, affiche: 0, image: 'mongodb', type: 'language' },
    { nom: 'C', niveau: 70, affiche: 0, image: 'c', type: 'language' },
    { nom: 'Vue.js', niveau: 50, affiche: 0, image: 'vuejs', type: 'framework' },
    { nom: 'Symfony', niveau: 60, affiche: 0, image: 'symfony', type: 'framework' },
    { nom: 'PHP', niveau: 75, affiche: 0, image: 'php', type: 'language' },
    { nom: 'React', niveau: 75, affiche: 0, image: 'react', type: 'framework' },
    { nom: 'Next.Js', niveau: 75, affiche: 0, image: 'nextjs', type: 'framework' },
    { nom: 'Kotlin', niveau: 70, affiche: 0, image: 'kotlin', type: 'language' },
    { nom: 'Python', niveau: 75, affiche: 0, image: 'python', type: 'language' },
    { nom: 'Jetpack Compose', niveau: 60, affiche: 0, image: 'android', type: 'framework' },
    { nom: '.NET', niveau: 70, affiche: 0, image: 'csharp', type: 'framework' },
    { nom: 'Spring Boot', niveau: 75, affiche: 0, image: 'spring', type: 'framework' },
    { nom: 'Git', niveau: 85, affiche: 0, image: 'git', type: 'tool' },
    { nom: 'Docker', niveau: 75, affiche: 0, image: 'docker', type: 'tool' },
    { nom: 'VS Code', niveau: 90, affiche: 0, image: 'vscode', type: 'tool' },
    { nom: 'Postman', niveau: 80, affiche: 0, image: 'postman', type: 'tool' },
    { nom: 'Jetbrains', niveau: 85, affiche: 0, image: 'jetbrains', type: 'tool' },

  ];

  get langSkills() {
    return this.skills.filter(skill => skill.type === 'language');
  }

  get frameworkSkills() {
    return this.skills.filter(skill => skill.type === 'framework');
  }

  get toolSkills() {
    return this.skills.filter(skill => skill.type === 'tool');
  }

  constructor(private cd: ChangeDetectorRef) {}
  trackByNom(skill: any): string {
    return skill.nom;
  }
  
  onImgError(event: any) {
  event.target.src = 'monkey.png';
}

  ngOnInit() {
    setTimeout(() => {
      this.skills = this.skills.map(skill => ({
        ...skill,
        affiche: skill.niveau
      }));
      this.cd.detectChanges(); 
    }, 200);
  }
}

  