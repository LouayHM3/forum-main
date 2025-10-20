'use client';

import { useEffect, useRef } from 'react';
import './plasma-background.css';

interface PlasmaBackgroundProps {
  variant?: 'plasma' | 'chromium' | 'fluid' | 'aurora';
  intensity?: number;
  className?: string;
}

export function PlasmaBackground({ 
  variant = 'plasma', 
  intensity = 0.8,
  className = '' 
}: PlasmaBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
    };

    const drawPlasma = (time: number, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      // Crée un dégradé de base très bleu foncé
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(40, 56, 77, 1)'); // #28384D fort
      gradient.addColorStop(0.5, 'rgba(40, 56, 77, 0.8)');
      gradient.addColorStop(1, 'rgba(40, 56, 77, 0.6)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      // Blobs plasma très dynamiques et bleus
      const blobs = [
        { x: 0.2, y: 0.3, size: 0.4, speed: 2.2, amplitude: 180 },
        { x: 0.7, y: 0.6, size: 0.5, speed: 1.8, amplitude: 160 },
        { x: 0.5, y: 0.1, size: 0.3, speed: 2.5, amplitude: 120 },
        { x: 0.1, y: 0.8, size: 0.6, speed: 1.9, amplitude: 200 },
        { x: 0.9, y: 0.2, size: 0.3, speed: 2.1, amplitude: 140 },
        { x: 0.3, y: 0.7, size: 0.4, speed: 1.7, amplitude: 170 },
        { x: 0.8, y: 0.4, size: 0.35, speed: 2.3, amplitude: 150 },
      ];
      blobs.forEach((blob, i) => {
        const offsetX = Math.sin(time * blob.speed + i * 2) * (blob.amplitude || 100);
        const offsetY = Math.cos(time * blob.speed * 0.7 + i * 1.5) * (blob.amplitude * 0.8 || 80);
        const x = blob.x * width + offsetX;
        const y = blob.y * height + offsetY;
        const radius = blob.size * Math.min(width, height) * 0.3;
        const blobGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        // Couleur principale #28384D
        blobGradient.addColorStop(0, 'rgba(40, 56, 77, 0.7)');
        blobGradient.addColorStop(0.4, 'rgba(40, 56, 77, 0.4)');
        blobGradient.addColorStop(0.8, 'rgba(40, 56, 77, 0.15)');
        blobGradient.addColorStop(1, 'rgba(40, 56, 77, 0)');
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = blobGradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
      });
    };

    const drawChromium = (time: number, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Base chromium gradient
      const baseGradient = ctx.createLinearGradient(0, 0, width, height);
      baseGradient.addColorStop(0, '#ffffff');
      baseGradient.addColorStop(0.3, 'rgba(248, 250, 252, 0.9)');
      baseGradient.addColorStop(0.7, 'rgba(40, 56, 77, 0.08)');
      baseGradient.addColorStop(1, 'rgba(40, 56, 77, 0.15)');
      
      ctx.fillStyle = baseGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Chromium-like reflective bands
      const bands = 8;
      for (let i = 0; i < bands; i++) {
        const angle = (time * 0.1 + i * 0.5) % (Math.PI * 2);
        const bandWidth = 80 + Math.sin(time + i) * 20;
        const opacity = intensity * (0.02 + Math.abs(Math.sin(time + i)) * 0.03);
        
        ctx.save();
        ctx.translate(width / 2, height / 2);
        ctx.rotate(angle);
        
        const bandGradient = ctx.createLinearGradient(-bandWidth, -height, bandWidth, height);
        bandGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        bandGradient.addColorStop(0.3, `rgba(255, 255, 255, ${opacity})`);
        bandGradient.addColorStop(0.5, `rgba(40, 56, 77, ${opacity * 1.5})`);
        bandGradient.addColorStop(0.7, `rgba(255, 255, 255, ${opacity})`);
        bandGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = bandGradient;
        ctx.fillRect(-bandWidth, -height, bandWidth * 2, height * 2);
        ctx.restore();
      }
    };

    const drawFluid = (time: number, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Fluid base
      const fluidGradient = ctx.createRadialGradient(
        width * 0.5, height * 0.3, 0,
        width * 0.5, height * 0.3, Math.max(width, height) * 0.8
      );
      fluidGradient.addColorStop(0, '#ffffff');
      fluidGradient.addColorStop(0.4, 'rgba(248, 250, 252, 0.8)');
      fluidGradient.addColorStop(0.8, 'rgba(40, 56, 77, 0.1)');
      fluidGradient.addColorStop(1, 'rgba(40, 56, 77, 0.2)');
      
      ctx.fillStyle = fluidGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Organic fluid shapes
      for (let i = 0; i < 6; i++) {
        const phase = time * 0.3 + i * Math.PI / 3;
        const x = width * (0.5 + 0.3 * Math.sin(phase));
        const y = height * (0.5 + 0.2 * Math.cos(phase * 1.3));
        
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(1 + Math.sin(phase) * 0.3, 1 + Math.cos(phase) * 0.2);
        
        const size = (80 + Math.sin(phase * 2) * 40) * intensity;
        const shapeGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
        
        const alpha = 0.03 + Math.abs(Math.sin(phase)) * 0.02;
        shapeGradient.addColorStop(0, `rgba(40, 56, 77, ${alpha * 2})`);
        shapeGradient.addColorStop(0.5, `rgba(40, 56, 77, ${alpha})`);
        shapeGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = shapeGradient;
        ctx.beginPath();
        ctx.arc(0, 0, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    };

    const drawAurora = (time: number, width: number, height: number) => {
      ctx.clearRect(0, 0, width, height);
      
      // Aurora base
      const auroraGradient = ctx.createLinearGradient(0, 0, 0, height);
      auroraGradient.addColorStop(0, '#ffffff');
      auroraGradient.addColorStop(0.3, 'rgba(248, 250, 252, 0.9)');
      auroraGradient.addColorStop(0.7, 'rgba(40, 56, 77, 0.05)');
      auroraGradient.addColorStop(1, 'rgba(40, 56, 77, 0.1)');
      
      ctx.fillStyle = auroraGradient;
      ctx.fillRect(0, 0, width, height);
      
      // Aurora waves
      for (let layer = 0; layer < 4; layer++) {
        ctx.save();
        ctx.globalCompositeOperation = 'screen';
        
        const waveGradient = ctx.createLinearGradient(0, height * 0.2, 0, height * 0.8);
        const alpha = intensity * (0.03 + layer * 0.01);
        waveGradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        waveGradient.addColorStop(0.5, `rgba(40, 56, 77, ${alpha})`);
        waveGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.fillStyle = waveGradient;
        ctx.beginPath();
        ctx.moveTo(0, height * 0.5);
        
        for (let x = 0; x <= width; x += 10) {
          const y = height * 0.5 + 
            Math.sin((x * 0.01) + time * (0.5 + layer * 0.2)) * (30 + layer * 10) +
            Math.sin((x * 0.005) + time * 0.3) * (20 + layer * 5);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
      }
    };

    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      time += 0.18; // vitesse rapide
      switch (variant) {
        case 'plasma':
          drawPlasma(time, width, height);
          break;
        case 'chromium':
          drawChromium(time, width, height);
          break;
        case 'fluid':
          drawFluid(time, width, height);
          break;
        case 'aurora':
          drawAurora(time, width, height);
          break;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [variant, intensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{ zIndex: 0 }}
    />
  );
}

// CSS-only plasma-style backgrounds for better performance
export function PlasmaBackgroundCSS({ 
  variant = 'plasma',
  intensity = 0.8,
  className = ''
}: PlasmaBackgroundProps) {
  if (variant === 'plasma') {
    return (
      <div
        className={`absolute inset-0 w-full h-full plasma-animated-bg ${className}`}
        style={{
          zIndex: 0,
          filter: `opacity(${intensity})`
        }}
      />
    );
  }

  const backgroundStyles = {
    chromium: {
      background: `
        conic-gradient(from 180deg at 50% 50%, 
          transparent 0deg, 
          rgba(55, 65, 85, 0.15) 45deg, 
          rgba(0, 173, 181, 0.15) 90deg,
          rgba(70, 80, 95, 0.12) 135deg,
          transparent 180deg,
          rgba(30, 40, 55, 0.18) 225deg,
          rgba(0, 173, 181, 0.12) 270deg,
          rgba(40, 56, 77, 0.08) 315deg,
          transparent 360deg
        ),
        linear-gradient(135deg, rgba(40, 56, 77, 0.75) 0%, rgba(55, 65, 85, 0.6) 50%, rgba(40, 56, 77, 0.5) 100%)
      `,
      animation: 'chromiumSpin 6s linear infinite'
    },
    
    fluid: {
      background: `
        radial-gradient(ellipse at 40% 20%, rgba(0, 173, 181, 0.2) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 70%, rgba(55, 65, 85, 0.18) 0%, transparent 50%),
        radial-gradient(ellipse at 10% 90%, rgba(70, 80, 95, 0.15) 0%, transparent 50%),
        radial-gradient(ellipse at 60% 40%, rgba(30, 40, 55, 0.2) 0%, transparent 55%),
        linear-gradient(45deg, rgba(40, 56, 77, 0.7) 0%, rgba(55, 65, 85, 0.5) 30%, rgba(40, 56, 77, 0.4) 70%, rgba(0, 173, 181, 0.05) 100%)
      `,
      animation: 'fluidMotion 5s ease-in-out infinite'
    },
    
    aurora: {
      background: `
        linear-gradient(45deg, 
          rgba(40, 56, 77, 0.85) 0%, 
          rgba(55, 65, 85, 0.7) 20%,
          rgba(40, 56, 77, 0.6) 40%,
          rgba(0, 173, 181, 0.08) 70%,
          rgba(0, 107, 117, 0.1) 100%
        ),
        radial-gradient(ellipse at 30% 20%, rgba(0, 173, 181, 0.15) 0%, transparent 60%),
        radial-gradient(ellipse at 70% 80%, rgba(70, 80, 95, 0.12) 0%, transparent 65%),
        radial-gradient(ellipse at 10% 60%, rgba(30, 40, 55, 0.25) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 30%, rgba(55, 65, 85, 0.18) 0%, transparent 55%)
      `,
      animation: 'auroraWave 2s ease-in-out infinite'
    }
  };

  return (
    <div
      className={`absolute inset-0 w-full h-full ${className}`}
      style={{
        ...backgroundStyles[variant],
        zIndex: 0,
        filter: `opacity(${intensity})`
      }}
    />
  );
}