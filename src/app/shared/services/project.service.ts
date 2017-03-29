import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ProjectService {

  constructor(private fb: AngularFire) { }

}
