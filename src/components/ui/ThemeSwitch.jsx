import React from "react";
import { MdDarkMode } from "react-icons/md";
import { TbSunHigh } from "react-icons/tb";
import { Stack, Typography } from "@mui/material";
import { DARK, LIGHT } from "../../enums/themeEnums";
import { GenericIconButton } from "../generic/GenericIconButton";
import { useThemeStore } from "../../hooks/useStore";

export const ThemeSwitch = ({ showLabel = false }) => {
  const { themeType, changeThemeType } = useThemeStore()
  const isThemeLight = (themeType === LIGHT);
  return (
    <Stack direction={'row'} alignItems={'center'} gap={0.5}>
      {showLabel && <Typography variant="body2" sx={{ textTransform: 'capitalize' }}>{isThemeLight ? DARK : LIGHT}</Typography>}
      <GenericIconButton
        tooltip={isThemeLight ? 'Dark mode' : 'Light mode'}
        icon={isThemeLight ? <MdDarkMode /> : <TbSunHigh />}
        onClick={() => changeThemeType(isThemeLight ? DARK : LIGHT)}
      />
    </Stack>
  );
}