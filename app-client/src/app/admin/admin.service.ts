import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl:string = 'http://localhost:5000/api/admin/';

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }
  addSubject(subjectName:String) {
    return this.http.post(baseUrl + "subject/" + subjectName, {});
  }
  addLevel(subjectId:String, data:any) {
    return this.http.post(baseUrl + "level/" + subjectId, data);
  }
}
