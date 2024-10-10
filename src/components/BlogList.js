import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://magento2.localhost.com/rest/V1/post/api');
                setBlogs(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {blogs && blogs.length > 0 ? (
                blogs.map(blog => (
                    <div key={blog.post_id}>{blog.title}</div>
                ))
            ) : (
                <div>No blog found</div>
            )}
        </div>
    );
};

export default BlogList;
