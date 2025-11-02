'use client'

import { Mail, MapPin, Phone, Award } from 'lucide-react'
import { useState } from 'react'
import ContactModal from './ContactModal'

export default function Footer() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  return (
    <>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <footer id="contact" className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white pb-24">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  HAETAE SYSTEM
                </span>
              </h3>
              <p className="text-gray-300 mb-4 text-lg">
                해태시스템 (HAETAE SYSTEM)
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                AI·ESG·데이터 기반 산업혁신 컨설팅 기업
                <br />
                스마트 산업 컨설팅 전문기업으로 AI, 빅데이터, ESG, ISO 컨설팅을 통해
                <br />
                기업의 디지털 전환(DX)과 지속가능경영(ESG)을 실현합니다
              </p>

              {/* Platform Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span className="text-sm font-bold">설립 2024년 · 춘천 본사 · 컨소시엄 5명</span>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">문의 및 연락</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:jakobcc@naver.com"
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-purple-800 rounded-lg flex items-center justify-center group-hover:bg-purple-700 transition-colors flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">이메일 문의</span>
                      <span className="text-xs text-gray-400">jakobcc@naver.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:070-8027-4653"
                    className="flex items-start gap-3 text-gray-300 hover:text-white transition-colors group"
                  >
                    <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">전화 상담</span>
                      <span className="text-xs text-gray-400">070-8027-4653</span>
                      <span className="text-xs text-gray-400">010-7657-3366</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-gray-300">
                    <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm">본사 위치</span>
                      <span className="text-xs text-gray-400">강원특별자치도 춘천시</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mb-8"></div>

          {/* Core Services */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">AI·빅데이터 분석</h5>
              <p className="text-gray-400 text-sm">Python·R 기반 예측모델 구축</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">ESG 컨설팅</h5>
              <p className="text-gray-400 text-sm">지속가능경영 자문·보고서 작성</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">ISO 인증 컨설팅</h5>
              <p className="text-gray-400 text-sm">9001·14001·45001·27001 인증</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h5 className="font-bold text-lg mb-2">IT·AI 교육</h5>
              <p className="text-gray-400 text-sm">실무 중심 AI·Python 교육</p>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              AI + ESG 융합 컨설팅으로 기업의 경쟁력을 강화합니다
            </p>

            {/* Service Notice */}
            <div className="max-w-2xl mx-auto mb-6 bg-white/10 border border-white/20 rounded-lg p-4">
              <p className="text-xs text-gray-300">
                <span className="font-semibold text-white">※ 컨설팅 문의:</span> 공공·기업 프로젝트 및 맞춤형 컨설팅 상담을 원하시면 이메일 또는 전화로 문의주세요.
              </p>
            </div>

            <p className="text-gray-500 text-sm">
              © 2024 HAETAE SYSTEM (해태시스템). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

      {/* Fixed CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 py-4 shadow-2xl z-40 border-t-2 border-white/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-bold mb-0.5">컨설팅 문의</h4>
              <p className="text-xs opacity-90">AI·ESG·ISO 컨설팅 및 프로젝트 문의를 남겨주세요</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:070-8027-4653"
                className="px-6 py-2.5 bg-white text-purple-600 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap flex items-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                전화 상담
              </a>
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="px-6 py-2.5 bg-white/90 text-gray-700 rounded-full font-bold hover:scale-105 transition-all duration-300 shadow-xl whitespace-nowrap flex items-center gap-2 text-sm"
              >
                <Mail className="w-4 h-4" />
                이메일 문의
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
