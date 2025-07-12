import { Component, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { fader, slider, transform, pageFlip } from '../route.animations';
import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    pageFlip,
    slider,
    fader, 
    transform, 
  ],
})
export class LayoutComponent {

constructor(private router: Router, private cdr: ChangeDetectorRef ){
  this.router.events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe(() => {
      const container = document.querySelector('.content-container');
      if (container) container.scrollTo(0, 0);
    });
}


  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngAfterViewInit() {
    // Force a change detection cycle to handle the animation value
    this.cdr.detectChanges();
  }
}
