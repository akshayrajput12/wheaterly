"use client";

import Hero from "@/components/Hero";
import DemoSearch from "@/components/DemoSearch";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Home as HomeIcon, Cloud, Calendar, HelpCircle, MessageCircle, Users, Download } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#home', icon: HomeIcon },
    { name: 'Features', url: '#features', icon: Cloud },
    { name: 'Demo', url: '#demo', icon: Calendar },
    { name: 'How It Works', url: '#how-it-works', icon: HelpCircle },
    { name: 'Testimonials', url: '#testimonials', icon: MessageCircle },
    { name: 'FAQ', url: '#faq', icon: Users },
    { name: 'Download', url: '#download', icon: Download }
  ]

  const features = [
    {
      Icon: FileTextIcon,
      name: "Beautiful Animations",
      description: "Smooth transitions and micro-interactions powered by Framer Motion for an engaging user experience.",
      href: "/",
      cta: "Learn more",
      background: <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Live Demo Search",
      description: "Try the weather search functionality directly on the website with our interactive demo.",
      href: "/",
      cta: "Learn more",
      background: <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Device Mockups",
      description: "Interactive phone mockup showcasing the app in a realistic environment.",
      href: "/",
      cta: "Learn more",
      background: <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Modern Design",
      description: "Glassmorphism UI with gradient backgrounds for a contemporary look and feel.",
      href: "/",
      cta: "Learn more",
      background: <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Fully Responsive",
      description: "Works seamlessly on all device sizes from mobile phones to desktop computers.",
      href: "/",
      cta: "Learn more",
      background: <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-50 to-transparent" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar items={navItems} />
      
      <div id="home">
        <Hero />
      </div>
      
      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Why Choose Weatherly
          </motion.h2>
          
          <BentoGrid className="lg:grid-rows-3">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature} />
            ))}
          </BentoGrid>
        </div>
      </section>
      
      {/* Demo Search Section */}
      <section id="demo" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center text-black mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.2, 0.9, 0.2, 1] }}
          >
            Try It Live
          </motion.h2>
          
          <DemoSearch />
        </div>
      </section>
      
      <div id="how-it-works">
        <HowItWorks />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="faq">
        <FAQ />
      </div>
      
      <div id="download">
        <Footer />
      </div>
    </div>
  );
}