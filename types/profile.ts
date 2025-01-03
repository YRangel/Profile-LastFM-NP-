export interface ProfileConfig {
  nameAndBio: string // This will now contain HTML content for both name and bio
  avatar: string
  wallpaper: {
    url: string
    blur: {
      enabled: boolean
      intensity: number
    }
    overlay?: string
  }
  buttonOutlineColor: string
  cardColor: string
  links: {
    label: string
    url: string
    icon: string
  }[]
  customLinks: {
    label: string // This will now support HTML content
    url: string
    icon: string
  }[]
  lastfmUsername: string
}

export interface NowPlayingTrack {
  name: string
  artist: {
    '#text': string
  }
  image: Array<{
    '#text': string
    size: string
  }>
  '@attr'?: {
    nowplaying: string
  }
}

