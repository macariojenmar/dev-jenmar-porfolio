import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const GenericLink = (props) => {
  const {
    path = '/',
    text = 'Link',
    ...others
  } = props;

  return (
    <Link
      to={path}
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Typography
        sx={{
          ':hover': {
            color: 'secondary.main',
            transition: '0.5s'
          }
        }}
        {...others}
      >
        {text}
      </Typography>
    </Link>
  );
};