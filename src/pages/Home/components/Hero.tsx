export default function Hero() {
  return (
    <section id="hero">
      <div className="px-12 mx-auto max-w-7xl mt-40">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 pr-96">
          <h1 className="text-3xl font-extrabold leading-none tracking-normal mb-2">
            Hi, my name is
          </h1>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
            Kendrick Elifritz.
          </h1>
          <p className="text-blue-light text-xl">
            I'm a full-stack software developer with experience ranging from data engineering to building complex web applications. The main purpose of this site is to showcase some projects I've worked on while learning the React framework.
          </p>
        </div>
      </div>
    </section>
  )
}