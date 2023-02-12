import { Injectable } from '@angular/core';
import { SetItem } from '../Models/SetItemModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class SetItemServicesService {
  baseUrl: string = 'http://localhost:5211'
  constructor(private http: HttpClient) { }
  GetAllSetFromDB=(): Observable<SetItem[]>=>{
    let sets: Observable<SetItem[]>
    sets = this.http.get<SetItem[]>(`${this.baseUrl}/set_items`, httpOptions)
    return sets
  }
  GetSetByIdFromDB=(id:number): Observable<SetItem>=>{
    let set = this.http.get<SetItem>(`${this.baseUrl}/set_items/${id}`, httpOptions)
    return set
  }
  SaveSetToDB=(setItem:SetItem): Observable<SetItem>=>{
    let set: Observable<SetItem>
    if (setItem.id) {
      const url = `${this.baseUrl}/set_items/${setItem.id}`
      set = this.http.put<SetItem>(url, setItem, httpOptions)
    } else {
      let payload = {
        exerciseName: setItem.exerciseName,weight: setItem.weight, 
        reps: setItem.reps, workoutId: setItem.workoutId, exerciseId: setItem.exerciseId
      } //fix this later
      console.log("SaveSetToDB save set payload")
      console.log(payload)
      set = this.http.post<SetItem>(`${this.baseUrl}/set_items`, payload, httpOptions)
    }
    return set
  }
  DeleteSetFromDB=(id:number)=>{
    let set = this.http.delete<SetItem>(`${this.baseUrl}/set_items/${id}`, httpOptions)
    return set
  }
}
