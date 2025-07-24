// src/components/RSVPForm.jsx
import { useState } from 'react';

function RSVPForm() {
  const [form, setForm] = useState({ name: '', email: '', guests: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || form.guests === '') {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const scriptUrl = 'https://script.google.com/macros/s/AKfycbzoWRsjeYfAqCYe32vOOm_A5QKg2naxP6cCycytHRf6iNToPUn2SFPBvb3TZQuB8gB3lA/exec';

      const response = await fetch(scriptUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (result?.result === 'Success') {
        setSubmitted(true);
        setTimeout(() => {
          setForm({ name: '', email: '', guests: '' });
          setSubmitted(false);
        }, 4000);
      } else {
        throw new Error(result.message || 'Failed to submit RSVP.');
      }
    } catch (error) {
      console.error('RSVP submission failed:', error);
      alert('Something went wrong. Please try again.');
    }
  };



  return (
    <section className="rsvp text-white pt-2 pb-5 px-5 text-center">
      <h3 className="text-xl font-semibold mt-0 mb-[20px]">RSVP to Event</h3>

      {submitted && (
        <p className="text-green-400 text-lg mb-4">
          🎉 Thanks for RSVPing, {form.name}!
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="rsvp-form mx-auto flex flex-row justify-center items-center gap-[15px] flex-wrap"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="p-[10px] text-base rounded border-none placeholder-gray-300 text-white"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email"
          required
          className="p-[10px] text-base rounded border-none placeholder-gray-300 text-white"
        />
        <div className="relative">
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            required
            className="appearance-none p-[10px] pr-10 text-base rounded border-none text-white placeholder-gray-300 w-full"
          >
            <option value="" disabled hidden>
              Bringing friends?
            </option>
            <option value="0">Just Me</option>
            <option value="1">+1</option>
            <option value="2">+2</option>
            <option value="3">+3</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 bottom-2.5 flex items-center text-base text-gray-300 text-lg">
            ⌄
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#ff4081] text-white p-[10px] text-base rounded cursor-pointer hover:bg-[#e73370]"
        >
          Submit RSVP
        </button>
      </form>
    </section>
  );
}

export default RSVPForm;
