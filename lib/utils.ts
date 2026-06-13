import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely, resolving conflicts */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Returns true if a social link URL is real (not empty / placeholder) */
export function hasSocialLink(url: string | undefined): boolean {
  return Boolean(url && url.trim() !== "" && url.trim() !== "#");
}

/** Clamp a number between min and max */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
