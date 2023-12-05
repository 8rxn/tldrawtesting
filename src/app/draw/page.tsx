"use client";
import { Tldraw, setUserPreferences, useEditor } from "@tldraw/tldraw";
import { Responsive, WidthProvider } from "react-grid-layout";
import { GripHorizontal, Brush } from "lucide-react";

import "/node_modules/react-grid-layout/css/styles.css";
import { useEffect } from "react";
// import "/node_modules/react-resizable/css/styles.css";

const GridLayout = WidthProvider(Responsive);

const layout = {
  lg: [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 2, y: 0, w: 10, h: 10 },
    { i: "c", x: 0, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 0, w: 1, h: 2 },
    { i: "e", x: 0, y: 0, w: 1, h: 2 },
    { i: "f", x: 0, y: 1, w: 12, h: 2 },
  ],
  md: [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 2, y: 0, w: 10, h: 10 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 0, w: 1, h: 2 },
    { i: "e", x: 0, y: 0, w: 1, h: 2 },
    { i: "f", x: 0, y: 1, w: 10, h: 2 },
  ],
  sm: [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 2, y: 0, w: 10, h: 10 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 0, w: 1, h: 2 },
    { i: "e", x: 0, y: 0, w: 1, h: 2 },
    { i: "f", x: 0, y: 1, w: 6, h: 2 },
  ],
  xs: [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 2, y: 0, w: 10, h: 10 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 0, w: 1, h: 2 },
    { i: "e", x: 0, y: 0, w: 1, h: 2 },
    { i: "f", x: 0, y: 1, w: 4, h: 2 },
  ],
  xxs: [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 2, y: 0, w: 10, h: 10 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
    { i: "d", x: 0, y: 0, w: 1, h: 2 },
    { i: "e", x: 0, y: 0, w: 1, h: 2 },
    { i: "f", x: 0, y: 1, w: 2, h: 2 },
  ],
};

const Draw = () => {
  const editor = useEditor();
  useEffect(() => {
    setUserPreferences({
      isDarkMode: true,
      id: "",
    });
  }, []);

  return (
    <>
      <GridLayout
        className="layout font-mono min-h-[80vh]"
        layouts={layout}
        rowHeight={30}
        width={1200}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        draggableHandle=".react-grid-dragHandle"
      >
        <div
          key="a"
          className="react-grid-dragHandle hover:cursor-move bg-red-500/20 rounded-lg p-4 h-full"
        >
          <h2 className="text-sm w-full h-full grid place-items-center">
            {" "}
            Hello{" "}
            <span className="flex items-center gap-2">
              Editor <Brush className="w-4 h-4" />
            </span>{" "}
          </h2>
        </div>
        <div key="c" className="bg-purple-500/20 rounded-lg p-4 text-xs">
          Not Draggable
        </div>
        <div
          key="d"
          className="bg-yellow-500/20 rounded-lg p-4 react-grid-dragHandle text-xs"
        >
          {" "}
          You wanna guess?
        </div>
        <div
          key="e"
          className="bg-pink-500 rounded-lg p-4 react-grid-dragHandle hover:cursor-move text-xs"
        >
          Movable
        </div>
        <div key={"b"} className="inset-0 relative z-50  pb-2 pr-2">
          <Tldraw></Tldraw>
          <span className="text cursor-move">
            <span className="react-grid-dragHandle w-full flex justify-center ">
              <hr />
              <GripHorizontal className="opacity-20 hover:opacity-70 transition-opacity ease-in" />
              <hr />
            </span>
          </span>
        </div>
        <div
          key="f"
          className="bg-red-500/20 rounded-lg p-4 grid place-items-center"
        >
          <div className="text-center">
            Try Moving stuff around <br />
            Also Resize
          </div>
        </div>
      </GridLayout>
    </>
  );
};

export default Draw;
