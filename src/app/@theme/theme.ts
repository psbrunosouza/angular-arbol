export const LIGHT: Theme = {
  name: "light",
  variables: {
    /**
     * Extra colors
     */
    "--light-color": "#fff",
    "--dark-color": "#000",

    /**
     * Fundamental colors of the system based
     * on sixty-forty-ten strategy
     */
    "--first-color": "#9373ed",
    "--second-color": "#ffffff",
    "--third-color": "#e8e8e8",
    "--transparent-color": "transparent",


    /** Text colors */
    "--text-color": "#232323",
    "--text-contrast-color": "#ffffff",


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
  variables: {
    /**
     * Extra colors
     */
    "--light-color": "#fff",
    "--dark-color": "#000",

    /**
     * Fundamental colors of the system based
     * on sixty-forty-ten strategy
     */
    "--first-color": "#5165e5",
    "--second-color": "#424242",
    "--third-color": "#2f2f2f",
    "--transparent-color": "transparent",


    /** Text colors */
    "--text-color": "#ffffff",
    "--text-contrast-color": "#ffffff",


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

export class Theme {
  name: string;
  variables: any;
}

export abstract class IThemeService {
  abstract getAvailableThemes(): Theme[];
  abstract getActiveTheme(): Theme;
  abstract setActiveTheme(theme: Theme): void;
}


