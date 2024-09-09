import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { ActivatedRoute } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit, OnDestroy {

  constructor(@Inject(PLATFORM_ID) private platformId: any, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.snycProject(params.get('name')) ;
    });
    this.bindDocumentListeners();
    
  }
  snycProject(projectName : string | null){
    switch(projectName){
      case 'Uir-Shop' : this.project = this.uir; break;
      case 'Oncf' : this.project = this.oncf; break;
      case 'Career-Hub' : this.project = this.career; break;
      case 'E-Learning' : this.project = this.learning; break;
      case 'Jit-Pilote' : this.project = this.jit; break;
      default : this.project = this.uir; break;
    }
  }

  project : Project | undefined;

  uir: Project = {
      title : 'Uir-Shop',
      description : 'UIR-SHOP is an e-commerce platform',
      link : 'https://uirshop.jobintech.net/',
      client: 'for International University of Rabat',
      date : '15-06-2024',
      images : [
        {
          itemImageSrc: 'assets/pics/uir/1.jfif',
          thumbnailImageSrc: 'assets/pics/uir/1.jfif',
        },
        {
          itemImageSrc: 'assets/pics/uir/2.jfif',
          thumbnailImageSrc: 'assets/pics/uir/2.jfif',
        },
        {
          itemImageSrc: 'assets/pics/uir/3.jfif',
          thumbnailImageSrc: 'assets/pics/uir/3.jfif',
        },
      ],
      technologies :  [
        'Spring Boot',
        'Angular',
        'Tailwind CSS'
      ]
}

oncf: Project = {
  title : 'Oncf',
  description : 'The main objective is to facilitate the management of employees of a company, by offering them the possibility of taking exams in order to assess their professional progress within the organization.',
  link : 'https://github.com/dlimiyassin/oncf',
  client: 'Training Edge Consulting',
  date : '30-10-2023',
  images : [
    {
      itemImageSrc: 'assets/pics/oncf/1.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/1.jfif',
    },
    {
      itemImageSrc: 'assets/pics/oncf/2.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/2.jfif',
    },
    {
      itemImageSrc: 'assets/pics/oncf/3.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/3.jfif',
    },
    {
      itemImageSrc: 'assets/pics/oncf/4.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/4.jfif',
    },
    {
      itemImageSrc: 'assets/pics/oncf/5.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/5.jfif',
    },
    {
      itemImageSrc: 'assets/pics/oncf/6.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/6.jfif',
    },
    {
      itemImageSrc: 'assets/pics/oncf/7.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/7.jfif',
    },    {
      itemImageSrc: 'assets/pics/oncf/8.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/8.jfif',
    },    {
      itemImageSrc: 'assets/pics/oncf/9.jfif',
      thumbnailImageSrc: 'assets/pics/oncf/9.jfif',
    },
  ],
  technologies :  [
    "Spring Boot", 
    "Spring Security & JWT", 
    "Vérification par e-mail", 
    "Swagger", 
    "AWS EB", 
    "S3",
    "Angular", 
    "rxjs", 
    "Guards", 
    "Interceptors", 
    "Validation", 
    "ngx", 
    "Bootstrap"
  ]
}

