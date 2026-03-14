import sharp from "sharp";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { writeFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT = join(__dirname, "../public/og.png");

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#0A0A0F" stop-opacity="0"/>
    </radialGradient>
    <style>
      @font-face {
        font-family: 'Pretendard';
        src: local('Pretendard');
      }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0A0A0F"/>

  <!-- Glow -->
  <ellipse cx="600" cy="315" rx="480" ry="300" fill="url(#glow)"/>

  <!-- Top badge -->
  <rect x="434" y="72" width="332" height="42" rx="21" fill="#13131A" stroke="#2A2A35" stroke-width="1"/>
  <circle cx="460" cy="93" r="5" fill="#3B82F6"/>
  <text x="475" y="98" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="14" fill="#3B82F6" letter-spacing="0.5">부산 기업·기관·소상공인 대상 AI 실무 교육</text>

  <!-- Main headline -->
  <text x="600" y="215" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="62" font-weight="700" fill="#F5F5F5" text-anchor="middle" letter-spacing="-1">반복 업무에 쓰던 시간,</text>
  <text x="600" y="295" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="62" font-weight="700" fill="#3B82F6" text-anchor="middle" letter-spacing="-1">AI한테 넘겼습니다</text>

  <!-- Sub copy -->
  <text x="600" y="362" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="22" fill="#F5F5F5" fill-opacity="0.5" text-anchor="middle">교육 당일, 직원이 직접 만들고 바로 씁니다</text>

  <!-- Divider -->
  <line x1="100" y1="410" x2="1100" y2="410" stroke="#2A2A35" stroke-width="1"/>

  <!-- Stats row -->
  <text x="200" y="462" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="32" font-weight="700" fill="#F5F5F5" text-anchor="middle">100+</text>
  <text x="200" y="494" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="15" fill="#F5F5F5" fill-opacity="0.45" text-anchor="middle">누적 출강 기관</text>

  <line x1="400" y1="435" x2="400" y2="505" stroke="#2A2A35" stroke-width="1"/>

  <text x="600" y="462" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="32" font-weight="700" fill="#F5F5F5" text-anchor="middle">310+</text>
  <text x="600" y="494" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="15" fill="#F5F5F5" fill-opacity="0.45" text-anchor="middle">연간 출강 (2025)</text>

  <line x1="800" y1="435" x2="800" y2="505" stroke="#2A2A35" stroke-width="1"/>

  <text x="1000" y="462" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="32" font-weight="700" fill="#F5F5F5" text-anchor="middle">부울경</text>
  <text x="1000" y="494" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="15" fill="#F5F5F5" fill-opacity="0.45" text-anchor="middle">전역 공공기관·기업 출강</text>

  <!-- Bottom brand -->
  <text x="600" y="580" font-family="'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif" font-size="18" font-weight="600" fill="#F5F5F5" fill-opacity="0.3" text-anchor="middle" letter-spacing="2">부산AI랩  ·  busan-ailab.vercel.app</text>
</svg>`;

const pngBuffer = await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(OUTPUT, pngBuffer);
console.log(`✓ og.png created: ${pngBuffer.length} bytes → ${OUTPUT}`);
