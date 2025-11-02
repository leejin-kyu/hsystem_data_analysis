'use client'

import { CheckCircle2, X, TrendingUp, Shield, Target, Zap } from 'lucide-react'

export default function WhyHappyAI() {
  const wrongApproaches = [
    {
      icon: <X className="w-8 h-8 text-red-600" />,
      title: '단순 통계 분석만 사용',
      description: '평균과 표준편차로는 미래를 예측할 수 없습니다',
    },
    {
      icon: <X className="w-8 h-8 text-red-600" />,
      title: '경험과 감에 의존',
      description: '베테랑의 직관도 예측하지 못한 패턴이 있습니다',
    },
    {
      icon: <X className="w-8 h-8 text-red-600" />,
      title: '문제 발생 후 대응',
      description: '사후 대응은 이미 큰 손실이 발생한 상태입니다',
    },
    {
      icon: <X className="w-8 h-8 text-red-600" />,
      title: '내부 리소스 부족',
      description: '데이터 분석 전문가를 채용하기엔 비용이 부담됩니다',
    },
  ]

  const rightApproaches = [
    {
      icon: <TrendingUp className="w-8 h-8 text-green-600" />,
      title: 'AI 기반 패턴 학습',
      description: 'ARIMA, XGBoost, LSTM으로 숨겨진 패턴 발견',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: '산업 전용 분석',
      description: '제조·설비·생산·공공데이터 등 산업별 맞춤형 분석',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: '예측 + 진단 통합',
      description: '불량률 감소·생산 효율화·품질 안정성 확보',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: '전문가 협업 체계',
      description: '산업공학·데이터사이언스·AI 엔지니어 협력 수행',
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-red-600">잘못된 시도</span>와 <span className="gradient-text">올바른 해결</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              많은 기업이 시도했지만 실패한 방법과, 해태시스템이 제시하는 해결책
            </p>
          </div>

          {/* Wrong Approaches */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">❌ 이런 방법은 실패합니다</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {wrongApproaches.map((approach, index) => (
                <div
                  key={index}
                  className="bg-red-50 border-2 border-red-200 p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {approach.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-red-900 mb-2">
                        {approach.title}
                      </h3>
                      <p className="text-red-700 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Approaches */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">✅ 해태시스템의 해결방식</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {rightApproaches.map((approach, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-green-200 hover:border-green-400 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${approach.gradient} rounded-xl shadow-md group-hover:shadow-lg transition-shadow`}>
                      <div className="text-white">
                        {approach.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {approach.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {approach.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Benefits */}
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              서비스 특징
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                '산업 전용 분석 - 제조·설비·생산·공공데이터 등',
                'AI 기반 이상치 탐지 - 단순 통계가 아닌 패턴 기반',
                '예측 + 진단 통합 - 불량률 감소·효율화 확보',
                '전문가 협업 체계 - 산업공학·AI 엔지니어 협력',
                '보안·신뢰성 보장 - 기업·공공기관 보안규정 준수',
                'NDA 협약 가능 - 비밀유지계약 체결 지원',
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
