export default function Education() {
  const education = [
    {
      degree: "کارشناسی مهندسی کامپیوتر",
      institution: "دانشگاه تهران",
      year: "1395 - 1399",
    },
    {
      degree: "دوره‌های تخصصی برنامه‌نویسی وب",
      institution: "آموزشگاه کدفرند",
      year: "1400",
    },
  ];

  return (
    <section id="education" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">تحصیلات</h2>
      <ul className="max-w-4xl mx-auto space-y-6">
        {education.map((edu, i) => (
          <li key={i} className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-indigo-600 font-medium">{edu.institution}</p>
            <p className="text-gray-500">{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
