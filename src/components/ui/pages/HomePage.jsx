import React from "react";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import AppLayout from "../../../layouts/AppLayout";
import { IconLabel, ResponsiveHeaderTypography } from "../../generic/GenericTypography";
import { GenericIconButton } from "../../generic/GenericIconButton";
import { LARAVEL_ICON, MUI_ICON, REACT_JS_ICON } from "../../generic/GenericIcons";

const socialLinks = [
  {
    url: 'https://github.com/macariojenmar',
    icon: <FaGithub />,
    label: 'Github'
  },
  {
    url: 'https://www.linkedin.com/in/jenmar-macario-5561a1328/',
    icon: <FaLinkedin />,
    label: 'Linkedin'
  }
];

const techStackIconList = [
  {
    url: '/react',
    tooltip: 'React JS',
    icon: REACT_JS_ICON,
  },
  {
    url: '/react',
    tooltip: 'Material UI',
    icon: MUI_ICON,
  },
  {
    url: '/react',
    tooltip: 'Laravel',
    icon: LARAVEL_ICON,
  }
];

const HomePage = () => {
  return (
    <AppLayout>
      <Grid2 container alignItems={'center'} direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' }} spacing={3}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} >
          <ResponsiveHeaderTypography>Hi! I am Jenmar,</ResponsiveHeaderTypography>
          <ResponsiveHeaderTypography fontWeight={700} color={'primary'}>a Web Developer</ResponsiveHeaderTypography>
          <Typography color={'grey'} variant={'body2'} mb={2} mt={1}>I specialize in creating responsive single-page web applications (SPAs) with a focus on writing clean, maintainable, and efficient code, ensuring scalable and robust solutions.</Typography>
          <Stack direction={'row'} gap={2} mb={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            {
              socialLinks?.map((item, index) => {
                return (
                  <IconLabel
                    key={`link-key-${index}`}
                    icon={item?.icon}
                    label={<Typography fontWeight={'700'} variant="body2">{item?.label}</Typography>}
                    onClick={() => window.open(item?.url, '_blank')}
                    sx={{
                      cursor: 'pointer', ':hover': {
                        color: 'primary.main',
                        transition: '0.5s'
                      }
                    }}
                  />
                );
              })
            }
          </Stack>
          <Stack direction={'row'} alignItems={'center'} gap={1} justifyContent={{ xs: 'center', md: 'flex-start' }}>
            <Typography fontWeight={700} mr={0.5}>Tech Stack: </Typography>
            {
              techStackIconList?.map((item, index) => {
                return (
                  <GenericIconButton
                    key={`tech-stack-icon-key-${index}`}
                    icon={item?.icon}
                    tooltip={item?.tooltip}
                    cursor={'default'}
                  />
                );
              })
            }
          </Stack>
        </Grid2>
        <Grid2 container item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} justifyContent={{ xs: 'center', md: 'flex-end' }}>
          <Box sx={{ width: { xs: '230px', md: '345px' }, height: { xs: '260px', md: '390px' } }}>
            <img
              src={'/jenmarAvatar.png'}
              alt="My Avatar"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid2>
      </Grid2 >
    </AppLayout >
  );
};

export default HomePage;