career: Project = {
  title : 'Career-Hub',
  description : 'This is a recruiting platform that allows recruiters to post jobs and candidates to apply. This platform is developed with Angular and uses json-server as a database.',
  link : 'https://github.com/dlimiyassin/CareerHub',
  client: 'Learning purpose',
  date : '11-05-2024',
  images : [
    {
      itemImageSrc: 'assets/pics/career/1.jfif',
      thumbnailImageSrc: 'assets/pics/career/1.jfif',
    },
    {
      itemImageSrc: 'assets/pics/career/2.jfif',
      thumbnailImageSrc: 'assets/pics/career/2.jfif',
    },
    {
      itemImageSrc: 'assets/pics/career/3.jfif',
      thumbnailImageSrc: 'assets/pics/career/3.jfif',
    },
    {
      itemImageSrc: 'assets/pics/career/4.jfif',
      thumbnailImageSrc: 'assets/pics/career/4.jfif',
    },
    {
      itemImageSrc: 'assets/pics/career/5.jfif',
      thumbnailImageSrc: 'assets/pics/career/5.jfif',
    },
    {
      itemImageSrc: 'assets/pics/career/6.jfif',
      thumbnailImageSrc: 'assets/pics/career/6.jfif',
    },
    {
      itemImageSrc: 'assets/pics/career/7.jfif',
      thumbnailImageSrc: 'assets/pics/career/7.jfif',
    },    {
      itemImageSrc: 'assets/pics/career/8.jfif',
      thumbnailImageSrc: 'assets/pics/career/8.jfif',
    },    {
      itemImageSrc: 'assets/pics/career/9.jfif',
      thumbnailImageSrc: 'assets/pics/career/9.jfif',
    },
    ,    {
      itemImageSrc: 'assets/pics/career/10.jfif',
      thumbnailImageSrc: 'assets/pics/career/10.jfif',
    },
    ,    {
      itemImageSrc: 'assets/pics/career/11.jfif',
      thumbnailImageSrc: 'assets/pics/career/11.jfif',
    },
  ],
  technologies :  [
    'Angular',
    'Tailwind CSS'
  ]
}



  jit : Project =  {
    title : 'Jit-Pilote',
    description : 'Jit-Pilote is a project management tool that implements the Scrum framework to manage IT projects.',
    link : 'https://jitpilote.jobintech.net/',
    client: 'JobInTech',
    date : '04-07-2024',
    images : [
      {
        itemImageSrc: 'assets/pics/jit/1.jpg',
        thumbnailImageSrc: 'assets/pics/jit/1.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/2.jpg',
        thumbnailImageSrc: 'assets/pics/jit/2.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/3.jpg',
        thumbnailImageSrc: 'assets/pics/jit/3.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/4.jpg',
        thumbnailImageSrc: 'assets/pics/jit/4.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/5.jpg',
        thumbnailImageSrc: 'assets/pics/jit/5.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/6.jpg',
        thumbnailImageSrc: 'assets/pics/jit/6.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/7.jpg',
        thumbnailImageSrc: 'assets/pics/jit/7.jpg',
      },    {
        itemImageSrc: 'assets/pics/jit/8.jpg',
        thumbnailImageSrc: 'assets/pics/jit/8.jpg',
      },    {
        itemImageSrc: 'assets/pics/jit/9.jpg',
        thumbnailImageSrc: 'assets/pics/jit/9.jpg',
      },
      ,    {
        itemImageSrc: 'assets/pics/jit/10.jpg',
        thumbnailImageSrc: 'assets/pics/jit/10.jpg',
      },
      ,    {
        itemImageSrc: 'assets/pics/jit/11.jpg',
        thumbnailImageSrc: 'assets/pics/jit/11.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/12.jpg',
        thumbnailImageSrc: 'assets/pics/jit/12.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/13.jpg',
        thumbnailImageSrc: 'assets/pics/jit/13.jpg',
      },    {
        itemImageSrc: 'assets/pics/jit/14.jpg',
        thumbnailImageSrc: 'assets/pics/jit/14.jpg',
      },    {
        itemImageSrc: 'assets/pics/jit/15.jpg',
        thumbnailImageSrc: 'assets/pics/jit/15.jpg',
      },
      ,    {
        itemImageSrc: 'assets/pics/jit/16.jpg',
        thumbnailImageSrc: 'assets/pics/jit/16.jpg',
      },
      {
        itemImageSrc: 'assets/pics/jit/30.jpg',
        thumbnailImageSrc: 'assets/pics/jit/30.jpg',
      },
    ],
    technologies :  [
      'Spring Boot',
      'Angular',
      'Tailwind CSS'
    ]
  }




  learning : Project = {
    title : 'E-Learning',
    description: `This is an online learning platform, E-Learning, made up of three distinct users:<br>
                  <ul>
                    <li><strong>Admin:</strong> is dedicated to managing user accounts and course modules.</li>
                    <li><strong>Teacher:</strong> can download courses as well as create and manage exams.</li>
                    <li><strong>Student:</strong> has the ability to view available courses and take exams corresponding to their level.</li>
                  </ul>`,
    link : 'https://github.com/dlimiyassin/Elearning',
    client: 'Graduation Project',
    date : '15-03-2022',
    images : [
      {
        itemImageSrc: 'assets/pics/learning/1.png',
        thumbnailImageSrc: 'assets/pics/learning/1.png',
      },
      {
        itemImageSrc: 'assets/pics/learning/2.png',
        thumbnailImageSrc: 'assets/pics/learning/2.png',
      },
      {
        itemImageSrc: 'assets/pics/learning/3.png',
        thumbnailImageSrc: 'assets/pics/learning/3.png',
      },
      {
        itemImageSrc: 'assets/pics/learning/4.png',
        thumbnailImageSrc: 'assets/pics/learning/4.png',
      },
      {
        itemImageSrc: 'assets/pics/learning/5.jpeg',
        thumbnailImageSrc: 'assets/pics/learning/5.jpeg',
      },
      {
        itemImageSrc: 'assets/pics/learning/6.png',
        thumbnailImageSrc: 'assets/pics/learning/6.png',
      },
      {
        itemImageSrc: 'assets/pics/learning/7.png',
        thumbnailImageSrc: 'assets/pics/learning/7.png',
      },    {
        itemImageSrc: 'assets/pics/learning/8.jpeg',
        thumbnailImageSrc: 'assets/pics/learning/8.jpeg',
      },    {
        itemImageSrc: 'assets/pics/learning/9.jpg',
        thumbnailImageSrc: 'assets/pics/learning/9.jpg',
      },
      ,    {
        itemImageSrc: 'assets/pics/learning/10.jpg',
        thumbnailImageSrc: 'assets/pics/learning/10.jpg',
      },
      ,    {
        itemImageSrc: 'assets/pics/learning/11.jpg',
        thumbnailImageSrc: 'assets/pics/learning/11.jpg',
      },
      {
        itemImageSrc: 'assets/pics/learning/12.jpg',
        thumbnailImageSrc: 'assets/pics/learning/12.jpg',
      },
      {
        itemImageSrc: 'assets/pics/learning/13.jpg',
        thumbnailImageSrc: 'assets/pics/learning/13.jpg',
      },    {
        itemImageSrc: 'assets/pics/learning/14.jpg',
        thumbnailImageSrc: 'assets/pics/learning/14.jpg',
      },    {
        itemImageSrc: 'assets/pics/learning/15.jpg',
        thumbnailImageSrc: 'assets/pics/learning/15.jpg',
      },
      ,    {
        itemImageSrc: 'assets/pics/learning/16.jpg',
        thumbnailImageSrc: 'assets/pics/learning/16.jpg',
      },
    ],
    technologies :  [
      'Spring Boot',
      'Angular',
      'Bootstrap'
    ]
  }

  showThumbnails: boolean | undefined;
  fullscreen: boolean = false;
  activeIndex: number = 0;
  onFullScreenListener: any;

  @ViewChild('galleria') galleria: Galleria | undefined;

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  onThumbnailButtonClick() {
    this.showThumbnails = !this.showThumbnails;
  }

  toggleFullScreen() {
    if (this.fullscreen) {
      this.closePreviewFullScreen();
    } else {
      this.openPreviewFullScreen();
    }

    this.cd.detach();
  }

  openPreviewFullScreen() {
    const elem = this.galleria?.element.nativeElement.querySelector('.p-galleria');
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    }
  }

  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
    this.cd.detectChanges();
    this.cd.reattach();
  }

  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  bindDocumentListeners() {
    this.onFullScreenListener = this.onFullScreenChange.bind(this);
    document.addEventListener('fullscreenchange', this.onFullScreenListener);
  }

  unbindDocumentListeners() {
    document.removeEventListener('fullscreenchange', this.onFullScreenListener);
    this.onFullScreenListener = null;
  }

  ngOnDestroy() {
    this.unbindDocumentListeners();
  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }

  fullScreenIcon() {
    return `pi ${this.fullscreen ? 'pi-window-minimize' : 'pi-window-maximize'}`;
  }
}


export class Project {
  title:string;
  description : string;
  link : string;
  client : string;
  date : string;
  images : any[] | undefined;
  technologies : string[]
  constructor(title : string, desc : string, link:string, date:string, client:string, images : any[] | undefined, techs : string[]){
    this.title=title;
    this.description=desc;
    this.link=link;
    this.client=client;
    this.date=date;
    this.images=images;
    this.technologies=techs;
  }

}