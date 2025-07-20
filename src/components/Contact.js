export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-indigo-600 text-center">تماس با من</h2>
      <form
        action="https://formspree.io/f/yourformid" // اگر میخوای فرم رو ارسال کنی (می‌تونی آدرس خودتو بذاری)
        method="POST"
        className="max-w-xl mx-auto space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="نام شما"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="ایمیل شما"
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="پیام شما"
          required
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded hover:bg-indigo-700 transition"
        >
          ارسال
        </button>
      </form>
      <div className="mt-10 text-center space-x-6 text-indigo-600">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="mailto:your.email@example.com">Email</a>
      </div>
    </section>
  );
}
