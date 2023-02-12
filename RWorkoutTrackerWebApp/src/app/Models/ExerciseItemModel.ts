import { SetItem } from "./SetItemModel"
export interface ExerciseItem{
    "id": number
    "workoutId": number
    "exerciseName": string
    "muscleGroup": string
    "performedSets": SetItem[]
}