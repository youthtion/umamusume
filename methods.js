var ChildId = 1;
var Parents = new Array();
var UnuseOpct = 0.3;

function initParents()
{
	Parents.push();
	for(var i = 1; i < uma.length; i++){
		Parents.push(false);
		setOpacity(document.getElementById("ImgBtn"+i), UnuseOpct);
	}
}

function childChange(obj)
{
	ChildId = obj.value;
	calcAiShou();
}

function parentClick(pid)
{
	if(Parents[pid] == true){
		Parents[pid] = false;
		setOpacity(document.getElementById("ImgBtn"+pid), UnuseOpct);
	}
	else{
		Parents[pid] = true;
		setOpacity(document.getElementById("ImgBtn"+pid), 1);
	}
	calcAiShou();
}

function setOpacity(obj, opacity)
{
	obj.style.opacity =  opacity;
	obj.style.MozOpacity = opacity;
	obj.style.KhtmlOpacity = opacity;
	obj.style.filter = "alpha(opacity = "+(opacity*100)+")";
}

function calcAiShou()
{
}