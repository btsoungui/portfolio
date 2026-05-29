import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.html',
  styleUrl: './photo.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Photo {
  readonly portraitUrl = 'portrait.jpg';
  readonly authorName = 'Bryan';
  readonly role = 'Étudiant en BUT Informatique';
  readonly caption = 'Développeur web passionné par Angular et les technologies modernes';
  readonly cvUrl = '/cv.pdf';
  readonly cvFilename = 'Bryan_CV.pdf';
}
