import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // State untuk menangani pesan error validasi
  const [errors, setErrors] = useState<FormErrors>({});

  // State untuk status pengiriman (idle, loading, success, error)
  const [status, setStatus] = useState<Status>("idle");

  // Fungsi untuk menangani perubahan input (BUG FIX: removed destructuring from parameter)
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error untuk field yang sedang diubah
    if (errors[name] as keyof FormData) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Fungsi untuk validasi form
  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subjek wajib diisi.";
    if (!formData.message.trim()) tempErrors.message = "Pesan wajib diisi.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setStatus("loading");

      try {
        // Simulasi delay jaringan (2 detik)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setStatus("success");

        // Reset form setelah sukses
        setFormData({ name: "", email: "", subject: "", message: "" });
        setErrors({});

        // Reset status setelah 5 detik
        setTimeout(() => setStatus("idle"), 5000);
      } catch (error) {
        console.error("Pengiriman gagal:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    }
  };

  return (
    <div className="px-4 py-12 ">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600">
            We are here to help you. Please fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Informasi Kontak */}
          <div className="p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Contact Information
            </h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Mail className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 ">
                    Email
                  </h3>
                  <p className="text-gray-600">tjandraharja99@gmail.com</p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-100 rounded-full">
                  <Phone className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 ">
                    Phone
                  </h3>
                  <p className="text-gray-600">+62 853-2989-9879</p>
                </div>
              </div>

              {/* Alamat */}
              {/* <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Jl. Contoh No. 123
                    <br />
                    Semarang, Jawa Tengah 50132
                    <br />
                    Indonesia
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Form Kontak */}
          <div className="p-8 bg-white border rounded-xl">
            <h2 className="mb-6 text-2xl font-bold text-gray-800">
              Send us a message
            </h2>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                {/* Input Nama */}
                <div className="col-span-1">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-gray-700"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? "border-red-500 focus:ring-red-500 bg-red-50"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                  />
                  {errors.name && (
                    <p className="flex items-center mt-2 text-xs text-red-600">
                      <span className="mr-1">⚠</span>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Input Email */}
                <div className="col-span-1">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-gray-700"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500 bg-red-50"
                        : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="flex items-center mt-2 text-xs text-red-600">
                      <span className="mr-1">⚠</span>
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              {/* Input Subjek */}
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Topik pesan Anda"
                  className={`w-full px-4 py-3 border bg-white rounded-lg focus:outline-none focus:ring-2 transition-all ${
                    errors.subject
                      ? "border-red-500 focus:ring-red-500 bg-red-50"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                />
                {errors.subject && (
                  <p className="flex items-center mt-2 text-xs text-red-600">
                    <span className="mr-1">⚠</span>
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Textarea Pesan */}
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  className={`w-full px-4 py-3 border rounded-lg bg-white focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500 bg-red-50"
                      : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="flex items-center mt-2 text-xs text-red-600">
                    <span className="mr-1">⚠</span>
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Tombol Kirim */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex items-center justify-center w-full px-6 py-3 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
              >
                {status === "loading" ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit</span>
                  </>
                )}
              </button>
            </form>

            {/* Pesan Status */}
            {status === "success" && (
              <div className="flex items-center p-4 mt-6 space-x-3 text-green-700 border-l-4 border-green-500 rounded-lg bg-green-50 animate-fade-in">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold">Pesan berhasil terkirim!</p>
                  <p className="text-sm">Kami akan segera menghubungi Anda.</p>
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center p-4 mt-6 space-x-3 text-red-700 border-l-4 border-red-500 rounded-lg bg-red-50 animate-fade-in">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p className="font-semibold">Terjadi kesalahan!</p>
                  <p className="text-sm">Silakan coba lagi nanti.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
