import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-minibar',
  templateUrl: './minibar.component.html',
  styleUrl: './minibar.component.css'
})
export class MinibarComponent {

  downloadPdf(){

    const link = document.createElement('a');

    link.href = 'assets/files/Dlimi_Yassine_Java_Angular_eng.pdf';
    link.download = 'Dlimi_Yassine_Java_Angular_eng.pdf'
    link.target='_blank'
    link.click()
  }
}
