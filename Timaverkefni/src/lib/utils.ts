import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type FormValuesType = {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  selectedFruit: string;
  radioButton: string | null;
};