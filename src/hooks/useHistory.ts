import type { HistoryItem } from "../types/history"

const STORAGE_KEY = "rac_history"
const MAX_ITEMS = 5

export function useHistory() {
  const getAll = (): HistoryItem[] => {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  }

  const add = (item: HistoryItem) => {
    const current = getAll()

    const updated = [
      item,
      ...current.filter(i => i.id !== item.id),
    ].slice(0, MAX_ITEMS)

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const clear = () => {
    localStorage.removeItem(STORAGE_KEY)
  }

  return {
    getAll,
    add,
    clear,
  }
}
