import { Icon } from '@iconify/react';

import { SideNavItem } from '../src/types';

export const SIDENAV_ITEMS: SideNavItem[] = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon="lucide:home" width="20" height="20" className='icon-orange-block' />,
  },
  {
    title: 'Skill',
    path: '/skill',
    icon: <Icon icon="game-icons:skills" width="20" height="20" className='icon-orange-block' />,
  },
  {
    title: 'Experience',
    path: '/experience',
    icon: <Icon icon="hugeicons:permanent-job" width="20" height="20" className='icon-orange-block' />,
  },
  // {
  //   title: 'Project',
  //   path: '/project',
  //   icon: <Icon icon="lucide:layers" width="20" height="20" className='icon-orange-block' />,
  // },
  {
    title: 'Contact',
    path: '/contact',
    icon: <Icon icon="lucide:mail" width="20" height="20" className='icon-orange-block' />,
  },
  {
    title: 'Resume',
    path: '/resume',
    icon: <Icon icon="pepicons-pop:cv" width="20" height="20" className='icon-orange-block' />,
  },
  {
    title: 'Chatbot',
    path: '/chatbotgpt',
    icon: <Icon icon="tabler:robot" width="20" height="20" className='icon-orange-block' />,
  },
  // {
  //   title: 'Projects',
  //   path: '/projects',
  //   icon: <Icon icon="lucide:folder" width="24" height="24" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: 'All', path: '/projects' },
  //     { title: 'Web Design', path: '/projects/web-design' },
  //     { title: 'Graphic Design', path: '/projects/graphic-design' },
  //   ],
  // },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <Icon icon="lucide:mail" width="24" height="24" />,
  // },
  // {
  //   title: 'Settings',
  //   path: '/settings',
  //   icon: <Icon icon="lucide:settings" width="24" height="24" />,
  //   submenu: true,
  //   subMenuItems: [
  //     { title: 'Account', path: '/settings/account' },
  //     { title: 'Privacy', path: '/settings/privacy' },
  //   ],
  // },
  // {
  //   title: 'Help',
  //   path: '/help',
  //   icon: <Icon icon="lucide:help-circle" width="24" height="24" />,
  // },
];