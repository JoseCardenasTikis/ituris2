import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginUsuario: FormGroup;

  constructor(private fb:FormBuilder,private afAuth: AngularFireAuth, private router: Router){

    this.loginUsuario=this.fb.group ({
      userEmail: ['',Validators.required],
      password: ['',Validators.required]


    })






  }

  ingresar(){

    const userEmail=this.loginUsuario.value.userEmail;
    const password=this.loginUsuario.value.password;

    this.afAuth.signInWithEmailAndPassword(userEmail,password).then ((user) =>{

      if(user.user?.emailVerified){
      this.router.navigate(['/panel-ofturismo']);
      } else {
        this.router.navigate(['/verificar-correo'])
      }
    }). catch ((error)=> {
      console.log(error)
    })

  }

}
