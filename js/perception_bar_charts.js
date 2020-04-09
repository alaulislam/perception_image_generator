
var imageArray = [];
var barSize;
var barChartGenerator=function(bar_size_in_px){
var maxNBDataFile = 179;
//var maxNBDataFile = 3;
var count = 0;
var colorNameColumn = "name";

var barWeekDayNameLabel, chartLabeling;
var barPaddingController;
var barStartingPositionFromTop;
barSize = bar_size_in_px;

$( "#canvas_images").empty();
$("#photoCount_card").val(maxNBDataFile+1);

iterateThroughAllDataFile();

function iterateThroughAllDataFile(){
    for(i = count ; i <= maxNBDataFile ; i++){
		var dataFileName = "/data/data_"+i+".tsv" ;
       // console.log("dataFileName = "+dataFileName);

        generateBarChart07(dataFileName, barSize);
    }
}

function generateBarChart07(datafile, barSize){

    var margin = { left: 39, right: 39, top: 50, bottom: 40},
    width = (320 - margin.left - margin.right), // 225
	height = (320 - margin.top - margin.bottom); // 262.5
//23,18,14,11,9,7,5,4,3,2,1
if(barSize == 23){
	barPaddingController = 1;
	barStartingPositionFromTop = 50;
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 68, right_X: 295, right_Y: 68 }; //23px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 35,
						  left_AxisLine_X1: 40, left_AxisLine_Y1: 50, left_AxisLine_X2: 40, left_AxisLine_Y2: 280,
						  right_AxisLine_X1: 280, right_AxisLine_Y1: 50, right_AxisLine_X2: 280, right_AxisLine_Y2: 280,
						  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 300,
						  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 300,
						};

}

if(barSize == 22){
	barPaddingController = 1.049;
	barStartingPositionFromTop = 50;
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 68, right_X: 295, right_Y: 68 }; //23px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 35,
						  left_AxisLine_X1: 40, left_AxisLine_Y1: 50, left_AxisLine_X2: 40, left_AxisLine_Y2: 280,
						  right_AxisLine_X1: 280, right_AxisLine_Y1: 50, right_AxisLine_X2: 280, right_AxisLine_Y2: 280,
						  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 300,
						  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 300,
						};

}

if(barSize == 21){
	barPaddingController = 1.069;
	barStartingPositionFromTop = 50;
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 68, right_X: 295, right_Y: 68 }; //23px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 35,
						  left_AxisLine_X1: 40, left_AxisLine_Y1: 50, left_AxisLine_X2: 40, left_AxisLine_Y2: 280,
						  right_AxisLine_X1: 280, right_AxisLine_Y1: 50, right_AxisLine_X2: 280, right_AxisLine_Y2: 280,
						  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 300,
						  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 300,
						};
}

if(barSize == 20){
	barPaddingController = 1.089;
	barStartingPositionFromTop = 50;
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 68, right_X: 295, right_Y: 68 }; //23px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 35,
						  left_AxisLine_X1: 40, left_AxisLine_Y1: 50, left_AxisLine_X2: 40, left_AxisLine_Y2: 280,
						  right_AxisLine_X1: 280, right_AxisLine_Y1: 50, right_AxisLine_X2: 280, right_AxisLine_Y2: 280,
						  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 300,
						  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 300,
						};

}

if(barSize == 19){
	barPaddingController = 1.099;
	barStartingPositionFromTop = 50;
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 68, right_X: 295, right_Y: 68 }; //23px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 35,
						  left_AxisLine_X1: 40, left_AxisLine_Y1: 50, left_AxisLine_X2: 40, left_AxisLine_Y2: 280,
						  right_AxisLine_X1: 280, right_AxisLine_Y1: 50, right_AxisLine_X2: 280, right_AxisLine_Y2: 280,
						  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 300,
						  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 300,
						};

}


