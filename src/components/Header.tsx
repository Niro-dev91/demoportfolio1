const Header = () => (
<header className="fixed top-0 left-0 w-full z-50 bg-transparent">
    <nav className=" mx-auto flex justify-between items-center px-20 py-5 text-white">
      <div className="text-xl font-bold">Mary</div>
      <ul className="flex gap-6 text-sm">
        <li><a href="#home" className="hover:text-accent transition">Home</a></li>
        <li><a href="#about" className="hover:text-accent transition">About</a></li>
        <li><a href="#whatido" className="hover:text-accent transition">Services</a></li>
        <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
        <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
