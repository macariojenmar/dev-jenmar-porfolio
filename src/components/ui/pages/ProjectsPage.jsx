import React from "react";
import AppLayout from "../../../layouts/AppLayout";
import { ResponsiveHeaderTypography } from "../../generic/GenericTypography";
import { Box, Button, Chip, Grid2, Stack, Typography } from "@mui/material";
import { FaPlay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { ADOBE_XD_ICON, BOOTSTRAP_ICON, CSS_ICON, FIGMA_ICON, HTML_ICON, JS_ICON, LARAVEL_ICON, MUI_ICON, REACT_JS_ICON } from "../../generic/GenericIcons";
import { SHADOWS } from "../../../enums/themeEnums";

const ProjectsPage = () => {
  const genericTechStack = [
    {
      icon: REACT_JS_ICON,
      label: 'React JS'
    },
    {
      icon: MUI_ICON,
      label: 'Material UI v6'
    }
  ];

  const projectList = [
    {
      title: 'Craft & Comfort',
      description: 'A fictional online shop specializing in handcrafted furniture, offering a unique collection that blends minimalist elegance, timeless class, and vintage charm. The website is designed to be fully responsive, providing an optimal user experience across all devices. With its clean, minimalist yet modern interface, the site reflects the brand\'s commitment to simplicity, functionality, and aesthetic appeal, making it easy for customers to explore the collection.',
      withGithub: true,
      image: '/SDOMockUp.png',
      url: 'https://craft-and-comfort.web.app/',
      code_url: 'https://github.com/macariojenmar/craft-and-comfort',
      techStack: genericTechStack
    },
    {
      title: 'Schools Division of Benguet Website',
      description: 'It serves as the official online portal for the Schools Division Office of Benguet, under the Department of Education (DepEd). It provides essential information and updates related to educational services, programs, and initiatives in the Benguet region. The site features resources for educators, students, and the general public, including announcements, downloadable forms, and contact information for the division\'s various offices. It was developed as part of my on-the-job training during college.',
      withGithub: false,
      url: 'https://sdo.depedbenguet.com/',
      image: '/SDOMockUp.png',
      techStack: [
        {
          icon: HTML_ICON,
          label: 'HTML 5'
        },
        {
          icon: CSS_ICON,
          label: 'CSS 3'
        },
        {
          icon: BOOTSTRAP_ICON,
          label: 'Bootstrap 5'
        },
        {
          icon: JS_ICON,
          label: 'Javascript'
        },
        {
          icon: LARAVEL_ICON,
          label: 'Laravel 8'
        }
      ]
    }
  ];

  return (
    <AppLayout xl={'50px 410px'} lg={'30px 200px'}>
      <ResponsiveHeaderTypography mb={2} color={'primary'}>PROJECTS</ResponsiveHeaderTypography>
      {
        projectList?.map((item, indexOut) => {
          return (
            <Grid2 container spacing={5} mb={5} key={`project-key-${indexOut}`}>
              <Grid2 item size={{ xs: 12, md: 6 }}>
                <Box sx={{ height: 360 }}>
                  <img
                    src={item?.image}
                    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                  />
                </Box>
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" mb={1} fontWeight={700}>{item?.title}</Typography>
                <Typography variant="body2" mb={2}>{item?.description}</Typography>
                <Typography variant="body2" fontWeight={700} mb={1}>Made using:</Typography>
                {
                  item?.techStack?.map((tech, indexIn) => {
                    return (
                      <Chip
                        key={`tech-stack-key-${indexIn}`}
                        icon={tech?.icon}
                        label={tech?.label}
                        sx={{ margin: '0 6px 7px 0' }}
                      />
                    );
                  })
                }
                <Stack direction={'row'} justifyContent={'flex-end'} gap={1} mt={2}>
                  {item?.withGithub && <Button startIcon={<FaGithub />} onClick={() => window.open(item?.code_url, '_blank')}>Code</Button>}
                  <Button variant="outlined" startIcon={<FaPlay size={'14px'} />} onClick={() => window.open(item?.url, '_blank')}>Live Preview</Button>
                </Stack>
              </Grid2>
            </Grid2>
          );
        })
      }
    </AppLayout>
  );
};

export default ProjectsPage;