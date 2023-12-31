import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { useProfileStore } from "@/store/Profile";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const friendsRef = useRef<HTMLInputElement>(null);
  const familyRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate()

  const setProfile = useProfileStore(state => state.setProfile)

  return (
    <div className="max-w-screen-xl mx-auto px-6">
      <div className="flex items-center gap-2">
        <h2 className="text-2xl font-medium">My Stories</h2>
        <Badge variant="secondary">0</Badge>
      </div>

      <Tabs defaultValue="created" className="w-full pt-6">
        <TabsList className="sm:w-[13vw] md:w-[11vw] w-[50vw]">
          <TabsTrigger value="created">Created</TabsTrigger>
          <TabsTrigger value="archived">Archived</TabsTrigger>
        </TabsList>
        <TabsContent value="created">
          <div>Created Stories here.</div>

          <div className="pt-6">
            <Dialog>
              <DialogTrigger>
                <div className="bg-accent hover:bg-accent/70 text-accent-foreground px-4 py-2 rounded-sm">
                  Create a Story
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Let's Create a Profile First :)</DialogTitle>
                  <DialogDescription className="pt-6">
                    <div>
                      <span className="text-base font-medium text-black">
                        Child's Details
                      </span>
                      <form onSubmit={(e) => {
                        e.preventDefault();

                        if(!nameRef.current?.value || !ageRef.current?.value || ![friendsRef.current?.value.split(", ")] || ![familyRef.current?.value.split(", ")]) return
                        setProfile(nameRef.current?.value, Number(ageRef.current?.value), friendsRef.current?.value.split(", ") as any, familyRef.current?.value.split(", ") as any)

                        navigate("/select-environment")
                        
                      }}>
                        <div className="flex w-full items-center justify-between gap-8 pt-4">
                          <Label htmlFor="name" className="w-[10%]">
                            Name
                          </Label>
                          <Input
                            ref={nameRef}
                            type="text"
                            id="name"
                            placeholder="e.g. Lamar, Jermain"
                          />
                        </div>
                        <div className="flex w-full items-center justify-between gap-8 pt-4">
                          <Label htmlFor="age" className="w-[10%]">
                            Age
                          </Label>
                          <Input
                            ref={ageRef}
                            min={7}
                            defaultValue={7}
                            type="number"
                            id="age"
                            placeholder="e.g. 12"
                          />
                        </div>
                        <div className="flex w-full items-center justify-between gap-8 pt-4">
                          <Label htmlFor="friends" className="w-[10%]">
                            Friends
                          </Label>
                          <Input
                            ref={friendsRef}
                            type="text"
                            id="friends"
                            placeholder="e.g. Kanye, Adolf"
                          />
                        </div>
                        <div className="flex w-full items-center justify-between gap-8 pt-4 pb-6">
                          <Label htmlFor="name" className="w-[10%]">
                            Family
                          </Label>
                          <Input
                            ref={familyRef}
                            type="text"
                            id="family"
                            placeholder="e.g. aunt Taylor, uncle Stalin"
                          />
                        </div>

                        <Button variant="accent">Create a Story</Button>
                      </form>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </TabsContent>
        <TabsContent value="archived">
          <span className="italic">There is no archived stories.</span>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Home;
