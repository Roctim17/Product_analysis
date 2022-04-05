import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>What is Semantic Tag ?</h1>
            <p>
                The semantic tag we use in HTML5 is a semantic tag. These tags are a block level tag. With these we can wrap as needed. And using these we can make our website SEO useful and meaningful. Semantic tags are: header, nav, section, article, acid, footer.
            </p>
            <img src="/image/semantic_tags.jpg" alt="" />
            <h1>Difference between  inline, Block and inline-block elements ?</h1>
            <p>
                Inline elements takes much spaces they needed and add contents without any line break. You cannot define height or width.It automatically adjust its height and width according to content. <br />
                The Block elements takes full width of a web page and creates aline break automatically.You can define height and width. And it always starts on a new line. <br />
                In Inline-block elements it is combination of these two (inline & block).Inline-block takes much spaces they needed and add contents without any line break. And like block level element , You can define height and width. so it has both inline and block properties,so its called inline-block element.
            </p>
        </div>
    );
};

export default Blog;