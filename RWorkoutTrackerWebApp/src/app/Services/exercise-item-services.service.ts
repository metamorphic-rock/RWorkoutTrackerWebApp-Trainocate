import { Injectable } from '@angular/core';
import { ExerciseItem } from '../Models/ExerciseItemModel';
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
export class ExerciseItemServicesService {
  baseUrl: string = 'http://localhost:5211'
  constructor(private http: HttpClient) { }
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
      exercise = this.http.post<ExerciseItem>(`${this.baseUrl}/exercise_items`, payload, httpOptions)
    }
    return exercise
  }
  DeleteExerciseFromDB = (id: number) => {
    let exercise = this.http.delete<ExerciseItem>(`${this.baseUrl}/exercise_items/${id}`, httpOptions)
    return exercise
  }
}
