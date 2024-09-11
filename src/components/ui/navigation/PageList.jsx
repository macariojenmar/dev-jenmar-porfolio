import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { FaArrowUpRightFromSquare, FaCircleInfo } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa6";
import { MdPhoneEnabled } from "react-icons/md";
import { ABOUT, CONTACT, HOME, NAVIGATION_LIST, PROJECTS } from "../../../enums/generalEnums";
import { GenericLink } from "../../generic/GenericLink";
import { ThemeSwitch } from "../ThemeSwitch";

const pageIcons = {
  [HOME]: <GoHomeFill />,
  [ABOUT]: <FaCircleInfo />,
  [PROJECTS]: <FaFolderOpen />,
  [CONTACT]: <MdPhoneEnabled />
};

export const PageList = ({ isMobile = false }) => {
  const { pathname: currentPath } = useLocation();

  return (
    <Stack direction={isMobile ? 'column' : 'row'} gap={2} alignItems={isMobile ? 'flex-start' : 'center'}>
      {
        NAVIGATION_LIST?.map((item, index) => {
          const isCurrentPath = (item?.path === currentPath);
          return (
            <Stack
              key={`navigation-key-${index}`}
              direction={'row'}
              gap={1}
            >
              <Box color={isCurrentPath && 'primary.main'}>
                {isMobile && pageIcons?.[item?.key]}
              </Box>
              <GenericLink
                text={item?.key}
                path={item?.path}
                fontWeight={700}
                variant={'body2'}
                color={isCurrentPath && 'primary'}
                sx={{ textTransform: 'capitalize' }}
              />
            </Stack>
          );
        })
      }
      <Stack
        direction={'row'}
        alignItems={'center'}
        gap={1}
        ml={{ md: 3 }}
        onClick={() => window.open('https://drive.google.com/file/d/1b14Sq6tw-TdZ2ut9O6K1neS8r7CPG7IN/view?usp=sharing', '_blank')}
        sx={{ cursor: 'pointer' }}
      >
        <Typography variant="body2" fontWeight={600} color="secondary">Resume</Typography>
        <FaArrowUpRightFromSquare fontSize={'small'} color="#16a085" />
      </Stack>
      {
        !isMobile && <ThemeSwitch />
      }
    </Stack>
  );
};