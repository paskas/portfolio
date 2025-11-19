import { Routes } from '@angular/router';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { LegalNoticePage } from './pages/legal-notice/legal-notice.page';


export const routes: Routes = [
  { path: '', component: PortfolioPage, title: 'Pascal Kasbeitzer' },
  { path: 'legal-notice', component: LegalNoticePage, title: 'Legal Notice' },
  { path: '**', redirectTo: '' }
];
