import { Injectable } from '@angular/core';
import { WorkoutItem } from '../Models/WorkoutItemModel';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable,throwError } from 'rxjs';
import { Router } from '@angular/router';


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
  constructor(private http: HttpClient, private router:Router) { }
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
    console.log(workout)
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
      console.log("SaveWorkoutToDB workout payload")
      console.log(payload)
      workout = this.http.post<WorkoutItem>(`${this.baseUrl}/workout_items`, payload, httpOptions).pipe((
        catchError((error: HttpErrorResponse)=>{
          if(error.status ===422){
            console.error("invalid inputs", error.error)
            this.router.navigate(['/tracker'])
            alert("invalid inputs")
          }else {
            console.error("unexpected error", error.error)
          }
          return throwError(error)
        })
      ))
    }
    return workout
  }
  DeleteWorkoutFromDB = (id:number) => {
    let workout = this.http.delete<WorkoutItem>(`${this.baseUrl}/workout_items/${id}`, httpOptions)
    return workout
  }
}
