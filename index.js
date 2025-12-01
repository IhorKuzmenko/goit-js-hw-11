import{a as f,S as m,i as p}from"./assets/vendor-DvfmeZXB.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y="53488466-2fe47a70cbfd22011f3ae89f6";function g(s){const a=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`https://pixabay.com/api/?${a}`).then(r=>r.data)}const n=document.querySelector(".gallery"),i=document.querySelector(".loader");function d(s){const a=s.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:l,comments:c,downloads:u})=>`
       <li class="gallery-container">
        <a href="${o}">
          <img class="gallery-img" src="${r}" alt="${e}" />
        </a>
        <ul class="gallery-list">
          <li class="gallery-item">
            <p class="gallery-name">Likes</p>
            <p class="gallery-value">${t}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-name">Views</p>
            <p class="gallery-value">${l}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-name">Comments</p>
            <p class="gallery-value">${c}</p>
          </li>
          <li class="gallery-item">
            <p class="gallery-name">Downloads</p>
            <p class="gallery-value">${u}</p>
          </li>
        </ul>
      </li>
        `).join("");n.insertAdjacentHTML("beforeend",a)}function h(){n.innerHTML=""}function L(){i&&i.classList.remove("hidden")}function b(){i&&i.classList.add("hidden")}const v=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250}),O=document.querySelector(".form");O.addEventListener("submit",s=>{s.preventDefault(),L();const a=s.target.elements["search-text"].value.trim();setTimeout(()=>{g(a).then(r=>{if(!r.hits||r.hits.length===0){p.show({class:"custom-error-toast",message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",layout:2,timeout:5e3,close:!0,closeOnEscape:!0,transitionIn:"fadeInLeft",transitionOut:"fadeOut",iconUrl:"/img/arrow.svg",iconColor:"#ffffff"});return}h(),d(r.hits),v.refresh()}).catch(r=>{console.log(r)}).finally(()=>{b()})},1500)});
//# sourceMappingURL=index.js.map
