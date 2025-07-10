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


    if (document.readyState === 'complete') {
      console.log("kayn");
          setTimeout(() => {
      this.animateSections = true;
    }, 100);
    } else {
    window.addEventListener('load', () => {
    console.log(true);
        setTimeout(() => {
      this.animateSections = true;
    }, 100);
    });
}
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

    redirectToProject(name: string | undefined) {
    if (name) {
      this.router.navigateByUrl(`project/${name}`);
    }
  }

  
  hoveredIndex: number | null = null;

  projects : Project[] = [
    {
    name : 'Atlas-Service',
    title : "Atlas Service",
    description: "Fulfillment CRM that will help you manage your arrivals and leads and take your business to next level.",
    img: "assets/pics/logos/atlas-logo.png"
    },
    {
    name : 'Uir-Shop',
    title : "UIR Shop",
    description: "E-Commerce Platform that will help you manage your Orders and leads and take your business to next level.",
    img: "assets/pics/logos/uir-logo.png"
    },
    {
    name : 'Jit-Pilote',
    title : "JIT Pilote",
    description: "Project management tool that will help you manage your projects using Agile framewokrs.",
    img: "assets/pics/logos/jit-logo.png"
    }
]
}

class Project {
  name: string;
  title : string;
  description : string;
  img: string;


  constructor(name: string, title :string, desc : string, img: string) {
    this.name= name
    this.title = title
    this.description = desc
    this.img = img
  }
}