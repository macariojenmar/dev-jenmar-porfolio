export const DARK = 'dark';
export const LIGHT = 'light';
export const SHADOWS = {
    light: '0 4px 8px rgba(0, 0, 0, 0.1)'
};
  
export const SHARED_STYLED_COMPONENTS = Object.freeze({
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '0 8px',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '20px',
          borderRadius: '10px',
          boxShadow: SHADOWS.light,
          '&.MuiPaper-outlined': {
            background: 'none'
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: '10px'
        }
      }
    }
});