"use client";

import { FormEvent, useState } from "react";

const checks = ["No obligation", "Private & secure", "Reply by message"];
const steps = [
  ["01", "Tell us the basics", "Share the property address, type, and your price expectations in a few quick steps."],
  ["02", "We review the details", "Taha checks the information before reaching out, so your time is treated with respect."],
  ["03", "Get a clear response", "Receive a straightforward message about the next step, with no pressure to proceed."],
];
const faqs = [
  ["How long does the enquiry take?", "Most sellers finish the first step in under two minutes. You can add the remaining details when it suits you."],
  ["Will I be asked to book a call?", "No. Taha works remotely and starts the conversation by message, so you stay in control of how you communicate."],
  ["What details will I need?", "Your address, property type, expected price, condition, title status, and the reason you are considering a sale."],
  ["Is there any obligation?", "None at all. An enquiry simply helps establish whether the property is a suitable fit before anyone spends time on a conversation."],
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  function submitForm(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }

  return <main>
    <section className="hero" id="enquiry">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Taha Property home"><span className="brand-mark" aria-hidden="true">⌂</span><span>Taha Property</span></a>
        <div className="nav-links"><a href="#how-it-works">How it works</a><a href="#contact">Contact</a></div>
      </nav>
      <div className="shell hero-grid" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Private seller intake</p><h1>Thinking of selling your property?</h1>
          <p className="hero-text">Share a few details in under 2 minutes. Get a clear, no-pressure response — privately.</p>
          <div className="hero-actions"><a className="button button-light" href="#property-form">Start your property enquiry <span>→</span></a><a className="text-link" href="#how-it-works">How it works <span>→</span></a></div>
          <ul className="check-row">{checks.map((check) => <li key={check}><span>✓</span>{check}</li>)}</ul>
        </div>
        <form className="intake-card" id="property-form" onSubmit={submitForm}>
          {submitted ? <div className="success" role="status"><span className="success-icon">✓</span><h2>Thanks — your enquiry is ready.</h2><p>In a live version, these details would be sent securely to Taha so he can reply by message.</p><button className="button button-dark" type="button" onClick={() => setSubmitted(false)}>Start another enquiry</button></div> : <>
            <p className="card-kicker">Private &amp; secure</p><h2>Tell us about your property</h2>
            <label>Property address<input required name="address" placeholder="Enter full address" /></label>
            <label>Property type<select required name="type" defaultValue=""><option value="" disabled>Select property type</option><option>House</option><option>Flat / apartment</option><option>Terraced house</option><option>Commercial property</option><option>Land</option><option>Other</option></select></label>
            <label>Expected price<select required name="price" defaultValue=""><option value="" disabled>Select price range</option><option>Under £100,000</option><option>£100,000 – £250,000</option><option>£250,000 – £500,000</option><option>£500,000 – £1m</option><option>Over £1m</option><option>Not sure yet</option></select></label>
            <button className="button button-dark submit" type="submit">Continue <span>→</span></button><p className="form-note">Your information is only used to understand your property enquiry.</p>
          </>}
        </form>
      </div>
    </section>
    <section className="intro shell"><p className="eyebrow dark">A calmer way to start</p><div className="intro-grid"><h2>Less back-and-forth.<br />More useful conversations.</h2><p>Before Taha contacts buyers, he needs the property details that make a deal clear. This short intake filters out time-wasters while making it easy for serious sellers to get started.</p></div></section>
    <section className="steps-section" id="how-it-works"><div className="shell"><p className="eyebrow dark">How it works</p><h2 className="section-title">Three simple steps, on your terms.</h2><div className="steps">{steps.map(([number, title, description]) => <article className="step" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>
    <section className="details shell"><div className="details-panel"><p className="eyebrow">What we’ll ask</p><h2>Only the details needed to make an informed first response.</h2><p>Keep the first step light. If it looks like a fit, there is room to share more context afterwards.</p></div><ul className="detail-list"><li><b>Property basics</b><span>Address, type, and current condition</span></li><li><b>Your expectations</b><span>Price range and preferred timeline</span></li><li><b>Sale readiness</b><span>Title status and reason for selling</span></li><li><b>Best way to reply</b><span>Message-first communication, no surprise calls</span></li></ul></section>
    <section className="faq-section"><div className="shell faq-grid"><div><p className="eyebrow dark">Questions, answered</p><h2>Simple, private, and straightforward.</h2><a className="button button-dark" href="#property-form">Start an enquiry <span>→</span></a></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className="faq" key={question}><button aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><span>{openFaq === index ? "−" : "+"}</span></button>{openFaq === index && <p>{answer}</p>}</article>)}</div></div></section>
    <footer id="contact"><div className="shell footer-inner"><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">⌂</span><span>Taha Property</span></a><p>Private seller enquiries, handled with clarity.</p><a href="mailto:hello@tahaproperty.co.uk">hello@tahaproperty.co.uk</a></div></footer>
  </main>;
}
