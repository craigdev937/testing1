import React from "react";

export const Async = () => {
    const [posts, setPosts] = React.useState([]);
    React.useEffect(() => {
        const URL = "https://jsonplaceholder.typicode.com/posts";
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
            }).catch((error) => console.log(error));
    }, []);
    return (
        <React.Fragment>
            <ul>
                {posts?.map((post: any) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </React.Fragment>
    );
};




