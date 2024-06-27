import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { SignupServiceService } from './signup-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  messages: Message[] | undefined;

  formValue: any = new FormData() 

  constructor(
    private signupService: SignupServiceService,
    private router: Router) { 
        
        this.router=router;
    }

  onSubmit(values: any) {


        this.formValue.append('FirstName', values.FirstName);
        this.formValue.append('LastName', values.LastName);
        this.formValue.append('Phone', values.Phone);
        this.formValue.append('Email', values.Email);
        this.formValue.append('Password', values.Password);
        this.formValue.append('street', values.street);
        this.formValue.append('city', values.city);
        this.formValue.append('zip', values.zip);
        this.formValue.append('state', values.state);

        this.signupService.registerUser(this.formValue).subscribe(
         (response) => {
          this.messages = [
            { severity: 'success', detail: 'Login Successful'}];
          return this.router.navigate(['/login']);
         },
         (error) => {
         console.log({error});
          return this.messages = [
          { severity: 'error', detail: 'Login Failed'}];
        });
    
   }

}
