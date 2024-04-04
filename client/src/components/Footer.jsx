import { Footer, FooterCopyright, FooterDivider } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsYoutube,
} from 'react-icons/bs';
export default function FooterComp() {
  return (
    <Footer container className="border border-t-8 border-teal-500 ">
      <div className=" w-full max-w-7xl mx-auto">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white "
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md text-white">
                T.J.
              </span>
              <span>Blog</span>
            </Link>
          </div>
          <div className=" grid grid-cols-2 sm:grid-cols-3 mt-4 sm:gap-6 gap-8">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link href="/projects">Projects</Footer.Link>
                <Footer.Link href="/about">T.J Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div>
              <Footer.Title title="Follow Us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/TJ-2004"
                  target="_blank"
                  rel="noopener nonreferrer"
                >
                  Github
                </Footer.Link>
                <Footer.Link
                  href="https://twitter.com/tanishqjais9756"
                  target="_blank"
                  rel="noopener nonreferrer"
                >
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>

            <div className=" mt-5 sm:mt-0">
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="/">Privacy Policy</Footer.Link>
                <Footer.Link href="/">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright
            by="Tanishq's Blog"
            href="/"
            year={new Date().getFullYear()}
          />

          <div className="flex gap-6 mt-4 sm:mt-0 sm:justify-center ">
            <Footer.Icon
              icon={BsYoutube}
              href="https://www.youtube.com/channel/UC4_KhmZ50sENvQU58T-23lw"
              target="_blank"
              rel="noopener nonreferrer"
            />
            <Footer.Icon
              icon={BsInstagram}
              href="https://www.instagram.com/tanishq6638/"
              target="_blank"
              rel="noopener nonreferrer"
            />
            <Footer.Icon
              href="https://twitter.com/tanishqjais9756"
              icon={BsTwitter}
              target="_blank"
              rel="noopener nonreferrer"
            />
            <Footer.Icon
              href="https://github.com/TJ-2004"
              target="_blank"
              rel="noopener nonreferrer"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
