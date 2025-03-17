import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  message: string = 'Vous etes deconnecté. (pikachu/pikachu)';
  name!: string;
  password!: string;

  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.auth = this.auth;
  }

  setMessage() {
    this.message = this.auth.isLoggedIn ? 'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
  }

  login() {
    this.message = 'Tentative de connexion en cours ...';
    this.auth.login(this.name, this.password).subscribe(() => {
        this.setMessage();
        if (this.auth.isLoggedIn) {
            let redirect = this.auth.redirectUrl ? this.auth.redirectUrl : '/pokemons';
            this.router.navigate([redirect]);
        } else {
            this.password = '';
        }
    });
  }

  logout() {
      this.auth.logout();
      this.setMessage();
  }

}
