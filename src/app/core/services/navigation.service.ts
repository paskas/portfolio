import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class NavigationService {
  scrollTo(id: string): void {
    const scrollId = document.getElementById(id);
    if (scrollId) {
      scrollId.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  scrollToAndFocus(id: string, focusSelector: string): void { 
    const scrollId = document.getElementById(id);
    if (!scrollId) { return; }
    scrollId.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      const target = document.querySelector(focusSelector) as HTMLElement | null;
      if (target) {
        target.focus();
      }
    }, 300);
  }
}