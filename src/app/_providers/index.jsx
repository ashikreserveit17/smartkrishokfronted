import { ThemeProvider } from '@mui/material';
import theme from '../../style/theme';

export const Providers = ({ children }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        {/* <ConfigProvider
          theme={{
            token: {
              colorPrimary: theme.palette.primary.main,
              borderRadius: 4,
              fontFamily: theme.typography.fontFamily,
            },
          }}
        >
          {children}
        </ConfigProvider> */}
        {children}
      </ThemeProvider>
    </div>
  );
};
