import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';
import { GSAPService } from '../../services/gsap.service';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements AfterViewInit {

  private _gsapService = inject(GSAPService);
  private _platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {

    console.log("ngAfterViewInit", 'platformId', this._platformId, 'isPlatformBrowser', isPlatformBrowser(this._platformId))
    if (isPlatformBrowser(this._platformId)) {
      console.log("Executing PlatformBrowser code.")
      this._initializeAnimation();
    }

  }


  private _initializeAnimation(): void {
    const tl = this._gsapService.gsap.timeline({
      scrollTrigger: {
          scroller: ".scroller",
          trigger: ".trigger",
          start: "top center",
          end: "bottom center",
          scrub: true,
          markers: true,
      }
    });

    tl.to('.trigger', {
      x: 800
    });
  }
}
