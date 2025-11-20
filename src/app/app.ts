import { Component, signal, AfterViewInit, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements AfterViewInit {
  protected readonly title = signal('Inventario');
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');
      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => navLinks.classList.toggle('active'));
        document.querySelectorAll('.nav-links a').forEach(link =>
          link.addEventListener('click', () => navLinks.classList.remove('active'))
        );
      }
    }
  }
}
