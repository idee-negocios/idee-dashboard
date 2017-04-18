import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-project-new',
  templateUrl: './project-new.component.html',
  styleUrls: ['./project-new.component.scss']
})
export class ProjectNewComponent implements OnInit {
  newProjectForm: FormGroup;

  project: FirebaseListObservable<any>;


  constructor(private formBuilder: FormBuilder, private af: AngularFire, private _dialogService: TdDialogService) {

   }

  ngOnInit() {
    this.buildForm();
    this.project = this.af.database.list('/project');
  }

  save(value:any) {
    let key= this.project.push({ name: value.name, owner: value.owner }).key;
      this.openAlert();
      this.buildForm();
    }
  openAlert(): void {
    this._dialogService.openAlert({
      message: 'El proyecto ha sido creado con éxito.',
      disableClose: false, // defaults to false
      title: 'Listo', //OPTIONAL, hides if not provided
      closeButton: 'Cerrar', //OPTIONAL, defaults to 'CLOSE'
    });
  }
  buildForm():void{
      this.newProjectForm= null;
      setTimeout(()=>{
        this.newProjectForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(4)]],
        owner: ['', [Validators.required]]
        });
      },0)
  }
}
