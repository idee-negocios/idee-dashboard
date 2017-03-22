import { Component, OnInit } from '@angular/core';
import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDesktop: boolean;
  sidenavWidth: string;
  sidenavMode: string;

  constructor(public media: TdMediaService) {}

  ngOnInit() {
    this.media.registerQuery('gt-xs').subscribe((desktop: boolean) => {
      this.isDesktop = desktop;
      this.sidenavWidth = desktop ? '350px' : '100%';
      this.sidenavMode = desktop ? 'side' : 'over';
    });

    this.media.broadcast();
  }
}
