'use client';

import { useEffect, useRef } from 'react';

interface ModernBackgroundProps {
  variant?: 'geometric' | 'gradient' | 'dots' | 'waves';
  className?: string;
}

export function ModernBackground({ 
  variant = 'geometric', 
  className = '' 
}: ModernBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      drawBackground();
    };

    const drawBackground = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      switch (variant) {
        case 'geometric':
          drawGeometric(ctx, width, height);
          break;
        case 'gradient':
          drawGradient(ctx, width, height);
          break;
        case 'dots':
          drawDots(ctx, width, height);
          break;
        case 'waves':
          drawWaves(ctx, width, height);
          break;
      }
    };

    const drawGeometric = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Clean white base
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      
      // Blue geometric shapes
      ctx.fillStyle = 'rgba(40, 56, 77, 0.03)';
      
      // Large diagonal lines
      for (let i = 0; i < 8; i++) {
        ctx.save();
        ctx.translate(width * (i / 8), 0);
        ctx.rotate(Math.PI / 6); // 30 degrees
        ctx.fillRect(-50, -50, 100, height + 100);
        ctx.restore();
      }
      
      // Subtle triangles
      ctx.fillStyle = 'rgba(40, 56, 77, 0.02)';
      for (let i = 0; i < 12; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = 20 + Math.random() * 40;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x + size/2, y + size);
        ctx.closePath();
        ctx.fill();
      }
      
      // Blue accent corner
      const gradient = ctx.createLinearGradient(0, 0, width * 0.3, height * 0.3);
      gradient.addColorStop(0, 'rgba(40, 56, 77, 0.08)');
      gradient.addColorStop(1, 'rgba(40, 56, 77, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width * 0.3, height * 0.3);
    };

    const drawGradient = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Modern gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.3, 'rgba(248, 249, 250, 0.8)');
      gradient.addColorStop(0.7, 'rgba(40, 56, 77, 0.05)');
      gradient.addColorStop(1, 'rgba(40, 56, 77, 0.1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Subtle overlay pattern
      ctx.fillStyle = 'rgba(40, 56, 77, 0.02)';
      for (let x = 0; x < width; x += 60) {
        for (let y = 0; y < height; y += 60) {
          if ((x + y) % 120 === 0) {
            ctx.fillRect(x, y, 30, 30);
          }
        }
      }
    };

    const drawDots = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // White base
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      
      // Modern dot pattern
      const spacing = 40;
      ctx.fillStyle = 'rgba(40, 56, 77, 0.08)';
      
      for (let x = spacing; x < width; x += spacing) {
        for (let y = spacing; y < height; y += spacing) {
          const size = 1 + Math.sin((x + y) * 0.01) * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      
      // Larger accent dots
      ctx.fillStyle = 'rgba(40, 56, 77, 0.12)';
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        ctx.beginPath();
        ctx.arc(x, y, 2 + Math.random() * 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawWaves = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // White base with subtle blue gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, '#ffffff');
      gradient.addColorStop(0.5, 'rgba(248, 250, 252, 0.8)');
      gradient.addColorStop(1, 'rgba(40, 56, 77, 0.03)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Modern wave patterns
      const time = Date.now() * 0.0001;
      
      // Top wave
      ctx.fillStyle = 'rgba(40, 56, 77, 0.05)';
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let x = 0; x <= width; x += 10) {
        const y = 50 + Math.sin((x * 0.005) + time) * 20;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, 0);
      ctx.closePath();
      ctx.fill();
      
      // Bottom wave
      ctx.fillStyle = 'rgba(40, 56, 77, 0.04)';
      ctx.beginPath();
      ctx.moveTo(0, height);
      for (let x = 0; x <= width; x += 10) {
        const y = height - 50 + Math.cos((x * 0.003) + time * 0.7) * 30;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.closePath();
      ctx.fill();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation for waves variant
    let animationFrame: number;
    if (variant === 'waves') {
      const animate = () => {
        drawBackground();
        animationFrame = requestAnimationFrame(animate);
      };
      animate();
    }

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: -1 }}
    />
  );
}

// CSS-only modern backgrounds for better performance
export function ModernBackgroundCSS({ 
  variant = 'geometric',
  className = ''
}: ModernBackgroundProps) {
  const backgroundStyles = {
    geometric: {
      background: `
        linear-gradient(135deg, transparent 0%, rgba(40, 56, 77, 0.02) 50%, transparent 100%),
        linear-gradient(45deg, rgba(40, 56, 77, 0.01) 25%, transparent 25%),
        linear-gradient(-45deg, rgba(40, 56, 77, 0.01) 25%, transparent 25%),
        #ffffff
      `,
      backgroundSize: '60px 60px, 30px 30px, 30px 30px, 100%',
      backgroundPosition: '0 0, 15px 15px, -15px 15px, 0 0'
    },
    
    gradient: {
      background: `
        radial-gradient(circle at 20% 20%, rgba(40, 56, 77, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(40, 56, 77, 0.06) 0%, transparent 50%),
        linear-gradient(135deg, #ffffff 0%, rgba(248, 249, 250, 0.8) 100%)
      `
    },
    
    dots: {
      background: `
        radial-gradient(circle, rgba(40, 56, 77, 0.1) 1px, transparent 1px),
        #ffffff
      `,
      backgroundSize: '30px 30px'
    },
    
    waves: {
      background: `
        linear-gradient(135deg, #ffffff 0%, rgba(248, 250, 252, 0.8) 50%, rgba(40, 56, 77, 0.04) 100%)
      `
    }
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        ...backgroundStyles[variant],
        zIndex: -1
      }}
    />
  );
}