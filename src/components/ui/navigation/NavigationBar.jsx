import React, { Fragment, useState } from "react";
import { Grid2, Typography } from "@mui/material";
import { DisplayLayout } from "../../../layouts/DisplayLayout";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { IoMenu } from "react-icons/io5";
import { PageList } from "./PageList";
import { MobileNavigationDrawer } from "./MobileNavigationDrawer";

export const NavigationBar = () => {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);
  const handleToggleMenuDrawer = () => {
    setOpenMenuDrawer(prev => !prev);
  };

  return (
    <Fragment>
      <Grid2
        container
        alignItems={'center'}
        justifyContent={'space-between'}
        sx={{ padding: { xs: '15px 20px', md: '20px 100px' } }}
      >
        <Grid2 item>
          <Typography fontWeight={800} variant='h6'>dev-jenmar.</Typography>
        </Grid2>
        <Grid2 item>
          <DisplayLayout isMobile={true}>
            <GenericIconButton
              icon={<IoMenu />}
              onClick={() => handleToggleMenuDrawer()}
            />
          </DisplayLayout>
          <DisplayLayout>
            <PageList />
          </DisplayLayout>
        </Grid2>
      </Grid2>
      <MobileNavigationDrawer
        openMenuDrawer={openMenuDrawer}
        handleToggleMenuDrawer={handleToggleMenuDrawer}
      />
    </Fragment>
  );
};