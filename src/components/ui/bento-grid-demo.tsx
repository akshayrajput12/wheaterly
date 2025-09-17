import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: FileTextIcon,
    name: "Beautiful Animations",
    description: "Smooth transitions and micro-interactions powered by Framer Motion for an engaging user experience.",
    href: "/",
    cta: "Learn more",
    background: <Image src="/placeholder.svg" alt="Beautiful Animations" width={200} height={200} className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "Live Demo Search",
    description: "Try the weather search functionality directly on the website with our interactive demo.",
    href: "/",
    cta: "Learn more",
    background: <Image src="/placeholder.svg" alt="Live Demo Search" width={200} height={200} className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Device Mockups",
    description: "Interactive phone mockup showcasing the app in a realistic environment.",
    href: "/",
    cta: "Learn more",
    background: <Image src="/placeholder.svg" alt="Device Mockups" width={200} height={200} className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Modern Design",
    description: "Glassmorphism UI with gradient backgrounds for a contemporary look and feel.",
    href: "/",
    cta: "Learn more",
    background: <Image src="/placeholder.svg" alt="Modern Design" width={200} height={200} className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Fully Responsive",
    description: "Works seamlessly on all device sizes from mobile phones to desktop computers.",
    href: "/",
    cta: "Learn more",
    background: <Image src="/placeholder.svg" alt="Fully Responsive" width={200} height={200} className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
}

export { BentoDemo };