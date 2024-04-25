import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div>
      <div className="">
        <h2>Want to learn about Javascript?</h2>
        <p>Checkout these project ...</p>
        <Button gradientDuoTone="purpleToPink">
          <a href="www.google.com"> Learn More</a>
        </Button>
      </div>
      <div className="p-7">
        <img
          src="https://imgs.search.brave.com/7PiXP8qSq5YLiZUGG-KoTjYfM24SmWLWh_B6kYevtzc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iMTY5/NDUzNC5zbXVzaGNk/bi5jb20vMTY5NDUz/NC93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MS8wNC9TY3JlZW4t/U2hvdC0yMDIxLTA0/LTI2LWF0LTE2LjMz/LjI1LTEwMjR4NDQw/LnBuZz9sb3NzeT0x/JnN0cmlwPTEmd2Vi/cD0x"
          alt=""
        />
      </div>
    </div>
  );
}
