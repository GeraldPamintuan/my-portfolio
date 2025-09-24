export default function Projects(){
    return(
        <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-primary text-center mb-10">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((proj) => (
            <div
              key={proj}
              className="p-6 border border-neutral rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-heading font-semibold mb-2">
                Project {proj}
              </h3>
              <p className="text-neutral mb-4">
                A short description about this project. Explain the tech used
                and what makes it cool.
              </p>
              <a
                href="#"
                className="text-secondary font-medium hover:text-accent"
              >
                View More →
              </a>
            </div>
          ))}
        </div>
      </section>
    )
}