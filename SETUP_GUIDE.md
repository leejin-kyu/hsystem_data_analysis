# TEXNOVA 랜딩페이지 설정 가이드

## 🔗 무료 체험 링크 설정

무료 체험 링크를 설정하려면 다음 파일들을 수정하세요:

### 1. FreeTrial 컴포넌트 (`components/FreeTrial.tsx`)

**60번째 줄** 근처에서 다음 부분을 찾으세요:

```tsx
<a
  href="#"  // ← 여기를 실제 무료 체험 페이지 URL로 변경
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-bold text-lg text-center hover:shadow-xl hover:scale-105 transition-all duration-300 mb-4"
>
```

**변경 예시:**
```tsx
<a
  href="https://app.texnova.com/trial"  // 실제 무료 체험 페이지 URL
  target="_blank"
  rel="noopener noreferrer"
  ...
>
```

### 2. PlatformDemo 컴포넌트 (`components/PlatformDemo.tsx`)

**114번째 줄** 근처에서 다음 부분을 찾으세요:

```tsx
<a
  href="#trial"  // ← 무료 체험 섹션으로 스크롤하거나, 외부 링크로 변경 가능
  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 w-fit"
>
  <Play className="w-5 h-5" />
  무료 체험 시작하기
</a>
```

**외부 링크로 변경하려면:**
```tsx
<a
  href="https://app.texnova.com/trial"
  target="_blank"
  rel="noopener noreferrer"
  ...
>
```

## 📸 플랫폼 스크린샷 추가

### 1. 이미지 준비

다음 4개의 스크린샷을 준비하세요:

- `dashboard.png` - 대시보드 화면
- `analysis.png` - 텍스트 분석 화면
- `network.png` - 네트워크 분석 화면
- `visualization.png` - 시각화 화면

**권장 사양:**
- 형식: PNG
- 크기: 1920x1080px (16:9 비율)
- 용량: 각 파일 2MB 이하

### 2. 이미지 저장 위치

```
C:\Users\leeji\Desktop\texnova-landing\public\demo\
```

위 폴더에 4개의 이미지 파일을 저장하세요.

### 3. 코드 수정 (선택사항)

`components/PlatformDemo.tsx` 파일에서 이미지 경로가 올바르게 설정되어 있는지 확인:

```tsx
const features = [
  {
    id: 'dashboard',
    name: '대시보드',
    image: '/demo/dashboard.png', // ✓ 올바른 경로
    ...
  },
  ...
]
```

### 4. 이미지를 실제로 표시하려면

`components/PlatformDemo.tsx`의 **141-161번째 줄**에서 주석 처리된 Image 컴포넌트를 활성화하세요:

**현재 (Placeholder):**
```tsx
<div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
  {/* Placeholder 내용 */}
</div>
```

**변경 후 (실제 이미지):**
```tsx
<Image
  src={features[activeTab].image}
  alt={features[activeTab].title}
  fill
  className="object-cover"
/>
```

## 🎥 데모 영상 추가

### 1. 영상 준비

- YouTube, Vimeo 등에 플랫폼 데모 영상 업로드
- 임베드 URL 복사

### 2. 코드 수정

`components/PlatformDemo.tsx`의 **173-191번째 줄**에서 iframe 코드를 활성화:

```tsx
<iframe
  className="w-full h-full"
  src="YOUR_VIDEO_URL"  // ← YouTube 임베드 URL로 변경
  title="TEXNOVA Platform Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

**YouTube 예시:**
```tsx
src="https://www.youtube.com/embed/VIDEO_ID"
```

## 🚀 배포 전 체크리스트

- [ ] 무료 체험 링크 설정 완료
- [ ] 플랫폼 스크린샷 4장 추가
- [ ] 데모 영상 추가 (선택사항)
- [ ] 연락처 정보 확인
- [ ] Google Calendar 링크 확인
- [ ] 모든 링크 테스트 완료

## 📝 추가 수정이 필요한 부분

### 연락처 정보
`components/Footer.tsx`에서 이메일, 전화번호 등을 실제 정보로 변경하세요.

### Google Calendar 링크
여러 컴포넌트에 Google Calendar 링크가 있습니다. 모두 동일한 링크를 사용하고 있는지 확인하세요:
- `components/HeroSection.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`

## 💡 도움이 필요하신가요?

문제가 발생하면 각 파일의 주석을 참고하거나, 개발자에게 문의하세요.