if(barSize == 18){
	barPaddingController = 1.2;
	barStartingPositionFromTop = 62; // +12px
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 78, right_X: 295, right_Y: 78 }; //10px (x,y) = (0,12), (12, 73)  // Y+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 45, // Y+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 55, left_AxisLine_X2: 40, left_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 55, right_AxisLine_X2: 280, right_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 285, // Y-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 285, // Y-15
					};
}

if(barSize == 17){
	barPaddingController = 1.249;
	barStartingPositionFromTop = 62; // +12px
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 78, right_X: 295, right_Y: 78 }; //10px (x,y) = (0,12), (12, 73)  // Y+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 45, // Y+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 55, left_AxisLine_X2: 40, left_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 55, right_AxisLine_X2: 280, right_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 285, // Y-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 285, // Y-15
					};
}

if(barSize == 16){
	barPaddingController = 1.269;
	barStartingPositionFromTop = 62; // +12px
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 78, right_X: 295, right_Y: 78 }; //10px (x,y) = (0,12), (12, 73)  // Y+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 45, // Y+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 55, left_AxisLine_X2: 40, left_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 55, right_AxisLine_X2: 280, right_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 285, // Y-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 285, // Y-15
					};
}

if(barSize == 15){
	barPaddingController = 1.349;
	barStartingPositionFromTop = 62; // +12px
	barWeekDayNameLabel = { fontSize: 16, left_X: 12, left_Y: 78, right_X: 295, right_Y: 78 }; //10px (x,y) = (0,12), (12, 73)  // Y+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 45, // Y+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 55, left_AxisLine_X2: 40, left_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 55, right_AxisLine_X2: 280, right_AxisLine_Y2: 265,  // Y1+5 Y2-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 285, // Y-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 285, // Y-15
					};
}


if(barSize == 14){
	barPaddingController = 1.4;
	barStartingPositionFromTop = 74; // +12+12px
	barWeekDayNameLabel = { fontSize: 13, left_X: 12, left_Y: 86, right_X: 295, right_Y: 86 }; //20px (x,y) = (0,12), (12, 73)  //font=-3 //- Y+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 55, // Y+10+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 60, left_AxisLine_X2: 40, left_AxisLine_Y2: 250,   // Y1+5+5 Y2-15-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 60, right_AxisLine_X2: 280, right_AxisLine_Y2: 250, // Y1+5+5 Y2-15-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 270,// Y-15-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 270,// Y-15-15
					};
}

if(barSize == 13){
	barPaddingController = 1.449;
	barStartingPositionFromTop = 74; // +12+12px
	barWeekDayNameLabel = { fontSize: 13, left_X: 12, left_Y: 86, right_X: 295, right_Y: 86 }; //20px (x,y) = (0,12), (12, 73)  //font=-3 //- Y+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 55, // Y+10+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 60, left_AxisLine_X2: 40, left_AxisLine_Y2: 250,   // Y1+5+5 Y2-15-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 60, right_AxisLine_X2: 280, right_AxisLine_Y2: 250, // Y1+5+5 Y2-15-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 270,// Y-15-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 270,// Y-15-15
					};
}

if(barSize == 12){
	barPaddingController = 1.549;
	barStartingPositionFromTop = 74; // +12+12px
	barWeekDayNameLabel = { fontSize: 13, left_X: 12, left_Y: 86, right_X: 295, right_Y: 86 }; //20px (x,y) = (0,12), (12, 73)  //font=-3 //- Y+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 55, // Y+10+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 60, left_AxisLine_X2: 40, left_AxisLine_Y2: 250,   // Y1+5+5 Y2-15-15
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 60, right_AxisLine_X2: 280, right_AxisLine_Y2: 250, // Y1+5+5 Y2-15-15
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 270,// Y-15-15
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 270,// Y-15-15
					};
}



