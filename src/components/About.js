import AboutImg from '../assets/about.png';

export default function About () {
    const config  = {
        line1: 'Hi, My name is Preethika.Pre-final year AI and Data Science student passionate about innovation, problem-solving, and full-stack development.',
        line2: 'I am proficient in Frontend skills like HTML,CSS,Javascript,React.js',
        line3: 'Tools: GitHub, Canva, Figma, Power BI, Unity, Blender',
        line4:'Soft Skills: Teamwork, Problem-Solving, Leadership, Time Management'
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-5 md:w-1/2'>
            <img src={AboutImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}