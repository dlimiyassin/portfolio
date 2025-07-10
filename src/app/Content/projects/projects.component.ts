import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  
  isSmallScreen: boolean = false;

  constructor(private route : Router){
    this.checkScreenSize();
  }


  ngOnInit(): void {
    this.scrollToTop();
        this.adjustPageSize();
  }

    scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  screenWidth!: number;

  adjustPageSize(): void {
    this.screenWidth = window.innerWidth;;

  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
    this.adjustPageSize()
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }


  redirectToProject(name: string | undefined) {
    if (name) {
      this.route.navigateByUrl(`project/${name}`);
    }
  }
  

  hoveredIndex: number | null = null;

  projects : Project[] = [
    {
    name : 'Atlas-Service',
    title : "Atlas Service",
    description: "Fulfillment CRM for arrivals & orders management.",
    img: "assets/pics/logos/atlas-logo.png"
    },
    {
    name : 'Jit-Pilote',
    title : "JIT Pilote",
    description: "Project management tool using Agile framewokrs.",
    img: "assets/pics/logos/jit-logo.png"
    },
    {
    name : 'Uir-Shop',
    title : "UIR Shop",
    description: "E-Commerce Platform for UIR students.",
    img: "assets/pics/logos/uir-logo.png"
    },
    {
      name : 'E-Learning',
      title:'E-Learning',
      description : 'E-Learning platform',
      img : 'assets/pics/logos/elearning-logo.png'
    },
    {
      name : 'Oncf',
      title:'Oncf',
      description : 'Employee management platform',
      img : 'assets/pics/logos/oncf-logo.jfif'
    },
    {
      name : 'Career-Hub',
      title:'Career-Hub',
      description : 'Recretument platform',
      img : 'assets/pics/logos/career-logo.jfif'
    },
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