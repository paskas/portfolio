import { Component } from '@angular/core';
import { SHARED_UI } from '..';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [...SHARED_UI],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer { }
