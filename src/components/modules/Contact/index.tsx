import Image from 'next/future/image';
import ContactForm from './ContactForm';

const Contact = () => (
  <div className="container py-16 flex items-start justify-between flex-col lg:flex-row" id="contact">
    <div className="flex-none w-full lg:w-auto lg:flex-1 pr-0 lg:pr-8 order-2 lg:order-1">
      <ContactForm />
    </div>
    <div className="flex-none w-full lg:w-auto lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
      <Image
        src="/assets/illustrations/contact.svg"
        alt="I’m John and I’m a Backend & Devops engineer!"
        width={498}
        height={313}
      />
    </div>
  </div>
);

export default Contact;
