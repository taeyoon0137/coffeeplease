window.onload=()=>{document.getElementById("root").classList.add("--loaded")},window.addEventListener("scroll",(e=>{const{scrollY:t}=window,n=document.getElementById("intro");0!=t&&(n.style.opacity=t/window.innerHeight<1?t/window.innerHeight<=1?1-t/window.innerHeight:1:0);const i=document.getElementById("scroll-indicator");t>=160?i.classList.add("--hidden"):i.classList.remove("--hidden");const o=document.getElementById("bridge");o.getBoundingClientRect().top<=window.innerHeight-240?o.classList.add("--visible"):o.classList.remove("--visible");const d=document.getElementsByClassName("products__item");for(const e of d){e.getBoundingClientRect().top<=window.innerHeight*(2/3)?e.classList.add("--active"):e.classList.remove("--active")}const s=document.getElementById("mobile-cta"),c=document.getElementById("intro-cta").getBoundingClientRect(),l=document.getElementById("outro-cta").getBoundingClientRect();c.top<=0&&l.top-window.innerHeight>=0?s.classList.add("--active"):s.classList.remove("--active")}));
//# sourceMappingURL=index.edccc12a.js.map
