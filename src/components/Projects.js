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
      <h2 className="mb-8 text-3xl font-bold text-indigo-600">پروژه‌ها</h2>
      <div className="relative bg-black/30 border border-white/10 backdrop-blur-md rounded-xl p-6 shadow-[0_0_30px_#00f2ff]">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 transition bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
