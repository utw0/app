import NextLink from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RouteData } from 'data/routes';
import * as React from "react"


declare module "framer-motion" {
  export interface AnimatePresenceProps {
    children?: React.ReactNode
  }
}

export const DropLink = ({
  page,
  href,
  setActive,
}: {
  page: string;
  href: string;
  setActive: (active: boolean) => void;
}) => {
  return (
    <NextLink href={href}>
      <a
        onClick={() => setActive(false)}
        className="font-medium focus:outline-none transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200 flex flex-row items-center"
      >
        {page}
      </a>
    </NextLink>
  );
};

export const Dropdown = () => {
  const [active, setActive] = useState(false);
  const ref = useRef(null);
  const toggleActive = () => setActive((active) => !active);
  useClickAway(ref, () => setActive(false));

  return (
    <div ref={ref}>
      <button
        onClick={() => toggleActive()}
        aria-label="Dropdown"
        className="font-medium flex items-center justify-center focus:outline-none mr-10 transition duration-300 ease-in-out hover:text-indigo-900 dark:hover:text-indigo-200"
      >
        <FontAwesomeIcon className="w-4 h-4" icon={['fas', 'caret-down']} />
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onMouseLeave={() => setActive(false)}
            className="text-xs absolute border border-black bg-white dark:border-white dark:bg-black py-3 pl-4 pr-12 rounded mt-4 grid gap-3"
          >
            {RouteData.filter((route) => route.type === 'dropdown').map((route) => (
              <DropLink key={uuidv4()} page={route.name} href={route.href} setActive={setActive} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
