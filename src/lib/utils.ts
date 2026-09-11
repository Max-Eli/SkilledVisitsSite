import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * IV bag renders sit on a white background, so they must be contained rather
 * than cropped. Covers the legacy root-level `.jpeg` mockups and the current
 * artwork under `/bags/`.
 */
export function isProductShot(src: string): boolean {
  return src.endsWith(".jpeg") || src.startsWith("/bags/");
}
