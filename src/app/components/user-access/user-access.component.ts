import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.scss'],
})
export class UserAccessComponent implements OnInit {
  constructor(private _userService: UserService) {}
  public dataService;
  ngOnInit(): void {
    this.dataService = this._userService.userDataService();
  }
}
