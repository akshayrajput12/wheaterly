import { Testimonials } from "@/components/ui/testimonials"

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Weatherly has completely transformed how I plan my outdoor activities. The hyperlocal forecasts are incredibly accurate!',
    name: 'Alex Morgan',
    username: '@alexmorgan',
    social: 'https://twitter.com/alexmorgan'
  },
  {
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The 5-day forecast feature is a game-changer for my daily commute. I never get caught in the rain anymore!',
    name: 'Sarah Johnson',
    username: '@sarahjohnson',
    social: 'https://twitter.com/sarahjohnson'
  },
  {
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'As a photographer, Weatherly helps me plan the perfect shots. The sunrise and sunset times are always spot on.',
    name: 'Michael Chen',
    username: '@michaelchen',
    social: 'https://twitter.com/michaelchen'
  },
  {
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The smart alerts have saved me from several severe weather situations. This app is a must-have for travelers.',
    name: 'Emma Rodriguez',
    username: '@emmarodriguez',
    social: 'https://twitter.com/emmarodriguez'
  },
  {
    image: 'https://images.unsplash.com/photo-1507120878965-54b2d3939100?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'I love the beautiful interface and smooth animations. Weatherly makes checking the weather a delightful experience.',
    name: 'David Wilson',
    username: '@davidwilson',
    social: 'https://twitter.com/davidwilson'
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The hourly breakdown feature is incredibly detailed. I can plan my day with precision thanks to Weatherly.',
    name: 'Priya Sharma',
    username: '@priyasharma',
    social: 'https://twitter.com/priyasharma'
  },
  {
    image: 'https://images.unsplash.com/photo-1506974210756-8e0c44848f8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Weatherly is the only weather app I trust for my hiking trips. The trail-specific forecasts are unmatched.',
    name: 'James Peterson',
    username: '@jamespeterson',
    social: 'https://twitter.com/jamespeterson'
  },
  {
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'The radar feature helps me track storms in real-time. It\'s saved me and my family from dangerous weather multiple times.',
    name: 'Lisa Thompson',
    username: '@lisathompson',
    social: 'https://twitter.com/lisathompson'
  }
];

export function TestimonialsDemo() {
  return (
    <div className="container py-10">
      <Testimonials testimonials={testimonials} />
    </div>
  )
}