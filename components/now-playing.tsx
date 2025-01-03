'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Music } from 'lucide-react'
import { NowPlayingTrack } from "@/types/profile"
import { cn } from "@/lib/utils"

interface NowPlayingProps {
  track: NowPlayingTrack | null
  className?: string
  cardColor: string
}

/**
 * NowPlaying component - Displays the currently playing track
 * 
 * @param track - The currently playing track information
 * @param className - Additional CSS classes
 * @param cardColor - The background color of the card
 */
export function NowPlaying({ track, className, cardColor }: NowPlayingProps) {
  const [isBumping, setIsBumping] = useState(false)

  useEffect(() => {
    if (track && track['@attr']?.nowplaying) {
      const interval = setInterval(() => {
        setIsBumping((prev) => !prev)
      }, 500)
      return () => clearInterval(interval)
    }
  }, [track])

  if (!track || !track['@attr']?.nowplaying) return null

  return (
    <Card className={cn(
      `${cardColor} backdrop-blur-xl border-none shadow-xl transition-transform duration-200 ease-in-out`,
      isBumping ? "scale-105" : "scale-100",
      className
    )}>
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Avatar className="h-16 w-16 ring-2 ring-primary/50">
              <AvatarImage 
                src={track.image[2]['#text'] || '/placeholder.svg?height=64&width=64'} 
                alt={track.name} 
              />
              <AvatarFallback>
                <Music className="h-8 w-8" />
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-800" />
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-xs text-green-500 font-medium">NOW PLAYING</p>
            <p className="font-medium leading-none text-gray-100">{track.name}</p>
            <p className="text-sm text-gray-400">{track.artist['#text']}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

