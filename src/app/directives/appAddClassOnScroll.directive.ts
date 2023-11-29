import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appAddClassOnScroll]'
})
export class appAddClassOnScroll implements OnInit {

  constructor(private elementRef:ElementRef) { }
  ngOnInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.elementRef.nativeElement.classList.add('active-section');
        } else {
          this.elementRef.nativeElement.classList.remove('active-section');
        }
      });
    });

    observer.observe(this.elementRef.nativeElement);
  }

}
