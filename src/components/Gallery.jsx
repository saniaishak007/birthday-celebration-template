import { gsap } from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import "./Gallery.css";

function Gallery({ isActive }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [photosRevealed, setPhotosRevealed] = useState(false);

  const photosRef = useRef([]);
  const lightboxImgRef = useRef(null);

  const photos = [
    { src: "/images/pic1.jpeg", alt: "Memory 1" },
    { src: "/images/pic2.jpeg", alt: "Memory 2" },
    { src: "/images/pic3.jpeg", alt: "Memory 3" },
    { src: "/images/pic4.jpeg", alt: "Memory 4" },
    { src: "/images/pic5.jpeg", alt: "Memory 5" },
    { src: "/images/pic6.jpeg", alt: "Memory 6" },
  ];

  // Reveal photos with GSAP when page becomes active
  useEffect(() => {
    if (isActive && !photosRevealed) {
      setTimeout(() => setPhotosRevealed(true), 10);

      // Stagger animation for photos
      gsap.fromTo(
        photosRef.current,
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "back.out(1.4)",
          delay: 0.2,
        }
      );
    }
  }, [isActive, photosRevealed]);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);

    // Animate lightbox appearance
    if (lightboxImgRef.current) {
      gsap.fromTo(
        lightboxImgRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.4)" }
      );
    }
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Handle body overflow in effect
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const showNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % photos.length;

    // Animate transition
    if (lightboxImgRef.current) {
      gsap.to(lightboxImgRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex(newIndex);
          gsap.fromTo(
            lightboxImgRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
          );
        },
      });
    }
  }, [currentIndex, photos.length]);

  const showPrev = useCallback(() => {
    const newIndex = (currentIndex - 1 + photos.length) % photos.length;

    // Animate transition
    if (lightboxImgRef.current) {
      gsap.to(lightboxImgRef.current, {
        x: 100,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex(newIndex);
          gsap.fromTo(
            lightboxImgRef.current,
            { x:
