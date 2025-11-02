import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 데이터 분석 컨설팅 | 해태시스템 - 데이터로 기업의 전략과 실행력을 설계',
  description: 'AI·빅데이터 기반 데이터 분석 컨설팅 전문. 의사결정을 위한 해석력 제공. Python·Tableau·PowerBI 활용. ESG 지표분석, KPI 분석, 시각화 대시보드 구축.',
  keywords: '데이터 분석 컨설팅, AI 데이터분석, 빅데이터 컨설팅, ESG 지표분석, KPI 분석, 데이터 시각화, Tableau, PowerBI, Python 분석, 경영 컨설팅',
  authors: [{ name: '해태시스템(HAETAE SYSTEM)' }],
  creator: '해태시스템',
  publisher: '해태시스템',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://[YOUR-DOMAIN]',
    siteName: '해태시스템 - AI 데이터 분석 컨설팅',
    title: 'AI 데이터 분석 컨설팅 전문 | 해태시스템',
    description: '데이터로 기업의 전략과 실행력을 설계합니다. 의사결정을 위한 해석력을 제공하는 AI·빅데이터 분석 컨설팅.',
    images: [
      {
        url: '/og-image-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'AI 데이터 분석 컨설팅 - 해태시스템',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 데이터 분석 컨설팅 | 해태시스템',
    description: 'AI·빅데이터 기반 데이터 분석 컨설팅 전문 서비스',
    images: ['/og-image-consulting.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      naver: 'naver-site-verification-code',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
