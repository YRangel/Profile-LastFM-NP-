'use client';

import { useEffect, useState } from "react";
import { getUserInfo } from "@/utils/lastfm";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { profileConfig } from "@/config/profile";

interface ProfilePageProps {
  username: string;
}

interface LastFmUser {
  name: string;
  playcount: string;
  image: Array<{ "#text": string; size: string }>;
}

/**
 * ProfilePage component - Displays user information
 * 
 * This component fetches and displays the user's basic information from Last.fm.
 */
export default function ProfilePage({ username = profileConfig.lastfmUsername }: ProfilePageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<LastFmUser | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        const user = await getUserInfo(username);
        setUserData(user);
      } catch (error) {
        console.error("Failed to load Last.fm data:", error);
        setError("Failed to load Last.fm data");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [username]);

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <Card className={`${profileConfig.cardColor} backdrop-blur-sm`}>
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-24 w-24 ring-4 ring-gray-700 shadow-xl">
                <AvatarImage src={userData?.image[3]["#text"] || profileConfig.avatar} alt={userData?.name} />
                <AvatarFallback>
                  <User className="h-12 w-12" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{isLoading ? "Loading..." : userData?.name}</h1>
                {!isLoading && (
                  <p className="text-sm text-gray-400">
                    {parseInt(userData?.playcount || "0").toLocaleString()} total scrobbles
                  </p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
