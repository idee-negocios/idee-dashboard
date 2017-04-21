import { Component, OnInit } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-projects-management',
  templateUrl: './projects-management.component.html',
  styleUrls: ['./projects-management.component.scss']
})
export class ProjectsManagementComponent implements OnInit {

  projects: FirebaseListObservable<any>;
  columns: ITdDataTableColumn[] = [
  { name: 'name',  label: 'Nombre', sortable:true },
  ];
  basicData: any[];


  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.projects = this.af.database.list('/project');
    this.projects.forEach(project => {
    this.basicData.push(project);
});
  }

}
