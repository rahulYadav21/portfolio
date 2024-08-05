import { faWpexplorer } from "@fortawesome/free-brands-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

const AccordionContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
  const [select, setSelect] = useState(value);

  useEffect(() => {
    onChange?.(select);
  }, [select]);
  return (
    <>
      <ul {...props} className="w-full">
        <AccordionContext.Provider value={{ select, setSelect }}>
          {children}
        </AccordionContext.Provider>
      </ul>
    </>
  );
}
export function AccordionItems({ children, value, triger, ...props }) {
  const { select, setSelect } = useContext(AccordionContext);
  const open = select === value;

  const ref = useRef(null);

  return (
    <li className="border-b" {...props}>
      <header
        role="button"
        onClick={() => setSelect(open ? null : value)}
        className="flex justify-between items-center p-4 font-medium"
      >
        {triger}
        <FontAwesomeIcon
          icon={faChevronDown}
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transform duration-1000"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="p-2 pb-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  );
}
