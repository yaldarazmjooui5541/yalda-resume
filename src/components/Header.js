export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-2xl font-bold text-indigo-600">Yalda Razmjooui</div>
      <nav className="space-x-6">
        <a href="#hero" className="text-gray-700 hover:text-indigo-600">خانه</a>
        <a href="#skills" className="text-gray-700 hover:text-indigo-600">مهارت‌ها</a>
        <a href="#experience" className="text-gray-700 hover:text-indigo-600">تجربه</a>
        <a href="#projects" className="text-gray-700 hover:text-indigo-600">پروژه‌ها</a>
        <a href="#education" className="text-gray-700 hover:text-indigo-600">تحصیلات</a>
        <a href="#contact" className="text-gray-700 hover:text-indigo-600">تماس</a>
      </nav>
    </header>
  );
}
