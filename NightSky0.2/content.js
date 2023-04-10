const background = "rgb(255, 255, 255)";
const newnotif = "rgb(235, 246, 255)";
const secondry1 = "rgb(224, 217, 217";
const secondry2 = "rgb(243, 243, 248)";
const secondry3 = "rgb(242, 242, 242)";
const secondry4 = "rgb(240, 233, 233)";
const secondrytexts = "rgb(84, 86, 100)";
const like = "rgb(113, 118, 138)";
const text = "rgb(0, 0, 0)";
const border1 = "rgb(240, 233, 233)";
const border2 = "rgb(226, 226, 228)";
const border3 = "rgb(185, 185, 193)";
const border4 = "#E2E2E4";
const border5 = "#B9B9C1";
const border6 = "rgb(224, 217, 217)";

function replaceColors() {
  const elements = document.querySelectorAll("*");
  elements.forEach((element) => {
    const style = window.getComputedStyle(element);

    if (style.backgroundColor === background) {
      element.style.backgroundColor = "rgb(15, 15, 15)";
    } else if (
				style.backgroundColor === secondry1 ||
				style.backgroundColor === secondry2 ||
				style.backgroundColor === secondry3 ||
				style.backgroundColor === secondry4
			) {
      element.style.backgroundColor = "rgb(31, 34, 38)";
    } 

    if (style.color === secondrytexts || style.placeholderTextColor === secondrytexts) {
      element.style.color = "rgb(145, 151, 156)";
      element.style.setProperty("--placeholderTextColor", "rgb(145, 151, 156)");
    } else if (style.color === like) {
      element.style.color = "rgb(126, 134, 140)";
    } else if (style.color === text) {
      element.style.color = "rgb(254, 254, 254)";
    } 
	
	if (style.backgroundColor === newnotif) {
      element.style.backgroundColor = "rgb(50, 50, 50)";
    } 
	
    if (
      	style.borderColor === border1 ||
      	style.borderLeftColor === border1 ||
      	style.borderTopColor === border1 ||
      	style.strokeStyle === border1 ||
      	style.fillStyle === border1
	) {
      element.style.borderColor = "rgb(43, 44, 46)";
      element.style.borderLeftColor = "rgb(43, 44, 46)";
      element.style.borderTopColor = "rgb(43, 44, 46)";
      element.style.strokeStyle = "rgb(43, 44, 46)";
      element.style.fillStyle = "rgb(43, 44, 46)";
    } else if (
      	style.borderColor === border2 ||
      	style.borderLeftColor === border2 ||
      	style.borderTopColor === border2 ||
      	style.strokeStyle === border2 ||
      	style.fillStyle === border2
	) {
      element.style.borderColor = "rgb(43, 44, 46)";
      element.style.borderLeftColor = "rgb(43, 44, 46)";
      element.style.borderTopColor = "rgb(43, 44, 46)";
      element.style.strokeStyle = "rgb(43, 44, 46)";
      element.style.fillStyle = "rgb(43, 44, 46)";
    }else if (
      	style.borderColor === border3 ||
      	style.borderLeftColor === border3 ||
      	style.borderTopColor === border3 ||
      	style.strokeStyle === border3 ||
      	style.fillStyle === border3
	) {
      element.style.borderColor = "rgb(43, 44, 46)";
      element.style.borderLeftColor = "rgb(43, 44, 46)";
      element.style.borderTopColor = "rgb(43, 44, 46)";
      element.style.strokeStyle = "rgb(43, 44, 46)";
      element.style.fillStyle = "rgb(43, 44, 46)";
  }else if (
    	style.borderColor === border4 ||
    	style.borderLeftColor === border4 ||
    	style.borderTopColor === border4 ||
    	style.strokeStyle === border4 ||
    	style.fillStyle === border4
	) {
    	element.style.borderColor = "rgb(43, 44, 46)";
    	element.style.borderLeftColor = "rgb(43, 44, 46)";
    	element.style.borderTopColor = "rgb(43, 44, 46)";
    	element.style.strokeStyle = "rgb(43, 44, 46)";
    	element.style.fillStyle = "rgb(43, 44, 46)";
    }else if (
      	style.borderColor === border5 ||
      	style.borderLeftColor === border5 ||
      	style.borderTopColor === border5 ||
      	style.strokeStyle === border5 ||
      	style.fillStyle === border5
  	) {
      	element.style.borderColor = "rgb(43, 44, 46)";
      	element.style.borderLeftColor = "rgb(43, 44, 46)";
      	element.style.borderTopColor = "rgb(43, 44, 46)";
      	element.style.strokeStyle = "rgb(43, 44, 46)";
      	element.style.fillStyle = "rgb(43, 44, 46)";
	}else if (
      	style.borderColor === border6 ||
      	style.borderLeftColor === border6 ||
      	style.borderTopColor === border6 ||
      	style.strokeStyle === border6 ||
      	style.fillStyle === border6
  	) {
      	element.style.borderColor = "rgb(43, 44, 46)";
      	element.style.borderLeftColor = "rgb(43, 44, 46)";
      	element.style.borderTopColor = "rgb(43, 44, 46)";
      	element.style.strokeStyle = "rgb(43, 44, 46)";
      	element.style.fillStyle = "rgb(43, 44, 46)";
	}
  });
  
  //Follow botton on search page
  const elements1 = document.querySelectorAll(".css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73.r-1fuqb1j.r-779j7e.r-5njf8e");
  elements1.forEach((element) => {
    element.style.color = "rgb(254, 254, 254)";
    element.style.backgroundColor = "rgb(32, 35, 39)";
  });

  const elements5 = document.querySelectorAll(".css-175oi2r.r-1i6wzkk.r-lrvibr.r-1loqt21.r-1otgn73.r-1xfd6ze.r-rs99b7.r-1e081e0.r-5njf8e.r-f1odvy");
  elements5.forEach((element) => {
    element.style.borderColor = "rgb(82, 85, 89)";
  });

  const elements6 = document.querySelectorAll(".css-175oi2r.r-t23y2h.r-6dt33c.r-1rcbeiy.r-u8s1d");
  elements6.forEach((element) => {
    element.style.backgroundColor = "rgb(31, 34, 38)";
  });
}

const observer = new MutationObserver(replaceColors);
observer.observe(document.body, { subtree: true, childList: true });