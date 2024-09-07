import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() { }

  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  downloadPdf(){

    const link = document.createElement('a');

    link.href = 'assets/files/Dlimi_Yassine_Java_Angular_eng.pdf';
    link.download = 'Dlimi_Yassine_Java_Angular_eng.pdf'
    link.target='_blank'
    link.click()
  }
}
