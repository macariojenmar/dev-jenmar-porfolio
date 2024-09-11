export const HOME = 'home';
export const ABOUT = 'about';
export const PROJECTS = 'projects';
export const CONTACT = 'contact';
export const SHOW_IN_MOBILE = { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' };
export const SHOW_IN_DESKTOP = { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' };
export const NAVIGATION_LIST = Object.freeze([
    {
      path: '/',
      key: HOME,
    },
    {
      path: '/about',
      key: ABOUT,
    },
    {
      path: '/projects',
      key: PROJECTS,
    },
    {
      path: '/contact',
      key: CONTACT,
    }
]);
