import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section id="contact" className="pt-20">
      <div className="border-b border-neutral-900 pb-20">
        <h1 className="text-center text-4xl">Get in Touch</h1>
        <div className="text-center tracking-tighter">
          <p className="my-4">{CONTACT.address}</p>
          <p className="my-4">{CONTACT.phoneNo}</p>
          <a href="#home" className="border-b">
            {CONTACT.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
