window.onload = function()
{
    setInterval(toggleSound, 1000);
}

function toggleSound()
{
    var music_player = document.getElementById("bgm");

    if (music_player.paused)
    {
        music_player.play();
        
        if (!music_player.paused)
        {
            var words = document.getElementById("reminder");
            words.innerText = "不愧是你 enjoy :)";
        }
        
        // console.log(music_player.paused);
        
    }
}