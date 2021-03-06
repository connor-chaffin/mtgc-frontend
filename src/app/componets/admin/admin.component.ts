import { Component, OnInit } from '@angular/core';
import { PostdataService } from '../../services/postdata.service';
import { users } from '../../models/users';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  Userlist: any = [];
  public users: users[];


  ngOnInit() {
    this.loadUser();
  }

  constructor(
    public postdataService: PostdataService, private http: HttpClient
  ) { }

  // Users list
  loadUser() {
    return this.postdataService.GetAdmin().subscribe((data: {}) => {
      this.Userlist = data;

    })
  }
  // Delete issue
  deleteIusse(data) {
    var index = index = this.Userlist.map(x => { return x.issue_name }).indexOf(data.issue_name);
    return this.postdataService.DeleteUsers(data.id).subscribe(res => {
      this.Userlist.splice(index, 1)
      console.log('Issue deleted!')
    })
  }


}