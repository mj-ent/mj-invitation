import Image from 'next/image'
import mainImage from '@/public/images/main.jpg'
import { getImagePath } from '@/utils/image'

export default function briefPage() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="bg-neutral-50 text-center leading-8">
        <div className="py-12 text-[#564545]">
          <p className="text-2xl">
            이사무엘 <span className="mx-2 text-lg">&amp;</span> 최다정
          </p>
          <p className="mt-4 text-sm">2024년 10월 5일 토요일</p>
          <p className="mt-4 text-sm">Osio Prince Hotel（大磯プリンスホテル）</p>
        </div>
        <div className="flex flex-col">
          <Image alt="메인 사진" src={mainImage} sizes="100vw" priority className="h-auto w-full" />
        </div>
        <div className="mt-8">
          <div className="mb-8">
            <Image
              alt="꽃"
              src={getImagePath('flower.png')}
              width={50}
              height={50}
              className="mx-auto"
            />
          </div>
          <p className="mb-8">
            풍요로운 가을 햇살 아래에서
            <br />
            저희 두 사람 이제 부부의 연으로
            <br />한 길을 걸어가고자 합니다.
          </p>
          <p className="mb-8">
            식을 치르는 대신 좋은 사람으로 길러주신
            <br />
            양가 부모님께 감사드리는 자리를 가지기로 했습니다.
          </p>
          <p className="mb-8">
            고마운 분들을 모시지 못함을
            <br />
            양해 부탁드리며
            <br />
            저희 두사람 멀리서나마 축복하고 격려해주시면
            <br />
            더없는 기쁨으로 간직하고 예쁘게 잘 살겠습니다.
          </p>
          <p className="mb-8">사무엘・다정 드림</p>
        </div>
        <div className="mt-16 text-xl tracking-wider pb-16">
          <p>
            이은묵 ・ 전강숙<span className="text-sm"> 의 아들 </span> &nbsp;&nbsp;&nbsp;사무엘
          </p>
          <p className="mt-4">
            최수운 ・ 임옥현<span className="text-sm"> 의 딸 </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;다정&nbsp;&nbsp;&nbsp;
          </p>
        </div>
      </div>
    </div>
  )
}