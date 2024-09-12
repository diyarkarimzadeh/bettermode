const Home = () => {
  return (
    <main className="flex flex-col items-center justify-between px-6 sm:px-32 py-8 overflow-hidden">
      <div className="flex flex-col items-center justify-center max-w-[980px] gap-6 py-8">
        <h1 className="text-[32px] sm:text-[60px] font-extrabold text-[#e1e7ef] text-center sm:leading-[60px] leading-8">
          BetterMode Frontend Challenge🚀
        </h1>
        <p className="sm:text-[20px] text-[14px] font-normal text-[#7f8ea3] max-w-[700px] text-center">
          Created by Diyar Karimzadeh
        </p>
        {/* <Button text="Search Repositories" href="/search" /> */}
      </div>
    </main>
  );
};

export default Home;
