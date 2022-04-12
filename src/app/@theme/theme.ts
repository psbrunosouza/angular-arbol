export class Theme {
  name: string;
  properties: any;
}

export const LIGHT: Theme = {
  name: "light",
  properties: {
    "--light": "#fff",
    "--dark": "#000",

    "--base-primary": "#9373ed",
    "--base-secondary": "#7c5bd9",
    "--base-tertiary": "#efefef",

    "--background-primary": "#eeeeee",
    "--background-secondary": "#D3D3D3FF",
    "--background-tertiary": "#b7b7b7",

    "--warning-primary": "#e7d04d",
    "--warning-secondary": "#c59e3b",
    "--warning-tertiary": "#a67d31",

    "--success-primary": "#75e74f",
    "--success-secondary": "#66cc44",
    "--success-tertiary": "#77b939",

    "--danger-primary": "#ec5743",
    "--danger-secondary": "#ec5743",
    "--danger-tertiary": "#ec5743",

    "--info-primary": "#43ecec",
    "--info-secondary": "#43ecec",
    "--info-tertiary": "#43ecec",

    "--text-primary": "#9373ed",
    "--text-secondary": "#ffffff",
    "--text-tertiary": "#1e1e1e",

    "--font-headers": "'Montserrat', sans-serif",
    "--font-paragraph": "'PT Sans', sans-serif",

    "--header-weight": 700,

    "--h1-size": "24px",
    "--h2-size": "22px",
    "--h3-size": "20px",
    "--h4-size": "18px",
    "--h5-size": "16px",
    "--h6-size": "14px",

    "--p-size": "12px",
  }
};

export const DARK: Theme = {
  name: "dark",
  properties: {
    "--light": "#fff",
    "--dark": "#000",

    "--base-primary": "#9373ed",
    "--base-secondary": "#7c5bd9",
    "--base-tertiary": "#efefef",

    "--background-primary": "#d3d3d3",
    "--background-secondary": "#D3D3D3FF",
    "--background-tertiary": "#b7b7b7",

    "--warning-primary": "#e7d04d",
    "--warning-secondary": "#c59e3b",
    "--warning-tertiary": "#a67d31",

    "--success-primary": "#75e74f",
    "--success-secondary": "#66cc44",
    "--success-tertiary": "#77b939",

    "--danger-primary": "#ec5743",
    "--danger-secondary": "#ec5743",
    "--danger-tertiary": "#ec5743",

    "--info-primary": "#43ecec",
    "--info-secondary": "#43ecec",
    "--info-tertiary": "#43ecec",

    "--text-primary": "#9373ed",
    "--text-secondary": "#ffffff",
    "--text-tertiary": "#1e1e1e",

    "--font-headers": "'Montserrat', sans-serif",
    "--font-paragraph": "'PT Sans', sans-serif",

    "--header-weight": 700,

    "--h1-size": "24px",
    "--h2-size": "22px",
    "--h3-size": "20px",
    "--h4-size": "18px",
    "--h5-size": "16px",
    "--h6-size": "14px",

    "--p-size": "12px",
  }
};

export abstract class IThemeService {
  abstract getAvailableThemes(): Theme[];
  abstract getActiveTheme(): Theme;
  abstract setActiveTheme(theme: Theme): void;
}


