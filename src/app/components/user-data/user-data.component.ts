import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss'],
})
export class UserDataComponent implements OnInit {
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private _userService: UserService
  ) {}
  public dataService;

  get userName() {
    return this.registrationForm.get('userName');
  }
  get userSurname() {
    return this.registrationForm.get('userSurname');
  }
  get userAge() {
    return this.registrationForm.get('userAge');
  }
  //validation details
  registrationForm = this.fb.group({
    userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
    userSurname: [
      '',
      [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)],
    ],
    userAge: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]*$/), Validators.min(0)],
    ],
  });

  onSubmit() {
    //validation check
    if (this.registrationForm.valid) {
      let getingData = async () => {
        console.log('form valid');
        //dispatch data to server (sessionStorage)
        this._userService.changeUserDetails(this.registrationForm.value);
        await sessionStorage.setItem(
          'userDetails',
          JSON.stringify(this.registrationForm.value)
        );
      };

      getingData().then(() => {
        setTimeout(() => {
          this.router.navigate(['/userAccess']);
        }, 1000);
      });
    } else {
      //displaying validation errors
      const forms = this.registrationForm.controls;
      for (let propt in forms) {
        forms[propt].markAsDirty();
      }
      return;
    }
  }

  loadData() {
    this.registrationForm.setValue({
      userName: this.dataService.userName,
      userSurname: this.dataService.userSurname,
      userAge: this.dataService.userAge,
    });
  }

  ngOnInit(): void {
    this.dataService = this._userService.userDataService();
    this.loadData();
  }
}
