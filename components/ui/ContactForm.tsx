"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2, ChevronDown } from "lucide-react";

const contactSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  countryCode: z.string().optional(),
  phone: z.string().optional(),
  company: z.string().optional(),
  industry: z.string().optional(),
  services: z.array(z.string()).optional(),
  budget: z.string().optional(),
  referral: z.string().optional(),
  message: z.string().min(10, "Please enter at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const countryCodes = [
  { code: "+1", country: "US", flag: "\u{1F1FA}\u{1F1F8}" },
  { code: "+1", country: "CA", flag: "\u{1F1E8}\u{1F1E6}" },
  { code: "+44", country: "GB", flag: "\u{1F1EC}\u{1F1E7}" },
  { code: "+61", country: "AU", flag: "\u{1F1E6}\u{1F1FA}" },
  { code: "+971", country: "AE", flag: "\u{1F1E6}\u{1F1EA}" },
  { code: "+966", country: "SA", flag: "\u{1F1F8}\u{1F1E6}" },
  { code: "+974", country: "QA", flag: "\u{1F1F6}\u{1F1E6}" },
  { code: "+91", country: "IN", flag: "\u{1F1EE}\u{1F1F3}" },
  { code: "+33", country: "FR", flag: "\u{1F1EB}\u{1F1F7}" },
  { code: "+49", country: "DE", flag: "\u{1F1E9}\u{1F1EA}" },
  { code: "+39", country: "IT", flag: "\u{1F1EE}\u{1F1F9}" },
  { code: "+34", country: "ES", flag: "\u{1F1EA}\u{1F1F8}" },
  { code: "+31", country: "NL", flag: "\u{1F1F3}\u{1F1F1}" },
  { code: "+41", country: "CH", flag: "\u{1F1E8}\u{1F1ED}" },
  { code: "+46", country: "SE", flag: "\u{1F1F8}\u{1F1EA}" },
  { code: "+47", country: "NO", flag: "\u{1F1F3}\u{1F1F4}" },
  { code: "+45", country: "DK", flag: "\u{1F1E9}\u{1F1F0}" },
  { code: "+358", country: "FI", flag: "\u{1F1EB}\u{1F1EE}" },
  { code: "+48", country: "PL", flag: "\u{1F1F5}\u{1F1F1}" },
  { code: "+351", country: "PT", flag: "\u{1F1F5}\u{1F1F9}" },
  { code: "+353", country: "IE", flag: "\u{1F1EE}\u{1F1EA}" },
  { code: "+43", country: "AT", flag: "\u{1F1E6}\u{1F1F9}" },
  { code: "+32", country: "BE", flag: "\u{1F1E7}\u{1F1EA}" },
  { code: "+64", country: "NZ", flag: "\u{1F1F3}\u{1F1FF}" },
  { code: "+65", country: "SG", flag: "\u{1F1F8}\u{1F1EC}" },
  { code: "+852", country: "HK", flag: "\u{1F1ED}\u{1F1F0}" },
  { code: "+81", country: "JP", flag: "\u{1F1EF}\u{1F1F5}" },
  { code: "+82", country: "KR", flag: "\u{1F1F0}\u{1F1F7}" },
  { code: "+86", country: "CN", flag: "\u{1F1E8}\u{1F1F3}" },
  { code: "+55", country: "BR", flag: "\u{1F1E7}\u{1F1F7}" },
  { code: "+52", country: "MX", flag: "\u{1F1F2}\u{1F1FD}" },
  { code: "+54", country: "AR", flag: "\u{1F1E6}\u{1F1F7}" },
  { code: "+57", country: "CO", flag: "\u{1F1E8}\u{1F1F4}" },
  { code: "+56", country: "CL", flag: "\u{1F1E8}\u{1F1F1}" },
  { code: "+27", country: "ZA", flag: "\u{1F1FF}\u{1F1E6}" },
  { code: "+234", country: "NG", flag: "\u{1F1F3}\u{1F1EC}" },
  { code: "+254", country: "KE", flag: "\u{1F1F0}\u{1F1EA}" },
  { code: "+20", country: "EG", flag: "\u{1F1EA}\u{1F1EC}" },
  { code: "+60", country: "MY", flag: "\u{1F1F2}\u{1F1FE}" },
  { code: "+66", country: "TH", flag: "\u{1F1F9}\u{1F1ED}" },
  { code: "+63", country: "PH", flag: "\u{1F1F5}\u{1F1ED}" },
  { code: "+62", country: "ID", flag: "\u{1F1EE}\u{1F1E9}" },
  { code: "+84", country: "VN", flag: "\u{1F1FB}\u{1F1F3}" },
  { code: "+90", country: "TR", flag: "\u{1F1F9}\u{1F1F7}" },
  { code: "+972", country: "IL", flag: "\u{1F1EE}\u{1F1F1}" },
  { code: "+92", country: "PK", flag: "\u{1F1F5}\u{1F1F0}" },
  { code: "+880", country: "BD", flag: "\u{1F1E7}\u{1F1E9}" },
  { code: "+94", country: "LK", flag: "\u{1F1F1}\u{1F1F0}" },
  { code: "+977", country: "NP", flag: "\u{1F1F3}\u{1F1F5}" },
  { code: "+968", country: "OM", flag: "\u{1F1F4}\u{1F1F2}" },
  { code: "+973", country: "BH", flag: "\u{1F1E7}\u{1F1ED}" },
  { code: "+965", country: "KW", flag: "\u{1F1F0}\u{1F1FC}" },
];

