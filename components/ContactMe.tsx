'use client'
import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import data from '@/constant/data'
import Image from 'next/image'

export default function ContactMe() {
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm('service_sfiu5zl', 'template_7b22c7t', form.current, {
          publicKey: 'Shi-7uk18Wi7zdsqO',
        })
        .then(
          () => {
            console.log('SUCCESS!')
          },
          (error) => {
            console.log('FAILED...', error.text)
          }
        )
    }
    console.log('done oye')
    form.current?.reset()
    return ''
  }
  useEffect(() => {
    form.current?.reset()
  }, [form])

  return (
    <>
      <div
        className="bg-gradient-to-r from-gray-100 to-gray-200 my-2"
        id="contact"
      >
        <div className="w-full md:max-w-5xl mx-auto p-4 md:p-20 ">
          <div className="text-5xl font-semibold text-center">Contact Me</div>
          <div className="md:flex md:justify-between my-10 gap-20">
            <div>
              <div className="text-gray-700  my-4  py-2">
                <p>
                  I am currently probably napping or building something amazing.
                  Feel free to drop a message for any suggestion or
                  collaboration, and we can get in touch.
                </p>
              </div>
              <div className="flex">
                <Image
                  src="/email.svg"
                  alt="email-icon"
                  height={40}
                  width={50}
                />
                <div className="pl-2">
                  <div className="text-xl font-semibold text-gray-700">
                    Email:
                  </div>
                  <div className="text-md text-gray-700">{data.email}</div>
                </div>
              </div>
              <div className="flex">
                <Image
                  src="/location.svg"
                  alt="location-icon"
                  height={40}
                  width={40}
                />
                <div className="pl-2">
                  <div className="text-xl font-semibold text-gray-700">
                    Location :
                  </div>
                  <div className="text-md text-gray-700">Delhi, India</div>
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-sky-100 border-2 border-blue-400  mt-10 md:mt-0 text-gray-900 px-2 md:px-20 py-10">
              <form ref={form} onSubmit={sendEmail}>
                <div className="block w-full">
                  <label className="font-semibold">Name :</label>
                  <input
                    type="text"
                    name="client_name"
                    className="outline-none max-w-full md:max-w-lg  hover:ring ring-sky-300 rounded-md border border-1 px-2 py-1 my-2"
                    required
                  />
                </div>
                <div className="block w-full">
                  <label className="font-semibold">Email :</label>
                  <input
                    type="email"
                    name="client_email"
                    className="outline-none max-w-full md:max-w-lg hover:ring ring-sky-300 rounded-md border border-1 px-2 py-1 my-2"
                    required
                  />
                </div>
                <div className="block w-full">
                  <label className="font-semibold">Message: </label>
                  <textarea
                    name="client_message"
                    className="outline-none w-full max-w-full md:max-w-lg hover:ring ring-sky-300 rounded-md border border-1 px-2 py-1 my-2"
                    rows={4}
                    required
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="bg-sky-600 text-white px-10 py-2 rounded-full"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
