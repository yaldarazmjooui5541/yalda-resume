export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-6 bg-white shadow-md">
      <div className="bg-white p-6 rounded-xl max-w-md  text-left shadow-lg
  hover:shadow-[inset_0_0_10px_rgba(96,165,250,0.5)] transition-shadow duration-300">Yalda Razmjooui</div>
      <nav className="space-x-6">
      
        <a href="#hero" className="relative inline-block text-indigo-600 font-semibold
  before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-600 before:transition-[width] before:duration-300
  hover:before:w-full
  hover:text-indigo-800
  transition-colors duration-300"> خانه</a>
        <a href="#skills" className="relative inline-block text-indigo-600 font-semibold
  before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-600 before:transition-[width] before:duration-300
  hover:before:w-full
  hover:text-indigo-800
  transition-colors duration-300"> مهارت‌ها</a>
        <a href="#experience" className="relative inline-block text-indigo-600 font-semibold
  before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-600 before:transition-[width] before:duration-300
  hover:before:w-full
  hover:text-indigo-800
  transition-colors duration-300"> تجربه</a>"
        <a href="#projects" className="relative inline-block text-indigo-600 font-semibold
  before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-600 before:transition-[width] before:duration-300
  hover:before:w-full
  hover:text-indigo-800
  transition-colors duration-300"> پروژه‌ها</a>
        <a href="#education" className="relative inline-block text-indigo-600 font-semibold
  before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-600 before:transition-[width] before:duration-300
  hover:before:w-full
  hover:text-indigo-800
  transition-colors duration-300"> تحصیلات</a>
        <a href="#contact" className="relative inline-block text-indigo-600 font-semibold
  before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-0 before:bg-indigo-600 before:transition-[width] before:duration-300
  hover:before:w-full
  hover:text-indigo-800
  transition-colors duration-300">   تماس  </a>
      </nav>
    </header>

  );
}