if(barSize == 11){
	barPaddingController = 1.6;
	barStartingPositionFromTop = 86; // +12+12+12px
	barWeekDayNameLabel = { fontSize: 13, left_X: 12, left_Y: 96, right_X: 295, right_Y: 96 }; //20px (x,y) = (0,12), (12, 73) //font=-3 //- Y+10+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 75, // Y+10+10+20px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 85, left_AxisLine_X2: 40, left_AxisLine_Y2: 230,   // Y1+5+5+25 Y2-15-15-20
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 85, right_AxisLine_X2: 280, right_AxisLine_Y2: 230, // Y1+5+5+25 Y2-15-15-20
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 250,// Y-15-15-20px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 250,// Y-15-15-20px
					};
}

if(barSize == 10){
	barPaddingController = 1.649;
	barStartingPositionFromTop = 86; // +12+12+12px
	barWeekDayNameLabel = { fontSize: 13, left_X: 12, left_Y: 96, right_X: 295, right_Y: 96 }; //20px (x,y) = (0,12), (12, 73) //font=-3 //- Y+10+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 75, // Y+10+10+20px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 85, left_AxisLine_X2: 40, left_AxisLine_Y2: 230,   // Y1+5+5+25 Y2-15-15-20
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 85, right_AxisLine_X2: 280, right_AxisLine_Y2: 230, // Y1+5+5+25 Y2-15-15-20
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 250,// Y-15-15-20px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 250,// Y-15-15-20px
					};
}


if(barSize == 9){
	barPaddingController = 1.8;
	barStartingPositionFromTop = 98; // +12+12+12+12px
	barWeekDayNameLabel = { fontSize: 11, left_X: 12, left_Y: 106, right_X: 295, right_Y: 106 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2 //- Y+10+10+10+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 85, // Y+10+10+20+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 95, left_AxisLine_X2: 40, left_AxisLine_Y2: 230,   // Y1+5+5+25+10 Y2-15-15-20-0
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 95, right_AxisLine_X2: 280, right_AxisLine_Y2: 230, // Y1+5+5+25 Y2-15-15-20
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 250,	// Y-15-15-20px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 250,	// Y-15-15-20px
					};
}

if(barSize == 8){
	barPaddingController = 1.849;
	barStartingPositionFromTop = 98; // +12+12+12+12px
	barWeekDayNameLabel = { fontSize: 11, left_X: 12, left_Y: 106, right_X: 295, right_Y: 106 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2 //- Y+10+10+10+10+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 85, // Y+10+10+20+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 95, left_AxisLine_X2: 40, left_AxisLine_Y2: 230,   // Y1+5+5+25+10 Y2-15-15-20-0
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 95, right_AxisLine_X2: 280, right_AxisLine_Y2: 230, // Y1+5+5+25 Y2-15-15-20
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 250,	// Y-15-15-20px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 250,	// Y-15-15-20px
					};
}

if(barSize == 7){
	barPaddingController = 2;
	barStartingPositionFromTop = 110; // +12+12+12+12+12px
	barWeekDayNameLabel = { fontSize: 11, left_X: 12, left_Y: 117, right_X: 295, right_Y: 117 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2 //- Y+10+10+10+10+10+11px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 95, // Y+10+10+20+10+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 110, left_AxisLine_X2: 40, left_AxisLine_Y2: 225,   // Y1+5+5+25+10+15 // Y2-15-15-20-0-5
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 110, right_AxisLine_X2: 280, right_AxisLine_Y2: 225, // Y1+5+5+25+10+15 // Y2-15-15-20-0-5
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 245,	// Y-15-15-20-5px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 245,	// Y-15-15-20-5px
					};
}

