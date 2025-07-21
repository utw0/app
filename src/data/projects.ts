import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Project {
  title: string
  description: string
  href?: string
  icon: IconProp
}

export const ProjectData: Project[] = [
  {
    title: 'luhux.xyz',
    description: "The website you're currently on! Made with Next.js and utilises serverless functions.",
    href: 'https://luhux.xyz',
    icon: ['fas', 'globe-europe'],
  },
]
