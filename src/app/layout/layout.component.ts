import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider, transform } from '../route.animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    transform, 
    fader, 
    slider
  ],
})
export class LayoutComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngAfterViewInit() {
    // Force a change detection cycle to handle the animation value
    this.cdr.detectChanges();
  }
}
