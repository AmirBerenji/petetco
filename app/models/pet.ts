import { Breed } from "./breed"
import { Color } from "./color"

export interface Pet {
    id: number
    name: string
    dob: Date
    chipset_number: string | null
    uuid:string
    passport_number:string | null
    cover:string | null
    user_id:string
    gender:string
    color:Color
    breed:Breed
    height:number
    weight:number
  }