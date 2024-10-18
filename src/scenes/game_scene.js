import { k } from "../kaboomCtx";

export function gameScene() {
  k.scene("game", () => {
    k.add([
      k.rect(50, 50),
      k.pos(50, 150),
      k.move(RIGHT, 100),
      k.area(),
      k.offscreen({ destroy: true }),
    ]);

    k.add([
      k.rect(50, 50),
      k.pos(50, 100),
      k.move(RIGHT, 50),
      'player'
    ]);

    k.onUpdate('player', p => {
      // ログの出力(console.logみたいな感じ)
      // k.debug.log(p.pos.x);
    });
  });
}
