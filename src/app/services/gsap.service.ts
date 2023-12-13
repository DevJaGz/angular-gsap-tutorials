import { Injectable } from '@angular/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

@Injectable({providedIn: 'root'})
export class GSAPService {

  get gsap(): typeof gsap {
    return gsap;
  }

  get scrollTrigger(): typeof ScrollTrigger {
    return ScrollTrigger;
  }

  get ticker(){
    return gsap.ticker
  }
}