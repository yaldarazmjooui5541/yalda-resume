export default function Education() {
  const education = [
    {
      degree: "کارشناسی مهندسی کامپیوتر",
      institution: "دانشگاه شیراز",
      year: "1395 - 1399",
    },
    {
      degree: "دوره‌های تخصصی برنامه‌نویسی وب",
      institution:"سیوان لند",
      year: "1400",
    },
  ];

  return (
    <section id="education" className="relative p-10 bg-[#111] text-white rounded-2xl animate-pulse shadow-[0_0_40px_#8b5cf6]">
      <h2 className="mb-8 text-3xl font-bold text-amber-600">تحصیلات</h2>
      <ul className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <li key={i} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="font-medium text-indigo-600">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
