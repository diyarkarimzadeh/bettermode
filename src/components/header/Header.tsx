import { ToggleRightIcon, KeyRoundIcon } from 'lucide-react';
import Navbar from './Navbar';
import { Button as UiButton } from '../ui/button';
import Button from '../general/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Login from '@/assets/login.webp';

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between px-16 sticky top-0 z-40 w-full border-b border-[#1D283A] h-16 bg-[#030712]">
      <div className="flex flex-row items-center h-full gap-12 justify-center sm:justify-start">
        <a href="/">
          <div id="github-icon" className="flex flex-row gap-2 items-center">
            <ToggleRightIcon
              data-testid="github-icon"
              id="github-icon"
              size={32}
              color="white"
            />
            <h1 className="text-white font-bold text-lg">BetterMode Echo</h1>
          </div>
        </a>
        <div data-testid="navbar" className="hidden sm:block">
          <Navbar />
        </div>
      </div>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            {/* <Button text="Login" href="/login" Icon={KeyRoundIcon} /> */}
            <UiButton className="bg-[#374151]">
              <div className="flex flex-row items-center justify-center gap-2">
                <KeyRoundIcon size={18} />
                Login
              </div>
            </UiButton>
          </PopoverTrigger>
          <PopoverContent>
            <div className="w-full flex flex-col items-center justify-center">
              <img src={Login} width={186} />
              <p className=" text-sm text-slate-400 text-center">
                By logging in, you'll discover the most engaging posts curated
                just for you!
              </p>
              <div className="w-full mt-4">
                <Button text="Login" href="/login" arrow />
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
