'use client'

import Image from 'next/image'
import classNames from 'classnames/bind'
import { useState } from 'react'
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACCAIIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAgMEAAEFBv/EABwQAQEBAQEBAQEBAAAAAAAAAAACAQMREjEhQf/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwQA/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECEQP/2gAMAwEAAhEDEQA/APg2F43isGhdx3xvFspaFg5DJk4dMyDoLjD4xPRoKR5jThmSzaVgPHNwz5c2SHJoqj6wq8WwSkUXptYXrTlOh8ZmMBfy3hvjm4xytNhXjeD3G8WzU7GzDIwM4bGKJ2GRiiJL54piSadHZkzJHEGzCGjSk/IdlT8BqCcN1HckXi25TdJUyHUl4Tqi8IpfNLQM74xugZ8ubhvgdxila+Fbjng9wPi2aSxpw6MLnD+eLSpWHc8V85I5Ys5YWlMiTZl3nJ0ylQK+AVKr5Bck4PUPSUnSXodJR9sGCg6YntV1xNasrgMzG67ioFDDTHGovQioK+QsFJ3Mmf0/mrE7FXLFvLEnFbyCpWKeefw+cK5fiifwlI54XeHl2RyPriLti/qh7f66DEHZJavsj6fp4eAZxh6Kz0Fa26CtZ5F+uVod1zdD6rkTJ1Rz1LOn89UhLF/LVvHXn8dW8ddUtRfzPnf4l50fOkqdh3pd630C6KUjrqDus66h76Joi7f6jtV21JejDQPrB9Yw9O+g1Re2HaS4pNC2g+g2g/R5Dynzp/PUc0fzo4vR5Us5U83lSzlRbU7Ho86UTSDnZ82W1OxV9F3Rf2CrAlgetIu1H9aR9aGAm7akvT+tJr00HrnrA9YeD0P2HbJ+nNp3Amjdpz6K+nPp3Fs1RNHc6STR0U6rRfypXyt53OlPOiWhY9GLPm3nxZ02Xqdiz7BVkfYatyVgulpetCu0/SjQtK6anrTOmkVqkhet6wfWNwOovpvor1vR4nnRn07ml+u5oWNOKdOmxqedNjU61ZVxSiKRxqiNTpuLIo2aSxpmaQlh/wBOVRfrm6MR1GuiLodaTWq5Spd6VWjvS9Vidc9ZvWMXrzmZhTy67jMWtfmOTZZkq1ZPhRDMnVDpMxmITQnNZhiOi6KpmVyjomi9ZlYlXGZjg//Z'

export const Description = () => {
  const [hasBorder, setBorder] = useState(false)

  function handleClick() {
    setBorder(!hasBorder)
  }

  const cx = classNames.bind(styles)

  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  })

  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrow's Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  )
}
