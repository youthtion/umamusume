var uma = new Array(
{dorm_p:2,sex_p:1,room_p:2,cls_p:1,flag_p:1,birth_p:1,gene_p:1, ba_p:7,dist_p:7,foot_p:7},
{sch:1,dorm:1,sex:1,room:5, cls:4,flag:1,birth:4,gene:8, ba:1,dist:[0,0,1,0],foot:3,name:"アグネスタキオン",	aishou:[ 0,24,25,18,16,24,10,19,23,18,20,11,18,18,25,11,11,17,19,21,26,18, 3,17,27,17,10,21,19,24,18]},
{sch:1,dorm:1,sex:1,room:0, cls:5,flag:2,birth:3,gene:6, ba:1,dist:[0,0,1,0],foot:3,name:"ウイニングチケット",	aishou:[24, 0,24,19,16,26, 9,17,22,22,18,10,18,19,27,13, 9,17,18,19,25,25, 3,26,25,20,10,18,19,25,16]},
{sch:2,dorm:1,sex:2,room:3, cls:2,flag:1,birth:4,gene:10,ba:1,dist:[0,1,1,0],foot:3,name:"ウオッカ",			aishou:[25,24, 0,20,23,31,12,18,29,16,16, 8,17,17,26,18,16,34,18,24,24,16, 3,16,23,16,15,25,21,22,15]},
{sch:1,dorm:1,sex:2,room:15,cls:5,flag:1,birth:4,gene:7, ba:1,dist:[0,0,1,0],foot:2,name:"エアグルーヴ",		aishou:[18,19,20, 0,23,16,17,12,16,19,18,17,25,25,18,13,16,27,24,26,17,18, 3,25,17,16, 9,17,25,17,22]},
{sch:2,dorm:2,sex:1,room:2, cls:3,flag:1,birth:3,gene:7, ba:1,dist:[0,1,1,0],foot:2,name:"エルコンドルパサー",	aishou:[16,16,23,23, 0,23,14,15,35,17,17,17,27,23,25,16,27,30,26,24,17,15, 2,23,16,16,17,22,22,17,26]},
{sch:1,dorm:1,sex:1,room:0, cls:6,flag:2,birth:3,gene:4, ba:1,dist:[0,1,1,0],foot:3,name:"オグリキャップ",		aishou:[24,26,31,16,23, 0,10,17,30,20,18, 9,19,26,25,17,18,24,20,18,26,17, 3,18,25,20,18,24,18,25,16]},
{sch:2,dorm:1,sex:2,room:0, cls:2,flag:0,birth:0,gene:0, ba:1,dist:[1,0,0,0],foot:2,name:"カレンチャン",		aishou:[10, 9,12,17,14,10, 0,17, 7, 9,10,23,14,16,10, 2,23,19,16,18, 9,10,10,16, 9, 9,14,16,18, 7,15]},
{sch:2,dorm:1,sex:1,room:8, cls:3,flag:1,birth:4,gene:7, ba:1,dist:[1,0,0,0],foot:3,name:"キングヘイロー",		aishou:[19,17,18,12,15,17,17, 0,23,11,11,16,10,10,24, 5,17,11,12,13,20,11,13,10,18,10,16,18,14,16, 9]},
{sch:2,dorm:2,sex:1,room:2, cls:3,flag:1,birth:2,gene:7, ba:1,dist:[0,1,1,0],foot:3,name:"グラスワンダー",		aishou:[23,22,29,16,35,30, 7,23, 0,17,18,10,19,15,31,15,19,23,19,17,24,15, 3,16,23,18,17,23,16,25,18]},
{sch:3,dorm:1,sex:1,room:0, cls:5,flag:2,birth:3,gene:12,ba:1,dist:[0,0,1,1],foot:4,name:"ゴールドシップ",		aishou:[18,22,16,19,17,20, 9,11,17, 0,19, 9,28,28,26,13, 9,18,29,20,26,27,11,31,19,30, 9,18,31,19,25]},
{sch:1,dorm:1,sex:1,room:1, cls:4,flag:2,birth:5,gene:7, ba:1,dist:[0,0,1,0],foot:1,name:"サイレンススズカ",	aishou:[20,18,16,18,17,18,10,11,18,19, 0,13,16,20,23,17,14,17,19,18,19,17, 3,18,27,26,17,26,20,18,17]},
{sch:1,dorm:2,sex:1,room:0, cls:4,flag:2,birth:4,gene:5, ba:1,dist:[1,0,0,0],foot:2,name:"サクラバクシンオー",	aishou:[11,10, 8,17,17, 9,23,16,10, 9,13, 0,17,17, 9, 2,29,15,16,17,12, 8,10,16,13, 9,16,19,18,14,21]},
{sch:1,dorm:2,sex:1,room:0, cls:6,flag:1,birth:3,gene:3, ba:1,dist:[0,0,1,1],foot:2,name:"シンボリルドルフ",	aishou:[18,18,17,25,27,19,14,10,19,28,16,17, 0,33,26, 9,20,24,35,28,22,17, 1,33,16,26,11,17,31,17,36]},
{sch:1,dorm:1,sex:1,room:10,cls:6,flag:2,birth:5,gene:4, ba:1,dist:[0,0,1,1],foot:2,name:"スーパークリーク",	aishou:[18,19,17,25,23,26,16,10,15,28,20,17,33, 0,29,11,16,25,33,24,25,20, 3,34,21,27,11,17,34,16,32]},
{sch:2,dorm:1,sex:1,room:1, cls:3,flag:2,birth:5,gene:7, ba:1,dist:[0,0,1,1],foot:3,name:"スペシャルウィーク",	aishou:[25,27,26,18,25,25,10,24,31,26,23, 9,26,29, 0,10, 9,17,31,20,35,17, 6,25,28,26,11,18,27,24,23]},
{sch:1,dorm:1,sex:1,room:0, cls:5,flag:0,birth:4,gene:0, ba:2,dist:[0,1,1,0],foot:1,name:"スマートファルコン",	aishou:[11,13,18,13,16,17, 2, 5,15,13,17, 2, 9,11,10, 0, 8,17,10,12,11, 0,10,13,10,17,16,25,12,11, 8]},
{sch:1,dorm:2,sex:1,room:0, cls:4,flag:1,birth:3,gene:7, ba:1,dist:[1,1,0,0],foot:2,name:"タイキシャトル",		aishou:[11, 9,16,16,27,18,23,17,19, 9,14,29,20,16, 9, 8, 0,22,17,17, 9, 8, 7,16,15, 9,24,24,16,11,21]},
{sch:2,dorm:1,sex:2,room:3, cls:2,flag:1,birth:5,gene:10,ba:1,dist:[0,1,1,0],foot:2,name:"ダイワスカーレット",	aishou:[17,17,34,27,30,24,19,11,23,18,17,15,24,25,17,17,22, 0,24,30,16,16, 4,24,17,17,17,23,28,14,22]},
{sch:2,dorm:1,sex:1,room:14,cls:3,flag:0,birth:3,gene:0, ba:1,dist:[0,0,1,1],foot:2,name:"テイエムオペラオー",	aishou:[19,18,18,24,26,20,16,12,19,29,19,16,35,33,31,10,17,24, 0,27,26,19, 5,36,17,29, 8,18,33,16,32]},
{sch:2,dorm:1,sex:1,room:0, cls:2,flag:1,birth:4,gene:5, ba:1,dist:[0,0,1,0],foot:2,name:"トウカイテイオー",	aishou:[21,19,24,26,24,18,18,13,17,20,18,17,28,24,20,12,17,30,27, 0,21,19, 3,25,17,20, 9,20,31,17,25]},
{sch:2,dorm:1,sex:1,room:9, cls:3,flag:2,birth:4,gene:5, ba:1,dist:[0,0,1,1],foot:3,name:"ナイスネイチャ",		aishou:[26,25,24,17,17,26, 9,20,24,26,19,12,22,25,35,11, 9,16,26,21, 0,18, 6,24,25,25, 8,18,27,25,24]},
{sch:1,dorm:1,sex:1,room:10,cls:5,flag:0,birth:6,gene:0, ba:1,dist:[0,0,1,0],foot:4,name:"ナリタタイシン",		aishou:[18,25,16,18,15,17,10,11,15,27,17, 8,17,20,17, 0, 8,16,19,19,18, 0,10,25,17,17, 9,18,18,18,15]},
{sch:2,dorm:1,sex:2,room:8, cls:3,flag:2,birth:2,gene:8, ba:2,dist:[1,0,0,0],foot:4,name:"ハルウララ",			aishou:[ 3, 3, 3, 3, 2, 3,10,13, 3,11, 3,10, 1, 3, 7,10, 7, 4, 5, 3, 5,10, 0, 2, 3, 3, 7, 9, 4, 1, 2]},
{sch:1,dorm:1,sex:1,room:14,cls:5,flag:0,birth:3,gene:0, ba:1,dist:[0,0,1,1],foot:2,name:"ビワハヤヒデ",		aishou:[17,26,16,25,23,18,16,10,16,31,18,16,33,34,25,13,16,24,36,25,24,25, 2, 0,18,28, 9,17,35,18,32]},
{sch:1,dorm:1,sex:1,room:0, cls:4,flag:2,birth:5,gene:7, ba:1,dist:[0,0,1,0],foot:3,name:"マチカネフクキタル",	aishou:[27,25,23,17,16,25, 9,18,23,19,27,13,16,21,28,10,15,17,17,17,25,17, 3,18, 0,19,10,19,19,23,19]},
{sch:2,dorm:1,sex:1,room:4, cls:1,flag:2,birth:3,gene:6, ba:1,dist:[0,0,1,1],foot:1,name:"マヤノトップガン",	aishou:[17,20,16,16,16,20, 9,10,18,30,26, 9,26,27,26,17, 9,17,29,20,25,17, 3,28,19, 0,15,24,28,17,25]},
{sch:1,dorm:0,sex:1,room:0, cls:6,flag:1,birth:5,gene:1, ba:1,dist:[1,1,0,0],foot:1,name:"マルゼンスキー",		aishou:[10,10,15, 9,17,18,14,16,17, 9,17,16,11,11,11,16,24,17, 8, 9, 8, 9, 7, 9,10,15, 0,30, 8, 8,10]},
{sch:1,dorm:1,sex:1,room:0, cls:4,flag:0,birth:4,gene:0, ba:1,dist:[1,1,1,0],foot:1,name:"ミホノブルボン",		aishou:[21,18,25,17,22,24,16,18,23,18,26,19,17,17,18,25,24,23,18,20,18,18, 9,17,19,24,30, 0,18,16,18]},
{sch:2,dorm:1,sex:1,room:0, cls:2,flag:2,birth:4,gene:5, ba:1,dist:[0,0,1,1],foot:2,name:"メジロマックイーン",	aishou:[19,19,21,25,22,18,18,14,16,31,20,18,31,34,27,12,16,28,33,31,27,18, 4,35,19,28, 8,18, 0,22,33]},
{sch:1,dorm:2,sex:1,room:11,cls:5,flag:2,birth:4,gene:5, ba:1,dist:[0,0,1,0],foot:3,name:"メジロライアン",		aishou:[24,25,22,17,17,25, 7,16,25,19,18,14,17,16,24,11,11,14,16,17,25,18, 1,18,23,17, 8,16,22, 0,19]},
{sch:1,dorm:2,sex:1,room:7, cls:4,flag:1,birth:3,gene:5, ba:1,dist:[0,0,1,1],foot:2,name:"ライスシャワー",		aishou:[18,16,15,22,26,16,15, 9,18,25,17,21,36,32,23, 8,21,22,32,25,24,15, 2,32,19,25,10,18,33,19, 0]}
);

// (sch) 1:高 2:中 3:？
// (dorm)1:栗 2:美
// (gen) 1:牡 2:牝
// (ba)  1:芝 2:ダ
// (foot)1:逃 2:先 3:差 4:追