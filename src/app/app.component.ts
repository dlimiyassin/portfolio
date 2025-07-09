import { Component, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'portfolio';
  circleX = 0;
  circleY = 0;

  mouseX = 0;
  mouseY = 0;

  followerVisible = true;

  private animationFrameId: number | null = null;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;

    // Check element under cursor for pointer style
    const el = document.elementFromPoint(this.mouseX, this.mouseY);
    if (el) {
      const style = window.getComputedStyle(el);
      this.followerVisible = style.cursor !== 'pointer';
    }
  }

  ngOnInit() {
    const animate = () => {
      // Move follower smoothly: lerp factor (0.1 = slow, 1 = instant)
      this.circleX += (this.mouseX - this.circleX) * 0.1;
      this.circleY += (this.mouseY - this.circleY) * 0.1;

      this.animationFrameId = requestAnimationFrame(animate);
    };
    animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }
}
