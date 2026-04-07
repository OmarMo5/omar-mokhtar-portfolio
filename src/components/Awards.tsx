import React, { useState } from 'react'
import { motion } from "framer-motion";
import { Award, Trophy } from 'lucide-react';

import img1 from "../assets/b1.jpeg";
import img2 from "../assets/award.jpg";

// Default competition/cup image
const defaultCupImage = "https://unsplash.com/photos/w6BkCq92wqk/download?force=true&w=640";

// Animation variants (from TechStack)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      delay: i * 0.1,
    },
  }),
  hover: {
    scale: 1.02,
    y: -8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const Awards = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const achievements = [
    {
      icon: Trophy,
      title: "We Hear What They Say: Lip Reading in Arabic for the Voice Impaired (LRAVI)",
      organization: "NIGSD Governance & AI Research Competition",
      year: "2024",
      description: `
        • Created the first Arabic 100-word custom dataset  
        • Pretrained models on the BBC dataset (~450k videos)  
        • Achieved 28.1% CER and 39.8% WER on unseen speakers  
        • Awarded 1st Place among 80+ research submissions across Egypt
      `,
      type: "award",
      image: img1
    },
    {
      icon: Award,
      title: "3rd Place Medal",
      organization: "Ministry of Youth and Sports & UNESCO, National Youth Hackathon",
      year: "2023",
      description: `
        • LRAVI project won 3rd place among 150+ participating teams across Egypt
      `,
      type: "competition",
      image: img2 
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award': return 'from-yellow-500 to-orange-500';
      case 'competition': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'award': return 'Award';
      case 'competition': return 'Competition';
      default: return 'Achievement';
    }
  };

  return (
    <section id="achievements" className="section-container py-16 md:py-24 bg-gradient-hero relative overflow-hidden">
      {/* Floating particles effect (from TechStack) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 bg-accent/5 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              left: `${i * 30}%`,
              top: `${i * 20}%`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        {/* Section header with enhanced animation (from TechStack) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
          >
            <span className="inline-block px-3 py-1 text-sm font-medium text-accent bg-accent/10 rounded-full mb-4">
              Recognition
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-3xl md:text-5xl font-bold mb-4 text-gradient"
          >
            Awards & Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.6, 0.05, 0.01, 0.9] }}
            className="text-foreground/60 max-w-2xl mx-auto"
          >
            Recognition and honors received for outstanding work and contributions
          </motion.p>
        </motion.div>
        
        {/* Achievements grid with staggered animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setActiveCard(index)}
              onHoverEnd={() => setActiveCard(null)}
              className="relative group"
            >
              {/* Glass card with enhanced styling (from TechStack) */}
              <div className="glass-card rounded-2xl p-6 shadow-lg border border-white/10 backdrop-blur-sm bg-white/5 dark:bg-black/20 transition-all duration-300 hover:shadow-xl hover:border-accent/30 flex flex-col h-full">
                
                {/* Image with hover effect */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="overflow-hidden rounded-lg mb-4"
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>

                <div className="flex items-start space-x-4">
                  {/* Icon with pulse animation */}
                  <motion.div
                    animate={{
                      scale: activeCard === index ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: activeCard === index ? Infinity : 0,
                      repeatDelay: 0.5,
                    }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getTypeColor(achievement.type)} p-3 flex-shrink-0 shadow-lg`}
                  >
                    <achievement.icon className="w-full h-full text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <motion.div 
                      variants={itemVariants}
                      className="flex items-center justify-between mb-2"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className={`px-2 py-1 rounded-lg text-xs font-medium bg-gradient-to-r ${getTypeColor(achievement.type)} text-white shadow-md`}
                      >
                        {getTypeBadge(achievement.type)}
                      </motion.span>
                      <span className="text-primary font-semibold text-sm bg-primary/10 px-2 py-1 rounded-lg">
                        {achievement.year}
                      </span>
                    </motion.div>
                    
                    <motion.h3 
                      variants={itemVariants}
                      className="font-semibold text-foreground mb-2 line-clamp-2"
                    >
                      {achievement.title}
                    </motion.h3>
                    
                    <motion.p 
                      variants={itemVariants}
                      className="text-primary text-sm font-medium mb-2"
                    >
                      {achievement.organization}
                    </motion.p>
                    
                    <motion.p 
                      variants={itemVariants}
                      className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line"
                    >
                      {achievement.description}
                    </motion.p>
                  </div>
                </div>

                {/* Background gradient effect on hover (from TechStack) */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ zIndex: -1 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;