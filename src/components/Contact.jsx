import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { sendContactEmail } from "../services/email";
import toast from "react-hot-toast";
import ContactInfo from "../data/contactinfo";

const Contact = () => {
  const { phone, instagram, facebook, linkedin, github, address } = ContactInfo;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);

    try {
      await sendContactEmail(formData);

      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS send error:", error);
      toast.error("Failed to send message. Try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      className="mx-auto max-w-5xl px-5 py-16 text-left sm:px-8 lg:py-20"
      id="contact"
    >
      <div className="mx-auto max-w-3xl text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#20222b] text-[#20222b]">
            <Mail size={21} />
          </span>
          <h3 className="text-3xl font-bold text-[#111315]">Get In Touch</h3>
        </div>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-600">
          Let&apos;s discuss your next project or just say hello.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[#dfe2e8] bg-white p-6">
          <h4 className="text-2xl font-bold text-[#111315]">
            Let&apos;s connect
          </h4>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or a quick chat about technology and development.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#0d530e]/10 text-[#0d530e]">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Email</p>
                <a
                  href={`mailto:${ContactInfo.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:underline text-[#111315]"
                >
                  {ContactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#0d530e]/10 text-[#0d530e]">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Phone</p>
                <a
                  href={`tel:${phone}`}
                  className="font-semibold text-[#111315]"
                >
                  {phone}
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#0d530e]/10 text-[#0d530e]">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-500">Address</p>
                <p className="font-semibold text-[#111315]">{address}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              aria-label="github"
              className="grid h-11 w-11 place-items-center rounded-md border border-[#dfe2e8] text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
              href={github}
              key="github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={19} />
            </a>
            <a
              aria-label="linkedin"
              className="grid h-11 w-11 place-items-center rounded-md border border-[#dfe2e8] text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
              href={linkedin}
              key="linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={19} />
            </a>
            <a
              aria-label="Facebook"
              className="grid h-11 w-11 place-items-center rounded-md border border-[#dfe2e8] text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
              href="https://www.facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              aria-label="Instagram"
              className="grid h-11 w-11 place-items-center rounded-md border border-[#dfe2e8] text-zinc-600 transition hover:border-[#0d530e] hover:text-[#0d530e]"
              href="https://www.instagram.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <form
          className="rounded-lg border border-[#dfe2e8] bg-[#f7f8f4] p-6"
          onSubmit={handleSubmit}
        >
          <div className="text-sm mb-4 font-semibold text-zinc-600">
            Your Name
            <input
              className="mt-2 w-full rounded-md border border-[#dfe2e8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0d530e]"
              name="name"
              onChange={handleChange}
              placeholder="Your full name"
              required
              type="text"
              value={formData.name}
            />
          </div>
          <div className="text-sm font-semibold  text-zinc-600">
            Email address
            <input
              className="mt-2 w-full  rounded-md border border-[#dfe2e8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0d530e]"
              name="email"
              onChange={handleChange}
              placeholder="Your email address"
              required
              type="email"
              value={formData.email}
            />
          </div>

          <label className="mt-4 block text-sm font-semibold text-zinc-600">
            Message
            <textarea
              className="mt-2 min-h-44 w-full resize-y rounded-md border border-[#dfe2e8] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#0d530e]"
              name="message"
              onChange={handleChange}
              placeholder="Write something..."
              required
              value={formData.message}
            />
          </label>

          <button
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0d530e] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0a430b] disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={isSending}
          >
            <Send size={16} />
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
