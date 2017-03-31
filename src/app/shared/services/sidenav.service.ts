import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { SidenavItem } from '../../models';

@Injectable()
export class SidenavService {
  private sidenavItem: SidenavItem[];
  private sidenav = new BehaviorSubject<SidenavItem[]>([]);

  constructor() { }

  set(sidenavItems: SidenavItem[]) {
    this.sidenavItem = sidenavItems;
    this.sidenav.next(this.sidenavItem);
  }

  clean() {
    this.sidenavItem = [];
    this.sidenav.next(this.sidenavItem);
  }

  get state(): Observable<SidenavItem[]> {
    return this.sidenav.asObservable();
  }

}
