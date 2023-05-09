export default [
  {
    title: 'Лента',
    to: { name: 'index' },
    icon: { icon: 'tabler-news' },
    role: 0,
  },
  {
    title: 'Одежда',
    icon: { icon: 'tabler-hanger-2' },
    to: { name: 'category-id', params: { id: 'clothes' } },
    role: 1,
  },
  {
    title: 'Аксессуары',
    icon: { icon: 'tabler-tie' },
    to: { name: 'category-id', params: { id: 'accessory' } },
    role: 1,
  },
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
