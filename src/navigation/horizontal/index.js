export default [
  {
    title: 'Лента',
    to: { name: 'index' },
    icon: { icon: 'tabler-news' },
    role: 0,
  },

  // {
  //   title: 'Продукты',
  //   to: { name: 'products' },
  //   icon: { icon: 'tabler-article' },
  //   role: 1,
  // },
  {
    title: 'Мои Вещи',
    icon: { icon: 'tabler-hanger' },
    children: [
      {
        title: 'Список',
        icon: { icon: 'tabler-list' },
        to: { name: 'items' },
      },
      {
        title: 'Добавить',
        icon: { icon: 'tabler-plus' },
        to: { name: 'items-new' },
      },
    ],
    role: 1,
  },
  {
    title: 'Список Желаний',
    icon: { icon: 'tabler-heart' },
    children: [
      {
        title: 'Список',
        icon: { icon: 'tabler-list' },
        to: { name: 'wishlist' },
      },
    ],
    role: 1,
  },
]
