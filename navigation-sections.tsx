import {
  PhoneIcon,
  BriefcaseIcon,
  IdentificationIcon,
  NewspaperIcon,
  HomeIcon,
} from '@heroicons/react/outline'

const pageNav = [
  {
    title: 'Home',
    href: '/',
    type: 'link',
    icon: HomeIcon,
  },
  {
    title: 'About',
    href: '/about',
    type: 'link',
    icon: IdentificationIcon,
  },
  {
    title: 'The Service',
    href: '/services',
    type: 'link',
    icon: BriefcaseIcon,
  },
  {
    title: 'Portfolio',
    href: '/#portfolio',
    type: 'link',
    icon: NewspaperIcon,
  },
  {
    title: 'Call / Email Me',
    href: '/contact',
    type: 'CTA',
    icon: PhoneIcon,
  },
]

export default pageNav
