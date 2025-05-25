export interface AddPet {
  breed_id: number;
  color_id: number;
  name: string;
  dob: string;
  gender: string;
  cover_image: File | null;
  chipset_number: string | null;
  passport_number: string | null;
}
