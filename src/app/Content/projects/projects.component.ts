import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }



  projects: any[] = [
    {
      name:'uir-shop',
      description : 'description',
      img : '../../../assets/pics/uir-shop.jfif'
    },
    {
      name:'oncf',
      description : 'description',
      img : '../../../assets/pics/oncf.jfif'
    },    {
      name:'career-hub',
      description : 'description',
      img : '../../../assets/pics/career-hub.jfif'
    }

  ];

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];;

  


}
