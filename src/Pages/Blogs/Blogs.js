import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border my-2'>
                <h2 className='text-primary font-bold'>Ques: How will you improve the performance of a React Application?</h2><br></br>
                <p className='font-bold' >Ans: Make good use of state and keeping component state local where necessary.Memoizing React components to prevent unnecessary re-renders.
                   Code-splitting in React using dynamic import() and using apis.</p>
            </div>
            <div className='border my-2'>
                <h2 className='text-primary font-bold'>Ques: Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='font-bold'>Ans: One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made</p>
            </div>
            <div className='border my-2'>
                <h2 className='text-primary font-bold'>Ques: How does prototypical inheritance work?</h2><br></br>
                <p className='font-bold'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
            </div>
            <div className='border my-2'>
                <h2 className='text-primary font-bold'>Ques: What is a unit test? Why should write unit tests?</h2><br></br>
                <p className='font-bold'>Ans: UNIT TESTING is a type of software testing where individual units or components of a software are tested.</p>
            </div>
            <div className='border my-2'>
                <h2 className='text-primary font-bold'>Ques: You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='font-bold'>Ans: By using the map function</p>
            </div>
        </div>
    );
};

export default Blogs;