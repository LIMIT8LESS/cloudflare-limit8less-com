import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
        }}
      >
        <svg
          width="120"
          height="55"
          viewBox="0 0 100 45"
          fill="white"
        >
          <path d="M22.5,22.5c0,6.21-5.04,11.25-11.25,11.25S0,28.71,0,22.5S5.04,11.25,11.25,11.25S22.5,16.29,22.5,22.5z M88.75,11.25 c-6.21,0-11.25,5.04-11.25,11.25s5.04,11.25,11.25,11.25S100,28.71,100,22.5S94.96,11.25,88.75,11.25z M50,22.5 c-6.21,0-11.25-5.04-11.25-11.25s5.04-11.25,11.25-11.25s11.25,5.04,11.25,11.25S56.21,22.5,50,22.5z M50,22.5 c6.21,0,11.25,5.04,11.25,11.25s-5.04,11.25-11.25,11.25s-11.25-5.04-11.25-11.25S43.79,22.5,50,22.5z"
          fillRule="evenodd" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