const industryOptions = [
  "Dental Clinics",
  "Orthopedic Clinics",
  "Psychology Practices",
  "Physician Practices",
  "Pathological Labs",
  "Dermatology Clinics",
  "Real Estate",
  "Retail & E-Commerce",
  "Legal",
  "Hospitality",
  "Financial Services",
  "Other",
];

const serviceOptions = [
  { value: "software-dev", label: "Software Development" },
  { value: "website-dev", label: "Website Development" },
  { value: "ai-automation", label: "AI Automation" },
  { value: "business-automation", label: "Business Automation" },
];

const budgetOptions = [
  "Under $5k",
  "$5k-$15k",
  "$15k-$50k",
  "$50k+",
];

const referralOptions = [
  "Google Search",
  "Social Media",
  "Referral",
  "Blog/Article",
  "Conference/Event",
  "Other",
];

const inputClasses =
  "w-full border border-border-subtle bg-white px-4 py-3 text-text-primary placeholder:text-text-secondary/50 focus:border-text-primary focus:outline-none focus:ring-0";

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center border border-border-subtle bg-white p-12 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center border border-border-subtle">
          <CheckCircle className="h-8 w-8 text-text-primary" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight text-text-primary">Thank You!</h3>
        <p className="mt-3 max-w-md text-text-secondary">
          Your request has been received. We&apos;ll get back to you within 24
          hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="btn-secondary mt-8"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 border border-border-subtle bg-white p-8"
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          Full Name <span className="text-error">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="John Doe"
          {...register("fullName")}
          className={inputClasses}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-error">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          Email Address <span className="text-error">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@company.com"
          {...register("email")}
          className={inputClasses}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-error">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Number with Country Code */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          Phone Number
        </label>
        <div className="flex">
          <div className="relative">
            <select
              {...register("countryCode")}
              className={`${inputClasses} w-[120px] appearance-none border-r-0 pr-8 font-mono text-sm`}
              defaultValue="+1"
            >
              {countryCodes.map((c) => (
                <option key={`${c.country}-${c.code}`} value={c.code}>
                  {c.flag} {c.code}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
          </div>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 000-0000"
            {...register("phone")}
            className={`${inputClasses} flex-1`}
          />
        </div>
      </div>

      {/* Company Name */}
      <div>
        <label
          htmlFor="company"
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          Company Name
        </label>
        <input
          id="company"
          type="text"
          placeholder="Acme Corp"
          {...register("company")}
          className={inputClasses}
        />
      </div>

      {/* Industry */}
      <div>
        <label
          htmlFor="industry"
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          Industry
        </label>
        <select
          id="industry"
          {...register("industry")}
          className={inputClasses}
        >
          <option value="">Select your industry</option>
          {industryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* Services Interested In */}
      <div>
        <label className="mb-3 block text-sm font-medium text-text-primary">
          Services Interested In
        </label>
        <div className="grid grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <label
              key={service.value}
              className="flex cursor-pointer items-center gap-2.5 border border-border-subtle bg-white px-4 py-3 transition-colors hover:border-text-primary"
            >
              <input
                type="checkbox"
                value={service.value}
                {...register("services")}
                className="h-4 w-4 border-border-subtle bg-white text-text-primary accent-text-primary"
              />
              <span className="text-sm text-text-primary">
                {service.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget & Referral -- Two Columns */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="budget"
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            Budget Range
          </label>
          <select
            id="budget"
            {...register("budget")}
            className={inputClasses}
          >
            <option value="">Select budget range</option>
            {budgetOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="referral"
            className="mb-1.5 block text-sm font-medium text-text-primary"
          >
            How Did You Hear About Us?
          </label>
          <select
            id="referral"
            {...register("referral")}
            className={inputClasses}
          >
            <option value="">Select an option</option>
            {referralOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-text-primary"
        >
          Message <span className="text-error">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project, goals, and timeline..."
          {...register("message")}
          className={`${inputClasses} resize-none`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-error">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary flex w-full items-center justify-center gap-2 py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send My Request
          </>
        )}
      </button>
    </form>
  );
}
