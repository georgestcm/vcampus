import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class CourseService {
 private getCurList ="http://localhost:3000/api/get_curriculum_list"
 private postCurList ="http://localhost:3000/api/post_curriculum_list"
  constructor(private http: HttpClient) { }


  getCurriculumList(id){
    return this.http.get<any>(this.getCurList,{
      params:{
        _id:id
      }
    })
  }

  postCur(data){
    return this.http.post<any>(this.postCurList,data)
  }
}
