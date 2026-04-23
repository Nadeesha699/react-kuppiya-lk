"use client";
import { ArticlesSection } from "./components/article";
import { AboutSection } from "./components/about";
import { FooterSection } from "./components/footer";
import { HomeSection } from "./components/home";

export default function Home() {
  return (
    <div className="text-white font-mono">
      <HomeSection />
      <AboutSection />
      <ArticlesSection />
      <FooterSection />
    </div>
  );
}
