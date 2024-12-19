globalThis.optimizePi = true;
globalThis.noCountdown = true;
function wait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(); }, ms);
    });
}
function _status(x) {
    document.querySelector("#status").innerText = x;
}

document.querySelector("#giveme").addEventListener("click", () => {
    if (
        !document.querySelector("input").files ||
        !document.querySelector("input").files[0]
    ) {
        return;
    }
	
    // @type File
    var file = document.querySelector("input").files[0];
    var fileType = file.name.split(".");
    fileType = fileType[fileType.length - 1];

    file.text().then(async (string) => {
        var patchedFile = string;
		
		if(globalThis.optimizePi){
		_status("Optimizing...");
		
        	patchedFile = patchedFile.replaceAll(
            "3.1415927410125732/180.0*10430.3779296875",
            "182.044442166"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732/180.0",
            "0.01745"
        );

        	patchedFile = patchedFile.replaceAll(
            "180.0/3.1415927410125732",
            "57.2958"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*2.0/8.0",
            "0.78539818525"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*2.0/16.0",
            "0.39269909262"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*2.0",
            "6.28318548"
        );
		
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732/2.0",
            "1.57079637051"
        );
		
		
		patchedFile = patchedFile.replaceAll(
            "0.01745329238474369*10430.3779296875",
            "182.04443569"
        );
		
		patchedFile = patchedFile.replaceAll(
            "0.15000000596046448*3.1415927410125732",
            "0.47123892987"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*0.05000000074505806",
            "0.15707963939"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*0.05000000074505806",
            "0.15707963939"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*0.15000000596046448",
            "0.47123892987"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*0.10000000149011612",
            "0.31415927878"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*0.20000000298023224",
            "0.62831855756"
        );
		
		patchedFile = patchedFile.replaceAll(
            "3.1415927410125732*0.25",
            "0.78539818525"
        );
		
		patchedFile = patchedFile.replaceAll(
            "180.0*3.1415927410125732*10430.3779296875",
            "5898239.92619"
        );
		
		patchedFile = patchedFile.replaceAll(
            "180.0*3.1415927410125732",
            "565.486693382"
        );
		

     	   	patchedFile = patchedFile.replaceAll(
            "3.1415927410125732",
            "3.14159"
        );

      	  	patchedFile = patchedFile.replaceAll(
            "0.01745329238474369",
            "0.01745"
        );
	//Math Optimizations for speed, you aren't supposed to change division
	//to multiplication for readability, but this is already unreadable, and
	//this is also said in the Eaglercraft Code Standards, so...
		patchedFile = patchedFile.replaceAll(
            "/10.0",
            "*0.1"
        );

		patchedFile = patchedFile.replaceAll(
            "/100.0",
            "*0.01"
        );

		patchedFile = patchedFile.replaceAll(
            "/20.0*1.600000023841858",
            "*0.08000000119"  //Round Maybe?
        );


		patchedFile = patchedFile.replaceAll(
            "/255.0",
            "*0.00392156862"
        );

		patchedFile = patchedFile.replaceAll(
            "/256.0",
            "*0.00390625"
        );
		//It's like this because otherwise it would nuke the main EPK and make the client
		//Worthless, so this is better for now.
		patchedFile = patchedFile.replaceAll(
            "/2.0",
            "*0.5"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/2)",
            "*0.5)"
        );

		patchedFile = patchedFile.replaceAll(
            "/2|",
            "*0.5|"
        );
				
		patchedFile = patchedFile.replaceAll(
            "/2;",
            "*0.5;"
        );
		patchedFile = patchedFile.replaceAll(
            "/3.0",
            "*0.333333"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/32.0",
            "*0.03125"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/32|",
            "*0.03125|"
        );
		
		patchedFile = patchedFile.replaceAll(
            "4/360.0",
            "0.01111111111"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/6.0",
            "*0.666666"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/7.0",
            "*0.142857"
        );

		patchedFile = patchedFile.replaceAll(
            "/8.0",
            "*0.125"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/9.0",
            "*0.111111"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/5.0",
            "*0.2"
        );
		
		patchedFile = patchedFile.replaceAll(
            "/4.0",
            "*0.25"
        );
		//These don't do anything, pretty sure... Removing for performance
		patchedFile = patchedFile.replaceAll(
            "*1.0",
            ""
        );
		
    }
        _status("Done!");
        patchedFile.replace(`{"._|_libserverside_|_."}`, "");
        var blob = new Blob([patchedFile], { type: file.type });
        saveAs(blob, "EaglercraftX_1.8_Offline_Optimized." + fileType);
    });
});
