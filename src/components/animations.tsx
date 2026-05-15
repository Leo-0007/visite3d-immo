"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "motion/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EASE = [0.25, 0.46, 0.45, 0.94] as const;

export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1, delayChildren: 0.05 },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const obj = { val: 0 };
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        if (ref.current)
          ref.current.textContent =
            prefix + Math.round(obj.val).toLocaleString("fr-CH") + suffix;
      },
    });
  }, []);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export function TextReveal({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const words = ref.current?.querySelectorAll(".word");
    if (!words) return;
    gsap.fromTo(
      words,
      { opacity: 0.1 },
      {
        opacity: 1,
        stagger: 0.04,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="word inline-block mr-[0.25em]">
          {word}
        </span>
      ))}
    </div>
  );
}

export function GrainOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 opacity-[0.025]">
      <svg className="h-full w-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>
    </div>
  );
}

export function HoverScale({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, transition: { duration: 0.25 } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
