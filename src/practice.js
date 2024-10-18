import { k } from './kaboomCtx';

k.setGravity(980);

// 物理判定の追加
k.add([
	k.rect(50, 50),
	k.pos(150, 100),
	k.color(0, 0, 0),
	k.area(),
	k.body(),
]);

// 床の追加
k.add([
	k.rect(k.width(), 60),
	k.pos(0, k.height() - 60),
	k.color(100, 100, 100),
	k.area(),
	k.body({
		isStatic: true,
	}),
]);

// 値に代入するやり方
// const player = k.add([
// 	k.rect(50, 50),
// 	k.pos(150, 100)
// ]);
// player.onUpdate(() => {
// 	player.pos = mousePos();
// });

// タグを利用したやり方
k.add([
	k.rect(50, 50),
	k.pos(150, 100),
	'player'
]);

k.onUpdate('player', p => {
	p.pos = mousePos();
});

// moveメソッドの検証
k.add([
	k.rect(50, 50),
	k.pos(50, 100),
	k.color(255, 0, 0),
	k.move(LEFT, 100),
	k.offscreen({destroy: true})
]);

const player2 = k.add([
	k.rect(50, 50),
	k.pos(50, 150),
	k.color(0, 255, 0),
	k.offscreen({destroy: true})
]);

player2.onUpdate(() => {
	player2.move(100, 0);
});