if(barSize == 6){
	barPaddingController = 2.049;
	barStartingPositionFromTop = 110; // +12+12+12+12+12px
	barWeekDayNameLabel = { fontSize: 11, left_X: 12, left_Y: 117, right_X: 295, right_Y: 117 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2 //- Y+10+10+10+10+10+11px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 95, // Y+10+10+20+10+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 110, left_AxisLine_X2: 40, left_AxisLine_Y2: 225,   // Y1+5+5+25+10+15 // Y2-15-15-20-0-5
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 110, right_AxisLine_X2: 280, right_AxisLine_Y2: 225, // Y1+5+5+25+10+15 // Y2-15-15-20-0-5
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 245,	// Y-15-15-20-5px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 245,	// Y-15-15-20-5px
					};
}

if(barSize == 5){
	barPaddingController = 2.2;
	barStartingPositionFromTop = 120; // +12+12+12+12+12+10px
	barWeekDayNameLabel = { fontSize: 11, left_X: 12, left_Y: 127, right_X: 295, right_Y: 127 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2 //- Y+10+10+10+10+10+11+10px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 105, // Y+10+10+20+10+10px 
					  left_AxisLine_X1: 40, left_AxisLine_Y1: 125, left_AxisLine_X2: 40, left_AxisLine_Y2: 220,   // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5
					  right_AxisLine_X1: 280, right_AxisLine_Y1: 125, right_AxisLine_X2: 280, right_AxisLine_Y2: 220, // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5
					  left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 240,	// Y-15-15-20-5-5px
					  right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 240,	//Y-15-15-20-5-5px
					};
}
if(barSize == 4){
	barPaddingController = 2.4;
	barStartingPositionFromTop = 122; // +12+12+12+12+12+10+0px
	barWeekDayNameLabel = { fontSize: 10, left_X: 12, left_Y: 127, right_X: 295, right_Y: 127 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2-1 //- Y+10+10+10+10+10+11+10+0px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 105, // Y+10+10+20+10+10+0px 
					left_AxisLine_X1: 40, left_AxisLine_Y1: 125, left_AxisLine_X2: 40, left_AxisLine_Y2: 215,   // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5
					right_AxisLine_X1: 280, right_AxisLine_Y1: 125, right_AxisLine_X2: 280, right_AxisLine_Y2: 215, // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5
					left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 235,	// Y-15-15-20-5-5px
					right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 235,	//Y-15-15-20-5-5px
				};
}
if(barSize == 3){
	barPaddingController = 2.6;
	barStartingPositionFromTop = 122; // +12+12+12+12+12+10+0+0px
	barWeekDayNameLabel = { fontSize: 10, left_X: 12, left_Y: 127, right_X: 295, right_Y: 127 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2-1 //- Y+10+10+10+10+10+11+10+0+0px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 105, // Y+10+10+20+10+10+0px 
				left_AxisLine_X1: 40, left_AxisLine_Y1: 125, left_AxisLine_X2: 40, left_AxisLine_Y2: 210,   // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5-5
				right_AxisLine_X1: 280, right_AxisLine_Y1: 125, right_AxisLine_X2: 280, right_AxisLine_Y2: 210, // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5-5
				left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 230,	// Y-15-15-20-5-5-5px
				right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 230,	//Y-15-15-20-5-5-5px
			};
}
if(barSize == 2){
	barPaddingController = 2.8;
	barStartingPositionFromTop = 122; // // // +12+12+12+12+12+10+0+0+0px
	barWeekDayNameLabel = { fontSize: 10, left_X: 12, left_Y: 127, right_X: 295, right_Y: 127 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2-1 //- Y+10+10+10+10+10+11+10+0+0px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 105, // Y+10+10+20+10+10+0px 
				left_AxisLine_X1: 40, left_AxisLine_Y1: 125, left_AxisLine_X2: 40, left_AxisLine_Y2: 205,   // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5-5
				right_AxisLine_X1: 280, right_AxisLine_Y1: 125, right_AxisLine_X2: 280, right_AxisLine_Y2: 205, // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5-5
				left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 225,	// Y-15-15-20-5-5-5-5px
				right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 225,	//Y-15-15-20-5-5-5-5px
			};
}
if(barSize == 1){
	barPaddingController = 3.2;
	barStartingPositionFromTop = 122; // // +12+12+12+12+12+10+10+10px
	barWeekDayNameLabel = { fontSize: 8, left_X: 12, left_Y: 127, right_X: 295, right_Y: 127 }; //20px (x,y) = (0,12), (12, 73) //font=-3-2-1 //- Y+10+10+10+10+10+11+10+0+0px
	chartLabeling = { headerFontSize: 20, header_X: 85, header_Y: 105, // Y+10+10+20+10+10+0px 
				left_AxisLine_X1: 40, left_AxisLine_Y1: 125, left_AxisLine_X2: 40, left_AxisLine_Y2: 190,   // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5-5-5
				right_AxisLine_X1: 280, right_AxisLine_Y1: 125, right_AxisLine_X2: 280, right_AxisLine_Y2: 190, // Y1+5+5+25+10+15+15 // Y2-15-15-20-0-5-5-5-5-5
				left_AxisLine_text_FontSize: 16, left_AxisLine_text_X: 20, left_AxisLine_text_Y: 215,	// Y-15-15-20-5-5-5-5-5px
				right_AxisLine_text_FontSize: 16, right_AxisLine_text_X: 260, right_AxisLine_text_Y: 215,	//Y-15-15-20-5-5-5-5-5px
			};
}
	
	



    var chart = d3.select(".chart")
					.attr("width", 320)
                    .attr("height", 320)
                    .append("g");
                   // .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    d3.tsv(datafile, type, function(error, data) {

		// for (var i=0;i<d3.keys(data).length; i++) {
		// 	console.log(i);
		//   }

		var x = d3.scaleLinear()
				.domain([0, d3.max(data, function (d) {return d.value;})])
				.rangeRound([height, 0]); /// 10 / 0

		var y = d3.scaleBand()
			.domain(data.map(function(d) { return d.name; })) 
			.rangeRound([0, height/barPaddingController]).padding(0.27*barPaddingController); // 23px bar, 8px gap


		var colorScale = d3.scaleOrdinal()
			.domain(data.map(function (d){return d[colorNameColumn]; }))
			.range(["#2390F4", "#2390F4", "#2390F4", "#2390F4", "#2390F4", "#0064B9", "#0064B9"]);


			barChartLabeling(chart, chartLabeling);

		//Add bar to the bar chart
        var bar = chart.selectAll("g")
                        .data(data)
						.enter().append("g")
					    .attr("transform", function(d, i) { return "translate(0, " + y(d.name) + ")"; });


		bar.append("rect")
			.attr("y", barStartingPositionFromTop) //50px
			.attr("x", function (d) {
                return 40 + parseInt(d.tab);
            } )
            .attr("height",y.bandwidth())//25 -5 = 20, -9 = 16, -12 = 13
            .attr("width", function (d) {
                return width -x(d.value);
			})
			.attr("fill", function (d,i){ return colorScale(i);});

			barWeekdaysNameLeftRightLabel(bar, barWeekDayNameLabel);



		chart.append("g")

		var answer_task_1 = '';
		var answer_task_2 = '';
		var answer_task_3 = '';

		var lastDigit = count % 10;
		if(lastDigit >= 0 && lastDigit < 5){
			answer_task_1 = 't1r'; //  left
		}else{
			answer_task_1 = 't1l';	// right
		}

		if((count < 20) || (count > 39 && count < 60) || (count > 79 && count < 100)){
			answer_task_2 = 't2r';
		}else{
			answer_task_2 = 't2l';
		}

		if(count < 10 || (count > 19 && count < 30) || (count > 39 && count < 50) || (count > 59 && count < 70) || (count > 79 && count < 90) || (count > 99 && count < 110)){
			answer_task_3 = 't3l';
		}else{
			answer_task_3 = 't3r';
		}

		name = "s1_" + count + "_" + answer_task_1 + answer_task_2 + answer_task_3;

       savePNG(name,count);

		chart.selectAll("*").remove();
		count++;
	});


}

