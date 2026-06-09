import { useState, useEffect } from "react";

export default function TypingEffect({ 
  texts = [], 
  speed = 100, 
  eraseSpeed = 50, 
  delay = 2000 
}) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (texts.length === 0) return;

    let timer;
    const currentFullText = texts[index];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
      }, eraseSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
      }, speed);
    }

    // Handle end of typing / deletion
    if (!isDeleting && displayText === currentFullText) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && displayText === "") {
      // Done deleting, move to next text
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, speed, eraseSpeed, delay]);

  return (
    <span className="inline-block relative text-cyber-blue font-cyber tracking-wider font-semibold border-r-2 border-cyber-blue animate-pulse-fast pr-1">
      {displayText}
    </span>
  );
}
