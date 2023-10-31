import { create } from 'zustand'

interface StoryState {
  bears: number
  increase: (by: number) => void
}

export const useStoryStore = create<StoryState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))

