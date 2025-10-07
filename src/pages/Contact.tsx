export default function Contact(){
    return (
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
          Let’s Work Together
        </h2>
        <p className="text-neutral mb-8">
          Got a project in mind or just want to say hi? Reach out to me!
        </p>
        <a
          href="mailto:geraldpamintuan19@gmail.com"
          className="bg-primary text-black px-8 py-3 rounded-lg hover:bg-secondary transition"
        >
          Say Hello
        </a>
      </section>
    );
}