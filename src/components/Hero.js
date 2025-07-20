export default function Hero() {
  return (
    <section id="hero" className="flex flex-col-reverse items-center justify-between py-20 md:flex-row">
      {/* متن معرفی */}
      <div className="text-center md:w-1/2 md:text-left">
        <h1 className="mb-4 text-4xl font-extrabold text-indigo-600">
          سلام، من یلدا رزمجویی هستم
        </h1>
        <p className="mb-6 text-gray-700">
          مهندس کامپیوتر | توسعه‌دهنده وب | عاشق کدنویسی و خلق تجربه‌های کاربری زیبا
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          تماس با من
        </a>
      </div>

      {/* عکس */}
      <div className="flex justify-center mb-10 md:w-1/2 md:mb-0">
        <img
          src="https://th.bing.com/th/id/R.a0bb63598e1954b5855b86dd26b63fda?rik=XBcoCxVxh9vzQg&riu=http%3a%2f%2fth04.deviantart.net%2ffs71%2fPRE%2fi%2f2012%2f020%2fe%2f6%2fflorida_sunset_by_tabithas_photography-d4n18mo.jpg&ehk=20KUn6%2bwkLeZBMcsyRpDlxRkTjZqk0sJ91npfyEksWE%3d&risl=&pid=ImgRaw&r=0"
          alt="Yalda Razmjooui"
          className="object-cover w-64 h-64 rounded-full shadow-lg"
        />
      </div>
    </section>
  );
}
