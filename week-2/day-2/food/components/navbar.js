function navbar() {
    return `<div id = 'navbar'>
        <div id ='start'>
            <a href='home.html'><img id='logo' src='https://cdn.shopify.com/s/files/1/0489/5028/0356/files/CFlogo1_300x300.png?v=1600821941'></a>
        </div>
        <div id='middle'>
            <div class='ip'>
            <input id='search' type='text' >
            <div id ='res'></div>
            </div>
            <button id ='search_btn' class="material-icons" ">search</button>
        </div>
        <div id='end'>
            <a href='recepie.html' id='recepie'>Recepies</a>
            <a href='latest.html' id='latest'>Latest</a>
        </div>
        </div>
        <div id ='main'></div>`
}

export default navbar;