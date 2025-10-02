async function ab(){
    var blob = await fetch(`https://randomuser.me/api/`)
    var ans = await blob.json();

    console.log(ans.results);
    console.log("hello");
} 
ab();