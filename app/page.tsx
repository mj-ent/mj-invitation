import Image from 'next/image'
import mainImage from '@/public/images/main.jpg'
import { getImagePath } from '@/utils/image'
import Accordion from '@/components/Accordion'

export default function Page() {
  return (
    <div>
      <div>
        <p>
          이사무엘 <span>&amp;</span> 최다정
        </p>
        <p>2024년 10월 5일 토요일</p>
      </div>
      <div className="flex flex-col">
        <Image alt="메인 사진" src={mainImage} sizes="100vw" priority className="h-auto w-full" />
      </div>
      <div>
        <div>
          <Image alt="꽃" src={getImagePath('flower.png')} width={50} height={50} />
        </div>
        <p>
          같이 있으면 자꾸 웃게 되는 사람입니다.
          <br />
          평생을 함께 보내어도 좋겠다고 느꼈습니다.
          <br />
          앞으로 서로의 가장 친한 친구가 되어 주겠다고
          <br />
          약속하고자 합니다.
        </p>
        <p>
          식을 치르는 대신 좋은 사람으로 길러주신
          <br />
          사랑하는 양가 부모님께 감사드리는 자리를 가지기로 했습니다.
        </p>
        <p>
          고마운 분들을 모시지 못함을
          <br />
          양해 부탁드리며
          <br />
          저희 두사람 멀리서나마 축복하고 격려해주시면
          <br />
          더없는 기쁨으로 간직하고 예쁘게 잘 살겠습니다.
        </p>
        <p>사무엘・다정 드림</p>
      </div>
      <div>
        <p>
          이은묵 ・ 전강숙<span> 의 아들 </span> 사무엘
        </p>
        <p>
          최수운 ・ 임옥현<span> 의 딸 </span> 다정
        </p>
      </div>
      <div>
        <div>
          <Image alt="하트" src={getImagePath('heart.png')} width={50} height={50} />
        </div>
        <p>마음 전하실 곳</p>
        <Accordion title="신랑측 계좌번호">
          <div>
            <p>
              신한 123-123-123456
              <br />
              이사무엘
            </p>
            <p>복사하기</p>
          </div>
        </Accordion>
        <Accordion title="신부측 계좌번호">
          <div>
            <p>
              신한 123-123-123456
              <br />
              최다정
            </p>
            <p>복사하기</p>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
