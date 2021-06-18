html = `
   
  <div class="MIDDLE background">
  <svg viewBox="20 0 500 155">
      <path id="curve" d="M100.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
      <text class="tinyText" width="500">
      <textPath xlink:href="#curve">
          Super Dupre NPC Fighting Spill Ting!
      </textPath>
      </text>
  </svg>
  <div class="sverd"> 
  <img class="sverdlogo" src="sverd.png" alt="sverd" widht="200" height="200">
  </div>
  <div class="startpage alignCenter">
  <div onclick="start()">
  <div class="link_wrapper">
  <a>Enter!</a>
    <div class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
        <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
      </svg>
    </div>
      
</div>
  </div>
  
  `;
updateView();
function updateView() {
    app.innerHTML = html;
}
/*{ <svg viewBox="20 0 500 155">
<path id="curve" d="M100.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
<text class="tinyText" width="500">
<textPath xlink:href="#curve">
    Super Dupre NPC Fighting Spill Ting!
</textPath>
</text>
</svg> }*/
//  <button onclick="start()" class="startBtn" type="button">
//             Start!
//         </button>

// </div>
// <div class="container">
// <div class="red flame"></div>
// <div class="orange flame"></div>
// <div class="yellow flame"></div>
// <div class="white flame"></div>
// <div class="blue circle"></div>
// <div class="black circle"></div>
// </div>