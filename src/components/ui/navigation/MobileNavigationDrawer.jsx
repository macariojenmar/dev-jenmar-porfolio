import React from "react";
import { Box, Divider, Drawer, Grid2, Stack, Typography } from "@mui/material";
import { FaArrowLeft } from "react-icons/fa6";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { ThemeSwitch } from "../ThemeSwitch";
import { PageList } from "./PageList";

export const MobileNavigationDrawer = ({ openMenuDrawer, handleToggleMenuDrawer }) => {
  return (
    <Drawer
      anchor={'right'}
      open={openMenuDrawer}
      onClose={() => handleToggleMenuDrawer()}
      sx={{
        '.MuiPaper-root': {
          minWidth: '280px'
        }
      }}
    >
      <Box padding={'10px 20px'}>
        <Grid2 container justifyContent={'space-between'} alignItems={'center'}>
          <Grid2 item>
            <Stack direction={'row'} alignItems={'center'} gap={0.5}>
              <GenericIconButton
                icon={<FaArrowLeft fontSize={'medium'} />}
                onClick={() => handleToggleMenuDrawer()}
              />
              <Typography variant="body2">Back</Typography>
            </Stack>
          </Grid2>
          <Grid2 item>
            <ThemeSwitch showLabel={true} />
          </Grid2>
        </Grid2>
        <Divider sx={{ margin: '10px 0px' }} />
        <PageList isMobile={true} />
      </Box>
    </Drawer>
  );
};