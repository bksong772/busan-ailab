export default function Footer() {
  return (
    <footer className="border-t border-[#2A2A35] py-10 px-4 sm:px-6 pb-28 sm:pb-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <p className="text-lg font-bold mb-1">
              부산<span className="text-[#3B82F6]">AI랩</span>
            </p>
            <p className="text-sm text-[#F5F5F5]/40 mb-1">운영: 부산AI코딩스쿨 운영팀</p>
            <p className="text-sm text-[#F5F5F5]/40">
              부산광역시 금정구 금정로 63-1 청년창조발전소 4층
            </p>
          </div>

          <div className="flex gap-6 text-sm text-[#F5F5F5]/50">
            <a
              href="https://busanaicodingschool.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition-colors"
            >
              부산AI코딩스쿨
            </a>
            <a
              href="https://blog.naver.com/rlaworlawo321"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition-colors"
            >
              블로그
            </a>
            <a
              href="https://pf.kakao.com/_KZGNb/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F5F5] transition-colors"
            >
              카카오 상담
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#2A2A35]">
          <p className="text-xs text-[#F5F5F5]/20 leading-relaxed mb-4">
            부산AI랩은 부산·울산·경남(부울경) 기업·공공기관·소상공인 대상 AI실무교육·AX교육·AI업무자동화·AX자동화 전문 교육 브랜드입니다.
            AI콘텐츠자동화, AI챗봇구축, AI홈페이지제작, AX실무교육 등 교육 당일 결과물이 완성되는 실무 중심 프로그램을 운영합니다.
          </p>
          <p className="text-xs text-[#F5F5F5]/25 text-center">
            © 2026 부산AI랩 · 부산AI코딩스쿨 운영팀. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
