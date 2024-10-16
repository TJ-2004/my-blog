import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">Want to know more about me?</h2>
        <p className="text-gray-500 my-2">Visit my website</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a href="https://tanishqjaiswal.vercel.app/" target="_blank" rel="noopener noreferrer">
            My Portfolio
          </a>
        </Button>
      </div>
      <div className="p-7 flex-2">
        <img
        className='rounded-md'
          src="./port.png"
          alt=""
          width={400}
        />
      </div>
    </div>
  );
}
