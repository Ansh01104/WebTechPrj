import { downloadx, download, hoverVideo, idleVideo } from "../assets";

// Navigation Links
export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "company",
    title: "Company Inq.",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
];

// Features
export const features = [
  {
    id: "feature-1",
    title: "Rewards",
    content: "The best credit cards offer some tantalizing combinations of promotions and prizes.",
  },
  {
    id: "feature-2",
    title: "100% Secured",
    content: "We take proactive steps to make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    title: "Balance Transfer",
    content: "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

// Feedback - Image Cards
export const thefeed = [
  {
    id: "feedback-1",
    content: "Keyboard shortcuts. Work efficiently with instant access to common actions.",
    img: downloadx,
    type: "image", // 👈 optional if you want to separate card types
  },
];

// Feedback - Video Cards
export const thefeed2 = [
  {
    id: "feedback-2", // 🔥 Unique ID!
    content: "Keyboard shortcuts. Work efficiently with instant access to common actions.",
    title: "Work Smartly with Shortcuts",
    hoverVideoSrc: hoverVideo,
    idleVideoSrc: idleVideo,
    type: "video", // 👈 optional for easier component handling
  },
];

// Statistics
export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];
