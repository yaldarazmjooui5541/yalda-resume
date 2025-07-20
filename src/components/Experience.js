export default function Experience() {
  const experiences = [
    {
      role: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت الف",
      duration: "1403 - اکنون",
      description: "ایجاد رابط کاربری مدرن با React و Next.js",
    },
    {
      role: "کارآموز برنامه‌نویسی",
      company: "شرکت ب",
      duration: "1404 - 1409",
      description: "یادگیری برنامه‌نویسی وب و کار با تیم توسعه",
    },
  ];

  return (
    <section id="experience" className="bg-[url('/pattern.svg')] bg-cover bg-center bg-no-repeat p-10 text-white backdrop-blur-sm">
      <h2 className="mb-4 text-4xl font-extrabold text-purple-400 drop-shadow-lg">تجربه کاری</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, i) => (
          <div key={i} className="bg-[#381a2c] text-white p-6 rounded-xl shadow-lg hover:shadow-purple-500/40 transition">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="font-medium text-indigo-600">{exp.company}</p>
            <p className="mb-2 text-gray-500">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
