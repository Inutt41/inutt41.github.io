function upDate(previewPic){

    console.log("Updating the large image..." + previewPic.alt);

    var displayDiv = document.getElementById("image");
    
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;

    displayDiv.style.width = previewPic.naturalWidth + "px";
    displayDiv.style.height = previewPic.naturalHeight + "px";
  
	}

function unDo(){
    
    var displayDiv = document.getElementById("image");

    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";

    displayDiv.style.width = "575px";
    displayDiv.style.height = "650px";
	}

function addTabFocus(){
        console.log("Adding tab focus to images...");
        var images = document.querySelectorAll(".preview");

        for(var i = 0; i < images.length; i++){
            images[i].setAttribute("tabindex", "0");
        }
    }