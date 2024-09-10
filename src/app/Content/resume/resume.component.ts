import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  animate = false;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animate = true;
    }, 0);
  }
  langauges: Skill[] = [
    { title: "Java", progress: 80 },
    { title: "TypeScript", progress: 70 },
    { title: "HTML, CSS, JS", progress: 70 },
  ];

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }



  educations : Education[] = [
    {
      title : "Spring boot - Angular certification",
      year : "2023-2024",
      school : "International University of Rabat."
    },    
    {
      title : "Bachelor’s degree in computer science",
      year : "2019-2023",
      school : "Sciences and technologies Faculty of Beni Mellal."
    },
    {
      title : " High school degree in physical science",
      year : "2018-2019",
      school : "Hassan 2 in Beni Mellal."
    }

  ]

  experiances : Experiance[] = [
    {
      post : "fullstack Java Angular",
      starting_date : "Aug, 2024",
      ending_date: "Mars, 2024",
      comapny : "JobInTech",
      description: "I create applications from scratch, ensure project maintenance, and develop responsive user interfaces for an optimal experience across all devices"
    },    
    {
      post : "fullstack Java Angular",
      starting_date : "Feb, 2024",
      ending_date: "Oct, 2023",
      comapny : "Training Edge Consulting",
      description: "Developed a web application to manage company employees, allowing them to take exams to assess their professional progress"
    }

  ]

  framworks: Skill[]=[
    {
      title: "Spring",
      progress : 80
    },
    {
      title: "Angular",
      progress : 70
    },
    {
      title: "Tailwind",
      progress : 70
    },
  ]



  database: Skill[]=[
    {
      title: "SQL",
      progress : 80
    },    
    {
      title: "SQL SERVER",
      progress : 50
    },
    {
      title: "UML",
      progress : 60
    },
    {
      title: "MySQL",
      progress : 90
    },
    {
      title: "PostgreSQL",
      progress : 70
    },
  ]

  langes: Skill[]=[
    {
      title: "Arabic",
      progress : 90
    },
    {
      title: "English",
      progress : 80
    },
    {
      title: "French",
      progress : 70
    },

  ]
}





class Education {
  title : string;
  year : string;
  school : string;

  constructor(title :string, year : string, school : string) {
    this.title = title
    this.year = year
    this.school = school
  }
}

class Experiance {
  post : string;
  starting_date : string;
  ending_date : string;
  comapny : string;
  description : string;

  constructor(post :string, starting_date : string, description : string, comapny:string, ending_date:string) {
    this.post = post
    this.starting_date = starting_date
    this.ending_date = ending_date
    this.description = description
    this.comapny = comapny
  }
}

class Skill {
  title : string;
  progress : number;


  constructor(title :string, progress : number) {
    this.title = title
    this.progress = progress
  }
}