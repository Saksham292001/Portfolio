import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Whats-app Clone',
      description: 'Implemented third-party authentication and message tracking in a Next.js 14 app. Enhanced the frontend with TailwindCSS and deployed on Vercel Cloud. Integrated ChatGPT and DALL-E features using the OpenAI API for AI-generated responses and images in the chat.',
      techStack: 'Technologies: HTML, Typescript, TailwindCSS, ShadCn UI/UX, Next.js 14, MongoDB, OpenAI.',
      link: 'https://funky-barnacle-67.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fwhatsapp-clone-9bmr.vercel.app%2F',
    },
    {
      title: 'Yoom: Video Calling App',
      description: 'Implemented third-party authentication using Next.js 14, TailwindCSS, and Shadcn UI. Developed features for video calling, screen sharing, and scheduling, successfully deploying the application on Vercel Cloud to enhance user collaboration and accessibility.',
      techStack: 'Technologies: HTML, Typescript, TailwindCss, ShadCn UI/UX, Next.js 14, MongoDB.',
      link: 'https://zoom-calling-app.vercel.app/sign-in?redirect_url=https%3A%2F%2Fzoom-calling-app.vercel.app%2F',
    },
    {
      title: 'Brainwave UI/UX',
      description:'Utilized TailwindCSS for responsive frontend design, ensuring a seamless user experience across devices. Enhanced functionality with HTML, and successfully deployed the web page on Netlify Cloud, showcasing my skills in modern web development and cloud deployment.',
      techStack: 'Technologies: HTML, CSS, Javascript, TailwindCss, React.js',
      link: 'https://symphonious-seahorse-727a01.netlify.app/',
    },
    {
      title: 'Movie Recommendation System',
      description:'Developed a content-based movie recommendation system using Python ML libraries, leveraging cosine similarity for detection. The application is deployed on Streamlit Cloud, providing users with personalized movie suggestions based on their preferences and enhancing their viewing experience.',
      techStack: 'Technologies: Python, Machine Learning libraries- Sckit Learn',
      link: 'https://nsy5biwye8qjryfrdxp83w.streamlit.app/',
    },
  ];

  return (
    <section className="bg-black text-bluish p-6">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.title} className="border border-bluish p-4 hover:shadow-lg transition duration-300">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p>{project.description}</p>
            <p className="italic">{project.techStack}</p>
            <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
