import { FaBookOpen } from "react-icons/fa";

export default function OurStory() {
  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-5xl mx-auto bg-[#121212] border border-[#2a2a2a] rounded-md px-6 py-8">
        <div className="flex items-center gap-3 mb-4">
          <FaBookOpen className="text-green-400 w-6 h-6" />
          <h2 className="text-xl font-semibold">Our Story</h2>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          In 2023, a visionary engineer, Gokul Gopalan, founded SQARIS with a
          bold mission — to redefine the future of software through AI and
          robotics. Inspired by the limitless possibilities of machine learning
          and large language models, SQARIS began as a small team driven by
          innovation, precision, and ethical AI development. Today, we craft
          intelligent, globally scalable solutions that empower industries to
          transform. From social care apps to LLM-powered platforms, our story
          is one of relentless research, futuristic thinking, and a passion to
          build technology that makes the world smarter, more connected, and
          more humane. Whether you're an enterprise seeking AI transformation or
          a visionary with a bold idea, SQARIS is committed to partnering with
          you on the journey. Our story is just beginning — and we invite you to
          be a part of shaping what comes next.
        </p>
      </div>
    </section>
  );
}
