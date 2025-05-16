export interface AddPet {
  breed_id: number;
  color_id: number;
  name: string;
  dob: Date;
  gender: string;
  cover_image: string | null;
  chipset_number: string | null;
  passport_number: string | null;
}
