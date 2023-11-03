import BookPage from "@/components/BookPage";
import { useBook } from "@/hooks/useBook";

import { useStoryStore } from "@/store/Story";


const Story = () => {
  const bookStore = useStoryStore((state) => state);
  console.log(bookStore);

  const book = bookStore.book 

  

  console.log(book)

  const pages = [
    ...book.pages.map((p) => {
      return <BookPage isCover={false} title={p.title} content={p.content} img_base64={p.img_base64} />;
    }),
  ];

  console.log(pages)

  const steps = [<BookPage isCover={true} title={book.title} img_base64={book.img_base64} />, ...pages];

  console.log(steps);

  const { stepIndex, step, next, prev, isFirstStep, isLastStep, moveTo } =
    useBook(steps);

  return (
    <article className="w-full h-full grid place-content-center rounded-lg">
      <div className="w-[70vw] h-[80vh] relative">
        {step}
        <button
          className="absolute w-6 h-6 -left-12 top-[50%] -translate-y-[25px] bg-slate-200 rounded-sm flex items-center justify-center"
          onClick={prev}
        >
          🡰
        </button>
        <button
          className="absolute w-6 h-6 -right-12 top-[50%] -translate-y-[25px] bg-slate-200 rounded-sm flex items-center justify-center"
          onClick={next}
        >
          🡲
        </button>
      </div>
    </article>
  );
};

export default Story;
