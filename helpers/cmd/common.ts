import config from '~/assets/config.json'
import { cmdWtihDescription } from '~/helpers/cmdWithDescription'

export const help = async (): Promise<string> => {
  const commands = cmdWtihDescription()
  return `You can use following commands: \n\n${commands
    .map(cmd => `${cmd}\n`)
    .join(
      '',
    )}\n\n===========Other commands============\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.\n[ArrowUp] recall previously-entered command\n[ArrowDown] call next-entered command`
}

export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ')
}

export const date = async (): Promise<string> => {
  return new Date().toString()
}