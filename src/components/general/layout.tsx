import Header from '../header/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="w-full" lang="en">
      <div>
        <body className="flex flex-col w-full">
          <Header />
          <div>{children}</div>
          <div className="absolute opacity-70 top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
        </body>
      </div>
    </html>
  );
}
