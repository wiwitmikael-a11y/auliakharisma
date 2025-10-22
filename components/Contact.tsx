import React, { useState } from 'react';
import { useRevealAnimation } from './hooks';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });

    const { ref, isVisible } = useRevealAnimation();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Terima kasih! Permintaan penawaran Anda telah terkirim. Kami akan segera menghubungi Anda.');
        // Here you would typically handle form submission, e.g., send to an API endpoint.
        setFormData({ name: '', company: '', email: '', phone: '', projectType: '', message: '' });
    };

    return (
        <section id="hubungi-kami" className="py-20 blueprint-pattern-gray">
            <div ref={ref as React.RefObject<HTMLDivElement>} className={`container mx-auto px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'visible' : ''}`}>
                <div className="text-center">
                    <h2 className="section-title">Hubungi Kami</h2>
                    <p className="section-subtitle">
                        Siap memulai proyek Anda? Isi formulir di bawah untuk permintaan penawaran atau konsultasi.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold font-slab text-charcoal mb-6">Formulir Permintaan Penawaran</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="text" name="name" placeholder="Nama Lengkap" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition" required />
                                <input type="text" name="company" placeholder="Perusahaan" value={formData.company} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input type="email" name="email" placeholder="Email Bisnis" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition" required />
                                <input type="tel" name="phone" placeholder="Nomor Telepon" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition" required />
                            </div>
                            <select name="projectType" value={formData.projectType} onChange={handleChange} className={`w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition ${formData.projectType ? 'text-charcoal' : 'text-gray-700'}`} required>
                                <option value="" disabled>Pilih Jenis Kebutuhan Proyek</option>
                                <option>Konstruksi Gedung</option>
                                <option>Infrastruktur Jalan & Jembatan</option>
                                <option>Renovasi & Perbaikan</option>
                                <option>Lainnya</option>
                            </select>
                            <textarea name="message" placeholder="Pesan singkat mengenai proyek Anda..." value={formData.message} onChange={handleChange} rows={4} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition"></textarea>
                            <button type="submit" className="w-full bg-safety-orange hover:opacity-90 text-charcoal font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                                Kirim Permintaan
                            </button>
                        </form>
                    </div>
                    <div className="lg:w-1/2">
                         <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                            <h3 className="text-2xl font-bold font-slab text-charcoal mb-4">Informasi Kontak</h3>
                            <div className="space-y-3 text-gray-700">
                                <p><strong>Alamat:</strong> Jl. Konstruksi Jaya No. 123, Jakarta, Indonesia</p>
                                <p><strong>Email:</strong> <a href="mailto:info@auliakharisma.com" className="text-deep-blue hover:underline">info@auliakharisma.com</a></p>
                                <p><strong>Telepon:</strong> <a href="tel:+62211234567" className="text-deep-blue hover:underline">(021) 123-4567</a></p>
                            </div>
                        </div>
                        <div className="h-80 rounded-lg shadow-lg overflow-hidden">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.471616032159!2d106.8249646153303!3d-6.2009270955084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fd540de5!2sMonumen%20Nasional!5e0!3m2!1sid!2sid!4v1672382903028!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Kantor CV. Aulia Kharisma"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;