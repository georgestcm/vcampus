import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.page.html',
  styleUrls: ['./add-curriculum.page.scss'],
})
export class AddCurriculumPage implements OnInit {

  constructor(private storage: Storage,
  private _auth: AuthService) { }
 error;
 myCurrentSchoolId;
  ngOnInit(){
    this.storage.get('user').then((val) => {
    this.myCurrentSchoolId = val._id;
  console.log(this.myCurrentSchoolId)
  })
  }

}
