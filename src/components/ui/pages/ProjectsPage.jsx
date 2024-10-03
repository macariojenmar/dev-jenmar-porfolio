import React from "react";
import AppLayout from "../../../layouts/AppLayout";
import { ResponsiveHeaderTypography } from "../../generic/GenericTypography";
import { Box, Button, Chip, Grid2, Stack, Typography } from "@mui/material";
import { FaPlay } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BOOTSTRAP_ICON, CSS_ICON, HEADLESS_UI_ICON, HTML_ICON, JS_ICON, LARAVEL_ICON, MUI_ICON, REACT_JS_ICON, TAILWIND_ICON } from "../../generic/GenericIcons";

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
      title: 'Custom Threads',
      description: 'A fictional website created to showcase customizable t-shirts. It offers users the ability to design their own t-shirts by choosing from a wide range of illustrations, shirt types, and personal touches. The website demonstrates how a platform can empower individuals to express their style through high-quality, personalized apparel. Fully responsive, ensures a seamless and enjoyable customization experience across all devices, highlighting the potential of a custom clothing e-commerce store.',
      withGithub: true,
      image: '/CustomThreadsMockup.png',
      url: 'https://shop-custom-threads.web.app/',
      code_url: 'https://github.com/macariojenmar/custom-threads',
      techStack: [
        {
          icon: REACT_JS_ICON,
          label: 'React JS'
        },
        {
          icon: TAILWIND_ICON,
          label: 'Tailwind CSS'
        },
        {
          icon: HEADLESS_UI_ICON,
          label: 'HeadlessUI'
        },
      ],
      date: 'Ongoing'
    },
    {
      title: 'Craft & Comfort',
      description: 'A fictional online shop specializing in handcrafted furniture, offering a unique collection that blends minimalist elegance, timeless class, and vintage charm. The website is designed to be fully responsive, providing an optimal user experience across all devices. With its clean, minimalist yet modern interface, the site reflects the brand\'s commitment to simplicity, functionality, and aesthetic appeal, making it easy for customers to explore the collection.',
      withGithub: true,
      image: '/CraftAndComfortMockUp.png',
      url: 'https://craft-and-comfort.web.app/',
      code_url: 'https://github.com/macariojenmar/craft-and-comfort',
      techStack: genericTechStack,
      npm_packages: "zustand, react-router-dom, and react-hot-toast",
      date: 'September 2024'
    },
    {
      title: 'Schools Division of Benguet Website',
      description: 'It serves as the official online portal for the Schools Division Office of Benguet, under the Department of Education (DepEd). It provides essential information and updates related to educational services, programs, and initiatives in the Benguet region. The site features resources for educators, students, and the general public, including announcements, downloadable forms, and contact information for the division\'s various offices. It was developed as part of my on-the-job training during college.',
      withGithub: false,
      url: 'https://sdo.depedbenguet.com/',
      image: '/SDOMockUp.png',
      date: 'August 2022',
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
            <Grid2 container spacing={{ xs: 2, md: 5 }} mb={5} key={`project-key-${indexOut}`}>
              <Grid2 item size={{ xs: 12, md: 6 }}>
                <Box sx={{ height: { xs: 250, md: 360 } }}>
                  <img
                    src={item?.image}
                    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                  />
                </Box>
              </Grid2>
              <Grid2 item size={{ xs: 12, md: 6 }}>
                <Typography variant="h6" fontWeight={700}>{item?.title}</Typography>
                <Typography variant="caption" color="grey">{item?.date}</Typography>
                <Typography variant="body2" mb={item?.npm_packages ? 1 : 2} mt={1}>{item?.description}</Typography>
                {item?.npm_packages && <Typography variant="body2" color="grey" mb={2}>Other npm packages: {item?.npm_packages}</Typography>}
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
                  {item?.withGithub && <Button startIcon={<FaGithub />} onClick={() => window.open(item?.code_url, '_blank')} color="none">Code</Button>}
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