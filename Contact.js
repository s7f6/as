import React from "react";

const Contact = () => {
  return (
    <section id="yhteystiedot" className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Yhteystiedot</h2>

      <div className="mb-6">
        <p className="text-gray-700">A&S Barbershop</p>
        <p className="text-gray-700">Kauppakatu 18 LH 1, Seinäjoki</p>
        <p className="text-gray-700">Phone: 0407566776</p>
        <p className="text-gray-700">Open: Mon–Sat 10:00–19:00</p>
      </div>

      <div className="w-full h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="A&S Barbershop Location"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612.869113607251!2d22.835!3d62.7905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4686a4c7b95a3f61%3A0x8a7087ed6f731b84!2sKauppakatu%2018%2C%2060100%20Sein%C3%A4joki%2C%20Finland!5e0!3m2!1sen!2sfi!4v1700000000000"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
