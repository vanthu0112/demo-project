"use client";
import Footer from "@/components/Foodter";
import Navigation from "@/components/Navigation";
import Contact from "@/features/contact/contact";
import Features from "@/features/features/features";
import Hero from "@/features/hero/hero";
import Pricing from "@/features/pricing/pricing";
import Testimonials from "@/features/testimonials/testimonials";
import { getMe } from "@/services/user/userServices";
import { useUserStore } from "@/store/useUserStore";
import { useLoadingStore } from "@/store/useLoadingStore";
import { useEffect } from "react";

export default function Home() {
  const { setLoading } = useLoadingStore.getState();
  const { setUser } = useUserStore();

  // Fetch user data and set it in the user store
  async function fetchUser() {
    try {
      setLoading(true);
      const users = await getMe();
      if (users) {
        setUser(users);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
