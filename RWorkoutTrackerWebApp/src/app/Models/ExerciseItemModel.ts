import { SetItem } from "./SetItemModel"
export interface ExerciseItem{
    "id": number
    "exerciseName": string
    "muscleGroup": string
    "performedSets": SetItem[]
}