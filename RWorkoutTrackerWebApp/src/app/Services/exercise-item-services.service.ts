import { Injectable } from '@angular/core';
import { ExerciseItem } from '../Models/ExerciseItemModel';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,catchError,throwError } from 'rxjs';
import { Router } from '@angular/router';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ExerciseItemServicesService {
  baseUrl: string = 'http://localhost:5211'
  constructor(private http: HttpClient, private router: Router) { }
  GetAllExerciseFromDB = () => {
    let exercise: Observable<ExerciseItem>
    exercise = this.http.get<ExerciseItem>(`${this.baseUrl}/exercise_items`, httpOptions)
    return exercise
  }
  GetExerciseByIdFromDB = (id: number): Observable<ExerciseItem> => {
    let exercise = this.http.get<ExerciseItem>(`${this.baseUrl}/exercise_items/${id}`, httpOptions)
    return exercise
  }
  GetLastAddedExerciseFromDB = ():Observable<ExerciseItem> => {
    let exercise: Observable<ExerciseItem>
    exercise = this.http.get<ExerciseItem>(`${this.baseUrl}/exercise_items/latest`, httpOptions)
    return exercise
  }
  SaveExerciseToDB = (exerciseItem: ExerciseItem) => {
    let exercise: Observable<ExerciseItem>
    if (exerciseItem.id) {
      const url = `${this.baseUrl}/exercise_items/${exerciseItem.id}`
      exercise = this.http.put<ExerciseItem>(url, exerciseItem, httpOptions)
    } else {
      let payload = {
        exerciseName: exerciseItem.exerciseName, muscleGroup: exerciseItem.muscleGroup,
        workoutId: exerciseItem.workoutId
      } //fix this later
      console.log("SaveExerciseToDB exercise payload")
      console.log(payload)
      exercise = this.http.post<ExerciseItem>(`${this.baseUrl}/exercise_items`, payload, httpOptions).pipe((
        catchError((error: HttpErrorResponse)=>{
          if(error.status ===422){
            console.error("invalid inputs", error.error)
            this.router.navigate(['/exerciseForm'])
            alert("invalid inputs")
          }else {
            console.error("unexpected error", error.error)
          }
          return throwError(error)
        })
      ))
    }
    return exercise
  }
  DeleteExerciseFromDB = (id: number) => {
    let exercise = this.http.delete<ExerciseItem>(`${this.baseUrl}/exercise_items/${id}`, httpOptions)
    return exercise
  }
}
