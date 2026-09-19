/* 

📌📌Method-3 is best for use .



// fetch-data: method-2
const getPosts =async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return response.json();
}

// fetch-data: method-3
const getPosts2 = async ()=>{
    try{
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts");
        return response.json();
    }catch(error){
        throw new Error("Failed to load data.");
    }
}


// fetch-data: method-4
const getPosts3 =async()=>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/posts");

    if(!response.ok){
        throw new Error("Failed to load data.");
    }
    return response.json();
}


const PostPage = async() => {

    // fetch-data: method-1
    // const response =await fetch('https://jsonplaceholder.typicode.com/posts');
    // const posts =await response.json();


    // used for method-2,3,4
    // const posts = await getPosts ();
    // const posts =await getPosts2 ();
    const posts =await getPosts3 ();


    console.log(posts); //to see data at the console

    return (

        <div>
            <h3 className="text-center text-xl font-bold">No of Posts : {posts.length}</h3>
        </div>
    );
};

export default PostPage;

*/