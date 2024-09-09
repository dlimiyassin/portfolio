import { Component, HostListener } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: any[] = [
    {
      name:'Uir-Shop',
      description : 'E-commerce platform',
      img : 'assets/pics/uir/1.jfif'
    },
    {
      name:'Oncf',
      description : 'Employee management platform',
      img : 'assets/pics/oncf/1.jfif'
    },    {
      name:'Career-Hub',
      description : 'Recretument platform',
      img : 'assets/pics/career/1.jfif'
    },
    {
      name:'E-Learning',
      description : 'E-Learning platform',
      img : 'assets/pics/learning/1.png'
    },
    {
      name:'Jit-Pilote',
      description : ' project management tool',
      img : 'assets/pics/jit/1.jpg'
    }

  ];

  
  isSmallScreen: boolean = false;

  constructor(private route : Router){
    this.checkScreenSize();
  }


  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }


  redirectToProject(name: string | undefined) {
    if (name) {
      this.route.navigateByUrl(`project/${name}`);
    }
  }
  


}
