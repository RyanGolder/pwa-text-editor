(()=>{const e=document.getElementById("buttonInstall");window.addEventListener("beforeinstallprompt",(e=>{e.preventDefault(),console.log("beforeinstallprompt fired")})),e.addEventListener("click",(async()=>{console.log("butInstall clicked");const t=window.deferredPrompt;if(!t)return;t.prompt();const{outcome:o}=await t.userChoice;console.log(`User response to the install prompt: ${o}`),window.deferredPrompt=null,e.classList.toggle("hidden",!0)})),window.addEventListener("appinstalled",(e=>{console.log("appinstalled fired",e),window.deferredPrompt=null}))})();