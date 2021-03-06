import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {CourseService } from 'src/app/course.service';
@Component({
  selector: 'app-add-curriculum',
  templateUrl: './add-curriculum.page.html',
  styleUrls: ['./add-curriculum.page.scss'],
})
export class AddCurriculumPage implements OnInit {

  constructor(private storage: Storage,
  private _course: CourseService) { }
 error;
 myCurrentSchoolId;
 curList = []
 addCur = {
   _id:'',
   curriculum:''
 }
  ngOnInit(){
    this.storage.get('user').then((val) => {
    this.myCurrentSchoolId = val._id;
    this.getCurr(val._id)
  })
  }

 getCurr(id){
   this._course.getCurriculumList(id)
   .subscribe(
     res=>(
       this.curList.push(res)
     ),
     err =>(
       console.log(err)
     )
   )
 }

 addCurr(){
   this.addCur._id = this.myCurrentSchoolId
   if(this.addCur.curriculum.length===0){
     this.error = "Please write a curriculum"
   } else {
     this.addCur.curriculum.trim().charAt(0).toUpperCase()
     this._course.postCur(this.addCur)
        .subscribe(
          res=>(
            this.getCurr(this.myCurrentSchoolId),
            console.log(res)
          ),
          err=>(
            this.error=err.error
          )
        )
   }
 }
}
