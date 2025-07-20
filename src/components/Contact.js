export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="mb-8 text-3xl font-bold text-center text-indigo-600">تماس با من</h2>
      <form
        action="https://formspree.io/f/yourformid" // ersal form
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          required
          className="w-full px-4 py-2 placeholder-pink-500 transition border border-gray-300 rounded-md placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل شما"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300
    focus:outline-none
    focus:shadow-[0_0_8px_rgb(59_130_246)] focus:shadow-[0_0_15px_rgb(96_165_250)] transition-shadow duration-300"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="پیام شما"
          required
          className="w-full px-4 py-2 text-white transition duration-300 bg-gray-900 border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 shadow-pink-400"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 text-white transition bg-indigo-600 rounded hover:bg-indigo-700"
        >
          ارسال
        </button>
      </form>
      <div className="mt-10 space-x-6 text-center text-indigo-600">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </section>
  );
}
