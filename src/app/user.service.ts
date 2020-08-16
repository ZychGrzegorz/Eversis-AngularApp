import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userDetails = {
    userName: null as string,
    userSurname: null as string,
    userAge: null as number,
  };

  constructor() {
    //fetching data from server (sessionStorage)

    const sessionStorageData = JSON.parse(
      sessionStorage.getItem('userDetails')
    );

    if (sessionStorageData) {
      this.changeUserDetails(sessionStorageData);
    } else {
      // no data from sessionStorage
      console.log('No data from sessionStorage');
    }
  }

  changeUserDetails({ userName, userSurname, userAge }) {
    this.userDetails = { userName, userSurname, userAge };
  }

  userDataService() {
    return this.userDetails;
  }
}
