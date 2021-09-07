import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  message: string;
  sto = false;
  isFormValid = true;

constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.message = '';
    }
   ngOnInit() {
     this.formGroup = new FormGroup({
       UserName: new FormControl('', [
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
     this.router.navigate(['/display']);
     }

    }

   onReset() 
   {
     this.formGroup.reset();
   }

moveToRegister() 
{
    this.router.navigate(['../signup'], { relativeTo: this.activatedRoute});
}

}
