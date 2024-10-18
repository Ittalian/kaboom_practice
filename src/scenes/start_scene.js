import { k } from "../kaboomCtx";

export function startScene() {
  k.scene("start", () => {
    k.add([k.text("START"), k.pos(10, 10), k.area(), "menu"]);

    k.onClick("menu", (m) => {
      k.go("game");
    });
  });
}
