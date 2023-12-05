import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-screen z-50">
      <div className="m-2 rounded-lg border-2 flex justify-between bg-white/80 p-4">
        <div>
          <h3 className="text-2xl text-blue-500 font-semibold"><a href="/">Draggable Tldraw</a></h3>
          <p className="text-sm">
            A sluggish draggable Tldraw whiteboard using {" "}
            <a
              className="underline underline-offset-2"
              href="http://tldraw.dev"
              target="_blank"
              rel="no-referrer"
              aria-description="Link to Tldraw Documentation"
            >
              Tldraw
            </a>{" "}
            and{" "}
            <a
              className="underline underline-offset-2"
              href="https://github.com/react-grid-layout/react-grid-layout"
              target="_blank"
              rel="no-referrer"
              aria-description="Link to React-Grid-Layout Documentation"
            >
              React Grid Layout
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-2xl">
            Built by{" "}
            <span className="text-blue-500 font-semibold">
              <a href="http://rajaryan.work">Raj Aryan</a>
            </span>
          </h3>
          <p className="text-sm">
            <a
              href="http://github.com/8rxn/"
              className="underline underline-offset-2"
              target="_blank"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
