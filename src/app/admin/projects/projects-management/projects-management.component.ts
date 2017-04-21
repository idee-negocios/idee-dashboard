import { Component, OnInit, OnDestroy } from '@angular/core';
import { ITdDataTableColumn } from '@covalent/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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
    { name: 'owner',  label: 'Propietario', sortable:true },
  ];
  basicData: any[] = [];
  loading: boolean;

  constructor(private af: AngularFire) {}

  ngOnInit() {
    this.projects = this.af.database.list('/project');

    this.loading = true;

    this.projects.subscribe(projects => {
      // projects is an array
      this.basicData = projects.map(project => {
        return {
          name: project.name,
          owner: project.owner
        };
      });

      this.loading = false;
    });
  }

}
