import { Injectable, afterNextRender } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

@Injectable({providedIn: 'root'})
export class GSAPService {

  get gsap(): typeof gsap {
    return gsap;
  }
}