// import { lazy } from 'react';

// import Home from '~/pages/Home';
// import Achievements from '~/pages/Achievements';
// import Models from '~/pages/Models';
// import Scenes from '~/pages/Scenes';

// const lazyLoad = (name) => {
//   const Module = lazy(() => import(`~/pages/${name}.jsx`));
//   return <Module />;
// };
import { FEIYUN_URL } from '~/consts/index';
import { FEIYUN_URL_LOGIN } from '~/consts';

export const navList = [
  {
    title: '进入飞云',
    href: FEIYUN_URL_LOGIN,
    blank: true,
  },
  // {
  //   title: '合作团队',
  //   href: '/teams',
  // },
  {
    title: '数据共享',
    href: '/datas',
  },
  {
    title: '知识协同',
    href: '/achievements',
  },
  {
    title: '场景适配',
    href: '/scenes',
  },
  {
    title: 'Map',
    href: '/map',
  },
  {
    title: 'Factory',
    href: '/factory',
  },
  {
    title: '关于我们',
    href: '/about',
  },
  // {
  //   title: '飞云集智',
  //   href: FEIYUN_URL,
  //   blank: true,
  // },
];
