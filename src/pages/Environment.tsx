import { Link } from "react-router-dom";
import environments from "../data/environments.json";
import { useProfileStore } from "@/store/Profile";

const Environment = () => {
  const setEnvironment = useProfileStore((state) => state.setEnvironment);

  return (
    <section className="max-w-screen-xl mx-auto px-6 py-4">
      <h1 className="font-bold text-2xl underline underline-offset-8">
        Pick an Environment
      </h1>
      <div className="pt-10 grid grid-flow-col auto-cols-[21%] gap-4 overflow-x-scroll pb-2">
        {environments.map((e) => {
          return (
            <Link to="/colleagues" key={e.id}>
              <article
                key={e.id}
                className="flex flex-col rounded-md overflow-hidden border cursor-pointer"
                onClick={() => {
                  setEnvironment(e.name);
                }}
              >
                <img src={e.imgUrl} className="h-[30vh] object-cover" alt="1" />
                <div className="p-4">
                  <p className="font-semibold text-lg">{e.name}</p>
                  <p className="text-sm">{e.desc}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Environment;
