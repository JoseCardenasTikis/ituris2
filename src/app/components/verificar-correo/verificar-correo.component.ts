import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent {



  constructor(private fb: FormBuilder, private afAuth: AngularFireAuth, private router: Router) {

    






  }

 

}
