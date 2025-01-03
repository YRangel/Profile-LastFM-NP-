# Profile-LastFM-NP

This project is a Last.fm profile application that fetches and displays the user's current playing track, total scrobbles, and renders profile information and links.
-
## Features

- Displays the currently playing track from Last.fm
- Shows the total number of scrobbles
- Renders profile information and links
- Customizable profile with avatar, wallpaper, and links
- Responsive design

## Technologies Used

- Next.js
- React
- Tailwind CSS
- Radix UI
- Lucide Icons

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/YRangel/Profile-LastFM-NP.git
   cd Profile-LastFM-NP
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on the `.env.example` file and add your Last.fm API key:
   ```bash
   cp .env.example .env
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

2. You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

3. Customize your profile by editing the `profileConfig` object in `config/profile.ts`.

4. Deploy your application using Vercel or any other hosting service.

## Customizing Your Profile

To customize your profile, you need to edit the `profileConfig` object in the `config/profile.ts` file. This object contains various properties that define the appearance and content of your profile.

### Structure of `profileConfig` Object

The `profileConfig` object has the following structure:

```typescript
export const profileConfig: ProfileConfig = {
  nameAndBio: string, // HTML content for both name and bio
  avatar: string, // URL of the profile avatar image
  wallpaper: {
    url: string, // URL of the wallpaper image
    blur: {
      enabled: boolean, // Whether to enable blur effect
      intensity: number // Intensity of the blur effect
    },
    overlay?: string // Optional overlay color for the wallpaper
  },
  buttonOutlineColor: string, // Color of the button outlines
  cardColor: string, // Background color of the cards
  links: [
    {
      label: string, // Label of the link
      url: string, // URL of the link
      icon: string // URL or name of the icon
    }
  ],
  customLinks: [
    {
      label: string, // HTML content for the label
      url: string, // URL of the custom link
      icon: string // URL or name of the icon
    }
  ],
  lastfmUsername: string // Last.fm username
}
```

### Example

Here is an example of how you can customize the `profileConfig` object:

```typescript
export const profileConfig: ProfileConfig = {
  nameAndBio: `
    <h1>John Doe</h1>
    <p>Music lover and coder</p>
  `,
  avatar: "https://example.com/avatar.jpg",
  wallpaper: {
    url: "https://example.com/wallpaper.jpg",
    blur: {
      enabled: true,
      intensity: 10
    },
    overlay: "from-gray-900/80 to-gray-900/60"
  },
  buttonOutlineColor: "gray-700/60",
  cardColor: "bg-gray-800/40",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/johndoe",
      icon: "https://example.com/github-icon.png"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/johndoe",
      icon: "https://example.com/twitter-icon.png"
    }
  ],
  customLinks: [
    {
      label: "Blog",
      url: "https://johndoe.com/blog",
      icon: "https://example.com/blog-icon.png"
    }
  ],
  lastfmUsername: "johndoe"
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
