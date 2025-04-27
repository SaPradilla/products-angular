import { Component, computed, signal } from '@angular/core';
import { MatInputModule   } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule    } from '@angular/material/icon';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../core/services/login.service';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatInputModule,MatButtonModule,ReactiveFormsModule,MatIconModule,MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public loginForm!:FormGroup;
  hide = signal(true);
  public errorUser!:string;
  public loading:boolean = false;
  
  constructor(
    private loginService:LoginService,
    private router:Router,
  ){}

  
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required]),
    })
  }

  clickEvent(event: MouseEvent) {

    this.hide.set(!this.hide());

    event.stopPropagation();
  }


  // Enviar formulario
  onSubmit() {
    console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this,this.errorUser = '';
      this.loading = true;

      setTimeout(()=>{
        const res = this.loginService.login(this.loginForm.value)       
        if(typeof res !== 'string'){
          this.errorUser = res.error as string;
        }
        console.log(res);

        this.loading = false;
        this.router.navigate(['/shop'])
        
      },1000)
     
      
    }

  }

}
