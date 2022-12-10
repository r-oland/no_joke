import 'styles/App.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head />
      <body>{children}</body>
    </html>
  );
}
