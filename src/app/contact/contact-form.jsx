'use client'

import { useState } from 'react'
import { Button } from '@/components/button'
import analytics from '@/lib/analytics'

/**
 * Contact form component using Formspree for submission handling
 * Captures name, email, company, phone, message and budget
 * Provides visual feedback during submission
 */
export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ success: false, error: null })

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ success: false, error: null })

    try {
      const formData = new FormData(event.target)
      
      // Create tracking data object from form data with actual fields
      const trackingData = {
        form_source: 'contact_page',
        has_company: !!formData.get('company'),
        has_phone: !!formData.get('phone'),
        email_domain: formData.get('email') ? formData.get('email').split('@')[1] : 'not_provided' // Only track domain for privacy
      }
      
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mgvawpvn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        // Form submission succeeded
        setSubmitStatus({ success: true, error: null })
        event.target.reset()
        
        // Track successful form submission
        analytics.trackFormSubmission('Contact Form', {
          ...trackingData,
          status: 'success'
        })
      } else {
        // Form submission failed
        const data = await response.json()
        throw new Error(data.error || 'Form submission failed')
      }
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        error: 'Sorry, your message failed to send. Please email us directly at solutions@mineseek.com.au'
      })
      console.error('Form submission error:', error)
      
      // Track failed form submission
      analytics.track('Form Error', {
        form_name: 'Contact Form',
        error_type: 'submission_failed'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-medium tracking-tight">
        Book a Demo
      </h2>
      <p className="mt-2 text-neutral-600">
        Fill in the form below to find out how Mine Seek can transform your exploration process.
      </p>
      
      <form 
        className="mt-6" 
        onSubmit={handleSubmit}
        action="https://formspree.io/f/mgvawpvn"
        method="POST"
      >
        <div className="isolate -space-y-px rounded-2xl">
          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              required
            />
            <label
              htmlFor="name"
              className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              Name
            </label>
          </div>

          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="text"
              id="company"
              name="company"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              required
            />
            <label
              htmlFor="company"
              className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              Company
            </label>
          </div>

          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="email"
              id="email"
              name="email"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              required
            />
            <label
              htmlFor="email"
              className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              Email
            </label>
          </div>

          <div className="group relative z-0 transition-all focus-within:z-10">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
              required
            />
            <label
              htmlFor="phone"
              className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              Phone
            </label>
          </div>

          <div className="group relative z-0 transition-all focus-within:z-10">
            <textarea
              id="message"
              name="message"
              rows="3"
              placeholder=" "
              className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-3 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl resize-none"
              required
            ></textarea>
            <label
              htmlFor="message"
              className="pointer-events-none absolute left-6 top-8 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:top-2 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
            >
              Message
            </label>
          </div>
        </div>

        {submitStatus.error && (
          <div className="mt-4 text-red-500">{submitStatus.error}</div>
        )}

        {submitStatus.success && (
          <div className="mt-4 text-green-500">Message sent successfully. We'll get back to you soon.</div>
        )}

        <Button 
          type="submit" 
          className="mt-10"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </Button>
      </form>
    </div>
  )
} 