'use client'

import { useState } from 'react'
import { Play, Monitor, BarChart3, Network, FileText, Sparkles, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function PlatformDemo() {
  const [activeTab, setActiveTab] = useState(0)

  const features = [
    {
      id: 'dashboard',
      name: '대시보드',
      icon: <Monitor className="w-5 h-5" />,
      title: '실시간 모니터링 대시보드',
      description: '데이터 수집부터 분석 결과까지 한눈에 확인',
      image: '/demo/dashboard.png', // 나중에 실제 이미지로 교체
      highlights: [
        '실시간 데이터 수집 현황',
        '분석 작업 진행 상태',
        '주요 지표 시각화',
      ]
    },
    {
      id: 'analysis',
      name: '텍스트 분석',
      icon: <FileText className="w-5 h-5" />,
      title: 'AI 기반 텍스트 분석',
      description: 'ChatGPT, BERT, LDA 등 최신 AI 엔진 활용',
      image: '/demo/analysis.png',
      highlights: [
        '토픽모델링 자동 분석',
        '감성분석 및 의제 탐지',
        '키워드 추출 및 분류',
      ]
    },
    {
      id: 'network',
      name: '네트워크 분석',
      icon: <Network className="w-5 h-5" />,
      title: '네트워크 및 관계 분석',
      description: '단어 간 연관성과 중심성 분석',
      image: '/demo/network.png',
      highlights: [
        '동시출현 네트워크 시각화',
        '중심성 분석 (연결/매개/근접)',
        '커뮤니티 탐지',
      ]
    },
    {
      id: 'visualization',
      name: '시각화',
      icon: <BarChart3 className="w-5 h-5" />,
      title: '인터랙티브 시각화',
      description: '다양한 차트와 그래프로 결과 표현',
      image: '/demo/visualization.png',
      highlights: [
        '워드클라우드, 막대/선 그래프',
        '시계열 트렌드 분석',
        '커스텀 리포트 생성',
      ]
    },
  ]

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
              <Play className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">플랫폼 데모</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              TEXNOVA <span className="gradient-text">실제 구동 화면</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              실제 플랫폼에서 제공하는 기능들을 미리 확인해보세요
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:shadow-md hover:scale-102'
                }`}
              >
                {feature.icon}
                <span>{feature.name}</span>
              </button>
            ))}
          </div>

          {/* Content Display */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Description */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 rounded-full mb-4">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-sm font-semibold text-purple-600">
                      {features[activeTab].name}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {features[activeTab].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8">
                    {features[activeTab].description}
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {features[activeTab].highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#trial"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit"
                >
                  <Play className="w-5 h-5" />
                  무료 체험 시작하기
                </a>
              </div>

              {/* Right: Screenshot */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 md:p-12 flex items-center justify-center">
                <div className="relative w-full aspect-video bg-white rounded-2xl shadow-xl overflow-hidden border-4 border-white">
                  {/* Placeholder - 실제 이미지로 교체 예정 */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        {features[activeTab].icon && (
                          <div className="text-white scale-150">
                            {features[activeTab].icon}
                          </div>
                        )}
                      </div>
                      <p className="text-gray-500 font-medium">
                        {features[activeTab].name} 화면
                      </p>
                      <p className="text-sm text-gray-400 mt-2">
                        실제 스크린샷 준비 중
                      </p>
                    </div>
                  </div>
                  {/* 실제 이미지 사용 시:
                  <Image
                    src={features[activeTab].image}
                    alt={features[activeTab].title}
                    fill
                    className="object-cover"
                  />
                  */}
                </div>
              </div>
            </div>
          </div>

          {/* Video Demo Section */}
          <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                플랫폼 사용 방법 영상
              </h3>
              <p className="text-gray-600">
                TEXNOVA 플랫폼의 주요 기능을 5분 안에 확인하세요
              </p>
            </div>

            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-inner">
              {/* Placeholder for video */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600 font-medium">데모 영상 준비 중</p>
                  <p className="text-sm text-gray-500 mt-2">
                    플랫폼 사용 가이드 영상이 곧 업로드됩니다
                  </p>
                </div>
              </div>
              {/* 실제 비디오 사용 시:
              <iframe
                className="w-full h-full"
                src="YOUR_VIDEO_URL"
                title="TEXNOVA Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
