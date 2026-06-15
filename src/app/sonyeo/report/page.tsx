/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import styles from "./styles.module.css";

export const metadata: Metadata = {
  title: "소녀방앗간 AX 컨설팅 최종 보고서",
  description:
    "5/27 AX컨설턴트 최종 성과공유회 발표 자료 — 진단·분석·설계·실행·확장 5단계 구조로 정리한 소녀방앗간 케이터링 P1+P2 트랙 6주 결과 보고서.",
  robots: { index: false, follow: false },
};

const STAGES = [
  { num: "01", name: "DIAGNOSE", ko: "진단", href: "#stage-01" },
  { num: "02", name: "ANALYZE", ko: "분석", href: "#stage-02" },
  { num: "03", name: "DESIGN", ko: "설계", href: "#stage-03" },
  { num: "04", name: "EXECUTE", ko: "실행", href: "#stage-04" },
  { num: "05", name: "SCALE", ko: "확장", href: "#stage-05" },
];

export default function SonyeoReportPage() {
  return (
    <div className={styles.body}>
      <article className={styles.page}>
        {/* ============ HERO ============ */}
        <header className={styles.hero}>
          <span className={styles.heroBadge}>AX (AI Transformation) 컨설턴트 1기 · 최종 보고서</span>
          <h1 className={styles.heroTitle}>
            소녀방앗간 케이터링 AX 6주 트랙
          </h1>
          <p className={styles.heroSubtitle}>
            대표님의 첫 약속 <span className={styles.highlight}>"부티크적인 방식을 유지하면서 생산성을 높이고 싶다"</span> — 6주 동안 이 한 줄을 지키려 했다.
          </p>
          <p style={{ fontSize: 12, color: "#888", fontStyle: "italic", margin: "-8px 0 22px", letterSpacing: "-0.005em" }}>
            ※ 부티크 = 매번 고객 맞춤으로 제안하는 소수 프리미엄 1:1 응대 방식 (대량 표준화의 반대)
          </p>
          <dl className={styles.heroMeta}>
            <div>
              <dt>CLIENT</dt>
              <dd>소녀방앗간 (방앗간컴퍼니) · 김민영 대표</dd>
            </div>
            <div>
              <dt>CONSULTANTS</dt>
              <dd>송병근 · 김소연 · 안재은</dd>
            </div>
            <div>
              <dt>PERIOD</dt>
              <dd>2026-04-22 ~ 2026-05-27 (약 6주)</dd>
            </div>
            <div>
              <dt>REPORTING</dt>
              <dd>2026-05-27 (수) 10:00 / 와룡 사옥</dd>
            </div>
          </dl>
        </header>

        {/* ============ 6-WEEK TIMELINE ============ */}
        <div className={styles.timeline} aria-label="6주 컨설팅 타임라인">
          <div className={styles.timelineStep}>
            <div className={styles.timelineDate}>4·22 수</div>
            <div className={styles.timelineTitle}>킥오프 인터뷰</div>
            <div className={styles.timelineDesc}>서울 매장 + 유디임팩트 90분<br/>4가지 관점 · 6대 병목</div>
          </div>
          <div className={styles.timelineStep}>
            <div className={styles.timelineDate}>4·29 수</div>
            <div className={styles.timelineTitle}>워크샵 #1</div>
            <div className={styles.timelineDesc}>대표 송부본 v3<br/>P1/P2 제안서</div>
          </div>
          <div className={styles.timelineStep}>
            <div className={styles.timelineDate}>5·8 금</div>
            <div className={styles.timelineTitle}>통화 30분</div>
            <div className={styles.timelineDesc}>P1/P2 확정<br/>알림톡 #2 발의</div>
          </div>
          <div className={styles.timelineStep}>
            <div className={styles.timelineDate}>5·13 수</div>
            <div className={styles.timelineTitle}>PoC 가동 (개념 검증판)</div>
            <div className={styles.timelineDesc}>v3.6.2 빌드<br/>5단계 화면</div>
          </div>
          <div className={`${styles.timelineStep} ${styles.timelineStepNow}`}>
            <div className={styles.timelineDate}>5·27 수</div>
            <div className={styles.timelineTitle}>최종 발표</div>
            <div className={styles.timelineDesc}>풀가동 진입선<br/>인계 1시간</div>
          </div>
        </div>

        {/* ============ EXEC SUMMARY ============ */}
        <section className={styles.execWrap}>
          <div className={styles.execCard}>
            <span className={styles.execTag}>FINDING — 진단</span>
            <h3>케이터링이 진짜 보석이었다</h3>
            <ul>
              <li>
                <strong>매출 40%</strong> (12억/30억) · 수익률 매장 <strong>2배</strong> · 재구매 <strong>80%</strong> · 전화 전환 <strong>95%+</strong>
              </li>
              <li>
                <strong>확장의 진짜 병목 = 사람</strong> — 견적·상담·정리 전 과정이 대표 + 팀 리더 단 <strong>2인</strong>에 집중
              </li>
              <li>
                <span className={styles.highlight}>부티크 = 전화 상담</span> — 전화는 그대로 두고, 그 전·후 수작업만 자동화로
              </li>
            </ul>
          </div>
          <div className={`${styles.execCard} ${styles.execCardInvert}`}>
            <span className={styles.execTag}>ACTION — 결과</span>
            <h3>외부 솔루션 도입 0건 · 운영비 월 1,000원</h3>
            <ul>
              <li>
                <strong>P1 자동 연동</strong> — 신청 인지 3일 → 즉시 / 시트 입력 월 10h → 0h
              </li>
              <li>
                <strong>P2 견적서 웹화 + AI 인사이트</strong> — 견적 작성 2h → 5~10분 (89% 단축)
              </li>
              <li>
                <strong>1건 처리 1h → 20분 / 인계 1시간</strong> — 외부 가입·결제 0건
              </li>
            </ul>
          </div>
        </section>

        {/* ============ 5-STAGE FLOW (sticky nav) ============ */}
        <nav className={styles.flow} aria-label="5단계 보고서 네비게이션">
          {STAGES.map((s) => (
            <a key={s.num} href={s.href} className={styles.flowStep}>
              <span className={styles.num}>{s.num}</span>
              <span className={styles.name}>{s.name}</span>
              <span className={styles.ko}>{s.ko}</span>
            </a>
          ))}
        </nav>

        {/* ============ STAGE 01 — DIAGNOSE ============ */}
        <section id="stage-01" className={styles.section}>
          <header className={styles.secHeader}>
            <span className={styles.secNum}>01</span>
            <h2>DIAGNOSE — 진단</h2>
            <span className={styles.secTag}>"지금 무슨 일이 일어나고 있나?"</span>
          </header>
          <div className={styles.summary}>
            <strong>시장·고객·경쟁·기술 4가지 + 김민영 대표 인터뷰 (4/22 서울 매장 + 유디임팩트 90분 → 4/29 워크샵 → 5/8 통화 30분 → 5/12 통화 녹음 분석)</strong>으로 소녀방앗간 케이터링 사업 구조(BM)의 구조적 강점과 병목을 동시에 발견했다.
          </div>

          <h3 className={styles.subHeading}>핵심 발견 — 케이터링 사업 구조의 진짜 모습 <span style={{ fontSize: 11, color: "#C8A063", fontWeight: 600, marginLeft: 8 }}>★ = 발표 강조 5개</span></h3>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>지표</th>
                <th>수치</th>
                <th>의미</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>연 매출</td><td className={styles.metric}>30억 (2024)</td><td>3년 +82% 성장 후 +8.7%로 둔화</td></tr>
              <tr style={{ background: "#FFFAF0" }}><td><strong>★ 케이터링 비중</strong></td><td className={styles.metric}><strong>40% (12억)</strong></td><td>월 30건 · 월 6,000만원 / 1건 평균 250만원</td></tr>
              <tr style={{ background: "#FFFAF0" }}><td><strong>★ 케이터링 수익률</strong></td><td className={styles.metric}><strong>매장 대비 2배</strong></td><td>임대료 없음 — <strong>진짜 보석</strong></td></tr>
              <tr style={{ background: "#FFFAF0" }}><td><strong>★ 재구매율</strong></td><td className={styles.metric}><strong>80%</strong></td><td>마케팅 비용 거의 0 (바이럴/소개)</td></tr>
              <tr style={{ background: "#FFFAF0" }}><td><strong>★ 전화 상담 전환율</strong></td><td className={styles.metric}><strong>95%+</strong></td><td><strong>부티크 = 전화</strong> · 자동화 시 허들</td></tr>
              <tr style={{ background: "#FFFAF0" }}><td><strong>★ 케이터링 운영자</strong></td><td className={styles.metric}><strong>2명</strong></td><td>대표 + 10년차 팀 리더 (<strong>사람으로만 굴러감 = 확장 한계</strong>)</td></tr>
              <tr><td>누적 고객 DB</td><td className={styles.metric}>600건 (8년)</td><td>아임웹 — 검증된 자산</td></tr>
              <tr><td>1건 처리 시간</td><td className={styles.metric}>평균 1시간</td><td>견적 작성 30분~1h + 시트 정리 월 10h</td></tr>
            </tbody>
          </table>

          <h3 className={styles.subHeading}>사용된 도구</h3>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>4가지 관점</div>
              <div className={styles.cardTitle}>시장·고객·경쟁·기술 4가지</div>
              <div className={styles.cardDesc}>시장 / 고객 / 경쟁 / 기술 — 케이터링 사업 위치 검증</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>6개 영역</div>
              <div className={styles.cardTitle}>6대 구조적 병목 분석</div>
              <div className={styles.cardDesc}>공급망·케이터링 수주·상담·생산·콘텐츠·데이터 → <strong>상담·데이터 2개가 핵심</strong></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>CTS</div>
              <div className={styles.cardTitle}>숨은 비용 분석</div>
              <div className={styles.cardDesc}>Cost-Time-Service 관점에서 케이터링 1건 진짜 원가 분해</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>5/8 통화 질문지</div>
              <div className={styles.cardTitle}>대표님과 30분 사전 통화 (5/8)</div>
              <div className={styles.cardDesc}>컨설턴트가 대표님께 사전 송부한 27개 질문 — 우선순위 + 받을 자료 14종 도출</div>
            </div>
          </div>

          <h3 className={styles.subHeading}>대표님의 목소리</h3>
          <blockquote className={styles.quote}>
            지금 BM을 보면 케이터링이 수익률이 더 높겠네요 — 약 2배. 임대료가 없어서.
            <span className={styles.quoteAttribution}>김민영 대표 · 4/22 인터뷰</span>
          </blockquote>
          <blockquote className={styles.quote}>
            견적서를 다 너무 상세하게 작성해줘요. 어마무시한 시간이 많이 들어가서.
            <span className={styles.quoteAttribution}>김민영 대표 · 4/22 인터뷰</span>
          </blockquote>
          <blockquote className={styles.quote}>
            전화 상담 전에 언제 상담드린다는 알림톡 안내가 있으면 좋지 않을까.
            <span className={styles.quoteAttribution}>김민영 대표 · 자발 아이디어 #1 (5/8 통화)</span>
          </blockquote>
          <blockquote className={styles.quote} style={{ borderLeftColor: "#C8A063", background: "#FFFAF0" }}>
            <strong>부티크적인 방식을 유지하면서 생산성을 높이고 싶다.</strong> 매번 고객 맞춤으로 고려해서 제안드리는 — 그게 우리 부티크의 핵심이에요.
            <span className={styles.quoteAttribution}>김민영 대표 · 4/22 인터뷰 (★ 우리 6주 컨설팅의 모든 결정 기준)</span>
          </blockquote>
        </section>

        {/* ============ STAGE 02 — ANALYZE ============ */}
        <section id="stage-02" className={styles.section}>
          <header className={styles.secHeader}>
            <span className={styles.secNum}>02</span>
            <h2>ANALYZE — 분석</h2>
            <span className={styles.secTag}>"왜 그 일이 일어나고 있나?"</span>
          </header>
          <div className={styles.summary}>
            <strong>가이드북 3단계 중 Phase 3 (성장 동력 = 시스템 인프라화) 진입선</strong>으로 진단. 5가지 액션 분류(제거·축소·강화·창조·정직한 비범위)로 정리하면서, 컨설턴트가 흔히 빠지는 함정(외부 솔루션 도입·새 봇 빌드)을 의도적으로 <strong>제거(Eliminate)</strong>했다.
          </div>

          <h3 className={styles.subHeading}>Phase 판단 — AX 가이드북 3단계 (유디임팩트)</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 20 }}>
            <div style={{ background: "#FAFAF7", border: "1px solid #E8E4D8", padding: "14px 12px", borderRadius: 4, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>PHASE 1</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>비용 구조 정리</div>
              <div style={{ fontSize: 11, color: "#2D7D5F", fontWeight: 600 }}>✅ 이미 통과<br />(수익률 매장 2배)</div>
            </div>
            <div style={{ background: "#FAFAF7", border: "1px solid #E8E4D8", padding: "14px 12px", borderRadius: 4, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#888", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>PHASE 2</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>매출 성장</div>
              <div style={{ fontSize: 11, color: "#2D7D5F", fontWeight: 600 }}>✅ 이미 통과<br />(재구매 80%)</div>
            </div>
            <div style={{ background: "#1A1A1A", color: "#F5F5F0", border: "1px solid #1A1A1A", padding: "14px 12px", borderRadius: 4, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#E8C896", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 4 }}>PHASE 3 ⭐</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>성장 동력</div>
              <div style={{ fontSize: 11, color: "#E8C896", fontWeight: 600 }}>지금 진입선<br />(시스템 인프라화)</div>
            </div>
          </div>
          <div className={styles.impactCallout}>
            <div className={styles.impactLabel}>NOW</div>
            <div className={styles.impactText}>
              Phase 1·2 이미 통과 → 지금은 <span className={styles.highlight}>Phase 3 (성장 동력 = 시스템 인프라화) 진입선</span>
            </div>
          </div>

          <h3 className={styles.subHeading}>액션 5가지 분류 — 제거·축소·강화·창조·정직한 비범위 <span style={{ fontSize: 11, color: "#888", fontWeight: 500, marginLeft: 8 }}>※ AX 가이드북 (유디임팩트) 출처 — 컨설턴트가 한 결정을 5가지로: 안 한 것 / 줄인 것 / 살린 것 / 새로 만든 것 / 못 한 것 솔직히</span></h3>
          <div className={styles.errcGrid}>
            <div className={styles.errcCol}>
              <h4>E</h4>
              <div className={styles.errcKo}>제거 <span style={{ fontSize: 10, color: "#888", fontWeight: 500, display: "block", marginTop: 2 }}>= 안 한 것</span></div>
              <ul>
                <li>텔레그램 신규 봇</li>
                <li>외부 알림 솔루션 (Solapi/Bizppurio/NHN)</li>
                <li>자체 신청 폼 빌드 (B 옵션)</li>
              </ul>
            </div>
            <div className={styles.errcCol}>
              <h4>R</h4>
              <div className={styles.errcKo}>축소 <span style={{ fontSize: 10, color: "#888", fontWeight: 500, display: "block", marginTop: 2 }}>= 줄여낸 것</span></div>
              <ul>
                <li>시트 수기 입력 (월 10h→0h)</li>
                <li>견적 작성 (2h→5~10분)</li>
                <li>신청 인지 지연 (3일→즉시)</li>
              </ul>
            </div>
            <div className={styles.errcCol}>
              <h4>R</h4>
              <div className={styles.errcKo}>강화 <span style={{ fontSize: 10, color: "#888", fontWeight: 500, display: "block", marginTop: 2 }}>= 살려낸 것</span></div>
              <ul>
                <li>기존 아임웹 카카오 알림톡 인프라</li>
                <li>channel.io 옴니채널 통합</li>
                <li>구글 시트 누적 가치</li>
              </ul>
            </div>
            <div className={styles.errcCol}>
              <h4>C</h4>
              <div className={styles.errcKo}>창조 <span style={{ fontSize: 10, color: "#888", fontWeight: 500, display: "block", marginTop: 2 }}>= 새로 만든 것</span></div>
              <ul>
                <li>AI 인사이트 추출 (Claude Haiku)</li>
                <li>5단계로 진행하는 화면</li>
                <li>단계 자동 전환 (신규→통화→견적→발송)</li>
                <li>알림톡 #2·#3 + 채널 1:1</li>
              </ul>
            </div>
            <div className={`${styles.errcCol} ${styles.errcExcluded}`}>
              <h4>X</h4>
              <div className={styles.errcKo}>정직한 비범위 <span style={{ fontSize: 10, color: "#888", fontWeight: 500, display: "block", marginTop: 2 }}>= 못 한 것 솔직히</span></div>
              <ul>
                <li>신청→시트 <strong>직행</strong> 자동 (API 없음 — 운영자 paste + AI 파싱으로 우회, 90% 자동화 달성)</li>
                <li>견적 본문 자동 생성 (B2B 1:1 커스텀 영역)</li>
                <li>메뉴 200종 풀임포트 (6월 이후)</li>
              </ul>
            </div>
          </div>

          <h3 className={styles.subHeading}>핵심 과제 3대 병목 압축</h3>
          <ul className={styles.checkList}>
            <li><strong>상담 병목</strong> — 견적·상담을 대표+팀리더 2인이 독점 → 처리 가능한 케이스 수가 인적 한계로 묶임</li>
            <li><strong>데이터 병목</strong> — 8년 600건 누적 DB가 있지만 신청→시트 적재 수기, 월 10h 휘발성 작업</li>
            <li><strong>노하우 휘발</strong> — 전화 통화 인사이트(메뉴·단가·고객 니즈)가 머릿속 메모로만 존재 → 인계 불가 → 대표 의존 가중</li>
          </ul>
        </section>

        {/* ============ STAGE 03 — DESIGN ============ */}
        <section id="stage-03" className={styles.section}>
          <header className={styles.secHeader}>
            <span className={styles.secNum}>03</span>
            <h2>DESIGN — 설계</h2>
            <span className={styles.secTag}>"무엇을 어떻게 바꿀 것인가?"</span>
          </header>
          <div className={styles.summary}>
            <strong>두 트랙 동시 진행 — P1 (자동 연동) + P2 (견적서 웹화)</strong>으로 진짜 수익원인 케이터링의 시간·정확도 병목을 동시에 해소하는 바뀐 모습(To-Be) 흐름도. 4번의 피벗을 거치며 "외부 솔루션 도입 0건"이라는 원칙을 견지했다.
          </div>

          {/* CORE STRATEGY — 핵심 전략 */}
          <div style={{ background: "#FFF", border: "2px solid #C8A063", padding: "28px 32px", margin: "24px 0 36px", borderRadius: 4, textAlign: "center" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.2em", fontWeight: 800, color: "#C8A063", marginBottom: 14 }}>CORE STRATEGY — 핵심 전략</div>
            <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.45, letterSpacing: "-0.02em", marginBottom: 18 }}>
              <span className={styles.highlight}>부티크는 손대지 않는다.</span><br />전후만 시스템화한다.
            </div>
            <p style={{ fontSize: 15, color: "#555", fontStyle: "italic", marginBottom: 24, lineHeight: 1.6 }}>
              "잘 되는 것은 그대로,<br />시간 새는 곳만 자동화."
            </p>
            <pre style={{ background: "#FAFAF7", padding: "18px 16px", fontFamily: "'SF Mono', Menlo, monospace", fontSize: 11, lineHeight: 1.8, borderRadius: 4, overflowX: "auto", whiteSpace: "pre", textAlign: "left", marginBottom: 14, color: "#1A1A1A" }}>
{`신청 → [① 알림톡 자동] → [② AI 정리] → `}<span style={{ background: "#FFE680", color: "#1A1A1A", fontWeight: 800, padding: "1px 6px", borderRadius: 3 }}>{`【③ 전화 상담 ★ 사람만 ★】`}</span>{` → [④ 견적 자동] → [⑤ 메일 자동]
        └────── P1·P2 자동화 ──────┘                ↑ 부티크 강점 보존(95%+)                └── P1·P2 자동화 ──┘`}
            </pre>
            <p style={{ fontSize: 13, color: "#888", letterSpacing: "0.04em", fontWeight: 600 }}>병목 정면 해결 + 강점 무손상</p>
          </div>

          <h3 className={styles.subHeading}>4번의 피벗 — 추가가 아닌 제거의 설계</h3>
          <ol className={styles.pivotList}>
            <li>
              <strong>n8n ($20/월)</strong> → <strong>Apps Script (무료)</strong> · 김민영 대표가 이미 구글 시트를 쓰고 있음 → 그 위에 얹기
            </li>
            <li>
              <strong>텔레그램 신규 봇</strong> → <strong>기존 아임웹 카카오 알림톡</strong> · 4월 6건 이미 발송 중 확인 → 새 인프라 도입 X
            </li>
            <li>
              <strong>한 화면에 8개 기능 우겨넣음</strong> → <strong>순서대로 진행하는 5단계 화면 + 왼쪽 핵심 메뉴 3개</strong> · 사용자 입장으로 다시 검토해서 축소
            </li>
            <li>
              <strong>Web vs Desktop</strong> → <strong>Next.js + Vercel</strong> · 다중 디바이스·자동 업데이트·인계 1줄
            </li>
          </ol>

          <h3 className={styles.subHeading}>바뀐 모습 — 전체 흐름도 (To-Be 아키텍처)</h3>
          <pre className={styles.arch}>
{`[고객 신청 — 아임웹 입력폼]
    │
    ├─► 카카오 알림톡 #1 (운영진에게 알림)   ✅ 이미 작동
    └─► 카카오 알림톡 #2 (고객에게 자동응답)  ⭐ 자발 아이디어 1
            "3일 이내 전화상담 드리겠습니다"
            [카카오 채널 1:1 채팅] 버튼       ⭐ 자발 아이디어 2
    │
    ▼
[김민영 대표 전화 상담 + 폰 녹음]
    │
    ▼
┌──────── sonyeo-dashboard (웹 대시보드) ────────┐
│ ┌─ 왼쪽 메뉴 ┐ ┌─ 본 화면 ──────────────────┐ │
│ │ 신규 카운트 │ │ 주요 지표 4개 + 단계 진행 5개 │ │
│ │ 오늘 일감  │ │ ────────────────────────── │ │
│ │ 임박 Top3  │ │ 5단계로 순서대로 진행:       │ │
│ │ 고객 검색  │ │  ① 신청 접수 (AI 자동 정리)  │ │
│ └──────────┘ │  ② 시트 확인               │ │
│              │  ③ 전화 상담 (AI 자동 요약)  │ │
│              │  ④ 견적서 작성 (화면에서 바로)│ │
│              │  ⑤ 발송 (알림톡 #3 + 링크)   │ │
│              └────────────────────────────┘ │
└────────────────────────────────────────────┘
    │                  │                    │
    ▼                  ▼                    ▼
[고객관리 시트]    [AI 인사이트 시트]   [견적서 시트]
 13항목 자동       통화 내용 영구       17항목 자동
 (월 10h→0h)       보존                누적
    │
    ▼
[Gmail 자동 발송 (sobang@millcompany.co.kr)]
    + 카카오 알림톡 #3 ("견적서 도착했어요" + 링크)
    │
    ▼
[채널톡 통합 응대 — 카카오/네이버/이메일 한 화면에서]`}
          </pre>

          <h3 className={styles.subHeading}>사용한 도구</h3>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>웹 화면 (FRONTEND)</div>
              <div className={styles.cardTitle}>Next.js + Vercel</div>
              <div className={styles.cardDesc}><strong>웹사이트 만드는 도구</strong>. 대표님이 PC·모바일 어디서든 인터넷으로 접속해서 사용. Vercel에 올려놓으면 자동으로 항상 켜져 있음.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>자동화 (AUTOMATION)</div>
              <div className={styles.cardTitle}>Google Apps Script</div>
              <div className={styles.cardDesc}><strong>구글 시트 안에서 자동으로 일하는 도구</strong>. 신청 → 정리 → 메일 발송까지 사람 손 없이 처리. 별도 가입·비용 0원.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>AI</div>
              <div className={styles.cardTitle}>Claude Haiku 4.5</div>
              <div className={styles.cardDesc}><strong>통화 내용을 텍스트로 붙여넣으면 AI가 자동으로 16개 항목 정리</strong>. 사람이 메모 안 해도 됨. 월 약 ₩400.</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>알림</div>
              <div className={styles.cardTitle}>아임웹 카카오 알림톡</div>
              <div className={styles.cardDesc}><strong>이미 쓰시던 아임웹 카톡 알림 그대로</strong>. 신청 들어왔을 때(#1), 고객에게 자동응답(#2), 견적서 도착 알림(#3) 3종으로 활용.</div>
            </div>
          </div>
        </section>

        {/* ============ STAGE 04 — EXECUTE ============ */}
        <section id="stage-04" className={styles.section}>
          <header className={styles.secHeader}>
            <span className={styles.secNum}>04</span>
            <h2>EXECUTE — 실행</h2>
            <span className={styles.secTag}>"설계가 현장에서 작동하는가?" ⭐</span>
          </header>
          <div className={styles.summary}>
            <strong>5월 2주 P1 MVP 가동 → 5월 3주 P2 적용 → 5월 4주 효과 측정</strong>까지 4주간의 실측. v3.6.2 빌드 완성 · 70+ 빌드 변경 · 12+ 피드백 반영 · 95% 시연 준비.
          </div>

          <h3 className={styles.subHeading}>Before / After 실측 데이터 (전 단계) <span style={{ fontSize: 11, color: "#888", fontWeight: 500, marginLeft: 8 }}>※ PoC 환경 측정값 · 대표님 본격 실사용은 5/27 이후부터 누적</span></h3>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>단계</th>
                <th>BEFORE</th>
                <th>AFTER (v3.6.2)</th>
                <th>절감</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>신청 → 고객 인지</td><td>3일 (전화 받을 때)</td><td className={styles.metric}>즉시 (알림톡 #2)</td><td>100%</td></tr>
              <tr><td>신청 → 시트 적재 (16컬럼)</td><td>수기 5~10분</td><td className={styles.metric}>paste 1회 + AI 파싱 30초</td><td>90%</td></tr>
              <tr><td>통화 인사이트 정리</td><td>머릿속 메모 10분</td><td className={styles.metric}>Claude Haiku 자동 30초</td><td>95%</td></tr>
              <tr><td>견적 작성</td><td>30분~2시간</td><td className={styles.metric}>5~10분 (인라인 + 자동 채움)</td><td>89%</td></tr>
              <tr><td>견적 메일 발송</td><td>2일 이내</td><td className={styles.metric}>즉시 + 알림톡 #3</td><td>100%</td></tr>
              <tr style={{ background: "#FFFAF0" }}><td><strong>★ 고객관리 시트 정리</strong></td><td><strong>월 10h 수기</strong></td><td className={styles.metric}><strong>자동 (클릭 1초)</strong></td><td><strong>99%</strong></td></tr>
              <tr><td>인사이트 영구 보존</td><td>없음 (휘발)</td><td className={styles.metric}>AI인사이트_PoC full JSON</td><td>신규 가치</td></tr>
              <tr style={{ background: "#FFFAF0" }}>
                <td><strong>1건 처리 시간</strong></td>
                <td><strong>평균 1시간</strong></td>
                <td className={styles.metric}><strong>20분</strong></td>
                <td><strong>약 67%</strong></td>
              </tr>
            </tbody>
          </table>

          <h3 className={styles.subHeading}>실행 단계 — 수동 → 반자동 → 자동</h3>
          <table className={styles.dataTable}>
            <thead>
              <tr><th>Phase</th><th>시점</th><th>자동화 수준</th></tr>
            </thead>
            <tbody>
              <tr><td>수동</td><td>~4월</td><td>신청 → 전화 → 수기 시트 → 엑셀 견적서 → 이메일 (3~5일)</td></tr>
              <tr><td className={styles.metric}>반자동 (PoC)</td><td>5/13 코호트 러닝</td><td>신청 → 알림톡 #1 자동 + paste → AI 파싱 → AI 인사이트 → 인라인 견적 → 자동 발송 (즉시~1일)</td></tr>
              <tr><td className={styles.metric}>자동 (인계 후)</td><td>6월~</td><td>알림톡 #2·#3 카카오 심사 통과 + 단계 자동 전환 풀가동</td></tr>
            </tbody>
          </table>

          <h3 className={styles.subHeading}>운영 중인 솔루션</h3>
          <p style={{ fontSize: 14, marginBottom: 12 }}>
            <a className={styles.linkPill} href="https://sonyeo-dashboard.vercel.app" target="_blank" rel="noopener noreferrer">▸ sonyeo-dashboard.vercel.app</a>
            <a className={styles.linkPill} href="https://sonyeo-dashboard.vercel.app/guide.html" target="_blank" rel="noopener noreferrer">▸ 사용 가이드</a>
            <span style={{ fontSize: 12, color: "#888", marginLeft: 8 }}>(시연용 비번 0000 · 인계 시 김민영 대표 명의 1줄 교체)</span>
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.cardLabel}>화면 1 · 대표용</div>
              <div className={styles.cardTitle}>신청 현황 메인 화면</div>
              <div className={styles.cardDesc}>왼쪽 메뉴 (오늘 일감 · 임박 일정 · 고객 검색) + 가운데 신청 카드 + 단계별 진행 표시</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>화면 2 · 대표용</div>
              <div className={styles.cardTitle}>신청 접수 (붙여넣기)</div>
              <div className={styles.cardDesc}>아임웹에서 들어온 신청 내용을 텍스트로 붙여넣으면 AI가 <strong>30초 안에 16개 항목으로 자동 정리</strong></div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>화면 3 · 대표용</div>
              <div className={styles.cardTitle}>주문 상세 + 견적 작성</div>
              <div className={styles.cardDesc}><strong>AI가 통화 내용 자동 요약</strong> + 견적서는 화면에서 바로 편집 (구글 시트 안 열어도 됨)</div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardLabel}>화면 4 · 고객용 (공개)</div>
              <div className={styles.cardTitle}>고객이 받는 견적서 페이지</div>
              <div className={styles.cardDesc}>고객이 카톡 알림톡 링크 눌러 들어가는 견적서 화면. <strong>카톡 채널 1:1 채팅 버튼</strong> 포함</div>
            </div>
          </div>

          <h3 className={styles.subHeading}>운영 비용 vs 잠재 효과 (정직하게)</h3>
          <div className={styles.roiBox}>
            <div className={styles.roiLabel}>RUNNING COST · POTENTIAL VALUE</div>
            <div className={styles.roiBig}>
              운영비 월 1,000원 <span className={styles.ratio}>+ 잠재 절감 월 300만원</span>
            </div>
            <div className={styles.roiDesc}>
{`📊 실제 발생 비용 (이미 켜진 상태)
────────────────────────────────
n8n Cloud           ❌ 미사용 (Apps Script 무료로 대체)
Vercel              무료 (Hobby)
Apps Script         무료
Claude Haiku        ~400원 (월 ~30건 기준)
아임웹 알림톡       건당 9~12원 × 60건 ≈ ₩600
────────────────────────────────
합계                월 1,000원 미만 ⭐

📈 잠재 효과 (월 30건 풀가동 시 · 보수적 가정)
────────────────────────────────
1건당 절감          (1h → 20m) = 40분 (보수적)
            × 30건 = 1,200분 ≈ 20시간
시트 정리 환원      월 10h → 0h
────────────────────────────────
총 절감             약 30시간/월
시간당 10만원 환산 = 300만원/월
────────────────────────────────
잠재 ROI            300만원 / 1,000원 ≈ 3,000배 (보수적)

⚠️ 정직한 현재 상태 (2026-05-27 기준)
────────────────────────────────
- PoC = 반자동 단계 (대표 본격 사용은 아직 X)
- 카카오 알림톡 #2·#3 = 심사 진행 중
- 오늘 5/27이 "풀가동 진입선"
- 운영비 1,000원은 이미 발생 중 → 안 쓰셔도 추가 손실 0
- 쓰시면 위의 잠재 효과 100% 가능`}
            </div>
          </div>
        </section>

        {/* ============ STAGE 05 — SCALE ============ */}
        <section id="stage-05" className={styles.section}>
          <header className={styles.secHeader}>
            <span className={styles.secNum}>05</span>
            <h2>SCALE — 확장</h2>
            <span className={styles.secTag}>"담당자가 없어도 돌아가는가?"</span>
          </header>
          <div className={styles.summary}>
            <strong>인계 1시간 + 외부 가입 0건 + 컨설턴트 없어도 작동</strong> — 5/27에 시스템 비밀번호 한 줄만 김민영 대표 것으로 바꾸면 그 후로는 대표님 혼자서 운영 가능. 컨설턴트(송병근)가 권한을 빼도 시스템은 계속 잘 돌아감.
          </div>

          <h3 className={styles.subHeading}>인계할 자산 — 1시간 작업으로 대표님 명의 이전</h3>
          <ul className={styles.checkList}>
            <li><strong>구글 시트</strong> · 이미 김민영 대표 명의 ✅</li>
            <li><strong>자동화 스크립트 (Apps Script)</strong> · 구글 시트와 자동 연결돼서 시트 권한 따라 자동 이전 ✅</li>
            <li><strong>웹 대시보드 (Vercel)</strong> + 비밀번호·연결 정보 6개 → 김민영 대표 계정으로 이전 + 그중 1개(접속 비밀번호)만 새로 바꾸면 끝</li>
            <li><strong>코드 저장소 (GitHub)</strong> → 소녀방앗간 명의로 이전</li>
            <li><strong>아임웹 관리자</strong> sobang@millcompany.co.kr / 알림톡 #2·#3 양식 / 카카오 비즈채널 (이미 김민영 대표 명의)</li>
            <li><strong>외부 가입 0건</strong> — Solapi/Bizppurio/NHN/n8n/텔레그램 같은 거 하나도 안 씀</li>
          </ul>

          <h3 className={styles.subHeading}>자립 기준 (5/27 인계 완료 판정)</h3>
          <ul className={styles.checkList}>
            <li>시스템 비밀번호·계정 모두 김민영 대표 1인 소유 — 송병근이 권한 빼도 작동</li>
            <li>컨설턴트 없어도 운영 가능 — 비밀번호 1줄 바꾸면 자동 운영</li>
            <li>외부 가입 0건 — 신규 가입·결제 부담 없음</li>
            <li>8년 600건 고객 DB 보호 — 검증된 아임웹 결제 흐름 안 건드림</li>
            <li>"안 하는 영역" 솔직히 안내 → 약속 깨질 일 없음</li>
            <li>운영 비용 월 1,000원 미만 — 연 매출 30억의 0.00003%</li>
          </ul>

          <h3 className={styles.subHeading}>6월 이후 (약속 X, 가능성만)</h3>
          <table className={styles.dataTable}>
            <thead><tr><th>시점</th><th>액션</th><th>조건</th></tr></thead>
            <tbody>
              <tr><td className={styles.metric}>5/28~6/3</td><td>권한 회수 (송병근 멤버 제거 + 비밀번호 변경)</td><td>김민영 대표 도입 결정</td></tr>
              <tr><td>6월</td><td>카카오 알림톡 #2·#3 라이브 운영 (심사 통과 후) + 1차 효과 측정</td><td>자동</td></tr>
            </tbody>
          </table>
        </section>

        {/* ============ LESSON BOX — 6주에 느낀 것 (솔직히) ============ */}
        <div className={styles.honestyBox} style={{ borderColor: "#C8A063" }}>
          <div className={styles.honestyLabel} style={{ color: "#C8A063" }}>LESSON — 6주에 느낀 것 (솔직히)</div>
          <div className={styles.honestyTitle}>"좋은 것"과 "필요한 것" 사이의 간극</div>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "#2A2A2A", marginBottom: 16 }}>
            컨설턴트가 봤을 때 <strong>"좋은 도구"</strong>와 대표님이 당장 <strong>"필요한 도구"</strong>는 다를 수 있겠다는 걸 어렴풋이 느꼈습니다. 분석 도구로 좋은 것을 제시하기는 쉬웠지만, 그게 실제 운영에 들어가도록 만드는 것은 다른 문제였습니다.
          </p>
          <div className={styles.honestyTitle} style={{ fontSize: 16, marginTop: 8 }}>
            그 간극을 좁히는 방법은 — <span className={styles.highlight}>같은 사업군 케이스로 설득</span>?
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "#2A2A2A", marginBottom: 14 }}>
            같은 업종에서 실제로 작동하는 케이스를 보여주는 것이 가장 강력한 설득이지 않을까 — 이번 컨설팅을 하면서 어렴풋이 보였습니다. 추상적 가능성("이게 좋아요")보다 구체적 증거("저 사장님이 이렇게 쓰고 있어요")가 행동 변화를 만들 것 같습니다.
          </p>
          <p style={{ fontSize: 14, lineHeight: 1.75, color: "#2A2A2A", marginBottom: 18, background: "#FFFAF0", padding: "12px 16px", borderLeft: "3px solid #C8A063", borderRadius: 2 }}>
            <strong>단, 케이스가 아직 없으면?</strong> (AX 자체가 신사업이라 같은 사업군 케이스가 거의 없습니다) → <strong>우리가 첫 케이스를 만들고 다음 컨설턴트에게 넘기는 것</strong>이 우리 역할일 수도 있겠습니다. 이번 소녀방앗간 6주가 다른 사장님께 보여줄 케이스가 되었으면 좋겠습니다.
          </p>
          <div className={styles.honestyReason}>
            <strong>이번 6주에 느낀 것들 (솔직한 회고)</strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: 8, fontSize: 13.5, lineHeight: 1.7 }}>
              <li>① <strong>"도입했다" → "매일 쓴다"</strong>가 진짜 임팩트라는 걸 느꼈습니다. 시연 95% 완성은 끝이 아니라 시작점 — 대표님이 매일 손에 잡고 쓰는 행동이 생겨야 진짜 변화 (그래서 5/27 이후가 진짜 시작)</li>
              <li>② 컨설턴트의 역할은 <strong>"이게 답이다" 강요</strong>가 아니라 <strong>대표님이 부담 없이 "한 번 써볼까" 할 수 있는 환경</strong>을 만드는 것에 가까울지도 모르겠습니다 (안 써도 손해 없는 구조 + 한 번 써보면 효과 느낄 수 있는 구조)</li>
              <li>③ <strong>처음 우리가 제시한 좋은 도구들 (n8n·텔레그램 봇·자체 폼)</strong>이 4번 피벗 거치며 <strong>대표님이 이미 쓰시던 도구 (구글 시트·아임웹 카톡) 위에 얹는 방향</strong>으로 바뀌었습니다 — 이 6주 과정 자체가 "좋은 것 → 필요한 것" 좁히기였습니다</li>
              <li>④ 첫날 약속("부티크 유지하면서 생산성")을 잊지 않으려 한 6주였습니다 — 큰 변화보다 일관성을 지키려 했습니다</li>
              <li>⑤ <strong>잘 굴러가는 사업일수록 "획기적 변화"(시간·비용·성장 중 하나라도 압도적)가 없으면 도입 결심 어렵다</strong>는 걸 느꼈습니다 — 점진적 개선만으로는 결심이 안 됨 / 그래서 우리는 "시트 정리 월 10h→자동(99%)" + "1건 처리 1h→20분(67%)" 같은 큰 단축으로 답하려 했습니다</li>
            </ul>
          </div>
        </div>

        {/* ============ HONESTY BOX ============ */}
        <div className={styles.honestyBox}>
          <div className={styles.honestyLabel}>UNDONE — 우리가 의도적으로 안 한 것</div>
          <div className={styles.honestyTitle}>"이걸 안 했기에" 외부 솔루션 도입 0건 · 8년 600건 DB 보호</div>
          <ul className={styles.honestyList}>
            <li><strong>신청 → 시트 자동 적재</strong> — 아임웹 v2 API에 입력폼 endpoint 영구 없음 (정직 검증)</li>
            <li><strong>견적 본문 자동 생성</strong> — B2B 1:1 커스터마이징은 사람이 해야 함</li>
            <li><strong>메뉴 200종 풀임포트</strong> — 6월 이후 조건부 (현재 우선순위 낮음)</li>
            <li><strong>자체 신청 폼 빌드 (B 옵션)</strong> — 8년 600건 검증된 아임웹 결제 흐름 보호</li>
            <li><strong>외부 알림 솔루션 (Solapi/Bizppurio/NHN/n8n)</strong> — 기존 아임웹·구글 인프라로 충분</li>
          </ul>
          <div className={styles.honestyReason}>
            <strong>왜 정직하게 말하는가</strong>: 컨설턴트가 "다 됩니다" 단언하면 운영 시작 후 약속 깨짐 → 신뢰 무너짐. "안 한 것"을 명확히 함 → 대표가 시스템 한계를 알고 운영 → 약속 깨질 일 0.
          </div>
        </div>

        {/* ============ IMPACT ONE-LINER ============ */}
        <div className={styles.impactCallout}>
          <div className={styles.impactLabel}>발표 임팩트 한 줄</div>
          <div className={styles.impactText}>
            n8n $20 → Apps Script 무료. 텔레그램 새 봇 → 기존 카카오 알림톡. 자체 폼 → 8년 600건 DB 보호.<br /><br />
            <strong>투입: 4번 피벗을 거쳐 <span className={styles.highlight}>외부 솔루션 도입 0건</span> · <span className={styles.highlight}>운영비 월 1,000원</span> · <span className={styles.highlight}>인계 1시간</span></strong><br />
            <strong>효과: <span className={styles.highlight}>시트 정리 월 10h → 자동(99%)</span> · <span className={styles.highlight}>1건 처리 1h → 20분(67%)</span> · <span className={styles.highlight}>견적 작성 89% 단축</span></strong>
          </div>
        </div>

        {/* ============ CLOSING — 수미상관: 첫날 약속 → 6주의 답 ============ */}
        <section className={styles.closing}>
          <div className={styles.closingTag} style={{ color: "#E8C896" }}>FROM 4·22 — 첫 약속</div>
          <p className={styles.closingQuote} style={{ color: "#E8C896", fontStyle: "italic", fontWeight: 600, fontSize: 19, lineHeight: 1.6 }}>
            "부티크적인 방식을 유지하면서<br />생산성을 높이고 싶다."
          </p>
          <div className={styles.closingAttribution} style={{ marginBottom: 14 }}>
            김민영 대표 · 4/22 첫 인터뷰
          </div>

          <div style={{ height: 1, background: "rgba(232,200,150,0.25)", margin: "36px auto 28px", width: "50%" }} />

          <div className={styles.closingTag}>TO 5·27 — 6주의 답</div>
          <p className={styles.closingQuote}>
            "새 도구를 만들어 드린 게 아닙니다.<br />
            대표님이 이미 쓰시던 것들에,<br />
            <strong>옆에서 한 발 거들었을 뿐입니다.</strong>"
          </p>
          <div className={styles.closingAttribution} style={{ marginTop: 18 }}>
            컨설턴트 송병근 · 김소연 · 안재은 · 2026-05-27
          </div>
        </section>

        {/* ============ FOOTER ============ */}
        <footer className={styles.footer}>
          <span>
            소녀방앗간 AX 컨설팅 최종 보고서 · v1.0 · 2026-05-27
          </span>
          <span>
            <a href="https://sonyeo-dashboard.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "#1A1A1A", textDecoration: "underline" }}>라이브 솔루션</a>
            {" · "}
            <a href="/sonyeo/workshop3.html" target="_blank" rel="noopener noreferrer" style={{ color: "#1A1A1A", textDecoration: "underline" }}>워크샵 #1 보고서</a>
          </span>
        </footer>
      </article>
    </div>
  );
}
