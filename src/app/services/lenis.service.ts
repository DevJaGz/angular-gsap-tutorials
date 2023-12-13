import { Injectable } from '@angular/core';
import Lenis from '@studio-freight/lenis'

@Injectable({providedIn: 'root'})
export class LenisService {


  initialize(params: Record<string, unknown>): void {
    const lenis = this._createLenisInstance(params);

    lenis.on('scroll', (e: unknown) => {
      console.log(e)
    })

    function raf(time: unknown) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }

  initializeWithGSAPScrolltrigger(gsapTicker: any, scrollTrigger: any, params: Record<string, unknown>): void {
    const lenis = this._createLenisInstance(params);

    lenis.on('scroll', scrollTrigger.update)

    gsapTicker.add((time: number)=>{
      lenis.raf(time * 1000)
    })
    
    gsapTicker.lagSmoothing(0)

  }

  private _createLenisInstance(params: Record<string, unknown>) {
    return new Lenis(params);
  }
}