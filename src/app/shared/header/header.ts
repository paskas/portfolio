import { Component } from '@angular/core';
import { SHARED_UI } from '..';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...SHARED_UI],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header { }
