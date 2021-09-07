import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup!: FormGroup;
  message: string;
  sto = false;
  isFormValid = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { 
    this.message = '';
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      Username: new FormControl('', [
        Validators.required,
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20)
      ])
    });
  }
   onSubmit() {
    console.log(this.formGroup);
    this.isFormValid = true;
    if (this.isFormValid) {

    console.log('Form valid');
    console.log('Formgroup value :' + this.formGroup.value);
    this.router.navigate(['/employeelist']);
    }

   }

  onReset() {
    this.formGroup.reset();
  }


  moveToEmployeeList() {
    this.router.navigate(['employeelist'], { relativeTo: this.activatedRoute});
}

}
