import { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { DebouncedFunc, throttle } from 'lodash'
import { useTranslation } from 'next-i18next'

const noop = () => {}

const useThrottledOnScroll = (callback: any, delay?: number) => {
  const throttledCallback = useMemo(
    () => (callback ? throttle(callback, delay) : noop),
    [callback, delay]
  )

  useEffect(() => {
    if (throttledCallback === noop) return
    window.addEventListener('scroll', throttledCallback)
    return () => {
      if (throttledCallback === noop) return
      window.removeEventListener('scroll', throttledCallback)
      ;(throttledCallback as DebouncedFunc<any>).cancel()
    }
  }, [throttledCallback])
}

interface TableOfContentItem {
  hash: string
  text: string
}

const useTableOfContentData = () => {
  const { t } = useTranslation()
  const [items, setItems] = useState<TableOfContentItem[]>([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState<string | undefined>()

  useEffect(() => {
    // title
    setTitle(document.querySelector('main h1')?.textContent ?? undefined)

    // items
    setItems(
      Array.from(document.querySelectorAll('main h2[id]'))
        .filter((el) => el.id && el.textContent)
        .map((el) => ({ hash: el.id, text: el.textContent as string }))
    )

    // loading
    setLoading(false)
  }, [t])

  return { items, loading, title }
}

export const TableOfContents: FC = () => {
  const { t } = useTranslation('common')
  const { items, loading, title } = useTableOfContentData()

  const [activeState, setActiveState] = useState<string | null>(null)

  const clickedRef = useRef(false)
  const unsetClickedRef = useRef<NodeJS.Timeout | null>(null)

  const findActiveIndex = useCallback(() => {
    // Don't set the active index based on scroll if a link was just clicked
    if (clickedRef.current) {
      return
    }

    let active
    for (let i = items.length - 1; i >= 0; i -= 1) {
      // No hash if we're near the top of the page
      if (document.documentElement.scrollTop < 200) {
        active = { hash: null }
        break
      }

      const item = items[i]
      const node = document.getElementById(item.hash)

      if (process.env.NODE_ENV !== 'production') {
        if (!node) {
          console.error(
            `Missing node on the item ${JSON.stringify(item, null, 2)}`
          )
        }
      }

      if (
        node &&
        node.offsetTop <
          document.documentElement.scrollTop +
            document.documentElement.clientHeight / 20
      ) {
        active = item
        break
      }
    }

    if (active && activeState !== active.hash) {
      setActiveState(active.hash)
    }
  }, [activeState, items])

  // Corresponds to 10 frames at 60 Hz
  useThrottledOnScroll(items.length > 0 ? findActiveIndex : null, 166)

  const handleClick = (hash: string) => {
    // Used to disable findActiveIndex if the page scrolls due to a click
    clickedRef.current = true
    unsetClickedRef.current = setTimeout(() => {
      clickedRef.current = false
    }, 1000)

    if (activeState !== hash) {
      setActiveState(hash)
    }
  }

  useEffect(
    () => () => {
      if (unsetClickedRef.current) {
        clearTimeout(unsetClickedRef.current)
      }
    },
    []
  )

  if (loading) return <></>
  return (
    <nav
      className="sticky top-2 rounded elevation-2"
      aria-label={t('table-of-contents.aria-label')}
    >
      <p className="m-0 p-4 font-display font-bold">
        {title ? title : t('table-of-contents.label')}
      </p>
      <hr className="mb-2" />
      {items.length > 0 && (
        <ul>
          {items.map(({ hash, text }) => (
            <li key={hash} className="text-black/60">
              <a
                className={`block px-4 py-3 font-display text-sm font-medium text-inherit no-underline visited:text-inherit hover:bg-[#4ED8E8]/[.12] hover:text-primary-700 hover:text-opacity-100 focus:bg-[#4ED8E8]/[.12] focus:text-primary-700 ${
                  activeState === hash
                    ? 'bg-[#4ED8E8]/[.12] text-primary-700 visited:text-primary-700'
                    : ''
                }`}
                href={`#${hash}`}
                onClick={() => handleClick(hash)}
              >
                {text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
