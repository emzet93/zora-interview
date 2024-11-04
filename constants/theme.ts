export interface Theme {
  colors: {
    background: string;
    backgroundLight: string;
    text: string;
    textPlaceholder: string;
  };
  spacing: {
    xs: number;
    s: number;
    m: number;
    l: number;
  };
  font: {
    xs: number;
    s: number;
    m: number;
    l: number;
  };
  card: {
    borderRadius: number;
  };
}

export const theme: Theme = {
  colors: {
    background: "#000000",
    backgroundLight: "#262626",
    text: "#FFFFFF",
    textPlaceholder: "rgba(255,255,255,0.5)",
  },
  spacing: {
    xs: 8,
    s: 16,
    m: 24,
    l: 32,
  },
  font: {
    xs: 12,
    s: 14,
    m: 18,
    l: 24,
  },
  card: {
    borderRadius: 8,
  },
} as const;
