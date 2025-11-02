'use client'

import { Factory, TrendingUp, Users, DollarSign, CheckCircle, Clock, FileText } from 'lucide-react'

export default function Projects() {
  const targetAudience = [
    {
      icon: <Factory className="w-12 h-12 text-blue-600" />,
      title: '제조·생산 기업',
      description: '공정 이상 탐지 및 품질 개선',
      needs: [
        '불량률 감소가 필요한 기업',
        '설비 예지보전이 필요한 현장',
        '생산 효율 최적화 추구',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      title: '스타트업·성장기업',
      description: '데이터 기반 예측모델 구축',
      needs: [
        '매출·고객 데이터 분석 필요',
        '수요 예측으로 재고 최적화',
        '데이터 기반 경영 추진',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: '공공기관·민간기업',
      description: '데이터 기반 의사결정 체계 구축',
      needs: [
        '정부지원사업 수행 기업',
        '스마트팩토리·데이터바우처',
        'DX(디지털 전환) 추진 기관',
      ],
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  const pricing = [
    {
      name: 'STANDARD',
      description: '단일 예측모델 + 기본 분석',
      price: '300,000원',
      duration: '3일',
      revisions: '1회',
      features: [
        '단일 변수 예측모델 구축',
        '기본 데이터 전처리',
        '성능지표 분석 (MAE, RMSE)',
        '간단 리포트 (3~4p)',
        'Python 소스코드 제공',
      ],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'DELUXE',
      description: '다변량 예측 + 이상치 탐지',
      price: '700,000원',
      duration: '5일',
      revisions: '2회',
      features: [
        '다변량 예측모델 + 이상치 탐지',
        '상관분석 및 변수 선택',
        'AI 알고리즘 최적화',
        '상세 리포트 (5~7p)',
        'Python/R 코드 + 결과 데이터',
      ],
      popular: true,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      name: 'PREMIUM',
      description: 'AI 통합 솔루션 + 전문가 협업',
      price: '2,500,000원',
      duration: '10일',
      revisions: '3회',
      features: [
        'AI 통합 분석 솔루션',
        '전문가 협업 및 컨설팅',
        '맞춤형 모델 설계',
        '전문 리포트 (10p+)',
        '지속 지원 및 모니터링',
      ],
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* 추천 대상 Section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md mb-4">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">추천 대상</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <span className="gradient-text">이런 기업에 추천합니다</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                데이터 기반 의사결정으로 경쟁력을 확보하고 싶은 모든 기업
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {targetAudience.map((target, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${target.gradient} mb-6`}>
                    <div className="text-white">
                      {target.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {target.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-6">
                    {target.description}
                  </p>

                  <div className="space-y-2">
                    {target.needs.map((need, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 가격 정보 Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full shadow-md mb-4">
                <DollarSign className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-semibold text-purple-700">가격 안내</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                투명한 가격, 명확한 결과
              </h3>
              <p className="text-lg text-gray-600">
                모든 패키지 세금계산서 발행 가능 · 크몽 수수료(4.5%) 별도
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {pricing.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 ${
                    plan.popular
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white ring-4 ring-purple-300 scale-105'
                      : 'bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200'
                  } hover:shadow-xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold">
                        인기
                      </span>
                    </div>
                  )}

                  <h4 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h4>
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <div className={`text-3xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-purple-600'}`}>
                      {plan.price}
                    </div>
                    <div className={`flex items-center gap-4 text-sm ${plan.popular ? 'text-purple-100' : 'text-gray-600'}`}>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        작업 {plan.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        수정 {plan.revisions}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-yellow-300' : 'text-green-500'}`} />
                        <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 서비스 제공 절차 */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                서비스 제공 절차
              </h4>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: '1', title: '데이터 확인', desc: '무료 상담 및 분석 목적 협의' },
                  { step: '2', title: '전처리 & 설계', desc: '데이터 전처리 및 알고리즘 설계' },
                  { step: '3', title: '모델 개발', desc: '예측모델 개발 및 시뮬레이션' },
                  { step: '4', title: '결과 제공', desc: '리포트 및 개선 제안 제공' },
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                      {item.step}
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">{item.title}</h5>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-gray-600 mb-4">
                AI 예측모델링으로 데이터 기반 경영 혁신을 시작하세요
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:jakobcc@naver.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  📧 jakobcc@naver.com
                </a>
                <a
                  href="tel:070-8027-4653"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                >
                  📞 070-8027-4653
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
