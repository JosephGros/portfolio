
function Contact() {


    return (
      <>
        <div className="p-2 bg-slate-950 rounded-md m-6">
          <h1 className="font-bold text-4xl m-2 mt-6 w-80">Contact</h1>
          <br />
        <hr />
        <br />
          <ul>
            <li className="font-semibold m-2 text-lg md:text-xl grid grid-cols-7 gap-2 justify-items-center">
              <i className="ci ci-gmail ci-xl"></i>{" "}
              <a
                href="mailto:wiley.joseph.gros@gmail.com"
                className="hover:text-slate-400 col-start-2 col-span-6"
              >
                wiley.joseph.gros@gmail.com
              </a>
            </li>
            <li className="font-semibold m-2 text-lg md:text-xl grid grid-cols-7 gap-2 justify-items-center">
              <i className="ci ci-apple ci-xl"></i>
              <a href="tel:+46762220910" className="hover:text-slate-400 col-start-2 col-span-6">
                076 222 09 10
              </a>
            </li>
            <li className="font-semibold m-2 text-lg md:text-xl grid grid-cols-7 gap-2 justify-items-center">
              <i className="ci ci-github ci-xl"></i>
              <a
                href="https://github.com/JosephGros"
                className="hover:text-slate-400 col-span-6"
              >
                Github
              </a>
            </li>
            <li className="font-semibold m-2 text-lg md:text-xl grid grid-cols-7 gap-2 justify-items-center">
              <i className="ci ci-linkedin ci-xl"></i>
              <a
                href="https://github.com/JosephGros"
                className="hover:text-slate-400 flex items-center col-span-6"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </>
    );
}

export default Contact;