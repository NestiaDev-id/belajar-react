import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
      <section className="section">
        <h1 className="section-title">Contact Page</h1>
        <p className="section-description">
          Hubungi saya pada kontak dibawah ini
        </p>
        <ul>
          <li>08123456789</li>
          <li>Test@gmail.com</li>
        </ul>
      </section>
    </>
  );
}
