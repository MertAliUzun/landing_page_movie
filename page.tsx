"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Film, Heart, List, PlayCircle, Plus, Smartphone, Star, Instagram, Youtube } from "lucide-react"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full border-b border-white/10 bg-black/50 backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Film className="h-6 w-6" />
            <span>Zen Movies</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm hover:text-purple-400 transition-colors">
              Privacy
            </Link>
            <Link href="/login" className="text-sm hover:text-purple-400 transition-colors">
              Login
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pt-32 pb-20 px-4"
      >
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Your Personal Movie Collection,
            <br />
            Organized Beautifully
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Manage your movie collection, create wishlists, and discover new films with an elegant and intuitive
            interface.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Download App
              <Smartphone className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-400 hover:bg-purple-600/10">
              Learn More
              <PlayCircle className="ml-2 h-5 w-5" />
            </Button>
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
        className="py-20 bg-gradient-to-b from-black to-purple-950"
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
              description="Create custom collections and categories to organize your movies exactly how you want."
              index={0}
            />
            <FeatureCard
              icon={<Heart />}
              title="Wishlists"
              description="Keep track of movies you want to watch or add to your collection."
              index={1}
            />
            <FeatureCard
              icon={<Star />}
              title="Rate & Review"
              description="Rate your movies and write personal reviews to remember what you loved."
              index={2}
            />
            <FeatureCard
              icon={<Plus />}
              title="Easy Adding"
              description="Quickly add movies by scanning barcodes or searching our extensive database."
              index={3}
            />
            <FeatureCard
              icon={<Smartphone />}
              title="Cross-Platform"
              description="Access your collection from any device with our mobile and web apps."
              index={4}
            />
            <FeatureCard
              icon={<Film />}
              title="Movie Details"
              description="Get comprehensive information about your movies, including cast, crew, and more."
              index={5}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* App Preview Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-purple-950"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beautiful on Every Device</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Whether you're on your phone, tablet, or computer, Zen Movies provides a seamless experience for managing
              your collection.
            </p>
          </motion.div>
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden border border-purple-400/20">
              <img
                src="/placeholder.svg?height=720&width=1280"
                alt="App Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Organizing Your Collection Today</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Join thousands of movie enthusiasts who use Zen Movies to manage their collections. Get started for free.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto"
          >
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-white/5 border-purple-600/50" />
              <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                Get Started
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Social Media Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
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
                    <p className="text-sm text-gray-200">@zenmovies</p>
                  </div>
                </div>
                <p className="text-sm mb-4">
                  Daily aesthetic shots of movie collections and behind-the-scenes peeks 📸
                </p>
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
                <Button className="w-full bg-white/10 hover:bg-white/20 transition-colors">Follow on Instagram</Button>
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
                    <p className="text-sm text-gray-200">@zenmovies</p>
                  </div>
                </div>
                <p className="text-sm mb-4">Quick tips, collection showcases, and trending movie discussions 🎬</p>
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
                <Button className="w-full bg-white/10 hover:bg-white/20 transition-colors">Follow on TikTok</Button>
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
                    <p className="text-sm text-gray-200">Zen Movies</p>
                  </div>
                </div>
                <p className="text-sm mb-4">In-depth reviews, collection tours, and organization guides 🎥</p>
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
                <Button className="w-full bg-white/10 hover:bg-white/20 transition-colors">Subscribe on YouTube</Button>
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
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
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

