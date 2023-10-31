import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useProfileStore } from "@/store/Profile";

const Colleagues = () => {

  const store = useProfileStore(state => state)
  console.log(store)

  return (
    <div className="pt-8 max-w-screen-xl mx-auto px-6 py-4 flex flex-col items-center">
      <h1 className="text-center font-bold text-2xl">
        Whose are you want to take with you?
      </h1>
      <div className="flex gap-8 pt-4">
        <div>
          <span>Friends</span>
          <div className="flex flex-col">
            <div>
              <Checkbox id="friend1" />
              <Label htmlFor="friend1" className="pl-2">
                Kanye
              </Label>
            </div>
            <div>
              <Checkbox id="friend2" />
              <Label htmlFor="friend2" className="pl-2">
                Adolf
              </Label>
            </div>
          </div>
        </div>
        <div>
          <span>Family</span>
          <div className="flex flex-col">
            <div>
              <Checkbox id="fam1" />
              <Label htmlFor="fam1" className="pl-2">
                Kanye
              </Label>
            </div>
            <div>
              <Checkbox id="fam2" />
              <Label htmlFor="fam2" className="pl-2">
                Adolf
              </Label>
            </div>
          </div>
        </div>
      </div>
      <Button variant="accent" className="mt-8">Finish the Story</Button>
    </div>
  );
};

export default Colleagues;
