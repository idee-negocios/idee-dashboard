import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseObjectObservable} from 'angularfire2';
@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {
  newProjectForm: FormGroup;

  item: FirebaseObjectObservable<any>;


  constructor(private formBuilder: FormBuilder, public af: AngularFire) {

   }

  ngOnInit() {
    this.newProjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      owner: ['', [Validators.required]]
    });
    this.item = this.af.database.object('/item');
  }

  save(value:any) {
    this.item.update({ name: value.name, owner: value.owner });
  }

}
