// src/components/ContactForm.js

import React, { useState } from 'react';

const FormContact = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

  // State untuk menangani pesan error validasi
  const [errors, setErrors] = useState({});

  // State untuk status pengiriman (idle, loading, success, error)
  const [status, setStatus] = useState('idle');

  // Fungsi untuk menangani perubahan input
  const handleChange = ({e}: ) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Fungsi untuk validasi form
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Nama wajib diisi.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email wajib diisi.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Format email tidak valid.";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subjek wajib diisi.";
    if (!formData.message.trim()) tempErrors.message = "Pesan wajib diisi.";
    
    setErrors(tempErrors);
    // Mengembalikan true jika tidak ada error
    return Object.keys(tempErrors).length === 0;
  };

  // Fungsi untuk menangani pengiriman form
  const handleSubmit = async (e) => {
    e.preventDefault(); // Mencegah reload halaman

    if (validateForm()) {
      setStatus('loading');
      
      // --- Simulasi pengiriman data ke backend ---
      // Di dunia nyata, Anda akan mengganti ini dengan fetch atau axios ke API Anda.
      console.log("Mengirim data:", formData);
      
      try {
        // Simulasi delay jaringan (2 detik)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Asumsikan pengiriman selalu berhasil untuk contoh ini
        console.log("Pesan berhasil dikirim!");
        setStatus('success');
        
        // Reset form setelah sukses
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
        
        // Reset status setelah 5 detik
        setTimeout(() => setStatus('idle'), 5000);

      } catch (error) {
        console.error("Pengiriman gagal:", error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    }
  };

  return (
    <div className="max-w-lg p-6 mx-auto mt-10 bg-white rounded-lg shadow-md">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">Hubungi Kami</h2>
      
      <form onSubmit={handleSubmit} noValidate>
        {/* Input Nama */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
          />
          {errors.name && <p className="mt-1 text-xs italic text-red-500">{errors.name}</p>}
        </div>

        {/* Input Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">
            Alamat Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
          />
          {errors.email && <p className="mt-1 text-xs italic text-red-500">{errors.email}</p>}
        </div>

        {/* Input Subjek */}
        <div className="mb-4">
          <label htmlFor="subject" className="block mb-2 text-sm font-bold text-gray-700">
            Subjek
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
          />
          {errors.subject && <p className="mt-1 text-xs italic text-red-500">{errors.subject}</p>}
        </div>

        {/* Textarea Pesan */}
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-bold text-gray-700">
            Pesan Anda
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
          ></textarea>
          {errors.message && <p className="mt-1 text-xs italic text-red-500">{errors.message}</p>}
        </div>

        {/* Tombol Kirim */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full px-4 py-2 font-bold text-white transition duration-300 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline disabled:bg-gray-400"
        >
          {status === 'loading' ? 'Mengirim...' : 'Kirim Pesan'}
        </button>
      </form>

      {/* Pesan Status */}
      {status === 'success' && (
        <p className="mt-4 font-bold text-center text-green-500">Pesan Anda berhasil terkirim!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 font-bold text-center text-red-500">Terjadi kesalahan, silakan coba lagi.</p>
      )}
    </div>
  );
};

export default FormContact;