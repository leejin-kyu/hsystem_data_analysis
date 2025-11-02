'use client'

import { Activity, TrendingUp, BarChart3, AlertTriangle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: <AlertTriangle className="w-12 h-12 text-red-600" />,
      title: '이상치 탐지 모델링',
      description: 'Isolation Forest, LOF, AutoEncoder 기반 고급 탐지',
      features: [
        '제조·센서·공정 데이터 내 이상 패턴 자동 식별',
        '설비 이상 및 품질 이상 조기 감지',
        'AI 기반 패턴 학습 및 실시간 알림',
      ],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: '빅데이터 분석 및 상관관계',
      description: '주요 변수 간 상관분석, 트렌드 패턴 탐색',
      features: [
        '품질·설비·환경 데이터 등 다변량 분석',
        '핵심 영향 요인 도출 및 시각화',
        '데이터 기반 의사결정 지원',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: '예측모델 구축',
      description: 'ARIMA, XGBoost, LSTM 등 AI/ML 알고리즘 활용',
      features: [
        '매출·수요·생산량·불량률 등 시계열 예측',
        '최적화 설계를 통한 예측 정확도 향상',
        'MAE, RMSE, R² 등 성능지표 제공',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Activity className="w-12 h-12 text-green-600" />,
      title: '결과 리포트 및 코드 제공',
      description: '모델 성능지표 포함 완성형 결과물',
      features: [
        '시각화 리포트 (5~7p) 제공',
        'Python/R 소스코드 + 결과 데이터 전달',
        '전문가 해석 및 개선 제안 포함',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
              <BarChart3 className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-gray-700">서비스 범위</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              전 과정 데이터 컨설팅
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              분석 결과를 넘어서, <span className="font-bold text-purple-600">'이 데이터를 어떻게 활용할지'</span>까지 함께 제시합니다
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon with Gradient Background */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors group-hover:gap-3"
                >
                  자세히 보기
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
