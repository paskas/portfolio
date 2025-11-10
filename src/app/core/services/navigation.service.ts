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
}