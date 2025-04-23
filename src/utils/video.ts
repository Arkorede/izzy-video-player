export const formatDuration = (duration: string): string => {
  const minutes = Math.floor(parseInt(duration) / 60);
  const seconds = parseInt(duration) % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export const rgbToStyle = (color: { r: number; g: number; b: number }) => {
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};
