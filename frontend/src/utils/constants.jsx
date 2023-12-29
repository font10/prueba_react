import img from '../assets/placeholder.png'
import { route } from '../models/route.mode'
import facebook from '../assets/social/facebook-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import instagram from '../assets/social/instagram-white.svg'

import appStore from '../assets/store/app-store.svg'
import playStore from '../assets/store/play-store.svg'
import windowsStore from '../assets/store/windows-store.svg'

export const categories = [
  { id: 1, title: 'Series', desc: 'Popular Series', img: img, path: route.series.path },
  { id: 2, title: 'Movies', desc: 'Popular Movies', img: img , path: route.movies.path },
]

export const footerTabs = [
  'Home',
  'Terms and Conditions',
  'Privacy Policy',
  'Collection Statement',
  'Help',
  'Manage Account'
]

export const socials = [
  { img: facebook, size: 18 },
  { img: twitter, size: 30 },
  { img: instagram, size: 28 },
]
export const store = [
  { img: appStore, size: 140 },
  { img: playStore, size: 140 },
  { img: windowsStore, size: 110 },
]