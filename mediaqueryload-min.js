function mediaqueryload(e){e=document.querySelectorAll(".mediaquery");var d=document.querySelector(".page"),f=e.length,a=null,b=null,c=!0;for(d&&d.classList.add("hidden");f--;)if(a=e[f],a.dataset.media)if(c=-1<"link".indexOf(a.tagName.toLowerCase()),window.matchMedia(a.dataset.media).matches)for(b in c&&a.classList.remove("mediaquery"),a.dataset){if("media"!==b||c)a.setAttribute(b,a.dataset[b]),a.removeAttribute("data-"+b);c||a.classList.remove("hidden")}else c||a.classList.add("hidden");d&&d.classList.remove("hidden")}
mediaqueryload();window.addEventListener("resize",mediaqueryload,!1);