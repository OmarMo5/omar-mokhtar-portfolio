import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Github, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Image as ImageIcon, 
  Maximize2,
  ChevronDown,
  ChevronUp,
  Plus,
  Grid,
  ZoomIn,
  ZoomOut,
  Download,
  Share2,
  Play,
  Video,
  Pause,
  Volume2,
  VolumeX,
  FileText,
  Maximize
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

// Import all project images (keep your existing imports)
import caltacms  from "../assets/projects/calta_cms.png";
import calta from "../assets/projects/caltaGroup.avif";
import fr from "../assets/projects/frieghtex.avif";
import ge from "../assets/projects/golden.avif";
import lomatech from "../assets/projects/lomatech.avif";
import mega from "../assets/projects/megacart.jpeg";
import msg from "../assets/projects/msg.avif";
import shaker from "../assets/projects/shaker.png";
import tamer from "../assets/projects/tamer.jpeg";
import pop from "../assets/projects/pope.avif";
import pro from "../assets/projects/pro2.jpeg";
import rocker from "../assets/projects/rocker.png";
import rwd from "../assets/projects/RWD.png";
import scrate from "../assets/projects/scrate.png";
import shelfy from "../assets/projects/shelfy.png";
import short from "../assets/projects/shortListed.avif";
import smart from "../assets/projects/smart.avif";
import sant from "../assets/projects/st_micheal.jpeg";
import aolc from "../assets/projects/aolc.png";

