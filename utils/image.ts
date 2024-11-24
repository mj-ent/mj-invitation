const prefixImage = '/images'

export function getImagePath(fileName: string, prefix?: string) {
  return `${prefix || prefixImage}/${fileName}`
}

const photoNumbers = {
  1: 3,
  2: 3,
  3: 3,
  4: 4,
  5: 5,
}

export function getGalleryPhotos() {
  const galleryPhotos = Object.keys(photoNumbers).reduce((acc, key) => {
    const list = new Array(photoNumbers[key]).fill(null).map((_, idx) => {
      const name = `${key}-${idx + 1}`

      return {
        id: name,
        path: `${prefixImage}/gallery/${name}.jpg`,
      }
    })
    return acc.concat(list)
  }, [])

  return galleryPhotos
}
