var ChildId = 1;
var AvailableParents = new Array(4);
var UnuseOpct = 0.3;
var Result = new Array();
var CalcState = 0;	// 0:ack 1:running
var ResultLength = 1000;
var RelPtTable = uma[0]["rpt"];
var ThreeRelPts = new Array(uma.length);

function initTable()
{
	for(var i = 0; i < 4; i++){
		AvailableParents[i] = new Array(uma.length);
		for(var j = 1; j < uma.length; j++){
			AvailableParents[i][j] = 0;
		}
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

function parentClick(ptype, pid)
{
	if(AvailableParents[ptype][pid] == true){
		AvailableParents[ptype][pid] = false;
		setOpacity(document.getElementById("ImgBtn_"+ptype+"_"+pid), UnuseOpct);
	}
	else{
		AvailableParents[ptype][pid] = true;
		setOpacity(document.getElementById("ImgBtn_"+ptype+"_"+pid), 1);
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
		if(i0 == ChildId || AvailableParents[0][i0] == false)
			continue;
		for(var i1 = 1; i1 < uma.length; i1++){
			if(i0 == i1 || i1 == ChildId || AvailableParents[2][i1] == false)
				continue;
			for(var i2 = 1; i2 < uma.length; i2++){
				if(i2 == i0 || AvailableParents[1][i2] == false)
					continue;
				for(var i3 = i2+1; i3 < uma.length; i3++){
					if(i3 == i0 || AvailableParents[1][i3] == false)
						continue;
					for(var i4 = 1; i4 < uma.length; i4++){
						if(i4 == i1 || AvailableParents[3][i4] == false)
							continue;
						for(var i5 = i4+1; i5 < uma.length; i5++){
							if(i5 == i1 || AvailableParents[3][i5] == false)
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
			document.getElementById("ResultText"+i).style.display = "none";
			document.getElementById("ResultImg"+i+"_0").style.display = "none";
			document.getElementById("ResultImg"+i+"_1").style.display = "none";
			document.getElementById("ResultImg"+i+"_2").style.display = "none";
			document.getElementById("ResultImg"+i+"_3").style.display = "none";
			document.getElementById("ResultImg"+i+"_4").style.display = "none";
			document.getElementById("ResultImg"+i+"_5").style.display = "none";
		}
		else{
			document.getElementById("ResultText"+i).style.display = "block";
			document.getElementById("ResultText"+i).innerHTML = Result[i][6];
			document.getElementById("ResultImg"+i+"_0").style.display = "block";
			document.getElementById("ResultImg"+i+"_0").style.background = "url(icon/"+Result[i][0]+".png) center";
			document.getElementById("ResultImg"+i+"_0").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_1").style.display = "block";
			document.getElementById("ResultImg"+i+"_1").style.background = "url(icon/"+Result[i][2]+".png) center";
			document.getElementById("ResultImg"+i+"_1").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_2").style.display = "block";
			document.getElementById("ResultImg"+i+"_2").style.background = "url(icon/"+Result[i][3]+".png) center";
			document.getElementById("ResultImg"+i+"_2").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_3").style.display = "block";
			document.getElementById("ResultImg"+i+"_3").style.background = "url(icon/"+Result[i][1]+".png) center";
			document.getElementById("ResultImg"+i+"_3").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_4").style.display = "block";
			document.getElementById("ResultImg"+i+"_4").style.background = "url(icon/"+Result[i][4]+".png) center";
			document.getElementById("ResultImg"+i+"_4").style.backgroundSize = "cover";
			document.getElementById("ResultImg"+i+"_5").style.display = "block";
			document.getElementById("ResultImg"+i+"_5").style.background = "url(icon/"+Result[i][5]+".png) center";
			document.getElementById("ResultImg"+i+"_5").style.backgroundSize = "cover";
		}
	}
	CalcState = 0;
}

function calcAiShou(parents)
{
	//親子1
	parents[6] = uma[parents[0]]["aishou"][ChildId]+
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
}

function updateResult(parents)
{
	for(var i = 0; i < ResultLength; i++){
		if(Result[i][6] == parents[6]){
			if(Result[i][0] == parents[1] && Result[i][2] == parents[4] && Result[i][3] == parents[5]){
				if(Result[i][1] == parents[0] && Result[i][4] == parents[2] && Result[i][5] == parents[3]){
					return;
				}
			}
		}
	}
	
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