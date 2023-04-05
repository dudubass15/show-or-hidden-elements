import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShowAndHiddenService {
  public _subscribeChanges: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private visibility: boolean = true;

  constructor() {
    this.toggle();
  }

  public get visibilityChanges(): boolean {
    return this.visibility;
  }

  public toggle(): void {
    if (this.visibility) {
      this.show();
    } else {
      this.hidden();
    }
    this.visibility = !this.visibility;
  }

  private show(): void {
    this._subscribeChanges.next(this.visibility);
  }

  private hidden(): void {
    this._subscribeChanges.next(this.visibility);
  }

}