// Import all screenshot images (keep your existing imports)
import caltaCms1 from "../assets/projects/screens/calta_cms1.png";
import caltaCms2 from "../assets/projects/screens/calta_cms2.png";
import caltaCms3 from "../assets/projects/screens/calta_cms3.png";
import calta1 from "../assets/projects/screens/calta_group1.png";
import calta2 from "../assets/projects/screens/calta_group2.png";
import calta3 from "../assets/projects/screens/calta_group3.png";
import fr1 from "../assets/projects/screens/fr1.png";
import fr2 from "../assets/projects/screens/fr2.png";
import fr3 from "../assets/projects/screens/fr3.png";
import ge1 from "../assets/projects/screens/ge1.png";
import ge2 from "../assets/projects/screens/ge2.png";
import ge3 from "../assets/projects/screens/ge3.png";
import lomatech1 from "../assets/projects/screens/lomatech1.png";
import lomatech2 from "../assets/projects/screens/lomatech2.png";
import lomatech3 from "../assets/projects/screens/lomatch3.png";
import lomatech4 from "../assets/projects/screens/lomatch4.png";
import mega1 from "../assets/projects/screens/mega1.png";
import mega2 from "../assets/projects/screens/mega2.png";
import mega3 from "../assets/projects/screens/mega3.png";
import msg1 from "../assets/projects/screens/msg1.png";
import msg2 from "../assets/projects/screens/msg2.png";
import msg3 from "../assets/projects/screens/msg3.png";
import shaker1 from "../assets/projects/screens/shaker1.png";
import tamer1 from "../assets/projects/screens/tamer.png";
import pop1 from "../assets/projects/screens/pop1.png";
import pop2 from "../assets/projects/screens/pop2.png";
import pop3 from "../assets/projects/screens/pop3.png";
import pro1 from "../assets/projects/screens/pro1.png";
import pro2 from "../assets/projects/screens/pro2.png";
import pro3 from "../assets/projects/screens/pro3.png";
import rocker1 from "../assets/projects/screens/rocker1.png";
import rocker2 from "../assets/projects/screens/rocker2.png";
import rocker3 from "../assets/projects/screens/rocker3.png";
import rwd1 from "../assets/projects/screens/rwd1.png";
import rwd2 from "../assets/projects/screens/rwd2.png";
import rwd3 from "../assets/projects/screens/rwd3.png";
import scrate1 from "../assets/projects/screens/scrate1.png";
import scrate2 from "../assets/projects/screens/scrate2.png";
import scrate3 from "../assets/projects/screens/scrate3.png";
import shelfy1 from "../assets/projects/screens/shelfy1.png";
import shelfy2 from "../assets/projects/screens/shelfy2.png";
import shelfy3 from "../assets/projects/screens/shelfy3.png";
import shelfy4 from "../assets/projects/screens/shelfy4.png";
import shelfy5 from "../assets/projects/screens/shelfy5.png";
import short1 from "../assets/projects/screens/short1.png";
import short2 from "../assets/projects/screens/short2.png";
import short3 from "../assets/projects/screens/short3.png";
import smart1 from "../assets/projects/screens/sf1.png";
import smart2 from "../assets/projects/screens/sf2.png";
import smart3 from "../assets/projects/screens/sf3.png";
import sant1 from "../assets/projects/screens/sant1.png";
import sant2 from "../assets/projects/screens/sant2.png";
import sant3 from "../assets/projects/screens/sant3.png";
import aolc1 from "../assets/projects/screens/aolc1.png";
import aolc2 from "../assets/projects/screens/aolc2.png";
import aolc3 from "../assets/projects/screens/aolc3.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  screenshots: string[];
  thumbnail?: string;
  videoDemo?: string;
  hasVideo?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MSG Hotels & Resorts",
    description: "MSG Hotels & Resorts is a hospitality website designed to showcase and manage a group of hotels and resorts. It enables users to explore properties, view amenities, and complete reservations while supporting hotel administration through clear content structure, booking flows, and a refined digital experience focused on comfort, trust, and service excellence.",
    tags: [ "React", "TypeScript", "Redux", "Tailwind CSS"],
    liveUrl: "https://msghotels-resorts.com",
    githubUrl: "https://github.com/mahmoudashraf0011/MSG_Hotels",
    thumbnail: msg,
    screenshots: [msg1, msg2, msg3],
    hasVideo: false
  },
  {
    id: 2,
    title: "Lomatech Dashboard",
    description: "LomaTech is a logistics management platform designed to simplify and optimize delivery operations by providing real-time shipment tracking, live driver monitoring, smart route optimization, and automated geofencing alerts. It enhances visibility, coordination, and decision-making across logistics teams, helping organizations operate more efficiently and respond quickly to dynamic delivery conditions.",
    tags: ["React", "TypeScript", "Redux", "Material-UI", "Recharts", "WebSocket","Google Maps API"],
    liveUrl: "https://lomatechcms.msol.work/",
    githubUrl: "https://github.com/mahmoudashraf0011/lomatech_dashboard",
    thumbnail: lomatech,
    screenshots: [lomatech1, lomatech2, lomatech3, lomatech4],
    videoDemo: "https://drive.google.com/file/d/1z-U0Pnit5De5cBl_WqS9eoZdHwuRtY6C/preview",
    hasVideo: true
  },
  {
    id: 3,
    title: "FrieghteX",
    description: "FreightX was designed to simplify maritime freight management by providing a clear and reliable digital experience for international shipping. The platform enables users to book cargo shipments, track their movement across countries, and access shipment details from origin to destination. The primary goal was to improve visibility, reduce uncertainty, and support informed decision-making throughout the shipping journey. By centralizing logistics data and shipment updates, FreightX helps users manage global freight operations efficiently while maintaining trust and transparency in complex supply chains.",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS","Framer Motion", "Google Maps API"],
    liveUrl: "https://freightexegdesigns.msol.work/",
    githubUrl: "https://github.com/mahmoudashraf0011/FreighteX",
    thumbnail: fr,
    screenshots: [fr1, fr2, fr3],
    hasVideo: false
  },
  {
    id: 4,
    title: "Shelfy",
    description: "Shelfy was designed to simplify how users manage and track physical products by combining image-based scanning with automated inventory management. The application allows users to photograph items, automatically record product details, and monitor expiration dates without manual input. The project focuses on reducing friction in inventory tracking, minimizing waste caused by forgotten products, and helping users stay organized. By transforming a traditionally tedious task into a quick, intuitive action, Shelfy supports better planning, smarter consumption, and more efficient product management through a clean and accessible mobile experience.",
    tags: ["React", "Redux", "TypeScript", "Tailwind CSS", "Recharts.js","Google Maps API"],
    liveUrl: "https://shelfymerchant.msol.dev/",
    githubUrl: "https://github.com/mahmoudashraf0011/shefly_merchant",
    thumbnail: shelfy,
    screenshots: [shelfy1, shelfy2, shelfy3, shelfy4, shelfy5],
    videoDemo: "https://drive.google.com/file/d/1d2nHanDRZ2-dGR9jbTPmm-7aI78JU9E1/preview",
    hasVideo: true
  },
  {
    id: 5,
    title: "Golden Eagle",
    description: "Golden Eagle London is a property rental platform designed to simplify the process of discovering shortlet and longlet units. It provides users with complete property details, including amenities, pricing, location, and availability, helping them compare options easily and make confident rental decisions while streamlining inquiries and overall browsing efficiency.",
    tags: ["HTML", "CSS", "JavaScript","Bootstrap"],
    liveUrl: "https://staging.golden-eagle.co.uk/shortge/public/home",
    githubUrl: "https://github.com/mahmoudashraf0011/golden-eagle",
    thumbnail: ge,
    screenshots: [ge1, ge2, ge3],
    hasVideo: false
  },
  {
    id: 6,
    title: "Aolc (Alpha Omega Events)",
    description: "Alpha Omega is a digital platform designed for Alpha Omega Church to organize and showcase church events. It helps members discover upcoming activities, view event details, schedules, and locations, and stay connected with church life through a simple, accessible, and well-structured digital experience that supports community engagement and participation easily.",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    liveUrl: "https://aolcportal.msol.dev/",
    githubUrl: "https://github.com/mahmoudashraf0011/AOLC",
    thumbnail: aolc,
    screenshots: [aolc1, aolc2, aolc3],
    videoDemo: "https://drive.google.com/file/d/1MagnGwbBo_ktx5cXaDjsunI1G513OhcN/preview",
    hasVideo: true
  },
  {
    id: 7,
    title: "Smart Finance",
    description: "Smart Finance is a digital financial management platform that helps businesses track expenses, manage bookkeeping, and gain real-time financial insights. It automates data capture, simplifies reporting, and improves decision-making through clear dashboards and secure workflows, enabling teams to control finances efficiently and confidently at every stage of their operations daily.",
    tags: ["React", "TypeScript","Recharts.js","Tailwind CSS"],
    liveUrl: "https://smart-finance.aiawareworld.me/",
    githubUrl: "https://github.com/mahmoudashraf0011/smart_finance",
    thumbnail: smart,
    screenshots: [smart1, smart2, smart3],
    videoDemo: "https://drive.google.com/file/d/1k1oek9tMp6YnwveGS2XlckX3Fqxf4OXj/preview",
    hasVideo: true
  },
  {
    id: 8,
    title: "Calta CMS",
    description: "A comprehensive content management system for Calta Group, enabling efficient management of digital content, user roles, and publishing workflows with an intuitive interface. Features drag-and-drop page builder and SEO optimization tools.",
    tags: ["React", "TypeScript", "Redux", "Tailwind CSS"],
    liveUrl: "https://caltacms.msol.work/",
    githubUrl: "https://github.com/mahmoudashraf0011/calta-content-craft",
    thumbnail: caltacms,
    screenshots: [caltaCms1, caltaCms2, caltaCms3],
    videoDemo: "https://drive.google.com/file/d/1e7zEIBonyXV1f5zTNG-2tvOzFGaTKI_8/preview",
    hasVideo: true
  
  },
  {
    id: 9,
    title: "Pope Shonda III",
    description: "The Pope Shenouda III – Heritage & Archive Platform is a digital archive designed to preserve and present his sermons, books, articles, audio recordings, and photos. It provides structured access to a vast collection of spiritual and historical materials, helping users explore his legacy through organized categories, filters, and intuitive navigation.",
    tags: ["React","Redux", "Material-UI","Css3", "Sass","Bootstrap"],
    liveUrl: "https://www.popeshenouda.com/",
    githubUrl: "https://github.com/mahmoudashraf0011/papashenoda",
    thumbnail: pop,
    screenshots: [pop1, pop2, pop3]
  },
  {
    id: 10,
    title: "Calta Group",
    description: "Calta Group is a luxury real estate development brand specializing in premium residential properties across South Florida. The platform highlights refined architecture, meticulous construction, and elevated living experiences, helping users explore high-end units with clarity and confidence. It delivers a premium digital journey that reflects the sophistication and quality of Calta Group’s work.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap","CSS3","Sass"],
    liveUrl: "https://www.thecaltagroup.com/",
    githubUrl: "https://github.com/mahmoudashraf0011/Calta",
    thumbnail: calta,
    screenshots: [calta1, calta2, calta3]
  },
  {
    id: 11,
    title: "Sant Micheal",
    description: "St. Michael's dashboard is for managing the delivery of homemade food products to those in need through families.",
    tags: ["React", "TypeScript", "Tailwind CSS","Redux"],
    liveUrl: "https://stmichealcms.msol.work/dashboard",
    githubUrl: "https://github.com/mahmoudashraf0011/ST.Micheal",
    thumbnail: sant,
    screenshots: [sant1, sant2, sant3],
    videoDemo: "https://drive.google.com/file/d/1AcTRrVodz8SuD2tdWO128ZCaSgQcthRD/preview",
    hasVideo: true
  },
  {
    id: 12,
    title: "ShortListed",
    description: "Recruitment platform connecting employers with qualified candidates through smart matching, advanced filtering, and seamless communication tools. Features AI-powered candidate recommendations.",
    tags: ["React", "Context API", "Bootstrap","Sass","CSS3",],
    liveUrl: "https://shopshortlisted.com/",
    githubUrl: "https://github.com/mahmoudashraf0011/Shortlisted",
    thumbnail: short,
    screenshots: [short1, short2, short3]
  },
  /* {
    id: 13,
    title: "Ai engineer portfolio",
    description: "Professional portfolio website for an AI engineer showcasing projects, publications, and technical expertise with modern design elements. Includes interactive demos of ML models.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://megamind22.github.io/Portfolio/",
    githubUrl: "https://github.com/mahmoudashraf0011/mohamed-shaker-ai-craft",
    thumbnail: shaker,
    screenshots: [shaker1]
  },
  {
    id: 14,
    title: "CEO portfolio",
    description: "Executive portfolio website for a CEO highlighting leadership experience, company achievements, and strategic vision. Features company growth timeline and press mentions.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://tamer.msol.work/",
    githubUrl: "https://github.com/mahmoudashraf0011/tamer-ishak-showcase",
    thumbnail: tamer,
    screenshots: [tamer1]
  },
  {
    id: 15,
    title: "scrate",
    description: "Creative agency portfolio showcasing design work, brand identity projects, and digital campaigns with immersive visual experiences. Features project case studies and team profiles.",
    tags: ["HTML5", "CSS3", "JavaScript", "React"],
    liveUrl: "https://mahmoudashraf0011.github.io/Scrate/",
    githubUrl: "https://github.com/mahmoudashraf0011/Scrate",
    thumbnail: scrate,
    screenshots: [scrate1, scrate2, scrate3]
  },
  {
    id: 16,
    title: "megacart",
    description: "A visually polished e-commerce template showcasing static product listings, thoughtfully crafted UI components, and elegant design patterns built with modern frontend best practices.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://mahmoudashraf0011.github.io/MegaCart-Template/",
    githubUrl: "https://github.com/mahmoudashraf0011/MegaCart-Template",
    thumbnail: mega,
    screenshots: [mega1, mega2, mega3]
  },
  {
    id: 17,
    title: "Rocker",
    description: "A modern furniture website template focused purely on UI/UX design and layout presentation.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    liveUrl: "https://mahmoudashraf0011.github.io/Rocker-Template/",
    githubUrl: "https://github.com/mahmoudashraf0011/Rocker-Template?tab=readme-ov-file",
    thumbnail: rocker,
    screenshots: [rocker1, rocker2, rocker3]
  },
  {
    id: 18,
    title: "RWD",
    description: "Responsive web design showcase demonstrating mobile-first approach and cross-device compatibility with modern CSS techniques. Includes interactive breakpoint viewer.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "CSS Grid", "Flexbox"],
    liveUrl: "https://mahmoudashraf0011.github.io/RWD/",
    githubUrl: "https://github.com/mahmoudashraf0011/RWD",
    thumbnail: rwd,
    screenshots: [rwd1, rwd2, rwd3]
  },
  {
    id: 19,
    title: "Pro",
    description: "Pro is a fully functional e-commerce website featuring dynamic product listings, cart management, and structured state handling within a responsive and scalable architecture.",
    tags: ["React", "CSS3", "Bootstrap", "Redux"],
    liveUrl: "https://mahmoudashraf0011.github.io/Pro-Template/",
    githubUrl: "https://github.com/mahmoudashraf0011/Pro-Template",
    thumbnail: pro,
    screenshots: [pro1, pro2, pro3]
  } */
];

