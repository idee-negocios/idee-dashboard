import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isDark: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleTheme() {
    this.isDark = !this.isDark;
  }

}
