import { Divider, Drawer, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const SideBar = ({ drawerWidth = 240 }) => {
  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Laura Portillo
          </Typography>
        </Toolbar>
        <Divider />
      </Drawer>
    </Box>
  );
};
