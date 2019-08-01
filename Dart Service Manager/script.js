"use strict";

var popups = document.querySelectorAll(".popup");

for (var i = 0; i < popups.length; i++)
{
    popups[i].addEventListener("click", function(event)
    {
        var dataThemeValue = event.target.dataset.theme;
        var content = "#" + dataThemeValue + "_content";
        var contentIsVisible = document.querySelector(content).style.display == "flex";
        if (contentIsVisible)
        {
            document.querySelector(content).style.display = "none";
        }
        else
        {
            document.querySelector(content).style.display = "flex";
        }
    });
}