import React from 'react';
import part1 from '../../assets/computer parts/part1.avif'
import part2 from '../../assets/computer parts/part2.avif'
import part3 from '../../assets/computer parts/part3.avif'
import part4 from '../../assets/computer parts/part4.avif'
import part5 from '../../assets/computer parts/part5.avif'

import Service from './Service';


const Services = () => {
    
    const services = [
        {
            _id: 1,
            name: 'Motherboard',
            description: 'The motherboard is the main board that is screwed directly inside the computer case. All other cards and everything else plugs directly into the motherboard, hence its name.',
            img: part1
        },
        {
            _id: 2,
            name: 'CPU',
            description: 'The CPU is basically like the brain of a computer. It processes all the information on a computational level.It takes information from the RAM and processes it to perform the tasks required by the computer.',
            img: part2
        },
        {
            _id: 3,
            name: 'Memory',
            description: 'The graphics processing unit, or GPU, has become one of the most important types of computing technology, both for personal and business computing. Designed for parallel processing, the GPU is used in a wide range of applications, including graphics and video rendering.',
            img: part3
        },
        {
            _id: 4,
            name: ' Hard Drive or Solid State Drive',
            description: 'A hard drive is found in most computers. It’s usually a mechanical drive that stores all the data.Apart from storing data, it can also be used as a boot drive to run the operating system from it.',
            img: part4
        },
        {
            _id: 5,
            name: 'Graphics Card',
            description: 'A graphics card processes the data from the motherboard and sends the appropriate information to the monitor for it to be displayed.It can do so using an HDMI, DisplayPort, DVI, or VGA connector.A graphics card can also be referred to as a video card or a display card.',
            img: part5
        },
        
    ];
    return (
        
        <div className='my-28'>
            <div className='text-center'>
                <h3 className='text-primary  text-xl font-bold uppercase'>Our Services</h3>
                <h2 className='text-4xl'>Tools We Provide</h2>
            </div>
            
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service =>
                    <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            
        </div>
        
    );
};

export default Services;