var ChildId = 1;
var AvailableParents = new Array();
var UnuseOpct = 0.3;
var Result = new Array();
var CalcState = 0;	// 0:ack 1:running
var ResultLength = 10;
var RelPtTable = uma[0]["rpt"];
var ThreeRelPts = new Array(uma.length);

function initTable()
{
	AvailableParents.push(0);
	for(var i = 1; i < uma.length; i++){
		AvailableParents.push(false);
	}
	
	for(var i = 0; i < ResultLength; i++){
		Result.push([0,0,0,0,0,0,0]);
	}
	
	for(var i = 1; i < uma.length; i++){
		ThreeRelPts[i] = new Array(uma.length);
		for(var j = 1; j < uma.length; j++){
			ThreeRelPts[i][j] = new Array(uma.length);
			for(var k = 1; k < uma.length; k++){
				ThreeRelPts[i][j][k] = 0;
			}
		}
	}
	
	for(var i = 1; i < uma.length; i++){
		for(var j = 1; j < uma.length; j++){
			for(var k = 1; k < uma.length; k++){
				if(i != j && i != k && j != k){
					for(var m = 0; m < RelPtTable.length; m++){
						if(uma[i]["rel"][m] > 0 && uma[i]["rel"][m] == uma[j]["rel"][m] && uma[i]["rel"][m] == uma[k]["rel"][m]){
							ThreeRelPts[i][j][k] += RelPtTable[m];
						}
					}
				}
			}
		}
	}
}

function childChange(obj)
{
	ChildId = obj.value;
}

function parentClick(pid)
{
	if(AvailableParents[pid] == true){
		AvailableParents[pid] = false;
		setOpacity(document.getElementById("ImgBtn"+pid), UnuseOpct);
	}
	else{
		AvailableParents[pid] = true;
		setOpacity(document.getElementById("ImgBtn"+pid), 1);
	}
}

function setOpacity(obj, opacity)
{
	obj.style.opacity =  opacity;
	obj.style.MozOpacity = opacity;
	obj.style.KhtmlOpacity = opacity;
	obj.style.filter = "alpha(opacity = "+(opacity*100)+")";
}

function calcParents()
{
	if(CalcState == 1)
		return;
	CalcState = 1;
	
	var parents = [0,0,0,0,0,0,0];	//[0:父,1:母,2:父父,3:父母,4:母父,5:母母,6:相性]
	for(var i = 0; i < ResultLength; i++){
		Result[i] = parents;
	}
	
	for(var i0 = 1; i0 < uma.length; i0++){
		if(i0 == ChildId || AvailableParents[i0] == false)
			continue;
		for(var i1 = i0+1; i1 < uma.length; i1++){
			if(i1 == ChildId || AvailableParents[i1] == false)
				continue;
			for(var i2 = 1; i2 < uma.length; i2++){
				if(i2 == ChildId || i2 == i0 || AvailableParents[i2] == false)	//i2~i4 can be same with child but pt 0
					continue;
				for(var i3 = i2+1; i3 < uma.length; i3++){
					if(i3 == ChildId || i3 == i0 || AvailableParents[i3] == false)
						continue;
					for(var i4 = 1; i4 < uma.length; i4++){
						if(i4 == ChildId || i4 == i1 || AvailableParents[i4] == false)
							continue;
						for(var i5 = i4+1; i5 < uma.length; i5++){
							if(i5 == ChildId || i5 == i1 || AvailableParents[i5] == false)
								continue;
							parents = [i0,i1,i2,i3,i4,i5,0];
							calcAiShou(parents);
							updateResult(parents);
						}
					}
				}
			}
		}
	}
	
	for(var i = 0; i < ResultLength; i++){
		if(Result[i][0] == 0){
			document.getElementById("ResultText"+i).innerHTML = "";
			document.getElementById("ResultImg"+i+"_0").style.background = "white";
			document.getElementById("ResultImg"+i+"_1").style.background = "white";
			document.getElementById("ResultImg"+i+"_2").style.background = "white";
			document.getElementById("ResultImg"+i+"_3").style.background = "white";
			document.getElementById("ResultImg"+i+"_4").style.background = "white";
			document.getElementById("ResultImg"+i+"_5").style.background = "white";
		}
		else{
			document.getElementById("ResultText"+i).innerHTML = Result[i][6];
			document.getElementById("ResultImg"+i+"_0").style.background = "url(icon/"+Result[i][0]+".png) center";
			document.getElementById("ResultImg"+i+"_0").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_1").style.background = "url(icon/"+Result[i][2]+".png) center";
			document.getElementById("ResultImg"+i+"_1").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_2").style.background = "url(icon/"+Result[i][3]+".png) center";
			document.getElementById("ResultImg"+i+"_2").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_3").style.background = "url(icon/"+Result[i][1]+".png) center";
			document.getElementById("ResultImg"+i+"_3").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_4").style.background = "url(icon/"+Result[i][4]+".png) center";
			document.getElementById("ResultImg"+i+"_4").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_5").style.background = "url(icon/"+Result[i][5]+".png) center";
			document.getElementById("ResultImg"+i+"_5").style.backgroundSize = "cover";
		}
	}
	CalcState = 0;
}

function calcAiShou(parents)
{
	var aishou = 0;
	
	//親子1
	var aishou = uma[parents[0]]["aishou"][ChildId]+
	//親子2
	uma[parents[1]]["aishou"][ChildId]+
	//両親
	uma[parents[0]]["aishou"][parents[1]]+
	//父父
	ThreeRelPts[ChildId][parents[0]][parents[2]]+
	//父母
	ThreeRelPts[ChildId][parents[0]][parents[3]]+
	//母母
	ThreeRelPts[ChildId][parents[1]][parents[4]]+
	//母父
	ThreeRelPts[ChildId][parents[1]][parents[5]];

	parents[6] = aishou;
}

function updateResult(parents)
{
	for(var i = ResultLength-1; i >= 0; i--){
		if(Result[i][6] > parents[6]){
			return;
		}
		if(i == 0){
			Result[i] = parents;
		}
		else if(parents[6] > Result[i-1][6]){
			Result[i] = Result[i-1];
		}
		else{
			Result[i] = parents;
			return;
		}
	}
}