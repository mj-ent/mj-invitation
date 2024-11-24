'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import { getGalleryPhotos } from '@/utils/image'
import useEmblaCarousel from 'embla-carousel-react'

export default function Gallery() {
  const [emblaRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })
  const photos = getGalleryPhotos()

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return
      emblaMainApi.scrollTo(index)
    },
    [emblaMainApi, emblaThumbsApi],
  )

  return (
    <div className="mt-16">
      <p className="mb-8 text-lg text-[#c28e79]">갤러리</p>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {photos.map(({ id, path }) => (
            <div key={`gallery_${id}`} className="min-w-0 flex-[0_0_100%] content-center">
              <Image
                alt={`갤러리 사진 ${id}`}
                src={path}
                width={576}
                height={432}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex">
            {photos.map(({ id, path }, index) => (
              <div key={`thumb_${id}`} className="min-w-0 flex-[0_0_22%] content-center ml-2">
                <button onClick={() => onThumbClick(index)} type="button">
                  <Image
                    alt={`갤러리 섬네일 ${id}`}
                    src={path}
                    width={80}
                    height={60}
                    className='w-auto h-auto'
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
