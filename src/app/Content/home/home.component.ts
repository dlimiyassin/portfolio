import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingService } from '../../services/loading.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  animateSections = false;
  pageLoaded : boolean = false;

  constructor(private router : Router, private messageService: MessageService, private loadService: LoadingService){}

  ngOnInit(): void {
    // // this.adjustPageSize();
    this.scrollToTop();

    this.pageLoaded = true
      setTimeout(() => {
      this.animateSections = true;
    }, 200);

    if(this.loadService.getreminder()){
      setTimeout(() => {
        this.showMessage()
        this.loadService.setReminder(false)
      },8000)
    }
  }


    ngAfterViewInit(): void {
    // wait for full window load (all assets loaded)
    window.addEventListener('load', () => {
      this.pageLoaded = true
      setTimeout(() => {
      this.animateSections = true;
    }, 200);
    });

    console.log(
    "%c Hand-coded with ❤️ by Yassine Dlimi\n%cBuilt with Angular + Tailwind. No templates used.",
    "color: #2EC7E2; font-size: 16px; font-weight: bold;",
    "color: black; font-size: 12px;"
    );
  }


showMessage() {
  this.messageService.add({
    severity: 'secondary',
    summary: 'Note',
    detail: 'This portfolio is 100% Hand-coded, No templates used',
    key: 'bc',
    styleClass: 'fixed text-black md:w-[100%] w-[80%] right-[10%] bottom-8 max-w-md'
  });

}



  scrollToTop(): void {
    
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log("cc")
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    //this.adjustPageSize();
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