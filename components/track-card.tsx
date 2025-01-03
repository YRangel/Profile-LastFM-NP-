import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Music } from 'lucide-react'

interface TrackCardProps {
  name: string
  artist: string
  imageUrl: string
}

export function TrackCard({ name, artist, imageUrl }: TrackCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback>
              <Music className="h-6 w-6" />
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium leading-none mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{artist}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

