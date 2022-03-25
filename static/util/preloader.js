var images = new Array();
function preload() {
  for (i = 0; i < preload.arguments.length; i++) {
    images[i] = new Image();
    images[i].src = preload.arguments[i];
  }
}
preload(
  "/background-desktop.png",
  "/background-mobile.png",
  "/papelaria/1.png",
  "/papelaria/2.png",
  "/papelaria/3.png",
  "/papelaria/4.png",
  "/papelaria/5.png",
  "/papelaria/6.png",
  "/papelaria/7.png",
  "/bouquet/1.png",
  "/caline/1.png",
  "/elegance/1.png",
  "/monocroma/1.png",
  "/surpris/1.png",
)
