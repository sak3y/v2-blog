const Contact = () => {
  return (
    <div className="flex flex-col gap-12 p-2 justify-center max-w-[90vw] sm:max-w-[50vw] mt-30 text-center">
      <h1 className="text-5xl font-black italic">Contact</h1>
      <p className="text-xl">
        If you wanna get in touch, message me on{" "}
        <a
          href="https://www.linkedin.com/in/sheikh-rayhan-ahmed"
          target="_blank"
          className="hover:border-b hover:text-purple-500 text-purple-700 dark:hover:text-purple-600 dark:text-purple-500"
        >
          LinkedIn.
        </a>{" "}
        I'm more likely to respond.
      </p>
    </div>
  );
};

export default Contact;
