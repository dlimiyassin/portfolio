import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  animateSections = false;

  constructor(private router : Router){}

  ngOnInit(): void {
    this.adjustPageSize();
    this.scrollToTop();
    setTimeout(() => {
      this.animateSections = true;
    }, 100); // delay to allow initial render
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustPageSize();
  }
  screenWidth!: number;

  adjustPageSize(): void {
    this.screenWidth = window.innerWidth;;
    if (this.screenWidth <= 1024) {
      this.router.navigateByUrl("/about")
    } 
  }

  projects : Project[] = [
    {
    title : "Atlas Service",
    description: "Fulfillment CRM that will help you manage your arrivals and leads and take your business to next level.",
    img: "assets/pics/logos/atlas-logo.png"
    },
    {
    title : "UIR Shop",
    description: "E-Commerce Platform that will help you manage your Orders and leads and take your business to next level.",
    img: "assets/pics/logos/uir-logo.png"
    },
    {
    title : "JIT Pilote",
    description: "Project management tool that will help you manage your projects using Agile framewokrs.",
    img: "assets/pics/logos/jit-logo.png"
    }
]
}


class Project {
  title : string;
  description : string;
  img: string;


  constructor(title :string, desc : string, img: string) {
    this.title = title
    this.description = desc
    this.img = img
  }
}