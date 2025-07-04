import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-normal">
          Ryuta Hayashi
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/about" className="hover:opacity-75 transition-opacity">About</Link></li>
            <li><Link href="/works" className="hover:opacity-75 transition-opacity">Works</Link></li>
            <li><Link href="/media" className="hover:opacity-75 transition-opacity">Media</Link></li>
            <li><Link href="/blog" className="hover:opacity-75 transition-opacity">Blog</Link></li>
            <li><Link href="/contact" className="hover:opacity-75 transition-opacity">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
