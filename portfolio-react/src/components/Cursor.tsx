import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches);
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let rafId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    const handleHoverIn = () => setIsHovering(true);
    const handleHoverOut = () => setIsHovering(false);

    document.addEventListener('mousemove', handleMouseMove);

    const targets = document.querySelectorAll(
      'a, button, [data-cursor-hover], input, textarea',
    );
    targets.forEach((el) => {
      el.addEventListener('mouseenter', handleHoverIn);
      el.addEventListener('mouseleave', handleHoverOut);
    });

    // Re-attach on DOM changes (for dynamic content like modals)
    const reattachObserver = new MutationObserver(() => {
      const newTargets = document.querySelectorAll(
        'a, button, [data-cursor-hover], input, textarea',
      );
      newTargets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
        el.addEventListener('mouseenter', handleHoverIn);
        el.addEventListener('mouseleave', handleHoverOut);
      });
    });
    reattachObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      reattachObserver.disconnect();
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverIn);
        el.removeEventListener('mouseleave', handleHoverOut);
      });
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] rounded-full border-[1.5px] mix-blend-difference -translate-x-1/2 -translate-y-1/2 transition-[width,height,background,border-color] duration-300 ${
          isHovering
            ? 'w-16 h-16 bg-accent-cyan/10 border-accent-purple'
            : 'w-8 h-8 bg-transparent border-accent-cyan'
        }`}
        style={{ transition: 'left 0.1s linear, top 0.1s linear, width 0.3s, height 0.3s, border-color 0.3s, background 0.3s' }}
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-1 h-1 bg-accent-cyan rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}
