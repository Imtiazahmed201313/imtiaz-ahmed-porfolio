
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  color: string;
  image: string;
  developmentTime: string;
  budget: string;
  video?: string;
  youtubeVideo?: string;
}

export const projects: Project[] = [
  {
    title: "U Turn",
    subtitle: "Car Selling & Bidding App",
    description: "U Turn is a platform for selling and auctioning cars. Includes filters, chat, favorites, location-based search, and more.",
    features: ["Car Bidding System", "Location Search", "Real-time Chat", "Advanced Filters"],
    color: "from-red-500 to-orange-500",
    image: "https://i.postimg.cc/0yjN0hFt/Navy-Blue-Modern-Business-Facebook-Cover-5.png",
    developmentTime: "2-3 weeks",
    budget: "$2,000 - $3,000",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  },
  {
    title: "Afro Tango",
    subtitle: "Business Community App",
    description: "A social-network-style app for listing businesses, creating events, joining communities, and real-time messaging.",
    features: ["Business Listings", "Event Management", "Community Features", "Real-time Messaging"],
    color: "from-green-500 to-teal-500",
    image: "https://i.postimg.cc/ZKc9c8Rq/Navy-Blue-Modern-Business-Facebook-Cover-6.png",
    developmentTime: "3-4 weeks",
    budget: "$3,500 - $4,000",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  },
  {
    title: "Meetap",
    subtitle: "Biker Meetup App",
    description: "For motorcycle enthusiasts to create, manage, and join biking tours and squads. Includes search, filters, chatting, and notification features.",
    features: ["Tour Management", "Squad Creation", "Live Chat", "Push Notifications"],
    color: "from-blue-500 to-purple-500",
    image: "https://i.postimg.cc/FHPtW0tT/Screenshot-2025-06-19-164144.png",
    developmentTime: "4-5 weeks",
    budget: "For my startup",
    youtubeVideo: "https://www.youtube.com/embed/Pa39sE3Ps2M"
  },
  {
    title: "Fiind App",
    subtitle: "A Social Network for Digital Service Providers & Influencers",
    description: "Fiind App is a feature-rich social networking platform tailored for digital service providers and influencers. Designed and built using FlutterFlow, this app empowers creators to share, promote, and monetize their digital services through a powerful, intuitive mobile experience.",
    features: ["Home Feed with Social Features", "Portfolio & Professional Profiles", "Digital Goods & Storefront", "Advanced Chat System", "Push Notifications", "Advanced Search", "Followers System", "Admin Features"],
    color: "from-indigo-500 to-cyan-500",
    image: "https://i.postimg.cc/cHby8zBp/Navy-Blue-Modern-Business-Facebook-Cover-10.png",
    developmentTime: "4-5 weeks",
    budget: "$4,000 - $5,000",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  },
  {
    title: "Stations World",
    subtitle: "Join a wide range of Groups and Events",
    description: "Stations World is a dynamic social app that lets users create and join groups, host events, and chat live with others. With real-time notifications, subscription options, and powerful tools to manage group and event members, Stations World makes building strong social connections easy and organized.",
    features: ["Create and Join Groups", "Host Events", "Live Chat", "Subscription", "Push Notifications", "Social Integrations"],
    color: "from-purple-500 to-pink-500",
    image: "https://i.postimg.cc/R0XzFTvj/Navy-Blue-Modern-Business-Facebook-Cover-8.png",
    developmentTime: "2-3 weeks",
    budget: "$3,000 - $4,000",
    video: "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
  }
];
