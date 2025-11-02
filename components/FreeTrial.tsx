'use client'

import { useState } from 'react'
import { Rocket, CheckCircle, Clock, Users, Shield, Zap, ArrowRight, ExternalLink } from 'lucide-react'

export default function FreeTrial() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: '14일 무료 체험',
      description: '신용카드 등록 없이 모든 기능 사용 가능'
    },
    {
      icon: <Zap className="w-6 h-6 text-purple-600" />,
      title: '즉시 시작',
      description: '회원가입 후 바로 플랫폼 사용 시작'
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: '1:1 온보딩 지원',
      description: '전담 매니저가 플랫폼 사용법 안내'
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-600" />,
      title: '데이터 보안',
      description: '기관 데이터 암호화 및 안전한 보관'
    },
  ]

  const steps = [
    {
      number: '1',
      title: '무료 체험 신청',
      description: '아래 버튼을 클릭하여 체험 신청서 작성'
    },
    {
      number: '2',
      title: '계정 생성',
      description: '기관 정보 입력 및 계정 활성화'
    },
    {
      number: '3',
      title: '플랫폼 사용',
      description: '14일간 모든 기능 무제한 사용'
    },
    {
      number: '4',
      title: '도입 검토',
      description: '체험 후 정식 도입 여부 결정'
    },
  ]

  return (
    <section id="trial" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-full shadow-md mb-4">
              <Rocket className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">무료 체험</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="gradient-text">14일 무료 체험</span>으로<br />
              플랫폼을 직접 경험하세요
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              신용카드 등록 없이 TEXNOVA의 모든 기능을 무료로 사용해보실 수 있습니다
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border-2 border-gray-100 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white mb-16 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  지금 바로 시작하세요
                </h3>
                <p className="text-lg opacity-90 mb-6">
                  14일 동안 TEXNOVA의 모든 프리미엄 기능을 무료로 체험하고,
                  기관에 가장 적합한 솔루션인지 직접 확인해보세요.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>신용카드 등록 불필요</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>자동 결제 전환 없음</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>전담 매니저 1:1 지원</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="bg-white rounded-xl p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                    무료 체험 신청하기
                  </h4>

                  {/* 무료 체험 링크 - 나중에 실제 링크로 교체 */}
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Rocket className="w-6 h-6" />
                      무료 체험 시작하기
                      <ExternalLink className="w-5 h-5" />
                    </span>
                  </a>

                  <p className="text-center text-sm text-gray-500">
                    * 기관 정보 입력 후 즉시 사용 가능
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12 text-center">
              무료 체험 진행 절차
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4 shadow-lg">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-purple-300 mx-auto -ml-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              자주 묻는 질문
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-purple-600">Q.</span>
                  <span>체험 기간 후 자동으로 결제되나요?</span>
                </h4>
                <p className="text-gray-600 text-sm ml-6">
                  아니요. 신용카드 정보를 입력받지 않으며, 체험 기간 종료 후 자동 결제가 진행되지 않습니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-purple-600">Q.</span>
                  <span>모든 기능을 사용할 수 있나요?</span>
                </h4>
                <p className="text-gray-600 text-sm ml-6">
                  네. 14일 동안 TEXNOVA의 모든 프리미엄 기능을 제한 없이 사용하실 수 있습니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-purple-600">Q.</span>
                  <span>온프레미스 환경에서도 체험 가능한가요?</span>
                </h4>
                <p className="text-gray-600 text-sm ml-6">
                  체험은 클라우드 환경에서 진행되며, 온프레미스 도입 시 별도 데모 환경을 구성해드립니다.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h4 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-purple-600">Q.</span>
                  <span>기술 지원이 제공되나요?</span>
                </h4>
                <p className="text-gray-600 text-sm ml-6">
                  네. 전담 매니저가 배정되어 플랫폼 사용법 안내 및 기술 지원을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
