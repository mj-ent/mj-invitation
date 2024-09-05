'use client'
interface CopyBtnProps {
  copyText: string
}

export default function CopyBtn({ copyText }: CopyBtnProps) {
  const handleOnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    await navigator.clipboard.writeText(copyText)
    alert(`계좌번호(${copyText})가 복사되었습니다. \n필요한 곳에 붙여넣기 하세요.`)
  }

  return (
    <button
      className="rounded bg-[#f3efed] p-2 text-[#e56623]"
      type="button"
      onClick={handleOnClick}
    >
      복사하기
    </button>
  )
}
