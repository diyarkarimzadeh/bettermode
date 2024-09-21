import { Button } from '@/components/ui/button';
import RootLayout from '@/components/general/layout';
import Metal from '@/assets/metal1.webp';
import Typewriter from 'typewriter-effect';
import { ArrowUpRightIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const texts = [
    'But in Echo mode 🚀',
    'But in Lite mode 📦',
    'But in Mini mode 🧨',
  ];
  return (
    <RootLayout hasBackground>
      <main className="flex flex-col items-center justify-between px-6 sm:px-32">
        <div className="flex flex-col items-center justify-center max-w-[980px] gap-6 py-8">
          <img src={Metal} width={260} />
          <h1 className="flex lg:flex-row flex-col gap-2 text-[32px] sm:text-[46px] font-extrabold text-[#e1e7ef] text-center sm:leading-[60px] leading-8">
            <span className="text-[#46CB18]">BetterMode</span>
            <div className="text-[26px] sm:text-[46px]">
              <Typewriter
                options={{
                  strings: texts,
                  autoStart: true,
                  delay: 70,
                  // @ts-expect-error: Unreachable code error
                  pauseFor: 6000,
                  loop: true,
                }}
              />
            </div>
          </h1>
          <p className="sm:text-[20px] text-[14px] font-normal text-[#7f8ea3] max-w-[700px] text-center">
            The most versatile, and feature-rich engagement platform. Browse
            beautifully designed templates, effortlessly customize it to meet
            your specific requirements.
          </p>
          <Button
            onClick={() => navigate('/posts')}
            className="bg-[#0367F3] border-0 hover:bg-[#0146f4] hover:border-0 font-bold"
          >
            Visit Posts
            <ArrowUpRightIcon />
          </Button>
        </div>
      </main>
    </RootLayout>
  );
};

export default Home;
