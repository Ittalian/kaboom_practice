import { k } from './kaboomCtx';
import { startScene } from './scenes/start_scene';
import { gameScene } from './scenes/game_scene';

k.setGravity(980);

// デバッグモードがONの状態で始まる
// k.debug.inspect = true;

startScene();
gameScene();

// どちらのシーンを最初に実行するかを定義する
k.go('start')
