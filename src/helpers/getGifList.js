const {
    VITE_GIF_API_URL,
    VITE_GIF_API_KEY,
    VITE_GIF_API_LANG,
    VITE_GIF_API_RATING,
    VITE_GIF_API_LIMIT,
  } = import.meta.env

  const url = new URL(VITE_GIF_API_URL)
  url.searchParams.set('api_key', VITE_GIF_API_KEY)
  url.searchParams.set('limit', VITE_GIF_API_LIMIT)
  url.searchParams.set('offset', 0)
  url.searchParams.set('rating', VITE_GIF_API_RATING)
  url.searchParams.set('lang', VITE_GIF_API_LANG)

  export const getGifList = async (category) => {
    url.searchParams.set('q', category)

    const req = await fetch(url.toString())
    const { data = [] } = await req.json()

    const list = data?.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }))
    return list
  }