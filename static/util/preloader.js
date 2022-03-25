var images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
    console.log("loaded: ", images[i].src);
  }
}
preload(
  "/background-desktop.png",
  "/background-mobile.png",
  "/bouquet/1.png",
  "/bouquet/2.png",
  "/bouquet/3.png",
  "/bouquet/4.png",
  "/caline/1.png",
  "/caline/2.png",
  "/caline/3.png",
  "/caline/4.png",
  "/elegance/1.png",
  "/elegance/2.png",
  "/elegance/3.png",
  "/elegance/4.png",
  "/elegance/5.png",
  "/monocroma/1.png",
  "/monocroma/2.png",
  "/monocroma/3.png",
  "/monocroma/4.png",
  "/monocroma/5.png",
  "/monocroma/6.png",
  "/surpris/1.png",
  "/surpris/2.png",
  "/surpris/3.png",
  "/surpris/4.png",
  "/surpris/5.png",
  "/papelaria/1.png",
  "/papelaria/2.png",
  "/papelaria/3.png",
  "/papelaria/4.png",
  "/papelaria/5.png",
  "/papelaria/6.png",
  "/papelaria/7.png",
)
