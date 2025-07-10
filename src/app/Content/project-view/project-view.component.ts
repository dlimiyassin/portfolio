import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  projects = ['Uir-Shop', 'Oncf', 'Career-Hub', 'E-Learning', 'Jit-Pilote', 'Atlas-Service'];
  currentProjectIndex = 0;
  constructor(private route: ActivatedRoute, private cd: ChangeDetectorRef,private router: Router, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.snycProject(params.get('name')) ;
    });

  }

snycProject(projectName: string | null) {
  switch(projectName) {
    case 'Uir-Shop': this.project = this.uir; break;
    case 'Oncf': this.project = this.oncf; break;
    case 'Career-Hub': this.project = this.career; break;
    case 'E-Learning': this.project = this.learning; break;
    case 'Jit-Pilote': this.project = this.jit; break;
    case 'Atlas-Service': this.project = this.atlas; break;
    default: this.project = this.atlas; break;
  }

  if (this.project.videoUrl) {
    this.project.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.project.videoUrl as string);
  }
}




  closeProject(): void {
    // Logic to handle the close action
    this.router.navigate(['/projects']);

  }



  project : Project | undefined;

  uir: Project = {
      title : 'Uir-Shop',
      description : 'UIR-SHOP is an e-commerce platform',
      link : 'http://156.67.81.207:8889/',
      client: 'for International University of Rabat',
      date : '15-06-2024',
      videoUrl : 'assets/pics/demos/uir-shop-demo.mp4',
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
  videoUrl : 'assets/pics/demos/uir-shop-demo.mp4',
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
  videoUrl : 'assets/pics/demos/uir-shop-demo.mp4',
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
    videoUrl :'assets/pics/demos/jit-pilote-demo.mp4',
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
    videoUrl : 'assets/pics/demos/e-learning-demo.mp4',
    technologies :  [
      'Spring Boot',
      'Angular',
      'Bootstrap'
    ]
  }

  atlas : Project = {
    title : 'Atlas Service',
    description: `Fulfillment CRM for manage managing arrivals importation and orders from confirmation to delivery.`,
    link : 'https://asglobalsourcing.com/',
    client: 'Atlas service',
    date : '15-03-2025',
    videoUrl : 'assets/pics/demos/atlas-service-demo.mp4',
    technologies :  [
      'Spring Boot',
      'Angular',
      'MongoDB',
      'Taildwind'
    ]
  }


}


export class Project {
  title:string;
  description : string;
  link : string;
  client : string;
  date : string;
  videoUrl : string | SafeResourceUrl | null ;
  technologies : string[]
  constructor(title : string, desc : string, link:string, date:string, client:string, videoUrl : string, techs : string[]){
    this.title=title;
    this.description=desc;
    this.link=link;
    this.client=client;
    this.date=date;
    this.videoUrl=videoUrl as SafeResourceUrl | null;
    this.technologies=techs;
  }

}
