import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.sass']
})
export class UserInfoComponent implements OnInit {

  userInfo = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    birthDate: ['', [Validators.required]]
  })

  accountCreatedSucessfully: boolean;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  createAccount() {
    this.accountCreatedSucessfully = true;

  }

  goToHome() {

    setTimeout(() => {
      this.router.navigate(['/home'])
    })

  }
}
