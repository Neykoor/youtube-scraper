import axios from 'axios'

export async function cobalt(url, audio = true) {
  try {
    let title = 'Desconocido'
    let thumbnail = ''
    
    try {
      const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`
      const { data: oembedData } = await axios.get(oembedUrl)
      title = oembedData.title
      thumbnail = oembedData.thumbnail_url
    } catch (e) {}

    const { data } = await axios.post(
      'https://api.cobalt.tools/api/json',
      {
        url,
        isAudioOnly: audio,
        aFormat: 'mp3',
        vQuality: '720'
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      }
    )

    if (data.status !== 'stream' && data.status !== 'redirect') {
      throw new Error('Error al obtener media')
    }

    return {
      status: true,
      title,
      thumbnail,
      result: data
    }

  } catch (e) {
    return {
      status: false,
      msg: e.toString()
    }
  }
}
