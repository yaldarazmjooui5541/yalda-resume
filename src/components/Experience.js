export default function Experience() {
  const experiences = [
    {
      role: "توسعه‌دهنده فرانت‌اند",
      company: "شرکت الف",
      duration: "1400 - اکنون",
      description: "ایجاد رابط کاربری مدرن با React و Next.js",
    },
    {
      role: "کارآموز برنامه‌نویسی",
      company: "شرکت ب",
      duration: "1399 - 1400",
      description: "یادگیری برنامه‌نویسی وب و کار با تیم توسعه",
    },
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">تجربه کاری</h2>
      <div className="space-y-8 max-w-4xl mx-auto">
        {experiences.map((exp, i) => (
          <div key={i} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-indigo-600 font-medium">{exp.company}</p>
            <p className="text-gray-500 mb-2">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