const featuredProjects = projects.slice(0, 2);
const carouselProjects = projects.slice(2);

// Description Modal Component
const DescriptionModal = ({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void;
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-2xl rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <FileText size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-xs text-white/50">Project Details</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto custom-scrollbar">
          <div className="prose prose-invert max-w-none">
            <p className="text-white/80 leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-accent/20 text-accent hover:bg-accent/30 transition-colors text-sm font-medium"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Video Modal Component
const VideoModal = ({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void;
}) => {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Extract Google Drive file ID and create embed URL
  const getEmbedUrl = (url: string) => {
    if (url.includes('drive.google.com')) {
      // Already in preview format
      return url;
    }
    return url;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 md:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-6xl rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 shadow-2xl flex flex-col"
        style={{ maxHeight: "95vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 bg-gradient-to-r from-gray-900 to-gray-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <Video size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-xs text-white/50">Project Demo Video</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-px h-6 bg-white/10 mx-1" />
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              title="Close (ESC)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative flex-1 min-h-0 p-4 md:p-6 bg-black/40">
          <div className="w-full h-full min-h-[40vh] md:min-h-[40vh] lg:min-h-[40vh]">
            {project.videoDemo && (
              <iframe
                src={getEmbedUrl(project.videoDemo)}
                className="w-full h-[40vh] md:h-[40vh] lg:h-[40vh] rounded-lg border border-white/20 shadow-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={`${project.title} demo video`}
              />
            )}
          </div>

          {/* Video controls hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/40 border border-white/5">
            <div className="flex gap-3">
              <span>ESC close</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Screenshot Modal Component
const ScreenshotModal = ({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') scrollPrev();
    if (e.key === 'ArrowRight') scrollNext();
    if (e.key === 'Escape') onClose();
    if (e.key === 'z' || e.key === 'Z') setIsZoomed(!isZoomed);
    if (e.key === 't' || e.key === 'T') setShowThumbnails(!showThumbnails);
  }, [scrollPrev, scrollNext, onClose, isZoomed, showThumbnails]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const downloadCurrentImage = async () => {
    const imageUrl = project.screenshots[selectedIndex];
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.title}-screenshot-${selectedIndex + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 md:p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-7xl rounded-2xl bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10 shadow-2xl flex flex-col"
        style={{ maxHeight: "95vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className="relative flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0 bg-gradient-to-r from-gray-900 to-gray-950">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
              <ImageIcon size={18} className="text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-xs text-white/50 flex items-center gap-2">
                <span>{project.screenshots.length} screenshots</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span>{selectedIndex + 1} / {project.screenshots.length}</span>
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowThumbnails(!showThumbnails)}
              className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              title="Toggle thumbnails (T)"
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              title={isZoomed ? "Zoom out (Z)" : "Zoom in (Z)"}
            >
              {isZoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </button>
            <button
              onClick={downloadCurrentImage}
              className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              title="Download"
            >
              <Download size={18} />
            </button>
            <div className="w-px h-6 bg-white/10 mx-1" />
            <button
              onClick={onClose}
              className="rounded-xl p-2 text-white/50 hover:text-white hover:bg-white/10 transition-all"
              title="Close (ESC)"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Main Carousel Area */}
        <div className="relative flex-1 min-h-0 p-4 md:p-6 bg-black/40">
          <div ref={emblaRef} className="overflow-hidden rounded-xl h-full">
            <div className="flex h-full">
              {project.screenshots.map((screenshot, idx) => (
                <div key={idx} className="min-w-0 shrink-0 grow-0 basis-full h-full">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.img
                      src={screenshot}
                      alt={`${project.title} screenshot ${idx + 1}`}
                      className={`rounded-lg transition-all duration-300 ${
                        isZoomed 
                          ? 'w-full h-full object-contain cursor-zoom-out' 
                          : 'max-w-full max-h-full w-auto h-auto object-contain cursor-zoom-in'
                      }`}
                      onClick={() => setIsZoomed(!isZoomed)}
                      whileHover={{ scale: isZoomed ? 1 : 1.02 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.5)'
                      }}
                    />
                    
                    {/* Image counter with glass effect */}
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white/90 text-xs px-3 py-1.5 rounded-full border border-white/10">
                      {idx + 1} / {project.screenshots.length}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons with enhanced design */}
          <AnimatePresence>
            {canScrollPrev && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 backdrop-blur-md p-3 text-white hover:bg-black/80 transition-all border border-white/10 hover:border-white/20 shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={24} />
              </motion.button>
            )}
            {canScrollNext && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/60 backdrop-blur-md p-3 text-white hover:bg-black/80 transition-all border border-white/10 hover:border-white/20 shadow-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Enhanced Thumbnails Strip */}
        <AnimatePresence>
          {showThumbnails && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex-shrink-0 border-t border-white/10 bg-gradient-to-t from-gray-900 to-gray-950 p-4"
            >
              <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-2">
                {project.screenshots.map((screenshot, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => emblaApi?.scrollTo(idx)}
                    className={`relative rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 group ${
                      idx === selectedIndex 
                        ? 'ring-2 ring-accent ring-offset-2 ring-offset-gray-900 scale-110' 
                        : 'opacity-50 hover:opacity-100 hover:scale-105'
                    }`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={screenshot}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-20 h-14 object-cover"
                    />
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-all duration-300" />
                    
                    {/* Index number */}
                    <div className="absolute bottom-1 right-1 bg-black/70 backdrop-blur-sm text-white/90 text-[10px] px-1.5 py-0.5 rounded">
                      {idx + 1}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Keyboard shortcuts hint */}
        <div className="absolute bottom-20 left-4 bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-white/40 border border-white/5">
          <div className="flex gap-3">
            <span>← → navigate</span>
            <span>ESC close</span>
            <span>Z zoom</span>
            <span>T thumbnails</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Enhanced Project Card with "See More" functionality and Video Button
const ProjectCard = ({
  project,
  onScreenshotsClick,
  onVideoClick,
  onDescriptionClick,
  index,
}: {
  project: Project;
  onScreenshotsClick: (e: React.MouseEvent) => void;
  onVideoClick: (e: React.MouseEvent) => void;
  onDescriptionClick: (e: React.MouseEvent) => void;
  index: number;
}) => {
  const [showAllTags, setShowAllTags] = useState(false);
  
  const displayedTags = showAllTags ? project.tags : project.tags.slice(0, 4);
  const hiddenTagsCount = project.tags.length - 4;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-card group relative overflow-hidden h-full flex flex-col hover:shadow-2xl transition-all duration-500"
    >
      {/* Screenshot Preview */}
      <div 
        className="relative h-48 flex-shrink-0 cursor-pointer overflow-hidden bg-secondary/60"
        onClick={onScreenshotsClick}
      >
        <img
          src={project.thumbnail || project.screenshots[0]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Badges container */}
        <div className="absolute top-3 right-3 flex gap-2">
          {/* Screenshot count badge */}
          <div className="bg-black/60 backdrop-blur-sm text-white/90 text-xs px-2 py-1 rounded-full border border-white/10">
            {project.screenshots.length} {project.screenshots.length === 1 ? 'photo' : 'photos'}
          </div>
          
          {/* Video badge if available */}
          {project.hasVideo && (
            <div className="bg-accent/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full border border-accent/30 flex items-center gap-1">
              <Play size={10} /> Demo
            </div>
          )}
        </div>
        
        {/* Overlay buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                onScreenshotsClick(e);
              }}
              className="rounded-full bg-black/70 backdrop-blur-md p-3 text-white border border-white/20 shadow-xl hover:bg-accent/80 transition-colors"
              title="View screenshots"
            >
              <ImageIcon size={18} />
            </button>
          </motion.div>
          
          {project.hasVideo && (
            <motion.div
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onVideoClick(e);
                }}
                className="rounded-full bg-black/70 backdrop-blur-md p-3 text-white border border-white/20 shadow-xl hover:bg-accent/80 transition-colors"
                title="Watch demo video"
              >
                <Play size={18} />
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Title with description button */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-xl font-semibold line-clamp-2 flex-1">
            {project.title}
          </h3>
          <button
            onClick={onDescriptionClick}
            className="shrink-0 p-1.5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors group/desc"
            title="View full description"
          >
            <FileText size={16} className="text-muted-foreground group-hover/desc:text-accent transition-colors" />
          </button>
        </div>
        
        {/* Description preview */}
        <div className="relative">
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-3">
            {project.description}
          </p>
          <button
            onClick={onDescriptionClick}
            className="mt-1 text-xs text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
          >
            Read full description <Maximize size={12} />
          </button>
        </div>
        
        {/* Tags with "See More" */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {displayedTags.map((tag) => (
              <span 
                key={tag} 
                className="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
            {!showAllTags && hiddenTagsCount > 0 && (
              <button
                onClick={() => setShowAllTags(true)}
                className="rounded-lg bg-secondary/80 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-secondary transition-colors flex items-center gap-1"
              >
                <Plus size={12} /> {hiddenTagsCount} more
              </button>
            )}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={onScreenshotsClick}
              className="inline-flex items-center gap-1.5 rounded-xl bg-secondary/80 px-4 py-2 text-xs font-semibold text-foreground/80 transition-all hover:bg-secondary hover:scale-[1.02]"
            >
              <ImageIcon size={14} /> Gallery
            </button>
            {project.hasVideo && (
              <button
                onClick={onVideoClick}
                className="inline-flex items-center gap-1.5 rounded-xl bg-accent/20 px-4 py-2 text-xs font-semibold text-accent transition-all hover:bg-accent/30 hover:scale-[1.02]"
              >
                <Play size={14} /> Demo
              </button>
            )}
            {project.liveUrl !== "#" && (
              <a
                href={project.liveUrl}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/40 hover:bg-secondary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
            {/* {project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 rounded-xl border border-border px-4 py-2 text-xs font-semibold transition-colors hover:border-accent/40 hover:bg-secondary/50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} /> Code
              </a>
            )} */}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const [screenshotProject, setScreenshotProject] = useState<Project | null>(null);
  const [videoProject, setVideoProject] = useState<Project | null>(null);
  const [descriptionProject, setDescriptionProject] = useState<Project | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 }
    }
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedSnap, setSelectedSnap] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedSnap(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Improved Section Label with accent bar */}
        <div className="flex items-center justify-center gap-3 mb-4">
          {/* <div className="h-px w-8 bg-accent/50"></div>
          <p className="section-label text-accent font-medium tracking-wider uppercase text-sm">
            
          </p>
          <div className="h-px w-8 bg-accent/50"></div> */}
        </div>
        
        {/* Main Title with Gradient and Animation */}
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent bg-size-200 animate-gradient">
            Production-Ready
          </span>
          <br />
          <span className="text-foreground">Digital Solutions</span>
        </h2>
        
        {/* Subtitle with stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
            <span className="text-muted-foreground text-sm">
              {projects.length}+ Projects Delivered
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/60"></div>
            <span className="text-muted-foreground text-sm">
              {projects.filter(p => p.hasVideo).length} Video Demos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent/30"></div>
            <span className="text-muted-foreground text-sm">
              Real-World Applications
            </span>
          </div>
        </div>
        
        {/* Description text */}
        <p className="text-muted-foreground max-w-2xl mx-auto mt-6">
          From concept to deployment — exploring real-world applications that solve complex problems
          with modern technologies and best practices.
        </p>
      </motion.div>

      {/* Featured Projects */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 auto-rows-fr">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            onScreenshotsClick={(e) => {
              e.stopPropagation();
              setScreenshotProject(project);
            }}
            onVideoClick={(e) => {
              e.stopPropagation();
              setVideoProject(project);
            }}
            onDescriptionClick={(e) => {
              e.stopPropagation();
              setDescriptionProject(project);
            }}
            index={i}
          />
        ))}
      </div>

      {/* More Projects Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-16"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground">
              More Projects
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Complete portfolio of {carouselProjects.length} additional projects
            </p>
          </div>
          <div className="text-sm text-accent/70">
            {carouselProjects.length} projects
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-sm transition-all hover:border-accent/40 disabled:opacity-30 md:flex"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canScrollNext}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-border bg-card p-2 text-foreground shadow-sm transition-all hover:border-accent/40 disabled:opacity-30 md:flex"
          >
            <ChevronRight size={18} />
          </button>

          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {carouselProjects.map((project, i) => (
                <div
                  key={project.id}
                  className="min-w-0 shrink-0 grow-0 basis-full sm:basis-[calc(50%-12px)] lg:basis-[calc(33.333%-16px)]"
                >
                  <div className="h-full">
                    <ProjectCard
                      project={project}
                      onScreenshotsClick={(e) => {
                        e.stopPropagation();
                        setScreenshotProject(project);
                      }}
                      onVideoClick={(e) => {
                        e.stopPropagation();
                        setVideoProject(project);
                      }}
                      onDescriptionClick={(e) => {
                        e.stopPropagation();
                        setDescriptionProject(project);
                      }}
                      index={i + 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {snapCount > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {Array.from({ length: snapCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === selectedSnap
                      ? "w-6 bg-accent"
                      : "w-2 bg-secondary hover:bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>

      {/* Screenshot Modal */}
      <AnimatePresence>
        {screenshotProject && (
          <ScreenshotModal
            project={screenshotProject}
            onClose={() => setScreenshotProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoProject && videoProject.videoDemo && (
          <VideoModal
            project={videoProject}
            onClose={() => setVideoProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Description Modal */}
      <AnimatePresence>
        {descriptionProject && (
          <DescriptionModal
            project={descriptionProject}
            onClose={() => setDescriptionProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;