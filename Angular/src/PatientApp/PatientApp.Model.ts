import {NgForm,
    FormGroup,
        FormControl,
            Validators,
FormBuilder
} from '@angular/forms';

import { from } from 'rxjs';

export class PatientModel{
    id:number = 0;
    name:string = "";
    problemDescription:string = "";

    formPatientGroup:FormGroup = null;
    constructor(){
        
        //tree structure
        var _builder = new FormBuilder();
        // use the builder and create the tree structure
        this.formPatientGroup = _builder.group({});  
        // add validation to formgroup
        this.formPatientGroup.addControl("namecontrol", new FormControl('', Validators.required));
        // add problem description
        this.formPatientGroup.addControl("problemdescriptioncontrol", new FormControl('', Validators.required));


     }
    

}