import { Component } from '@angular/core';
import { LoginServiceService } from './login-service.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  messages: Message[] | undefined;

  formValue: any = new FormData()

  constructor(
    private logInService: LoginServiceService,
    private router: Router) {

    
    this.router = router;
    sessionStorage.clear();
  }
  result: any;

  onSubmit(values: any) {

    this.formValue.append('Email', values.Email);
    this.formValue.append('Password', values.Password);


    this.logInService.login(this.formValue).subscribe(

      (data) => {
        
        this.messages = [
          { severity: 'success', detail: 'Login Successful'}];
            this.router.navigate(['/home']);
         
      },

      (error) => {
        console.log(error)
        return this.messages = [
          { severity: 'error', detail: 'Login Failed'}];
      }
    );
  }

}