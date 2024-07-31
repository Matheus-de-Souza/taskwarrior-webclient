import axios from 'axios'
import config from '~/assets/config.json'

export const getRepo = async () => {
  const { data } = await axios.get(`${config.repoUrl}`)
  return data
}

export const sendTaskwarriorCmd = async (args) => {
  const { data } = await axios.post(
    `${config.hostServer}/cmd`,
    args.join(' '), {
      headers: {
        'api-key': config.apikey,
      }
    }
  );
  return data
}