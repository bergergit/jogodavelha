require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"GameManager":[function(require,module,exports){
"use strict";
cc._RFpush(module, '2209dE+hBdOR5ZBFpUh8fPK', 'GameManager');
// scripts/GameManager.js

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

cc._RFpop();
},{}],"Globals":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'def91pHGTxClq1U3y3A3zog', 'Globals');
// scripts/Globals.js

// declare global variable "D"
window.D = {
    // types
    GameManager: null
};

cc._RFpop();
},{}]},{},["GameManager","Globals"])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9Db2Nvc0NyZWF0b3IuYXBwL0NvbnRlbnRzL1Jlc291cmNlcy9hcHAuYXNhci9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXNzZXRzL3NjcmlwdHMvR2FtZU1hbmFnZXIuanMiLCJhc3NldHMvc2NyaXB0cy9HbG9iYWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0FBO0FBQ0k7QUFDSjtBQUNJO0FBQ0k7QUFDUjtBQUNRO0FBQ0k7QUFDQTtBQUNaO0FBQ0E7QUFDUTtBQUNJO0FBQ0E7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0o7QUFDUTtBQUNBO0FBQ1I7QUFDQTtBQUNJO0FBQ0o7QUFDUTtBQUNBO0FBQ1I7QUFDUTtBQUNBO0FBQ1I7QUFDQTtBQUNJO0FBQ0k7QUFDUjtBQUNRO0FBQ0E7QUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEdhbWVNYW5hZ2VyID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc2NhbGVEdXJhdGlvbjogMCxcbiAgICAgICAgXG4gICAgICAgIHhQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGNpcmNsZVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9ELkdhbWVNYW5hZ2VyID0gdGhpcztcbiAgICAgICAgRC5HYW1lTWFuYWdlciA9IEdhbWVNYW5hZ2VyO1xuICAgICAgICBjYy5kaXJlY3Rvci5zZXRDbGVhckNvbG9yKGNjLmNvbG9yKDI1MCwgMjUwLCAxMjAsIDEpKVxuICAgIH0sXG4gICAgXG4gICAgc3Bhd25TeW1ib2w6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy9jYy5sb2coXCJTcGF3blN5bWJvbFwiLCBlKTtcbiAgICAgICAgdmFyIHNwYXduU3ltYm9sID0gY2MuaW5zdGFudGlhdGUodGhpcy54UHJlZmFiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHNwYXduU3ltYm9sKTtcbiAgICAgICAgLy9lLnRhcmdldC5hZGRDaGlsZCh4U3ltYm9sKTtcbiAgICAgICAgc3Bhd25TeW1ib2wuc2V0UG9zaXRpb24oY2MucChlLnRhcmdldC54LCBlLnRhcmdldC55KSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVNwYXduKHNwYXduU3ltYm9sKVxuICAgIH0sXG4gICAgXG4gICAgYW5pbWF0ZVNwYXduOiBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICAgICAgY29uc29sZS5kZWJ1ZyhcIlN5bWJvbFwiLCBzeW1ib2wpO1xuICAgICAgICAvL2NvbnNvbGUuZGVidWcoXCJjY1wiLCBjYyk7IFxuICAgICAgICB2YXIgc2NhbGVVcCA9IGNjLnNjYWxlVG8odGhpcy5zY2FsZUR1cmF0aW9uLCAxLjIsIDEuMik7XG4gICAgICAgIHZhciBzY2FsZUJhY2sgPSBjYy5zY2FsZVRvKHRoaXMuc2NhbGVEdXJhdGlvbiwgMSwgMSk7XG4gICAgICAgIHN5bWJvbC5ydW5BY3Rpb24oY2Muc2VxdWVuY2Uoc2NhbGVVcCwgc2NhbGVCYWNrKSk7XG4gICAgfVxuXG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuIiwiLy8gZGVjbGFyZSBnbG9iYWwgdmFyaWFibGUgXCJEXCJcbndpbmRvdy5EID0ge1xuICAgIC8vIHR5cGVzXG4gICAgR2FtZU1hbmFnZXI6IG51bGwsXG59OyJdfQ==