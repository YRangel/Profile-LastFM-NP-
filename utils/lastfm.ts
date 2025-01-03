const LASTFM_API_KEY = process.env.NEXT_PUBLIC_LASTFM_API_KEY
const LASTFM_BASE_URL = 'https://ws.audioscrobbler.com/2.0/'

/**
 * Fetches the currently playing track for a given Last.fm user
 * 
 * @param username - The Last.fm username
 * @returns The currently playing track or null if there's an error
 */
export async function getNowPlaying(username: string) {
  try {
    const response = await fetch(
      `${LASTFM_BASE_URL}?method=user.getrecenttracks&user=${username}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.recenttracks.track[0] || null
  } catch (error) {
    console.error('Error fetching now playing:', error)
    return null
  }
}

/**
 * Fetches user information for a given Last.fm user
 * 
 * @param username - The Last.fm username
 * @returns User information or null if there's an error
 */
export async function getUserInfo(username: string) {
  try {
    const response = await fetch(
      `${LASTFM_BASE_URL}?method=user.getinfo&user=${username}&api_key=${LASTFM_API_KEY}&format=json`
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json()
    return data.user
  } catch (error) {
    console.error('Error fetching user info:', error)
    return null
  }
}

