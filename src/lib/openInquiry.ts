// 문의 모달 열기. type을 넘기면 모달의 문의유형이 해당 값으로 프리셋된다.
// (예: openInquiry("AX 컨설팅·업무 자동화 의뢰") → 모달이 컨설팅 유형으로 열림)
export function openInquiry(type?: string) {
  document.dispatchEvent(new CustomEvent("openInquiry", { detail: { type } }));
}
