import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};
  loggedOn = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    }


  login() {
    this.authService.login(this.model).subscribe(response => {

      console.log('Logged in Successfully');
    }, error => {
      console.log(error);
      const message = `StatusCode: ${error.status}, Message: ${error.error}`;
      console.log(message);
      console.log('There was an error logging in');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logged Out!');
  }

}
