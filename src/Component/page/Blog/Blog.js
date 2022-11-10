import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <Helmet>
        <title>Blog</title>
        
      </Helmet>
             <h2 className="text-5xl text-orange-600 text-center font-bold mt-10">Question Blog!</h2>

            <div className="card shadow-xl w-full">
            <h2 className="text-4xl text-black font-bold mt-10">1.Difference between sql and nosql?</h2>
  <figure><img  className='w-96 mt-10' src="https://www.agiratech.com/wp-content/uploads/2018/01/Difference-between-SQL-and-NOSQL-2.png" alt="Shoes" /></figure>
  <div className="card-body">
   
    <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL..From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.

Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.

To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing</p>
     
  </div>

  {/* 2nd */}
</div>
            <div className="card shadow-xl w-full">
            <h2 className="text-4xl text-black font-bold mt-10">2.What is JWT, and how does it work??</h2>
  <figure><img  className='w-96 mt-10' src="https://miro.medium.com/max/1200/1*tW-8Y2edq04b4__zF0Jm9Q.png" alt="Shoes" /></figure>
  <div className="card-body">
   
    <p>SJSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed</p>
     
  </div>
</div>
            <div className="card shadow-xl w-full">
            <h2 className="text-4xl text-black font-bold mt-10">3.What is the difference between javascript and NodeJS??</h2>
  <figure><img  className='w-96 mt-10' src="https://www.atliq.com/wp-content/uploads/2022/06/Know-the-difference-between-javascript-and-node-js-4-1024x576.jpg" alt="Shoes" /></figure>
  <div className="card-body">
   
    <p>SJavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
     
  </div>
</div>
            <div className="card shadow-xl w-full">
            <h2 className="text-4xl text-black font-bold mt-10">4.How does NodeJS handle multiple requests at the same time?</h2>
  <figure><img  className='w-96 mt-10' src="https://forum.golibrary.co/wp-content/uploads/2020/04/nodejs.png" alt="Shoes" /></figure>
  <div className="card-body">
   
    <p>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>
     
  </div>
</div>       
        </div>
    );
};

export default Blog;