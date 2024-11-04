export interface Theme {
  colors: {
    background: string;
    backgroundLight: string;
    text: string;
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
}

export const theme: Theme = {
  colors: {
    background: "#000000",
    backgroundLight: "#3b3b3b",
    text: "#FFFFFF",
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
};
