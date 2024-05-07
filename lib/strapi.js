const STRAPI_TOKEN = 'bearer cfafeef6ac4831b295d96d8c1529c47379d8aa27efed3258c242db154658ee330884823fe7989375be8cf98d74eae992890db47f2b2afa422e1d7bddfe12ee5563218293a0cc93d26f8d9c912be9fb846d485113a556fd87d1c986879a111d9851382a91f86efc1a0da2e09a9fb6eb6b88df899a69e33f694030871ec79d5ca7'

export async function getAllNotes() {
  const response = await fetch(`http://localhost:1337/api/notes`)
  const data = await response.json();

  const res = {};

  data.data.forEach(({ id, attributes: { title, content, slug, updatedAt } }) => {
    res[slug] = JSON.stringify({
      title,
      content,
      updateTime: updatedAt
    })
  })

  return res
}

export async function addNote(data) {
  const response = await fetch(`http://localhost:1337/api/notes`, {
    method: 'POST',
    headers: {
      Authorization: { STRAPI_TOKEN },
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: JSON.parse(data)
    })
  })
  const res = await response.json();
  return res.data.attributes.slug
}

export async function updateNote(uuid, data) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: { STRAPI_TOKEN },
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: JSON.parse(data)
    })
  })
  const res = await response.json()
}

export async function getNote(uuid) {
  const response = await fetch(`http://localhost:1337/api/notes?filters[slug][$eq]=${uuid}`)
  const data = await response.json();
  return {
    title: data.data[0].attributes.title,
    content: data.data[0].attributes.content,
    updateTime: data.data[0].attributes.updatedAt,
    id: data.data[0].id
  }
}

export async function delNote(uuid) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: { STRAPI_TOKEN },
      "Content-Type": "application/json"
    }
  })
  const res = await response.json()
}

