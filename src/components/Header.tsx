const Header = () => (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
        <nav className="container mx-auto flex justify-between items-center p-4 text-white">
            <div className="text-xl font-bold">Mary</div>
            <ul className="flex gap-4 text-sm">
                <li><a href="#home" className="hover:text-accent">Home</a></li>
                <li><a href="#about" className="hover:text-accent">About</a></li>
                <li><a href="#projects" className="hover:text-accent">Projects</a></li>
                <li><a href="#contact" className="hover:text-accent">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;
