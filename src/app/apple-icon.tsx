import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20px',
          padding: '10px',
        }}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/assets/logonotext.png`}
          alt="Haidee PT Logo"
          width="160"
          height="160"
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}
