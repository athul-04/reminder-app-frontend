import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import PageContent from '../Components/PageContent'; 

// ✅ Your navigation menu
const NAVIGATION: Navigation = [
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'reminders',
    title: 'Reminders',
    icon: <ShoppingCartIcon />,
  },
];

// ✅ Theme setup
const appTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
});

// ✅ Page content
// function PageContent({ pathname }: { pathname: string }) {
//   return (
//     <Box
//       sx={{
//         py: 4,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         textAlign: 'center',
//       }}
//     >
//       <Typography variant="h5">
//         Welcome to {pathname === '/dashboard' ? 'Dashboard' : 'Reminders'}
//       </Typography>
//       <Typography sx={{ mt: 2 }}>
//         {pathname === '/reminders'
//           ? 'Here you can manage all your reminders.'
//           : 'Overview of your app goes here.'}
//       </Typography>
//     </Box>
//   );
// }



export default function Reminders() {
  const [pathname, setPathname] = React.useState('/dashboard');

  // Fix: navigate expects url, not segment
  const handleNavigate = (url: string | URL) => {
    if (typeof url === 'string') {
      setPathname(url);
    } else {
      setPathname(url.toString());
    }
  };

  return (
    <ThemeProvider theme={appTheme}>
      <AppProvider
        navigation={NAVIGATION}
        branding={{
          logo: "📝",
          title: 'My Reminder App',
          homeUrl: '/dashboard',
        }}
        router={{
          pathname,
          navigate: handleNavigate,
          searchParams: new URLSearchParams(), // ✅ required prop
        }}
        theme={appTheme}
      >
        <DashboardLayout>
          <PageContent />
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
