import React from 'react'

const About = () => {
  return (
    <div>
      <div className='p-5 md:px-10 py-5 shadow-sm backdrop-blur-md relative z-[50]'>

        {/* Introduction */}
        <div className='font-bold text-4xl mb-5'>
          Hello! 👋
        </div>

        <div className='mb-3 font-[300] text-lg'>
          I'm Shubham Anand, a Full Stack Developer with 1 year of
          professional experience building and deploying web and mobile
          applications. I specialize in React.js, React Native, Angular,
          Node.js, and cloud technologies.
        </div>

        <div className='mb-3 font-[300] text-lg'>
          I've worked on products across HealthTech, EdTech, and Business
          domains, contributing to everything from frontend development
          and backend APIs to cloud infrastructure and production deployments.
        </div>

        <div className='mb-5 font-[300] text-lg'>
          I also enjoy exploring system design, application scalability,
          real-time communication, and distributed systems. Feel free to
          connect with me on social platforms using the username{' '}
          <span className='font-bold rounded-md'>
            shubham09anand
          </span>{' '}
          or reach out through the contact links above.
        </div>


        {/* Experience */}
        <div className='pl-4 mb-8'>
          <div className='text-4xl mb-5 font-bold'>
            Experience
          </div>

          <div className='mb-5'>
            <div className='text-2xl font-semibold'>
              Software Developer I
            </div>

            <div className='text-sm font-bold mt-1'>
              Riverhouse Technologies Private Limited
            </div>

            <div className='text-xs font-extrabold mt-1 mb-3'>
              June 2025 – June 2026
            </div>

            <div className='text-lg font-light'>
              Developed and maintained full-stack web and mobile
              applications using Angular, React.js, React Native,
              Node.js, MySQL, and MongoDB.
            </div>

            <div className='text-lg font-light mt-2'>
              Designed and implemented RESTful APIs, developed
              reusable UI components, and integrated frontend
              applications with backend services.
            </div>

            <div className='text-lg font-light mt-2'>
              Managed AWS infrastructure, deployment pipelines,
              and production releases. Also contributed to
              application architecture, performance optimization,
              and production issue resolution.
            </div>
          </div>
        </div>


        {/* Technical Skills */}
        <div className='pl-4 mb-8'>
          <div className='text-4xl mb-5 font-bold'>
            Technical Skills
          </div>

          <div className='mb-4'>
            <div className='text-xl font-semibold mb-1'>
              Frontend Development
            </div>
            <div className='text-lg font-light'>
              React.js, React Native, Angular, JavaScript,
              TypeScript, HTML5, CSS3, Tailwind CSS, Bootstrap
            </div>
          </div>

          <div className='mb-4'>
            <div className='text-xl font-semibold mb-1'>
              Backend Development
            </div>
            <div className='text-lg font-light'>
              Node.js, Express.js, REST APIs, Socket.IO
            </div>
          </div>

          <div className='mb-4'>
            <div className='text-xl font-semibold mb-1'>
              Databases
            </div>
            <div className='text-lg font-light'>
              MongoDB, MySQL, SQLite, Mongoose
            </div>
          </div>

          <div className='mb-4'>
            <div className='text-xl font-semibold mb-1'>
              Cloud & DevOps
            </div>
            <div className='text-lg font-light'>
              AWS EC2, ECS, ECR, S3, Application Load Balancer,
              Docker, Nginx, PM2, GitHub Actions, CI/CD
            </div>
          </div>

          <div className='mb-4'>
            <div className='text-xl font-semibold mb-1'>
              Tools & Concepts
            </div>
            <div className='text-lg font-light'>
              Git, GitHub, Postman, Linux, Redux Toolkit,
              Redux Saga, System Design, Authentication,
              Load Balancing, Rate Limiting
            </div>
          </div>
        </div>


        {/* Projects */}
        <div className='pl-4 mb-8'>
          <div className='text-4xl mb-5 font-bold'>
            Projects
          </div>

          <div className='mb-5'>
            <div className='text-2xl font-semibold'>
              Trufxl – Business Platform
            </div>

            <div className='text-sm font-semibold mt-1 mb-2'>
              Angular · React.js · Node.js · MySQL · AWS
            </div>

            <div className='text-lg font-light'>
              Developed the complete user-facing platform from
              scratch, maintained the admin panel, designed backend
              APIs, integrated database operations, and managed
              AWS deployment and production infrastructure.
            </div>
          </div>

          <div className='mb-5'>
            <div className='text-2xl font-semibold'>
              Live Gracious – HealthTech Platform
            </div>

            <div className='text-sm font-semibold mt-1 mb-2'>
              React.js · React Native · Node.js · MongoDB · AWS
            </div>

            <div className='text-lg font-light'>
              Developed web and mobile applications from scratch,
              implemented backend APIs using Node.js and MongoDB,
              and managed AWS infrastructure, application
              deployments, and production releases.
            </div>
          </div>

          <div className='mb-5'>
            <div className='text-2xl font-semibold'>
              Careerzila – EdTech Platform
            </div>

            <div className='text-sm font-semibold mt-1 mb-2'>
              React.js · Node.js · MySQL · AWS
            </div>

            <div className='text-lg font-light'>
              Implemented frontend architecture, developed backend
              APIs, integrated database operations, and handled
              deployment and production support.
            </div>
          </div>
        </div>


        {/* Personal Projects */}
        <div className='pl-4 mb-8'>
          <div className='text-4xl mb-5 font-bold'>
            Personal Projects
          </div>

          <div className='mb-5'>
            <div className='text-2xl font-semibold'>
              PingMe – Real-Time Messaging Application
            </div>

            <div className='text-sm font-semibold mt-1 mb-2'>
              React Native · Node.js · Express.js · MongoDB ·
              Socket.IO · Redux Toolkit · SQLite · Firebase · AWS S3
            </div>

            <div className='text-lg font-light'>
              Built a full-featured real-time messaging application
              for Android and iOS with offline message persistence,
              real-time synchronization, authentication, media
              sharing, scheduled messages, notifications, and
              background messaging workflows.
            </div>
          </div>

          <div className='mb-5'>
            <div className='text-2xl font-semibold'>
              Scalable Load Balancer & Rate Limiter
            </div>

            <div className='text-sm font-semibold mt-1 mb-2'>
              Node.js · Docker · Nginx · Redis · AWS
            </div>

            <div className='text-lg font-light'>
              Built a custom load balancer to distribute traffic
              across multiple backend instances. Implemented
              Token Bucket rate limiting, health checks, and
              failover mechanisms. Containerized services using
              Docker and deployed them on AWS.
            </div>
          </div>
        </div>


        {/* Education */}
        <div className='pl-4 mb-5'>
          <div className='text-4xl mb-5 font-bold'>
            Education
          </div>

          <div className='mb-2'>
            <div className='text-2xl font-semibold'>
              Bachelor of Technology
            </div>

            <div className='text-sm font-semibold mt-1'>
              Computer Science Engineering
            </div>

            <div className='text-xs font-extrabold mt-1'>
              Graduation Year: 2025
            </div>

            <div className='text-lg font-light mt-2'>
              Bhilai Institute of Technology, Durg,
              Chhattisgarh.
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About