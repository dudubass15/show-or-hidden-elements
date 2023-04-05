import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ShowAndHiddenService } from '../../services/show-and-hidden/show-and-hidden.service';

@Directive({
  selector: '[showAndHidden]'
})
export class ShowAndHiddenDirective implements OnInit {

  constructor(
    private elRef: ElementRef,
    private showAndHiddenService: ShowAndHiddenService
  ) { }

  public ngOnInit(): void {
    this.showAndHiddenService._subscribeChanges.subscribe((value: boolean) => {
      if (value) {
        this.setShowElement(
          this.elRef.nativeElement as HTMLElement
        );
      } else {
        this.setHiddenElement(
          this.elRef.nativeElement as HTMLElement
        );
      }
    });
  }

  private setHiddenElement(element: HTMLElement): void {
    element.style.visibility = 'hidden';
  }

  private setShowElement(element: HTMLElement): void {
    element.style.visibility = 'visible';
  }

}
