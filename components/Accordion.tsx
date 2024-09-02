'use client'
import { useState } from 'react'

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
    <div onClick={handleOnClick}>
      <div>
        <p>{title}</p>
        <p>Icon Arrow</p>
      </div>
      {open && <div>{children}</div>}
    </div>
  )
}
