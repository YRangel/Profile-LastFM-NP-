'use client'

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Github } from 'lucide-react'
import { getNowPlaying, getUserInfo } from "@/utils/lastfm"
import { NowPlaying } from "@/components/now-playing"
import { ProfileLinks } from "@/components/profile-links"
import { CustomLinks } from "@/components/custom-links"
import { profileConfig } from "@/config/profile"
import { NowPlayingTrack } from "@/types/profile"

/**
 * Home component - The main page of the Last.fm profile application
 * 
 * This component fetches and displays the user's current playing track,
 * total scrobbles, and renders profile information and links.
 */
export default function Home() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingTrack | null>(null)
  const [scrobbles, setScrobbles] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [track, user] = await Promise.all([
          getNowPlaying(profileConfig.lastfmUsername),
          getUserInfo(profileConfig.lastfmUsername)
        ])
        setNowPlaying(track)
        setScrobbles(user.playcount)
      } catch (error) {
        console.error('Failed to fetch Last.fm data:', error)
      }
    }

    fetchData()
    const interval = setInterval(fetchData, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-gray-900 text-gray-100">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${profileConfig.wallpaper.url})`,
          filter: profileConfig.wallpaper.blur.enabled ? `blur(${profileConfig.wallpaper.blur.intensity}px)` : 'none'
        }}
      />
      <div className={`absolute inset-0 bg-gradient-to-b ${profileConfig.wallpaper.overlay}`} />
      
      {/* Content */}
      <div className="relative flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center space-y-4">
            <Avatar className="h-24 w-24 mx-auto ring-4 ring-gray-700 shadow-xl">
              <AvatarImage src={profileConfig.avatar} alt="Profile Avatar" />
              <AvatarFallback>
                <User className="h-12 w-12" />
              </AvatarFallback>
            </Avatar>
            <div className={`${profileConfig.cardColor} backdrop-blur-sm p-4 rounded-lg`}>
              <div dangerouslySetInnerHTML={{ __html: profileConfig.nameAndBio }} />
              {scrobbles && (
                <p className="text-sm text-gray-400 mt-2">
                  {parseInt(scrobbles).toLocaleString()} total scrobbles
                </p>
              )}
            </div>
          </div>

          <NowPlaying 
            track={nowPlaying} 
            className="transform transition-all duration-500 hover:scale-105"
            cardColor={profileConfig.cardColor}
          />

          {profileConfig.customLinks.length > 0 && (
            <CustomLinks 
              links={profileConfig.customLinks} 
              buttonOutlineColor={profileConfig.buttonOutlineColor}
              cardColor={profileConfig.cardColor}
            />
          )}

          {profileConfig.links.length > 0 && (
            <div className={`${profileConfig.cardColor} backdrop-blur-sm p-4 rounded-lg`}>
              <ProfileLinks 
                links={profileConfig.links} 
                buttonOutlineColor={profileConfig.buttonOutlineColor}
              />
            </div>
          )}
        </div>
        
        <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-sm text-gray-400">
          <span>Made by TJovial❤️</span>
          <a href="https://github.com/YRangel" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <Github size={16} />
          </a>
        </div>
      </div>
    </main>
  )
}

