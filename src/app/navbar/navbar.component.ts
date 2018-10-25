import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PageScrollInstance, PageScrollService, PageScrollConfig } from 'ngx-page-scroll';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public parent = 0;
  public child = 0;

  @ViewChild('container')
  private container: ElementRef;

  constructor(
    private pageScrollService: PageScrollService,
    @Inject(DOCUMENT) private document: any
  ) { 
    PageScrollConfig.defaultDuration = 750;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };
  }

  public scrollTo(id): void {
     let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, id);
     this.pageScrollService.start(pageScrollInstance);
   };    

  ngOnInit() {
  }

}
