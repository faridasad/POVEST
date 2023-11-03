import { create } from "zustand";

interface BookPageProps {
  id: string;
  page: number;
  title: string;
  content: string;
  img_base64?: string
}

interface BookProps {
  id: string;
  title: string;
  pages: BookPageProps[];
  img_base64?: string
}

interface StoryState {
  book: BookProps;
  setStory: (book: BookProps) => void;
}

export const useStoryStore = create<StoryState>()((set) => ({
  book: {} as BookProps,
  setStory: (book) => {
    set(() => ({
      book: book,
    }));
  },
}));
