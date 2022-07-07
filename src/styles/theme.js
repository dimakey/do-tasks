export const lightTheme = {
  colors: {
    accentPrimary: "hsla(145, 63%, 42%, 1)",
    accentPrimaryDark: "hsla(145, 65%, 34%, 1)",
    accentPrimaryFocus: "hsla(145, 63%, 42%, 0.5)",
    bgHeader: "hsla(145, 63%, 42%, 1)",
    bgPrimary: "#fff",
    bgSecondary: "#f2f2f2",
    bgTertiary: "#e0e0e0",
    bodyPrimary: "#393939",
    bodySecondary: "#616161",
    bodyTertiary: "#9e9e9e",
    neutral: "hsla(0, 0%, 50%, 0.25)",
    white: "#fff",
    info: "#3c91e6",
    warning: "#fb8b24",
    danger: "#dc3545",
    dangerDark: "#bf2130",
  },
  radius: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    xlg: "16px",
    circle: "50%",
  },
  media: {},
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    ...lightTheme.colors,
    bgHeader: "#282828",
    bgPrimary: "#212121",
    bgSecondary: "#282828",
    bgTertiary: "#444",
    bodyPrimary: "#ddd",
    bodySecondary: "#999",
    bodyTertiary: "#9e9e9e",
  },
};
