import React, { useState } from 'react';
import { useRevealAnimation, useLanguage } from './hooks';
import { SpinnerIcon, CheckCircleIcon } from './icons';

type SubmissionState = 'idle' | 'submitting' | 'success';

const initialFormData = {
    name: '',
    company: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
};

const Contact: React.FC = () => {
    const { content } = useLanguage();
    const [formData, setFormData] = useState(initialFormData);
    const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
    const [errors, setErrors] = useState<Partial<Record<keyof typeof initialFormData, string>>>({});
    const { ref, isVisible } = useRevealAnimation();

    const validateField = (name: keyof typeof initialFormData, value: string): string => {
        const validationMessages = content.formValidation;
        switch (name) {
            case 'name':
                return value.trim() ? '' : validationMessages.name;
            case 'company':
                return value.trim() ? '' : validationMessages.company;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value.trim()) return validationMessages.email.required;
                if (!emailRegex.test(value)) return validationMessages.email.invalid;
                return '';
            case 'phone':
                if (!value.trim()) return validationMessages.phone.required;
                if (!/^\d[\d\s-()]*$/.test(value)) return validationMessages.phone.invalid;
                return '';
            case 'projectType':
                return value ? '' : validationMessages.projectType;
            default:
                return '';
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as { name: keyof typeof initialFormData; value: string };
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as { name: keyof typeof initialFormData; value: string };
        const errorMessage = validateField(name, value);
        if (errorMessage) {
            setErrors(prev => ({ ...prev, [name]: errorMessage }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof typeof initialFormData, string>> = {};
        let isValid = true;
        (Object.keys(initialFormData) as Array<keyof typeof initialFormData>).forEach(key => {
            const errorMessage = validateField(key, formData[key]);
            if (errorMessage) {
                newErrors[key] = errorMessage;
                isValid = false;
            }
        });
        setErrors(newErrors);
        return isValid;
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        
        setSubmissionState('submitting');
        // Simulate API call
        setTimeout(() => {
            setSubmissionState('success');
        }, 2000);
    };

    const handleResetForm = () => {
        setFormData(initialFormData);
        setErrors({});
        setSubmissionState('idle');
    };
    
    const getInputClass = (fieldName: keyof typeof initialFormData) => 
        `w-full p-3 border rounded-md focus:ring-2 focus:ring-safety-orange focus:border-safety-orange transition bg-white dark:bg-gray-600 dark:border-gray-500 text-charcoal dark:text-gray-100 placeholder:text-gray-500 dark:placeholder:text-gray-400 ${
            errors[fieldName] ? 'border-red-500' : 'border-gray-300 dark:border-gray-500'
        }`;

    const FormLabel: React.FC<{ htmlFor: string, children: React.ReactNode, required?: boolean }> = ({ htmlFor, children, required }) => (
        <label htmlFor={htmlFor} className="block text-sm font-semibold text-charcoal dark:text-gray-200 mb-1">
            {children} {required && <span className="text-red-500">*</span>}
        </label>
    );

    const projectTypeOptions = content.projectTypeOptions;

    return (
        <section id="contact" className="py-20 modern-grid-bg-gray">
            <div ref={ref as React.RefObject<HTMLDivElement>} className={`container mx-auto px-4 sm:px-6 lg:px-8 reveal ${isVisible ? 'visible' : ''}`}>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-slab font-bold text-charcoal dark:text-white text-center mb-4">
                        {content.contactTitle}
                    </h2>
                    <p className="text-center text-lg text-charcoal dark:text-gray-300 max-w-3xl mx-auto mb-12">
                        {content.contactSubtitle}
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12">
                    <div className="lg:w-1/2 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                        
                        {submissionState === 'success' ? (
                            <div className="text-center py-10 flex flex-col items-center justify-center h-full">
                                <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                <h4 className="text-xl font-bold text-charcoal dark:text-white">{content.successTitle}</h4>
                                <p className="text-gray-700 dark:text-gray-300 mt-2 mb-6">{content.successMessage}</p>
                                <button onClick={handleResetForm} className="bg-safety-orange hover:opacity-90 text-charcoal font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105">
                                    {content.successButton}
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <FormLabel htmlFor="name" required>{content.formLabels.name}</FormLabel>
                                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={getInputClass('name')} />
                                        {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name}</p>}
                                    </div>
                                    <div>
                                        <FormLabel htmlFor="company" required>{content.formLabels.company}</FormLabel>
                                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} onBlur={handleBlur} className={getInputClass('company')} />
                                        {errors.company && <p className="text-red-600 text-xs mt-1">{errors.company}</p>}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <FormLabel htmlFor="email" required>{content.formLabels.email}</FormLabel>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={getInputClass('email')} />
                                        {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                                    </div>
                                    <div>
                                        <FormLabel htmlFor="phone" required>{content.formLabels.phone}</FormLabel>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={getInputClass('phone')} />
                                        {errors.phone && <p className="text-red-600 text-xs mt-1">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div>
                                    <FormLabel htmlFor="projectType" required>{content.formLabels.projectType}</FormLabel>
                                    <select id="projectType" name="projectType" value={formData.projectType} onChange={handleChange} onBlur={handleBlur} className={`${getInputClass('projectType')} ${formData.projectType === '' ? 'text-gray-500' : 'text-charcoal dark:text-gray-100'}`} >
                                        <option value="" disabled>{projectTypeOptions.placeholder}</option>
                                        <option className="text-charcoal dark:text-gray-800">{projectTypeOptions.option1}</option>
                                        <option className="text-charcoal dark:text-gray-800">{projectTypeOptions.option2}</option>
                                        <option className="text-charcoal dark:text-gray-800">{projectTypeOptions.option3}</option>
                                        <option className="text-charcoal dark:text-gray-800">{projectTypeOptions.option4}</option>
                                    </select>
                                    {errors.projectType && <p className="text-red-600 text-xs mt-1">{errors.projectType}</p>}
                                </div>
                                <div>
                                    <FormLabel htmlFor="message">{content.formLabels.message}</FormLabel>
                                    <textarea id="message" name="message" placeholder={content.formPlaceholders.message} value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={4} className={getInputClass('message')} />
                                    {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
                                </div>
                                <button type="submit" disabled={submissionState === 'submitting'} className="w-full bg-safety-orange hover:opacity-90 text-charcoal font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center disabled:opacity-75 disabled:cursor-not-allowed">
                                    {submissionState === 'submitting' ? (
                                        <>
                                            <SpinnerIcon className="animate-spin -ml-1 mr-3 h-5 w-5" />
                                            {content.submittingButton}
                                        </>
                                    ) : (
                                        content.submitButton
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="lg:w-1/2">
                         <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-6">
                            <h3 className="text-2xl font-bold font-slab text-charcoal dark:text-white mb-4">{content.contactInfoTitle}</h3>
                            <div className="space-y-3 text-gray-700 dark:text-gray-300">
                                <p><strong>{content.contactInfoAddressLabel}:</strong> {content.contactInfoAddress}</p>
                                <p><strong>{content.contactInfoEmailLabel}:</strong> <a href={`mailto:${content.contactInfoEmail}`} className="text-deep-blue dark:text-safety-orange hover:underline">{content.contactInfoEmail}</a></p>
                                <p><strong>{content.contactInfoPhoneLabel}:</strong> <a href={`tel:${content.contactInfoPhone.replace(/[()-]/g, '')}`} className="text-deep-blue dark:text-safety-orange hover:underline">{content.contactInfoPhone}</a></p>
                            </div>
                        </div>
                        <div className="h-80 rounded-lg shadow-lg overflow-hidden">
                           <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.733900984954!2d107.29749587499103!3d-6.298288893691533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6977e682247413%3A0x643c73752e04313b!2sCV.%20Aulia%20Kharisma!5e0!3m2!1sid!2sid!4v1716933633215!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={content.mapTitle}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;