import Header from './header';

export default function RootLayout({
  children,
  hasBackground,
}: {
  children: React.ReactNode;
  hasBackground?: boolean;
}) {
  return (
    <html className="w-full h-full" lang="en">
      <div>
        <body className="flex flex-col w-full">
          <Header />
          <div className="w-full h-full">{children}</div>
          {hasBackground && (
            <div className="absolute opacity-70 top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
          )}
        </body>
      </div>
    </html>
  );
}
