import { Component } from '@angular/core';
import { MainLayout } from "./layout/main-layout/main-layout";
import { PortfolioPage } from './pages/portfolio/portfolio.page';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayout, PortfolioPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App { }
