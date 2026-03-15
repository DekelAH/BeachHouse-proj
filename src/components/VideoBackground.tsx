'use client'

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient fallback shown while video loads */}
      <div
        className="absolute inset-0 animate-wave-shimmer"
        style={{
          background:
            'linear-gradient(180deg, #0d4f6b 0%, #1a6b8a 20%, #4F8FA8 45%, #7db0c4 65%, #C9A46A 85%, #1E3A4A 100%)',
        }}
      />
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src="/video/beach-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        <source src="/video/beach.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
