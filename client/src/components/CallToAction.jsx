import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 flex flex-col justify-center">
        <h2 className="text-2xl">Want to learn about Javascript?</h2>
        <p className="text-gray-500 my-2">Checkout these project ...</p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a href="www.google.com" target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://imgs.search.brave.com/7PiXP8qSq5YLiZUGG-KoTjYfM24SmWLWh_B6kYevtzc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iMTY5/NDUzNC5zbXVzaGNk/bi5jb20vMTY5NDUz/NC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNC9TY3JlZW4t/U2hvdC0yMDIxLTA0/LTI2LWF0LTE2LjMz/LjI1LTEwMjR4NDQw/LnBuZz9sb3NzeT0x/JnN0cmlwPTEmd2Vi/cD0x"
          alt=""
        />
      </div>
    </div>
  );
}
