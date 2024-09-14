import Button from '@/components/general/button';
import RootLayout from '@/components/general/layout';
import Metal from '@/assets/metal2.webp';
import Typewriter from 'typewriter-effect';

const Home = () => {
  const texts = [
    'But in Echo mode 🚀',
    'But in Lite mode 📦',
    'But in Mini mode 🛴',
    'But in Shrink mode 🧨',
  ];
  return (
    <RootLayout>
      <main className="flex flex-col items-center justify-between px-6 sm:px-32">
        <div className="flex flex-col items-center justify-center max-w-[980px] gap-6 py-8">
          <img src={Metal} width={260} />
          <h1 className="flex flex-row gap-2 text-[32px] sm:text-[46px] font-extrabold text-[#e1e7ef] text-center sm:leading-[60px] leading-8">
            <span className="text-[#46CB18]">BetterMode</span>
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
          </h1>
          <p className="sm:text-[20px] text-[14px] font-normal text-[#7f8ea3] max-w-[700px] text-center">
            The most versatile, and feature-rich engagement platform. Browse
            beautifully designed templates, effortlessly customize it to meet
            your specific requirements.
          </p>
          <Button arrow text="Visit Posts" href="/posts" />
        </div>
      </main>
    </RootLayout>
  );
};

export default Home;
