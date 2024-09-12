import React from "react";
import { IconLabel, ResponsiveHeaderTypography } from "../../generic/GenericTypography";
import AppLayout from "../../../layouts/AppLayout";
import { Box, Grid2, Typography } from "@mui/material";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const ContactPage = () => {
  const contactList = [
    {
      label: 'Email',
      icon: <MdOutlineEmail />,
      value: 'macariojenmar05@gmail.com'
    },
    {
      label: 'Address',
      icon: <IoLocationOutline />,
      value: 'Baguio City, Benguet, Philippines'
    }
  ];

  return (
    <AppLayout xl={'280px 410px'} lg={'190px 200px'}>
      <Box padding={{ md: '0 240px' }}>
        <ResponsiveHeaderTypography color={'primary'}>CONTACT ME</ResponsiveHeaderTypography>
        <Typography variant="body2" mb={3} mt={1}>
          If you are considering hiring me, feel free to reach out via the email provided below.
          Curious about what I bring to the table? Take a look at my projects or resume 😉
        </Typography>
        <Grid2 container justifyContent={'space-between'}>
          {
            contactList?.map((item, index) => {
              return (
                <Grid2 item key={`contact-key-${index}`}>
                  <IconLabel
                    icon={item?.icon}
                    label={<Typography variant="body2">{item?.label}</Typography>}
                    color={'grey'}
                  />
                  <Typography fontWeight={700} mb={2}>{item?.value}</Typography>
                </Grid2>
              );
            })
          }
        </Grid2>
      </Box>
    </AppLayout>
  );
};

export default ContactPage;