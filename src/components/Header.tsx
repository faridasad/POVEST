import ProfileImg from "../assets/profile.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="border-b-2">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-logo text-2xl">POVEST.</span>
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src={ProfileImg} />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
