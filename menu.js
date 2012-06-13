	var arOFFImages = new Array();
	var arONImages = new Array();
	
	// Pre-cache all OFF button Images
	arOFFImages[0] = new Image(160,31);
	arOFFImages[1] = new Image(160,31);
	arOFFImages[2] = new Image(160,31);
	arOFFImages[3] = new Image(160,31);
	arOFFImages[4] = new Image(160,31);
	arOFFImages[5] = new Image(160,31);
	arOFFImages[6] = new Image(160,31);
	arOFFImages[7] = new Image(160,31);
	arOFFImages[8] = new Image(160,31);
	
	// Pre-cache all ON button Images
	arONImages[0] = new Image(160,31);
	arONImages[1] = new Image(160,31);
	arONImages[2] = new Image(160,31);
	arONImages[3] = new Image(160,31);
	arONImages[4] = new Image(160,31);
	arONImages[5] = new Image(160,31);
	arONImages[6] = new Image(160,31);
	arONImages[7] = new Image(160,31);
	arONImages[8] = new Image(160,31);
	
	// Set OFF Images Path
	arOFFImages[0].src = "Images/mnuHome.gif";
	arOFFImages[1].src = "Images/mnuClasses.gif";
	arOFFImages[2].src = "Images/mnuBenefits.gif";
	arOFFImages[3].src = "Images/mnuGallery.gif";
	arOFFImages[4].src = "Images/mnuAbout.gif";
	arOFFImages[5].src = "Images/mnuContact.gif";
	arOFFImages[6].src = "Images/mnuRegistration.gif";
	arOFFImages[7].src = "Images/mnuRegulations.gif";
	arOFFImages[8].src = "Images/mnuSummer.gif";
	
	arONImages[0].src = "Images/mnuHomehl.gif";
	arONImages[1].src = "Images/mnuClasseshl.gif";
	arONImages[2].src = "Images/mnuBenefitshl.gif";
	arONImages[3].src = "Images/mnuGalleryhl.gif";
	arONImages[4].src = "Images/mnuAbouthl.gif";
	arONImages[5].src = "Images/mnuContacthl.gif";
	arONImages[6].src = "Images/mnuRegistrationhl.gif";
	arONImages[7].src = "Images/mnuRegulationshl.gif";
	arONImages[8].src = "Images/mnuSummerhl.gif";
	
	function MouseOver(i)
	{
		document.images[i+2].src = arONImages[i].src;
	}
	
	function MouseOut(i)
	{
		document.images[i+2].src = arOFFImages[i].src;
	}

	function btnClick(i)
	{
		var spage;
		
		switch(i)
		{
		case 0:
			spage = 'Default.aspx';
			break;
		case 1:
			spage = 'Classes.aspx';
			break;
		case 2:
			spage = 'Benefits.aspx';
			break;
		case 3:
			spage = 'Gallery.aspx';
			break;
		case 4:
			spage = 'About.aspx';
			break;
		case 5:
			spage = 'Contact.aspx';
			break;
		case 6:
			spage = 'Registration.aspx';
			break;
		case 7:
			spage = 'Regulations.aspx';
			break;
		case 8:
			spage = 'SummerClasses.aspx';
			break;
		}
		document.location.href = spage;
	}	

    function nibClick()
    {
        var url = 'http://www.nibsoftware.com/WebProgramming.aspx';
	    var  sFeatures = 'toolbar=yes,status=yes,menubar=yes,location=yes, height=560, width=900,left=20,top=20,resizable=yes, scrollbars=yes'

	    window.open(url, null, sFeatures)
    }