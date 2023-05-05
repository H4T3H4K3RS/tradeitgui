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
    title: 'Обмены',
    icon: { icon: 'tabler-replace' },
    to: { name: 'trade' },
    role: 1,
  },
  {
    title: 'Сообщения',
    icon: { icon: 'tabler-messages' },
    to: { name: 'message' },
    role: 1,
  },
  {
    title: 'Избранное',
    icon: { icon: 'tabler-heart' },
    to: { name: 'wishlist' },
    role: 1,
  },
  {
    title: 'Жалобы',
    icon: { icon: 'tabler-alert-triangle' },
    to: { name: 'report' },
    role: 1,
  },
]