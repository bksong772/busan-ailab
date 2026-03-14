export interface StaticCase {
  id: string;
  title: string;
  summary: string;
  link: string | null;
  image: string | null;
  target: "기관" | "개인";
  sortOrder: number;
}

export const staticCases: StaticCase[] = [
  // 기관 사례
  {
    id: "s-org-1",
    title: "부산대 환경공학과 · 대학원생 · AI 온실가스 예측 모델",
    summary: "온실가스 데이터를 AI로 예측하는 모델을 직접 만든 대학원 실습",
    link: "https://blog.naver.com/rlaworlawo321/223823741975",
    image: "org-01.png",
    target: "기관",
    sortOrder: 1,
  },
  {
    id: "s-org-2",
    title: "부산인재개발원 · 공무원 · AI 로봇코딩 실습",
    summary: "비전공 공무원이 AI 로봇을 직접 코딩한 하루",
    link: "https://blog.naver.com/rlaworlawo321/224107742588",
    image: "org-02.png",
    target: "기관",
    sortOrder: 2,
  },
  {
    id: "s-org-3",
    title: "경남테크노파크 · 코딩강사 대상 · 블록코딩 교육방법론",
    summary: "강사들이 수업 후 바로 써먹은 블록코딩 커리큘럼",
    link: "https://blog.naver.com/rlaworlawo321/223314180434",
    image: "org-03.png",
    target: "기관",
    sortOrder: 3,
  },
  {
    id: "s-org-4",
    title: "한국주택금융공사 · 신입직원 · 파이썬 금융데이터 분석",
    summary: "금융 데이터를 엑셀 대신 파이썬으로 분석한 신입직원 연수",
    link: "https://blog.naver.com/rlaworlawo321/223783623712",
    image: "org-04.png",
    target: "기관",
    sortOrder: 4,
  },
  {
    id: "s-org-5",
    title: "부산대 · 대학원생 · 머신러닝·딥러닝 실습형 과정",
    summary: "직접 코딩하는 실습형 수업 방식",
    link: "https://blog.naver.com/rlaworlawo321/223223947101",
    image: "org-05.png",
    target: "기관",
    sortOrder: 5,
  },
  {
    id: "s-org-6",
    title: "부산대 환경공학과 · 학부·대학원생 · AI 드론 코딩",
    summary: "드론을 직접 코딩해서 날린 환경공학과 학생들의 AI 실습",
    link: "https://blog.naver.com/rlaworlawo321/223680002320",
    image: "org-06.png",
    target: "기관",
    sortOrder: 6,
  },
  // 개인 사례
  {
    id: "s-per-1",
    title: "비전공자 웹 MVP 제작: 아이디어를 실제 서비스 구조로 구현",
    summary: "아이디어 단계에서 실제 동작하는 웹 MVP로 구현",
    link: "https://blog.naver.com/rlaworlawo321/224150031291",
    image: "personal-02.png",
    target: "개인",
    sortOrder: 1,
  },
  {
    id: "s-per-2",
    title: "개인 업무 자동화와 웹 연동으로 생산성 개선",
    summary: "개인 업무 흐름에 맞춰 자동화와 웹을 연동",
    link: null,
    image: "personal-03.png",
    target: "개인",
    sortOrder: 2,
  },
  {
    id: "s-per-3",
    title: "n8n으로 엑셀 반복 업무 자동화 설계",
    summary: "반복되던 엑셀 업무를 자동화해 업무 시간 단축",
    link: null,
    image: "personal-04.png",
    target: "개인",
    sortOrder: 3,
  },
  {
    id: "s-per-4",
    title: "바이브코딩과 AI Agent를 활용한 AI챗봇 교육",
    summary: "RAG 기반으로 실무자가 직접 AI Agent를 설계·구현",
    link: "https://blog.naver.com/rlaworlawo321/224173833821",
    image: "personal-05.png",
    target: "개인",
    sortOrder: 4,
  },
  {
    id: "s-per-5",
    title: "바이브코딩을 활용한 자동견적 프로그램 제작",
    summary: "자동 견적프로그램 제작 후 PDF 자동생성 및 노션 DB 구축",
    link: "https://blog.naver.com/rlaworlawo321/224193754327",
    image: "personal-06.png",
    target: "개인",
    sortOrder: 5,
  },
];
