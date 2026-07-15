import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMap from "../components/Contact/GoogleMap";
import LiveChat from "../components/Contact/LiveChat";
import SocialLinks from "../components/Contact/SocialLinks";

const Contact = () => {
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <GoogleMap />
      <LiveChat />
      <SocialLinks />
    </>
  );
};

export default Contact;