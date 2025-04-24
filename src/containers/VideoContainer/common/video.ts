export type RGB = {
  r: number;
  g: number;
  b: number;
};

export type VideoColors = {
  primary: RGB;
  secondary: RGB;
  tertiary: RGB;
  quaternary: RGB;
  primaryLight: RGB;
};

export type VideoSources = {
  full: string;
  dash: string;
  hls?: string;
};

export type DRM = {
  name: string;
  url: string;
};

export type VideoCategory = "development" | "tools" | "updates" | "all";

export type Episode = {
  popular?: boolean;
  released: string;
  title: string;
  shortDescription: string;
  description: string;
  slug: string;
  duration: string;
  assetPath: string;
  rating: number;
  sources: VideoSources;
  colors: VideoColors;
  drm?: DRM;
  category: string;
};

export type Show = {
  title: string;
  slug: string;
  description?: string;
  desciption?: string; // Note: This accounts for the typo in the JSON
  episodes: Episode[];
};

export type Videos = {
  featured: string;
  shows: Show[];
};
