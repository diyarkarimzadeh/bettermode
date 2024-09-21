import { ToggleRightIcon, KeyRoundIcon } from 'lucide-react';
import Navbar from './navbar';
import { Button as UiButton } from '../ui/button';
import Button from '../general/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Login from '@/assets/login.webp';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGOUT_NETWORK } from '@/services/graph-ql/mutations';

const Header = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = !!localStorage.getItem('accessToken');

  const [logoutNetwork, { loading }] = useMutation(LOGOUT_NETWORK);

  const handleLogout = async () => {
    try {
      await logoutNetwork({
        variables: {
          input: {
            sessionId: localStorage.getItem('sessionId') || '',
          },
        },
      });
      console.log('Logout successful');
      localStorage.clear();
      navigate('/');
    } catch (e) {
      console.error('Logout error:', e);
    }
  };

  const renderPopoverContent = () => {
    if (isUserLoggedIn) {
      const profilePicture = localStorage.getItem('profilePicture');
      const email = localStorage.getItem('email');
      return (
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex items-center justify-center gap-3">
            <img
              className="rounded-full"
              width={36}
              src={profilePicture || ''}
            />
            <p className="font-semibold">{email}</p>
          </div>
          <div className="w-full mt-4">
            <UiButton
              variant="secondary"
              className="w-full"
              onClick={handleLogout}
              disabled={loading}
            >
              Logout
            </UiButton>
          </div>
        </div>
      );
    } else {
      return (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={Login} width={186} />
          <p className=" text-sm text-slate-400 text-center">
            By logging in, you'll discover the most engaging posts curated just
            for you!
          </p>
          <div className="w-full mt-4">
            <Button text="Login" href="/login" arrow />
          </div>
        </div>
      );
    }
  };
  return (
    <div className="flex flex-row items-center justify-between px-4 sm:px-16 sticky top-0 z-40 w-full border-b border-[#1D283A] h-16 bg-[#030712]">
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
            <UiButton className="bg-[#374151] border-0 hover:bg-slate-800 hover:border-0">
              <div className="flex flex-row items-center justify-start w-24 md:w-fit h-full gap-2">
                <div className="w-[18px] h-[18px]">
                  <KeyRoundIcon size={18} />
                </div>
                <p className=" overflow-hidden truncate">
                  {isUserLoggedIn ? localStorage.getItem('email') : 'Login'}
                </p>
              </div>
            </UiButton>
          </PopoverTrigger>
          <PopoverContent>{renderPopoverContent()}</PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
