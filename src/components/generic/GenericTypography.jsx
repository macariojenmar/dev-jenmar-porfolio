import React from "react";
import { Stack, Typography } from "@mui/material";

export const ResponsiveHeaderTypography = (props) => {
  const {
    children,
    fontWeight = 600,
    ...otherProps
  } = props;

  return (
    <Typography
      {...otherProps}
      sx={{
        typography: { xs: 'h4', md: 'h3' },
        fontWeight: { xs: fontWeight, md: (fontWeight + 100) }
      }}
    >
      {children}
    </Typography>
  );
};

export const IconLabel = ({ icon, label, ...others }) => {
  return (
    <Stack direction={'row'} gap={0.5} alignItems={'center'} {...others}>
      {icon}
      {label}
    </Stack>
  );
};