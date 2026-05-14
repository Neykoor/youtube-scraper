import axios from 'axios'

export async function cobalt(url, audio = true) {
  try {

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

    if (data.status !== 'stream')
      throw 'Error al obtener media'

    return {
      status: true,
      result: data
    }

  } catch (e) {
    return {
      status: false,
      msg: e.toString()
    }
  }
}
