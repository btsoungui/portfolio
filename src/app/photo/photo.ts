import { Component } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.html',
  styleUrl: './photo.scss',
})
export class Photo {
  readonly portraitUrl = 'portrait.jpg';
  readonly authorName = 'Bryan';
  readonly role = 'Étudiant en BUT Informatique';
  readonly caption = "Portrait stylisé dans l’univers du portfolio";
  readonly cvUrl = '/cv.pdf';
  readonly cvFilename = 'Bryan_CV.pdf';
}
