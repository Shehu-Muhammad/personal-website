// components/contact/ContactForm.tsx
'use client';

import Container from '@/components/layout/Container';

export default function ContactForm() {
  return (
    <section className='bg-slate-900 py-20 text-white'>
      <Container>
        <div className='grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14'>
          <div>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
              Send a Message
            </p>

            <h2 className='mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Tell me about what you need
            </h2>

            <p className='mt-6 max-w-2xl text-base leading-7 text-slate-300'>
              Share a few details about your project, opportunity, or question.
              This form can be connected later to an email service or form
              backend once you are ready.
            </p>

            <form className='mt-10 space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='mb-2 block text-sm font-medium text-slate-200'
                >
                  Name
                </label>
                <input
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Your name'
                  className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-slate-200'
                >
                  Email
                </label>
                <input
                  id='email'
                  name='email'
                  type='email'
                  placeholder='you@example.com'
                  className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10'
                />
              </div>

              <div>
                <label
                  htmlFor='projectType'
                  className='mb-2 block text-sm font-medium text-slate-200'
                >
                  Project Type
                </label>
                <select
                  id='projectType'
                  name='projectType'
                  className='w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/25'
                  defaultValue=''
                >
                  <option value='' disabled>
                    Select an option
                  </option>
                  <option value='personal-website'>Personal Website</option>
                  <option value='business-website'>Business Website</option>
                  <option value='landing-page'>Landing Page</option>
                  <option value='custom-web-app'>Custom Web App</option>
                  <option value='job-opportunity'>Job Opportunity</option>
                  <option value='general-inquiry'>General Inquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='budget'
                  className='mb-2 block text-sm font-medium text-slate-200'
                >
                  Budget Range
                </label>
                <select
                  id='budget'
                  name='budget'
                  className='w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-white/25'
                  defaultValue=''
                >
                  <option value='' disabled>
                    Select a range
                  </option>
                  <option value='under-500'>Under $500</option>
                  <option value='500-1000'>$500 - $1,000</option>
                  <option value='1000-2500'>$1,000 - $2,500</option>
                  <option value='2500-plus'>$2,500+</option>
                  <option value='not-sure'>Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='mb-2 block text-sm font-medium text-slate-200'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={6}
                  placeholder='Tell me about your project, opportunity, or question...'
                  className='w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-white/25 focus:bg-white/10'
                />
              </div>

              <button
                type='submit'
                className='inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200'
              >
                Send Message
              </button>
            </form>
          </div>

          <div className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:p-8'>
            <p className='text-sm font-medium uppercase tracking-[0.2em] text-slate-400'>
              Quick Note
            </p>

            <h3 className='mt-4 text-2xl font-semibold text-white'>
              Let’s make it easy to connect
            </h3>

            <p className='mt-4 text-sm leading-7 text-slate-300'>
              This form is a strong starting point for project inquiries,
              freelance opportunities, collaborations, or job-related outreach.
              You can connect it later to Formspree, Resend, EmailJS, or your
              own backend.
            </p>

            <div className='mt-8 space-y-4 text-sm text-slate-300'>
              <div className='rounded-2xl border border-white/10 bg-black/10 p-4'>
                Best for project inquiries and website requests
              </div>
              <div className='rounded-2xl border border-white/10 bg-black/10 p-4'>
                Can also be used for collaborations and job opportunities
              </div>
              <div className='rounded-2xl border border-white/10 bg-black/10 p-4'>
                Form handling can be added once the UI is finished
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
