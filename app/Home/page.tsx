import React from 'react';
import Navbar from '../Navbar/page';
import Image from 'next/image';
import Img1 from '@/app/assets/my.jpg';
import Img2 from '@/app/assets/albi1.jpg';
import ExploreButton from '../Components/Homebtn';


const Main = () => {
  return (
    <div className="bg-black h-fit">
      <Navbar />
      <div className="flex">
        <div className="w-1/2 h-screen text-white text-4xl font-extrabold">
          <h1 className="ml-48 mt-80 leading-tight">
            Yes, I am <span className="text-red-700">ALBIN JOHN,</span>
          </h1>
          <h3 className="text-2xl ml-48 leading-snug opacity-80">Frontend Developer and UI & UX Designer</h3>
          <p className="text-lg ml-48 mt-4 leading-relaxed opacity-20">
            Passionate about creating intuitive and engaging user experiences. With a strong background in frontend development, I aim to bring innovative ideas to life and enhance the usability of web applications.
          </p>
          <div className="ml-48 py-5 opacity-25">
            <ExploreButton />
          </div>
        </div>
        <div className="w-1/2 h-screen flex justify-center">
          <Image
            src={Img1}
            alt="Albin John"
            className="h-screen w-2/3 object-cover mr-4"
          />
        </div>
      </div>
      <div className="flex h-fit">
        <div className="w-1/3">
          <Image
            src={Img2}
            alt="Img2"
            className="h-fit"
          />
        </div>
        <div className="w-3/4 text-white flex justify-center items-center">
          <div>
            <h1 className="text-3xl font-bold ml-20 ">Personal Experience</h1>
            <p className='py-10 text-2xl ml-20 opacity-25'>
              During my internship at Bridgen Solutions, I gained valuable hands-on experience in frontend development, focusing on Next.js and React Redux. I contributed to building dynamic web applications, leveraging Next.js's server-side rendering capabilities to enhance performance and SEO.
              <br />
              Working with React Redux, I managed application state efficiently, ensuring a seamless user experience across various components. I collaborated with cross-functional teams to implement responsive designs and user-friendly interfaces, utilizing Tailwind CSS for styling.
              <br />
              Additionally, we had weekly reviews that provided constructive feedback, helping me improve my technical skills, problem-solving abilities, and teamwork. This experience has thoroughly prepared me for future challenges in frontend development.
            </p>
          </div>
        </div>
      </div>

      <div className='h-screen text-white'>
      <div className='w-1/2 h-screen  mt-8 p-28 opacity-20 '>
      <h1 className='text-3xl font-bold ml-20'>Skills</h1>
      <p className='text-xl ml-24'>
        I possess a diverse skill set in frontend development, specializing in HTML, CSS, and JavaScript. <br />
        I am proficient in modern CSS frameworks such as Tailwind CSS and Bootstrap, allowing me to create responsive and visually appealing designs. <br />
        My experience extends to using React with Redux Toolkit for efficient state management, along with Next.js for server-side rendering and enhanced performance. <br />
        Additionally, I have a solid understanding of Vue.js, which adds versatility to my development capabilities. <br />
        My technical expertise also includes TypeScript, improving code quality and maintainability. <br />
        I am skilled in design tools like Figma and Adobe Photoshop, enabling me to craft intuitive user interfaces and engaging visual content.
      </p>
      </div>
      <div>

      </div>
      </div>

    </div>
  );
};

export default Main;
