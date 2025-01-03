import { ProfileConfig } from "@/types/profile"

export const profileConfig: ProfileConfig = {
  nameAndBio: `
    <script src="https://cdn.tailwindcss.com"></script>
    <body class="bg-gray-100 text-gray-800 font-sans flex flex-col items-center justify-center min-h-screen p-4">

  <h1 id="title" class="text-4xl font-bold text-purple-500">Jovial</h1>
  <p class="text-lg mt-2">"Coder" by hobby</p>
  <p class="text-sm text-gray-500/60 line-through">or just jovial</p>
  <p class="mt-2">I love gaming and messing with some codes sometimes</p>
  <p class=" mt-4">
    <a href="https://www.last.fm/user/YRangel1" class="text-blue-500 underline hover:text-blue-700">Last.fm profile</a>
  </p>`,
  lastfmUsername: "YRangel1",
  avatar: "https://i.ibb.co/G0dWcBZ/Yajin-root.png",
  wallpaper: {
    url: "https://i.ibb.co/ThXg1ch/aesthetic-background-498-x-331-gif-tohuepdkx6vj8tkw.gif",
    blur: {
      enabled: true,
      intensity: 10
    },
    overlay: "from-gray-900/80 to-gray-900/60"
  },
  cardColor: "bg-gray-800/40",
  buttonOutlineColor: "gray-700/60",
  links: [
    {
      label: "GitHub",
      url: "https://github.com/YRangel",
      icon: "https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/schizokiss",
      icon: "https://i.ibb.co/2yXsGWQ/Twitter-X-Rounded-Icon.png"
    },
    {
      label: "Last.fm",
      url: "https://www.last.fm/user/YRangel1",
      icon: "https://cdn-icons-png.flaticon.com/512/3291/3291646.png"
    }
  ],
  customLinks: [
    {
      label: "Discord <span class='text-blue-400'>&rarr;</span>",
      url: "https://discord.gg/RqqddT8K",
      icon: "https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
    }
  ],
}

