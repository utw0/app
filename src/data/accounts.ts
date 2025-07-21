import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface Account {
  name: string
  href?: string
  icon?: IconProp
  copyEmail: () => void
}

export const AccountData: Omit<Account, 'copyEmail'>[] = [
  {
    name: 'GitHub',
    href: '/github',
  },
  {
    name: 'Linkedin',
    href: '/linkedin',
    icon: ['fab', 'linkedin-in'],
  },
  {
    name: 'Discord',
    href: '/discord',
  },
  {
    name: 'Spotify',
    href: '/spotify',
  },
  {
    name: 'Instagram',
    href: '/instagram',
  },
  {
    name: 'Email',
    icon: ['fas', 'envelope'],
  },
]
