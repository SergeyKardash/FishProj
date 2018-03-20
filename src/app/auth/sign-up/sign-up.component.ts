import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, AfterViewInit {
  signUpForm: FormGroup;
  @ViewChild('passwordTooltip') passwordTooltip: ElementRef;

  constructor(private renderer: Renderer2,
              private auth: AuthService,
              private dialogRef: MatDialogRef<SignUpComponent>) {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'confirmPassword': new FormControl(null, Validators.required)
    }, this.passwordMatchValidator);
  }

  ngAfterViewInit () {
    this.renderer.setStyle(this.passwordTooltip.nativeElement, 'display', 'none');
  }

  passwordMatchValidator(fg: FormGroup) {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {'mismatch': true};
  }

  confirmPassword(e) {
    if (this.signUpForm.value.password === this.signUpForm.value.confirmPassword) {
      e.srcElement.classList = 'form-control ng-touched ng-valid';
      this.renderer.setStyle(this.passwordTooltip.nativeElement, 'display', 'none');
    } else {
      e.srcElement.classList = 'form-control ng-touched ng-invalid';
      this.renderer.setStyle(this.passwordTooltip.nativeElement, 'display', 'block');
    }
  }

  onSignUp() {
    this.auth.emailSignUp(this.signUpForm.value.email, this.signUpForm.value.password, this.signUpForm.value.username);
    this.dialogRef.close();
  }
}
