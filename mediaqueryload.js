//function for check of mediaquerydependent styling
function mediaqueryload(ev) {
	
	//get all tags with style "mediaquery"
	var mediaqueryobjects = document.querySelectorAll('.mediaquery'),
	
	//check to se if a encapsulating div "page" exists
	//useful when you need to hide old style on slow devices
	page = document.querySelector(".page"),
	
	all = mediaqueryobjects.length, i = all, current = null, attr = null,
	
	//specify which tags where deletion of dataset attributes is done when source is loaded first time
	sDelete = "link" /* "link bla1 bla2" */ , bDelete=true;
	
	//turn div "page" off if exists
	if (page) page.classList.add('hidden');
	
	while (i--) {
		current = mediaqueryobjects[i];
		
		if (current.dataset.media) {
			bDelete = (sDelete.indexOf((current.tagName).toLowerCase())>-1);

			//transform matched tags to normal tags (link,...) and turn on/off other tags according to "media"
			if (window.matchMedia(current.dataset.media).matches) {
				if (bDelete) current.classList.remove("mediaquery");
				for (attr in current.dataset) {
					if (attr !== 'media' || bDelete) {
						current.setAttribute(attr, current.dataset[attr]);
						current.removeAttribute("data-"+attr);
					}
					if (!bDelete) current.classList.remove('hidden');
				}
			} else if (!bDelete) current.classList.add('hidden');
		}
	}
	
	//turn div "page" on if exists to show new style on slow devices
	if (page) page.classList.remove('hidden');
}
mediaqueryload();
window.addEventListener('resize', mediaqueryload, false);