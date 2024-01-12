/*(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();
*/

(function () {
    let activeBtn = null;
  
    [...document.querySelectorAll(".control")].forEach(button => {
      button.addEventListener("click", function() {
        if (activeBtn) {
          activeBtn.classList.remove("clicked");
        }
        document.querySelector(".active-btn").classList.remove("active-btn");
        this.classList.add("active-btn");
        document.querySelector(".active").classList.remove("active");
        document.getElementById(button.dataset.id).classList.add("active");
        this.classList.add("clicked"); // Add the "clicked" class to the clicked button
        activeBtn = this; // Store the currently clicked button as the active button
      });
    });
  
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  })();
  
