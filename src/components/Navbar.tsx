import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import ChangeTheme from './ChangeTheme';
import { CgClose } from 'react-icons/cg';
import { BiMenuAltRight } from 'react-icons/bi';

export default function Navbar() {
  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];
  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-2xl font-medium text-sky-500"
                >
                  <span>Saas Project</span>
                </Link>
                <div className="flex gap-2 lg:hidden">
                  <ChangeTheme />
                  <Disclosure.Button aria-label="Toggle Menu">
                    {open && (
                      <CgClose className="z-20 text-3xl hover:text-sky-500" />
                    )}
                    {!open && (
                      <BiMenuAltRight className="text-3xl hover:text-sky-500" />
                    )}
                  </Disclosure.Button>
                </div>

                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className="-ml-4 w-full rounded-md px-4 py-2 font-medium hover:text-sky-500 dark:text-white dark:hover:text-sky-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/"
                      className="mt-3 w-full rounded-md bg-sky-500 px-6 py-2 text-center font-medium text-white hover:bg-sky-600 lg:ml-5"
                    >
                      Get Started
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="inline-block rounded-md px-4 py-2 text-lg font-medium no-underline hover:text-sky-500 dark:text-white dark:hover:text-sky-500"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mr-3 hidden space-x-4 lg:flex">
          <Link
            href="/"
            className="rounded-md bg-sky-500 px-6 py-2 font-medium text-white hover:bg-sky-600 md:ml-5"
          >
            Get Started
          </Link>
          <ChangeTheme />
        </div>
      </nav>
    </div>
  );
}
