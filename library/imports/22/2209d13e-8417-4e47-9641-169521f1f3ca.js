var GameManager = cc.Class({
    "extends": cc.Component,

    properties: {
        scaleDuration: 0,

        xPrefab: {
            "default": null,
            type: cc.Prefab
        },

        circlePrefab: {
            "default": null,
            type: cc.Prefab
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        //D.GameManager = this;
        D.GameManager = GameManager;
        cc.director.setClearColor(cc.color(250, 250, 120, 1));
    },

    spawnSymbol: function spawnSymbol(e) {
        //cc.log("SpawnSymbol", e);
        var spawnSymbol = cc.instantiate(this.xPrefab);
        this.node.addChild(spawnSymbol);
        //e.target.addChild(xSymbol);
        spawnSymbol.setPosition(cc.p(e.target.x, e.target.y));
        this.animateSpawn(spawnSymbol);
    },

    animateSpawn: function animateSpawn(symbol) {
        console.debug("Symbol", symbol);
        //console.debug("cc", cc);
        var scaleUp = cc.scaleTo(this.scaleDuration, 1.2, 1.2);
        var scaleBack = cc.scaleTo(this.scaleDuration, 1, 1);
        symbol.runAction(cc.sequence(scaleUp, scaleBack));
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});