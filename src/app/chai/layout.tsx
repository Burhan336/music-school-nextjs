export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex">
        <h1>Inner layout</h1>
      </div>
      {children}
    </>
  );
}
