"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden section-padding h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/images/ikups.png")' }}
      />
      <div className="absolute inset-0 bg-black/40" />{" "}
      {/* Overlay with 40% opacity */}
      <div className="container relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-8 max-w-2xl px-4">
          {/* Animated Heading */}
          <motion.h1
            className="text-5xl font-bold text-white tracking-tighter sm:text-6xl md:text-7xl italic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            &quot;Sirih Pulang ke Gagang&quot;
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-white md:text-xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          >
            Menghubungkan generasi alumni SBPI Kubang Pasu melalui kenangan
            bersama, jaringan profesional, dan kecemerlangan yang berterusan.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
