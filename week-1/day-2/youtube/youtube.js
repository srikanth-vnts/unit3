async function youtube() {
    let name = document.getElementById('name').value;
    var youtube = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${name}&key=AIzaSyDU_-68i-uUxzTdIIPF9d4v6x5CahfgfiY`);
    var result = await youtube.json();
    console.log(result);

  
    
}
