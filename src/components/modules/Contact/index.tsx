import Container from 'components/ui/Container';
import ContactForm from './ContactForm';
import { Wrapper, Details, Thumbnail } from './styles';

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img
        src="/assets/illustrations/contact.svg"
        alt="I’m John and I’m a Backend & Devops engineer!"
      />
    </Thumbnail>
  </Wrapper>
);

export default Contact;
