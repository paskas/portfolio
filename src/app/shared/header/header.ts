import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SHARED_UI } from '..';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [...SHARED_UI, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header { }
