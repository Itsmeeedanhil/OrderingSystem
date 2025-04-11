import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">OrderByte</h1>
        <nav className="hidden md:flex space-x-6 font-medium">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/menu" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="#cart" className="relative">
            🛒
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">2</span>
          </a>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
