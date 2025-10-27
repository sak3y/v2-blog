import avatar from "../assets/avatar.png";

const About = () => {
  return (
    <div className="flex flex-col gap-12 p-2 justify-center max-w-[90vw] sm:max-w-[50vw] mt-30">
      <header className="flex items-start gap-12">
        <img src={avatar} alt="avatar" className="rounded-full aspect-auto w-30 shadow-lg"></img>
        <h1 className="text-5xl">Hi, my name is Rayhan.</h1>
      </header>

      <h2 className="text-2xl"> I'm a third-year computer science student, from the UK.</h2>
      <p className="leading-relaxed">
        Here's the deal, I've worked on a range of projects, from collaborating on an e-commerce
        store for gluten-free products, to designing my own portfolio and building my own
        chrome-extension. And that's just the start. I'm here because I like building and want to
        solve real problems. Two birds, one stone. When I'm not coding, I'm either working out, rock
        climbing, or hanging out with friends. But you'll probably just find me binging the latest
        show on Netflix. P.S: I'm also active on Github.
      </p>
    </div>
  );
};

export default About;
