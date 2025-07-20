export default function Projects() {
  const projects = [
    {
      title: "پروژه اول",
      description: "یک وب‌سایت فروشگاهی با React و Next.js",
      link: "https://example.com/project1",
    },
    {
      title: "پروژه دوم",
      description: "اپلیکیشن مدیریت وظایف با Node.js و Express",
      link: "https://example.com/project2",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">پروژه‌ها</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
