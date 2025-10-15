import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

import { ButtonsComponent } from "./buttons/buttons.component";
import { LinkComponent } from "./link/link.component";
import { LanguageSwitchComponent } from "./language-switch/language-switch.component";

export const SHARED_UI = [
  CommonModule,
  RouterOutlet,
  ButtonsComponent,
  LinkComponent,
  LanguageSwitchComponent
] as const;

export { ButtonsComponent } from "./buttons/buttons.component";
export { LinkComponent } from "./link/link.component";
export { LanguageSwitchComponent } from "./language-switch/language-switch.component";