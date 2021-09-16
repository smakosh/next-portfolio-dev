import Image from 'next/image';
import contactIllustration from '../../../assets/contact.svg';
import Container from '../../../components/ui/Container';
import ContactForm from './ContactForm';
import { Details, Thumbnail, Wrapper } from './styles';

const Contact = () => (
  <Wrapper data-cy="contact" as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <Image
        src={contactIllustration}
        alt="I’m John and I’m a Backend & Devops engineer!"
      />
    </Thumbnail>
  </Wrapper>
);

export default Contact;
