import { k } from "../kaboomCtx";

export function gameScene() {
  k.scene("game", () => {
    k.add([
      k.rect(50, 50),
      k.pos(50, 150),
      k.move(RIGHT, 100),
      k.offscreen({ destroy: true }),
    ]);
  });
}
