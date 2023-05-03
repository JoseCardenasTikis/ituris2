import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent {

  recuperarpassword: FormGroup;

  constructor(private fb:FormBuilder,private afAuth: AngularFireAuth, private router: Router){

    this.recuperarpassword =this.fb.group ({
      correo: ['',Validators.required],
      


    })






  }

recuperar(){

    const correo=this.recuperarpassword.value.correo;


    this.afAuth.sendPasswordResetEmail(correo).then (()=>{

      this.router.navigate(['/login'])


    }).catch((error) =>{
      console.log(error)
  })
  }



}
