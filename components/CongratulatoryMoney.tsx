'use client'

import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Accordion from '@/components/Accordion'
import CopyBtn from '@/components/CopyBtn'
import { getImagePath } from '@/utils/image'

const showFlag = 'cm'

const accounts = [
  {
    title: '신랑측 계좌번호',
    accountInfo: { number: '광주 075-121-676675', name: '전강숙' },
    copyText: '075121676675',
  },
  {
    title: '신부측 계좌번호',
    accountInfo: { number: '국민 655201-01-414412', name: '최수운' },
    copyText: '65520101414412',
  },
]

export default function CongratulatoryMoney() {
  const params = useSearchParams()

  if (params.get(showFlag) !== 'true') return null

  return (
    <div className="mt-16">
      <div className="mb-4">
        <Image
          alt="하트"
          src={getImagePath('heart.png')}
          width={50}
          height={50}
          className="mx-auto"
        />
      </div>
      <p className="mb-8 text-lg text-[#c28e79]">마음 전하실 곳</p>
      {accounts.map(account => (
        <Accordion key={account.copyText} title={account.title}>
          <div className="flex items-center justify-between bg-white p-2 text-left">
            <p>
              {account.accountInfo.number}
              <br />
              {account.accountInfo.name}
            </p>
            <div>
              <CopyBtn copyText={account.copyText} />
            </div>
          </div>
        </Accordion>
      ))}
    </div>
  )
}
