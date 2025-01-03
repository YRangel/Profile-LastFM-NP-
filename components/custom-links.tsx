import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type LucideIcon } from 'lucide-react'
import * as Icons from 'lucide-react'
import Image from 'next/image'
import { ProfileConfig } from "@/types/profile"

interface CustomLinksProps {
  links: ProfileConfig['customLinks']
  buttonOutlineColor: string
  cardColor: string
}

/**
 * CustomLinks component - Renders a card with custom link buttons
 * 
 * @param links - An array of custom link objects containing label, url, and icon
 * @param buttonOutlineColor - The color of the button outlines
 * @param cardColor - The background color of the card
 */
export function CustomLinks({ links, buttonOutlineColor, cardColor }: CustomLinksProps) {
  if (links.length === 0) return null

  return (
    <Card className={`${cardColor} backdrop-blur-xl border-none shadow-xl`}>
      <CardContent className="p-4">
        <div className="grid gap-2">
          {links.map((link) => {
            const IconComponent = Icons[link.icon as keyof typeof Icons] as LucideIcon | undefined
            return (
              <Button
                key={link.label}
                variant="outline"
                className={`w-full justify-between text-gray-200 hover:text-white hover:bg-gray-700/50 ${cardColor} border-${buttonOutlineColor}`}
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <span dangerouslySetInnerHTML={{ __html: link.label }} />
                  {IconComponent ? (
                    <IconComponent className="h-4 w-4 ml-2" />
                  ) : (
                    <Image src={link.icon} alt={link.label} width={16} height={16} className="ml-2" />
                  )}
                </a>
              </Button>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}

