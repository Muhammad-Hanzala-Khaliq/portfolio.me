// app/dashboard/page.tsx  (server component by default)

import UserLayout from "@/components/UserLayout";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
export const metadata = {
  title: "Dashboard",
  description:
    "Manage your blogs, projects, and portfolio content from the admin dashboard with full control.",
  alternates: { canonical: "/dashboard" },
};
async function getGithubStats() {
  const res = await fetch("https://api.github.com/users/Muhammad-Hanzala-Khaliq", {
    // optional: cache control
    next: { revalidate: 3111600 }, 
  });

  if (!res.ok) {
    throw new Error("Failed to fetch GitHub stats");
  }

  const data = await res.json();

  return {
    Github_Repository: data.public_repos,
    followers: data.followers,
    following: data.following,
    gists: data.public_gists,
  };
}

export default async function Dashboard() {
  const githubStats = await getGithubStats();

  const topTracks = [
    { id: 1, title: "Zulfa", artist: "Jaz Dhami, Dr Zeus", url: "https://open.spotify.com/track/2AVZA7RsKZkrfQsK9kdHuK" },
    { id: 2, title: "So High (feat. Ghost Loft)", artist: "Wiz Khalifa, Ghost Loft", url: "https://open.spotify.com/track/0odHj0qIf86vHBsXB30IkZ" },
    { id: 3, title: "Saawan Mein Lag Gayee Aag", artist: "Mika Singh", url: "https://open.spotify.com/track/3LZYmdTuRWMgajd91up13j" },
    { id: 4, title: "One Love", artist: "Shubh", url: "https://open.spotify.com/track/5ZLkihi6DVsHwDL3B8ym1t" },
    { id: 5, title: "вот как то так (Slowed)", artist: "asanrap", url: "https://open.spotify.com/track/3stUBkSjDUbGH9yUepPqab" },
    { id: 6, title: "Free Bird", artist: "Lynyrd Skynyrd", url: "https://open.spotify.com/track/5EWPGh7jbTNO2wakv8LjUI" },
    { id: 7, title: "Gandagana", artist: "Basiani Ensemble", url: "https://open.spotify.com/track/7eks8WR2fxPgn82kCdTLXz" },
    { id: 8, title: "Sajni", artist: "Jal", url: "https://open.spotify.com/track/3wLX0HwfAZlhT9ss18LGLY" },
    { id: 9, title: "Fell For You", artist: "Shubh", url: "https://open.spotify.com/track/5fBghXeYCGIEVuExKytoJ9" },
    { id: 10, title: "Nachley", artist: "Daler Mehndi, Kunal Ganjawala", url: "https://open.spotify.com/track/18VzExRhgxRfk5Bskh0H7K" },
  ];

  return (
    <UserLayout>
      <h1 className="md:text-5xl text-[30px] font-bold mb-4 text-black">Dashboard</h1>
      <p className="text-gray-600 mb-6">
        This dashboard is created with Next.js server components fetching data
        directly from GitHub and Spotify 🚀
      </p>

      {/* GitHub Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 w-full mb- mt-6 pr-12">
        {Object.entries(githubStats).map(([key, value]) => (
          <div key={key} className="p-5 border rounded-xl shadow-md"  style={{ boxShadow: "4px 4px 2px rgba(0,0,0,0.8)" }}>
           
    
        <Link
          href="https://github.com/Muhammad-Hanzala-Khaliq"
          target="_blank"
          rel="noopener noreferrer"
          className=" flex items-center  gap-2"
        >
           <h3 className="text-md capitalize mb-3">    {key}</h3>
          <FaExternalLinkAlt className="text-sm text-gray-500 mb-2 hover:text-black cursor-pointer" />
        </Link>
            <p className="text-3xl font-bold">{value}</p>
          </div>
        ))}
      </div>

      {/* Top Tracks */}
      <h2 className="text-3xl font-bold mt-12 mb-4">Top Tracks</h2>
      <p className="text-gray-600 mb-6">
        Curious what I'm currently jamming to? Here's my top tracks on Spotify updated daily.
      </p>

      <div className="space-y-4 w-full">
        {topTracks.map((track) => (
          <div key={track.id} className="flex items-start border-b border-b-gray-200 pb-4 pt-4">
            <span className="text-gray-400 font-bold">{track.id}</span>
            <div className="ml-3">
              <Link href={track.url} target="_blank" className="text-heading font-medium hover:underline">
                {track.title}
              </Link>
              <p className="text-gray-500 text-sm">{track.artist}</p>
            </div>
          </div>
        ))}
      </div>
       </UserLayout>
  );
}
