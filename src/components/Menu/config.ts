import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pancakeswap.finance/'
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ]
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pancakeswap.finance/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pancakeswap.finance/syrup'
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Voting',
        href: 'https://voting.pancakeswap.finance'
      },
      {
        label: 'Github',
        href: 'https://github.com/mdrezaislamLsvswap'
      },
      {
        label: 'Facebook',
        href: 'https://Facebook.com/LitecoinSv'
      }
    ]
  }
]

export default config
