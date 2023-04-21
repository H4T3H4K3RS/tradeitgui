import mock from '@/@fake-db/mock'
import { paginateArray } from '@/@fake-db/utlis'

const database = [
  {
    "id": "0000-0000-0000-0000",
    "name": "Test product #0",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0001",
    "name": "Test product #1",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0002",
    "name": "Test product #2",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0003",
    "name": "Test product #3",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0004",
    "name": "Test product #4",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0005",
    "name": "Test product #5",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0006",
    "name": "Test product #6",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0007",
    "name": "Test product #7",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0008",
    "name": "Test product #8",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0009",
    "name": "Test product #9",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0010",
    "name": "Test product #10",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0011",
    "name": "Test product #11",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0012",
    "name": "Test product #12",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0013",
    "name": "Test product #13",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0014",
    "name": "Test product #14",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0015",
    "name": "Test product #15",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0016",
    "name": "Test product #16",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0017",
    "name": "Test product #17",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0018",
    "name": "Test product #18",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
  {
    "id": "0000-0000-0000-0019",
    "name": "Test product #19",
    "image": "https://ossolutions.space/static/logo.png",
    "description": "Lorem ipsum",
  },
]

mock.onGet ('/api/v1/products').reply (config => {
  const { q = '', perPage = 10, currentPage = 1 } = config.params ?? {}
  const queryLower = q.toLowerCase ()
  let filteredItems = database.filter (item => (
    (
      item.name.toLowerCase ().includes (queryLower) ||
        item.id.toLowerCase ().includes (queryLower) ||
        item.description.toLowerCase ().includes (queryLower)
    )
  ),
  ).reverse ()
  const totalPage = Math.ceil (filteredItems.length / perPage) ? Math.ceil (filteredItems.length / perPage) : 1
  const totalItems = filteredItems.length
  if (perPage) {
    const firstIndex = (currentPage - 1) * perPage
    const lastIndex = perPage * currentPage

    filteredItems = filteredItems.slice (firstIndex, lastIndex)
  }

  return [ 200, { data: filteredItems, totalPage, totalItems } ]
})
