import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {
  newProjectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newProjectForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      owner: ['', [Validators.required]]
    });
  }

  createProject() {
    const values = this.newProjectForm.value;
    console.log(values);
  }

}
