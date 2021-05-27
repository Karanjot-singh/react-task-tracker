// https://youtu.be/PoRJizFvM7s

const posts = [
    {
        title: 'Post 1', body: 'body 1',
        title: 'Post 2', body: 'body 2'
    }
]

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        })
        document.body.innerHTML = output;
    }, 1000)
}
function createPost(post,callback) {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

createPost({title: 'Post 1', body: 'body 1'},getPosts) //getPosts is passed as callback

//Callback is needed here due to lag in server fetch so that get Posts runs after createPost

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

// async / await
belo commands are completed after await