import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className="blog-style ">
            <div className="container ">
                <div className="row ">
                    <div className="col-lg-8 col-md-6">
                        <img className="img-fluid" src={'http://webstrot.com/html/deepmind/deepmind/images/blog_bg_1.jpg'} alt="" />
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <input className="blog-search" type="search" name="" placeholder="Search" id="" />

                        <h5 className="mt-4">CATEGORIES</h5>
                        <img src={'http://webstrot.com/html/deepmind/deepmind/images/line.png'} alt="" />
                        <ul className="mt-5 blog-list">
                            <li>Medico News (12)</li>
                            <li>Medical Update (09)</li>
                            <li>Today News (112)</li>
                            <li>Blog Update (04)</li>
                            <li>Inspiration (15)</li>
                            <li>Instagram News (45)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;