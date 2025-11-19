import { Routes } from '@angular/router';
import { PortfolioPage } from './pages/portfolio/portfolio.page';
import { LegalNoticePage } from './pages/legal-notice/legal-notice.page';
import { PrivacyPolicyPage } from './pages/privacy-policy/privacy-policy.page';


export const routes: Routes = [
  { path: '', component: PortfolioPage, title: 'Pascal Kasbeitzer' },
  { path: 'legal-notice', component: LegalNoticePage, title: 'Legal Notice' },
  { path: 'privacy-policy', component: PrivacyPolicyPage, title: 'Privacy Policy' },
  { path: '**', redirectTo: '' }
];
