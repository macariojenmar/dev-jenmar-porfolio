import React from "react";
import { Box, Chip, Grid2, Typography } from "@mui/material";
import { ResponsiveHeaderTypography } from "../../generic/GenericTypography";
import AppLayout from "../../../layouts/AppLayout";
import { ADOBE_XD_ICON, BOOTSTRAP_ICON, CSS_ICON, FIGMA_ICON, FIREBASE_ICON, GIT_HUB_ICON, GIT_LAB_ICON, HEADLESS_UI_ICON, HTML_ICON, LARAVEL_ICON, MUI_ICON, MYSQL_ICON, REACT_JS_ICON, TAILWIND_ICON } from "../../generic/GenericIcons";

const technicalSkills = [
  {
    icon: REACT_JS_ICON,
    label: 'React JS'
  },
  {
    icon: MUI_ICON,
    label: 'Material UI'
  },
  {
    icon: TAILWIND_ICON,
    label: 'Tailwind CSS'
  },
  {
    icon: HEADLESS_UI_ICON,
    label: 'HeadlessUI'
  },
  {
    icon: HTML_ICON,
    label: 'HTML'
  },
  {
    icon: CSS_ICON,
    label: 'CSS'
  },
  {
    icon: BOOTSTRAP_ICON,
    label: 'Bootstrap'
  },
  {
    icon: LARAVEL_ICON,
    label: 'Laravel'
  },
  {
    icon: MYSQL_ICON,
    label: 'MySQL'
  },
  {
    icon: FIGMA_ICON,
    label: 'Figma'
  },
  {
    icon: ADOBE_XD_ICON,
    label: 'Adobe Xd'
  },
  {
    icon: GIT_HUB_ICON,
    label: 'GitHub'
  },
  {
    icon: GIT_LAB_ICON,
    label: 'GitLab'
  },
  {
    icon: FIREBASE_ICON,
    label: 'Firebase'
  }
];

const AboutPage = () => {
  return (
    <AppLayout>
      <Grid2 container alignItems={'center'} spacing={2}>
        <Grid2 container item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} justifyContent={{ xs: 'center', md: 'flex-start' }}>
          <Box sx={{ width: { xs: '233px', md: '420px' }, height: { xs: '215px', md: '390px' } }}>
            <img
              src={'/aboutImage.png'}
              alt="About Image"
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <ResponsiveHeaderTypography color={'primary'}>ABOUT ME</ResponsiveHeaderTypography>
          <Typography mb={3} mt={1} variant="body2">
            I am Jenmar Sacyang Macario, a web developer based in Baguio City, Benguet, Philippines.
            My tech stack primarily includes React JS, Material-UI (MUI), and Laravel.
            I specialize in building single-page applications (SPA) and take pride in writing clean, maintainable code.
            Collaboration is a key part of my workflow, as I believe that working together leads to better solutions and more efficient development processes.
          </Typography>
          <Typography fontWeight={700} mb={1}>Technical Skills</Typography>
          {
            technicalSkills?.map((item, index) => {
              return (
                <Chip
                  key={`skills-key-${index}`}
                  icon={item?.icon}
                  label={<Typography variant="caption" fontWeight={700}>{item?.label}</Typography>}
                  sx={{ margin: '0 6px 7px 0' }}
                />
              )
            })
          }
        </Grid2>
      </Grid2>
    </AppLayout >
  );
};

export default AboutPage;