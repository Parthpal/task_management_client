const WorkSection = () => {
    return (
        <div>
            <div className="hero min-h-screen my-16 text-left">
            <div className="hero-content justify-between flex-col lg:flex-row-reverse">
                <div className='lg:ml-20'>
                <img data-aos='zoom-in-up' src="https://i.ibb.co/199F6x3/Add-tasks-pana.png" className="bg-[#E6EDFD] lg:max-w-md mx-auto rounded-lg shadow-2xl" />
                </div> 
                <div data-aos='fade-zoom-in'className=''>
                <h1 data-aos='zoom-in-up' className="text-5xl font-bold text-[#007CFF]">Discover Your Tribe: Who Benefits from Our Website</h1>
                <p className="py-6 text-gray-600 text-base">Explore a platform designed to empower and enrich the experiences of individuals across diverse fields </p>
                <div data-aos='fade-zoom-in'>
                    <h2 className='text-xl'>Developer</h2>
                    <h3 className='text-xl font-bold'>The Developer's Paradise for Task Management</h3>
                    <p className="py-6 text-gray-600 text-base">Elevate your coding projects with our task management website. Developers gain access to intuitive project organization, seamless collaboration features, and efficient workflow management..</p>
                </div>
                <div data-aos='fade-zoom-in'>
                    <h2 className='text-xl'>Corporate Professionals</h2>
                    <h3 className='text-xl font-bold'>How Corporate Professionals Thrive with Our Task Management Tools</h3>
                    <p className="py-6 text-gray-600 text-base"> Transform the way your corporate team works with our task management website. Enhance collaboration, streamline project timelines, and boost overall productivity. </p>
                </div>
                <div data-aos='fade-zoom-in'>
                    <h2 className='text-xl'> Banking Professionals</h2>
                    <h3 className='text-xl font-bold'>Banking Professionals Excel with Our Task Management Solutions</h3>
                    <p className="py-6 text-gray-600 text-base"> Navigate the complexities of banking seamlessly with our task management website. Banking professionals enjoy enhanced task organization, streamlined communication, and a robust framework for managing financial projects</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default WorkSection;