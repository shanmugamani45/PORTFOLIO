'use client'

import { motion } from 'framer-motion';
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  const handleEmailClick = () => {
    const subject = "Let's Collaborate";
    const body = "Hi Shanmuga Mani,\n\nI saw your interactive portfolio and would love to connect with you regarding...";
    const mailtoLink = `mailto:shanmugamani.al23@krct.ac.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <Card className="w-full h-full bg-black relative overflow-hidden rounded-none border-none">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full flex-col md:flex-row">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center items-center text-center max-w-3xl mx-auto w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
          >
            Get in Touch
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-neutral-400 text-base md:text-xl max-w-xl leading-relaxed"
          >
            Let's create something extraordinary together. Whether it's a futuristic web app, a cinematic 3D interface, or a robust dashboard, I'm ready for the challenge.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <button
              onClick={handleEmailClick}
              onMouseEnter={() => window.parent.postMessage({ type: 'iframe_mouseenter_btn' }, '*')}
              onMouseLeave={() => window.parent.postMessage({ type: 'iframe_mouseleave_btn' }, '*')}
              className="px-10 py-4 rounded-full border border-neutral-800 bg-neutral-950 text-white font-semibold text-sm tracking-widest uppercase hover:bg-neutral-900 hover:border-neutral-700 active:scale-[0.98] transition duration-200 cursor-pointer shadow-md"
            >
              Contact
            </button>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative w-full h-full min-h-[40vh] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
