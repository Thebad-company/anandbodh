"use client";

import { useState } from "react";

export default function EmailObfuscator({ email, className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Simple obfuscation: hello@anandbodh.com -> hello [at] anandbodh [dot] com
  const displayEmail = isHovered 
    ? email 
    : email.replace("@", " [at] ").replace(/\./g, " [dot] ");

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayEmail}
    </a>
  );
}