function type(d) {
	d.value = +d.value;
	return d;
}

function savePNG(name,count) {
	var html = d3.select("svg")
		.attr("version", 1.1)
		.attr("xmlns", "http://www.w3.org/2000/svg")
		.node().parentNode.innerHTML;

		//console.log(html);
		var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
		var img = '<img src="'+imgsrc+'">';
		//d3.select("#svgdataurl").html(img);


		var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d");

		var image = new Image;
		image.src = imgsrc;
		image.onload = function() {
			context.drawImage(image, 0, 0);

			var canvasdata = canvas.toDataURL("image/png");

			var pngimg = '<img src="'+canvasdata+'">';
			//d3.select("#pngdataurl").html(pngimg);

			var a = document.createElement("a");
			a.download = name+".png";
			a.href = canvasdata;
			//a.click();
			galleryGenerator(canvasdata,a.download,barSize,count);
			imageArray.push(a);
	};

}

function barChartLabeling(chart, chartLabeling){

			chart.append("text")
				.attr("x", chartLabeling.header_X)
				.attr("y", chartLabeling.header_Y)
				.attr("font-size", chartLabeling.headerFontSize+"px")
				.style('fill', 'white')
				.attr("font-family", "HelveticaNeue-Bold")
				.text("Dec 13 - Dec 19");

			chart.append("line")
				.style("stroke", "white")
				.attr("stroke-width", 2)
				.attr("x1", chartLabeling.left_AxisLine_X1)
				.attr("y1", chartLabeling.left_AxisLine_Y1)
				.attr("x2", chartLabeling.left_AxisLine_X2)
				.attr("y2", chartLabeling.left_AxisLine_Y2);

			chart.append("line")
				.style("stroke", "white")
				.attr("stroke-width", 2)
				.attr("x1", chartLabeling.right_AxisLine_X1)
				.attr("y1", chartLabeling.right_AxisLine_Y1)
				.attr("x2", chartLabeling.right_AxisLine_X2)
				.attr("y2", chartLabeling.right_AxisLine_Y2);

		  chart.append("text")
				.attr("class", "label")
				.attr("x", chartLabeling.left_AxisLine_text_X)
				.attr("y", chartLabeling.left_AxisLine_text_Y)
				.style('fill', '#BEBEBE')
				.attr("font-family", "HelveticaNeue-Bold")
				.attr("font-size", chartLabeling.left_AxisLine_text_FontSize+"px")
				.text("22:00");

			chart.append("text")
				.attr("class", "label")
				.attr("x", chartLabeling.right_AxisLine_text_X)
				.attr("y", chartLabeling.right_AxisLine_text_Y)
				.style('fill', '#BEBEBE')
				.attr("font-family", "HelveticaNeue-Bold")
				.attr("font-size", chartLabeling.right_AxisLine_text_FontSize+"px")
				.text("06:00");
}

function barWeekdaysNameLeftRightLabel(bar, barWeekDayNameLabel){
	bar.append("text")
	.attr("class", "label")
	.attr("x", barWeekDayNameLabel.left_X)
	.attr("y", barWeekDayNameLabel.left_Y)
	.style("font-size", barWeekDayNameLabel.fontSize +"px")
	.style('fill', '#FFFFFF')
	.attr("font-family", "HelveticaNeue-Bold")
	.text(function (d) {
	   return d.name.substring(0,1);;
	});

bar.append("text")
	.attr("class", "label")
	.attr("x", barWeekDayNameLabel.right_X)
	.attr("y", barWeekDayNameLabel.right_Y)
	.style("font-size", barWeekDayNameLabel.fontSize +"px")
	.style('fill', '#FFFFFF')
	.attr("font-family", "HelveticaNeue-Bold")
	.text(function (d) {
	   return d.name.substring(0,1);;
	});
}


}







