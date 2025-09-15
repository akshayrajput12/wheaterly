"use client";

import { Home as HomeIcon, Cloud, Calendar, Info } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export default function DemoPage() {
  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Weather', url: '#', icon: Cloud },
    { name: 'Forecast', url: '#', icon: Calendar },
    { name: 'About', url: '#', icon: Info }
  ]

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Tubelight Navbar Demo</h1>
        <p className="mb-8">This page demonstrates the Tubelight Navbar component integrated into the Weatherly app.</p>
        
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Navigation Instructions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>The navbar is fixed at the bottom on mobile and top on desktop</li>
            <li>Click on any navigation item to see the active state animation</li>
            <li>On mobile, icons are displayed; on desktop, text labels are shown</li>
            <li>The navbar width changes on scroll and has smooth animations</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Component Details</h2>
          <p>This navbar component features:</p>
          <ul className="list-disc pl-6 space-y-2 mt-2">
            <li>Smooth animations using Framer Motion</li>
            <li>Responsive design (bottom on mobile, top on desktop)</li>
            <li>Active state indicator with animated underline</li>
            <li>Support for both icon and text labels</li>
            <li>Backglass effect with backdrop blur</li>
            <li>Dynamic width that changes on scroll</li>
            <li>Smooth scrolling to sections</li>
          </ul>
        </div>
      </div>
      
      <NavBar items={navItems} />
    </div>
  );
}