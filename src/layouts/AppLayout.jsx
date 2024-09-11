import React from "react";
import { Box, Fade } from "@mui/material";

const AppLayout = ({ children, lg = '120px 200px', xl = '180px 410px' }) => {
  return (
    <Fade in={true} timeout={1000}>
      <Box
        padding={{ xs: '0 20px', sm: '0 170px', md: '0 100px', lg: lg, xl: xl }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Box>
          {children}
        </Box>
      </Box>
    </Fade>
  );
};

export default AppLayout;