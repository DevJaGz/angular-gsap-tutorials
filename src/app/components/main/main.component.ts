import {
  AfterViewInit,
  Component,
  ElementRef,
  PLATFORM_ID,
  ViewChild,
  inject,
} from '@angular/core';
import { GSAPService } from '../../services/gsap.service';
import { isPlatformBrowser } from '@angular/common';
import { LenisService } from '../../services/lenis.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements AfterViewInit {
  @ViewChild('scrollerRef', { static: true })
  scrollerRef!: ElementRef<HTMLElement>;

  private _gsapService = inject(GSAPService);
  private _lenisService = inject(LenisService);
  private _platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    console.log(
      'ngAfterViewInit',
      'platformId',
      this._platformId,
      'isPlatformBrowser',
      isPlatformBrowser(this._platformId)
    );
    if (isPlatformBrowser(this._platformId)) {
      console.log('Executing PlatformBrowser code.');
      this._lenisService.initializeWithGSAPScrolltrigger(
        this._gsapService.ticker,
        this._gsapService.scrollTrigger,
        {
          wrapper: this.scrollerRef.nativeElement,
          content: this.scrollerRef.nativeElement,
          eventsTarget: this.scrollerRef.nativeElement,
          lerp: 0.9,
          duration: 2,
        }
      );
      this._initializeAnimation();
    }
  }

  private _initializeAnimation(): void {
    const tl = this._gsapService.gsap.timeline({
      scrollTrigger: {
        scroller: '.scroller',
        trigger: '.trigger',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
        markers: true,
      },
    });

    tl.to('.trigger', {
      x: 800,
    });
  }
}
