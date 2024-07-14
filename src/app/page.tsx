"use client";
import HeroSection from './../components/HeroSection';
import FeaturedCourses from "@/components/FeaturedCourses";
import TestimonialCard from '@/components/TestimonialCard';
import UpcomingWebainers from '@/components/UpcomingWebainers';
import WhyChooseUs from '@/components/WhyChooseUs';
import Instructors from '@/components/Instructors';
import Footer from '@/components/Footer';




export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCard />
      <UpcomingWebainers />
      <Instructors />
      <Footer />

    </main>
  );
}
