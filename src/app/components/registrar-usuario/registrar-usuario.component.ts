import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent {

  registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {

    this.registrarUsuario = this.fb.group({
      userEmail: ['', Validators.required],
      password: ['', Validators.required],
      repetirpassword: ['', Validators.required],




    })






  }

  registrar() {

    const userEmail = this.registrarUsuario.value.userEmail;
    const password = this.registrarUsuario.value.password;
    const repetirpassword = this.registrarUsuario.value.repetirpassword;

    if (password !== repetirpassword) {
      alert('Las contraseñas no son iguales');
      return
    }


    this.afAuth.createUserWithEmailAndPassword(userEmail, password).then((user) => {
      

      this.verificarCorreo();


      console.log(user)
    }).catch((error) => {
      console.log(error)
      alert(this.firebaseError(error.code))
    })

  }

  firebaseError(code: string) {

    switch (code) {

      case 'auth/email-already-in-use':
        return 'El usuario ya existe'

      case 'auth/weak-password':
        return 'La contraseña es muy debil'

      case 'auth/invalid-email':
        return 'Correo invalido'

      default:
        return 'Error desconocido'
    }


  }

  verificarCorreo(){

    this.afAuth.currentUser.then(user=> user?.sendEmailVerification())


    .then(()=> {

      alert('Le enviamos un email para su verificación')
      this.router.navigate(['/login']);



    })


  }






}
