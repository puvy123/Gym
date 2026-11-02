export function useCardTilt(maxDeg = 7) {
  const onCardMove = (event: MouseEvent) => {
    const card = event.currentTarget as HTMLElement | null
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    const rx = (y / rect.height - 0.5) * -maxDeg
    const ry = (x / rect.width - 0.5) * maxDeg
    card.style.setProperty('--mx', `${x}px`)
    card.style.setProperty('--my', `${y}px`)
    card.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
    card.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
  }

  const onCardLeave = (event: MouseEvent) => {
    const card = event.currentTarget as HTMLElement | null
    if (!card) return
    card.style.setProperty('--rx', '0deg')
    card.style.setProperty('--ry', '0deg')
  }

  return {
    onCardMove,
    onCardLeave,
  }
}
