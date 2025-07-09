import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  // projects: any[] = [
  //   {
  //     name:'Uir-Shop',
  //     description : 'E-commerce platform',
  //     img : 'assets/pics/uir/1.jfif'
  //   },
  //   {
  //     name:'Oncf',
  //     description : 'Employee management platform',
  //     img : 'assets/pics/oncf/1.jfif'
  //   },
  //   {
  //     name:'Jit-Pilote',
  //     description : ' project management tool',
  //     img : 'assets/pics/jit/1.jpg'
  //   },
  //   {
  //     name:'E-Learning',
  //     description : 'E-Learning platform',
  //     img : 'assets/pics/learning/1.png'
  //   },
  //   {
  //     name:'Career-Hub',
  //     description : 'Recretument platform',
  //     img : 'assets/pics/career/1.jfif'
  //   },
  // ];

  
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
    title : "Atlas Service",
    description: "Fulfillment CRM for arrivals & orders management.",
    img: "assets/pics/logos/atlas-logo.png"
    },
    {
    title : "UIR Shop",
    description: "E-Commerce Platform for UIR students.",
    img: "assets/pics/logos/uir-logo.png"
    },
    {
    title : "JIT Pilote",
    description: "Project management tool using Agile framewokrs.",
    img: "assets/pics/logos/jit-logo.png"
    },
    {
      title:'Oncf',
      description : 'Employee management platform',
      img : 'assets/pics/oncf/1.jfif'
    },
    {
      title:'E-Learning',
      description : 'E-Learning platform',
      img : 'assets/pics/learning/1.png'
    },
    {
      title:'Career-Hub',
      description : 'Recretument platform',
      img : 'assets/pics/career/1.jfif'
    },
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