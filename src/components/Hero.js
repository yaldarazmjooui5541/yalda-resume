export default function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse md:flex-row items-center justify-between py-20">
      {/* متن معرفی */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl font-extrabold mb-4 text-indigo-600">
          سلام، من یلدا رازمعجویی هستم
        </h1>
        <p className="text-gray-700 mb-6">
          مهندس کامپیوتر | توسعه‌دهنده وب | عاشق کدنویسی و خلق تجربه‌های کاربری زیبا
        </p>
        <a
          href="#contact"
          className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          تماس با من
        </a>
      </div>

      {/* عکس */}
      <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="/profile.jpg"
          alt="Yalda Razmjooui"
          className="w-64 h-64 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
