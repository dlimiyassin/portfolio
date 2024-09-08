import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit, OnDestroy {
  projectName: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: any, private route: ActivatedRoute, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    // Subscribe to route parameters
    this.route.paramMap.subscribe(params => {
      this.projectName = params.get('name');
    });
    this.bindDocumentListeners();
  }

  images: any[] | undefined = [
    {
      itemImageSrc: '../../../assets/pics/uir-shop.jfif',
      thumbnailImageSrc: '../../../assets/pics/uir-shop.jfif',
      alt: 'uirshop',
      title: 'uirshop'
  },
  {
    itemImageSrc: '../../../assets/pics/career-hub.jfif',
    thumbnailImageSrc: '../../../assets/pics/career-hub.jfif',
    alt: 'career',
    title: 'career'
},
{
  itemImageSrc: '../../../assets/pics/oncf.jfif',
  thumbnailImageSrc: '../../../assets/pics/oncf.jfif',
  alt: 'oncf',
  title: 'oncf'
}
  ];
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
