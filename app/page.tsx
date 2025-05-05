"use client"


import React, { useRef } from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Heart, List, PlayCircle, Plus, Minus, Smartphone, Star, Instagram, Youtube, InfoIcon } from "lucide-react"
import { motion } from "framer-motion"
import animationData from '../public/zen_movie_app.json'
import dynamic from 'next/dynamic';
import VideoCarousel from "./components/VideoCarousel"
import { videos } from "./data/videos"

// Lottie bileşenini SSR'yi devre dışı bırakacak şekilde dinamik olarak yükleyin
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });


export default function LandingPage() {
  const appPreviewRef = useRef<HTMLDivElement>(null);

  const scrollToAppPreview = () => {
    appPreviewRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between lg:px-48">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <img src="/logo.png" className="w-auto h-16 rounded-full"></img>
          <span className="hidden sm:block"> Zen: Movie Collection</span>
          </Link>
          <div className="flex items-center gap-4">
            <Button className="bg-purple-600 hover:bg-purple-700">
              <a href="https://play.google.com/store/apps/details?id=com.mau.zenmoviecollection" target="_blank" className="text-white">
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-24 pb-10 px-4 md:px-12 lg:px-20"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Sol taraf - İçerik */}
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Zen: Movie Collection
              </h1>
              
              <p className="text-xl text-gray-400">
              Manage your movie collection effortlessly, discover new films, and build your watchlist. Organize your favorites, explore, and expand your collection with this app!
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 p-1 rounded-full mt-1">
                    <Minus className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300">Get movie recommendations from AI</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 p-1 rounded-full mt-1">
                    <Minus className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300">Discover movies with latest, upcoming and popular sections</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 p-1 rounded-full mt-1">
                    <Minus className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300">Guide for where to watch the movie (Stream, Buy, Rent)</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 p-1 rounded-full mt-1">
                    <Minus className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300">Find movies in same series and similar movies easily</p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-purple-600 p-1 rounded-full mt-1">
                    <Minus className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-300">Movies can be exported to and imported from Excel files</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto">
                  <a href="https://play.google.com/store/apps/details?id=com.mau.zenmoviecollection" target="_blank" className="text-white">
                    Get Started
                  </a>
                  <Smartphone className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 hover:text-white text-purple-400 hover:bg-purple-700 w-full sm:w-auto" onClick={scrollToAppPreview}>
                  Learn More
                  <PlayCircle className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Sağ taraf - Görsel */}
            <div className="flex-1 flex justify-center md:justify-end mt-16 md:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-auto h-auto max-w-[280px] md:max-w-[480px]"
              >
                <img 
                  src="/zen_movie_app.png" 
                  alt="Zen Movie App" 
                  className="w-full h-auto rounded-xl object-cover shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 },
        }}
        className=" bg-gradient-to-b from-black to-purple-950"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Everything you need to manage your movies
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <FeatureCard
              icon={<List />}
              title="Organize Collections"
              description="Save your movies to build your collection and customize your growing collection."
              index={0}
            />
            <FeatureCard
              icon={<Heart />}
              title="Wishlists"
              description="Keep track of movies you want to watch by adding them to Watch List and rating their hype scores."
              index={1}
            />
            <FeatureCard
              icon={<Star />}
              title="Score & Notes"
              description="Rate your movies and write personal reviews to remember what you loved and compare with other movies."
              index={2}
            />
            <FeatureCard
              icon={<Plus />}
              title="Easy Adding"
              description="Quickly add movies by searching with movie name or explore to find movies through the app."
              index={3}
            />
            <FeatureCard
              icon={<Smartphone />}
              title="More than Movies"
              description="You can also check out director, actor, writer, genre and company pages to find movies related to them."
              index={4}
            />
            <FeatureCard
              icon={<Film />}
              title="Back-up Restore"
              description="You can create a Excel file from your collection and restore your collection from that Excel file."
              index={5}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* App Preview Section */}
      <motion.section
        ref={appPreviewRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-purple-950 overflow-hidden"
      >
        <div className="container mx-auto px-4 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className=" gap-8 items-center"
            style={{ width: '50%' }}
          >
          </motion.div>
          </div>
            
            
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            {/* Masaüstü versiyonu */}
            <div className="hidden sm:block px-20">
              <div className="overflow-hidden border border-purple-400/20 rounded-xl">
                <Lottie 
                  animationData={animationData} 
                  loop={true} 
                  autoplay={true} 
                  className="w-full"
                  style={{ height: '600px' }}
                />
              </div>
            </div>
            
            {/* Mobil versiyonu */}
            <div className="sm:hidden overflow-hidden pt-96">
                <Lottie 
                  animationData={animationData} 
                  loop={true} 
                  autoplay={true} 
                  style={{ 
                    height: '800px', 
                    width: '700px', 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    overflow: 'hidden'
                  }}
                />
            </div>
          </motion.div>
        </div>
      </motion.section>
      <div className="py-10  bg-purple-950"></div>

      {/* Video Gallery Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gradient-to-b from-purple-950 to-purple-950/80"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Check our Latest Videos</h2>
          </div>

          <VideoCarousel videos={videos} />
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 1 },
          visible: { opacity: 40, y: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-purple-950/50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Follow us on social media for movie recommendations, collection inspiration, and updates.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Instagram Card */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-pink-600 to-purple-600"
            >
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Instagram className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold">Instagram</h3>
                    <p className="text-sm text-gray-200">@zenmoviecollection</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                Follow Zen: Movie Collection on Instagram for daily videos 🎬
                </p>
                {/*
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <p className="font-bold">50K+</p>
                    <p className="text-xs text-gray-200">Followers</p>
                  </div>
                  <div>
                    <p className="font-bold">1K+</p>
                    <p className="text-xs text-gray-200">Posts</p>
                  </div>
                </div>
                */}
                <Button className="w-full bg-white/10 hover:bg-white/20 transition-colors mt-5">
                <a href="https://www.instagram.com/zenmoviecollection/" target="_blank" className="text-white">
                Follow on Instagram
              </a>
                </Button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-colors" />
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Instagram Feed Preview"
                className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* TikTok Card */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-black to-gray-800"
            >
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                  <div>
                    <h3 className="font-bold">TikTok</h3>
                    <p className="text-sm text-gray-200">@zenmoviecollection</p>
                  </div>
                </div>
                <p className="text-sm mb-4">Follow Zen: Movie Collectio on Tiktok for daily videos 🎬</p>
                {/*
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <p className="font-bold">100K+</p>
                    <p className="text-xs text-gray-200">Followers</p>
                  </div>
                  <div>
                    <p className="font-bold">500+</p>
                    <p className="text-xs text-gray-200">Videos</p>
                  </div>
                </div>
                */}
                <Button className="w-full bg-white/10 hover:bg-white/20 transition-colors mt-5">
                <a href="https://www.tiktok.com/@zenmoviecollection" target="_blank" className="text-white">
                Follow on TikTok
              </a>
                </Button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-colors" />
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="TikTok Feed Preview"
                className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            {/* YouTube Card */}
            <motion.div
              variants={item}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-red-600 to-red-800"
            >
              <div className="p-6 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <Youtube className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold">YouTube</h3>
                    <p className="text-sm text-gray-200">@ZenMovieCollection</p>
                  </div>
                </div>
                <p className="text-sm mb-4">Follow Zen: Movie Collectio on Youtube for daily videos 🎬</p>
                {/*
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <p className="font-bold">75K+</p>
                    <p className="text-xs text-gray-200">Subscribers</p>
                  </div>
                  <div>
                    <p className="font-bold">200+</p>
                    <p className="text-xs text-gray-200">Videos</p>
                  </div>
                </div>
                */}
                <Button className="w-full bg-white/10 hover:bg-white/20 transition-colors mt-5">
                <a href="https://www.youtube.com/@ZenMovieCollection" target="_blank" className="text-white">
                Subscribe on YouTube
              </a>
                </Button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/70 transition-colors" />
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="YouTube Channel Preview"
                className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="border-t py-5 border-white/10 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zen Movies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

function FeatureCard({
  icon,
  title,
  description,
  index,
}: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      variants={item}
      className="p-6 rounded-xl bg-purple-950/50 border border-purple-400/20 hover:border-purple-400/40 transition-colors"
    >
      <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  )
}

