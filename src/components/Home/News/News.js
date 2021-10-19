import React from 'react';
import { Link } from 'react-router-dom';
import './News.css'

const News = () => {
    return (
        <div className="container news-style">
            <div className="my-5">
                <h2 className="mb-4">UPDATE NEWS COVID-19</h2>
                <img className="mb-3" src={'http://webstrot.com/html/deepmind/deepmind/images/Icon_team.png'} alt="" />
                <div className="row">
                    <div className="col-4">
                        <img src={'http://webstrot.com/html/deepmind/deepmind/images/corona/blog_img_1.jpg'} alt="" />
                        <h4 className="my-3">Cases & Latest Updates</h4>
                        <p> <small>BY ADMINSEPT.29,2020</small> </p>
                        <p>Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. However, some will become seriously ill </p>
                        <Link to="/news">Read More </Link>
                    </div>
                    <div className="col-4">
                        <img src={'http://webstrot.com/html/deepmind/deepmind/images/corona/blog_img_2.jpg'} alt="" />
                        <h4 className="my-3">Cases & Latest Updates</h4>
                        <p> <small>BY ADMINSEPT.29,2020</small> </p>
                        <p>The virus can spread from an infected person’s mouth or nose in small liquid particles when they cough, sneeze, speak, sing or breathe. These particles range from larger respiratory droplets .</p>
                        <Link to="/news">Read More </Link>
                    </div>
                    <div className="col-4">
                        <img src={'http://webstrot.com/html/deepmind/deepmind/images/corona/blog_img_3.jpg'} alt="" />
                        <h4 className="my-3">Cases & Latest Updates</h4>
                        <p> <small>BY ADMINSEPT.29,2020</small> </p>
                        <p>You can be infected by breathing in the virus if you are near someone who has COVID-19, or by touching a contaminated surface and then your eyes,</p>
                        <Link to="/news">Read More </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;