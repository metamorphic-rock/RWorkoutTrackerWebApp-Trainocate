import { Injectable } from '@angular/core';
import { WorkoutItem } from '../Models/WorkoutItemModel';
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
export class WorkoutItemsServicesService {
  baseUrl: string = 'http://localhost:5211'
  constructor(private http: HttpClient) { }
  GetAllWorkoutFromDB = () => {
    let workouts: Observable<WorkoutItem[]>
    workouts = this.http.get<WorkoutItem[]>(`${this.baseUrl}/workout_items`, httpOptions)
    return workouts
  }
  GetWorkoutByIdFromDB = (id: number): Observable<WorkoutItem> => {
    let workout = this.http.get<WorkoutItem>(`${this.baseUrl}/workout_items/${id}`, httpOptions)
    return workout
  }
  GetLastAddedWorkoutFromDB = ():Observable<WorkoutItem> => {
    let workout: Observable<WorkoutItem>
    workout = this.http.get<WorkoutItem>(`${this.baseUrl}/workout_items/latest`, httpOptions)
    return workout
  }
  SaveWorkoutToDB = (workoutItem:WorkoutItem) => {
    let workout: Observable<WorkoutItem>
    if (workoutItem.id) {
      const url = `${this.baseUrl}/workout_items/${workoutItem.id}`
      workout = this.http.put<WorkoutItem>(url, workoutItem, httpOptions)
    } else {
      let payload = {
        workoutTitle: workoutItem.workoutTitle, date: workoutItem.date
      } //fix this later
      console.log("save workout payload")
      console.log(payload)
      workout = this.http.post<WorkoutItem>(`${this.baseUrl}/workout_items`, payload, httpOptions)
    }
    return workout
  }
  DeleteWorkoutFromDB = (id:number) => {
    let workout = this.http.delete<WorkoutItem>(`${this.baseUrl}/workout_items/${id}`, httpOptions)
    return workout
  }
}
