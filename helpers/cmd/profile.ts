import { launchUrl } from '../launchUrl'
import { getStats } from '~/api'
import config from '~/assets/config.json'

export const blog = async (): Promise<string> => {
  return launchUrl(config.blogUrl, 'blog')
}

export const resume = async (): Promise<string> => {
  return launchUrl(config.resumeUrl, 'resume')
}

export const github = async (): Promise<string> => {
  return launchUrl(config.githubUrl, 'github')
}

export const linkedin = async (): Promise<string> => {
  return launchUrl(config.linkedinUrl, 'linkedin')
}

export const repo = async (): Promise<string> => {
  return launchUrl(config.repoUrl, 'repository')
}

export const posts = async (): Promise<string> => {
  return await getRecentPosts()
}
