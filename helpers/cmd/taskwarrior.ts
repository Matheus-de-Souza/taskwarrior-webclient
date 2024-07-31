
import { sendTaskwarriorCmd } from '~/api'

export const t = async (
  args: string[],
  callback?: (value: string) => string,
): Promise<string> => {
  if (args.length === 0) {
    return `Usage: t [args]
Args:
  All commands which are valid for taskwarrior.
  See https://taskwarrior.org/docs/commands/

Example: 
  t add something to do
  t add project:Home clean the garden
  t list pro:Home`;
  }

  switch (args[0]) {
    default: {
      return await sendTaskwarriorCmd(args);
    }
  }
}
