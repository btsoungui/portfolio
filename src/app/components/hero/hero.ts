import { Component } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'app-hero',
  imports: [Photo],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}
