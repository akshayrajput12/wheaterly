"use client"

import { Home as HomeIcon, Cloud, Calendar, Info } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Weather', url: '#', icon: Cloud },
    { name: 'Forecast', url: '#', icon: Calendar },
    { name: 'About', url: '#', icon: Info }
  ]

  return <NavBar items={navItems} />
}