export const metadata = {
  title: "Quick Launch | Google & ChatGPT",
  description: "Open Google Search and ChatGPT instantly.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
