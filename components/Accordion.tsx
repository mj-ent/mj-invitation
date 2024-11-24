'use client'
import { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

interface AccordionProps {
  title: string
  children: React.ReactNode
}

export default function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)

  const handleOnClick = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className="mx-10 mt-4" onClick={handleOnClick}>
      <div className="flex cursor-pointer flex-row items-center justify-center bg-[#efebea] p-4">
        <p className="mx-auto">{title}</p>
        <p className="w-4">{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</p>
      </div>
      <div className={`transition-all ${open ? 'max-h-20' : 'max-h-0'} overflow-hidden`}>{children}</div>
    </div>
  )
}
