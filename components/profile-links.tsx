import { Button } from "@/components/ui/button"
import { LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import Image from 'next/image'
import { ProfileConfig } from "@/types/profile"

interface ProfileLinksProps {
  links: ProfileConfig['links']
  buttonOutlineColor: string
}

/**
 * ProfileLinks component - Renders a list of profile links as buttons
 * 
 * @param links - An array of link objects containing label, url, and icon
 * @param buttonOutlineColor - The color of the button outlines
 */
export function ProfileLinks({ links, buttonOutlineColor }: ProfileLinksProps) {
  if (links.length === 0) return null

  return (
    <div className="flex gap-2 justify-center">
      {links.map(({ label, url, icon }) => {
        const IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon | undefined
        return (
          <Button
            key={label}
            variant="outline"
            size="icon"
            asChild
            className={`bg-gray-800/50 text-gray-200 hover:text-white hover:bg-gray-700/50 border-${buttonOutlineColor}`}
          >
            <a href={url} target="_blank" rel="noopener noreferrer">
              {IconComponent ? (
                <IconComponent className="h-5 w-5" />
              ) : (
                <Image src={icon} alt={label} width={20} height={20} />
              )}
              <span className="sr-only">{label}</span>
            </a>
          </Button>
        )
      })}
    </div>
  )
}

