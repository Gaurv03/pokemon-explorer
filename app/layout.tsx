import '../styles/globals.css';

export const metadata = {
  title: {
    default: 'Pokémon',
    template: '%s | Pokémon.',
  },
  description: 'This a Pokémon Explorer for Pokémon Fans 🐦‍🔥',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 text-gray-900">{children}</body>
    </html>
  );
}
