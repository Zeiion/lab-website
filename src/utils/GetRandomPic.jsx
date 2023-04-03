const imgList = [
  'https://cdn.pixabay.com/photo/2017/07/10/23/45/cubes-2492010_960_720.jpg',
  'https://cdn.pixabay.com/photo/2020/02/03/00/12/fiber-4814456__340.jpg',
  'https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539__340.jpg',
  'https://cdn.pixabay.com/photo/2018/01/17/20/22/analytics-3088958__340.jpg',
  'https://cdn.pixabay.com/photo/2018/06/09/15/49/technology-3464633__340.jpg',
  'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg',
  'https://cdn.pixabay.com/photo/2019/07/14/16/29/pen-4337524__340.jpg',
  'https://cdn.pixabay.com/photo/2016/07/03/18/04/tech-1495181__340.jpg',
  'https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659__340.jpg',
  'https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087393__340.jpg',
  'https://cdn.pixabay.com/photo/2015/12/10/22/45/abstract-1087087__340.jpg',
  'https://cdn.pixabay.com/photo/2016/01/13/10/08/tech-1137487__340.jpg',
  'https://cdn.pixabay.com/photo/2018/06/09/15/49/technology-3464633__340.jpg',
  'https://cdn.pixabay.com/photo/2015/03/21/15/47/space-683823__340.jpg',
  'https://cdn.pixabay.com/photo/2019/12/12/11/40/engineer-4690505__340.jpg',
  'https://cdn.pixabay.com/photo/2020/02/19/07/48/web-4861605__340.jpg',
  'https://cdn.pixabay.com/photo/2018/05/23/10/21/technology-3423680__340.jpg',
  'https://cdn.pixabay.com/photo/2019/07/11/07/20/industry-4330186__340.jpg',
  'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507__340.jpg',
  'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835__340.jpg',
  'https://cdn.pixabay.com/photo/2017/04/10/07/57/processor-2217771__340.jpg',
  'https://cdn.pixabay.com/photo/2019/10/15/05/17/artificial-intelligence-4550606__340.jpg',
];

export const getIndexPic = (index) => {
  const idx = Math.floor(index % imgList.length);
  return imgList[idx];
};

export const getRandomPic = () => {
  const idx = Math.floor(Math.random() * imgList.length);
  return imgList[idx];
};
