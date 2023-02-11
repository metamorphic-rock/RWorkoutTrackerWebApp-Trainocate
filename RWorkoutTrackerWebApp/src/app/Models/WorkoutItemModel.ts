import { Time } from "@angular/common"
import { ExerciseItem } from "./ExerciseItemModel"

export interface WorkoutItem{
    "id"?: number
    "workoutTitle": string
    "date": Date
    "exercisesPerformed": ExerciseItem[]
}