import { FC } from "react";

import { useSpeechSynthesis } from "react-speech-kit";

interface BookPage {
  isCover: boolean;
  title: string;
  content?: string;
  img_base64?: string;
}

const BookPage: FC<BookPage> = ({ isCover, title, content, img_base64 }) => {
  const { speak, cancel, voices, speaking } = useSpeechSynthesis();

  return (
    <>
      {isCover ? (
        <div
          className={`w-full h-full bg-center bg-cover rounded-lg relative isolate`}
        >
          <img
            src={`data:image/png;base64, ${img_base64}`}
            className="w-full h-full absolute object-cover bg-center rounded-lg z-[-1]"
          />
          <div className="absolute z-[-1] inset-0 bg-black opacity-60 rounded-lg"></div>
          <h1 className="font-bold text-7xl text-white p-6 text-center z-20">
            {title}
          </h1>
        </div>
      ) : (
        <div className="w-full h-full rounded-lg overflow-hidden">
          <div className="flex w-full h-full rounded-lg">
            <div className="flex-[1.25] bg-slate-200 flex flex-col gap-2">
              <h1 className="mx-4 mt-2 text-xl font-semibold">{title}</h1>
              <p className="mx-4 text-md overflow-auto max-h-[69vh]">
                {content}
              </p>
            </div>
            <div className={`flex-1 bg-cover relative`}>
              <img
                src={`data:image/png;base64, ${img_base64}`}
                className="w-full h-full absolute object-cover bg-center z-[-1]"
              />
            </div>
            <div className="absolute bottom-2 px-6 scale-150">
              {!speaking ? (
                <button
                  onClick={() =>
                    speak({
                      text: content,
                      voice: voices[2],
                    })
                  }
                >
                  🔊
                </button>
              ) : (
                <button onClick={() => cancel()}>🗙</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookPage;
