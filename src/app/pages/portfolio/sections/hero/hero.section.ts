import { Component } from '@angular/core';
import { SHARED_UI } from '../../../../shared';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [...SHARED_UI],
  templateUrl: './hero.section.html',
  styleUrl: './hero.section.scss'
})
export class HeroSection {

}
