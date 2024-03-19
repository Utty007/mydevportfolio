'use client'

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaLocationArrow, FaMap, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Status from '../UI/Status';
import { UiFunctions } from '@/Store/UiFunctions';

function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const emailInputRef = useRef<HTMLInputElement | null>(null);
  const messageInputRef = useRef<HTMLTextAreaElement | null>(null);

  const [nameInput, setNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [messageInput, setMessageInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = UiFunctions(state => [state.submitStatus, state.toggleStatus])
  const [status, setStatus] = useState('')

  const handleNameBlur = () => {
    const isNameEmpty = nameInputRef.current?.value.trim() === '';
    setNameInput(isNameEmpty);
  };

  const handleEmailBlur = () => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInputRef.current?.value.trim() ?? '');
    setEmailInput(!isValidEmail);
  };

  const handleMessageBlur = () => {
    const isMessageEmpty = messageInputRef.current?.value.trim() === '';
    setMessageInput(isMessageEmpty);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true)

    if (formRef.current) {
      emailjs
        .sendForm('service_5txxq2i', 'template_oirk6wf', formRef.current, {
          publicKey: '7k5t5AVMQGiFcffTy',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setIsLoading(false)
            if (nameInputRef.current?.value) {
                nameInputRef.current.value = ''
            }
             if (emailInputRef.current?.value) {
                emailInputRef.current.value = ''
            }
             if (messageInputRef.current?.value) {
                messageInputRef.current.value = ''
            }
            setSubmitted(true);
            setStatus('SUCCESS')
          },
          (error) => {
            console.log('FAILED...', error.text);
            setIsLoading(false);
            setSubmitted(true);
            setStatus('FAILED')
          },
        );
    }
  };

  return (
    <div className='px-12'>
      <h1 className='text-center mt-10 mb-5 text-5xl text-[#fa043d]'>Contact Me</h1>
      <div className='flex flex-col-reverse lg:flex-row gap-4 justify-center'>
        <div className='flex flex-col sm:flex-row lg:flex-col gap-3'>
          <div data-aos="zoom-out-down" data-aos-duration="2000" className='bg-white dark:bg-black shadow-sm w-full sm:w-80 h-40 flex flex-col items-center justify-evenly'>
            <FaMap />
            <h3>Lagos, Nigeria.</h3>
          </div>
          <div className='bg-white dark:bg-black shadow-sm w-full sm:w-80 h-40  flex flex-col items-center justify-evenly'>
            <FaPhone />
            <h3>09046169674</h3>
          </div>
          <div data-aos="zoom-out-up" data-aos-duration="2000" className='bg-white dark:bg-black shadow-sm w-full sm:w-80 h-40  flex flex-col items-center justify-evenly'>
            <MdEmail />
            <h3>Kayodeuthman001@gmail.com</h3>
          </div>
        </div>
        <div data-aos="zoom-in-down" data-aos-duration="2000" className='bg-white dark:bg-black shadow-sm dark:shadow-black rounded-md p-4 h-auto'>
          <form ref={formRef} onSubmit={sendEmail} className='flex flex-col gap-4 sm:gap-6 lg:w-[700px]'>
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <div className='w-full sm:w-[50%]'>
                <input required className={`bg-blue-50 dark:bg-[#24292c] text-black dark:text-white p-2 rounded-md w-full outline-none ${nameInput ? 'border-red-500' : ''}`} type="text" ref={nameInputRef} name="from_name" placeholder='Enter Your Name' onBlur={handleNameBlur} />
                {nameInput && <p className='text-[12px] text-[#fa043d]'>Name is Required</p>}
              </div>
              <div className='w-full sm:w-[50%]'>
                <input required className={`bg-blue-50 dark:bg-[#24292c] text-black dark:text-white p-2 rounded-md w-full outline-none ${emailInput ? 'border-red-500' : ''}`} type='text' ref={emailInputRef} name='user_email' placeholder='Enter Your Email' onBlur={handleEmailBlur} />
                {emailInput && <p className='text-[12px] text-[#fa043d]'>Please enter a valid Email Address</p>}
              </div>
            </div>
            <div>
              <textarea required className={`bg-blue-50 dark:bg-[#24292c] text-black dark:text-white p-2 rounded-md w-full outline-none ${messageInput ? 'border-red-500' : ''}`} ref={messageInputRef} name="message" placeholder='Enter Your Message' cols={30} rows={13} onBlur={handleMessageBlur}></textarea>
              {messageInput && <p className='text-[12px] text-[#fa043d]'>Enter a message</p>}
            </div>
            <button className='flex items-center gap-2 bg-[#fa043d] text-white p-3 rounded-md justify-center'>
                {!isLoading && <span className='flex items-center gap-2'>Send Message <FaLocationArrow /></span>}
                {isLoading && <span className="loading loading-spinner loading-lg"></span>}
            </button>
          </form>
        </div>
      </div>
      {submitted && <Status status={status} />}
    </div>
  )
}

export default Contact;
