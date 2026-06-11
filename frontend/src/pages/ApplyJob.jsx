import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, MapPin, CheckCircle2 } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormState = {
  fullName: '',
  email: '',
  phone: '',
  resume: null,
  coverLetter: '',
};

export default function ApplyJob() {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!job) {
      navigate('/careers#jobs', { replace: true });
    }
  }, [job, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0] ?? null;
    setFormData((prev) => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors((prev) => ({ ...prev, resume: '' }));
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      nextErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Phone number is required';
    }

    if (!formData.resume) {
      nextErrors.resume = 'Resume is required';
    }

    if (!formData.coverLetter.trim()) {
      nextErrors.coverLetter = 'Cover letter is required';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      resume: formData.resume?.name ?? null,
      coverLetter: formData.coverLetter.trim(),
      jobTitle: job.title,
      jobLocation: job.location,
      jobType: job.type,
    };

    // TODO: integrate backend/email service later
    console.log(payload);

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSuccess(true);
    setFormData(initialFormState);
    setErrors({});
    setIsSubmitting(false);
  };

  if (!job) return null;

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#030014]">
      <Helmet>
        <title>Apply for {job.title} | Atrisma Pharmaceuticals</title>
      </Helmet>

      <PageHeader
        title="Job Application"
        subtitle="Complete the form below to apply for this position."
      />

      <section className="flex-1 py-12 md:py-16 overflow-y-auto">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 max-w-2xl">
          <Link
            to="/careers#jobs"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-neonCyan transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Careers
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-xl"
          >
            {/* Job summary */}
            <div className="mb-8 pb-8 border-b border-white/10">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-neonCyan/10 border border-neonCyan/20 flex items-center justify-center shrink-0">
                  <Briefcase size={18} className="text-neonCyan" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40 mb-1">Applying for</p>
                  <h2 className="text-xl md:text-2xl font-bold text-white">{job.title}</h2>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-white/60">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <MapPin size={14} />
                  {job.location}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  {job.type}
                </span>
              </div>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle2 size={48} className="text-neonCyan mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Application submitted successfully
                </h3>
                <p className="text-white/50 text-sm mb-8">
                  Thank you for applying. Our team will review your application and get back to you soon.
                </p>
                <Link
                  to="/careers#jobs"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-medium hover:opacity-90 transition-opacity"
                >
                  View More Openings
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Job Title (read-only) */}
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-white/80 mb-2">
                    Job Title
                  </label>
                  <Input
                    id="jobTitle"
                    name="jobTitle"
                    value={job.title}
                    readOnly
                    className="h-11 bg-white/5 border-white/10 text-white/70 cursor-not-allowed"
                  />
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-white/80 mb-2">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    aria-invalid={!!errors.fullName}
                    className="h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.fullName}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    className="h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    aria-invalid={!!errors.phone}
                    className="h-11 bg-white/5 border-white/10 text-white placeholder:text-white/30"
                  />
                  {errors.phone && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>

                {/* Resume */}
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-white/80 mb-2">
                    Resume Upload <span className="text-red-400">*</span>
                  </label>
                  <Input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    aria-invalid={!!errors.resume}
                    className="h-auto py-2.5 bg-white/5 border-white/10 text-white file:mr-4 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-neonCyan/20 file:text-neonCyan file:text-sm file:font-medium"
                  />
                  <p className="mt-1.5 text-xs text-white/40">PDF, DOC, or DOCX (max 5MB)</p>
                  {errors.resume && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.resume}</p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-white/80 mb-2">
                    Cover Letter <span className="text-red-400">*</span>
                  </label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    placeholder="Tell us why you're a great fit for this role..."
                    rows={5}
                    aria-invalid={!!errors.coverLetter}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-y min-h-[120px]"
                  />
                  {errors.coverLetter && (
                    <p className="mt-1.5 text-sm text-red-400">{errors.coverLetter}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Application'}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
