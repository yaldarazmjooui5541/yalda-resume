export default function Skills() {
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600">مهارت‌ها</h2>
      <div className="space-y-6 max-w-xl mx-auto">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-indigo-600 h-4 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

