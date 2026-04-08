'use client';

import { useEffect, useRef } from 'react';

// LordIcon animated icons for Anandbodh
// Icons mapped to wellness and health themes

export const LORDICON_URLS = {
  // Health & Wellness
  heart: 'https://cdn.lordicon.com/jtmig5wf.json',
  brain: 'https://cdn.lordicon.com/ksqxpnwz.json',
  meditation: 'https://cdn.lordicon.com/bnqfbvfm.json',
  yoga: 'https://cdn.lordicon.com/bnqfbvfm.json',
  
  // Learning & Content
  book: 'https://cdn.lordicon.com/qjvmiyye.json',
  article: 'https://cdn.lordicon.com/qjvmiyye.json',
  document: 'https://cdn.lordicon.com/qjvmiyye.json',
  
  // Community & People
  users: 'https://cdn.lordicon.com/dxjqoyvy.json',
  people: 'https://cdn.lordicon.com/dxjqoyvy.json',
  community: 'https://cdn.lordicon.com/dxjqoyvy.json',
  user: 'https://cdn.lordicon.com/kthelypq.json',
  profile: 'https://cdn.lordicon.com/kthelypq.json',
  
  // Achievement & Success
  award: 'https://cdn.lordicon.com/jburvmxl.json',
  trophy: 'https://cdn.lordicon.com/jburvmxl.json',
  certificate: 'https://cdn.lordicon.com/jburvmxl.json',
  star: 'https://cdn.lordicon.com/gwlusjdu.json',
  success: 'https://cdn.lordicon.com/gwlusjdu.json',
  
  // Settings & Management
  settings: 'https://cdn.lordicon.com/qqvxesqg.json',
  gear: 'https://cdn.lordicon.com/qqvxesqg.json',
  config: 'https://cdn.lordicon.com/qqvxesqg.json',
  
  // Time & Calendar
  calendar: 'https://cdn.lordicon.com/kktahllc.json',
  clock: 'https://cdn.lordicon.com/kktahllc.json',
  schedule: 'https://cdn.lordicon.com/kktahllc.json',
  
  // Analytics & Data
  chart: 'https://cdn.lordicon.com/xyboiuda.json',
  analytics: 'https://cdn.lordicon.com/xyboiuda.json',
  graph: 'https://cdn.lordicon.com/xyboiuda.json',
  trending: 'https://cdn.lordicon.com/xyboiuda.json',
  
  // Security & Protection
  lock: 'https://cdn.lordicon.com/kkjbvfhd.json',
  security: 'https://cdn.lordicon.com/kkjbvfhd.json',
  shield: 'https://cdn.lordicon.com/kkjbvfhd.json',
  
  // Growth & Progress
  rocket: 'https://cdn.lordicon.com/lfrzxmou.json',
  launch: 'https://cdn.lordicon.com/lfrzxmou.json',
  growth: 'https://cdn.lordicon.com/lfrzxmou.json',
  
  // Communication
  message: 'https://cdn.lordicon.com/ixuydmnu.json',
  chat: 'https://cdn.lordicon.com/ixuydmnu.json',
  comment: 'https://cdn.lordicon.com/ixuydmnu.json',
  mail: 'https://cdn.lordicon.com/ixuydmnu.json',
  email: 'https://cdn.lordicon.com/ixuydmnu.json',
  
  // Nature & Wellness
  leaf: 'https://cdn.lordicon.com/bnqfbvfm.json',
  nature: 'https://cdn.lordicon.com/bnqfbvfm.json',
  organic: 'https://cdn.lordicon.com/bnqfbvfm.json',
  
  // Fitness & Health
  dumbbell: 'https://cdn.lordicon.com/bnqfbvfm.json',
  fitness: 'https://cdn.lordicon.com/bnqfbvfm.json',
  exercise: 'https://cdn.lordicon.com/bnqfbvfm.json',
  
  // Food & Nutrition
  utensils: 'https://cdn.lordicon.com/bnqfbvfm.json',
  food: 'https://cdn.lordicon.com/bnqfbvfm.json',
  nutrition: 'https://cdn.lordicon.com/bnqfbvfm.json',
  
  // Ideas & Insights
  lightbulb: 'https://cdn.lordicon.com/bnqfbvfm.json',
  idea: 'https://cdn.lordicon.com/bnqfbvfm.json',
  insight: 'https://cdn.lordicon.com/bnqfbvfm.json',
  
  // Global & World
  globe: 'https://cdn.lordicon.com/bnqfbvfm.json',
  world: 'https://cdn.lordicon.com/bnqfbvfm.json',
  
  // Actions
  check: 'https://cdn.lordicon.com/jburvmxl.json',
  checkmark: 'https://cdn.lordicon.com/jburvmxl.json',
  download: 'https://cdn.lordicon.com/bnqfbvfm.json',
  share: 'https://cdn.lordicon.com/bnqfbvfm.json',
  zap: 'https://cdn.lordicon.com/bnqfbvfm.json',
  energy: 'https://cdn.lordicon.com/bnqfbvfm.json',
};

export function LordIcon({ 
  name, 
  size = 40, 
  colors = ['#D4AF37', '#FDFBF7'],
  trigger = 'hover',
  className = '',
  style = {}
}) {
  const iconRef = useRef(null);
  const iconUrl = LORDICON_URLS[name?.toLowerCase()] || LORDICON_URLS.star;

  useEffect(() => {
    if (iconRef.current) {
      // Load the LordIcon script if not already loaded
      if (!window.lordicon) {
        const script = document.createElement('script');
        script.src = 'https://cdn.lordicon.com/lordicon.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <lord-icon
      ref={iconRef}
      src={iconUrl}
      trigger={trigger}
      colors={colors.join(':')}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        ...style
      }}
      className={`lordicon ${className}`}
    />
  );
}

// Wrapper for easier usage
export function AnimatedIcon({ 
  name, 
  size = 40, 
  className = '',
  trigger = 'hover'
}) {
  return (
    <LordIcon 
      name={name} 
      size={size} 
      className={`icon-wrapper ${className}`}
      trigger={trigger}
    />
  );
}
