import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/store/Profile";

import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useStoryStore } from "@/store/Story";
import { useNavigate } from "react-router-dom";

const Colleagues = () => {
  const store = useProfileStore((state) => state);

  const bookStore = useStoryStore((state) => state);

  interface ColleaguesProps {
    family: string[];
    friends: string[];
  }

  const initialColleaguesState: ColleaguesProps = {
    family: [], // Initially an empty array for family
    friends: [], // Initially an empty array for friends
  };
  const [colleagues, setColleagues] = useState<ColleaguesProps>(
    initialColleaguesState
  );

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://media1.giphy.com/media/LmBsnpDCuturMhtLfw/giphy.gif?cid=ecf05e4730secxk1f6pwzyhpnky2bdnygbh1g2umbpi0lxh4&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/dQpUkK59l5Imxsh8jN/giphy.gif?cid=ecf05e47r6ab1negwb0ki57n79rhdpezzqd0dnkq0svvbjl6&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/2WGDUTmsB4DzFuvZ2t/giphy.gif?cid=ecf05e47y2d5qun4plrt6aup5qdqvjr3t00pfufuu9z27qgh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media4.giphy.com/media/H9GdRg90WerxC/giphy.gif?cid=ecf05e47nxz5slg0fv4rvuphiv5y2kpcq6lpy4r8r13mq38z&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media3.giphy.com/media/KyGiMJokZEQvu/giphy.gif?cid=ecf05e47a1u1o11sh23cvaw1y75ih803dr9dbbmshxohopcm&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media2.giphy.com/media/QBd2kLB5qDmysEXre9/giphy.gif?cid=ecf05e47y2d5qun4plrt6aup5qdqvjr3t00pfufuu9z27qgh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media0.giphy.com/media/EWhLjxjiqdZjW/giphy.gif?cid=ecf05e47278tbo81bwn22i35ozowdehv8g3cqyloodfte0gy&ep=v1_gifs_search&rid=giphy.gif&ct=g",

    "https://media1.giphy.com/media/GeimqsH0TLDt4tScGw/giphy.gif?cid=ecf05e4740wagopep0gnulqfdlk9c3sr6buvxmath18rq9a5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
  ];

  const handleImageChange = () => {
    setImageIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(handleImageChange, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-8 max-w-screen-xl mx-auto px-6 py-4 flex flex-col items-center">
      <h1 className="text-center font-bold text-2xl">
        Whose are you want to take with you?
      </h1>
      <div className="flex gap-8 pt-4">
        <div>
          <span>Friends</span>
          <div className="flex flex-col">
            {store.friends?.map((f) => {
              const id = uuidv4();
              return (
                <div>
                  <Checkbox
                    id={id}
                    onClick={(e) => {
                      const element = e.target as HTMLElement;
                      const label =
                        element.nextElementSibling as HTMLLabelElement;

                      // Get the label text.
                      const labelText = label.textContent;

                      // Check if the label text exists in the family array.
                      const isFriend = colleagues?.friends.includes(labelText!);

                      // If the label text exists in the family array, filter it out.
                      // Otherwise, add it to the family array.
                      if (isFriend) {
                        setColleagues({
                          ...colleagues,
                          friends: colleagues.friends.filter(
                            (member) => member !== labelText
                          ),
                        });
                      } else {
                        setColleagues({
                          ...colleagues,
                          friends: [...colleagues.friends, labelText!],
                        });
                      }
                    }}
                  />
                  <Label htmlFor={id} className="pl-2">
                    {f}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <span>Family</span>
          <div className="flex flex-col">
            {store.family?.map((f) => {
              const id = uuidv4();
              return (
                <div>
                  <Checkbox
                    id={id}
                    onClick={(e) => {
                      const element = e.target as HTMLElement;
                      const label =
                        element.nextElementSibling as HTMLLabelElement;

                      // Get the label text.
                      const labelText = label.textContent;

                      // Check if the label text exists in the family array.
                      const isFamilyMember = colleagues?.family.includes(
                        labelText!
                      );

                      // If the label text exists in the family array, filter it out.
                      // Otherwise, add it to the family array.
                      if (isFamilyMember) {
                        setColleagues({
                          ...colleagues,
                          family: colleagues.family.filter(
                            (member) => member !== labelText
                          ),
                        });
                      } else {
                        setColleagues({
                          ...colleagues,
                          family: [...colleagues.family, labelText!],
                        });
                      }
                    }}
                  />
                  <Label htmlFor={id} className="pl-2">
                    {f}
                  </Label>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {!isLoading ? (
        <Button
          disabled={isLoading}
          variant="accent"
          className="mt-8"
          onClick={async (e) => {
            console.log("clicked");
            const b = { ...store, colleagues: colleagues };

            try {
              setIsLoading(true);

              const res = await fetch("http://localhost:3000/", {
                method: "POST",
                body: JSON.stringify(b),
              });
              const data = await res.json();
              bookStore.setStory(data);
              setIsLoading(false);
              navigate("/story");
            } catch (err) {
              console.log(err);
              setIsLoading(false);
            } finally {
              setIsLoading(false);
            }
          }}
        >
          Finish the Story
        </Button>
      ) : (
        <div className="w-screen h-screen top-0 fixed z-50 bg-black/50 backdrop-blur-[2px] flex items-center justify-center">
          <img
            src={images[imageIndex]}
            alt=""
            className="rounded-lg scale-150"
          />
        </div>
      )}
    </div>
  );
};

export default Colleagues;
