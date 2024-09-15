import { Breed } from "./breed"
import { Color } from "./color"

export interface Pet {
    id: number
    name: string
    dob: Date
    chipset_number: string
    uuid:string
    passport_number:string
    cover:string
    user_id:string
    gender:string
    color:Color
    breed:Breed
  }