import './globals.css';

export const metadata = {
  title: 'Shivam Sharma | Full Stack Developer & Researcher',
  description: 'Portfolio of Shivam Sharma — Full Stack Web Developer skilled in React.js, Node.js, Express.js, PostgreSQL, Docker, and blockchain-based systems. Published IEEE research author.',
  keywords: ['Shivam Sharma', 'Full Stack Developer', 'React.js', 'Node.js', 'Portfolio', 'IEEE', 'Blockchain'],
  authors: [{ name: 'Shivam Sharma' }],
  openGraph: {
    title: 'Shivam Sharma | Full Stack Developer & Researcher',
    description: 'Full Stack Web Developer with expertise in React.js, Node.js, and blockchain systems.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
