"use strict";
function MvbNT() {
    var t, n, i;
    QwTxA("setcanvassize");
    t = parameters.screenWidth;
    n = parameters.screenHeight;
    parameters.screenHeight || (window.document.innerHeight > n && (n = window.document.innerHeight),
    window.document.documentElement.clientHeight > n && (n = window.document.documentElement.clientHeight),
    window.document.body.clientHeight > n && (n = window.document.body.clientHeight),
    window.screen.availHeight > n && isfullscreen && (n = window.screen.availHeight));
    parameters.screenWidth == 0 && (window.document.innerWidth > t && (t = window.document.innerWidth),
    window.document.documentElement.clientWidth > t && (t = window.document.documentElement.clientWidth),
    window.document.body.clientWidth > t && (t = window.document.body.clientWidth),
    window.screen.availWidth > t && isfullscreen && (t = window.screen.availWidth));
    EZZXG = parameters.scale || 1;
    i = document.getElementById("fmCanvas");
    i.width = t;
    i.height = n;
    EbylO = new Size(t,n);
    QwTxA(t + " " + n);
    parameters.scale == 1 && (t > 1366 && (EZZXG = t / 1366),
    n > 1024 && (EZZXG = min(EZZXG, n / 1024)),
    parameters.clientMode != 2 && (t < 1024 && n < 800 && (EZZXG = t / 1024),
    n < 600 && n >= 200 && (EZZXG = min(EZZXG, n / 600)),
    EZZXG < .7 && (EZZXG = .7)));
    stage != null && (stage.scaleX = EZZXG,
    stage.scaleY = EZZXG);
    CqUAp = new Size(EbylO.width / stage.scaleX,EbylO.height / stage.scaleY);
    view != null && view.resize(CqUAp)
}
function cVDad(n) {
    game.loaded && (KRdPs.fiWcu = n.delta / 20.83,
    KRdPs && KRdPs.cVDad(),
    game.cVDad(),
    DMryL && DMryL.cVDad(),
    view && view.cVDad(),
    replay && replay.cVDad(),
    anthems && anthems.cVDad(),
    Score.scores.forEach(function(n) {
        return n.uJUbD()
    }),
    Comic.comics.forEach(function(n) {
        return n.uJUbD()
    }),
    PYgUk && PYgUk.uJUbD(),
    sounds && sounds.cVDad(),
    stage.update(n))
}
function rvMca() {
    if ((QwTxA("isfullscreen: " + isfullscreen),
    parameters.fullScreen != 0 && !isfullscreen) && ("fullscreenEnabled"in document || "webkitFullscreenEnabled"in document || "mozFullScreenEnabled"in document || "msFullscreenEnabled"in document) && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)) {
        var n = document.getElementById("divCanvas");
        "requestFullscreen"in n ? n.requestFullscreen() : "webkitRequestFullscreen"in n ? n.webkitRequestFullscreen() : "mozRequestFullScreen"in n ? n.mozRequestFullScreen() : "msRequestFullscreen"in n && n.msRequestFullscreen()
    }
}
function pLkuy() {
    QwTxA("screen change");
    document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement ? isfullscreen = !0 : (isfullscreen = !1,
    "exitFullscreen"in document ? document.exitFullscreen() : "webkitExitFullscreen"in document ? document.webkitExitFullscreen() : "mozCancelFullScreen"in document ? document.mozCancelFullScreen() : "msExitFullscreen"in document && document.msExitFullscreen());
    MvbNT()
}
function gvUjh() {
    if (QwTxA("add screen events"),
    parameters.fullScreen == 1) {
        var t = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
          , i = typeof InstallTrigger != "undefined"
          , r = /cTrECY/i.test(window.HTMLElement) || function(n) {
            return n.toString() === "[object SafariRemoteNotification]"
        }(!window.safari || typeof safari != "undefined" && safari.pushNotification)
          , n = !!document.documentMode
          , u = !n && !!window.StyleMedia
          , f = !!window.chrome && !!window.chrome.webstore;
        document.addEventListener("fullscreenchange", pLkuy);
        document.addEventListener("MSFullscreenChange", pLkuy);
        document.addEventListener("webkitfullscreenchange", pLkuy);
        document.addEventListener("mozfullscreenchange", pLkuy)
    }
}
function TkkRI(n) {
    yZMSU.visible = n;
    WUUhY.visible = n;
    yxdsY.visible = n;
    PvRyJ.visible = n;
    XOpAD.visible = n
}
function iqHUQ() {
    document.onkeydown = null;
    var n = document.getElementById("divStart");
    n.style.display = "none";
    window.initFM();
    rvMca()
}
function sgn(n) {
    return n < 0 ? -1 : 1
}
function vRzMg(n, t, i) {
    return n > i ? i : n < t ? t : n
}
function min(n, t) {
    return n < t ? n : t
}
function max(n, t) {
    return n > t ? n : t
}
function btovy(n, t) {
    var i = (n - t + Math.PI * 8) % (Math.PI * 2);
    return i > Math.PI && (i = Math.PI * 2 - i),
    i
}
function SHEOV(n, t) {
    return n < t - Math.PI && (n += Math.PI * 2),
    t < n - Math.PI && (t += Math.PI * 2),
    (n + t) * .5
}
function DsVVx(n, t) {
    return Math.sqrt(n * n + t * t)
}
function sqSum(n, t) {
    return n * n + t * t
}
function wapWW(n, t) {
    return Math.pow(n.yAjCz.SDHsM, 2) + Math.pow(t.yAjCz.dTfhX, 2)
}
function CvEEI(n) {
    return n ? 1 : 0
}
function cTAWM(n) {
    var t;
    return n = n.toLowerCase().replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(n, t, i, r) {
        return t + t + i + i + r + r
    }),
    t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
    t ? new Color(parseInt(t[1], 16),parseInt(t[2], 16),parseInt(t[3], 16)) : null
}
function duAGL(n) {
    window.location.href = n
}
function COwvc() {
    return "ontouchstart"in window || navigator.msMaxTouchiLfeps
}
function FiNll(n, t) {
    if (n > -3 && n < 3 && t > -3 && t < 3) {
        var i = n + 2 + (t + 2) * 5;
        return String.fromCharCode(65 + i)
    }
    return (n == 0 ? "" : n.toString()) + "," + (t == 0 ? "" : t.toString())
}
function TzYKh(n) {
    var t = n.charCodeAt(0) - 65;
    return t % 5 - 2
}
function oucUs(n) {
    var t = n.charCodeAt(0) - 65;
    return ~~(t / 5) - 2
}
function qJAsQ(n) {
    return n * 16
}
function qCuzf(n) {
    return n * .16
}
function cPvOd(n) {
    return n * 57.29
}
function YulwW(n) {
    return localStorage.getItem(n) || n
}
function AMdME() {
    return parseInt(parameters.fallback.split(",")[parseInt(parameters.fallback.split(",")[10]) % 10]) % 10
}
function QwTxA() {}
function IisxC(n) {
    if (n.keyCode == 13)
        return chat.sendComment(),
        !1
}
function JYgby() {
    document.hasFocus() && !game.VZEWj && game.kirRk - KRdPs.XAFCH > 5 && !KRdPs.dAuKS && (KRdPs.Quggj = game.kirRk - KRdPs.XAFCH,
    KRdPs.PBzyl = KRdPs.PBzyl > 0 ? KRdPs.PBzyl * .5 + KRdPs.Quggj * .5 : KRdPs.Quggj);
    KRdPs.XAFCH = game.kirRk
}
var Xipla = function() {
    function n() {}
    return n.prototype.wqKfW = function(n) {
        for (var i, r = [], u = 0, t = 0; t < n.length; t++)
            n[t] = (i = n[t]) !== null && i !== void 0 ? i : -9999,
            r[t] = t == 0 ? n[t] * 2 : n[t] * 2 - n[t - 1],
            u += n[t];
        return r[n.length] = u % 10,
        r.join(",")
    }
    ,
    n.prototype.wSerX = function(n) {
        for (var f, r = n.split(","), i = [], u = 0, t = 0; t < r.length - 1; t++)
            i[t] = t == 0 ? parseInt(r[t]) / 2 : (parseInt(r[t]) + i[t - 1]) / 2,
            u += i[t];
        if (f = u % 10,
        f != parseInt(r[r.length - 1]))
            return QwTxA("err"),
            [];
        for (t = 0; t < i.length; t++)
            i[t] = i[t] == -9999 ? null : i[t];
        return i
    }
    ,
    n
}(), NDmPP, GameParameters, Rules, ZHKkT, UserMatch, vPNep, iLfep, KsDsI, Line, NGGSw, RuKqE, Vector, Size, bTvce, DNprm, KTgav, oqJtT, JpAaA, GiYSB, DmkKD, Goal, AKJhG, AABOp, QqqsK, tGFoh, Pitch, uJMKP, Pitch5, uumai, Chat, Cursor, jxpMf, oobXj, FxDRC, fDILa, Pawn, Radar, mRsGo, Result, Score, rcmWb, SuggestedPosition, Hand, Shoe, sKaRj, IKXWT, Replay, FfSyR, mbBwy, Stream, StreamBlock, XjVWq, fLZQH, EhvrD, uQgUi, Shirt, Shorts, Head, Face, Player, sjRXf, DIUlF, Shadow, umoAS, uSTzW, wWFNE, Keyboard, IreLH, bcVLQ, Kit, Color, Team, Ball, YTUYD, yqESJ, fBPhH, QACuZ, BBvSX, jNhGy, IDyVn, FsOgA, NZpgG, CpJgo, hTbgM, View, Game, Match, NQEqi, Match5, nthMn, Card, Comic, qlBxG, Referee, zjWzu, bMJVL, vmEgn, Foul, vkTSQ, YeStj, Training, nsHxV, koYxx, Fog, Splash, ymzaC, __extends, Events;
NDmPP = function() {
    function n() {
        this.fPcNW = null;
        this.QNOwh = null;
        this.jiFyl = null;
        this.GbiRR = 0;
        this.qlqRI = 0
    }
    return n.prototype.wqKfW = function() {
        var n = [~~(Math.random() * 100), this.qlqRI, this.GbiRR, this.fPcNW, this.QNOwh, this.jiFyl, game.xbRtm ? t1.LTpCB : null, game.xbRtm ? t2.LTpCB : null, game.xbRtm ? t1.GRAUc : null, game.xbRtm ? t2.GRAUc : null, parameters.editionStageMatch, ~~(game.YUWPz ? game.YUWPz.tGTrX() * 1e3 : null)];
        return ATtwR.wqKfW(n)
    }
    ,
    n.prototype.wSerX = function(n) {
        var t = ATtwR.wSerX(n);
        return t.length == 0 ? !1 : (this.qlqRI = t[1],
        this.GbiRR = t[2],
        this.fPcNW = t[3],
        this.QNOwh = t[4],
        this.jiFyl = t[5],
        t1.LTpCB = t[6],
        t2.LTpCB = t[7],
        t1.GRAUc = t[8],
        t2.GRAUc = t[9],
        !0)
    }
    ,
    n.prototype.SyaPY = function(n) {
        this.fPcNW = ~~n
    }
    ,
    n.prototype.fJpjB = function(n) {
        this.QNOwh = ~~n
    }
    ,
    n.prototype.jrJAI = function(n) {
        this.jiFyl = ~~n
    }
    ,
    n.prototype.VOkaD = function(n) {
        this.qlqRI = ~~n
    }
    ,
    n.prototype.wQQiA = function(n) {
        this.GbiRR = ~~n
    }
    ,
    n
}();
GameParameters = function() {
    function n() {}
    return n
}();
Rules = function() {
    function n() {
        this.kqBBq = !0
    }
    return n
}();
ZHKkT = function() {
    function n() {
        this.PcyRv = 0;
        this.TtWmN = 0;
        this.WkvqA = 0;
        this.AGweP = 0;
        this.shots = 0;
        this.rLFrH = 0;
        this.passes = 0;
        this.MBtyq = 0;
        this.saves = 0;
        this.offsides = 0;
        this.distance = 0;
        this.NyVLh = 0;
        this.RuMOd = 0;
        this.tJEtY = 0;
        this.Zzebs = 0;
        this.UiLDm = 0;
        this.corners = 0;
        this.posts = 0
    }
    return n.prototype.rFMkh = function() {
        return this.TtWmN - this.WkvqA
    }
    ,
    n.prototype.BBogr = function() {
        return this.passes - this.MBtyq
    }
    ,
    n.prototype.tYYgC = function() {
        return ~~(this.BBogr() * 100 / this.passes)
    }
    ,
    n.prototype.qoUTp = function() {
        return this.shots - this.rLFrH
    }
    ,
    n.prototype.brAab = function() {
        return ~~this.PcyRv.toString() + ";" + this.shots.toString() + ";" + this.rLFrH.toString() + ";" + this.passes.toString() + ";" + this.MBtyq.toString() + ";" + this.offsides.toString() + ";" + this.NyVLh.toString() + ";" + this.RuMOd.toString() + ";" + ~~this.distance.toString() + ";" + this.saves.toString()
    }
    ,
    n.prototype.CskeJ = function(n) {
        if (n != "") {
            var t = n.split(";");
            this.PcyRv = parseInt(t[0].toString());
            this.shots = parseInt(t[1].toString());
            this.rLFrH = parseInt(t[2].toString());
            this.passes = parseInt(t[3].toString());
            this.MBtyq = parseInt(t[4].toString());
            this.offsides = parseInt(t[5].toString());
            this.NyVLh = parseInt(t[6].toString());
            this.RuMOd = parseInt(t[7].toString());
            this.distance = parseInt(t[8].toString());
            this.saves = parseInt(t[9].toString())
        }
    }
    ,
    n.prototype.add = function(n) {
        this.PcyRv += n.PcyRv;
        this.TtWmN += n.TtWmN;
        this.WkvqA += n.WkvqA;
        this.AGweP += n.AGweP;
        this.shots += n.shots;
        this.rLFrH += n.rLFrH;
        this.passes += n.passes;
        this.MBtyq += n.MBtyq;
        this.saves += n.saves;
        this.offsides += n.offsides;
        this.distance += n.distance;
        this.NyVLh += n.NyVLh;
        this.RuMOd += n.RuMOd;
        this.tJEtY += n.tJEtY;
        this.Zzebs += n.Zzebs;
        this.UiLDm += n.UiLDm;
        this.corners += n.corners;
        this.posts += n.posts
    }
    ,
    n
}();
UserMatch = function() {
    function n() {}
    return n
}();
vPNep = function() {
    function n() {
        this.HYzZc = 0
    }
    return n.prototype.start = function() {
        this.HYzZc = 0;
        this.MgVgK = Date.now()
    }
    ,
    n.prototype.stop = function() {
        this.HYzZc += Date.now() - this.MgVgK
    }
    ,
    n
}();
iLfep = function() {
    function n(n, t, i) {
        n === void 0 && (n = 0);
        t === void 0 && (t = 0);
        i === void 0 && (i = 0);
        this.SDHsM = n;
        this.dTfhX = t;
        this.hzrxR = i
    }
    return n.prototype.reset = function() {
        this.SDHsM = 0;
        this.dTfhX = 0;
        this.hzrxR = 0
    }
    ,
    n.prototype.add = function(n) {
        this.SDHsM += n.SDHsM;
        this.dTfhX += n.dTfhX;
        this.hzrxR += n.hzrxR
    }
    ,
    n.prototype.wapWW = function(n) {
        return Math.pow(this.SDHsM - n.SDHsM, 2) + Math.pow(this.dTfhX - n.dTfhX, 2)
    }
    ,
    n.prototype.distXY = function(n) {
        return Math.sqrt(Math.pow(this.SDHsM - n.SDHsM, 2) + Math.pow(this.dTfhX - n.dTfhX, 2))
    }
    ,
    n.prototype.angTo = function(n) {
        return Math.atan2(n.dTfhX - this.dTfhX, n.SDHsM - this.SDHsM)
    }
    ,
    n.prototype.rhHby = function(n) {
        return this.SDHsM = this.SDHsM + n * (1 - Math.random() * 2),
        this.dTfhX = this.dTfhX + n * (1 - Math.random() * 2),
        this
    }
    ,
    n.prototype.deSCM = function(n, t) {
        return t === void 0 && (t = 0),
        this.SDHsM = vRzMg(this.SDHsM, n.x - t, n.x + n.width + t),
        this.dTfhX = vRzMg(this.dTfhX, n.y - t, n.y + n.height + t),
        this
    }
    ,
    n.prototype.clone = function() {
        return new n(this.SDHsM,this.dTfhX,this.hzrxR)
    }
    ,
    n.prototype.SPPZQ = function(t, i, r) {
        return r === void 0 && (r = !1),
        new n(this.SDHsM + Math.cos(t) * i,this.dTfhX + Math.sin(t) * i,r ? 0 : this.hzrxR)
    }
    ,
    n.prototype.MVOWz = function(t, i, r) {
        return r === void 0 && (r = 0),
        new n(this.SDHsM + t,this.dTfhX + i,this.hzrxR + r)
    }
    ,
    n.prototype.round = function() {
        return this.SDHsM = ~~this.SDHsM,
        this.dTfhX = ~~this.dTfhX,
        this.hzrxR = ~~this.hzrxR,
        this
    }
    ,
    n.prototype.YulwW = function(n) {
        this.SDHsM += n.SDHsM;
        this.dTfhX += n.dTfhX;
        this.hzrxR += n.hzrxR
    }
    ,
    n.prototype.YfWoP = function(n) {
        var t = Math.sqrt(this.SDHsM * this.SDHsM + this.dTfhX * this.dTfhX)
          , i = Math.atan2(this.dTfhX, this.SDHsM);
        this.SDHsM = Math.cos(i + n) * t;
        this.dTfhX = Math.sin(i + n) * t
    }
    ,
    n
}();
KsDsI = function() {
    function n(n, t) {
        n === void 0 && (n = 0);
        t === void 0 && (t = 0);
        this.SDHsM = n;
        this.dTfhX = t
    }
    return n.prototype.reset = function() {
        this.SDHsM = 0;
        this.dTfhX = 0
    }
    ,
    n.prototype.sqDist = function(n) {
        return Math.pow(this.SDHsM - n.SDHsM, 2) + Math.pow(this.dTfhX - n.dTfhX, 2)
    }
    ,
    n.prototype.dist = function(n) {
        return Math.sqrt(Math.pow(this.SDHsM - n.SDHsM, 2) + Math.pow(this.dTfhX - n.dTfhX, 2))
    }
    ,
    n.prototype.angTo = function(n) {
        return Math.atan2(n.dTfhX - this.dTfhX, n.SDHsM - this.SDHsM)
    }
    ,
    n.prototype.drdcW = function(n) {
        this.SDHsM = this.SDHsM + n * (1 - Math.random() * 2);
        this.dTfhX = this.dTfhX + n * (1 - Math.random() * 2)
    }
    ,
    n.prototype.vRzMg = function(n, t) {
        t === void 0 && (t = 0);
        this.SDHsM = vRzMg(this.SDHsM, n.x - t, n.x + n.width + t);
        this.dTfhX = vRzMg(this.dTfhX, n.y - t, n.y + n.height + t)
    }
    ,
    n.prototype.clone = function() {
        return new n(this.SDHsM,this.dTfhX)
    }
    ,
    n.prototype.SPPZQ = function(t, i) {
        return new n(this.SDHsM + Math.cos(t) * i,this.dTfhX + Math.sin(t) * i)
    }
    ,
    n.prototype.MVOWz = function(t, i) {
        return new n(this.SDHsM + t,this.dTfhX + i)
    }
    ,
    n
}();
Line = function() {
    function n(n, t) {
        this.point1 = n;
        this.point2 = t
    }
    return n.prototype.render = function(n) {
        var t = view.wuNti(this.point1)
          , i = view.wuNti(this.point2);
        n.graphics.moveTo(t.SDHsM, t.dTfhX);
        n.graphics.lineTo(i.SDHsM, i.dTfhX)
    }
    ,
    n.prototype.DjlBG = function(n, t) {
        var i = view.DjlBG(this.point1, t)
          , r = view.DjlBG(this.point2, t);
        n.graphics.moveTo(i.SDHsM, i.dTfhX);
        n.graphics.lineTo(r.SDHsM, r.dTfhX)
    }
    ,
    n.prototype.sOPEM = function() {
        var n = view.wuNti(this.point1)
          , t = view.wuNti(this.point2);
        return new bTvce(min(n.SDHsM, t.SDHsM),min(n.dTfhX, t.dTfhX),new Size(Math.abs(n.SDHsM - t.SDHsM),Math.abs(n.dTfhX - t.dTfhX)))
    }
    ,
    n.prototype.oXEJx = function(n) {
        var i = this
          , t = null;
        return n.forEach(function(n) {
            var r = view.DjlBG(i.point1, n), u;
            t == null ? t = new bTvce(r.SDHsM,r.dTfhX,new Size(0,0)) : t.QTXBn(r);
            u = view.DjlBG(i.point2, n);
            t.QTXBn(u)
        }),
        t
    }
    ,
    n.prototype.YulwW = function(n) {
        this.point1.YulwW(n);
        this.point2.YulwW(n)
    }
    ,
    n
}();
NGGSw = function() {
    function n(n) {
        this.lines = n
    }
    return n.prototype.render = function(n) {
        this.lines.forEach(function(t) {
            return t.render(n)
        })
    }
    ,
    n.prototype.DjlBG = function(n, t) {
        this.lines.forEach(function(i) {
            return i.DjlBG(n, t)
        })
    }
    ,
    n.prototype.sOPEM = function() {
        var n = null;
        return this.lines.forEach(function(t) {
            n == null ? n = t.sOPEM() : n.VfcnX(t.sOPEM())
        }),
        n
    }
    ,
    n.prototype.oXEJx = function(n) {
        var t = null;
        return this.lines.forEach(function(i) {
            t == null ? t = i.oXEJx(n) : t.VfcnX(i.oXEJx(n))
        }),
        t
    }
    ,
    n.prototype.YulwW = function(n) {
        this.lines.forEach(function(t) {
            t.YulwW(n)
        })
    }
    ,
    n
}();
RuKqE = function() {
    function n(n) {
        this.hptUp = n
    }
    return n.prototype.xQWNO = function(n, t) {
        var r, i;
        for (this.hptUp = [],
        r = 0,
        i = 0; i < Math.PI * 2; i += .05)
            this.hptUp[r] = new iLfep(Math.cos(i) * n,Math.sin(i) * t),
            r++
    }
    ,
    n.prototype.AJSTU = function() {
        var n = [];
        return this.hptUp.forEach(function(t, i) {
            n[i] = view.wuNti(t)
        }),
        n
    }
    ,
    n.prototype.MeOze = function(n) {
        var t = [];
        return this.hptUp.forEach(function(i, r) {
            t[r] = view.DjlBG(i, n)
        }),
        t
    }
    ,
    n.prototype.igzIl = function(n, t) {
        var i, r = !0;
        t.forEach(function(t) {
            r ? (i = t,
            n.graphics.moveTo(t.SDHsM, t.dTfhX),
            r = !1) : n.graphics.lineTo(t.SDHsM, t.dTfhX)
        });
        n.graphics.lineTo(i.SDHsM, i.dTfhX)
    }
    ,
    n.prototype.render = function(n) {
        this.igzIl(n, this.AJSTU())
    }
    ,
    n.prototype.DjlBG = function(n, t) {
        this.igzIl(n, this.MeOze(t))
    }
    ,
    n.prototype.sOPEM = function() {
        var n = null;
        return this.hptUp.forEach(function(t) {
            var i = view.wuNti(t);
            n == null ? n = new bTvce(i.SDHsM,i.dTfhX,new Size(1,1)) : n.QTXBn(i)
        }),
        n
    }
    ,
    n.prototype.oXEJx = function(n) {
        var i = this
          , t = null;
        return n.forEach(function(n) {
            i.hptUp.forEach(function(i) {
                var r = view.DjlBG(i, n);
                t == null ? t = new bTvce(r.SDHsM,r.dTfhX,new Size(1,1)) : t.QTXBn(r)
            })
        }),
        t
    }
    ,
    n.prototype.YulwW = function(n) {
        this.hptUp.forEach(function(t) {
            t.YulwW(n)
        })
    }
    ,
    n.prototype.YfWoP = function(n) {
        this.hptUp.forEach(function(t) {
            t.YfWoP(n)
        })
    }
    ,
    n
}();
Vector = function() {
    function n(n, t, i) {
        n === void 0 && (n = 0);
        t === void 0 && (t = 0);
        i === void 0 && (i = 0);
        this.SDHsM = n;
        this.dTfhX = t;
        this.hzrxR = i
    }
    return n.prototype.value = function() {
        return Math.sqrt(Math.pow(this.SDHsM, 2) + Math.pow(this.dTfhX, 2) + Math.pow(this.hzrxR, 2))
    }
    ,
    n.prototype.add = function(n) {
        this.SDHsM += n.SDHsM;
        this.dTfhX += n.dTfhX;
        this.hzrxR += n.hzrxR
    }
    ,
    n.prototype.KTrXz = function() {
        return Math.pow(this.SDHsM, 2) + Math.pow(this.dTfhX, 2) + Math.pow(this.hzrxR, 2)
    }
    ,
    n.prototype.xJwON = function() {
        return Math.sqrt(Math.pow(this.SDHsM, 2) + Math.pow(this.dTfhX, 2))
    }
    ,
    n.prototype.sNbSL = function() {
        return Math.pow(this.SDHsM, 2) + Math.pow(this.dTfhX, 2)
    }
    ,
    n.prototype.angXY = function() {
        return Math.atan2(this.dTfhX, this.SDHsM)
    }
    ,
    n.prototype.JfORt = function(n, t) {
        if (t === void 0 && (t = 0),
        !isNaN(n)) {
            var i = t == 0 ? this.xJwON() : t;
            this.SDHsM = Math.cos(n) * i;
            this.dTfhX = Math.sin(n) * i
        }
    }
    ,
    n.prototype.set = function(n, t, i) {
        if (i === void 0 && (i = 0),
        !isNaN(n)) {
            var r = i == 0 ? this.value() : i;
            this.SDHsM = Math.cos(n) * Math.cos(t) * r;
            this.dTfhX = Math.sin(n) * Math.cos(t) * r;
            this.hzrxR = Math.sin(t) * r
        }
    }
    ,
    n.prototype.TfgYn = function(n) {
        this.SDHsM *= n;
        this.dTfhX *= n;
        this.hzrxR *= n
    }
    ,
    n.prototype.reset = function() {
        this.SDHsM = 0;
        this.dTfhX = 0;
        this.hzrxR = 0
    }
    ,
    n.prototype.clone = function() {
        return new n(this.SDHsM,this.dTfhX,this.hzrxR)
    }
    ,
    n.prototype.CCsyu = function(t) {
        return new n(this.SDHsM - t.SDHsM,this.dTfhX - t.dTfhX,this.hzrxR - t.hzrxR).value()
    }
    ,
    n.prototype.vYMgl = function(n, t) {
        var i = 1 - t;
        this.SDHsM = this.SDHsM * i + n.SDHsM * t;
        this.dTfhX = this.dTfhX * i + n.dTfhX * t;
        this.hzrxR = this.hzrxR * i + n.hzrxR * t
    }
    ,
    n
}();
Size = function() {
    function n(n, t) {
        this.width = n;
        this.height = t;
        this.wmdto = n / 2;
        this.FpLNn = t / 2
    }
    return n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
bTvce = function(n) {
    function t(t, i, r) {
        var u = n.call(this, r.width, r.height) || this;
        return u.x = t,
        u.y = i,
        u.OxhiN(),
        u
    }
    return __extends(t, n),
    t.prototype.OxhiN = function() {
        this.UDNdy = new iLfep(this.x,this.y);
        this.wPDjG = new iLfep(this.x + this.width,this.y);
        this.IdSSr = new iLfep(this.x,this.y + this.height);
        this.EbzIk = new iLfep(this.x + this.width,this.y + this.height);
        this.CFaPM = new iLfep(this.x + this.wmdto,this.y);
        this.sAXiF = new iLfep(this.x + this.wmdto,this.y + this.height);
        this.center = new iLfep(this.x + this.wmdto,this.y + this.FpLNn)
    }
    ,
    t.prototype.isIn = function(n, t) {
        return t === void 0 && (t = 0),
        n.SDHsM > this.x - t && n.SDHsM < this.x + this.width + t && n.dTfhX > this.y - t && n.dTfhX < this.y + this.height + t
    }
    ,
    t.prototype.vRzMg = function(n, t) {
        t === void 0 && (t = 0);
        n.SDHsM = vRzMg(n.SDHsM, this.x - t, this.x + this.width + t);
        n.dTfhX = vRzMg(n.dTfhX, this.y - t, this.y + this.height + t)
    }
    ,
    t.prototype.resize = function(n) {
        this.width = n.width;
        this.height = n.height;
        this.wmdto = n.wmdto;
        this.FpLNn = n.FpLNn;
        this.OxhiN()
    }
    ,
    t.prototype.QTXBn = function(n) {
        var t = min(this.x, n.SDHsM)
          , i = min(this.y, n.dTfhX)
          , r = max(this.width + (this.x - t), n.SDHsM - t)
          , u = max(this.height + (this.y - i), n.dTfhX - i);
        this.x = t;
        this.y = i;
        this.resize(new Size(r,u))
    }
    ,
    t.prototype.VfcnX = function(n) {
        this.QTXBn(new KsDsI(n.x,n.y));
        this.QTXBn(new KsDsI(n.x + n.width,n.y + n.height))
    }
    ,
    t.prototype.crop = function(n, t) {
        n = vRzMg(n, 0, this.width);
        t = vRzMg(t, 0, this.height);
        this.x += n / 2;
        this.y += t / 2;
        this.resize(new Size(this.width - n,this.height - t))
    }
    ,
    t.prototype.vwfTJ = function(n, t) {
        n = n > 0 ? n : 0;
        t = t > 0 ? t : 0;
        this.x -= n / 2;
        this.y -= t / 2;
        this.resize(new Size(this.width + n,this.height + t))
    }
    ,
    t
}(Size);
DNprm = function() {
    function n() {
        this.yAjCz = new iLfep;
        this.pfnbt = new KsDsI;
        this.faFif = new iLfep;
        this.VmddP = new Vector;
        this.MgmLe = new Vector;
        this.WZXDL = 0;
        this.wQOUK = 1;
        this.XbxZX = 1;
        this.qdKyK = null
    }
    return n.prototype.QacVs = function() {}
    ,
    n.prototype.cVDad = function() {
        var n;
        this.faFif.SDHsM = this.yAjCz.SDHsM + this.VmddP.SDHsM * (n = KRdPs.tNLaS - game.kirRk);
        this.faFif.dTfhX = this.yAjCz.dTfhX + this.VmddP.dTfhX * n;
        this.faFif.hzrxR = this.yAjCz.hzrxR + this.VmddP.hzrxR * n;
        view.EYvRf(this.faFif);
        this.pfnbt.SDHsM = CpJgo;
        this.pfnbt.dTfhX = hTbgM;
        this.wQOUK += this.XbxZX > this.wQOUK ? .1 : -.1;
        this.qdKyK != null && this.qdKyK.forEach(function(n) {
            n.cVDad()
        })
    }
    ,
    n.prototype.uJUbD = function() {
        this.yAjCz.add(this.VmddP);
        --this.WZXDL > -1 && this.VmddP.add(this.MgmLe)
    }
    ,
    n.prototype.ovWCR = function(n) {
        return Math.sqrt(Math.pow(this.yAjCz.SDHsM - n.yAjCz.SDHsM, 2) + Math.pow(this.yAjCz.dTfhX - n.yAjCz.dTfhX, 2) + Math.pow(this.yAjCz.hzrxR - n.yAjCz.hzrxR, 2))
    }
    ,
    n.prototype.wapWW = function(n) {
        return Math.pow(this.yAjCz.SDHsM - n.yAjCz.SDHsM, 2) + Math.pow(this.yAjCz.dTfhX - n.yAjCz.dTfhX, 2)
    }
    ,
    n.prototype.distXY = function(n) {
        return Math.sqrt(Math.pow(this.yAjCz.SDHsM - n.yAjCz.SDHsM, 2) + Math.pow(this.yAjCz.dTfhX - n.yAjCz.dTfhX, 2))
    }
    ,
    n.prototype.wgicf = function() {
        return this.VmddP.value()
    }
    ,
    n.prototype.angTo = function(n) {
        return this.yAjCz.angTo(n.yAjCz)
    }
    ,
    n.prototype.UQqJm = function(n) {
        return new iLfep(this.yAjCz.SDHsM + this.VmddP.SDHsM * n,this.yAjCz.dTfhX + this.VmddP.dTfhX * n,this.yAjCz.hzrxR + this.VmddP.hzrxR * n)
    }
    ,
    n.prototype.JnnlF = function() {
        this.qdKyK != null && this.qdKyK.forEach(function(n) {
            PvRyJ.addChild(n.shape)
        })
    }
    ,
    n.prototype.BOKEB = function() {
        this.qdKyK.forEach(function(n) {
            PvRyJ.removeChild(n.shape)
        });
        this.qdKyK = null
    }
    ,
    n.prototype.AwDPO = function() {
        this.XbxZX = pitch.bSQwc(this.yAjCz);
        this.qdKyK.forEach(function(n) {
            n.update()
        })
    }
    ,
    n
}();
"use strict";
var clientVersion = 1, stage, pitch, t1, t2, b, replay, stream, chat, PYgUk, EbylO, CqUAp, VAR, EjGIl, migOb, nXmAQ, hOecr = new vPNep, speaker, DPZaw = new NDmPP, ATtwR = new Xipla, view, EZZXG, wHUbV, p2p, DMryL = null, isfullscreen = !1, cross, referee, ar1, ar2, MlOlR, KRdPs, sounds, game, anthems, parameters = new GameParameters, WUUhY, vxOsL, PvRyJ, yxdsY, yZMSU, XOpAD, mFMVI = "10pt Tahoma", RDQFb = 4, uGAgS, vMiiJ, XZKec, groundShade, vpuSQ, connectionType = "";
window.setParameters = function(n) {
    parameters = JSON.parse(n);
    QwTxA(parameters)
}
;
window.initFM = function() {
    window.addEventListener("resize", MvbNT, !0);
    window.addEventListener("popstate", function() {
        game && (game.VZEWj = !0);
        sounds && sounds.XiLIj()
    }, !1);
    navigator.connection != undefined && (connectionType = navigator.connection.type);
    stage = new createjs.Stage("fmCanvas");
    stage.visible = !1;
    MvbNT();
    groundShade = new createjs.Bitmap("/images/groundShades/1.png");
    vpuSQ = new createjs.Bitmap("/images/goalMouth/1.png");
    vMiiJ = [];
    for (var n = 0; n < 200; n++)
        vMiiJ[n] = Math.pow(.999, n);
    XZKec = createjs.Touch.isSupported() && parameters.touchMode > 0 || parameters.forceMobile;
    WUUhY = new createjs.Container;
    PvRyJ = new createjs.Container;
    yxdsY = new createjs.Container;
    yZMSU = new createjs.Container;
    XOpAD = new createjs.Container;
    TkkRI(!1);
    gvUjh();
    stage.addChild(WUUhY);
    stage.addChild(PvRyJ);
    stage.addChild(yxdsY);
    stage.addChild(yZMSU);
    stage.addChild(XOpAD);
    uGAgS = new nthMn;
    game = parameters.sport == 2 ? new Match5 : new NQEqi;
    game.QacVs()
}
;
window.initBtn = function() {
    var n, t;
    QwTxA("is supported:" + createjs.Touch.isSupported());
    QwTxA("touch mode:" + (parameters.touchMode > 0));
    createjs.Touch.isSupported() && parameters.touchMode > 0 ? (n = document.getElementById("divTouch"),
    n.style.display = "inline-block",
    document.getElementById("divStart").onclick = iqHUQ) : (t = document.getElementById("divKeyboard"),
    t.style.display = "inline-block",
    document.onkeydown = iqHUQ)
}
;
KTgav = function() {
    function n() {
        this.n = 1;
        this.ftg = 0
    }
    return n.prototype.start = function() {
        var n = this;
        t1.PDHZv();
        t2.PDHZv();
        t1.rWTHu();
        t2.rWTHu();
        t1.qWnRz();
        t2.qWnRz();
        game.vFSMK(-1);
        t1.country != 0 ? (this.snd1 = new Audio("/sounds/anthems/" + t1.countryCode + ".mp3"),
        this.snd1.onended = this.snd1.onerror = function() {
            n.start2()
        }
        ,
        this.snd1.volume = .5,
        this.snd1.play(),
        view.SRSSU.QYYHD("♫ " + t1.name)) : this.start2()
    }
    ,
    n.prototype.uJUbD = function() {}
    ,
    n.prototype.cVDad = function() {
        game.RJuhr && (this.ftg += 1,
        DMryL.skip() && this.n == 1 && (this.snd1.pause(),
        this.start2()),
        DMryL.skip() && this.n == 2 && this.ftg > 50 && (this.snd2.pause(),
        this.finish()))
    }
    ,
    n.prototype.ZarRK = function() {}
    ,
    n.prototype.start2 = function() {
        this.ftg = 0;
        this.n = 2;
        t2.country != 0 ? (this.snd2 = new Audio("/sounds/anthems/" + t2.countryCode + ".mp3"),
        this.snd2.onended = this.snd2.onerror = function() {
            anthems.finish()
        }
        ,
        this.snd2.volume = .5,
        this.snd2.play(),
        view.SRSSU.QYYHD("♫ " + t2.name)) : this.finish()
    }
    ,
    n.prototype.finish = function() {
        this.n = 3;
        this.ZarRK(null)
    }
    ,
    n
}();
oqJtT = function() {
    function n() {
        this.lqByF = 0;
        this.RwJLX = 0;
        createjs.Sound.alternateExtensions = ["mp3"];
        createjs.Sound.addEventListener("fileload", this.yNYaO);
        createjs.Sound.registerSounds([{
            src: "kickwav.mp3",
            id: 1
        }, {
            src: "applause.mp3",
            id: 2
        }, {
            src: "fischi.mp3",
            id: 3
        }, {
            src: "fischio.mp3",
            id: 4
        }, {
            src: "foulwav.mp3",
            id: 5
        }, {
            src: "goalwav.mp3",
            id: 6
        }, {
            src: "goal_small.mp3",
            id: 7
        }, {
            src: "finale.mp3",
            id: 8
        }, {
            src: "oh.mp3",
            id: 9
        }, {
            src: "yeahwav.mp3",
            id: 10
        }, {
            src: "applauselong.mp3",
            id: 13
        }, {
            src: "final1.mp3",
            id: 14
        }], "sounds/stadium/");
        this.bgTRA = !1;
        this.zNZQB = 0;
        this.XymeJ = !1;
        this.PBtVt = 0;
        this.lqByF = 0;
        this.GnwdB = 0;
        this.PBtVt = parameters.soundVolume / 4;
        parameters.choirsCount != null && (this.choirsCount = parameters.choirsCount);
        this.sPwPY = this.PBtVt > 0 && !game.vjtYB;
        this.choirsFrequency = parameters.choirsFrequency;
        this.oeOly = (5 - this.choirsFrequency) * 1e3 * Math.random();
        this.XymeJ = !1
    }
    return n.prototype.yNYaO = function() {
        sounds.RwJLX += 1;
        QwTxA("loadedsound" + sounds.RwJLX)
    }
    ,
    n.prototype.uJUbD = function() {}
    ,
    n.prototype.cVDad = function() {
        if (game.efjMJ && this.oeOly-- < 0 && !this.XymeJ) {
            var n = 1 + ~~(Math.random() * this.choirsCount);
            this.MzBPZ(n)
        }
        this.XymeJ && (this.AEqPY.currentTime < this.AEqPY.duration - 4 ? this.zNZQB < pitch.stadiumSize * .8 && (this.zNZQB += .001) : this.zNZQB > .002 && (this.zNZQB -= .002),
        this.AEqPY.volume = this.zNZQB * this.PBtVt);
        this.tNiVJ -= 1;
        this.tNiVJ == 0 && this.sound(this.LrSef, this.dgPpW);
        this.QjRkz == null || isNaN(this.lqByF) ? this.sPwPY && !this.bgTRA && this.GoZWY() : (this.GnwdB = vRzMg(this.GnwdB + (this.lqByF - this.GnwdB) * .02, 0, 1),
        this.QjRkz.volume = this.GnwdB * this.PBtVt * (game.RJuhr ? .2 : 1))
    }
    ,
    n.prototype.GoZWY = function() {
        this.GnwdB = 0;
        this.lqByF = 0;
        var n = "sounds/stadium/background.mp3";
        pitch.CFeds == 0 && (n = "sounds/stadium/backgroundsmall.mp3");
        this.QjRkz = new Audio(n);
        this.QjRkz.volume = 0;
        this.QjRkz.loop = !0;
        this.QjRkz.play();
        this.bgTRA = !0
    }
    ,
    n.prototype.XiLIj = function() {
        this.gAcKe();
        this.QjRkz.pause()
    }
    ,
    n.prototype.gAcKe = function() {
        nXmAQ.HflRS(new Events.YYvyi(game.kirRk,11,null,0));
        this.XymeJ && (this.oeOly = (5 - this.choirsFrequency) * 2e3 * (.3 + Math.random() * .7),
        this.AEqPY.pause(),
        this.XymeJ = !1)
    }
    ,
    n.prototype.MzBPZ = function(n) {
        var t = this;
        if (QwTxA("starting choir " + n),
        nXmAQ.HflRS(new Events.YYvyi(game.kirRk,10,n,1)),
        !game.vjtYB && this.choirsFrequency != 0 && !game.MYBqI && !this.XymeJ)
            try {
                this.AEqPY = new Audio("sounds/choirs/approved/c" + n.toString() + ".mp3");
                this.AEqPY.volume = 0;
                this.zNZQB = 0;
                this.AEqPY.play();
                this.AEqPY.onended = function() {
                    t.oeOly = (5 - t.choirsFrequency) * 2e3 * (.3 + Math.random() * .7);
                    t.XymeJ = !1
                }
                ;
                this.XymeJ = !0
            } catch (i) {
                QwTxA("choir error: " + i.message)
            }
    }
    ,
    n.prototype.QgwXJ = function(n) {
        n.fwoJl == 10 ? this.MzBPZ(n.CRlkh) : n.fwoJl == 11 ? this.gAcKe() : this.sound(n.fwoJl, n.volume)
    }
    ,
    n.prototype.sound = function(n, t) {
        nXmAQ.HflRS(new Events.YYvyi(game.kirRk,n,null,t));
        switch (n) {
        case 0:
            pitch.CFeds > 0 ? t1.sgGIv() ? this.KrVkW(10, t * pitch.stadiumSize) : this.KrVkW(6, t * pitch.stadiumSize) : this.KrVkW(7, t * pitch.stadiumSize);
            break;
        case 1:
            game.MYBqI || this.KrVkW(9, t * pitch.stadiumSize);
            break;
        case 3:
            game.MYBqI || this.KrVkW(2, t * pitch.stadiumSize);
            break;
        case 4:
            game.MYBqI || this.KrVkW(13, t * pitch.stadiumSize);
            break;
        case 8:
            game.MYBqI || this.KrVkW(5, t * pitch.stadiumSize);
            break;
        case 2:
            this.KrVkW(1, t);
            break;
        case 6:
            this.KrVkW(4, t);
            break;
        case 7:
            this.KrVkW(8, t);
            break;
        case 9:
            this.KrVkW(13, t);
            break;
        case 5:
            game.MYBqI || this.KrVkW(3, t * pitch.stadiumSize)
        }
    }
    ,
    n.prototype.cDphz = function(n, t, i) {
        this.tNiVJ = ~~(i + 1);
        this.LrSef = n;
        this.dgPpW = t
    }
    ,
    n.prototype.KrVkW = function(n, t) {
        if (this.sPwPY) {
            t = t * this.PBtVt;
            var i;
            i = createjs.Sound.createInstance(n);
            i.play({
                volume: t
            })
        }
    }
    ,
    n.prototype.sejcoC = function(n, t) {
        if (this.sPwPY)
            try {
                var i = new Audio(n);
                i.volume = t * this.PBtVt;
                i.play()
            } catch (r) {}
    }
    ,
    n
}();
JpAaA = function() {
    function n() {
        this.buffer = "";
        this.Nheqf = !1;
        this.pathos = 0;
        this.NXKMY = 0;
        this.language = parameters.speakerLanguageId;
        this.XfRzc = this.language != null && parameters.soundVolume > 0;
        this.voices = undefined;
        this.voice = undefined;
        this.msg = new SpeechSynthesisUtterance;
        this.msg.onend = function(n) {
            speaker.ZbgBj = n.utterance.text;
            speaker.WEzeb()
        }
    }
    return n.prototype.IrZWo = function(n) {
        n && n.trim() != "" && (this.buffer = this.buffer == "" || !0 ? n : this.buffer + "," + n,
        (!this.Nheqf || game.minute > this.NXKMY + 1) && this.zNEuA())
    }
    ,
    n.prototype.zNEuA = function() {
        var t, n;
        this.buffer != "" && (this.pathos = t1.pHOXU ? (this.pathos + vRzMg(b.yAjCz.SDHsM * .002 * t1.dir - Math.abs(b.yAjCz.dTfhX) * .001 + Math.random() * .2 - .1, 0, 1)) * .5 : (this.pathos + vRzMg(b.yAjCz.SDHsM * .002 * t2.dir - Math.abs(b.yAjCz.dTfhX) * .001 + Math.random() * .2 - .1, 0, 1)) * .5,
        game.XfRzc || this.GkqOy == 26 || this.GkqOy == 27 || (this.pathos = this.pathos * .7),
        (this.GkqOy == 26 || this.GkqOy == 10 || this.GkqOy == 27 || this.GkqOy == 21) && (this.pathos = (1 + this.pathos) * .5),
        t = "",
        t = this.buffer.indexOf(",") > -1 ? this.buffer.substr(0, this.buffer.indexOf(",")) : this.buffer,
        n = this.buffer.indexOf(","),
        this.buffer = n > -1 ? this.buffer.substr(n + 1, this.buffer.length - n - 1) : "",
        this.Nheqf = !0,
        this.NXKMY = game.minute,
        this.PSWAg(t))
    }
    ,
    n.prototype.PSWAg = function(n) {
        if (n = n.trim(),
        n = n.replace(",", ""),
        n != this.ZbgBj) {
            if ((this.voices == undefined || this.voices.length == 0) && (this.voices = window.speechSynthesis.getVoices()),
            this.voice == undefined && this.voices.length > 0) {
                for (var t = 0; t < this.voices.length; t++)
                    this.voices[t].lang.substring(0, 2) == parameters.speakerLanguageCode && (this.voice == undefined && (this.voice = this.voices[t]),
                    (this.voices[t].voiceURI == "Google UK English Male" || this.voices[t].name == "Bruce" || this.voices[t].name == "Diego" || this.voices[t].lang == "en_GB") && (this.voice = this.voices[t]));
                this.voice == undefined && (this.voice = this.voices[0]);
                QwTxA(this.voice)
            }
            this.voice != undefined ? (this.msg.voice = this.voice,
            this.msg.voiceURI = this.voice.voiceURI,
            this.msg.volume = parameters.soundVolume / 4,
            this.msg.rate = .95 + Math.random() * .1 + ~~(this.pathos * 10) * .01,
            this.msg.pitch = .8 + Math.random() * .1 + ~~(this.pathos * 10) * .07,
            this.msg.text = n,
            this.msg.lang = this.voice.lang,
            speechSynthesis.speak(this.msg)) : this.WEzeb()
        }
    }
    ,
    n.prototype.WEzeb = function() {
        this.Nheqf = !1;
        this.zNEuA()
    }
    ,
    n.prototype.comment = function(n, t) {
        var r = this, i;
        if (this.XfRzc && (n != 1 || this.GkqOy != 1)) {
            if (t && t.lastName != "FsOgA" && Math.random() > .7) {
                this.IrZWo(t.lastName);
                return
            }
            this.GkqOy != null && (i = new XMLHttpRequest,
            i.open("GET", "/api/speaker/get/" + this.language + "/" + this.GkqOy + "/" + n + "/" + this.lCTTx.tsAyM() + "/" + this.lCTTx.t.id + "/" + t.tsAyM() + "/" + t.t.id + "/" + this.qyTWt.tsAyM() + "/" + this.qyTWt.t.id + "/" + t.opn.tsAyM() + "/" + t.t.opn.id + "/" + this.lCTTx.zone().toString() + "/" + t.zone().toString(), !0),
            i.onload = function() {
                var n = i.responseText;
                n && r.IrZWo(n)
            }
            ,
            i.send(null));
            this.GkqOy = n;
            this.lCTTx = t;
            this.qyTWt = t.opn
        }
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
GiYSB = function(n) {
    function t(t, i, r, u, f) {
        var e = this, o;
        return u === void 0 && (u = 50),
        f === void 0 && (f = 10),
        o = [new iLfep(t.SDHsM - Math.cos(i) * u,t.dTfhX - Math.sin(i),0), new iLfep(t.SDHsM + Math.cos(i) * u,t.dTfhX + Math.sin(i),0), new iLfep(t.SDHsM + Math.cos(i) * u,t.dTfhX + Math.sin(i),f), new iLfep(t.SDHsM - Math.cos(i) * u,t.dTfhX - Math.sin(i),f), ],
        e = n.call(this, o) || this,
        e.color = r,
        e
    }
    return __extends(t, n),
    t
}(RuKqE);
DmkKD = function() {
    function n(n) {
        this.yAjCz = n.clone()
    }
    return n.prototype.dWoPA = function() {
        var n;
        switch (t1.stadium() % 3) {
        case 0:
            n = "yellow";
            break;
        case 1:
            n = "orange";
            break;
        case 2:
            n = "white"
        }
        this.shape = new createjs.Shape;
        this.shape.graphics.setStrokeStyle(2);
        this.shape.graphics.beginStroke(n);
        this.shape.graphics.moveTo(0, 0);
        this.shape.graphics.lineTo(0, -25);
        this.shape.graphics.endStroke();
        this.shape.graphics.beginFill("red").moveTo(1, -25);
        this.shape.graphics.lineTo(4, -20);
        this.shape.graphics.lineTo(4, -15);
        this.shape.graphics.lineTo(1, -20);
        this.shape.graphics.endFill();
        view.apply(this.shape, this.yAjCz)
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Goal = function(n) {
    function t(t, i, r) {
        var u = n.call(this) || this, f, e;
        return u.width = t.width,
        u.height = t.height,
        u.wmdto = t.width / 2,
        u.dir = i,
        u.yAjCz.SDHsM = r,
        u.postL = new iLfep(r,-u.wmdto * i),
        u.postR = new iLfep(r,u.wmdto * i),
        u.Poqsn = new bTvce(r - 1,-u.wmdto,new Size(2,u.width)),
        u.TZYxo = new createjs.Container,
        u.shape = new createjs.Shape,
        u.UdvUW = new createjs.Shape,
        u.wNToc = new createjs.Shape,
        u.TZYxo.addChild(u.wNToc),
        u.TZYxo.addChild(u.shape),
        u.TZYxo.addChild(u.UdvUW),
        u.Iscyd = new NGGSw([new Line(new iLfep(0,-u.wmdto,0),new iLfep(0,-u.wmdto,u.height)), new Line(new iLfep(0,-u.wmdto,u.height),new iLfep(0,u.wmdto,u.height)), new Line(new iLfep(0,u.wmdto,u.height),new iLfep(0,u.wmdto,0)), new Line(new iLfep(0,-u.wmdto,u.height),new iLfep(-i * 30,-u.wmdto,u.height)), new Line(new iLfep(-i * 30,-u.wmdto,u.height),new iLfep(-i * 30,u.wmdto,u.height)), new Line(new iLfep(-i * 30,u.wmdto,u.height),new iLfep(0,u.wmdto,u.height)), new Line(new iLfep(-i * 30,-u.wmdto,u.height),new iLfep(-i * 50,-u.wmdto,0)), new Line(new iLfep(-i * 30,u.wmdto,u.height),new iLfep(-i * 50,u.wmdto,0)), ]),
        u.Iscyd.YulwW(u.yAjCz),
        u.webs = [new RuKqE([new iLfep(0,-u.wmdto,u.height), new iLfep(-i * 30,-u.wmdto,u.height), new iLfep(-i * 30,u.wmdto,u.height), new iLfep(0,u.wmdto,u.height), ]), new RuKqE([new iLfep(0,-u.wmdto,0), new iLfep(0,-u.wmdto,u.height), new iLfep(-i * 30,-u.wmdto,u.height), new iLfep(-i * 50,-u.wmdto,0), ]), new RuKqE([new iLfep(0,u.wmdto,0), new iLfep(0,u.wmdto,u.height), new iLfep(-i * 30,u.wmdto,u.height), new iLfep(-i * 50,u.wmdto,0), ]), new RuKqE([new iLfep(-i * 50,-u.wmdto,0), new iLfep(-i * 30,-u.wmdto,u.height), new iLfep(-i * 30,u.wmdto,u.height), new iLfep(-i * 50,u.wmdto,0), ]), ],
        u.webs.forEach(function(n) {
            return n.YulwW(u.yAjCz)
        }),
        u.shape.graphics.setStrokeStyle(3),
        u.shape.graphics.beginStroke("white"),
        u.Iscyd.render(u.shape),
        u.shape.graphics.endStroke(),
        u.webs.forEach(function(n) {
            u.shape.graphics.beginFill("rgba(255, 255, 255, 0.3)");
            n.render(u.shape);
            u.shape.graphics.endFill()
        }),
        f = u.Iscyd.sOPEM(),
        pitch.bSQwc(u.yAjCz) > 0 && (u.wNToc.graphics.setStrokeStyle(2),
        pitch.UBuyH.forEach(function(n) {
            u.wNToc.graphics.beginStroke("rgba(0, 0, 0, " + n.power * .1 + ")");
            u.Iscyd.DjlBG(u.wNToc, n);
            u.wNToc.graphics.endStroke()
        }),
        pitch.UBuyH.forEach(function(n) {
            u.webs.forEach(function(t) {
                u.wNToc.graphics.beginFill("rgba(0, 0, 0, " + n.power * .1 + ")");
                t.DjlBG(u.wNToc, n);
                u.wNToc.graphics.endFill()
            })
        }),
        e = u.Iscyd.oXEJx(pitch.UBuyH),
        f.VfcnX(e)),
        u.shape.cache(f.x, f.y, f.width, f.height),
        u
    }
    return __extends(t, n),
    t.prototype.WiMOO = function(n) {
        var t = this.postL.wapWW(n)
          , i = this.postR.wapWW(n);
        return t < i ? this.postL : this.postR
    }
    ,
    t.prototype.VlTzm = function(n) {
        var t = this.postL.wapWW(n)
          , i = this.postR.wapWW(n);
        return t > i ? this.postL : this.postR
    }
    ,
    t.prototype.rGmSf = function() {
        this.UdvUW.graphics.clear()
    }
    ,
    t.prototype.VzOFL = function() {
        var t = this, n;
        this.rGmSf();
        b.yAjCz.SDHsM * this.dir < this.yAjCz.SDHsM * this.dir - 50 && (n = [new RuKqE([new iLfep(this.yAjCz.SDHsM - this.dir * 50,this.yAjCz.dTfhX - this.wmdto,0), new iLfep(this.yAjCz.SDHsM - this.dir * 50,this.yAjCz.dTfhX + this.wmdto,0), b.yAjCz.clone()]), new RuKqE([new iLfep(this.yAjCz.SDHsM - this.dir * 30,this.yAjCz.dTfhX - this.wmdto,this.height), new iLfep(this.yAjCz.SDHsM - this.dir * 30,this.yAjCz.dTfhX + this.wmdto,this.height), b.yAjCz.clone()]), new RuKqE([new iLfep(this.yAjCz.SDHsM - this.dir * 30,this.yAjCz.dTfhX - this.wmdto,this.height), new iLfep(this.yAjCz.SDHsM - this.dir * 50,this.yAjCz.dTfhX - this.wmdto,0), b.yAjCz.clone()]), new RuKqE([new iLfep(this.yAjCz.SDHsM - this.dir * 30,this.yAjCz.dTfhX + this.wmdto,this.height), new iLfep(this.yAjCz.SDHsM - this.dir * 50,this.yAjCz.dTfhX + this.wmdto,0), b.yAjCz.clone()]), ],
        this.UdvUW.graphics.beginFill("rgba(255, 255, 255, 0.15)"),
        n.forEach(function(n) {
            return n.render(t.UdvUW)
        }),
        this.UdvUW.graphics.endFill())
    }
    ,
    t
}(DNprm);
AKJhG = function() {
    function n(n, t) {
        this.yAjCz = n;
        this.id = t
    }
    return n.prototype.dWoPA = function() {
        for (var n, u = ~~(6 - pitch.stadiumSize * 6), r = 4 - pitch.stadiumSize * 3.5, i = t1.stadium() * this.id, t = 1; t < u; t++)
            n = vpuSQ.clone(!0),
            n.scaleX = r * (.8 + t * i * 4 % 10 * .04),
            n.scaleY = r * (.8 + t * i * 5 % 10 * .04),
            n.regX = 10,
            n.regY = 10,
            n.rotation = t * i % 360,
            view.apply(n, this.yAjCz),
            WUUhY.addChild(n)
    }
    ,
    n
}();
AABOp = function() {
    function n(n) {
        var t, i;
        this.shape = new createjs.Shape;
        switch (n) {
        case 1:
            for (t = -10; t < 10; t++)
                i = new RuKqE([new iLfep(t * 200,-1e3), new iLfep(t * 200 + 100,-1e3), new iLfep(t * 200 + 100,1e3), new iLfep(t * 200,1e3)]),
                this.shape.graphics.beginFill("rgba(0,0,0,0.5)"),
                i.render(this.shape),
                this.shape.graphics.endFill();
            break;
        case 2:
            for (t = -5; t < 5; t++)
                i = new RuKqE([new iLfep(-2e3,t * 200), new iLfep(2e3,t * 200), new iLfep(2e3,t * 200 + 100), new iLfep(-2e3,t * 200 + 100)]),
                this.shape.graphics.beginFill("rgba(0,0,0,0.5)"),
                i.render(this.shape),
                this.shape.graphics.endFill();
            break;
        case 3:
            for (t = -10; t < 10; t++)
                i = new RuKqE([new iLfep(t * 200,-1e3), new iLfep(t * 200 + 100,-1e3), new iLfep(t * 200 + 100,1e3), new iLfep(t * 200,1e3)]),
                this.shape.graphics.beginFill("rgba(0,0,0,0.5)"),
                i.render(this.shape),
                this.shape.graphics.endFill();
            for (t = -5; t < 5; t++)
                i = new RuKqE([new iLfep(-2e3,t * 200), new iLfep(2e3,t * 200), new iLfep(2e3,t * 200 + 100), new iLfep(-2e3,t * 200 + 100)]),
                this.shape.graphics.beginFill("rgba(0,0,0,0.5)"),
                i.render(this.shape),
                this.shape.graphics.endFill();
            break;
        case 4:
            for (t = -10; t < 10; t++)
                i = new RuKqE([new iLfep(t * 200,-1e3), new iLfep(t * 200 + 100,-1e3), new iLfep(t * 200 + 100,1e3), new iLfep(t * 200,1e3)]),
                i.YfWoP(Math.PI / 4),
                this.shape.graphics.beginFill("rgba(0,0,0,0.5)"),
                i.render(this.shape),
                this.shape.graphics.endFill();
            for (t = -5; t < 5; t++)
                i = new RuKqE([new iLfep(-2e3,t * 200), new iLfep(2e3,t * 200), new iLfep(2e3,t * 200 + 100), new iLfep(-2e3,t * 200 + 100)]),
                i.YfWoP(Math.PI / 4),
                this.shape.graphics.beginFill("rgba(0,0,0,0.5)"),
                i.render(this.shape),
                this.shape.graphics.endFill();
            break;
        case 5:
            for (this.shape.graphics.setStrokeStyle(50),
            t = -10; t < 10; t++)
                this.shape.graphics.beginStroke("rgba(0,0,0,0.5)").drawEllipse(-t * 100, -t * 100, t * 200, t * 200);
            this.shape.graphics.endStroke();
            this.shape.scaleX = view.lxAiB >= 2 ? 1.45 : 1.15;
            this.shape.scaleY = view.lxAiB >= 2 ? .9 : 1.05
        }
        this.shape.alpha = .05 + .05 * (t1.stadium() * 13 % 4)
    }
    return n
}();
QqqsK = function() {
    function n() {}
    return n.prototype.dWoPA = function() {
        var n, t, i;
        for (this.shape = new createjs.Shape,
        n = 0; n < 200; n += 8)
            for (t = 0; t < 200; t += 8)
                i = 50 + ~~(Math.random() * 150),
                Math.random() > .1 && this.shape.graphics.beginFill("rgba(" + i + "," + i + "," + i + ",0.3)").drawRect(n + Math.random() * 4, t + Math.random() * 4, 8, 8);
        this.shape.alpha = .2;
        this.shape.cache(0, 0, 200, 200)
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
tGFoh = function(n) {
    function t(t, i, r, u) {
        var f = n.call(this, t, i, r) || this, e, o;
        f.dir = u;
        f.oROkp = new iLfep(0,0,0);
        f.dir === 1 ? (f.zFztP = t,
        f.dHMwY = t + r.width,
        f.oROkp.SDHsM = f.zFztP + game.rules.jnvLG) : (f.zFztP = t + r.width,
        f.dHMwY = t,
        f.oROkp.SDHsM = f.zFztP - game.rules.jnvLG);
        f.lines = new NGGSw([new Line(new iLfep(f.zFztP,f.y),new iLfep(f.dHMwY,f.y)), new Line(new iLfep(f.dHMwY,f.y),new iLfep(f.dHMwY,f.y + f.height)), new Line(new iLfep(f.dHMwY,f.y + f.height),new iLfep(f.zFztP,f.y + f.height)), new Line(new iLfep(f.zFztP,f.center.dTfhX - f.height * .22),new iLfep(f.zFztP + f.width * f.dir / 3,f.center.dTfhX - f.height * .22)), new Line(new iLfep(f.zFztP + f.width * f.dir / 3,f.center.dTfhX - f.height * .22),new iLfep(f.zFztP + f.width * f.dir / 3,f.center.dTfhX + f.height * .22)), new Line(new iLfep(f.zFztP + f.width * f.dir / 3,f.center.dTfhX + f.height * .22),new iLfep(f.zFztP,f.center.dTfhX + f.height * .22))]);
        var h = 0
          , c = []
          , s = null;
        for (e = -Math.PI / 2; e < Math.PI / 2; e += .01)
            o = new iLfep(f.oROkp.SDHsM + Math.cos(e) * game.rules.cayfO * f.dir,f.oROkp.dTfhX + Math.sin(e) * game.rules.cayfO),
            o.SDHsM * f.dir > f.dHMwY * f.dir && s != null && (c[h] = new Line(s,o),
            h++),
            s = o;
        return f.NdKOJ = new NGGSw(c),
        f
    }
    return __extends(t, n),
    t.prototype.GlXGq = function(n) {
        this.lines.render(n);
        this.NdKOJ.render(n);
        var t = view.wuNti(this.oROkp);
        n.graphics.drawEllipse(t.SDHsM - 1, t.dTfhX - 1, 2, 2)
    }
    ,
    t
}(bTvce);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Pitch = function(n) {
    function t(t, i) {
        var r = n.call(this, -i.wmdto, -i.FpLNn, i) || this;
        r.kFPXJ = new bTvce(r.x,r.y,new Size(r.wmdto,r.height));
        r.oxtiM = new bTvce(r.x + r.wmdto,r.y,new Size(r.wmdto,r.height));
        r.stadiumSize = vRzMg(Math.sqrt(t) / 300, 0, 1);
        r.CFeds = ~~(r.stadiumSize * 5);
        r.BNjgi = !0;
        r.lines = new NGGSw([new Line(r.UDNdy,r.wPDjG), new Line(r.wPDjG,r.EbzIk), new Line(r.EbzIk,r.IdSSr), new Line(r.IdSSr,r.UDNdy), new Line(r.IdSSr,r.UDNdy), new Line(r.CFaPM,r.sAXiF), ]);
        r.OHFwV = new RuKqE(null);
        r.OHFwV.xQWNO(game.rules.cayfO, game.rules.cayfO);
        r.UBuyH = [];
        game.RbCCR() ? (r.UBuyH[0] = new DIUlF(1200,-900,800,.4),
        r.UBuyH[1] = new DIUlF(1200,900,800,.4),
        r.UBuyH[2] = new DIUlF(-1200,-900,800,.4),
        r.UBuyH[3] = new DIUlF(-1200,900,800,.4)) : r.UBuyH[0] = PYgUk.sun;
        r.CFeds == 0 && (r.YvHKG = 40);
        r.IZCDO = new oobXj;
        r.IZCDO.shape.x = 0;
        r.IZCDO.shape.y = 0;
        r.IZCDO.shape.visible = !1;
        PvRyJ.addChild(r.IZCDO.shape);
        var u = ~~(60 + t1.stadium() % 11 * 7)
          , f = ~~(150 + t1.stadium() % 13 * 2)
          , e = ~~(45 + t1.stadium() % 7 * 6);
        return r.mfdoU = "rgb(" + u + "," + f + "," + e + ")",
        r
    }
    return __extends(t, n),
    t.prototype.QacVs = function() {
        this.YMefK = t1.stadium() % 2 == 1 ? -1 : 1;
        this.aSgGk(WUUhY);
        this.aSgGk(yZMSU);
        this.aSgGk(XOpAD);
        this.nNPOL();
        this.GlXGq();
        this.evGdM();
        this.goal1 = new Goal(game.rules.rpqWH,1,-this.wmdto);
        this.goal2 = new Goal(game.rules.rpqWH,-1,this.wmdto);
        yZMSU.addChild(this.goal1.TZYxo);
        yZMSU.addChild(this.goal2.TZYxo)
    }
    ,
    t.prototype.sFYxI = function() {
        if (!game.GopxG && !b.isOut) {
            if (Math.abs(b.yAjCz.dTfhX) > this.FpLNn + b.radius && sgn(b.yAjCz.dTfhX) == sgn(b.VmddP.dTfhX)) {
                game.XfRzc && game.stop(7, !1);
                return
            }
            if (Math.abs(b.yAjCz.SDHsM) > this.wmdto && sgn(b.yAjCz.SDHsM) == sgn(b.VmddP.SDHsM)) {
                if ((Math.abs(b.yAjCz.dTfhX - game.rules.rpqWH.wmdto) < 1.5 || Math.abs(b.yAjCz.dTfhX + game.rules.rpqWH.wmdto) < 1.5) && this.rUSDM(),
                Math.abs(b.yAjCz.hzrxR - game.rules.rpqWH.height) < 1.5 && this.eAXyW(),
                sgn(b.VmddP.SDHsM) != sgn(b.yAjCz.SDHsM)) {
                    game.XfRzc && b.bfGuu().statistics.posts++;
                    game.Ozvkf();
                    VAR.reset();
                    return
                }
                b.isOut = !0;
                b.HxCnF = b.yAjCz.hzrxR < game.rules.rpqWH.height && Math.abs(b.yAjCz.dTfhX) < game.rules.rpqWH.wmdto;
                b.HxCnF ? game.paeHS() ? (game.penalties.ktVqr.exult(),
                game.penalties.score()) : game.XfRzc ? game.stop(1, !1) : game.oAPpo() : game.XfRzc && (b.vSdIU.t.dir != sgn(b.yAjCz.SDHsM) ? game.stop(8, !1) : game.stop(6, !1))
            }
        }
    }
    ,
    t.prototype.vXraR = function() {
        if (!b.isOut) {
            this.sFYxI();
            return
        }
        b.HxCnF ? this.seeid() : this.zTMJK()
    }
    ,
    t.prototype.seeid = function() {
        b.yAjCz.hzrxR > 46 && (b.yAjCz.hzrxR = 46,
        b.VmddP.hzrxR = 0);
        Math.abs(b.yAjCz.SDHsM) > this.wmdto + 50 - b.yAjCz.hzrxR * .2 && (b.VmddP.SDHsM -= sgn(b.yAjCz.SDHsM) * .2,
        b.VmddP.SDHsM = b.VmddP.SDHsM * .85,
        b.VmddP.hzrxR -= .1,
        b.VmddP.hzrxR = b.VmddP.hzrxR * .9,
        b.VmddP.dTfhX -= sgn(b.yAjCz.dTfhX) * .05,
        b.VmddP.dTfhX = b.VmddP.dTfhX * .95);
        Math.abs(b.yAjCz.dTfhX) > game.rules.rpqWH.wmdto && (b.VmddP.dTfhX -= sgn(b.yAjCz.dTfhX) * .2,
        b.VmddP.dTfhX = b.VmddP.dTfhX * .7,
        b.VmddP.SDHsM = b.VmddP.SDHsM * .9)
    }
    ,
    t.prototype.zTMJK = function() {
        Math.abs(b.yAjCz.dTfhX) < game.rules.rpqWH.wmdto && b.yAjCz.hzrxR < 35 && Math.abs(b.yAjCz.SDHsM) < 850 - b.yAjCz.hzrxR * .2 && (b.VmddP.dTfhX += sgn(b.yAjCz.dTfhX) * .2,
        b.VmddP.dTfhX = b.VmddP.dTfhX * .8,
        b.VmddP.SDHsM = b.VmddP.SDHsM * .95);
        Math.abs(b.yAjCz.dTfhX) < game.rules.rpqWH.wmdto && Math.abs(b.yAjCz.SDHsM) < game.rules.rpqWH.wmdto + 50 && b.yAjCz.hzrxR < game.rules.rpqWH.height && b.yAjCz.hzrxR > 35 && (b.VmddP.hzrxR = b.VmddP.hzrxR * .85,
        b.VmddP.hzrxR += .2,
        b.yAjCz.hzrxR < 36 && (b.yAjCz.hzrxR = 36))
    }
    ,
    t.prototype.rUSDM = function() {
        var i = b.VmddP.dTfhX, t, n;
        b.yAjCz.hzrxR > game.rules.rpqWH.height || b.LWJMi < 10 || b.OEDJp != null || (t = Math.PI * (1 - Math.random() * 2),
        n = b.VmddP.xJwON() * .7,
        b.VmddP.SDHsM = Math.cos(t) * n,
        b.VmddP.dTfhX = Math.sin(t) * n,
        b.yAjCz.dTfhX = b.yAjCz.dTfhX > 0 ? b.VmddP.dTfhX > i * .7 ? game.rules.rpqWH.wmdto + .1 : game.rules.rpqWH.wmdto - .1 : b.VmddP.dTfhX < i * .7 ? -game.rules.rpqWH.wmdto - .1 : -game.rules.rpqWH.wmdto + .1,
        b.LWJMi = 0,
        sounds.sound(1, n * .1),
        game.Nudsf().tjpHP(),
        b.vSdIU != null && b.vSdIU.UmftV(20),
        replay.save("T", 100, b.vSdIU.PqKIS()))
    }
    ,
    t.prototype.eAXyW = function() {
        var i = b.VmddP.hzrxR, t, n;
        Math.abs(b.yAjCz.dTfhX) > game.rules.rpqWH.wmdto || b.LWJMi < 10 || b.OEDJp != null || (t = Math.PI * (1 - Math.random() * 2),
        n = b.VmddP.xJwON() * .6,
        b.VmddP.SDHsM = Math.cos(t) * n,
        b.VmddP.hzrxR = Math.sin(t) * n,
        b.yAjCz.hzrxR = b.VmddP.hzrxR < i * .6 ? game.rules.rpqWH.height - .1 : game.rules.rpqWH.height + .1,
        b.LWJMi = 0,
        b.twRpe(),
        sounds.sound(1, n * .1),
        game.Nudsf().tjpHP(),
        b.vSdIU != null && b.vSdIU.UmftV(20),
        replay.save("T", 100, b.vSdIU.PqKIS()))
    }
    ,
    t.prototype.aSgGk = function(n) {
        if (n.numChildren != 0)
            for (var t = n.numChildren; t--; )
                n.removeChildAt(t)
    }
    ,
    t.prototype.GlXGq = function() {
        var t = .7 + t1.stadium() % 4 * .1, i = 1 + t1.stadium() * 2 % 10 * .1, n;
        this.shape = new createjs.Shape;
        this.shape.graphics.setStrokeStyle(i);
        this.shape.graphics.beginStroke("rgba(255,255,255," + t.toString() + ")");
        this.lines.render(this.shape);
        this.OHFwV.render(this.shape);
        this.QPztY.GlXGq(this.shape);
        this.tWdPg.GlXGq(this.shape);
        n = view.wuNti(this.center);
        this.shape.graphics.drawEllipse(n.SDHsM - 1, n.dTfhX - 1, 2, 2);
        this.shape.graphics.endStroke();
        WUUhY.addChild(pitch.shape)
    }
    ,
    t.prototype.evGdM = function() {}
    ,
    t.prototype.nNPOL = function() {}
    ,
    t.prototype.aAWXtG = function() {}
    ,
    t.prototype.bSQwc = function(n) {
        if (this.tCOHu == null)
            return 1;
        var t = 1 + (n.dTfhX - this.tCOHu.RioWd * n.SDHsM + this.tCOHu.uETjZ) * (this.tCOHu.mAyPp < 0 ? .02 : -.02);
        return vRzMg(t, 0, 1)
    }
    ,
    t
}(bTvce);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
uJMKP = function(n) {
    function t(t, i) {
        var r = n.call(this, t, i) || this;
        r.QPztY = new tGFoh(r.center.SDHsM - r.wmdto,r.center.dTfhX - game.rules.uVTWK.FpLNn,game.rules.uVTWK,1);
        r.tWdPg = new tGFoh(r.center.SDHsM + r.wmdto - game.rules.uVTWK.width,r.center.dTfhX - game.rules.uVTWK.FpLNn,game.rules.uVTWK,-1);
        var u = ~~(60 + t1.stadium() % 11 * 7)
          , f = ~~(150 + t1.stadium() % 13 * 2)
          , e = ~~(45 + t1.stadium() % 7 * 6);
        return r.mfdoU = "rgb(" + u + "," + f + "," + e + ")",
        r
    }
    return __extends(t, n),
    t.prototype.nNPOL = function() {
        var u = new AABOp(1 + t1.stadium() % 5), r, t, i, n;
        for (WUUhY.addChild(u.shape),
        r = .1 + .01 * (t1.stadium() * 7 % 9),
        t = -1200; t < 1200; t += 200)
            for (i = -800; i < 800; i += 200)
                n = groundShade.clone(!0),
                n.alpha = r,
                n.x = t,
                n.y = i,
                WUUhY.addChild(n)
    }
    ,
    t.prototype.evGdM = function() {
        this.ch1 = new AKJhG(new iLfep(-this.wmdto * .95,0),1);
        this.ch1.dWoPA();
        this.ch2 = new AKJhG(new iLfep(this.wmdto * .95,0),2);
        this.ch2.dWoPA();
        this.cf1 = new DmkKD(new iLfep(-this.wmdto,-this.FpLNn));
        this.cf1.dWoPA();
        WUUhY.addChild(this.cf1.shape);
        this.cf2 = new DmkKD(new iLfep(-this.wmdto,this.FpLNn));
        this.cf2.dWoPA();
        WUUhY.addChild(this.cf2.shape);
        this.cf3 = new DmkKD(new iLfep(this.wmdto,-this.FpLNn));
        this.cf3.dWoPA();
        WUUhY.addChild(this.cf3.shape);
        this.cf4 = new DmkKD(new iLfep(this.wmdto,this.FpLNn));
        this.cf4.dWoPA();
        WUUhY.addChild(this.cf4.shape)
    }
    ,
    t.prototype.QacVs = function() {
        n.prototype.QacVs.call(this);
        parameters.Llodm == 1 && !game.RbCCR() && this.CFeds > 1 && PYgUk.yqZow > 0 && (this.tCOHu = new nsHxV(PYgUk.wrBTe,PYgUk.yqZow,PYgUk.ycPWa()))
    }
    ,
    t
}(Pitch);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Pitch5 = function(n) {
    function t(t, i) {
        var r = n.call(this, t, i) || this;
        r.QPztY = new uumai(r.center.SDHsM - r.wmdto,r.center.dTfhX - game.rules.uVTWK.FpLNn,game.rules.uVTWK,1);
        r.tWdPg = new uumai(r.center.SDHsM + r.wmdto - game.rules.uVTWK.width,r.center.dTfhX - game.rules.uVTWK.FpLNn,game.rules.uVTWK,-1);
        var u = ~~(200 + t1.stadium() % 11 * 7)
          , f = ~~(160 + t1.stadium() % 13 * 2)
          , e = ~~(60 + t1.stadium() % 7 * 6);
        return r.mfdoU = "rgb(" + u + "," + f + "," + e + ")",
        r
    }
    return __extends(t, n),
    t.prototype.nNPOL = function() {
        for (var t, n, i = -1200; i < 1200; i += 1e3)
            for (t = -800; t < 800; t += 200)
                n = groundShade.clone(!0),
                n.alpha = .1,
                n.x = i,
                n.y = t,
                n.scaleX = 5,
                WUUhY.addChild(n)
    }
    ,
    t
}(Pitch);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
uumai = function(n) {
    function t(t, i, r, u) {
        var f = n.call(this, t, i, r, u) || this, e, s;
        f.VbCxn = f.width;
        f.MKmii = Math.pow(f.VbCxn, 2);
        f.GbAGY = f.height - f.VbCxn * 2;
        f.sGrfk = f.GbAGY / 2;
        f.DIUXR = new Line(new iLfep(f.dHMwY,f.center.dTfhX - f.sGrfk),new iLfep(f.dHMwY,f.center.dTfhX + f.sGrfk));
        var h = 0
          , c = []
          , o = null;
        for (e = 0; e < Math.PI / 2; e += .01)
            s = new iLfep(f.zFztP + Math.cos(e) * f.VbCxn * f.dir,f.center.dTfhX - f.sGrfk - Math.sin(e) * f.VbCxn),
            o != null && (c[h] = new Line(o,s),
            h++),
            o = s;
        f.nHorf = new NGGSw(c);
        var h = 0
          , c = []
          , o = null;
        for (e = 0; e < Math.PI / 2; e += .01)
            s = new iLfep(f.zFztP + Math.cos(e) * f.VbCxn * f.dir,f.center.dTfhX + f.sGrfk + Math.sin(e) * f.VbCxn),
            o != null && (c[h] = new Line(o,s),
            h++),
            o = s;
        return f.fOwpG = new NGGSw(c),
        f
    }
    return __extends(t, n),
    t.prototype.isIn = function(t, i) {
        if (i === void 0 && (i = 0),
        !n.prototype.isIn.call(this, t, i))
            return !1;
        var r = Math.abs(t.dTfhX) - this.sGrfk;
        return r < 0 ? !0 : Math.pow(t.SDHsM - this.zFztP, 2) + Math.pow(r, 2) < this.MKmii
    }
    ,
    t.prototype.GlXGq = function(n) {
        this.DIUXR.render(n);
        this.nHorf.render(n);
        this.fOwpG.render(n);
        var t = view.wuNti(this.oROkp);
        n.graphics.drawEllipse(t.SDHsM - 1, t.dTfhX - 1, 2, 2)
    }
    ,
    t
}(tGFoh);
Chat = function() {
    function n() {
        this.nlnnM = 0;
        this.eqDAK = 0;
        this.trIoI = 0;
        this.mBgsd = !1;
        this.QnaCl = !1;
        this.tDvUN = game.ixkqG ? 5 : 1;
        this.txtChat = document.getElementById("txtChat");
        this.txtChat && (this.txtChat.onkeypress = IisxC,
        this.txtChat.onsubmit = function(n) {
            return n.preventDefault(),
            !1
        }
        );
        this.VdypA = new sKaRj;
        this.VdypA.tGdnv = function(n) {
            n && n.status != 200 || (chat.txtChat.value = "");
            chat.txtChat.removeAttribute("disabled")
        }
        ;
        this.VdypA.ROCqA = function() {
            chat.txtChat.removeAttribute("disabled")
        }
        ;
        this.JEWFX()
    }
    return n.prototype.qTpiY = function() {
        this.nlnnM -= 1;
        this.nlnnM < 0 && this.yAEUX()
    }
    ,
    n.prototype.xlYAe = function(n) {
        var i, t, r;
        if (parameters.liveChat != 0 && n && n.length != 0 && (i = document.getElementById("divChatFront"),
        i)) {
            for (t = 0; t < n.length; t++)
                r = "<p>",
                (n[t].displayName != this.BPkuO || this.tDvUN == 1) && (r += '<span class="user">' + n[t].displayName + "<\/span><br/>"),
                r += n[t].text + "<\/p>",
                i.innerHTML += r,
                this.eqDAK = vRzMg(parseInt(n[t].id), this.eqDAK, 2e3),
                this.BPkuO = n[t].displayName,
                this.trIoI < this.tDvUN ? this.trIoI += 1 : i.removeChild(i.childNodes[0]);
            this.WJsGp(this.trIoI > 0)
        }
    }
    ,
    n.prototype.WJsGp = function(n) {
        parameters.liveChat == 0 || this.mBgsd && this.QnaCl == n || (game.ixkqG ? (document.getElementById("divChatBack").style.cssText = "display:block",
        document.getElementById("divChatFront").style.cssText = "display:block",
        document.getElementById("divChatInput").style.cssText = "display:block",
        document.getElementById("divChatBack").style.height = n ? "240px" : "36px") : (document.getElementById("divChatBack").style.cssText = "display:block",
        document.getElementById("divChatFront").style.cssText = "display:block"),
        this.mBgsd = !0,
        this.QnaCl = n,
        this.nlnnM = 10)
    }
    ,
    n.prototype.JEWFX = function() {
        parameters.clientMode == 1 && (document.getElementById("divChatBack").className = "chat-back-play",
        document.getElementById("divChatFront").className = "chat-front-play")
    }
    ,
    n.prototype.yAEUX = function() {
        this.mBgsd && (document.getElementById("divChatBack").style.cssText = "display:none",
        document.getElementById("divChatFront").style.cssText = "display:none",
        document.getElementById("divChatInput").style.cssText = "display:none",
        this.mBgsd = !1)
    }
    ,
    n.prototype.sendComment = function() {
        this.txtChat.setAttribute("disabled", "disabled");
        var n = {
            comment: this.txtChat.value,
            channel: parameters.channel
        };
        this.VdypA.Liwbb("/api/chat/sendComment", n, 0)
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Cursor = function(n) {
    function t(t, i) {
        var r = n.call(this) || this;
        return r.shape = new createjs.Shape,
        r.color = "blue",
        t == 1 && (r.color = "red"),
        r.shape.graphics.beginFill(r.color).moveTo(-10, -10),
        r.shape.graphics.lineTo(10, -10),
        r.shape.graphics.lineTo(0, 10),
        r.shape.graphics.endFill(),
        r.shape.cache(-10, -10, 20, 20),
        r.shape.alpha = i ? .6 : .3,
        yxdsY.addChild(r.shape),
        r
    }
    return __extends(t, n),
    t
}(DNprm);
jxpMf = function() {
    function n(n, t, i) {
        this.id = t;
        this.frame = 0;
        this.radius = i;
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill("#f00").drawEllipse(-5, -3, 10, 6);
        this.shape.graphics.endStroke();
        this.shape.cache(-5, -3, 10, 6);
        this.uYIqv = !0;
        view.apply(this.shape, n);
        XOpAD.addChild(this.shape)
    }
    return n.prototype.uJUbD = function() {
        ++this.frame <= 10 && (this.shape.alpha = .9 - this.frame * .1,
        this.shape.scaleX = this.radius / 5,
        this.shape.scaleY = this.radius / 3,
        this.frame == 10 && this.shape != null && (XOpAD.removeChild(this.shape),
        this.uYIqv = !1))
    }
    ,
    n.prototype.cVDad = function() {}
    ,
    n.prototype.vcabn = function(n, t) {
        this.uYIqv || (this.radius = t,
        view.apply(this.shape, n),
        XOpAD.addChild(this.shape),
        this.uYIqv = !0,
        this.frame = 0)
    }
    ,
    n
}();
oobXj = function() {
    function n() {
        this.shape = new createjs.Shape;
        this.shape.graphics.setStrokeStyle(4);
        this.shape.graphics.beginStroke("Yellow").moveTo(-8, -5);
        this.shape.graphics.lineTo(8, 5);
        this.shape.graphics.moveTo(8, -5);
        this.shape.graphics.lineTo(-8, 5);
        this.shape.graphics.endStroke();
        this.shape.alpha = .5;
        this.shape.cache(-8, -5, 16, 10)
    }
    return n
}();
FxDRC = function() {
    function n() {
        this.line = new Line(new iLfep(0,-game.rules.nASZn.FpLNn),new iLfep(0,game.rules.nASZn.FpLNn));
        this.color = "yellow";
        this.thickNess = 3;
        this.visible = !1;
        this.shape = new createjs.Shape;
        this.shape.alpha = .5;
        PvRyJ.addChild(this.shape)
    }
    return n.prototype.uJUbD = function() {}
    ,
    n.prototype.cVDad = function() {
        this.visible && (this.line.point1.SDHsM = this.line.point2.SDHsM = game.Qmccu().kyfVy,
        this.shape.graphics.clear(),
        this.shape.graphics.setStrokeStyle(this.thickNess),
        this.shape.graphics.beginStroke(this.color),
        this.line.render(this.shape),
        this.shape.graphics.endStroke())
    }
    ,
    n.prototype.jobPx = function() {
        this.visible = !this.visible;
        this.visible || this.shape.graphics.clear()
    }
    ,
    n
}();
fDILa = function() {
    function n() {
        this.width = 240;
        this.height = 35;
        this.shape = new createjs.Shape;
        this.TZYxo = new createjs.Container;
        var n = new createjs.Shape;
        n.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(-this.width / 2, -this.height / 2, this.width, this.height);
        n.cache(-this.width / 2, -this.height / 2, this.width, this.height);
        this.TZYxo.addChild(n);
        this.bar = new createjs.Shape;
        this.bar.x = this.width / 2 - 105;
        this.bar.y = 0;
        this.TZYxo.addChild(this.bar);
        stage.addChild(this.TZYxo)
    }
    return n.prototype.uJUbD = function() {}
    ,
    n.prototype.cVDad = function() {
        if (DMryL.power > 0)
            switch (DMryL.buffer) {
            case "H":
                this.setBar("red", DMryL.power);
                break;
            case "HH":
                this.setBar("orange", DMryL.power);
                break;
            case "L":
                this.setBar("green", DMryL.power);
                break;
            case "LL":
                this.setBar("yellow", DMryL.power);
                break;
            case "S":
                this.setBar("blue", DMryL.power);
                break;
            case "SS":
                this.setBar("skyblue", DMryL.power)
            }
        DMryL.hasbar() || this.hideBar()
    }
    ,
    n.prototype.Jsjwy = function(n) {
        (this.icon != null && this.icon.shape != null && this.TZYxo.removeChild(this.icon.shape),
        n != this.BAMDj) && (this.text != null && this.TZYxo.removeChild(this.text),
        this.text = null,
        this.text = new createjs.Text(n,mFMVI,"#fff"),
        this.text.y = -7,
        this.text.x = -this.width * .5 + 30,
        this.TZYxo.addChild(this.text),
        this.BAMDj = n)
    }
    ,
    n.prototype.setBar = function(n, t) {
        this.bar.graphics.clear();
        this.bar.graphics.beginFill(n).drawRect(0, -5, t, 10)
    }
    ,
    n.prototype.hideBar = function() {
        this.bar.graphics.clear()
    }
    ,
    n.prototype.kWXpw = function(n) {
        this.Jsjwy(n);
        this.icon = new Card("yellow",10,15);
        this.icon.dWoPA();
        this.icon.shape.rotation = -10;
        this.icon.shape.x = -this.width / 2 + 15;
        this.icon.shape.y = 0;
        this.TZYxo.addChild(this.icon.shape)
    }
    ,
    n.prototype.eEKSz = function(n) {
        this.Jsjwy(n);
        this.icon = new Card("red",10,15);
        this.icon.dWoPA();
        this.icon.shape.rotation = -10;
        this.icon.shape.x = -this.width / 2 + 15;
        this.icon.shape.y = 0;
        this.TZYxo.addChild(this.icon.shape)
    }
    ,
    n.prototype.offside = function(n) {
        this.Jsjwy(n);
        this.icon = new bMJVL;
        this.icon.dWoPA();
        this.icon.animate(2);
        this.icon.shape.rotation = -45;
        this.icon.shape.x = -this.width / 2 + 20;
        this.icon.shape.y = 8;
        this.TZYxo.addChild(this.icon.shape)
    }
    ,
    n.prototype.hADPj = function(n) {
        this.Jsjwy(n);
        this.icon = new Comic(0,20,15,null,100);
        this.icon.shape.x = -this.width / 2 + 15;
        this.icon.shape.y = 0;
        this.TZYxo.addChild(this.icon.shape)
    }
    ,
    n
}();
Pawn = function() {
    function n(n, t, i, r, u) {
        r === void 0 && (r = null);
        u === void 0 && (u = null);
        this.size = t;
        this.type = n;
        this.color = i;
        this.UjUaJ = r;
        this.olCjg = u;
        this.shape = new createjs.Shape;
        switch (this.type) {
        case 0:
            parameters.graphics == 1 ? this.shape.graphics.beginFill(this.color).drawRect(-t / 2, -t / 2, t, t) : this.shape.graphics.beginFill(this.color).beginStroke("#000").drawRect(-t / 2, -t / 2, t, t);
            break;
        case 1:
            this.shape.graphics.beginFill(this.color).drawRect(-t / 2, -t / 2, t, t);
            this.shape.rotation = 45;
            break;
        case 2:
            this.shape.graphics.setStrokeStyle(1);
            this.shape.graphics.beginStroke(this.color);
            this.shape.graphics.moveTo(-t / 2, -t / 6);
            this.shape.graphics.lineTo(-t / 2, -t / 2);
            this.shape.graphics.lineTo(-t / 6, -t / 2);
            this.shape.graphics.moveTo(t / 6, -t / 2);
            this.shape.graphics.lineTo(t / 2, -t / 2);
            this.shape.graphics.lineTo(t / 2, -t / 6);
            this.shape.graphics.moveTo(t / 2, t / 6);
            this.shape.graphics.lineTo(t / 2, t / 2);
            this.shape.graphics.lineTo(t / 6, t / 2);
            this.shape.graphics.moveTo(-t / 6, t / 2);
            this.shape.graphics.lineTo(-t / 2, t / 2);
            this.shape.graphics.lineTo(-t / 2, t / 6);
            this.shape.graphics.endStroke()
        }
        this.shape.alpha = .8;
        this.shape.cache(-t / 2, -t / 2, t, t)
    }
    return n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Radar = function(n) {
    function t() {
        var t = n.call(this, 0, 0, new Size(160 / EZZXG,100 / EZZXG)) || this;
        return t.p1 = [],
        t.p2 = [],
        t.curs1 = [],
        t.curs2 = [],
        t.YRdsi = 0,
        t.TZYxo = new createjs.Container,
        t.b = new Pawn(1,3,"#fff",b),
        t1.RCcbW.KlBDy.forEach(function(n, i) {
            t.curs1[i] = new Pawn(2,10,"#fff",null,n);
            t.TZYxo.addChild(t.curs1[i].shape)
        }),
        t2.RCcbW.KlBDy.forEach(function(n, i) {
            t.curs2[i] = new Pawn(2,10,"#fff",null,n);
            t.TZYxo.addChild(t.curs2[i].shape)
        }),
        t.scaleX = 160 / game.rules.nASZn.width / EZZXG,
        t.scaleY = 100 / game.rules.nASZn.height / EZZXG,
        t.dWoPA(),
        stage.addChild(t.TZYxo),
        t
    }
    return __extends(t, n),
    t.prototype.uJUbD = function() {}
    ,
    t.prototype.cVDad = function() {
        var n = this;
        this.YRdsi == 0 ? (this.p1.forEach(function(t) {
            t.shape.x = ~~(t.UjUaJ.yAjCz.SDHsM * n.scaleX);
            t.shape.y = ~~(t.UjUaJ.yAjCz.dTfhX * n.scaleY)
        }),
        this.curs1.forEach(function(t) {
            t.olCjg.player != null ? (t.shape.x = ~~(t.olCjg.player.yAjCz.SDHsM * n.scaleX),
            t.shape.y = ~~(t.olCjg.player.yAjCz.dTfhX * n.scaleY),
            t.shape.visible = !0) : t.shape.visible = !1
        })) : (this.p2.forEach(function(t) {
            t.shape.x = ~~(t.UjUaJ.yAjCz.SDHsM * n.scaleX);
            t.shape.y = ~~(t.UjUaJ.yAjCz.dTfhX * n.scaleY)
        }),
        this.curs2.forEach(function(t) {
            t.olCjg.player != null ? (t.shape.x = ~~(t.olCjg.player.yAjCz.SDHsM * n.scaleX),
            t.shape.y = ~~(t.olCjg.player.yAjCz.dTfhX * n.scaleY),
            t.shape.visible = !0) : t.shape.visible = !1
        }));
        this.b.shape.x = ~~(this.b.UjUaJ.yAjCz.SDHsM * this.scaleX);
        this.b.shape.y = ~~(this.b.UjUaJ.yAjCz.dTfhX * this.scaleY);
        this.YRdsi = 1 - this.YRdsi
    }
    ,
    t.prototype.lgxoX = function() {
        for (var r, n, t = this, i, f = 0, e = 0, o, s, u = 0; u < 4; u++)
            for (r = 0; r < 4; r++)
                f = this.distance(t1.NXnGl().JYUGm(u), t2.NXnGl().JYUGm(r)) * t1.NXnGl().Gucak(u) * t2.NXnGl().Gucak(r),
                f > e && (o = t1.NXnGl().JYUGm(u),
                s = t2.NXnGl().JYUGm(r),
                e = f);
        for (n in t1.p)
            this.p1[n] == null && (i = new Pawn(0,5,o,t1.p[n]),
            this.TZYxo.addChild(i.shape),
            this.p1[n] = i);
        for (n in t2.p)
            this.p2[n] == null && (i = new Pawn(0,5,s,t2.p[n]),
            this.TZYxo.addChild(i.shape),
            this.p2[n] = i);
        this.p1.forEach(function(n, i) {
            t1.p[i] == null && (t.TZYxo.removeChild(t.p1[i].shape),
            t.p1.splice(i, 1))
        });
        this.p2.forEach(function(n, i) {
            t2.p[i] == null && (t.TZYxo.removeChild(t.p2[i].shape),
            t.p2.splice(i, 1))
        })
    }
    ,
    t.prototype.dWoPA = function() {
        this.lines = new createjs.Shape;
        this.lines.graphics.setStrokeStyle(1);
        this.lines.graphics.beginStroke("#000").beginFill("rgba(0,0,0,0.1)").drawRect(-this.width / 2, -this.height / 2, this.width, this.height);
        this.lines.graphics.endStroke();
        this.lines.graphics.setStrokeStyle(1);
        this.lines.graphics.beginStroke("rgba(0,0,0,0.5)").moveTo(0, -this.FpLNn);
        this.lines.graphics.lineTo(0, this.FpLNn);
        this.lines.graphics.moveTo(-this.wmdto, -this.FpLNn * .6);
        this.lines.graphics.lineTo(-this.wmdto * .68, -this.FpLNn * .6);
        this.lines.graphics.lineTo(-this.wmdto * .68, this.FpLNn * .6);
        this.lines.graphics.lineTo(-this.wmdto, this.FpLNn * .6);
        this.lines.graphics.moveTo(-this.wmdto, -this.FpLNn * .25);
        this.lines.graphics.lineTo(-this.wmdto * .9, -this.FpLNn * .25);
        this.lines.graphics.lineTo(-this.wmdto * .9, this.FpLNn * .25);
        this.lines.graphics.lineTo(-this.wmdto, this.FpLNn * .25);
        this.lines.graphics.moveTo(-this.wmdto * .68, -this.FpLNn * .22);
        for (var n = -Math.PI / 2; n < Math.PI / 2; n += .1)
            this.lines.graphics.lineTo(-this.wmdto * .68 + Math.cos(n) * this.wmdto * .05, Math.sin(n) * this.FpLNn * .2);
        for (this.lines.graphics.moveTo(this.wmdto * .68, -this.FpLNn * .22),
        n = -Math.PI / 2; n < Math.PI / 2; n += .1)
            this.lines.graphics.lineTo(this.wmdto * .68 - Math.cos(n) * this.wmdto * .05, Math.sin(n) * this.FpLNn * .2);
        this.lines.graphics.moveTo(this.wmdto, -this.FpLNn * .6);
        this.lines.graphics.lineTo(this.wmdto * .68, -this.FpLNn * .6);
        this.lines.graphics.lineTo(this.wmdto * .68, this.FpLNn * .6);
        this.lines.graphics.lineTo(this.wmdto, this.FpLNn * .6);
        this.lines.graphics.moveTo(this.wmdto, -this.FpLNn * .25);
        this.lines.graphics.lineTo(this.wmdto * .9, -this.FpLNn * .25);
        this.lines.graphics.lineTo(this.wmdto * .9, this.FpLNn * .25);
        this.lines.graphics.lineTo(this.wmdto, this.FpLNn * .25);
        this.lines.graphics.drawEllipse(-this.wmdto * .2, -this.wmdto * .2, this.wmdto * .4, this.wmdto * .4);
        this.lines.graphics.drawEllipse(-this.wmdto * .001, -this.FpLNn * .001, this.wmdto * .002, this.FpLNn * .002);
        this.lines.graphics.drawEllipse(-this.wmdto * .001, -this.FpLNn * .001, this.wmdto * .002, this.FpLNn * .002);
        this.lines.graphics.drawEllipse(-this.wmdto * .775 - this.wmdto * .001, -this.FpLNn * .001, this.wmdto * .002, this.FpLNn * .002);
        this.lines.graphics.drawEllipse(this.wmdto * .775 - this.wmdto * .001, -this.FpLNn * .001, this.wmdto * .002, this.FpLNn * .002);
        this.lines.graphics.endStroke();
        this.lines.cache(-this.wmdto, -this.FpLNn, this.width, this.height);
        this.TZYxo.addChild(this.lines);
        this.lgxoX();
        this.TZYxo.addChild(this.b.shape)
    }
    ,
    t.prototype.distance = function(n, t) {
        return this.diff(cTAWM(n).r, cTAWM(t).r) + this.diff(cTAWM(n).g, cTAWM(t).g) + this.diff(cTAWM(n).b, cTAWM(t).b)
    }
    ,
    t.prototype.diff = function(n, t) {
        return n > t ? n - t : t - n
    }
    ,
    t
}(bTvce);
mRsGo = function() {
    function n() {
        this.FEcKN = 10;
        this.TZYxo = new createjs.Container;
        this.shape = new createjs.Shape;
        var n = new createjs.Shape;
        n.graphics.beginFill("red").drawCircle(0, 0, this.FEcKN * .6);
        n.graphics.beginStroke("white").drawCircle(0, 0, this.FEcKN);
        n.cache(-this.FEcKN, -this.FEcKN, this.FEcKN * 2, this.FEcKN * 2);
        this.TZYxo.addChild(n);
        this.TZYxo.x = this.FEcKN * 2;
        this.TZYxo.y = this.FEcKN * 2;
        this.TZYxo.addChild(this.shape);
        this.TZYxo.visible = !1;
        stage.addChild(this.TZYxo)
    }
    return n.prototype.uJUbD = function() {}
    ,
    n.prototype.blink = function() {
        this.frame = 30
    }
    ,
    n.prototype.cVDad = function() {
        this.TZYxo.visible = --this.frame > 0 ? this.frame % 10 > 5 : !1
    }
    ,
    n
}();
Result = function() {
    function n() {
        this.LTpCB = null;
        this.AGweP = null;
        this.score = null;
        this.VxMcX = null;
        this.INxFb = null;
        this.gVyta = null;
        this.width = 480;
        this.height = 35;
        this.shape = new createjs.Shape;
        this.TZYxo = new createjs.Container;
        var n = new createjs.Shape;
        n.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(-this.width / 2, -this.height / 2, this.width, this.height);
        n.cache(-this.width / 2, -this.height / 2, this.width, this.height);
        this.TZYxo.addChild(n);
        game.WDTge && !game.vjtYB && (this.VxMcX = new createjs.Shape,
        this.VxMcX.graphics.beginStroke("#000").beginFill("#fff").drawCircle(0, 0, 8),
        this.VxMcX.cache(-10, -10, 20, 20),
        this.VxMcX.x = this.width * .5 - 145,
        this.VxMcX.y = 0,
        this.TZYxo.addChild(this.VxMcX),
        this.INxFb = new createjs.Shape,
        this.INxFb.graphics.beginStroke("#000").beginFill("green").drawRect(-5, -5, 10, 10),
        this.INxFb.graphics.moveTo(5, -10),
        this.INxFb.graphics.lineTo(15, 0),
        this.INxFb.graphics.lineTo(5, 10),
        this.INxFb.graphics.lineTo(5, -10),
        this.INxFb.graphics.endFill(),
        this.INxFb.graphics.beginStroke("transparent").beginFill("green").drawRect(-2, -4, 10, 8),
        this.INxFb.graphics.endFill(),
        this.INxFb.cache(-11, -11, 27, 22),
        this.INxFb.x = this.width * .5 - 98,
        this.INxFb.y = 0,
        this.TZYxo.addChild(this.INxFb),
        this.gVyta = new createjs.Shape,
        this.gVyta.graphics.setStrokeStyle(5),
        this.gVyta.graphics.beginStroke("#000").moveTo(-8, 2),
        this.gVyta.graphics.lineTo(-1, 9),
        this.gVyta.graphics.lineTo(10, -2),
        this.gVyta.graphics.endStroke(),
        this.gVyta.graphics.beginStroke("#3f3").moveTo(-9, 1),
        this.gVyta.graphics.lineTo(-2, 8),
        this.gVyta.graphics.lineTo(9, -3),
        this.gVyta.graphics.endStroke(),
        this.gVyta.x = this.width * .5 - 45,
        this.gVyta.y = -2,
        this.TZYxo.addChild(this.gVyta));
        stage.addChild(this.TZYxo)
    }
    return n.prototype.QYYHD = function(n) {
        this.result != null && this.TZYxo.removeChild(this.result);
        this.result = null;
        this.result = new createjs.Text(n,mFMVI,"#fff");
        this.result.y = -7;
        this.result.x = -this.width * .5 + 30;
        this.TZYxo.addChild(this.result);
        this.GtZyk = n
    }
    ,
    n.prototype.VOkaD = function(n) {
        n = ~~n;
        this.minute != null && this.TZYxo.removeChild(this.minute);
        this.minute = null;
        this.minute = new createjs.Text(n + "'",mFMVI,"#fff");
        this.minute.y = -7;
        this.minute.x = -this.width * .5 + 10;
        this.TZYxo.addChild(this.minute);
        this.vhayk = n
    }
    ,
    n.prototype.uZjKhr = function(n, t) {
        (this.QYYHD(n),
        game.vjtYB) || (this.LTpCB != null && this.TZYxo.removeChild(this.LTpCB),
        this.LTpCB = null,
        this.AGweP != null && this.TZYxo.removeChild(this.AGweP),
        this.AGweP = null,
        this.score != null && this.TZYxo.removeChild(this.score),
        this.score = null,
        this.VxMcX.visible = !0,
        this.INxFb.visible = !0,
        this.gVyta.visible = !0,
        this.LTpCB = new createjs.Text(t.statistics.rFMkh(),mFMVI,"#fff"),
        this.LTpCB.y = -7,
        this.LTpCB.x = this.width * .5 - 130,
        this.TZYxo.addChild(this.LTpCB),
        this.AGweP = new createjs.Text(t.statistics.AGweP,mFMVI,"#fff"),
        this.AGweP.y = -7,
        this.AGweP.x = this.width * .5 - 80,
        this.TZYxo.addChild(this.AGweP),
        this.score = new createjs.Text(~~t.hptUp,mFMVI,"#fff"),
        this.score.y = -7,
        this.score.x = this.width * .5 - 30,
        this.TZYxo.addChild(this.score))
    }
    ,
    n.prototype.uCLBrm = function(n, t) {
        this.pen1 != null && this.TZYxo.removeChild(this.pen1);
        this.pen1 = null;
        this.pen1 = new createjs.Text(n,mFMVI,"#fff");
        this.pen1.y = -12;
        this.pen1.x = this.width * .5 - 75;
        this.TZYxo.addChild(this.pen1);
        this.pen2 != null && this.TZYxo.removeChild(this.pen2);
        this.pen2 = null;
        this.pen2 = new createjs.Text(t,mFMVI,"#fff");
        this.pen2.y = -2;
        this.pen2.x = this.width * .5 - 75;
        this.TZYxo.addChild(this.pen2)
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Score = function(n) {
    function t(i, r) {
        var u = n.call(this) || this;
        return u.yAjCz = new iLfep(i.SDHsM,i.dTfhX,40),
        u.value = r,
        u.frame = 0,
        u.TZYxo = new createjs.Container,
        u.image = new createjs.Shape,
        r > 0 ? (u.image.graphics.setStrokeStyle(8),
        u.image.graphics.beginStroke("#000").moveTo(-9, 1),
        u.image.graphics.lineTo(-1, 9),
        u.image.graphics.lineTo(11, -3),
        u.image.graphics.endStroke(),
        u.image.graphics.beginStroke("#3f3").moveTo(-10, 0),
        u.image.graphics.lineTo(-2, 8),
        u.image.graphics.lineTo(10, -4),
        u.image.graphics.endStroke()) : (u.image.graphics.setStrokeStyle(8),
        u.image.graphics.beginStroke("#000").moveTo(-7, -7),
        u.image.graphics.lineTo(9, 9),
        u.image.graphics.moveTo(9, -7),
        u.image.graphics.lineTo(-7, 9),
        u.image.graphics.endStroke(),
        u.image.graphics.beginStroke("Red").moveTo(-8, -8),
        u.image.graphics.lineTo(8, 8),
        u.image.graphics.moveTo(8, -8),
        u.image.graphics.lineTo(-8, 8),
        u.image.graphics.endStroke()),
        u.image.cache(-20, -20, 40, 40),
        u.image.x = -10,
        u.TZYxo.addChild(u.image),
        u.value > 0 ? (u.text = new createjs.Text("+" + u.value,"10pt Arial Black","#fff"),
        u.shadow = new createjs.Text("+" + u.value,"10pt Arial Black","#000")) : (u.text = new createjs.Text(u.value,"10pt Arial Black","#fff"),
        u.shadow = new createjs.Text(u.value,"10pt Arial Black","#000")),
        u.shadow.x = 11,
        u.shadow.y = -4,
        u.text.x = 10,
        u.text.y = -5,
        u.TZYxo.addChild(u.shadow),
        u.TZYxo.addChild(u.text),
        u.TZYxo.alpha = 0,
        XOpAD.addChild(u.TZYxo),
        u.id = t.cIRAZ++,
        t.scores[u.id] = u,
        t.cIRAZ > 10 && (t.cIRAZ = 0),
        u
    }
    return __extends(t, n),
    t.prototype.uJUbD = function() {
        this.frame += 1;
        this.yAjCz.hzrxR -= .5;
        view.gXREa(this.TZYxo, this.yAjCz, -30);
        this.frame < 7 ? this.TZYxo.alpha = this.frame * .1 : this.frame >= 7 && this.frame <= 50 ? this.TZYxo.alpha = .7 : this.frame > 50 && this.frame < 57 ? this.TZYxo.alpha = .7 - (this.frame - 50) * .1 : this.frame >= 57 && XOpAD.removeChild(this.TZYxo)
    }
    ,
    t.scores = [],
    t.cIRAZ = 0,
    t
}(DNprm);
rcmWb = function() {
    function n() {
        this.font = "bold 12pt Tahoma";
        this.color = "white";
        this.labels = ["shots", "shots_on_target", "posts", "passes", "successful_passes", "offsides", "corners", "fouls", "yel_red_cards", "ball_possession", "shots", "shots_on_target", "passes", "successful_passes", "offsides", "fouls_comm_suff", "distance", "saves_coming_out"];
        this.TZYxo = new createjs.Container;
        this.sNXbFN()
    }
    return n.prototype.sNXbFN = function() {
        game.WDTge ? this.tOOgl() : this.ZdlyW()
    }
    ,
    n.prototype.ZdlyW = function() {
        var e, f, u, i, t, o, s, r, n;
        for (e = new createjs.Shape,
        e.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(-300, -180, 600, 360),
        this.TZYxo.addChild(e),
        f = new createjs.Text(t1.name,this.font,this.color),
        f.x = -285,
        f.y = -165,
        u = new createjs.Text(t2.name,this.font,this.color),
        u.x = 285 - u.getMeasuredWidth(),
        u.y = -165,
        this.TZYxo.addChild(f),
        this.TZYxo.addChild(u),
        i = [],
        t = [],
        t1.efTQq(),
        t2.efTQq(),
        i[0] = new createjs.Text(t1.statistics.shots.toString(),this.font,this.color),
        t[0] = new createjs.Text(t2.statistics.shots.toString(),this.font,this.color),
        i[1] = new createjs.Text(t1.statistics.qoUTp().toString(),this.font,this.color),
        t[1] = new createjs.Text(t2.statistics.qoUTp().toString(),this.font,this.color),
        i[2] = new createjs.Text(t1.statistics.posts.toString(),this.font,this.color),
        t[2] = new createjs.Text(t2.statistics.posts.toString(),this.font,this.color),
        i[3] = new createjs.Text(t1.statistics.passes.toString(),this.font,this.color),
        t[3] = new createjs.Text(t2.statistics.passes.toString(),this.font,this.color),
        i[4] = new createjs.Text(t1.statistics.BBogr().toString() + " (" + t1.statistics.tYYgC().toString() + "%)",this.font,this.color),
        t[4] = new createjs.Text(t2.statistics.BBogr().toString() + " (" + t2.statistics.tYYgC().toString() + "%)",this.font,this.color),
        i[5] = new createjs.Text(t1.statistics.offsides.toString(),this.font,this.color),
        t[5] = new createjs.Text(t2.statistics.offsides.toString(),this.font,this.color),
        i[6] = new createjs.Text(t1.statistics.corners.toString(),this.font,this.color),
        t[6] = new createjs.Text(t2.statistics.corners.toString(),this.font,this.color),
        i[7] = new createjs.Text(t1.statistics.NyVLh.toString(),this.font,this.color),
        t[7] = new createjs.Text(t2.statistics.NyVLh.toString(),this.font,this.color),
        i[8] = new createjs.Text(t1.statistics.tJEtY.toString() + "/" + t1.statistics.Zzebs.toString(),this.font,this.color),
        t[8] = new createjs.Text(t2.statistics.tJEtY.toString() + "/" + t2.statistics.Zzebs.toString(),this.font,this.color),
        o = ~~(t1.statistics.UiLDm * 100 / (t1.statistics.UiLDm + t2.statistics.UiLDm)),
        s = 100 - o,
        i[9] = new createjs.Text(o.toString() + "%",this.font,this.color),
        t[9] = new createjs.Text(s.toString() + "%",this.font,this.color),
        r = [],
        n = 0; n < 10; n++)
            r[n] = new createjs.Text(YulwW(this.labels[n]),this.font,this.color),
            r[n].y = -130 + 30 * n,
            r[n].x = -r[n].getMeasuredWidth() * .5,
            this.TZYxo.addChild(r[n]),
            i[n].y = -130 + 30 * n,
            t[n].y = -130 + 30 * n,
            i[n].x = -285,
            t[n].x = 285 - t[n].getMeasuredWidth(),
            this.TZYxo.addChild(i[n]),
            this.TZYxo.addChild(t[n])
    }
    ,
    n.prototype.tOOgl = function() {
        var e, t, o, u, s, r, i, n, f;
        for (e = new createjs.Shape,
        e.graphics.beginFill("rgba(0,0,0,0.5)").drawRect(-200, -150, 400, 300),
        this.TZYxo.addChild(e),
        t = [],
        game.YUWPz.t.opn.efTQq(),
        o = game.YUWPz.t.opn.statistics,
        game.YUWPz == game.YUWPz.t.AxvNR ? (t[0] = o.shots.toString(),
        t[1] = o.qoUTp().toString(),
        t[4] = game.YUWPz.statistics.saves.toString()) : (t[0] = game.YUWPz.statistics.shots.toString(),
        t[1] = (game.YUWPz.statistics.shots - game.YUWPz.statistics.rLFrH).toString(),
        t[4] = game.YUWPz.statistics.offsides.toString()),
        t[2] = game.YUWPz.statistics.passes.toString(),
        u = game.YUWPz.statistics.passes - game.YUWPz.statistics.MBtyq,
        game.YUWPz.statistics.passes > 0 ? (s = ~~(u * 100 / game.YUWPz.statistics.passes),
        t[3] = u.toString() + " (" + s.toString() + "%)") : t[3] = u.toString(),
        t[5] = game.YUWPz.statistics.NyVLh.toString() + "/" + game.YUWPz.statistics.RuMOd.toString(),
        t[6] = (~~game.YUWPz.statistics.distance * .001).toFixed(2) + " Km",
        r = [],
        i = [],
        n = 0; n < 7; n++)
            f = n + 10,
            f == 14 && game.YUWPz == game.LZXFT.AxvNR && (f = 17),
            r[n] = new createjs.Text(YulwW(this.labels[f]),this.font,this.color),
            r[n].y = -130 + 40 * n,
            r[n].x = -180,
            this.TZYxo.addChild(r[n]),
            i[n] = new createjs.Text(t[n],this.font,this.color),
            i[n].y = -130 + 40 * n,
            i[n].x = 90 - i[n].getMeasuredWidth() * .5,
            this.TZYxo.addChild(i[n])
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
SuggestedPosition = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.shape = new createjs.Shape,
        t.shape.graphics.setStrokeStyle(2),
        t.shape.graphics.beginFill("orange").beginStroke("white").moveTo(-10, -10),
        t.shape.graphics.lineTo(10, -10),
        t.shape.graphics.lineTo(10, 0),
        t.shape.graphics.lineTo(20, 0),
        t.shape.graphics.lineTo(0, 10),
        t.shape.graphics.lineTo(-20, 0),
        t.shape.graphics.lineTo(-10, 0),
        t.shape.graphics.lineTo(-10, -10),
        t.shape.graphics.endFill(),
        t.shape.cache(-22, -12, 44, 24),
        t.shape.alpha = .7,
        t.shape.visible = !1,
        t.frame = 0,
        yxdsY.addChild(t.shape),
        t
    }
    return __extends(t, n),
    t.prototype.blink = function(n) {
        parameters.showSuggestedPosition && (this.yAjCz = n,
        this.frame = 30)
    }
    ,
    t.prototype.cVDad = function() {
        --this.frame > 0 ? (this.shape.visible = this.frame % 10 > 5,
        view.gXREa(this.shape, this.yAjCz, -30)) : this.shape.visible = !1
    }
    ,
    t
}(DNprm);
Hand = function() {
    function n(n) {
        this.p = n;
        this.x;
        this.y;
        this.width = 4;
        this.height = 4;
        this.color = n.UFeev();
        n.yfhAQ != null && (this.color = n.yfhAQ)
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        parameters.graphics == 1 ? this.shape.graphics.beginFill(this.color).drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.shape.graphics.beginStroke("#000").beginFill(this.color).drawRoundRect(-this.width / 2, -this.height / 2, this.width, this.height, 1);
        this.shape.cache(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2)
    }
    ,
    n
}();
Shoe = function() {
    function n(n, t, i, r, u) {
        this.cx = 0;
        this.cy = 0;
        this.ox = 0;
        this.oy = 0;
        this.p = n;
        this.hwqpJ = i;
        this.ftg = u;
        this.dir = t;
        this.width = 360 / 65;
        this.height = n.YKlsJ / 10
    }
    return n.prototype.dWoPA = function() {
        this.p.shoe ? (this.shape = new createjs.Container,
        this.bmp = new createjs.Bitmap("shoes/s/" + this.p.shoe + ".png"),
        this.bmp.regX = 3,
        this.bmp.regY = 2,
        this.shape.addChild(this.bmp),
        parameters.graphics == 0 && (this.cnt = new createjs.Shape,
        this.cnt.graphics.beginStroke("#000").drawRoundRect(-this.width / 2 - .25, -this.height / 2 - .25, this.width + .5, this.height + .5, .5),
        this.cnt.cache(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2),
        this.shape.addChild(this.cnt))) : (this.shape = new createjs.Shape,
        parameters.graphics == 1 ? this.shape.graphics.beginFill("#333").drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.shape.graphics.beginStroke("#000").beginFill("#333").drawRoundRect(-this.width / 2, -this.height / 2, this.width, this.height, 1),
        this.shape.cache(-this.width / 2, -this.height / 2, this.width, this.height))
    }
    ,
    n.prototype.cVDad = function() {}
    ,
    n.prototype.uJUbD = function() {
        var t = this.p.VmddP
          , n = migOb.WIMds;
        this.cx += (this.ox - this.cx) * .2 * (n < 0 ? -n : n) - t.SDHsM * n;
        this.cy += (this.oy - this.cy) * .2 * (n < 0 ? -n : n) - t.dTfhX * n;
        this.ftg -= n;
        this.cx * this.cx + this.cy * this.cy > 20 && (this.ox -= this.ox >> 1,
        this.oy -= this.oy >> 1);
        this.ftg < 0 ? (this.ox = t.SDHsM * 30 / n,
        this.oy = t.dTfhX * 30 / n,
        this.ftg = 20,
        this.shape.scaleX = sgn(t.SDHsM),
        PYgUk.PRTwD(this.p.UQqJm(10))) : this.ftg > 20 && (this.ox = t.SDHsM * 30 / n,
        this.oy = t.dTfhX * 30 / n,
        this.ftg = 0,
        this.shape.scaleX = sgn(t.SDHsM),
        PYgUk.PRTwD(this.p.UQqJm(10)))
    }
    ,
    n.prototype.draw = function() {
        var n = this.p
          , t = this.dir * 3;
        view.PIlOD ? (this.shape.x = ~~(n.pfnbt.SDHsM + this.cx * .5 - n.sinAng * t),
        this.shape.y = ~~(n.pfnbt.dTfhX + this.cy * .5 + n.cosAng * t)) : (this.shape.x = ~~(n.pfnbt.SDHsM - this.cy * .5 - n.cosAng * t),
        this.shape.y = ~~(n.pfnbt.dTfhX + this.cx * .5 - n.sinAng * t))
    }
    ,
    n
}();
sKaRj = function() {
    function n() {
        this.zkHfw = !1
    }
    return n.prototype.tGdnv = function() {}
    ,
    n.prototype.ROCqA = function() {}
    ,
    n.prototype.Liwbb = function(n, t, i) {
        var u = this, r;
        return this.zkHfw ? !1 : (this.CxkmE(),
        QwTxA("POST: " + n),
        r = new XMLHttpRequest,
        r.open("POST", n, !0),
        r.setRequestHeader("Content-type", "application/json"),
        r.timeout = i,
        r.onload = function() {
            u.xcrUt(r)
        }
        ,
        r.onerror = r.ontimeout = function() {
            u.kQcBH(r)
        }
        ,
        r.send(JSON.stringify(t)),
        !0)
    }
    ,
    n.prototype.BxUOu = function(n, t) {
        var r = this, i;
        return this.zkHfw ? !1 : (this.CxkmE(),
        QwTxA("GET: " + n),
        i = new XMLHttpRequest,
        i.open("GET", n, !0),
        i.setRequestHeader("Content-type", "application/json"),
        i.timeout = t,
        i.onload = function() {
            r.xcrUt(i)
        }
        ,
        i.onerror = i.ontimeout = function() {
            r.kQcBH(i)
        }
        ,
        i.send(null),
        !0)
    }
    ,
    n.prototype.isBusy = function() {
        return this.zkHfw || this.BzHfp
    }
    ,
    n.prototype.sleep = function(n) {
        var t = this;
        this.isBusy() || (this.BzHfp = !0,
        setTimeout(function() {
            t.BzHfp = !1
        }, n))
    }
    ,
    n.prototype.xcrUt = function(n) {
        if (QwTxA("OK: " + n.responseURL),
        this.elJcW(),
        n.responseText) {
            var t = JSON.parse(n.responseText);
            this.tGdnv(t, null)
        } else
            this.tGdnv(null, null)
    }
    ,
    n.prototype.kQcBH = function(n) {
        QwTxA("ERROR: " + n.responseURL);
        this.elJcW();
        this.ROCqA(null)
    }
    ,
    n.prototype.CxkmE = function() {
        this.zkHfw = !0
    }
    ,
    n.prototype.elJcW = function() {
        this.zkHfw = !1
    }
    ,
    n
}();
IKXWT = function() {
    function n() {
        var n = this;
        this.bjcaN = 600;
        this.pXNYx = 50;
        this.VdypA = new sKaRj;
        this.VdypA.tGdnv = function(t) {
            n.jmgxH(t)
        }
        ;
        this.VdypA.ROCqA = function() {
            n.pXNYx = n.bjcaN;
            game.izQtY()
        }
    }
    return n.prototype.uJUbD = function() {
        this.pXNYx -= 1;
        this.pXNYx < 0 && this.save()
    }
    ,
    n.prototype.save = function() {
        this.VdypA.isBusy() || !game.cFZJo || game.MYBqI || game.sqFEF || game.isDemo || game.RJuhr || !parameters.edition || game.xbRtm && game.paeHS() || this.BGlUy()
    }
    ,
    n.prototype.BGlUy = function() {
        var n = new UserMatch;
        n.editionStageMatchId = parameters.editionStageMatch;
        n.editionId = parameters.edition;
        n.competitionId = parameters.competition;
        n.clientVersion = clientVersion;
        n.fallback = parameters.fallback;
        n.keys = DPZaw.wqKfW();
        n.fPS = ~~KRdPs.PBzyl;
        n.perceivedFPS = ~~KRdPs.perceivedFPS;
        n.gameUserId = parameters.author;
        n.clientSeed = game.clientSeed;
        n.quitReason = game.XfRzc && game.quitReason == 1 ? 0 : game.quitReason;
        game.WDTge && (n.statistics = game.YUWPz.statistics.brAab(),
        game.YUWPz.t.AxvNR == game.YUWPz && (n.actualMinutes = game.YUWPz.actualMinutes(~~game.minute),
        n.recordMinutes = game.YUWPz.recordMinutes));
        this.VdypA.Liwbb("/api/usermatch/set", n, 15e3)
    }
    ,
    n.prototype.jmgxH = function(n) {
        this.pXNYx = this.bjcaN;
        game.nOwSN();
        switch (n.message) {
        case "exit":
            duAGL("/");
            break;
        case "safequit":
            duAGL("/Message/safe_quit");
            break;
        case "sentoff":
            setTimeout(function() {
                duAGL("/Message/sent_off_msg")
            }, 3e3);
            break;
        case "maintenance":
            duAGL("/Maintenance");
            break;
        case "reload":
            location.reload();
            break;
        case "update":
            DPZaw.wSerX(n.userMatch.keys) ? (game.minute = DPZaw.qlqRI,
            game.half = DPZaw.GbiRR,
            game.WDTge ? (game.YUWPz.statistics.TtWmN = DPZaw.fPcNW > 0 ? DPZaw.fPcNW : 0,
            game.YUWPz.statistics.WkvqA = DPZaw.fPcNW < 0 ? -DPZaw.fPcNW : 0,
            game.YUWPz.statistics.AGweP = DPZaw.QNOwh,
            game.YUWPz.hptUp = DPZaw.jiFyl,
            game.YUWPz.ZpfgI(),
            game.YUWPz.statistics.CskeJ(n.userMatch.statistics),
            game.YUWPz.t.AxvNR == game.YUWPz && (game.YUWPz.nwWzy = DPZaw.qlqRI)) : (t1.LTpCB = parseInt(n.userMatch.result1),
            t2.LTpCB = parseInt(n.userMatch.result2)),
            t1.SWQkS(),
            t2.SWQkS(),
            game.QYYHD(),
            game.VOkaD()) : QwTxA("err1")
        }
    }
    ,
    n
}();
Replay = function() {
    function n() {
        this.EBQeE = 0;
        this.lFati = [];
        this.isGoal = !1
    }
    return n.prototype.cVDad = function() {}
    ,
    n.prototype.dTUFkI = function() {}
    ,
    n.prototype.iUbkDd = function() {}
    ,
    n.prototype.save = function() {}
    ,
    n.prototype.saveIf = function() {}
    ,
    n.prototype.tcjdw = function() {
        return !1
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
FfSyR = function(n) {
    function t() {
        var t = n.call(this) || this;
        return game.izQtY(),
        t.sbnas = 0,
        t.VdypA = new sKaRj,
        t.VdypA.tGdnv = function(n) {
            t.xcrUt(n)
        }
        ,
        t.VdypA.ROCqA = function() {
            location.reload()
        }
        ,
        t.BGlUy(),
        t
    }
    return __extends(t, n),
    t.prototype.uJUbD = function() {
        game.VZEWj || (migOb.frame() >= EhvrD && migOb.WIMds > 0 && (migOb.sCKbNZ(),
        view.Kejyy(!0),
        this.sbnas += 1,
        this.sbnas > 0 && parameters.nextUrl != null && duAGL(parameters.nextUrl)),
        migOb.frame() < 0 && migOb.WIMds < 0 && migOb.swxDtl())
    }
    ,
    t.prototype.dTUFkI = function() {
        switch (migOb.WIMds) {
        case -.5:
        case 1:
        case 1.5:
            migOb.WIMds -= .5;
            break;
        case -.25:
        case -0:
        case .25:
        case .5:
            migOb.WIMds -= .25
        }
    }
    ,
    t.prototype.iUbkDd = function() {
        switch (migOb.WIMds) {
        case -1:
        case .5:
        case 1:
            migOb.WIMds += .5;
            break;
        case -.5:
        case -.25:
        case 0:
        case .25:
            migOb.WIMds += .25
        }
    }
    ,
    t.prototype.BGlUy = function() {
        this.VdypA.BxUOu("/api/replay/getbyid/" + parameters.replay, 0)
    }
    ,
    t.prototype.xcrUt = function(n) {
        game.half = n.half;
        game.minute = n.minute;
        this.tags = n.tags;
        this.isGoal = this.tags.toLowerCase().indexOf("g") >= 0;
        game.KplmC();
        migOb.sOAuCL(n.framesData, 0);
        migOb.sCKbNZ();
        game.nOwSN()
    }
    ,
    t
}(Replay);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
mbBwy = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.VdypA = new sKaRj,
        t.VdypA.tGdnv = function() {}
        ,
        t.VdypA.ROCqA = function() {}
        ,
        t.SjvFB = -1,
        t
    }
    return __extends(t, n),
    t.prototype.uJUbD = function() {
        game.VZEWj || (migOb.frame() >= EhvrD && migOb.WIMds > 0 && (migOb.toUeH = 0),
        migOb.frame() == this.SjvFB && this.BGlUy())
    }
    ,
    t.prototype.save = function(n, t, i) {
        parameters.edition != 0 && (game.mrEkW || (migOb.addTag(n, i),
        (i || b.vSdIU.PqKIS() || game.Nudsf().opn.AxvNR.PqKIS() || game.ojmVV()) && (this.SjvFB = (migOb.frame() + t) % EhvrD)))
    }
    ,
    t.prototype.saveIf = function(n, t, i, r) {
        migOb.addTag(n, i);
        r && (this.SjvFB = (migOb.frame() + t) % EhvrD)
    }
    ,
    t.prototype.BGlUy = function() {
        var n = migOb.getTags(migOb.frame(), EhvrD), t;
        n.indexOf("M") > -1 && n.indexOf("S") > -1 && (n = n.replace("M", ""));
        t = {
            team1Id: t1.id,
            team2Id: t2.id,
            half: game.half.toString(),
            minute: (~~game.minute).toString(),
            framesData: migOb.gOAuCL(migOb.frame(), EhvrD),
            authorId: parameters.author,
            editionStageMatchId: parameters.editionStageMatch,
            tags: n,
            sentoffPlaces1: t1.RupIc(),
            sentoffPlaces2: t2.RupIc(),
            mode: parameters.gameMode
        };
        this.VdypA.Liwbb("/api/replay/set", t, 0);
        this.SjvFB = -1
    }
    ,
    t.prototype.tcjdw = function() {
        return this.SjvFB == -1
    }
    ,
    t
}(Replay);
Stream = function() {
    function n() {
        this.UIdcV = 48;
        this.frame = 0;
        this.JaEfM = 0;
        this.mVzIg = 0;
        this.KHkzo = 0;
        this.aVryF = 48;
        this.jlAWK = 1;
        this.buffer = []
    }
    return n.prototype.ohUSLV = function() {}
    ,
    n.prototype.pdvKzp = function(n) {
        n.blockNumber > this.JaEfM && (this.buffer.push(n),
        this.JaEfM = n.blockNumber)
    }
    ,
    n.prototype.pUJzsj = function() {
        return this.buffer.length == 0 ? null : this.buffer.shift()
    }
    ,
    n.prototype.CxkmE = function() {
        this.omuzX = this.frame
    }
    ,
    n.prototype.elJcW = function() {
        var n = this.frame - this.omuzX;
        this.aVryF = (this.aVryF + n) / 2;
        this.jlAWK = ~~(this.aVryF / this.UIdcV);
        this.jlAWK = vRzMg(this.jlAWK, 1, 10)
    }
    ,
    n
}();
StreamBlock = function() {
    function n() {}
    return n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
XjVWq = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.MkuKw = 0,
        game.izQtY(),
        migOb.toUeH = 0,
        t.VdypA = new sKaRj,
        t.VdypA.tGdnv = function(n) {
            t.jmgxH(n)
        }
        ,
        t.VdypA.ROCqA = function() {
            n.prototype.elJcW.call(t)
        }
        ,
        t
    }
    return __extends(t, n),
    t.prototype.tONpJy = function() {
        this.BGlUy();
        this.tIymHp()
    }
    ,
    t.prototype.uJUbD = function() {
        (migOb.frame() == this.MkuKw || migOb.frame() - 1 == this.MkuKw || migOb.frame() - 2 == this.MkuKw) && (this.tIymHp(),
        this.mVzIg + this.jlAWK + 1 >= this.JaEfM && this.BGlUy())
    }
    ,
    t.prototype.BGlUy = function() {
        if (!this.VdypA.isBusy()) {
            var t = "/api/stream/get/" + parameters.channel + "/" + parameters.editionStageMatch + "/" + this.JaEfM + "/" + this.jlAWK;
            t += parameters.liveChat == 1 ? "/" + chat.eqDAK : "/-1/";
            this.VdypA.BxUOu(t, 0);
            n.prototype.CxkmE.call(this)
        }
    }
    ,
    t.prototype.jmgxH = function(t) {
        var i, r;
        if (n.prototype.elJcW.call(this),
        t && t.userMatch && t.userMatch.Half != 6) {
            if (!t.streamBlocks) {
                this.VdypA.sleep(1e3 + 2e3 * this.jlAWK);
                return
            }
        } else {
            duAGL("/Live");
            this.VdypA.sleep(1e4);
            return
        }
        for (i in t.streamBlocks)
            this.pdvKzp(t.streamBlocks[i]);
        t.userMatch && (this.KHkzo = t.userMatch.fps);
        t.comments && chat.xlYAe(t.comments);
        parameters.keepSourceSpeed == 1 && (r = vRzMg(this.KHkzo / KRdPs.PBzyl, .8, 1.3),
        migOb.WIMds = migOb.WIMds * .9 + r * .1);
        this.fgjbQo();
        game.VOkaD()
    }
    ,
    t.prototype.tIymHp = function() {
        var n = this.pUJzsj();
        if (!n) {
            game.izQtY();
            return
        }
        game.nOwSN();
        var t = n.blockNumber * this.UIdcV % EhvrD
          , i = 5
          , r = Math.abs(t - migOb.toUeH);
        r > i * 2 && r < EhvrD - i * 2 && (migOb.toUeH = t);
        this.MkuKw = (t + this.UIdcV - i) % EhvrD;
        migOb.sOAuCL(n.framesData, t);
        nXmAQ.AuLhQ(n.eventsData, game.kirRk + i);
        this.mVzIg = n.blockNumber
    }
    ,
    t.prototype.fgjbQo = function() {
        chat.mBgsd || chat.WJsGp(!1);
        this.ohUSLV(null)
    }
    ,
    t
}(Stream);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
fLZQH = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.VdypA = new sKaRj,
        t.VdypA.tGdnv = function(n) {
            t.jmgxH(n)
        }
        ,
        t.VdypA.ROCqA = function() {
            n.prototype.elJcW.call(t)
        }
        ,
        t
    }
    return __extends(t, n),
    t.prototype.tONpJy = function() {}
    ,
    t.prototype.uJUbD = function() {
        var t, i, n;
        parameters.edition && parameters.channel && (t = this.mVzIg * this.UIdcV % EhvrD,
        migOb.frame() == t || migOb.frame() - 1 == t) && (this.mVzIg += 1,
        KRdPs.dAuKS || (i = (migOb.frame() + EhvrD - this.UIdcV) % EhvrD,
        n = new StreamBlock,
        n.framesData = migOb.gOAuCL(i, this.UIdcV),
        n.eventsData = nXmAQ.gzFIou(game.kirRk - this.UIdcV, this.UIdcV),
        n.blockNumber = this.mVzIg,
        this.pdvKzp(n)),
        this.BGlUy())
    }
    ,
    t.prototype.BGlUy = function() {
        if (!this.VdypA.isBusy() && parameters.channel && !(this.buffer.length < this.jlAWK)) {
            n.prototype.CxkmE.call(this);
            var t = {
                channel: parameters.channel,
                streamBlocks: this.buffer,
                userMatch: {
                    gameUserId: parameters.author,
                    editionId: parameters.edition,
                    editionStageMatchId: parameters.editionStageMatch,
                    fPS: ~~KRdPs.PBzyl,
                    minute: ~~game.minute
                },
                clientCommentNumber: parameters.liveChat == 1 ? chat.eqDAK : -1
            };
            this.VdypA.Liwbb("/api/stream/set", t, 0);
            this.buffer = []
        }
    }
    ,
    t.prototype.jmgxH = function(t) {
        n.prototype.elJcW.call(this);
        t && chat.xlYAe(t.comments);
        chat.qTpiY()
    }
    ,
    t
}(Stream);
EhvrD = 400;
uQgUi = function() {
    function n() {
        this.WIMds = 1;
        this.memTag = [];
        this.toUeH = 0
    }
    return n.prototype.uJUbD = function() {
        game.GopxG ? (this.toUeH += this.WIMds,
        this.toUeH >= EhvrD && this.WIMds > 0 && (this.toUeH -= EhvrD),
        this.toUeH < 0 && this.WIMds < 0 && (this.toUeH += EhvrD),
        this.zSndk()) : (this.toUeH = game.kirRk % EhvrD,
        this.record());
        this.memTag[(this.frame() + 1) % EhvrD] = ""
    }
    ,
    n.prototype.sCKbNZ = function() {
        this.toUeH = 0;
        t1.Tfugl();
        t2.Tfugl();
        sounds.gAcKe()
    }
    ,
    n.prototype.swxDtl = function() {
        this.toUeH = EhvrD - 1;
        t1.Tfugl();
        t2.Tfugl()
    }
    ,
    n.prototype.gOAuCL = function(n, t) {
        for (var u, i = "", r = !0, f = 0; f < t; f++)
            u = (n + f) % EhvrD,
            i += t1.iyHlH(u, r) + ":",
            i += t2.iyHlH(u, r) + ":",
            i += b.iyHlH(u, r) + "/",
            r = !1;
        return i
    }
    ,
    n.prototype.getTags = function(n, t) {
        for (var r, i = "", u = 0; u < t; u++)
            r = (n + u) % EhvrD,
            this.memTag[r] != "" && this.memTag[r] != null && (i += this.memTag[r]);
        return i.length > 10 && (i = i.substr(0, 10)),
        i
    }
    ,
    n.prototype.frame = function() {
        return ~~this.toUeH
    }
    ,
    n.prototype.addTag = function(n, t) {
        this.memTag[migOb.frame()] += t ? n : n.toLowerCase()
    }
    ,
    n.prototype.sOAuCL = function(n, t) {
        for (var u, f, i = !0, e = n.split("/"), o = e.length - 1, r = 0; r < o; r++)
            u = e[r].split(":"),
            f = (t + r) % EhvrD,
            t1.pZlkX(u[0], f, i),
            t2.pZlkX(u[1], f, i),
            b.pZlkX(u[2], f, i),
            i = !1
    }
    ,
    n.prototype.record = function() {
        t1.record();
        t2.record();
        b.record()
    }
    ,
    n.prototype.zSndk = function() {
        t1.zSndk();
        t2.zSndk();
        b.zSndk()
    }
    ,
    n
}();
Shirt = function() {
    function n(n, t) {
        this.kit = n;
        this.player = t;
        this.pSYLC = ~~(t.YKlsJ * 65 / 150);
        this.width = 384 / 65 * this.player.weight / this.player.ZGXPn();
        this.height = 40 * t.YKlsJ / 150
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        parameters.graphics == 1 ? this.shape.graphics.beginFill(this.kit.nbGwK).drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.shape.graphics.beginStroke("#000").beginFill(this.kit.nbGwK).drawRoundRect(-this.width / 2, -this.height / 2, this.width, this.height, 1);
        switch (this.kit.kfRPE) {
        case 1:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.width / 4);
            this.shape.graphics.moveTo(-this.width / 4, -this.height / 2);
            this.shape.graphics.lineTo(-this.width / 4, this.height / 2);
            this.shape.graphics.moveTo(this.width / 4, -this.height / 2);
            this.shape.graphics.lineTo(this.width / 4, this.height / 2);
            this.shape.graphics.endStroke();
            break;
        case 2:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.height / 6);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 4);
            this.shape.graphics.lineTo(this.width / 2 * .9, -this.height / 4);
            this.shape.graphics.moveTo(-this.width / 2 * .9, 0);
            this.shape.graphics.lineTo(this.width / 2 * .9, 0);
            this.shape.graphics.moveTo(-this.width / 2 * .9, this.height / 4);
            this.shape.graphics.lineTo(this.width / 2 * .9, this.height / 4);
            this.shape.graphics.endStroke();
            break;
        case 3:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.height / 4);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 6);
            this.shape.graphics.lineTo(this.width / 2 * .9, -this.height / 6);
            this.shape.graphics.endStroke();
            break;
        case 4:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.width / 4);
            this.shape.graphics.moveTo(-this.width / 2 * .8, this.height / 2 * .8);
            this.shape.graphics.lineTo(this.width / 2 * .8, -this.height / 2 * .8);
            this.shape.graphics.endStroke();
            break;
        case 5:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent").drawRect(0, -this.height / 2 * .9, this.width / 2 * .9, this.height * .9);
            this.shape.graphics.endFill();
            break;
        case 6:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent").drawRect(-this.width / 4, -this.height / 2 * .9, this.width / 2, this.height * .9);
            this.shape.graphics.endFill();
            break;
        case 8:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent").drawRect(-this.width / 4, -this.height / 2, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(this.width / 4, -this.height / 2, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(-this.width / 2, -this.height / 4, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(0, -this.height / 4, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(-this.width / 4, 0, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(this.width / 4, 0, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(-this.width / 2, this.height / 4, this.width / 4, this.height / 4);
            this.shape.graphics.beginFill(this.kit.nysZn).drawRect(0, this.height / 4, this.width / 4, this.height / 4);
            this.shape.graphics.endFill();
            break;
        case 9:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.width / 4);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 6);
            this.shape.graphics.lineTo(this.width / 2 * .9, -this.height / 6);
            this.shape.graphics.moveTo(0, -this.height / 2 * .9);
            this.shape.graphics.lineTo(0, this.height / 2 * .9);
            this.shape.graphics.endStroke();
            break;
        case 10:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(2);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 3);
            this.shape.graphics.lineTo(0, 0);
            this.shape.graphics.lineTo(this.width / 2 * .9, -this.height / 3);
            this.shape.graphics.endStroke();
            break;
        case 11:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.width / 4);
            this.shape.graphics.moveTo(this.width / 6, -this.height / 2 * .9);
            this.shape.graphics.lineTo(this.width / 6, this.height / 2 * .9);
            this.shape.graphics.endStroke();
            break;
        case 12:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent").drawRect(-this.width / 2 * .9, 0, this.width * .9, this.height / 2 * .9);
            this.shape.graphics.endFill();
            break;
        case 13:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.width / 8);
            this.shape.graphics.moveTo(-this.width * .4, -this.height / 2);
            this.shape.graphics.lineTo(-this.width * .4, this.height / 2);
            this.shape.graphics.moveTo(-this.width * .12, -this.height / 2);
            this.shape.graphics.lineTo(-this.width * .12, this.height / 2);
            this.shape.graphics.moveTo(this.width * .12, -this.height / 2);
            this.shape.graphics.lineTo(this.width * .12, this.height / 2);
            this.shape.graphics.moveTo(this.width * .4, -this.height / 2);
            this.shape.graphics.lineTo(this.width * .4, this.height / 2);
            this.shape.graphics.endStroke();
            break;
        case 14:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent");
            this.shape.graphics.moveTo(-this.width / 2, this.height / 2);
            this.shape.graphics.lineTo(this.width / 2, -this.height / 2);
            this.shape.graphics.lineTo(this.width / 2, this.height / 2);
            this.shape.graphics.endFill();
            break;
        case 15:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.height / 8);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 6 - this.height / 16);
            this.shape.graphics.lineTo(this.width / 2 * .9, -this.height / 6 - this.height / 16);
            this.shape.graphics.endStroke();
            this.shape.graphics.beginStroke(this.kit.ojoDw);
            this.shape.graphics.setStrokeStyle(this.height / 8);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 6 + this.height / 16);
            this.shape.graphics.lineTo(this.width / 2 * .9, -this.height / 6 + this.height / 16);
            break;
        case 16:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent").drawRect(-this.width / 2 + this.width / 3, -this.height / 2 * .9, this.width / 3, this.height * .9);
            this.shape.graphics.endFill();
            this.shape.graphics.beginFill(this.kit.ojoDw).beginStroke("transparent").drawRect(this.width / 2 - this.width / 3, -this.height / 2 * .9, this.width / 3, this.height * .9);
            this.shape.graphics.endFill();
            break;
        case 17:
            this.shape.graphics.beginFill(this.kit.nysZn).beginStroke("transparent").drawRect(-this.width / 2 * .9, -this.height / 2 + this.height / 3, this.width * .9, this.height / 3);
            this.shape.graphics.endFill();
            this.shape.graphics.beginFill(this.kit.ojoDw).beginStroke("transparent").drawRect(-this.width / 2 * .9, this.height / 2 - this.height / 3, this.width * .9, this.height / 3);
            this.shape.graphics.endFill();
            break;
        case 18:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.width / 8);
            this.shape.graphics.moveTo(-this.width * .4 - this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(-this.width * .4 - this.width / 16, this.height / 2 * .9);
            this.shape.graphics.moveTo(-this.width * .12 - this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(-this.width * .12 - this.width / 16, this.height / 2 * .9);
            this.shape.graphics.moveTo(this.width * .12 - this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(this.width * .12 - this.width / 16, this.height / 2 * .9);
            this.shape.graphics.moveTo(this.width * .4 - this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(this.width * .4 - this.width / 16, this.height / 2 * .9);
            this.shape.graphics.endStroke();
            this.shape.graphics.beginStroke(this.kit.ojoDw);
            this.shape.graphics.setStrokeStyle(this.width / 8);
            this.shape.graphics.moveTo(-this.width * .4 + this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(-this.width * .4 + this.width / 16, this.height / 2 * .9);
            this.shape.graphics.moveTo(-this.width * .12 + this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(-this.width * .12 + this.width / 16, this.height / 2 * .9);
            this.shape.graphics.moveTo(this.width * .12 + this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(this.width * .12 + this.width / 16, this.height / 2 * .9);
            this.shape.graphics.moveTo(this.width * .4 + this.width / 16, -this.height / 2 * .9);
            this.shape.graphics.lineTo(this.width * .4 + this.width / 16, this.height / 2 * .9);
            this.shape.graphics.endStroke();
            break;
        case 20:
            this.shape.graphics.beginStroke(this.kit.nysZn);
            this.shape.graphics.setStrokeStyle(this.height / 4);
            this.shape.graphics.moveTo(-this.width / 2 * .9, -this.height / 6);
            this.shape.graphics.lineTo(this.width / 2 * .9, 0);
            this.shape.graphics.endStroke();
            this.shape.graphics.beginStroke(this.kit.ojoDw);
            this.shape.graphics.setStrokeStyle(this.height / 4);
            this.shape.graphics.moveTo(0, -this.height / 6);
            this.shape.graphics.lineTo(this.width / 2 * .9, 0);
            this.shape.graphics.endStroke()
        }
        this.shape.cache(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2)
    }
    ,
    n
}();
Shorts = function() {
    function n(n, t) {
        this.kit = n;
        this.player = t;
        this.pSYLC = ~~(t.YKlsJ * 35 / 150);
        this.width = 384 / 65 * this.player.weight / this.player.ZGXPn();
        this.height = t.YKlsJ / 10
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        parameters.graphics == 1 ? this.shape.graphics.beginFill(this.kit.kbOMz).drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.shape.graphics.beginStroke("#000").beginFill(this.kit.kbOMz).drawRoundRect(-this.width / 2, -this.height / 2, this.width, this.height, 1);
        this.shape.cache(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2)
    }
    ,
    n
}();
Head = function() {
    function n(n) {
        this.player = n;
        this.cx;
        this.cy;
        switch (n.hair) {
        case 1:
            this.color = "#000";
            break;
        case 2:
            this.color = "#550";
            break;
        case 3:
            this.color = "#bb4";
            break;
        case 4:
            this.color = "#a52";
            break;
        case 5:
            switch (n.skin) {
            case 1:
                this.color = "#F0C0C0";
                break;
            case 2:
                this.color = "#760";
                break;
            case 3:
                this.color = "#541"
            }
        }
        this.pSYLC = ~~(qCuzf(n.height) * 1.056);
        this.width = qCuzf(53);
        this.height = qCuzf(n.height) * .42
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        parameters.graphics == 1 ? this.shape.graphics.beginFill(this.color).drawRect(-this.width / 2, -this.height / 2, this.width, this.height) : this.shape.graphics.beginStroke("#000").beginFill(this.color).drawRoundRect(-this.width / 2, -this.height / 2, this.width, this.height, 1);
        this.shape.cache(-this.width / 2 - 1, -this.height / 2 - 1, this.width + 2, this.height + 2)
    }
    ,
    n
}();
Face = function() {
    function n(n) {
        this.p = n;
        this.color = n.UFeev();
        this.pSYLC = ~~(n.YKlsJ * 106 / 150);
        this.width = 552 / 65;
        this.height = n.YKlsJ / 5;
        this.wmdto = this.width / 2
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill(this.color).drawRect(0, -this.height / 2, this.width, this.height);
        this.shape.cache(-1, -this.height / 2 - 1, this.width + 2, this.height + 2)
    }
    ,
    n.prototype.update = function() {
        var n = Math.atan2(this.p.watch.SDHsM - this.p.yAjCz.SDHsM, this.p.watch.dTfhX - this.p.yAjCz.dTfhX);
        view.PIlOD || (n += Math.PI * 1.5,
        n > Math.PI && (n -= Math.PI * 2));
        var i = n * 2.8
          , t = ~~vRzMg(i - this.wmdto, -this.wmdto, this.wmdto)
          , r = ~~vRzMg(i + this.wmdto, -this.wmdto, this.wmdto);
        r > t ? (this.shape.scaleX = (r - t) / this.width,
        this.shape.regX = -t / this.shape.scaleX,
        this.shape.visible = !0) : this.shape.visible = !1
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Player = function(n) {
    function t(t, i, r, u) {
        var o, s, h, f = n.call(this) || this, e, c, l;
        return f.map = new iLfep,
        f.watch = new iLfep,
        f.height = 180,
        f.weight = 75,
        r && (f.id = r.id,
        r.firstName || r.lastName ? (f.name = r.firstName + " " + r.lastName,
        f.lastName = (o = r.lastName) !== null && o !== void 0 ? o : r.firstName) : (r.name = r.name || "FsOgA",
        f.name = r.name,
        f.lastName = r.name.substr(r.sep, r.name.length - r.sep)),
        f.skin = parseInt(r.skin),
        f.hair = parseInt(r.hair),
        f.height = r.height,
        f.weight = r.weight,
        f.place = r.place,
        f.xoGyC = r.xoGyC || 0,
        f.shoe = r.shoe),
        u && (e = 1 + (i.number - 1) * 121 + f.place * 11,
        f.xeoAV = u[e + 1],
        f.ijNhI = u[e + 2],
        f.JZGvO = u[e + 3],
        f.GTzCv = u[e + 4],
        f.lKvLo = u[e + 5],
        f.oYUQQ = u[e + 6],
        f.ftZuv = u[e + 7],
        f.effect = f.JZGvO * .025 + f.ftZuv * .025 + (u[e + 8] || 0),
        f.position = u[e],
        c = (s = u[e + 9]) !== null && s !== void 0 ? s : -game.rules.nASZn.wmdto,
        l = (h = u[e + 10]) !== null && h !== void 0 ? h : 0,
        f.map = new iLfep(c * game.rules.nASZn.width / 1600,l * game.rules.nASZn.height / 1e3)),
        f.ZZPKE = 0,
        f.ftg = 0,
        f.TVKkt = 0,
        f.t = i,
        f.CfNwk = 0,
        f.ydzIE = 0,
        f.YRdsi = 0,
        f.pace = 1,
        f.GtTtd = 1,
        f.angle = 0,
        f.sinAng = 0,
        f.cosAng = 0,
        f.IiBVu = 0,
        f.KSSyt = 0,
        f.QJaFL = !1,
        f.action = 0,
        f.QOeNg = !0,
        f.XoWzU = 0,
        f.VMrII = 0,
        f.KexTp = 0,
        f.bPLuv = 0,
        f.HXLQb = 0,
        f.PhSbf = 0,
        f.statistics = new ZHKkT,
        f.OhMQL = !1,
        f.BIOdF = 1,
        f.memCx = new Int16Array(400),
        f.memCy = new Int16Array(400),
        f.memCz = new Int16Array(400),
        f.vkGbW = new Int16Array(400),
        f.cAVsW = new Int16Array(400),
        f.yfhAQ = null,
        f.AjDvC = 0,
        f.ADhld = 0,
        f.YKlsJ = 40 * f.height / 180,
        f.BfIXD = 1.15 - .1 * f.oYUQQ * .01,
        f.vaGFK = .443 + f.GTzCv * .0003,
        f.height > 180 && (f.vaGFK -= (f.height - 180) * .0005),
        f.weight / f.ZGXPn() > 1.1 && (f.vaGFK -= (f.weight / f.ZGXPn() - 1.1) * .1),
        f.QeJPA = f.vaGFK,
        f.GtTtd = 1,
        f.margin = 10 + f.oYUQQ * .05,
        f.hptUp = f.map.SDHsM < -350 ? 100 : 0,
        f.XoWzU = 0,
        f.KexTp = 0,
        f.bPLuv = 0,
        f.HXLQb = 0,
        f.PhSbf = 0,
        game.WDTge && parseInt(f.id) == parameters.author && (game.YUWPz = f,
        game.LZXFT = f.t),
        f
    }
    return __extends(t, n),
    t.prototype.ZGXPn = function() {
        return (this.height - 150) * .75 + 50
    }
    ,
    t.prototype.qajbh = function() {
        return this.t.id.toString() + "-" + this.place.toString()
    }
    ,
    t.prototype.tsAyM = function() {
        return this.id != "0" ? this.id.toString() : this.position.toString() + "-" + this.xoGyC.toString()
    }
    ,
    t.prototype.PqKIS = function() {
        return game.YUWPz != null ? game.YUWPz == this : this.t == game.LZXFT && this.t.p[0] != this
    }
    ,
    t.prototype.qstAW = function() {
        return this.KlBDy != null ? !this.KlBDy.isFsOgA : !1
    }
    ,
    t.prototype.ociHJ = function() {
        if (this.t.RCcbW.KlBDy == null)
            return !0;
        for (var n in this.t.RCcbW.KlBDy)
            if (this.t.RCcbW.KlBDy[n].player == this)
                return !1;
        return !0
    }
    ,
    t.prototype.ZpfgI = function() {
        game.xbRtm && this.t != game.LZXFT && (this.GtTtd = vRzMg(.075 * AMdME() - (XZKec ? .075 : 0) + .7, 0, 1));
        game.WDTge && this != game.YUWPz && (this.GtTtd = vRzMg(.075 * AMdME() - (XZKec ? .075 : 0) + .7, 0, 1))
    }
    ,
    t.prototype.ZwOsB = function() {
        this.BOKEB();
        yxdsY.removeChild(this.hand2.shape);
        yxdsY.removeChild(this.head.shape);
        yxdsY.removeChild(this.shirt.shape);
        yxdsY.removeChild(this.shorts.shape);
        yxdsY.removeChild(this.shoe1.shape);
        yxdsY.removeChild(this.shoe2.shape);
        yxdsY.removeChild(this.face.shape);
        yxdsY.removeChild(this.hand1.shape)
    }
    ,
    t.prototype.cVDad = function() {
        n.prototype.cVDad.call(this);
        this.QOeNg && ((this == this.t.IXdhI || game.GopxG) && this.face.update(),
        this.umxdc());
        game.tcjdw || this.AjDvC > 100 ? this.AQtsE() : this.KTHZK();
        this.draw()
    }
    ,
    t.prototype.uJUbD = function() {
        this.AjDvC = this.wapWW(b);
        this.yAjCz.hzrxR === 0 && (this.shoe1.uJUbD(),
        this.shoe2.uJUbD());
        game.efjMJ && game.CnlZk && (this.qsuWa || (this.tXrFF(),
        game.XfRzc ? this.ktYny() : game.tcjdw && this.eLccA()),
        this.AjDvC < 900 && this.ZUgse() && this.KrGdu(),
        this.yAjCz.SDHsM += this.VmddP.SDHsM,
        this.yAjCz.dTfhX += this.VmddP.dTfhX,
        --this.WZXDL > -1 && this.VmddP.add(this.MgmLe),
        this.yAjCz.hzrxR > 0 ? (this.yAjCz.hzrxR += this.VmddP.hzrxR,
        this.VmddP.hzrxR -= .1,
        this.yAjCz.hzrxR < 0 && (this.yAjCz.hzrxR = 0,
        this.VmddP.hzrxR = 0)) : this.tAtiQ || (this.qsuWa ? (this.VmddP.SDHsM *= .8 + PYgUk.Ctbzs * .15,
        this.VmddP.dTfhX *= .8 + PYgUk.Ctbzs * .15) : (this.VmddP.SDHsM *= .7 + this.pace * .16,
        this.VmddP.dTfhX *= .7 + this.pace * .16,
        !this.QJaFL && this.TVKkt < 0 && this.move())),
        this.ftg += 1);
        this.BIOdF > 1 && !uGAgS.iBofhR(this.BIOdF) && (this.BIOdF += 1)
    }
    ,
    t.prototype.displayName = function() {
        return this.xoGyC ? this.xoGyC.toString() + " " + this.name : this.name
    }
    ,
    t.prototype.draw = function() {
        this.QOeNg ? (this.head.shape.x = this.pfnbt.SDHsM,
        this.head.shape.y = this.pfnbt.dTfhX - this.head.pSYLC,
        this.shirt.shape.x = this.pfnbt.SDHsM,
        this.shirt.shape.y = this.pfnbt.dTfhX - this.shirt.pSYLC,
        this.shorts.shape.x = this.pfnbt.SDHsM,
        this.shorts.shape.y = this.pfnbt.dTfhX - this.shorts.pSYLC,
        this.face.shape.x = this.pfnbt.SDHsM,
        this.face.shape.y = this.pfnbt.dTfhX - this.face.pSYLC) : uGAgS.sxcndx(this);
        (this.QOeNg || this.tAtiQ) && (this.shoe1.draw(),
        this.shoe2.draw())
    }
    ,
    t.prototype.IoQbi = function() {
        var n, t;
        (this.AwDPO(),
        game.GopxG) || (this != this.t.IXdhI && this.QOeNg && this.face.update(),
        b.isHigh() ? this.ADhld = this.yAjCz.distXY(b.ppzPB) : (n = vRzMg(50 - b.LWJMi, 10, 50),
        this.ADhld = DsVVx(b.yAjCz.SDHsM + b.VmddP.SDHsM * n - this.yAjCz.SDHsM, b.yAjCz.dTfhX + b.VmddP.dTfhX * n - this.yAjCz.dTfhX)),
        this.PhSbf > 0 && (this.PhSbf -= 1),
        this.TVKkt -= 10,
        this.TVKkt < 10 && !this.QOeNg && game.CnlZk && this.getUp(),
        this.vaGFK -= (1 - this.lKvLo * .01) * 1e-5 * this.VmddP.sNbSL(),
        this == game.YUWPz ? (this.statistics.distance += this.VmddP.xJwON() * 2.5,
        this.KexTp -= 10,
        this.mZoUU(),
        game.XfRzc && (this.t.pHOXU ? this.t.kkBYG(this.yAjCz.SDHsM - 75 * this.t.dir) && !this.qsuWa && this.UmftV(-1) : (this.OijAt() || this.pZvik()) && this.UmftV(1)),
        !KRdPs.dAuKS && game.XfRzc && (this.ZnunN() && (this.bPLuv += 1),
        this.bPLuv = this.bPLuv * .94,
        this.bPLuv > 11 && (this.UmftV(-1),
        this.bPLuv = 9),
        this.fZwjA() && b.vSdIU != this && this.t.IXdhI != this && (this.HXLQb += 1),
        this.HXLQb = this.HXLQb * .93,
        t = !this.t.pHOXU && this.gBhYY(),
        this.HXLQb > (t ? 10 : 11) && (this.UmftV(t ? -5 : -2),
        this.HXLQb = 8,
        EjGIl.blink(this.DCsAY()),
        nXmAQ.HflRS(new Events.qAaQu(game.kirRk,this.DCsAY()))))) : this.cpu == null || this.qstAW() || this.cpu.IoQbi())
    }
    ,
    t.prototype.DCsAY = function() {
        return new iLfep((this.map.SDHsM * this.t.dir + b.yAjCz.SDHsM) * .5,(this.map.dTfhX * 2 * this.t.dir + b.yAjCz.dTfhX) * .4).deSCM(pitch)
    }
    ,
    t.prototype.fZwjA = function() {
        return this.yAjCz.wapWW(this.DCsAY()) > 2e5
    }
    ,
    t.prototype.gBhYY = function() {
        return this.wapWW(this.t.kAqMF()) > this.DCsAY().wapWW(this.t.kAqMF().yAjCz) * 4
    }
    ,
    t.prototype.pZvik = function() {
        return b.vSdIU != null && b.vSdIU.t != this.t && this.AjDvC < 1e4 && this.wapWW(this.t.kAqMF()) < b.wapWW(this.t.kAqMF()) && btovy(b.VmddP.angXY(), b.angTo(this.t.kAqMF())) > Math.PI * .5
    }
    ,
    t.prototype.OijAt = function() {
        return this.t.risk < .4 && this.AjDvC < 1e3 && b.yAjCz.hzrxR < 40 && this.VmddP.SDHsM * this.VmddP.SDHsM + this.VmddP.dTfhX * this.VmddP.dTfhX > this.VnCOO() * .5
    }
    ,
    t.prototype.move = function() {
        this.qstAW() ? (this.xQrLn(),
        this.yAjCz.deSCM(pitch, 50)) : this.cpu.move()
    }
    ,
    t.prototype.ePkcc = function(n) {
        if (game.CnlZk) {
            if (isNaN(n))
                return;
            this.angle = n;
            this.cosAng = Math.cos(this.angle);
            this.sinAng = Math.sin(this.angle);
            KRdPs.dAuKS && this.qstAW() ? (this.VmddP.SDHsM += this.cosAng * this.tGTrX() * .5,
            this.VmddP.dTfhX += this.sinAng * this.tGTrX() * .5) : (this.VmddP.SDHsM += this.cosAng * this.tGTrX(),
            this.VmddP.dTfhX += this.sinAng * this.tGTrX())
        }
    }
    ,
    t.prototype.tGTrX = function() {
        return this.vaGFK * this.GtTtd
    }
    ,
    t.prototype.chSCa = function(n, t, i) {
        isNaN(n) || (this.angle = n,
        this.cosAng = t,
        this.sinAng = i,
        this.VmddP.SDHsM += t * this.vaGFK * this.GtTtd,
        this.VmddP.dTfhX += i * this.vaGFK * this.GtTtd)
    }
    ,
    t.prototype.VnCOO = function() {
        return this.vaGFK * 6.14 * this.GtTtd
    }
    ,
    t.prototype.xQrLn = function() {
        var n, t, r, i;
        this.pace = .7;
        (this.KlBDy.keyRun || this.KlBDy.hasbar()) && (this.pace = 1);
        this.KlBDy.hasdir() && (b.vSdIU == this ? this.cpu.rgRGf = 0 : (this.cpu.rgRGf = this.cpu.fvmojB(),
        n = b.aNSZS(),
        this.cpu.rgRGf > n - 3 && n > 3 && (this.cpu.rgRGf = n - 3)),
        b.yAjCz.hzrxR > this.YKlsJ ? (t = this.yAjCz.angTo(b.ppzPB),
        this.cpu.mRLUVt() && this.jump()) : t = this.yAjCz.angTo(b.UQqJm(this.cpu.rgRGf)),
        this.angle = this.KlBDy.XbkLy,
        this.margin = this.KlBDy.hasbar() ? 10 + this.oYUQQ * .05 : 10 - this.oYUQQ * .03,
        r = btovy(this.angle, t),
        this.kOoZT(r) && (this.angle = t),
        this.ePkcc(this.angle));
        this.KlBDy.JArJy && this.AjDvC < 4e4 && this.mciCQ() && (this.slide(),
        this.KlBDy.AikYq());
        i = this.AjDvC;
        b.isHigh() && (i = this.yAjCz.wapWW(b.ppzPB));
        this.KlBDy.KyTUK && this.KlBDy.YqEnk && (this.fall(!0),
        this.CfNwk < 144 && (this.CfNwk < Math.pow(Math.random() * 3, 2) ? game.ABsAC(new Foul(this.opn,this,this.yAjCz), !0) : game.ABsAC(new Foul(this,this.opn,this.opn.yAjCz), !0)));
        this.t.IXdhI != this && this.KlBDy.KyTUK && this != this.t.p[0] && i > 2500 && (this.call(),
        this.KlBDy.AikYq());
        Math.random() > .99 - this.statistics.TtWmN * .04 && this.opn != null && (this.opn.opn = this,
        this.opn.cpu.mark())
    }
    ,
    t.prototype.kOoZT = function(n) {
        return b.LWJMi < 10 && b.vSdIU != this ? !1 : game.BNNtp(this) ? this.AjDvC > 1e4 || b.OEDJp != null ? !1 : b.vSdIU == this && b.dSldC == 0 ? !0 : this.FlOni() ? n < Math.PI * .15 ? !0 : this.KlBDy.hasbar() ? !0 : this.AjDvC < 2500 && game.XfRzc && n < Math.PI * .3 ? !0 : this.AjDvC < 625 && game.XfRzc ? !0 : !1 : !1 : !1
    }
    ,
    t.prototype.eLccA = function() {
        game.hoywu == null || b.yAjCz.hzrxR > b.radius || game.CnlZk && (game.hoywu != this && this.IIjnb(30),
        game.hoywu.t != this.t && this.IIjnb(game.rules.cayfO))
    }
    ,
    t.prototype.IIjnb = function(n) {
        if (this.AjDvC < n * n) {
            this.yAjCz.deSCM(pitch, -5);
            var t = b.yAjCz.angTo(this.yAjCz);
            this.yAjCz = b.yAjCz.SPPZQ(t, n, !0)
        }
    }
    ,
    t.prototype.jump = function() {
        if (!this.qsuWa && !game.tcjdw && !(this.yAjCz.hzrxR > 0))
            if (this.mpRKT(),
            this.yAjCz.hzrxR = 1,
            this.MgmLe.reset(),
            game.XfRzc) {
                var t = vRzMg(this.cpu.fCESFo(), 5, 25)
                  , i = b.UQqJm(t)
                  , n = new Vector((i.SDHsM - this.yAjCz.SDHsM) / t,(i.dTfhX - this.yAjCz.dTfhX) / t,(i.hzrxR - this.YKlsJ) / t)
                  , r = n.value();
                n.TfgYn(2 / r);
                this.VmddP.hzrxR = vRzMg(n.hzrxR, 0, 2);
                this.VmddP.SDHsM = this.VmddP.SDHsM * .1 + n.SDHsM * .9;
                this.VmddP.dTfhX = this.VmddP.dTfhX * .1 + n.dTfhX * .9
            } else
                this.VmddP.hzrxR = 2
    }
    ,
    t.prototype.fall = function(n) {
        if (this.QOeNg) {
            this.zbNuO(1);
            this.VmddP.hzrxR += Math.random() * .5;
            this.yAjCz.hzrxR += 10;
            this.TVKkt = n ? 100 + Math.random() * 100 : 10 + Math.random() * 40;
            this.gzRUq();
            var t = 10 + 20 * this.FIBqE;
            this.OnbUJ(t)
        }
    }
    ,
    t.prototype.qoqWs = function() {
        if (this.QOeNg) {
            this.zbNuO(4);
            this.VmddP.SDHsM = (this.VmddP.SDHsM + this.cosAng) * .5;
            this.VmddP.dTfhX = (this.VmddP.dTfhX + this.sinAng) * .5;
            this.MgmLe.SDHsM = this.cosAng * .1;
            this.MgmLe.dTfhX = this.sinAng * .1;
            this.WZXDL = 5;
            this.TVKkt = 20 + Math.random() * 20;
            this.gzRUq();
            var n = 600 + 20 * this.FIBqE;
            this.OnbUJ(n)
        }
    }
    ,
    t.prototype.stretch = function() {
        if (this.QOeNg) {
            this.zbNuO(5);
            this.VmddP.SDHsM = this.VmddP.SDHsM * .9 + this.cosAng * .1;
            this.VmddP.dTfhX = this.VmddP.dTfhX * .9 + this.sinAng * .1;
            this.VmddP.hzrxR = .7;
            this.yAjCz.hzrxR = 10;
            this.TVKkt = 20 + Math.random() * 5;
            this.gzRUq();
            var n = 800 + 20 * this.FIBqE;
            this.OnbUJ(n)
        }
    }
    ,
    t.prototype.gzRUq = function() {
        this.FIBqE = ~~((8 + Math.atan2(-this.VmddP.dTfhX, -this.VmddP.SDHsM) / Math.PI * 4) % 8)
    }
    ,
    t.prototype.getUp = function() {
        if (this.tAtiQ && Math.random() > .9) {
            this.zbNuO(0);
            this.fall(!0);
            return
        }
        this.zbNuO(0);
        this.head.shape.rotation = 0;
        this.face.shape.rotation = 0;
        this.shirt.shape.rotation = 0;
        this.shorts.shape.rotation = 0;
        this.shoe1.shape.rotation = 0;
        this.shoe2.shape.rotation = 0;
        this.hand1.shape.rotation = 0;
        this.hand2.shape.rotation = 0;
        this.Hozxs(1)
    }
    ,
    t.prototype.Hozxs = function(n) {
        this.hand1.shape.visible = !1;
        this.hand2.shape.visible = !1;
        this.BIOdF = ~~n
    }
    ,
    t.prototype.OnbUJ = function(n) {
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !0;
        this.BIOdF = ~~n
    }
    ,
    t.prototype.slide = function() {
        var i, n, r, u, t;
        if (game.rules.DLgLG && this.QOeNg) {
            if (i = 1 + this.ijNhI * .01,
            n = b.UQqJm(20),
            this.qstAW() && (r = this.yAjCz.SPPZQ(this.KlBDy.XbkLy, 30),
            n = new iLfep((r.SDHsM + n.SDHsM) / 2,(r.dTfhX + n.dTfhX) / 2,n.hzrxR)),
            u = this.yAjCz.angTo(n),
            this.VmddP.SDHsM = this.VmddP.SDHsM * .5 + Math.cos(u) * i,
            this.VmddP.dTfhX = this.VmddP.dTfhX * .5 + Math.sin(u) * i,
            this.gzRUq(),
            n.hzrxR < 10)
                this.VmddP.hzrxR = .7,
                this.yAjCz.hzrxR = 10,
                this.TVKkt = 50,
                t = 400 + 20 * this.FIBqE,
                this.OnbUJ(t),
                this.zbNuO(2);
            else {
                if (b.LWJMi < 40)
                    return;
                this.VmddP.hzrxR = 1.3;
                this.yAjCz.hzrxR += 5;
                this.TVKkt = ~~(70 - this.ijNhI * .2);
                t = 10 + 20 * this.FIBqE;
                this.OnbUJ(t);
                this.zbNuO(3)
            }
            this.hand1.shape.visible = !0;
            this.hand2.shape.visible = !0
        }
    }
    ,
    t.prototype.mciCQ = function() {
        var n = b.UQqJm(20), t;
        return n.hzrxR > 10 ? !1 : (t = this.yAjCz.SPPZQ(this.KlBDy.XbkLy, 30),
        n.wapWW(t) < n.wapWW(this.yAjCz) && (b.wgicf() > this.VnCOO() * 2 || this.t.opn.IXdhI.AjDvC < this.AjDvC * (this.t.pHOXU ? .8 : 1.5)))
    }
    ,
    t.prototype.tXrFF = function() {
        var r, n, t, i;
        ++this.YRdsi > 10 && (this.YRdsi = 0);
        this.opn == null ? this.opn = this.t.opn.p[this.YRdsi] : (r = this.t.opn.p[this.YRdsi],
        r != null && (n = this.wapWW(r),
        t = this.wapWW(this.opn),
        n <= t ? (this.opn = r,
        this.CfNwk = n) : this.CfNwk = t));
        this.mate == null ? this.mate = this.t.AxvNR : (i = this.t.p[this.YRdsi],
        i != this && i != null && (n = this.wapWW(i),
        t = this.wapWW(this.mate),
        n <= t ? (this.mate = i,
        this.ydzIE = n) : this.ydzIE = t))
    }
    ,
    t.prototype.ktYny = function() {
        var n;
        if (this.opn != null && (this.CfNwk = this.wapWW(this.opn),
        this.CfNwk < 100)) {
            if (this.QOeNg && this.opn.QOeNg) {
                var t = this.yAjCz.angTo(this.opn.yAjCz) + .5 - Math.random()
                  , i = Math.cos(t)
                  , r = Math.sin(t)
                  , u = this.CfNwk < 25 ? 1 : .5;
                this.yAjCz.SDHsM -= i * u;
                this.yAjCz.dTfhX -= r * u;
                (this.weight + Math.random() * 20 > this.opn.weight + Math.random() * 20 || this.AvZos) && (this.opn.MgmLe.SDHsM = i * .5,
                this.opn.MgmLe.dTfhX = r * .5,
                this.opn.WZXDL = this.opn.yAjCz.hzrxR > 0 ? 2 : ~~(1 + Math.random() * 4))
            }
            (this.opn.ftg < 50 || this.AvZos) && !this.qsuWa && (this.opn.ftg = -~~(Math.random() * this.ijNhI * .1),
            this.opn.TVKkt = -~~(this.opn.ftg * Math.random()));
            n = this.qstAW() ? this.KlBDy.hasbar() ? .95 : .99 : .98;
            this.AvZos && (n = .95);
            this.opn.AvZos && (n = 1);
            this.t.bKxNc().isIn(b.yAjCz) && (n = (1 + n) * .5);
            Math.random() > n && this.AjDvC < 2500 && (Math.random() > .6 ? this.opn.fall(!0) : this.opn.qoqWs(),
            game.vRtPS(this))
        }
    }
    ,
    t.prototype.fNLRe = function() {
        return b.LWJMi > 40 - this.oYUQQ * .2 || b.vSdIU != null && b.vSdIU.t == this.t
    }
    ,
    t.prototype.DuPSN = function() {
        return game.CnlZk ? game.paeHS() && b.VmddP.xJwON() > 0 && this.t.p[0] != this ? !1 : this.qsuWa ? !1 : game.BNNtp(this) ? this == this.t.p[0] && this.t.bKxNc().isIn(b.yAjCz) ? !0 : this.AvZos || this.UfcTx ? b.vSdIU != this : !0 : !1 : !1
    }
    ,
    t.prototype.FlOni = function() {
        return this.QOeNg && b.vSdIU != null && b.vSdIU.t == this.t.opn && b.LWJMi < (100 - this.ijNhI) * Math.random() ? !1 : b.vSdIU == this && b.LWJMi < 5 ? !1 : this.ftg < 0 && this.QOeNg ? !1 : !this.tAtiQ
    }
    ,
    t.prototype.FLDsZ = function() {
        if (this.ftg < 0)
            return !1;
        var n = b.vSdIU == this && b.dSldC == 0 ? .5 : 1;
        return b.LWJMi < (25 - this.oYUQQ * .1) * n ? !1 : b.VmddP.value() < 5 + b.LWJMi * .025 + this.oYUQQ * .025 + Math.random() ? !0 : !1
    }
    ,
    t.prototype.imjUh = function() {
        return b.yAjCz.hzrxR < this.YKlsJ * .5 + this.oYUQQ * .1
    }
    ,
    t.prototype.pjBug = function() {
        if (this.AjDvC < 49 && game.BNNtp(this)) {
            var n = this.yAjCz.angTo(b.yAjCz);
            b.yAjCz.SDHsM += Math.cos(n) * 2;
            b.yAjCz.dTfhX += Math.sin(n) * 2
        }
    }
    ,
    t.prototype.TZmcV = function() {
        return this.KlBDy != null ? this.KlBDy.XbkLy : this.cpu.TZmcV
    }
    ,
    t.prototype.KrGdu = function() {
        var n, t;
        if (this.DuPSN() && (game.tcjdw || this.pjBug(),
        this.FlOni())) {
            if (this.t.opn.RCcbW.LCzzj > 20 && (this.t.opn.RCcbW.LCzzj = 20),
            game.OUSfd()) {
                this.qstAW() && this.KlBDy.AikYq();
                n = new Vector(this.t.dir,0,0);
                b.move(n, this, 4);
                t = this.t.Rlfmq(b.yAjCz, this);
                this.t.RCcbW.jDFxl(t);
                return
            }
            if (b.vSdIU != null && b.vSdIU.t != this.t && b.LWJMi < 50 && this.ftg > 0 && b.vSdIU.QOeNg && (b.vSdIU.ftg = -this.ijNhI * Math.random()),
            this.t.RCcbW.jDFxl(this),
            !this.FLDsZ()) {
                this.frixP();
                return
            }
            if (this.AvZos) {
                this.QErfR();
                return
            }
            if ((this.Sbzcw() || b.LWJMi < 50 - this.ijNhI * .1) && (this.AvZos || b.vSdIU != null && b.vSdIU.t != this.t)) {
                this.QErfR();
                return
            }
            if (this.qstAW() ? this.pPass = this.RaaaW() : this.cpu != null && (this.pPass = this.cpu.fwKhG(this.WpVMC())),
            this.vJlwQ()) {
                this.BzCOS();
                return
            }
            if (this.XVyLM() && this.imjUh()) {
                this.shoot();
                return
            }
            if (this.qstAW()) {
                if (this.yAjCz.SDHsM * this.t.dir > pitch.wmdto * .3 && Math.abs(this.yAjCz.dTfhX) > pitch.FpLNn * .4 && this.pBxjH() && this.GBwQM()) {
                    this.cross();
                    return
                }
            } else if (this.yAjCz.SDHsM * this.t.dir > pitch.wmdto * (.3 + Math.random() * .5) && Math.abs(this.yAjCz.dTfhX) > pitch.FpLNn * .4 && this.pBxjH() && Math.random() > .2) {
                this.cross();
                return
            }
            if (!this.VmAVF() || !this.imjUh() || this.pPass == this || !this.fNLRe() || !this.pass(this.pPass)) {
                if ((b.VmddP.sNbSL() == 0 || sgn(b.VmddP.SDHsM) == -this.t.dir) && (this.cpu.cZGqTs(),
                b.uincg += 20,
                b.uincg > 400 && !this.qstAW() && this.XZRoC()),
                b.VmddP.value() > 4 + this.oYUQQ * .02 + Math.random() || b.yAjCz.hzrxR > this.YKlsJ * .5 + this.oYUQQ * .2) {
                    this.WUMDX();
                    return
                }
                this.ajAcS()
            }
        }
    }
    ,
    t.prototype.GBwQM = function() {
        if (!this.KlBDy.pass() || this.KlBDy.power < 30)
            return !1;
        var n = this.KlBDy.XbkLy
          , t = b.yAjCz.angTo(this.t.IXBtu().oROkp);
        return btovy(n, t) < Math.PI / 4
    }
    ,
    t.prototype.WpVMC = function() {
        return game.hoywu == this
    }
    ,
    t.prototype.RaaaW = function() {
        var r = this, u, n = this.KlBDy.XbkLy, t = this.yAjCz.clone(), i;
        return isNaN(n) && (n = Math.atan2(this.VmddP.dTfhX, this.VmddP.SDHsM)),
        isNaN(n) || (t.SDHsM += Math.cos(n) * this.KlBDy.power * 10,
        t.dTfhX += Math.sin(n) * this.KlBDy.power * 10),
        i = 5e3,
        this.t.p.forEach(function(f) {
            var e = f.yAjCz.distXY(t)
              , o = r.angTo(f);
            e += btovy(o, n) * 200;
            f != r && e < i && (i = e,
            u = f)
        }),
        u
    }
    ,
    t.prototype.vJlwQ = function() {
        return this.EwbCb ? !0 : b.yAjCz.hzrxR < this.YKlsJ * .8 + this.yAjCz.hzrxR ? !1 : this.Sbzcw() ? !0 : this.qstAW() ? this.KlBDy.hasbar() : this.pPass != this && this.pPass.aRxZw() < b.VmddP.xJwON() * 200 ? !0 : this.mYqQp()
    }
    ,
    t.prototype.mYqQp = function() {
        if (this.qstAW())
            return this.KlBDy.shoot();
        if (this.t.snoIG(b.yAjCz) < 160 + b.VmddP.xJwON() * 10)
            return !0;
        var n = 3 + Math.random() * 2;
        return (this.t.pHOXU || (n += 2),
        this.t.cover < n) ? !0 : !1
    }
    ,
    t.prototype.XVyLM = function() {
        return this.qstAW() ? this.KlBDy.shoot() : this.cpu.XVyLM()
    }
    ,
    t.prototype.Lqxpc = function() {
        var n = this;
        this.qdKyK = [];
        pitch.UBuyH.forEach(function(t, i) {
            n.qdKyK[i] = new umoAS(n,t,1)
        })
    }
    ,
    t.prototype.VmAVF = function() {
        return this.qstAW() ? this.KlBDy.pass() : this.pPass != this
    }
    ,
    t.prototype.ntQvDD = function() {
        return b.LWJMi < this.cpu.Hfnzg || this.ftg < -5 && this.QOeNg
    }
    ,
    t.prototype.frixP = function() {
        var i, n, t, r;
        b.vSdIU != this && (b.LWJMi < 50 ? speaker.comment(8, this) : speaker.comment(9, this),
        b.LWJMi < 30 && Math.random() > .8 && this != this.t.p[0] ? (i = b.VmddP.angXY() + Math.PI * (.2 - Math.random() * .4),
        n = b.VmddP.value() * .9 * Math.random() * .1) : (i = this.yAjCz.angTo(b.yAjCz) + Math.PI * (.5 - Math.random()),
        n = Math.random() + Math.pow(b.VmddP.value() * Math.random(), .8)),
        t = new Vector,
        t.set(i, Math.PI * (1 - Math.random() * 2), n),
        t.SDHsM += this.VmddP.SDHsM,
        t.dTfhX += this.VmddP.dTfhX,
        b.VmddP.reset(),
        b.move(t, this, 5, 4),
        n > 3 + Math.random() * 5 && game.XfRzc && this.qoqWs(),
        b.vSdIU != this && game.XfRzc && (b.eEnBR = null),
        r = (.02 + n * .1) * (1 - min(t1.cover, t2.cover) * .15),
        r > .2 && sounds.sound(1, r - .1),
        this.t.pHOXU = !0,
        this.t.opn.pHOXU = !0,
        this.t.RCcbW.LCzzj = 10,
        this.t.opn.RCcbW.LCzzj = 10)
    }
    ,
    t.prototype.WUMDX = function() {
        var n = this.yAjCz.angTo(b.yAjCz)
          , t = b.VmddP.xJwON() * .05 + Math.random() * .2
          , i = this.t.pHOXU
          , r = new Vector(this.VmddP.SDHsM * 1.1 + Math.cos(n) * t,this.VmddP.dTfhX * 1.1 + Math.sin(n) * t,Math.random() * .5 - b.yAjCz.hzrxR * .02 + this.VmddP.hzrxR);
        b.VmddP.reset();
        b.move(r, this, 0, 4);
        i == !1 && this.t.pHOXU ? speaker.comment(23, this) : speaker.comment(1, this);
        this.ftg = -Math.random() * 5
    }
    ,
    t.prototype.ajAcS = function() {
        var n, u, f, e, t;
        if (!game.tcjdw && !(this.yAjCz.hzrxR > 0)) {
            if (n = this.qstAW() ? this.KlBDy.XbkLy : this.cpu.bmSylv(),
            u = this.t.pHOXU,
            isNaN(n))
                b.move(new Vector, this, 0, 4);
            else {
                var i = this.VmddP.xJwON()
                  , o = vRzMg(i / this.VnCOO(), .7, 1)
                  , r = this.VnCOO() * (1 * .05 + (o + .15) * (this.pace + .15) * .95) * this.BfIXD / this.GtTtd;
                btovy(n, this.angle) > Math.PI * .75 && (f = Math.cos(n),
                e = Math.sin(n),
                b.yAjCz.SDHsM += f * 2,
                b.yAjCz.dTfhX += e * 2);
                r < i * 1.2 && (r = i * 1.2);
                t = new Vector;
                t.set(n + .1 - Math.random() * .2, .05 + Math.random() * .1 - b.yAjCz.hzrxR * .01, r);
                Math.abs(b.yAjCz.dTfhX) > pitch.FpLNn - 5 && (t.dTfhX -= .1 * sgn(b.yAjCz.dTfhX));
                b.move(t, this, 0, 4);
                this.VmddP.SDHsM *= .9;
                this.VmddP.dTfhX *= .9
            }
            u == !1 && this.t.pHOXU ? speaker.comment(23, this) : this.oXYOg() ? speaker.comment(3, this) : this.VEhyj() ? speaker.comment(2, this) : speaker.comment(1, this);
            b.eEnBR = this.t;
            this.qstAW() && (this.t.RCcbW.LCzzj = 60);
            this.meAex = this.opn;
            this.OhMQL = this.HIzpT()
        }
    }
    ,
    t.prototype.VEhyj = function() {
        return !this.HIzpT() && this.CfNwk < 2500
    }
    ,
    t.prototype.oXYOg = function() {
        return this.opn == this.meAex && this.HIzpT() && !this.OhMQL
    }
    ,
    t.prototype.pass = function(n) {
        var e, u, h, s, f, r, c;
        if (this.Sbzcw() && b.vSdIU != this || n == this)
            return !1;
        e = n.aRxZw() * .6 + Math.pow(Math.abs(n.yAjCz.SDHsM - b.yAjCz.SDHsM), .94);
        u = 50 + vRzMg(e, 0, pitch.wmdto) * this.pPass.VnCOO() * .11;
        u = u * pitch.width / 1600;
        h = this.qstAW() ? this.KlBDy.alMDF() ? new iLfep(n.yAjCz.SDHsM + this.t.dir * u,n.yAjCz.dTfhX,0) : new iLfep(n.yAjCz.SDHsM,n.yAjCz.dTfhX,0) : this.cpu.bHmDqI(n.yAjCz, u);
        var t = h.clone().deSCM(pitch, -10)
          , i = this.yAjCz.distXY(t)
          , l = (e + i) / 2
          , o = i > 1e3 + Math.random() * 500 && this.t.kitST() || this.t.opn.sGhEI(b.yAjCz, t);
        return this.qstAW() && (o = this.KlBDy.hPass),
        o && (t = new iLfep((t.SDHsM * 3 + n.yAjCz.SDHsM) / 4,(t.dTfhX * 3 + n.yAjCz.dTfhX) / 4)),
        s = this.yAjCz.angTo(t),
        r = new Vector,
        o ? (f = vRzMg(4.5 + i * .006, 3, 9),
        c = Math.PI * (.25 + Math.random() * .02 - i * .00015),
        r.set(s, vRzMg(c, Math.PI * .15, Math.PI * .25), f),
        b.move(r, this, 4)) : (f = vRzMg(2.5 + i * .015 * this.pPass.VnCOO() * .4, 3, 9),
        r.JfORt(s, f),
        r.hzrxR = .5 - b.yAjCz.hzrxR * .1 + Math.random() * .3 + i * .002,
        b.move(r, this, 4)),
        Math.abs(t.dTfhX) > pitch.FpLNn * .9 && (b.VmddP.dTfhX = b.VmddP.dTfhX * .9 - sgn(t.dTfhX) * .2),
        Math.abs(t.dTfhX) > pitch.FpLNn * .95 && (b.VmddP.dTfhX = b.VmddP.dTfhX * .9 - sgn(t.dTfhX) * .2),
        b.igvTj(this.angle, i, this),
        this.qstAW() && this.KlBDy.AikYq(),
        this.t.RCcbW.jDFxl(n),
        this.t.RCcbW.LCzzj = 20 + l / b.VmddP.xJwON() * .5,
        n.cpu.JdlBS = Math.random() > .5,
        n.mpRKT(),
        b.eEnBR = this.t,
        this.KRcLW(),
        this.WkYeV(),
        this.t.kkBYG(n.yAjCz.SDHsM - this.t.dir * 40) && this.t.opn.call(),
        !0
    }
    ,
    t.prototype.UmftV = function(n) {
        this.KexTp = 50;
        this.XoWzU += n;
        game.GJQCN && (this.VMrII += n)
    }
    ,
    t.prototype.mZoUU = function() {
        if (!(this.KexTp > 0) && (b.vSdIU != this || !game.XfRzc || b.OEDJp != null) && ~~this.XoWzU != 0) {
            if (this == game.YUWPz && this.hptUp != DPZaw.jiFyl)
                return;
            this.hptUp += ~~this.XoWzU;
            this == game.YUWPz && (nXmAQ.HflRS(new Events.YfAwS(game.kirRk,~~this.XoWzU,this.yAjCz)),
            nXmAQ.HflRS(new Events.Bamyu(game.kirRk,~~game.minute,game.half,game.YUWPz.statistics.rFMkh(),game.YUWPz.statistics.AGweP,game.YUWPz.hptUp,t1.LTpCB,t2.LTpCB)),
            parameters.score == 1 && new Score(this.yAjCz,~~this.XoWzU),
            game.QYYHD(),
            DPZaw.jrJAI(this.hptUp));
            this.XoWzU = 0
        }
    }
    ,
    t.prototype.KRcLW = function() {
        var t = Math.random() * Math.PI * 2
          , n = b.VmddP.xJwON() * .2 * Math.random() * (100 - this.JZGvO) * .02;
        game.XfRzc || (n *= .7);
        b.VmddP.SDHsM += Math.cos(t) * n;
        b.VmddP.dTfhX += Math.sin(t) * n
    }
    ,
    t.prototype.shoot = function() {
        var n, i, t;
        if (b.eEnBR = null,
        sgn(b.yAjCz.SDHsM) == -this.t.dir) {
            this.launch();
            return
        }
        this.qstAW() ? (n = game.rules.rpqWH.width * .3 * this.KlBDy.dirdy(),
        this.yhEiw(n, this.KlBDy.alMDF() ? 0 : this.KlBDy.power)) : (n = game.rules.rpqWH.width * .3 * sgn(.5 - Math.random()),
        i = this.t.XSIgd().distXY(b),
        t = vRzMg(5 + Math.random() * 40 + i * .15, 0, 100),
        this.cpu.lWihuR() && (t = 0),
        this.t.XSIgd().distXY(this.t.opn.AxvNR) > i && (n = 0,
        t *= .7),
        this.yhEiw(n, t))
    }
    ,
    t.prototype.yhEiw = function(n, t) {
        var r, u, t, s, e;
        if (game.mrEkW || (this.statistics.shots += 1),
        r = this.t.XSIgd().yAjCz.clone(),
        r.dTfhX = n,
        game.tcjdw && !this.t.IXBtu().isIn(b.yAjCz) && t < 50) {
            this.DzcIC(n * 1.3, t);
            return
        }
        if (t == 0) {
            this.lob();
            return
        }
        Math.abs(b.yAjCz.SDHsM) > pitch.wmdto - 5 && Math.abs(b.yAjCz.dTfhX) < 65 && (r.SDHsM = b.yAjCz.SDHsM + 5 * this.t.dir);
        u = b.yAjCz.angTo(r);
        b.HxCnF && (u = this.angle);
        var i = 0
          , o = b.yAjCz.distXY(r)
          , f = Math.random() * .2 - this.yAjCz.hzrxR * .02 + Math.random() * t * .001;
        Math.random() * 100 > this.ftZuv && (f += Math.random() * .2);
        i = Math.random() * 100 > this.ftZuv ? .2 - Math.random() * .4 : .1 - Math.random() * .2;
        this.Sbzcw() && (f += Math.random() * .2,
        i = i * 1.5);
        i = i * (.7 + t * .006);
        u += i;
        t = 6.5 + Math.random() * .5 + this.ftZuv * this.GtTtd * .03 + t * .02 - btovy(u, this.VmddP.angXY());
        s = o / t;
        f += .0015 * s;
        e = new Vector;
        e.set(u, f, t);
        b.move(e, this, 1);
        b.igvTj(this.angle, o, this);
        this.WkYeV()
    }
    ,
    t.prototype.DzcIC = function(n, t) {
        var i = new iLfep(pitch.wmdto * this.t.dir,n)
          , r = b.yAjCz.angTo(i)
          , u = b.yAjCz.distXY(i)
          , t = vRzMg(6 + t * .05, 5, 11)
          , f = u / t / 2
          , e = new Vector(Math.cos(r) * t,Math.sin(r) * t,vRzMg(.1 * f + 20 / f, 0, 5));
        b.move(e, this, 1);
        b.igvTj(this.angle, u, this);
        this.KRcLW();
        this.WkYeV()
    }
    ,
    t.prototype.lob = function() {
        var t = b.yAjCz.angTo(this.t.XSIgd().yAjCz)
          , i = b.yAjCz.distXY(this.t.XSIgd().yAjCz)
          , n = vRzMg(3 + i * .005, 3, 8)
          , r = i / n / 2
          , u = new Vector(Math.cos(t) * n,Math.sin(t) * n,vRzMg(.1 * r + 10 / r, 0, 6));
        b.move(u, this, 2);
        this.KRcLW();
        this.WkYeV()
    }
    ,
    t.prototype.pBxjH = function() {
        var n = this.t.IXBtu().oROkp
          , t = this.t.Rlfmq(n, this)
          , i = n.distXY(t.yAjCz)
          , r = n.distXY(b.yAjCz)
          , u = b.yAjCz.angTo(n);
        return r > i * 2 && btovy(u, this.angle) < Math.PI * .7
    }
    ,
    t.prototype.BzCOS = function() {
        if (this.t.p[0] != this && (b.eEnBR = null),
        this.Sbzcw() && Math.random() > .5) {
            this.frixP();
            return
        }
        if (this.mYqQp()) {
            this.XsaZB();
            return
        }
        this.lGcMW()
    }
    ,
    t.prototype.lGcMW = function() {
        var n = this.pPass.aRxZw()
          , t = (2.5 + n * .001 + b.VmddP.xJwON()) * .5
          , r = .2 + this.t.WphkO(this.pPass.yAjCz) * .08
          , u = (25 + vRzMg(n, 0, 300) * .3 * this.pPass.VnCOO() * .4) * r
          , f = this.cpu.bHmDqI(this.pPass.yAjCz, u)
          , e = this.yAjCz.angTo(f)
          , o = vRzMg(-Math.PI / 4 + n * .004 + .1 - Math.random() * .2, -Math.PI / 4, Math.PI / 4)
          , i = new Vector;
        i.set(e, o, t);
        b.move(i, this, 4);
        speaker.comment(4, this);
        this.t.RCcbW.jDFxl(this.pPass);
        this.t.RCcbW.LCzzj = 20 + vRzMg(n / t * .5, 0, 50)
    }
    ,
    t.prototype.XsaZB = function() {
        var n = new Vector, t, i, u, r, f;
        if (sgn(b.yAjCz.SDHsM) == -this.t.dir) {
            t = (4.5 + Math.random() + b.VmddP.xJwON()) * .5;
            i = this.yAjCz.angTo(this.t.XSIgd().yAjCz) + Math.random() * 3 - 1.5;
            n.set(i, Math.random() * Math.PI / 3, t);
            b.move(n, this, 7);
            return
        }
        u = this.qstAW() ? this.KlBDy.dirdy() : sgn(.5 - Math.random());
        r = new iLfep(pitch.wmdto * this.t.dir,u * game.rules.rpqWH.wmdto * .7);
        t = (8 + Math.random() + b.VmddP.xJwON()) * .5;
        i = this.yAjCz.angTo(r) + Math.random() * .6 - .3;
        f = this.yAjCz.distXY(r);
        n.set(i, vRzMg(f * .002 - Math.random(), -.5, .5), t);
        b.move(n, this, 11);
        game.XfRzc && (this.statistics.shots += 1)
    }
    ,
    t.prototype.launch = function() {
        var n;
        if (this.Sbzcw()) {
            this.sweep();
            return
        }
        var i = b.yAjCz.angTo(this.t.IXBtu().oROkp) + .2 - Math.random() * .4
          , r = this.yAjCz.angTo(b.yAjCz)
          , u = this.yAjCz.distXY(this.t.IXBtu().oROkp)
          , f = vRzMg(3 + u * .005 + Math.random(), 0, 10)
          , t = .5 + Math.random() * .2 + b.yAjCz.hzrxR * .04;
        b.vSdIU == this && (t = .5 + Math.random() * .2);
        n = new Vector;
        n.set(SHEOV(i, r), t, f);
        b.move(n, this, 10);
        this.WkYeV()
    }
    ,
    t.prototype.sweep = function() {
        var t = this.angle + .5 - Math.random()
          , i = 7 + Math.random() * 2
          , n = new Vector;
        n.set(t, b.yAjCz.hzrxR * .07, i);
        b.move(n, this, 6);
        this.WkYeV()
    }
    ,
    t.prototype.QErfR = function() {
        var t = this.angle + .2 - .4 * Math.random()
          , i = 3 + Math.random()
          , n = new Vector;
        n.set(t, Math.random() * .3, i);
        b.move(n, this, 6);
        this.AvZos ? speaker.comment(15, this) : speaker.comment(16, this);
        this.t.pHOXU = !0;
        this.t.opn.pHOXU = !0
    }
    ,
    t.prototype.cross = function() {
        var i = this.t.IXBtu().oROkp, e = this.t.Rlfmq(i, this), o = new iLfep((e.yAjCz.SDHsM + i.SDHsM) / 2,(e.yAjCz.dTfhX + i.dTfhX) / 2), r = b.yAjCz.angTo(o), u = b.yAjCz.distXY(o), n = vRzMg(4 + u * .005, 4, 7) * (.9 + Math.random() * .2), s = Math.random() > .3 || !game.XfRzc, t = new Vector, f;
        this.qstAW() && (s = this.KlBDy.hPass);
        s ? (f = u / n / 2,
        t = new Vector(Math.cos(r) * n,Math.sin(r) * n,.1 * f + (25 - b.yAjCz.hzrxR + Math.random() * 10) / f),
        b.move(t, this, 8)) : (t.set(r, .3 + Math.random() * .1, n * 1.3),
        b.move(t, this, 9));
        b.igvTj(this.angle, u, this);
        this.KRcLW()
    }
    ,
    t.prototype.WkYeV = function() {
        var n, t;
        b.yAjCz.hzrxR > 15 || b.VmddP.hzrxR < 1 && this.QOeNg || btovy(b.VmddP.angXY(), this.angle) < Math.PI * .6 || (n = this.angle + Math.PI * .6,
        b.yAjCz.SDHsM * this.t.dir > 0 || b.ewpBc && b.ewpBc.t == this.t ? btovy(b.VmddP.angXY(), this.angle - .1) < btovy(b.VmddP.angXY(), this.angle + .1) && (n = this.angle - Math.PI * .6) : (t = this.t.kAqMF().yAjCz.angTo(b.yAjCz),
        btovy(t, this.angle + .1) < btovy(t, this.angle - .1) && (n = this.angle - Math.PI * .6)),
        b.VmddP.JfORt(n),
        Math.random() > .9 && (this.VmddP.SDHsM -= Math.cos(n),
        this.VmddP.dTfhX -= Math.sin(n),
        this.fall(!1)))
    }
    ,
    t.prototype.HIzpT = function() {
        return this.yAjCz.wapWW(this.t.XSIgd().yAjCz) < this.opn.yAjCz.wapWW(this.t.XSIgd().yAjCz)
    }
    ,
    t.prototype.AQtsE = function() {
        this.watch.SDHsM = b.yAjCz.SDHsM;
        this.watch.dTfhX = b.yAjCz.dTfhX
    }
    ,
    t.prototype.KTHZK = function() {
        this.watch.SDHsM = this.yAjCz.SDHsM + this.VmddP.SDHsM * 10;
        this.watch.dTfhX = this.yAjCz.dTfhX + this.VmddP.dTfhX * 10
    }
    ,
    t.prototype.umxdc = function() {
        if (this.IiBVu != 0 && this.QOeNg) {
            var t, i, n, r, u, f;
            r = 0;
            u = 0;
            f = 0;
            switch (this.IiBVu) {
            case 1:
                t = -this.sinAng * 12;
                i = this.cosAng * 12;
                r = this.sinAng * 12;
                u = -this.cosAng * 12;
                n = this.YKlsJ * .45;
                f = n;
                break;
            case 2:
                t = -this.sinAng * 5 - this.cosAng * 3;
                i = this.cosAng * 5 - this.sinAng * 3;
                n = this.YKlsJ * .8;
                r = this.sinAng * 5 - this.cosAng * 3;
                u = -this.cosAng * 5 - this.sinAng * 3;
                f = n;
                break;
            case 3:
                t = -this.sinAng * 3;
                i = this.cosAng * 3;
                n = this.YKlsJ * 1.1;
                break;
            case 4:
                t = -this.sinAng * 5;
                i = this.cosAng * 5;
                r = this.sinAng * 5;
                u = -this.cosAng * 5;
                n = this.YKlsJ;
                f = n;
                break;
            case 5:
                t = -this.sinAng * 5 - this.cosAng * 3;
                i = this.cosAng * 5 - this.sinAng * 3;
                r = this.sinAng * 5 - this.cosAng * 3;
                u = -this.cosAng * 5 - this.sinAng * 3;
                n = this.YKlsJ * .9;
                f = n;
                break;
            case 6:
            case 7:
                t = -this.sinAng * 3;
                i = this.cosAng * 3;
                n = this.YKlsJ * 1.1;
                break;
            case 10:
                t = this.cosAng * 10 - this.sinAng * 3;
                i = this.sinAng * 10 + this.cosAng * 3;
                r = this.cosAng * 10 + this.sinAng * 3;
                u = this.sinAng * 10 - this.cosAng * 3;
                n = this.YKlsJ * .65;
                f = n;
                break;
            case 11:
                t = this.cosAng * 8;
                i = this.sinAng * 8;
                n = this.YKlsJ * .6 + 8 * Math.sin(this.KSSyt * .4)
            }
            --this.KSSyt == 0 && this.mpRKT();
            this.hand1.shape.x = this.pfnbt.SDHsM + t;
            this.hand1.shape.y = this.pfnbt.dTfhX + i - n;
            this.hand2.shape.x = this.pfnbt.SDHsM + r;
            this.hand2.shape.y = this.pfnbt.dTfhX + u - f
        }
    }
    ,
    t.prototype.XZRoC = function() {
        this.IiBVu = 1;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !0;
        this.KSSyt = ~~(50 + Math.random() * 50)
    }
    ,
    t.prototype.exult = function() {
        this.IiBVu = 4;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !0;
        this.KSSyt = ~~(100 + Math.random() * 100)
    }
    ,
    t.prototype.call = function() {
        this.IiBVu = 3;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !1;
        this.KSSyt = ~~(70 + Math.random() * 20)
    }
    ,
    t.prototype.tjpHP = function() {
        this.IiBVu = 2;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !0;
        this.KSSyt = ~~(50 + Math.random() * 50)
    }
    ,
    t.prototype.VMlxC = function() {
        this.IiBVu = 5;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !0;
        this.KSSyt = 200
    }
    ,
    t.prototype.mpRKT = function() {
        this.IiBVu = 0;
        this.hand1.shape.visible = !1;
        this.hand2.shape.visible = !1;
        this.KSSyt > 0 && (this.KSSyt = 0)
    }
    ,
    t.prototype.aRxZw = function() {
        return this.distXY(b)
    }
    ,
    t.prototype.ouzDO = function(n) {
        return n === void 0 && (n = 0),
        game.rules.kqBBq && this.yAjCz.SDHsM * this.t.dir > this.t.opn.kyfVy * this.t.dir + n && b.yAjCz.SDHsM * this.t.dir < this.yAjCz.SDHsM * this.t.dir
    }
    ,
    t.prototype.Sbzcw = function() {
        return this.wapWW(this.opn) < 225
    }
    ,
    t.prototype.HgPHX = function(n) {
        var t = b.iaecV.angTo(this.t.XSIgd().yAjCz)
          , i = b.iaecV.distXY(this.t.XSIgd().yAjCz);
        t += !this.PqKIS() && i < game.rules.nASZn.wmdto ? Math.PI / 2 - Math.PI * Math.random() : Math.PI / 4 - Math.PI * Math.random() / 2;
        this.locate(b.iaecV.SPPZQ(t, -n))
    }
    ,
    t.prototype.locate = function(n) {
        this.yAjCz = n;
        this.VmddP.reset();
        this.MgmLe.reset();
        this.ftg = 0;
        this.QOeNg || this.getUp()
    }
    ,
    t.prototype.sweFh = function(n, t) {
        this.locate(new iLfep(n,t))
    }
    ,
    t.prototype.rest = function() {
        this.vaGFK = (this.QeJPA + this.vaGFK) / 2
    }
    ,
    t.prototype.ZUgse = function() {
        var t, n;
        return this.AvZos && (t = 15 - this.VmddP.value(),
        b.yAjCz.hzrxR < 10 && this.yAjCz.SPPZQ(this.VmddP.angXY(), t).wapWW(b.yAjCz) < 100) ? !0 : (n = this.margin,
        this.t.pHOXU && b.dSldC == 1 && !game.tcjdw && (n = 4),
        this.AjDvC > n * n) ? !1 : b.yAjCz.hzrxR < this.YKlsJ + this.yAjCz.hzrxR && b.yAjCz.hzrxR > this.yAjCz.hzrxR - 8
    }
    ,
    t.prototype.OfiBh = function() {
        b.VmddP.reset();
        b.yAjCz.SDHsM = this.yAjCz.SDHsM;
        b.yAjCz.dTfhX = this.yAjCz.dTfhX - sgn(b.yAjCz.dTfhX);
        b.yAjCz.hzrxR = this.YKlsJ + 2;
        this.qstAW() ? this.KlBDy.pass() && this.xqiKi() : this.ftg > 0 && this.xqiKi()
    }
    ,
    t.prototype.XXqNk = function() {
        game.CnlZk && (b.OEDJp = this);
        this.VMlxC()
    }
    ,
    t.prototype.WZwCZ = function() {
        return this.action
    }
    ,
    t.prototype.zbNuO = function(n) {
        this.action = n;
        this.QOeNg = this.action == 0;
        this.qsuWa = this.action == 1;
        this.AvZos = this.action == 2;
        this.EwbCb = this.action == 3;
        this.tAtiQ = this.action == 4;
        this.UfcTx = this.action == 5
    }
    ,
    t.prototype.ZnunN = function() {
        return this.IiBVu == 3
    }
    ,
    t.prototype.xqiKi = function() {
        var n;
        n = this.qstAW() ? this.RaaaW() : this.cpu.fwKhG(!0);
        n == this && (n = this.mate);
        var t = n.aRxZw()
          , r = vRzMg(1.4 + t * .03, 2, 5)
          , u = this.cpu.bHmDqI(n.yAjCz, t * .5).deSCM(pitch, -5)
          , f = this.yAjCz.angTo(u)
          , i = new Vector;
        i.set(f, vRzMg(t * .002 - .5, -.4, Math.PI / 4), r);
        b.move(i, this, 10, 10);
        b.OEDJp = null;
        this.mpRKT();
        this.t.RCcbW.jDFxl(n)
    }
    ,
    t.prototype.record = function() {
        var n = migOb.frame();
        this.memCx[n] = ~~this.yAjCz.SDHsM;
        this.memCy[n] = ~~this.yAjCz.dTfhX;
        this.memCz[n] = ~~this.yAjCz.hzrxR;
        this.vkGbW[n] = this.BIOdF;
        this.cAVsW[n] = this.IiBVu
    }
    ,
    t.prototype.HsYMP = function() {
        var n = ~~this.yAjCz.SDHsM.toString() + ";" + ~~this.yAjCz.dTfhX.toString() + ";";
        return this.yAjCz.hzrxR != 0 && (n += ~~this.yAjCz.hzrxR.toString()),
        n += ";",
        this.BIOdF > 1 && (n += this.BIOdF),
        n += ";",
        this.IiBVu != 0 && (n += this.IiBVu),
        n
    }
    ,
    t.prototype.zSndk = function() {
        var i = migOb.frame()
          , t = (i + 398) % 400
          , n = (t + 402) % 400
          , r = (n + 402) % 400;
        Math.abs(this.memCx[r] - this.memCx[t]) < 30 && Math.abs(this.memCy[r] - this.memCy[t]) < 30 && Math.abs(this.memCz[r] - this.memCz[t]) < 10 && (this.VmddP.SDHsM = (this.memCx[r] - this.memCx[t]) * .25,
        this.VmddP.dTfhX = (this.memCy[r] - this.memCy[t]) * .25,
        this.VmddP.hzrxR = (this.memCz[r] - this.memCz[t]) * .25);
        this.angle = this.VmddP.angXY();
        this.cosAng = Math.cos(this.angle);
        this.sinAng = Math.sin(this.angle);
        this.yAjCz.SDHsM = this.memCx[n] + this.VmddP.SDHsM * (i - n);
        this.yAjCz.dTfhX = this.memCy[n] + this.VmddP.dTfhX * (i - n);
        this.yAjCz.hzrxR = this.memCz[n] + this.VmddP.hzrxR * (i - n);
        this.faFif.SDHsM = this.memCx[n] + this.VmddP.SDHsM * (i - n);
        this.faFif.dTfhX = this.memCy[n] + this.VmddP.dTfhX * (i - n);
        this.faFif.hzrxR = this.memCz[n] + this.VmddP.hzrxR * (i - n);
        this.QOeNg && this.getUp();
        this.action != this.CaLbz(this.vkGbW[n]) && (this.zbNuO(this.CaLbz(this.vkGbW[n])),
        this.OnbUJ(this.vkGbW[n]));
        this.IiBVu = this.cAVsW[t];
        switch (this.IiBVu) {
        case 3:
            this.call();
            break;
        case 2:
            this.tjpHP();
            break;
        case 4:
            this.exult();
            break;
        case 1:
            this.XZRoC();
            break;
        case 5:
            this.VMlxC()
        }
        this.KSSyt = 4
    }
    ,
    t.prototype.iyHlH = function(n, t) {
        var i;
        if (t)
            i = this.memCx[n].toString() + "," + this.memCy[n].toString();
        else {
            var r = (n + 399) % 400
              , u = this.memCx[n] - this.memCx[r]
              , f = this.memCy[n] - this.memCy[r];
            i = FiNll(u, f)
        }
        return (this.memCz[n] != 0 || this.vkGbW[n] != 1 || this.cAVsW[n] != 0) && (i += ",",
        i += this.memCz[n] != 0 ? this.memCz[n].toString() + "," : ",",
        i += this.vkGbW[n] != 1 ? this.vkGbW[n].toString() + "," : ",",
        this.cAVsW[n] != 0 && (i += this.cAVsW[n].toString())),
        i
    }
    ,
    t.prototype.pZlkX = function(n, t, i) {
        t = ~~t;
        var f = (t + 399) % 400
          , r = n.split(",")
          , u = 0
          , e = r[0]
          , o = r[1];
        e >= "A" && e <= "Z" ? (this.memCx[t] = this.memCx[f] + TzYKh(e),
        this.memCy[t] = this.memCy[f] + oucUs(e),
        u = 1) : (this.memCx[t] = e != "" && e != undefined ? i ? parseInt(e) : this.memCx[f] + parseInt(e) : isNaN(this.memCx[f]) ? 0 : ~~this.memCx[f],
        this.memCy[t] = o != "" && o != undefined ? i ? parseInt(o) : this.memCy[f] + parseInt(o) : isNaN(this.memCy[f]) ? 0 : ~~this.memCy[f],
        u = 2);
        this.memCz[t] = 0;
        this.vkGbW[t] = 1;
        this.cAVsW[t] = 0;
        r.length > u && r[u] != "" && (this.memCz[t] = parseInt(r[u]));
        r.length > ++u && r[u] != "" && (this.vkGbW[t] = parseInt(r[u]));
        r.length > ++u && r[u] != "" && (this.cAVsW[t] = parseInt(r[u]))
    }
    ,
    t.prototype.CaLbz = function(n) {
        return n >= 10 && n < 200 ? 1 : n >= 200 && n < 400 ? 3 : n >= 400 && n < 600 ? 2 : n >= 600 && n < 800 ? 3 : n >= 800 && n < 1e3 ? 4 : 0
    }
    ,
    t.prototype.tieAc = function() {
        return this.BIOdF >= 10 && this.BIOdF < 200 ? ~~((this.BIOdF - 10) / 20) : this.BIOdF >= 200 && this.BIOdF < 400 ? ~~((this.BIOdF - 200) / 20) : this.BIOdF >= 400 && this.BIOdF < 600 ? ~~((this.BIOdF - 400) / 20) : this.BIOdF >= 600 && this.BIOdF < 800 ? ~~((this.BIOdF - 600) / 20) : this.BIOdF >= 800 && this.BIOdF < 1e3 ? ~~((this.BIOdF - 800) / 20) : 0
    }
    ,
    t.prototype.ZLHnq = function() {
        return
    }
    ,
    t.prototype.oVbdJ = function() {
        return this.yAjCz.angTo(this.t.XSIgd().yAjCz)
    }
    ,
    t.prototype.QacVs = function() {
        var n, t;
        this.t != null && (n = this.NXnGl(),
        this.hand2 = new Hand(this),
        this.hand2.dWoPA(),
        yxdsY.addChild(this.hand2.shape),
        this.head = new Head(this),
        this.head.dWoPA(),
        yxdsY.addChild(this.head.shape),
        this.shirt = new Shirt(n,this),
        this.shirt.dWoPA(),
        yxdsY.addChild(this.shirt.shape),
        this.shorts = new Shorts(n,this),
        this.shorts.dWoPA(),
        yxdsY.addChild(this.shorts.shape),
        t = Math.random() * 10,
        this.shoe1 = new Shoe(this,1,this.shoe2,null,t),
        this.shoe1.dWoPA(),
        yxdsY.addChild(this.shoe1.shape),
        this.shoe2 = new Shoe(this,-1,this.shoe1,null,10 + t),
        this.shoe2.dWoPA(),
        yxdsY.addChild(this.shoe2.shape),
        this.face = new Face(this),
        this.face.dWoPA(),
        yxdsY.addChild(this.face.shape),
        this.hand1 = new Hand(this),
        this.hand1.dWoPA(),
        yxdsY.addChild(this.hand1.shape),
        this.ZpfgI())
    }
    ,
    t.prototype.NXnGl = function() {
        return this.t.NXnGl()
    }
    ,
    t.prototype.zone = function() {
        return this.t.bKxNc().isIn(this.yAjCz) ? 0 : this.t.IXBtu().isIn(this.yAjCz) ? 10 : this.t.kkBYG(this.yAjCz.SDHsM) ? 11 : this.yAjCz.SDHsM * this.t.dir < -pitch.wmdto * .33 ? this.yAjCz.dTfhX * this.t.dir < -pitch.FpLNn * .33 ? 3 : this.yAjCz.dTfhX * this.t.dir > pitch.FpLNn * .33 ? 1 : 2 : this.yAjCz.SDHsM * this.t.dir < pitch.wmdto * .33 ? this.yAjCz.dTfhX * this.t.dir < -pitch.FpLNn * .33 ? 6 : this.yAjCz.dTfhX * this.t.dir > pitch.FpLNn * .33 ? 4 : 5 : this.yAjCz.dTfhX * this.t.dir < -pitch.FpLNn * .33 ? 9 : this.yAjCz.dTfhX * this.t.dir > pitch.FpLNn * .33 ? 7 : 8
    }
    ,
    t.prototype.UFeev = function() {
        switch (this.skin) {
        case 1:
            return "#FCC";
        case 2:
            return "#974";
        case 3:
            return "#420"
        }
        return "#000"
    }
    ,
    t.prototype.Rnhbu = function() {
        return !1
    }
    ,
    t
}(DNprm);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
sjRXf = function(n) {
    function t(t, i, r, u) {
        var f = n.call(this, t, i, r, u) || this;
        return f.nwWzy = 0,
        f.recordMinutes = 0,
        f.IrbDZ = 0,
        f.kmIMp = 0,
        f.hptUp = 100,
        f.yfhAQ = "#fff",
        f
    }
    return __extends(t, n),
    t.prototype.uJUbD = function() {
        if (n.prototype.uJUbD.call(this),
        game.efjMJ && game.CnlZk)
            if (this.qsuWa || (b.isHigh() ? (this.ADhld = this.distXY(b),
            sqSum(b.yAjCz.SDHsM + b.VmddP.SDHsM * 20 - this.yAjCz.SDHsM - this.VmddP.SDHsM * 10, b.yAjCz.dTfhX + b.VmddP.dTfhX * 20 - this.yAjCz.dTfhX - this.VmddP.dTfhX * 10) < 50 && b.yAjCz.hzrxR + b.VmddP.hzrxR * 20 > 42 && this.jump()) : this.ADhld = DsVVx(b.yAjCz.SDHsM + b.VmddP.SDHsM * 20 - this.yAjCz.SDHsM, b.yAjCz.dTfhX + b.VmddP.dTfhX * 20 - this.yAjCz.dTfhX)),
            this.kmIMp += 1,
            this.qstAW())
                this.mzLMbY();
            else {
                (b.vSdIU == this || b.LWJMi > this.cpu.Hfnzg) && this.cpu.dUdYSn();
                var t = 20 + this.cpu.aowlW * 20;
                this.t.opn.IXdhI != null && this.AjDvC < t * t && this.t.opn.IXdhI.AjDvC < this.AjDvC && !game.tcjdw && this.comeOut()
            }
    }
    ,
    t.prototype.actualMinutes = function(n) {
        return n - this.nwWzy
    }
    ,
    t.prototype.sFjOQj = function(n) {
        this.recordMinutes = this.actualMinutes(n);
        this.nwWzy = n
    }
    ,
    t.prototype.ZpfgI = function() {
        if (this.PqKIS()) {
            this.GtTtd = 1;
            return
        }
        game.xbRtm && this.t != game.LZXFT && (this.GtTtd = vRzMg(.1 * AMdME() + .6, 0, 1));
        game.WDTge && (this.GtTtd = vRzMg(.05 * AMdME() + .8, 0, 1))
    }
    ,
    t.prototype.umxdc = function() {
        if (this.hand1.shape.visible = !0,
        this.hand2.shape.visible = !0,
        this.IiBVu == 0 && this.QOeNg) {
            var r, t, u, i;
            r = -this.sinAng * 3;
            t = Math.abs(this.cosAng) * 3 - this.YKlsJ * .35;
            u = this.sinAng * 3;
            i = Math.abs(this.cosAng) * 3 - this.YKlsJ * .35;
            r += this.pfnbt.SDHsM;
            t += this.pfnbt.dTfhX;
            u += this.pfnbt.SDHsM;
            i += this.pfnbt.dTfhX;
            this.handsOk() && (t -= this.yAjCz.hzrxR * 1.5,
            i -= this.yAjCz.hzrxR * 1.5);
            this.hand1.shape.x = ~~r;
            this.hand1.shape.y = ~~t;
            this.hand2.shape.x = ~~u;
            this.hand2.shape.y = ~~i;
            this.hand1.visible = !0;
            this.hand2.visible = !0
        } else
            n.prototype.umxdc.call(this)
    }
    ,
    t.prototype.jump = function() {
        if (this.QOeNg && game.XfRzc && !(this.yAjCz.hzrxR > 0)) {
            this.mpRKT();
            this.yAjCz.hzrxR = 1;
            this.VmddP.hzrxR = vRzMg((b.yAjCz.hzrxR + b.VmddP.hzrxR * 20 - 30) * .5, 0, 2);
            var n = vRzMg(20, 1, b.aNSZS() - 2)
              , t = b.UQqJm(n)
              , i = this.yAjCz.angTo(t)
              , u = this.yAjCz.distXY(t)
              , r = vRzMg(u / n, 0, 1 + this.xeoAV * .02);
            this.VmddP.SDHsM = Math.cos(i) * r;
            this.VmddP.dTfhX = Math.sin(i) * r
        }
    }
    ,
    t.prototype.OfiBh = function() {
        if (game.XfRzc || game.GkqOy != 7) {
            if (b.VmddP.SDHsM = this.VmddP.SDHsM,
            b.VmddP.dTfhX = this.VmddP.dTfhX,
            b.VmddP.hzrxR = this.VmddP.hzrxR,
            this.QOeNg)
                b.yAjCz.SDHsM = this.yAjCz.SDHsM + this.cosAng * 5,
                b.yAjCz.dTfhX = this.yAjCz.dTfhX + this.sinAng * 5,
                b.yAjCz.hzrxR = 18 + this.yAjCz.hzrxR * 2,
                (b.LWJMi > 100 || b.LWJMi > 50 && this.qstAW() && this.KlBDy.action()) && this.rnWFHA();
            else {
                var t = Math.PI + this.tieAc() * Math.PI / 4;
                view.PIlOD || (t += Math.PI * 1.5);
                b.yAjCz.SDHsM = this.yAjCz.SDHsM + Math.cos(t) * vRzMg(5 + this.kmIMp * 1.5, 0, 20);
                b.yAjCz.dTfhX = this.yAjCz.dTfhX + Math.sin(t) * vRzMg(5 + this.kmIMp * 1.5, 0, 20);
                b.yAjCz.hzrxR = this.yAjCz.hzrxR
            }
            this.t.bKxNc().isIn(b.yAjCz) || (this.lmenIf(!1),
            b.move(this.VmddP.clone(), this, 0));
            Math.abs(b.yAjCz.SDHsM + b.VmddP.SDHsM * 3) > pitch.wmdto && Math.abs(b.yAjCz.dTfhX + b.VmddP.dTfhX * 3) < this.t.kAqMF().wmdto && this.lmenIf(b.yAjCz.hzrxR < this.t.kAqMF().height * .8)
        } else
            n.prototype.OfiBh.call(this)
    }
    ,
    t.prototype.lmenIf = function(n) {
        if (b.OEDJp = null,
        b.ewpBc = null,
        n) {
            var t = this.t.kAqMF().yAjCz.MVOWz(-20 * this.t.dir, 0).angTo(b.yAjCz) + .2 - Math.random() * .4
              , i = 3 + Math.random()
              , r = new Vector(b.VmddP.SDHsM + Math.cos(t) * i,b.VmddP.dTfhX + Math.sin(t) * i,.5 - Math.random());
            r.add(this.VmddP);
            b.move(r, this, 6)
        }
    }
    ,
    t.prototype.handsOk = function() {
        return game.GopxG ? Math.abs(b.yAjCz.SDHsM) > 544 : b.eEnBR != this.t && this.t.bKxNc().isIn(this.yAjCz) && !game.tcjdw
    }
    ,
    t.prototype.rnWFHA = function() {
        var n, t, i, r;
        this.lmenIf(!1);
        game.XfRzc ? (t = this.t.opn.Rlfmq(b.yAjCz),
        t.AjDvC < 14400 && Math.abs(this.yAjCz.dTfhX - t.yAjCz.dTfhX) < Math.abs(this.yAjCz.SDHsM - t.yAjCz.SDHsM) && Math.random() < .9 ? (n = new Vector(0,sgn(this.yAjCz.dTfhX - t.yAjCz.dTfhX),.5),
        b.move(n, this, 0)) : (n = new Vector(sgn(this.t.dir) * .5,0,.5),
        b.move(n, this, 0)),
        b.eEnBR = this.t,
        this.ftg = -10,
        this.iezLCS() && game.XfRzc && game.ABsAC(new Foul(this.opn,this,this.yAjCz), !1)) : (i = this.cpu.fwKhG(!0),
        game.hoywu = i,
        r = this.distXY(i),
        n = new Vector,
        n.set(this.angTo(i), vRzMg(r * .002 - .1, -.1, Math.PI / 4), 2 + r * .01),
        b.move(n, null, 4, 10))
    }
    ,
    t.prototype.slide = function() {
        this.handsOk() || n.prototype.slide.call(this);
        return
    }
    ,
    t.prototype.fZwjA = function() {
        return this.yAjCz.wapWW(this.t.kAqMF().yAjCz) > b.yAjCz.wapWW(this.t.kAqMF().yAjCz) * .25
    }
    ,
    t.prototype.olSOnZ = function() {
        return btovy(this.t.kAqMF().yAjCz.angTo(b.yAjCz), this.t.kAqMF().yAjCz.angTo(this.yAjCz)) > Math.PI / 4
    }
    ,
    t.prototype.iezLCS = function() {
        return DsVVx(this.yAjCz.SDHsM + 30 * this.t.dir - this.opn.yAjCz.SDHsM, this.yAjCz.dTfhX - this.opn.yAjCz.dTfhX) < 40
    }
    ,
    t.prototype.comeOut = function() {
        var r, u;
        if (this.QOeNg && b.OEDJp != this && b.vSdIU != this && !(b.yAjCz.hzrxR > 30)) {
            if (!this.handsOk()) {
                n.prototype.slide.call(this);
                return
            }
            var f = this.yAjCz.distXY(b.yAjCz)
              , t = 2.5 + this.xeoAV * .01
              , i = f / t;
            (b.dSldC == 1 || b.dSldC == 2 || b.dSldC == 11) && (i = 0);
            r = this.yAjCz.angTo(b.UQqJm(i));
            this.VmddP.JfORt(r, t);
            this.yAjCz.hzrxR = 4;
            this.VmddP.hzrxR = .5;
            this.gzRUq();
            this.IrbDZ = this.FIBqE;
            this.IrbDZ += Math.random() > .5 ? 6 : 2;
            this.IrbDZ = this.IrbDZ % 8;
            u = 200 + 20 * this.IrbDZ;
            this.OnbUJ(u);
            this.zbNuO(3);
            this.TVKkt = 80 + Math.random() * 10 - this.xeoAV * .2;
            sgn(this.VmddP.dTfhX) * this.t.dir == 1;
            this.mpRKT();
            this.kmIMp = 20
        }
    }
    ,
    t.prototype.KrGdu = function() {
        b.LWJMi < 10 && b.vSdIU == this || (this.handsOk() && game.XfRzc ? this.gmvbaT() : n.prototype.KrGdu.call(this))
    }
    ,
    t.prototype.gmvbaT = function() {
        if (b.OEDJp == null) {
            if (this.statistics.saves += 1,
            replay.save("K", 100, this.PqKIS()),
            !this.iKMruA()) {
                this.frixP();
                return
            }
            if (this.Sbzcw()) {
                this.XsaZB();
                return
            }
            if (this.ivqGFz()) {
                this.XXqNk();
                return
            }
            this.dTFHFp()
        }
    }
    ,
    t.prototype.XXqNk = function() {
        if (!game.XfRzc && game.GkqOy == 7) {
            n.prototype.XXqNk.call(this);
            return
        }
        b.OEDJp != this && (b.vSdIU.t == this.t.opn && (b.vSdIU.UmftV(b.VmddP.xJwON() * .8 + vRzMg(20 - Math.abs(20 - b.LWJMi), 0, 20) * .8),
        this.UmftV(5 + b.VmddP.xJwON() * 2.5 + vRzMg(50 - b.LWJMi, 0, 50))),
        sounds.sound(1, b.VmddP.xJwON() * .05 * this.t.opn.sbUdj),
        b.move(new Vector, this, 3),
        speaker.comment(20, this),
        b.OEDJp = this,
        b.LWJMi = 0,
        b.YQgRD.SDHsM = 0,
        b.YQgRD.dTfhX = 0,
        b.RvolO == 8 && this.yAjCz.hzrxR > 0 && sounds.sound(3, this.t.sbUdj * Math.random()))
    }
    ,
    t.prototype.mzLMbY = function() {
        var n, t, i;
        if (this.handsOk()) {
            if (this.AjDvC < 22500 && this.t.opn.IXdhI.AjDvC < this.AjDvC && this.KlBDy.power > 0 && b.dSldC != 1 && b.dSldC != 11) {
                this.comeOut();
                return
            }
            n = this.cpu.fCESFo();
            n > b.aNSZS() && b.aNSZS() > 0 && (n = b.aNSZS());
            t = b.UQqJm(n);
            i = this.yAjCz.distXY(t);
            i < 100 && n > 0 ? this.KlBDy.power > 0 && i < 8 && n < 10 && b.yAjCz.hzrxR > 30 && b.VmddP.xJwON() > 2 ? this.jump() : this.KlBDy.power > 0 && (game.GkqOy == 2 && b.ARaNi < 2 ? this.plxBTk(t) ? this.dive(t) : this.dive(new iLfep(this.yAjCz.SDHsM,this.yAjCz.dTfhX + this.KlBDy.keydy * this.KlBDy.power * .5)) : this.dive(t)) : this.KlBDy.power > 0 && this.dive(this.yAjCz.clone())
        }
    }
    ,
    t.prototype.plxBTk = function(n) {
        var t = this.yAjCz.angTo(n);
        return isNaN(this.KlBDy.XbkLy) ? Math.abs(n.dTfhX) < 10 : btovy(t, this.KlBDy.XbkLy) < Math.PI * .25
    }
    ,
    t.prototype.dive = function(n) {
        var r, e, o, h;
        if (this.QOeNg && !(this.yAjCz.hzrxR > 0) && b.vSdIU != this) {
            n.deSCM(pitch);
            var i = b.yAjCz.hzrxR
              , f = b.VmddP.hzrxR
              , u = b.VmddP.xJwON()
              , t = 0
              , s = b.yAjCz.distXY(n);
            do
                i += f,
                s -= u,
                f -= .1,
                i < 0 && (i = 0,
                f = f * -.6,
                u = u * .9),
                t += 1;
            while (s > 0 && u > .1 && t < 100);
            if ((t == 0 && (t = 1),
            !(u < 2) || i != 0 || this.qstAW()) && (r = this.yAjCz.distXY(n),
            e = vRzMg(r / t, 0, 1 + this.xeoAV * .015),
            this.qstAW() && (e = vRzMg(r / t, 0, 1 + this.xeoAV * .018)),
            r < 8 && i > this.YKlsJ * .7 && i < 55 && this.jump(),
            !(r < 4) || this.qstAW())) {
                if (i > 55 && b.VmddP.xJwON() > 7) {
                    this.XZRoC();
                    return
                }
                if (!(i > 55)) {
                    if (i > 45) {
                        this.jump();
                        return
                    }
                    o = this.yAjCz.angTo(n);
                    isNaN(o) || (this.VmddP.SDHsM = Math.cos(o) * e * .98,
                    this.VmddP.dTfhX = Math.sin(o) * e * .98);
                    this.yAjCz.hzrxR = 3;
                    this.VmddP.hzrxR = vRzMg((i - this.yAjCz.hzrxR) / t + .02 * (t - 1), .04 * (t - 1), 2);
                    r < 2 && t > 50 && (this.VmddP.hzrxR *= .1);
                    r / t > 4 && (QwTxA("too far: distance " + r.toString() + ", nf:" + t.toString()),
                    this.VmddP.SDHsM = this.VmddP.SDHsM * .25,
                    this.VmddP.dTfhX = this.VmddP.dTfhX * .25,
                    this.VmddP.hzrxR = this.VmddP.hzrxR * .25);
                    this.gzRUq();
                    this.IrbDZ = this.FIBqE;
                    h = 200 + 20 * this.IrbDZ;
                    this.OnbUJ(h);
                    this.zbNuO(3);
                    this.TVKkt = 80 + Math.random() * 10 - this.xeoAV * .2;
                    this.ZLHnq();
                    this.mpRKT();
                    this.kmIMp = 0
                }
            }
        }
    }
    ,
    t.prototype.dTFHFp = function() {
        var i, r, t, u, f;
        b.vSdIU.t == this.t.opn && b.vSdIU.UmftV(b.VmddP.xJwON() + vRzMg(20 - Math.abs(20 - b.LWJMi), 0, 20));
        var e = this.cpu.fCESFo()
          , o = b.UQqJm(e)
          , s = this.yAjCz.distXY(o)
          , n = new Vector;
        this.QOeNg ? (this.UmftV(5 + b.VmddP.xJwON() * 3 + vRzMg(50 - b.LWJMi, 0, 50) * 1.2),
        b.yAjCz.hzrxR > 30 ? (n.set(b.VmddP.angXY() + .1 - Math.random() * .2, .5 + Math.random() * .4, .5 + b.VmddP.xJwON() * (.3 + Math.random() * .4)),
        b.move(n, this, 3),
        Math.random() > .5 && (this.VmddP.SDHsM += b.VmddP.SDHsM * .1,
        this.VmddP.dTfhX += b.VmddP.dTfhX * .1,
        this.gzRUq(),
        this.IrbDZ = this.FIBqE,
        i = 200 + 20 * this.IrbDZ,
        this.OnbUJ(i),
        this.zbNuO(3),
        this.TVKkt = 80 + Math.random() * 10 - this.xeoAV * .2,
        this.ZLHnq(),
        this.mpRKT(),
        this.kmIMp = 0)) : (r = this.t.kAqMF().yAjCz.angTo(this.yAjCz) + Math.random() - .5,
        n.set(r, 1 - Math.random() * 2, .5 + b.VmddP.xJwON() * .6),
        b.move(n, this, 3))) : (t = vRzMg(1 - s / 10, .01, 1),
        this.UmftV(5 + (b.VmddP.xJwON() * 3 + vRzMg(50 - b.LWJMi, 0, 50) * 1.2) * t),
        u = this.VmddP.angXY() - .8 + Math.random() * 1.6,
        f = .5 + b.VmddP.xJwON() * (.25 + Math.random() * .3),
        n.JfORt(u, f),
        b.move(n, this, 3, 2, t));
        sounds.sound(1, b.VmddP.xJwON() * .1 * this.t.opn.sbUdj);
        this.t.pHOXU = !1;
        this.t.opn.pHOXU = !0;
        this.t.RCcbW.LCzzj = 20;
        this.t.opn.RCcbW.LCzzj = 20;
        speaker.comment(21, this)
    }
    ,
    t.prototype.ivqGFz = function() {
        if (b.yAjCz.hzrxR > 40 && b.yAjCz.SDHsM * this.t.dir < -pitch.wmdto + 5 && Math.abs(b.yAjCz.dTfhX) < this.t.kAqMF().wmdto)
            return !1;
        var n = 3.5;
        return (!this.QOeNg || this.yAjCz.hzrxR > 0) && (n = 0),
        b.VmddP.xJwON() < n + b.LWJMi * .035 + this.xeoAV * .06 + Math.random() * 3 && !this.Sbzcw()
    }
    ,
    t.prototype.iKMruA = function() {
        var n, t;
        return !this.qstAW() && b.LWJMi < this.cpu.Hfnzg ? !1 : (n = 4,
        this.qstAW() && (n = 8),
        t = Math.random(),
        b.VmddP.xJwON() < n + b.LWJMi * .02 + this.xeoAV * .05 + 4 * (1 - t * t))
    }
    ,
    t.prototype.NXnGl = function() {
        return this.t.kits[this.t.eWknp]
    }
    ,
    t.prototype.Rnhbu = function() {
        return !0
    }
    ,
    t
}(Player);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
DIUlF = function(n) {
    function t(t, i, r, u) {
        t === void 0 && (t = 0);
        i === void 0 && (i = 0);
        r === void 0 && (r = 0);
        u === void 0 && (u = 1);
        var f = n.call(this, t, i, t) || this;
        return f.SDHsM = t,
        f.dTfhX = i,
        f.hzrxR = r,
        f.power = u,
        f
    }
    return __extends(t, n),
    t
}(iLfep);
Shadow = function() {
    function n(n, t, i) {
        this.owner = n;
        this.source = t;
        this.eGFdK = new iLfep(t.SDHsM,t.dTfhX,0);
        this.dcPcy = i;
        this.yAjCz = new iLfep
    }
    return n.prototype.cVDad = function() {
        this.yAjCz.SDHsM = this.owner.faFif.SDHsM;
        this.yAjCz.dTfhX = this.owner.faFif.dTfhX;
        view.apply(this.shape, this.yAjCz);
        this.owner.yAjCz.hzrxR > 0 && (this.shape.x += ~~(this.owner.yAjCz.hzrxR * this.cosang * this.dcPcy),
        this.shape.y += ~~(this.owner.yAjCz.hzrxR * this.sinang * this.dcPcy));
        this.shape.alpha = vRzMg(.4 * (this.source.power - this.owner.yAjCz.hzrxR * .005) * this.owner.wQOUK, 0, 1)
    }
    ,
    n.prototype.uJUbD = function() {}
    ,
    n.prototype.update = function() {
        var n = view.wuNti(this.eGFdK);
        this.ang = n.angTo(this.owner.pfnbt);
        this.cosang = Math.cos(this.ang);
        this.sinang = Math.sin(this.ang);
        this.shape.rotation = 90 + cPvOd(this.ang)
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
umoAS = function(n) {
    function t(t, i, r) {
        var u = n.call(this, t, i, r) || this;
        return u.source = i,
        u.dcPcy = r,
        u.PAdop = 1,
        u.VzHsg = 1,
        u.shape = new createjs.Shape,
        u.shape.graphics.beginFill("#000").drawCircle(0, -4, 4),
        u.shape.scaleY = u.owner.YKlsJ * u.dcPcy / 8,
        u.shape.cache(-4, -8, 8, 8),
        u.shape.alpha = .4 * u.source.power,
        u
    }
    return __extends(t, n),
    t.prototype.cVDad = function() {
        n.prototype.cVDad.call(this);
        Math.abs(this.PAdop - this.VzHsg) > .1 && (this.PAdop += this.PAdop < this.VzHsg ? .1 : -.1,
        this.shape.scaleY = (.2 + this.PAdop * .8) * this.owner.YKlsJ * this.dcPcy / 8,
        this.shape.scaleX = 3 - this.PAdop * 2)
    }
    ,
    t.prototype.update = function() {
        n.prototype.update.call(this);
        this.VzHsg = this.owner.QOeNg ? 1 : 0
    }
    ,
    t
}(Shadow);
uSTzW = function() {
    function n(n, t, i, r, u) {
        this.IMXyn = 5;
        this.id = n;
        this.fixed = i != null;
        this.hPass = !1;
        this.mgktb = 0;
        this.GEWoo = 0;
        this.buffer = "";
        this.MWWSR = "";
        this.team = t;
        this.eRSBG = u;
        this.cursor = new Cursor(n,u);
        i != null && this.DIkHa(i, !1);
        this.isFsOgA = r
    }
    return n.prototype.uJUbD = function() {}
    ,
    n.prototype.cVDad = function() {
        if (this.player != null) {
            var n = this.player.yAjCz.MVOWz(0, 0, 60);
            view.gXREa(this.cursor.shape, n, -30);
            this.cursor.shape.visible = !0
        } else
            this.cursor.shape.visible = !1
    }
    ,
    n.prototype.pass = function() {
        return (this.MWWSR == "H" && !this.YqEnk || this.MWWSR == "L" && !this.KyTUK) && this.power > 0
    }
    ,
    n.prototype.Barlw = function() {
        return this.MWWSR == "H" && !this.YqEnk && this.power > 0
    }
    ,
    n.prototype.shoot = function() {
        return this.MWWSR == "S" && !this.JArJy && this.power > 0
    }
    ,
    n.prototype.alMDF = function() {
        return this.buffer == "HH" || this.buffer == "LL" || this.buffer == "SS"
    }
    ,
    n.prototype.hasbar = function() {
        return this.power > 0
    }
    ,
    n.prototype.hasdir = function() {
        return this.dirdx() != 0 || this.dirdy() != 0
    }
    ,
    n.prototype.action = function() {
        return this.pass() || this.shoot()
    }
    ,
    n.prototype.AikYq = function() {
        this.KyTUK = !1;
        this.YqEnk = !1;
        this.power = 0;
        this.buffer = ""
    }
    ,
    n.prototype.DIkHa = function(n, t) {
        return !game.CnlZk && !t ? !1 : !game.cFZJo && !this.fixed ? !1 : n == null || !n.ociHJ() ? !1 : this.player != null && (this.fixed || game.kirRk - this.mgktb < 10) ? !1 : (this.player != null && (this.player.KlBDy = null),
        this.player != n && (this.player = n,
        this.AikYq()),
        this.player.KlBDy = this,
        nXmAQ.HflRS(new Events.vZGRz(game.kirRk,this.id,this.player.t.number,this.player.t.p.indexOf(this.player))),
        this.mgktb = game.kirRk,
        !0)
    }
    ,
    n.prototype.eSUPo = function() {}
    ,
    n.prototype.skip = function() {
        return !1
    }
    ,
    n.prototype.dirdx = function() {
        return this.keydx
    }
    ,
    n.prototype.dirdy = function() {
        return this.keydy
    }
    ,
    n.prototype.MLYzs = function() {
        this.XbkLy = this.dirdy() != 0 || this.dirdx() != 0 ? Math.atan2(this.dirdy(), this.dirdx()) : NaN
    }
    ,
    n.prototype.nwdCq = function(n) {
        this.MWWSR = n;
        QwTxA(this.MWWSR);
        switch (this.buffer.length) {
        case 0:
            this.buffer = n;
            break;
        case 1:
            this.buffer = this.buffer + n;
            break;
        case 2:
            this.buffer = this.buffer.substr(1, 1) + n
        }
    }
    ,
    n
}();
wWFNE = function() {
    function n(n) {
        this.t = n;
        this.KlBDy = [];
        this.gbnYH = 0;
        this.gmyaf = 0;
        this.KfUHs = 0;
        this.LCzzj = 20
    }
    return n.prototype.uJUbD = function() {
        var n = this;
        this.KfUHs += 1;
        --this.LCzzj < 0 && this.gvBKD();
        this.KlBDy.forEach(function(t) {
            game.CnlZk && !t.isFsOgA && t.Barlw() && game.switchPlayerMode < 4 && n.KfUHs > 10 && n.switchPlayer(t)
        })
    }
    ,
    n.prototype.cVDad = function() {
        this.KlBDy.forEach(function(n) {
            return n.cVDad()
        })
    }
    ,
    n.prototype.gvBKD = function() {
        if (this.LCzzj = 20,
        game.hoywu != null && game.tcjdw && game.hoywu.t == this.t) {
            this.jDFxl(game.hoywu);
            return
        }
        if (this.t.IXdhI == null) {
            this.jDFxl(this.t.Rlfmq(b.yAjCz));
            return
        }
        if (!this.t.pHOXU || this.t.IXdhI == null || !(this.t.IXdhI.AjDvC < 1e4)) {
            var n = this.rOTkG()
              , t = this.OjOaj(!1, n);
            t != null && (this.jDFxl(t, n),
            this.LCzzj = 40);
            this.XLjut()
        }
    }
    ,
    n.prototype.KoFFH = function() {
        return this.LCzzj > 20
    }
    ,
    n.prototype.jDFxl = function(n, t) {
        (t === void 0 && (t = null),
        this.LCzzj = 20,
        this.t.IXdhI != n) && (this.KfUHs = 0,
        this.t.IXdhI = n,
        n != this.t.AxvNR) && this.KlBDy.length != 0 && (t == null && (t = this.cHbIF()),
        t != null && n.ociHJ() && (t.DIkHa(n, !1),
        this.uupLz()))
    }
    ,
    n.prototype.switchPlayer = function(n) {
        if (n.fixed)
            return !1;
        if (n.player != null) {
            if (n.player.AjDvC < 900 || n.player.AjDvC < 1e4 && !isNaN(n.XbkLy) && btovy(n.XbkLy, n.player.angTo(b)) <= Math.PI / 2)
                return !1;
            n.player.PhSbf = 3
        }
        var t = this.OjOaj(!0, n);
        return t != null ? n.DIkHa(t, !1) : !1
    }
    ,
    n.prototype.OjOaj = function(n, t) {
        var i = this, r = 5e5, u;
        return this.t.p.forEach(function(f, e) {
            var o = f.ADhld + f.PhSbf * 20;
            f.yAjCz.SDHsM * i.t.dir > b.yAjCz.SDHsM * i.t.dir && !i.t.pHOXU && (o += 50 + f.ADhld);
            e != 0 || i.t.pHOXU || (o += i.t.pHOXU ? 100 : 500);
            game.BNNtp(f) || (o += 5e5);
            f.QOeNg || (o += 5e3);
            o += 200 * f.ZZPKE;
            b.dSldC == 0 && b.vSdIU && b.vSdIU.t == f.t && b.vSdIU != f && (o += 50 + vRzMg(100 - b.LWJMi, 0, 100) * 2);
            t == null || t.isFsOgA || t.fixed || (isNaN(t.XbkLy) || i.t.pHOXU && i.KlBDy.length != 1 || (o += btovy(f.angTo(b), t.XbkLy) * 200),
            n || f != t.player || (o = o - 20 - (4 - game.switchPlayerMode) * 30,
            game.switchPlayerMode == 0 && (o -= 1e4)));
            n && (f.ociHJ() || (o += 1e4),
            e == 0 && (o += 1e4));
            o < r && (r = o,
            u = f)
        }),
        u
    }
    ,
    n.prototype.cHbIF = function() {
        return this.KlBDy != null ? this.KlBDy[this.gbnYH] : null
    }
    ,
    n.prototype.uupLz = function() {
        this.KlBDy != null && ++this.gbnYH >= this.KlBDy.length && (this.gbnYH = 0)
    }
    ,
    n.prototype.rOTkG = function() {
        return this.KlBDy != null ? this.KlBDy[this.gmyaf] : null
    }
    ,
    n.prototype.XLjut = function() {
        this.KlBDy != null && ++this.gmyaf >= this.KlBDy.length && (this.gmyaf = 0)
    }
    ,
    n.prototype.IbwxL = function() {
        var n = "";
        for (var t in this.KlBDy)
            n += this.KlBDy[t].player != null ? this.KlBDy[t].player.qajbh() + ";" : ";";
        return n
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Keyboard = function(n) {
    function t(t, i, r, u, f) {
        var e = n.call(this, t, i, r, !1, f) || this, o;
        if (e.ftg = 0,
        e.map = {},
        parameters.keyCodes) {
            for (e.keyCodes = parameters.keyCodes.split(","),
            e.UHgCl = !0,
            e.iOmwq = !0,
            o = 0; o < 8; o++)
                parseInt(e.keyCodes[o]) == 80 && (e.UHgCl = !1),
                parseInt(e.keyCodes[o]) == 82 && (e.iOmwq = !1);
            e.SXQRq = parseInt(e.keyCodes[0]);
            e.viuqn = parseInt(e.keyCodes[1]);
            e.WQipF = parseInt(e.keyCodes[2]);
            e.SWgIa = parseInt(e.keyCodes[3]);
            e.NZGDW = parseInt(e.keyCodes[4]);
            e.esqLj = parseInt(e.keyCodes[5]);
            e.VQQBZ = parseInt(e.keyCodes[6]);
            e.olaGz = parseInt(e.keyCodes[7])
        }
        return document.onkeydown = document.onkeyup = e.kvDlDm.bind(e),
        e
    }
    return __extends(t, n),
    t.prototype.cVDad = function() {
        n.prototype.cVDad.call(this);
        (this.KyTUK || this.YqEnk || this.JArJy) && (this.ftg = 50,
        this.power = vRzMg(this.power + 5, 0, 100));
        this.ftg -= 1;
        this.ftg < 0 && this.AikYq();
        this.GEWoo -= 1;
        this.uebnjY()
    }
    ,
    t.prototype.kvDlDm = function(n) {
        var t = this.gBhSFE(n);
        if (this.map[t] = n.type == "keydown",
        this.uebnjY(),
        this.map[this.viuqn] && (this.KyTUK || (this.nwdCq("L"),
        this.hPass = !1)),
        this.map[this.WQipF] && (this.YqEnk || (this.nwdCq("H"),
        this.hPass = !0)),
        this.map[this.SWgIa] && (this.JArJy || this.nwdCq("S")),
        this.YqEnk = this.map[this.WQipF],
        this.KyTUK = this.map[this.viuqn],
        this.JArJy = this.map[this.SWgIa],
        n.type == "keydown") {
            if (this.map[27] && game.quitReason == 0 && (game.quitReason = 1),
            this.map[32] && (game.VZEWj || document.getElementById("txtChat") == document.activeElement || view.Kejyy(!0)),
            game.vjtYB && (this.map[76] && MlOlR.jobPx(),
            this.keydx > 0 ? replay.iUbkDd() : this.keydx < 0 && replay.dTUFkI()),
            !game.zwNMT)
                if (this.map[19] || this.map[80] && this.UHgCl)
                    document.getElementById("txtChat") != document.activeElement && (game.VZEWj = !0);
                else if (game.VZEWj) {
                    if (t == this.NZGDW || t == this.esqLj || t == this.VQQBZ || t == this.olaGz)
                        return;
                    game.AQsEp()
                }
            this.map[82] && this.iOmwq && replay.tcjdw() && this.IMXyn > 0 && (this.IMXyn--,
            wHUbV.blink(),
            replay.save("M", 50, !0))
        }
        this.GEWoo = 5;
        this.MLYzs()
    }
    ,
    t.prototype.skip = function() {
        return this.YqEnk || this.KyTUK || this.JArJy
    }
    ,
    t.prototype.dirdx = function() {
        return view.PIlOD ? this.keydx : this.keydy
    }
    ,
    t.prototype.dirdy = function() {
        return view.PIlOD ? this.keydy : -this.keydx
    }
    ,
    t.prototype.gBhSFE = function(n) {
        if (n.key.length == 1)
            return n.key.toUpperCase().charCodeAt(0);
        switch (n.code) {
        case "ArrowUp":
            return 38;
        case "ArrowDown":
            return 40;
        case "ArrowLeft":
            return 37;
        case "ArrowRight":
            return 39;
        case "Enter":
            return 13;
        case "Numpad0":
            return 96;
        case "Numpad1":
            return 97;
        case "Numpad2":
            return 98;
        case "Numpad3":
            return 99;
        case "Numpad4":
            return 100;
        case "Numpad5":
            return 101;
        case "Numpad6":
            return 102;
        case "Numpad7":
            return 103;
        case "Numpad8":
            return 104;
        case "Numpad9":
            return 105;
        case "Escape":
            return 27
        }
        return 0
    }
    ,
    t.prototype.uebnjY = function() {
        this.keydx = 0 - (this.map[this.VQQBZ] ? 1 : 0) + (this.map[this.olaGz] ? 1 : 0);
        this.keydy = 0 - (this.map[this.NZGDW] ? 1 : 0) + (this.map[this.esqLj] ? 1 : 0);
        this.keyRun = this.map[this.SXQRq]
    }
    ,
    t
}(uSTzW);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
IreLH = function(n) {
    function t(t, i, r, u, f) {
        var e = n.call(this, t, i, r, !1, f) || this, o;
        if (e.aTSgE = !1,
        e.OSIjm = parameters.touchMode < 4,
        e.usePad = parameters.touchMode == 4 || parameters.touchMode == 5,
        e.XPWvN = parameters.touchMode != 4,
        e.fixedTouch = parameters.fixedTouch,
        e.CjYpf = (20 + 2 * parameters.touchButtonSize) / EZZXG,
        e.JErbw = (30 + 10 * parameters.touchButtonSize) / EZZXG,
        e.FEcKN = (24 + 3 * parameters.touchButtonSize) / EZZXG,
        e.YfDqK = (40 + 10 * parameters.touchButtonSize) / EZZXG,
        e.uxoel = e.JErbw * e.JErbw * .25,
        e.pRltE = 0,
        e.bALEo = 0,
        e.keydx = 0,
        e.keydy = 0,
        e.ftg = 0,
        parameters.keyCodes && (e.keyCodes = parameters.keyCodes.split(","),
        e.SXQRq = parseInt(e.keyCodes[0]),
        e.viuqn = parseInt(e.keyCodes[1]),
        e.WQipF = parseInt(e.keyCodes[2]),
        e.SWgIa = parseInt(e.keyCodes[3])),
        e.MfSvI = !1,
        e.migIO = 0,
        e.EXiRj = 0,
        e.OSIjm ? (o = e.YfDqK * .2,
        e.OakMA = new createjs.Shape,
        e.OakMA.graphics.beginStroke("rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.2)").drawRect(-e.YfDqK / 2, -e.YfDqK / 2, e.YfDqK, e.YfDqK),
        e.OakMA.graphics.beginStroke("#rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.5)").moveTo(0, -o).lineTo(o, 0).lineTo(-o, 0).lineTo(0, -o),
        e.Aawad = new createjs.Shape,
        e.Aawad.graphics.beginStroke("rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.2)").drawRect(-e.YfDqK / 2, -e.YfDqK / 2, e.YfDqK, e.YfDqK),
        e.Aawad.graphics.beginStroke("#rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.5)").moveTo(0, o).lineTo(o, 0).lineTo(-o, 0).lineTo(0, o),
        e.IJiDl = new createjs.Shape,
        e.IJiDl.graphics.beginStroke("rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.2)").drawRect(-e.YfDqK / 2, -e.YfDqK / 2, e.YfDqK, e.YfDqK),
        e.IJiDl.graphics.beginStroke("#rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.5)").moveTo(-o, 0).lineTo(0, o).lineTo(0, -o).lineTo(-o, 0),
        e.tqGMn = new createjs.Shape,
        e.tqGMn.graphics.beginStroke("rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.2)").drawRect(-e.YfDqK / 2, -e.YfDqK / 2, e.YfDqK, e.YfDqK),
        e.tqGMn.graphics.beginStroke("#rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.5)").moveTo(o, 0).lineTo(0, o).lineTo(0, -o).lineTo(o, 0),
        e.OakMA.cache(-e.YfDqK * .5, -e.YfDqK * .5, e.YfDqK, e.YfDqK),
        e.Aawad.cache(-e.YfDqK * .5, -e.YfDqK * .5, e.YfDqK, e.YfDqK),
        e.IJiDl.cache(-e.YfDqK * .5, -e.YfDqK * .5, e.YfDqK, e.YfDqK),
        e.tqGMn.cache(-e.YfDqK * .5, -e.YfDqK * .5, e.YfDqK, e.YfDqK),
        stage.addChild(e.OakMA),
        stage.addChild(e.Aawad),
        stage.addChild(e.IJiDl),
        stage.addChild(e.tqGMn)) : e.usePad ? (e.joydir = new createjs.Shape,
        e.joydir.graphics.beginStroke("rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.2)").drawCircle(0, 0, e.JErbw),
        e.XPWvN || e.joydir.graphics.beginStroke("rgba(0,0,0,0.5)").beginFill("rgba(0,0,0,0.1)").drawCircle(0, 0, e.JErbw / 2),
        e.joydir.cache(-e.JErbw, -e.JErbw, e.JErbw * 2, e.JErbw * 2),
        stage.addChild(e.joydir),
        e.SLFeU = new createjs.Shape,
        e.SLFeU.graphics.beginStroke("rgba(255,255,255,0.5)").beginFill("rgba(255,255,255,0.2)").drawCircle(0, 0, e.CjYpf),
        e.SLFeU.cache(-e.CjYpf, -e.CjYpf, e.CjYpf * 2, e.CjYpf * 2),
        e.SLFeU.visible = !1,
        stage.addChild(e.SLFeU)) : (stage.addEventListener("touchstart", function(n) {
            n.preventDefault();
            QwTxA(n);
            DMryL.cMVGic(n.changedTouches[0].clientX, n.changedTouches[0].clientY, !0)
        }, !1),
        stage.addEventListener("touchmove", function(n) {
            n.preventDefault();
            DMryL.cMVGic(n.changedTouches[0].clientX, n.changedTouches[0].clientY, !1)
        }, !1),
        stage.addEventListener("touchend", function(n) {
            n.preventDefault();
            DMryL.cMVGic(n.changedTouches[0].clientX, n.changedTouches[0].clientY, !1)
        }, !1)),
        e.XPWvN && (e.xkybr = new createjs.Shape,
        e.xkybr.graphics.beginStroke("rgba(0,0,0,1)").beginFill("rgba(0,0,0,0.5)").drawCircle(0, 0, e.FEcKN),
        e.xkybr.cache(-e.FEcKN, -e.FEcKN, e.FEcKN * 2, e.FEcKN * 2),
        stage.addChild(e.xkybr)),
        e.wygVE = new createjs.Shape,
        e.wygVE.graphics.beginStroke("rgba(0,100,0,1)").beginFill("rgba(0,50,0,0.5)").drawCircle(0, 0, e.FEcKN),
        e.wygVE.cache(-e.FEcKN, -e.FEcKN, e.FEcKN * 2, e.FEcKN * 2),
        stage.addChild(e.wygVE),
        e.hXmRi = new createjs.Shape,
        e.hXmRi.graphics.beginStroke("rgba(0,0,100,1)").beginFill("rgba(0,0,50,0.5)").drawCircle(0, 0, e.FEcKN),
        e.hXmRi.cache(-e.FEcKN, -e.FEcKN, e.FEcKN * 2, e.FEcKN * 2),
        stage.addChild(e.hXmRi),
        e.ZvFKx = new createjs.Shape,
        e.ZvFKx.graphics.beginStroke("rgba(100,0,0,1)").beginFill("rgba(50,0,0,0.5)").drawCircle(0, 0, e.FEcKN),
        e.ZvFKx.cache(-e.FEcKN, -e.FEcKN, e.FEcKN * 2, e.FEcKN * 2),
        stage.addChild(e.ZvFKx),
        e.OSIjm) {
            e.OakMA.on("mousedown", function() {
                DMryL.keydy = -1;
                DMryL.MLYzs()
            });
            e.OakMA.on("pressup", function() {
                rvMca();
                DMryL.keydy = 0;
                DMryL.MLYzs()
            });
            e.Aawad.on("mousedown", function() {
                DMryL.keydy = 1;
                DMryL.MLYzs()
            });
            e.Aawad.on("pressup", function() {
                rvMca();
                DMryL.keydy = 0;
                DMryL.MLYzs()
            });
            e.IJiDl.on("mousedown", function() {
                DMryL.keydx = -1;
                DMryL.MLYzs()
            });
            e.IJiDl.on("pressup", function() {
                rvMca();
                DMryL.keydx = 0;
                DMryL.MLYzs()
            });
            e.tqGMn.on("mousedown", function() {
                DMryL.keydx = 1;
                DMryL.MLYzs()
            });
            e.tqGMn.on("pressup", function() {
                rvMca();
                DMryL.keydx = 0;
                DMryL.MLYzs()
            })
        } else if (e.usePad) {
            e.joydir.on("mousedown", function(n) {
                DMryL.migIO = n.stageX / EZZXG;
                DMryL.EXiRj = n.stageY / EZZXG;
                DMryL.MfSvI = !0
            });
            e.joydir.on("pressup", function() {
                rvMca();
                DMryL.MfSvI = !1
            });
            e.joydir.on("pressmove", function(n) {
                DMryL.migIO = n.stageX / EZZXG;
                DMryL.EXiRj = n.stageY / EZZXG;
                DMryL.MfSvI = !0
            })
        }
        if (e.XPWvN) {
            e.xkybr.on("mousedown", function() {
                DMryL.keyRun = !0
            });
            e.xkybr.on("pressup", function() {
                rvMca();
                DMryL.keyRun = !1
            })
        }
        e.wygVE.on("mousedown", function() {
            DMryL.KyTUK = !0;
            DMryL.nwdCq("L");
            DMryL.hPass = !1;
            DMryL.GEWoo = 5
        });
        e.wygVE.on("pressup", function() {
            rvMca();
            DMryL.KyTUK = !1
        });
        e.hXmRi.on("mousedown", function() {
            DMryL.JArJy = !0;
            DMryL.nwdCq("S");
            DMryL.GEWoo = 5
        });
        e.hXmRi.on("pressup", function() {
            rvMca();
            DMryL.JArJy = !1
        });
        e.ZvFKx.on("mousedown", function() {
            DMryL.YqEnk = !0;
            DMryL.hPass = !0;
            DMryL.nwdCq("H");
            DMryL.GEWoo = 5
        });
        e.ZvFKx.on("pressup", function() {
            rvMca();
            DMryL.YqEnk = !1
        });
        return e.eSUPo(),
        e
    }
    return __extends(t, n),
    t.prototype.eSUPo = function() {
        if (this.dirX = 10 + (this.OSIjm ? this.YfDqK * 1.5 : this.JErbw) + 10,
        this.dirY = view.height - (this.OSIjm ? this.YfDqK * 1.5 : this.JErbw) - 80,
        this.OSIjm ? (this.OakMA.x = this.dirX,
        this.Aawad.x = this.dirX,
        this.IJiDl.x = this.dirX - this.YfDqK,
        this.tqGMn.x = this.dirX + this.YfDqK,
        parameters.touchMode == 1 ? (this.OakMA.y = this.dirY,
        this.Aawad.y = this.dirY + this.YfDqK,
        this.IJiDl.y = this.dirY + this.YfDqK,
        this.tqGMn.y = this.dirY + this.YfDqK) : (this.OakMA.y = this.dirY - this.YfDqK,
        this.Aawad.y = this.dirY + this.YfDqK,
        this.IJiDl.y = this.dirY,
        this.tqGMn.y = this.dirY)) : this.usePad && (this.joydir.x = this.dirX,
        this.joydir.y = this.dirY),
        this.XPWvN && (this.xkybr.x = view.width - 20 - this.FEcKN * 4,
        this.xkybr.y = view.height - 80 - this.FEcKN),
        this.wygVE.x = view.width - 15 - this.FEcKN * 3,
        this.wygVE.y = view.height - 80 - this.FEcKN * 3,
        this.hXmRi.x = view.width - 10 - this.FEcKN * 2,
        this.hXmRi.y = view.height - 80 - this.FEcKN,
        this.ZvFKx.x = view.width - 5 - this.FEcKN,
        this.ZvFKx.y = view.height - 80 - this.FEcKN * 3,
        this.zoxEI = this.FEcKN + (this.XPWvN ? this.ZvFKx.x - this.xkybr.x : this.ZvFKx.x - this.wygVE.x),
        parameters.touchDirectionOnRight) {
            if (this.OSIjm) {
                this.OakMA.x = view.width - this.OakMA.x;
                this.Aawad.x = view.width - this.Aawad.x;
                var n = this.IJiDl.x;
                this.IJiDl.x = view.width - this.tqGMn.x;
                this.tqGMn.x = view.width - n
            } else
                this.usePad && (this.dirX = view.width - this.dirX,
                this.joydir.x = this.dirX);
            this.XPWvN && (this.xkybr.x = this.xkybr.x - (view.width - this.FEcKN - 5 - this.zoxEI));
            this.wygVE.x = this.wygVE.x - (view.width - this.FEcKN - 5 - this.zoxEI);
            this.hXmRi.x = this.hXmRi.x - (view.width - this.FEcKN - 5 - this.zoxEI);
            this.ZvFKx.x = this.ZvFKx.x - (view.width - this.FEcKN - 5 - this.zoxEI)
        }
        if (view.gjQFv && !this.aTSgE) {
            this.aTSgE = !0;
            view.gjQFv.TZYxo.on("mousedown", function() {
                replay.tcjdw() && DMryL.IMXyn > 0 && (DMryL.IMXyn--,
                wHUbV.blink(),
                replay.save("M", 50, !0))
            })
        }
    }
    ,
    t.prototype.cMVGic = function(n, t, i) {
        parameters.touchDirectionOnRight == 0 && n > this.wygVE.x - this.FEcKN * 3 - this.FEcKN && t > this.ZvFKx.y - this.FEcKN && sqSum(this.migIO - n, this.EXiRj - t) > 2500 || parameters.touchDirectionOnRight == 1 && n < this.ZvFKx.x - this.FEcKN && t > this.ZvFKx.y - this.FEcKN && sqSum(this.migIO - n, this.EXiRj - t) > 2500 || (parameters.touchMode == 6 ? (this.pRltE = this.pRltE * .1 + this.migIO * .9,
        this.bALEo = this.bALEo * .1 + this.EXiRj * .9) : (this.pRltE = this.migIO,
        this.bALEo = this.EXiRj),
        this.MfSvI = i,
        this.migIO = n,
        this.EXiRj = t,
        this.GEWoo = 5)
    }
    ,
    t.prototype.cVDad = function() {
        if (n.prototype.cVDad.call(this),
        game.VZEWj && view.dsYsj != null && this.skip()) {
            game.AQsEp();
            return
        }
        if (this.XPWvN && (this.xkybr.alpha = this.keyRun ? 1 : .5),
        this.wygVE.alpha = this.KyTUK ? 1 : .5,
        this.hXmRi.alpha = this.JArJy ? 1 : .5,
        this.ZvFKx.alpha = this.YqEnk ? 1 : .5,
        this.usePad)
            if (this.SLFeU.visible = this.MfSvI,
            this.MfSvI) {
                if (this.SLFeU.x = this.migIO,
                this.SLFeU.y = this.EXiRj,
                this.uCIJh = this.migIO - this.dirX,
                this.vGeSj = this.EXiRj - this.dirY,
                DsVVx(this.uCIJh, this.vGeSj) > this.JErbw + 5) {
                    var t = Math.atan2(this.vGeSj, this.uCIJh);
                    this.fixedTouch ? (this.SLFeU.x = this.dirX + Math.cos(t) * (this.JErbw + 5),
                    this.SLFeU.y = this.dirY + Math.sin(t) * (this.JErbw + 5)) : (this.dirX = this.migIO - Math.cos(t) * this.JErbw,
                    this.dirY = this.EXiRj - Math.sin(t) * this.JErbw,
                    this.joydir.x = this.dirX,
                    this.joydir.y = this.dirY)
                }
                view.PIlOD ? (this.bZwnI = this.uCIJh,
                this.VrJel = this.vGeSj) : (this.bZwnI = this.vGeSj,
                this.VrJel = -this.uCIJh);
                (this.VrJel != 0 || this.bZwnI != 0) && (DMryL.XbkLy = Math.atan2(this.VrJel, this.bZwnI));
                this.XPWvN || (DMryL.keyRun = sqSum(this.vGeSj, this.uCIJh) > this.uxoel)
            } else
                DMryL.XbkLy = NaN;
        else
            parameters.touchMode == 7 ? this.MfSvI ? (this.uCIJh = this.migIO + view.x - view.wmdto,
            this.vGeSj = this.EXiRj + view.y - view.FpLNn,
            view.PIlOD ? (this.bZwnI = this.uCIJh,
            this.VrJel = this.vGeSj) : (this.bZwnI = this.vGeSj,
            this.VrJel = -this.uCIJh),
            this.player != undefined && (this.bZwnI = this.bZwnI - this.player.yAjCz.SDHsM,
            this.VrJel = this.VrJel - this.player.yAjCz.dTfhX),
            (this.VrJel != 0 || this.bZwnI != 0) && (DMryL.XbkLy = Math.atan2(this.VrJel, this.bZwnI))) : (DMryL.XbkLy = NaN,
            this.joydir.x = this.dirX,
            this.joydir.y = this.dirY) : parameters.touchMode == 6 && (this.MfSvI && sqSum(this.migIO - this.pRltE, this.EXiRj - this.bALEo) < 2500 ? (this.uCIJh = this.migIO - this.pRltE,
            this.vGeSj = this.EXiRj - this.bALEo,
            view.PIlOD ? (this.bZwnI = this.uCIJh,
            this.VrJel = this.vGeSj) : (this.bZwnI = this.vGeSj,
            this.VrJel = -this.uCIJh),
            (this.VrJel != 0 || this.bZwnI != 0) && (DMryL.XbkLy = Math.atan2(this.VrJel, this.bZwnI))) : DMryL.XbkLy = NaN);
        (this.KyTUK || this.YqEnk || this.JArJy) && (this.ftg = 50,
        this.power = vRzMg(this.power + 5, 0, 100));
        this.ftg -= 1;
        this.ftg < 0 && this.AikYq();
        this.GEWoo -= 1
    }
    ,
    t.prototype.skip = function() {
        return this.YqEnk || this.KyTUK || this.JArJy
    }
    ,
    t.prototype.dirdx = function() {
        return this.OSIjm ? view.PIlOD ? this.keydx : this.keydy : this.MfSvI ? this.bZwnI * sgn(this.bZwnI) > this.VrJel * sgn(this.VrJel) * .5 ? sgn(this.bZwnI) : 0 : 0
    }
    ,
    t.prototype.dirdy = function() {
        return this.OSIjm ? view.PIlOD ? this.keydy : -this.keydx : this.MfSvI ? this.VrJel * sgn(this.VrJel) > this.bZwnI * sgn(this.bZwnI) * .5 ? sgn(this.VrJel) : 0 : 0
    }
    ,
    t
}(uSTzW);
bcVLQ = function() {
    function n() {
        this.sNDDR = 45;
        this.Quggj = 45;
        this.PBzyl = this.Quggj;
        this.ahcDa = 0;
        this.XAFCH = game.kirRk;
        this.tNLaS = 0;
        this.dAuKS = !1;
        this.sElgXG(this.sNDDR);
        setInterval(JYgby, 1e3);
        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.framerate = this.sNDDR;
        createjs.Ticker.maxDelta = this.sNDDR * 2;
        createjs.Ticker.addEventListener("tick", cVDad)
    }
    return n.prototype.cVDad = function() {
        (game.VZEWj || game.RJuhr) && this.rJHYSS();
        this.tNLaS += this.dAuKS ? this.SjIWa * RDQFb : this.fiWcu
    }
    ,
    n.prototype.rJHYSS = function() {
        this.ahcDa = Date.now();
        this.ELTrx = this.ahcDa - game.kirRk * 1e3 / this.SjIWa;
        this.tNLaS = game.kirRk;
        this.XAFCH = 0
    }
    ,
    n.prototype.sElgXG = function(n) {
        this.perceivedFPS = n;
        this.SjIWa = this.perceivedFPS / this.sNDDR
    }
    ,
    n
}();
Kit = function() {
    function n(n, t, i, r, u, f, e, o) {
        this.nbGwK = n;
        this.nysZn = t;
        this.ojoDw = i;
        this.kfRPE = r;
        this.kbOMz = u;
        this.MhbOj = f;
        this.vMdYW = e;
        this.KdbuQ = o
    }
    return n.prototype.qFTdq = function(n) {
        return this.IupxK().distance(n.IupxK())
    }
    ,
    n.prototype.JYUGm = function(n) {
        switch (~~n) {
        case 0:
            return this.nbGwK;
        case 1:
            return this.kbOMz;
        case 2:
            return "#000000";
        case 3:
            return "#ffffff"
        }
        return "#000000"
    }
    ,
    n.prototype.Gucak = function(n) {
        switch (~~n) {
        case 0:
            return 1;
        case 1:
            return .8;
        case 2:
            return .5;
        case 3:
            return .4
        }
        return 0
    }
    ,
    n.prototype.IupxK = function() {
        return new Color((cTAWM(this.nbGwK).r * this.HABbD() + cTAWM(this.nysZn).r * this.KXoYI() + cTAWM(this.ojoDw).r * this.dSuyb()) * .7 + cTAWM(this.kbOMz).r * .3 + cTAWM(this.MhbOj).r * 0,(cTAWM(this.nbGwK).g * this.HABbD() + cTAWM(this.nysZn).g * this.KXoYI() + cTAWM(this.ojoDw).g * this.dSuyb()) * .7 + cTAWM(this.kbOMz).g * .3 + cTAWM(this.MhbOj).g * 0,(cTAWM(this.nbGwK).b * this.HABbD() + cTAWM(this.nysZn).b * this.KXoYI() + cTAWM(this.ojoDw).b * this.dSuyb()) * .7 + cTAWM(this.kbOMz).b * .3 + cTAWM(this.MhbOj).b * 0)
    }
    ,
    n.prototype.HABbD = function() {
        return [1, .5, .5, .8, .8, .5, .4, 1, .5, .7, .8, .9, .5, .5, .5, .8, .3, .3, .3, 1, .9][this.kfRPE]
    }
    ,
    n.prototype.KXoYI = function() {
        return [0, .5, .5, .2, .2, .5, .6, 0, .5, .3, .2, .1, .5, .5, .5, .1, .3, .3, .3, 0, .05][this.kfRPE]
    }
    ,
    n.prototype.dSuyb = function() {
        return 1 - this.HABbD() - this.KXoYI()
    }
    ,
    n
}();
Color = function() {
    function n(n, t, i) {
        this.r = n;
        this.g = t;
        this.b = i
    }
    return n.prototype.utlfW = function() {
        return (this.max() + this.min()) / 2
    }
    ,
    n.prototype.ibKOU = function() {
        var n = this.utlfW();
        return n >= 255 || n <= 0 ? 0 : (this.max() - this.min()) / (255 - Math.abs(2 * n - 255))
    }
    ,
    n.prototype.distance = function(n) {
        return Math.pow(this.r - n.r, 2) + Math.pow(this.g - n.g, 2) + Math.pow(this.b - n.b, 2) + Math.pow(this.utlfW() - n.utlfW(), 2) + Math.pow(this.ibKOU() - n.ibKOU(), 2)
    }
    ,
    n.prototype.str = function() {
        return ~~this.r + "," + ~~this.g + "," + ~~this.b
    }
    ,
    n.prototype.max = function() {
        return max(max(this.r, this.g), this.b)
    }
    ,
    n.prototype.min = function() {
        return min(min(this.r, this.g), this.b)
    }
    ,
    n
}();
Team = function() {
    function n(n, t, i, r, u) {
        var e, s, o, f;
        for (this.YRdsi = 0,
        this.JBkov = 1,
        this.eWknp = 1,
        this.number = i,
        this.GPXFd = i == 1 ? 0 : 10,
        this.stadiumCapacity = 2e4,
        this.FSpuT = 2,
        this.tICkn = 0,
        this.GRAUc = 0,
        this.id = n,
        this.dir = t,
        this.LTpCB = 0,
        this.OUEVQ = [],
        this.number == parameters.userTeam && (game.LZXFT = this),
        this.name = r.name,
        this.countryCode = r.countryCode,
        this.stadiumCapacity = r.stadiumCapacity,
        this.SKQKN = r.teamType == 2,
        this.kits = [],
        o = 0; o < 5; o++)
            e = r.kits[o],
            !e && r.kits.shirt && (e = r.kits.shirt[o]),
            e && (this.kits[e.kitN] = new Kit(e.shirtC1,e.shirtC2,e.shirtC3,parseInt(e.shirtT),e.shortsC1,e.shortsC2,parseInt(e.shortsT),e.fontC));
        for (this.p = [],
        s = r.players.length,
        o = 0; o <= s; o++)
            f = r.players[o],
            f && (f.place === 0 ? (this.p[f.place] = new sjRXf(f.id,this,f,u),
            this.p[f.place].cpu = new NZpgG(this.p[f.place])) : f.place < game.rules.Osawo && (this.p[f.place] = new Player(f.id,this,f,u),
            this.p[f.place].cpu = new FsOgA(this.p[f.place]))),
            this.AxvNR = this.p[0];
        r.RupIc != undefined && this.QIDQR(r.RupIc.trim());
        this.RCcbW = new wWFNE(this)
    }
    return n.prototype.sgGIv = function() {
        return this.countryCode == "ENG" || this.countryCode == "SCO" || this.countryCode == "US" || this.countryCode == "CA" || this.countryCode == "AU" || this.countryCode == "ZA"
    }
    ,
    n.prototype.stadium = function() {
        return this.name ? this.id + this.name.length + this.name.charCodeAt(0) * 10 + this.name.charCodeAt(1) * 3 : this.id
    }
    ,
    n.prototype.NXnGl = function() {
        return this.kits[this.JBkov]
    }
    ,
    n.prototype.QacVs = function() {
        this.p.forEach(function(n) {
            return n.QacVs()
        })
    }
    ,
    n.prototype.tLmpq = function(n) {
        var t = this;
        this.p.forEach(function(i, r) {
            if (i == n) {
                n.ZwOsB();
                yxdsY.removeChild(n);
                t.OUEVQ.push(n);
                t.p.splice(r, 1);
                QwTxA("g length:" + t.p.length.toString());
                view.update();
                return
            }
        })
    }
    ,
    n.prototype.RupIc = function() {
        var n = "";
        return this.OUEVQ.forEach(function(t) {
            n += t.place.toString() + ","
        }),
        n.length > 0 && (n = n.substr(0, n.length - 1)),
        n
    }
    ,
    n.prototype.cVDad = function() {
        this.RCcbW.cVDad();
        this.p.forEach(function(n) {
            return n.cVDad()
        })
    }
    ,
    n.prototype.uJUbD = function() {
        game.VZEWj || (this.RCcbW.uJUbD(),
        this.iIeiB(),
        game.XfRzc && (b.VmddP.sNbSL() < 3 && (this.pFhbE += 1),
        b.VmddP.hzrxR > 40 && (this.pFhbE = 0)),
        game.mrEkW || this.EnTfP(),
        --this.GPXFd <= 0 && (this.IoQbi(),
        this.GPXFd = 20),
        this.p.forEach(function(n) {
            return n.uJUbD()
        }))
    }
    ,
    n.prototype.IoQbi = function() {
        this.cover = this.WphkO(b.xHdWf());
        this.risk = 1 - this.cover / game.rules.Osawo
    }
    ,
    n.prototype.iIeiB = function() {
        ++this.YRdsi > 10 && (this.YRdsi = 0);
        this.p[this.YRdsi] != null && this.p[this.YRdsi].IoQbi()
    }
    ,
    n.prototype.EnTfP = function() {
        var n = this
          , t = 0
          , i = 0;
        this.p.forEach(function(r, u) {
            u > 0 && (r.yAjCz.SDHsM * n.dir < t * n.dir && (t = r.yAjCz.SDHsM),
            r.yAjCz.SDHsM * n.dir > i * n.dir && r.ZZPKE < .5 && (i = r.yAjCz.SDHsM))
        });
        this.kyfVy = t;
        this.hawot = i
    }
    ,
    n.prototype.snoIG = function(n) {
        return new iLfep(pitch.wmdto * .85 * this.dir,0).distXY(n)
    }
    ,
    n.prototype.kkBYG = function(n) {
        return game.rules.kqBBq && n * this.dir > this.opn.kyfVy * this.dir + 5 && b.yAjCz.SDHsM * this.dir < n * this.dir
    }
    ,
    n.prototype.bKxNc = function() {
        return this.dir === 1 ? pitch.QPztY : pitch.tWdPg
    }
    ,
    n.prototype.IXBtu = function() {
        return this.dir === -1 ? pitch.QPztY : pitch.tWdPg
    }
    ,
    n.prototype.kAqMF = function() {
        return this.dir === 1 ? pitch.goal1 : pitch.goal2
    }
    ,
    n.prototype.XSIgd = function() {
        return this.dir === -1 ? pitch.goal1 : pitch.goal2
    }
    ,
    n.prototype.fGhOw = function() {
        return this.dir === 1 ? pitch.kFPXJ : pitch.oxtiM
    }
    ,
    n.prototype.ZRRGb = function() {
        return this.dir === -1 ? pitch.kFPXJ : pitch.oxtiM
    }
    ,
    n.prototype.sGhEI = function(n, t, i) {
        var u, f, e, r, o, s;
        i === void 0 && (i = .3);
        u = n.angTo(t);
        f = n.wapWW(t);
        for (e in this.p)
            if (r = this.p[e].yAjCz,
            o = n.wapWW(r),
            o < f && (s = n.angTo(r),
            btovy(u, s) < i))
                return !0;
        return !1
    }
    ,
    n.prototype.xgWlG = function(n, t, i) {
        var e, f, u, o;
        i === void 0 && (i = .3);
        var s = n.angTo(t)
          , r = n.wapWW(t)
          , h = vRzMg(r * .108, 22500, r)
          , c = vRzMg(r * .435, 0, r - 22500);
        for (e in this.p)
            if (f = this.p[e].yAjCz,
            u = n.wapWW(f),
            (u < h || u > c && u < r) && (o = n.angTo(f),
            btovy(s, o) < i))
                return !0;
        return !1
    }
    ,
    n.prototype.kitST = function() {
        return sgn(b.VmddP.SDHsM) == this.dir
    }
    ,
    n.prototype.Rlfmq = function(n, t) {
        t === void 0 && (t = null);
        var i = -1, r;
        return this.p.forEach(function(u) {
            var f = u.yAjCz.wapWW(n);
            (f < i || i < 0) && u != t && (i = f,
            r = u)
        }),
        r
    }
    ,
    n.prototype.CQKpC = function(n) {
        var u = this.opn.Rlfmq(n), i = u.yAjCz.distXY(n), t = vRzMg(i, 0, 500) * .7, r;
        return i > 20 && (t += 50),
        i > 40 && (t += 50),
        i > 80 && (t += 50),
        r = this.IXBtu().oROkp,
        t -= vRzMg(DsVVx(n.SDHsM - r.SDHsM, (n.dTfhX - r.dTfhX) * .1), 0, 800) * .3,
        this.pHOXU ? t += this.opn.riskIn(n) * 300 : t -= this.riskIn(n) * 300,
        t
    }
    ,
    n.prototype.lmgIs = function() {
        this.iTzhz = this.baxFk;
        this.baxFk = this.CQKpC(b.yAjCz)
    }
    ,
    n.prototype.BzoVx = function() {
        return this.baxFk - this.iTzhz
    }
    ,
    n.prototype.WphkO = function(n) {
        var t = 0
          , i = this.kAqMF().yAjCz
          , r = n.wapWW(i);
        return this.p.forEach(function(n) {
            n.yAjCz.wapWW(i) < r && (t += 1)
        }),
        t
    }
    ,
    n.prototype.riskIn = function(n) {
        var t = 0
          , i = this.kAqMF().yAjCz
          , r = n.wapWW(i);
        return this.p.forEach(function(n) {
            n.yAjCz.wapWW(i) < r && (t += 1)
        }),
        1 - t / game.rules.Osawo
    }
    ,
    n.prototype.SWQkS = function() {
        this.p.forEach(function(n) {
            return game.SWQkS(n)
        })
    }
    ,
    n.prototype.kJAZr = function() {
        this.p.forEach(function(n) {
            n.ZZPKE = 0
        })
    }
    ,
    n.prototype.HiPBr = function() {
        var n = this;
        this.p.forEach(function(t) {
            t.ZZPKE = t.yAjCz.SDHsM * n.dir > b.yAjCz.SDHsM * n.dir && b.vSdIU != t ? vRzMg((t.yAjCz.SDHsM * n.dir - n.opn.kyfVy * n.dir - 5) * .05, 0, 1) : 0
        })
    }
    ,
    n.prototype.CrMel = function() {
        for (var n, i = vRzMg((b.yAjCz.SDHsM * this.dir + pitch.wmdto) / pitch.width, 0, 1), r = ~~vRzMg((i - .6) * 15, 0, 5), t = 1; t <= r; t += 1)
            n = this.MdZcg(),
            n != null && (n.locate(b.YQgRD.SPPZQ(Math.random() * Math.PI * 2, pitch.FpLNn * Math.random() * .3)),
            n.cpu.fQMps = new BBvSX(n.cpu))
    }
    ,
    n.prototype.WmZbZ = function() {
        for (var n, i = vRzMg((b.yAjCz.SDHsM * this.dir + pitch.wmdto) / pitch.width, 0, 1), r = ~~vRzMg((.4 - i) * 15, 0, 5), t = 1; t <= r; t += 1)
            n = this.vhdXz(),
            n != null && (n.locate(b.YQgRD.SPPZQ(Math.random() * Math.PI * 2, pitch.FpLNn * Math.random() * .3)),
            n.cpu.fQMps = new BBvSX(n.cpu))
    }
    ,
    n.prototype.FZFLq = function() {
        var r = 10 / game.rules.cayfO, f = this.ZTpKZ() * .6 / r, u, e, n, t, i;
        for (QwTxA("barrier: " + f.toString()),
        u = b.yAjCz.angTo(this.kAqMF().WiMOO(b.yAjCz)),
        e = b.yAjCz.angTo(this.kAqMF().VlTzm(b.yAjCz)),
        n = 1; n <= f; n += 1)
            t = u + r * (n - 1),
            btovy(t, e) > this.ZTpKZ() && (t = u - r * (n - 1)),
            i = this.vhdXz(),
            i != null && (i.locate(b.yAjCz.SPPZQ(t, game.rules.cayfO)),
            i.QJaFL = !0)
    }
    ,
    n.prototype.vhdXz = function() {
        var n, t = 0, i;
        do
            i = vRzMg(1 + ~~(Math.random() * 10), 1, 10),
            n = this.p[i],
            t += 1;
        while ((n == null || n.qstAW() || n.QJaFL || this.kAqMF().distXY(n) < this.kAqMF().distXY(b) * .75) && t < 30);
        return n
    }
    ,
    n.prototype.MdZcg = function() {
        var n, t = 0, i;
        do
            i = vRzMg(1 + ~~(Math.random() * 10), 1, 10),
            n = this.p[i],
            t += 1;
        while ((n == null || n.qstAW() || n == game.hoywu || n.QJaFL || this.XSIgd().distXY(n) < this.XSIgd().distXY(b) * .75) && t < 30);
        return n
    }
    ,
    n.prototype.ZTpKZ = function() {
        var n = b.yAjCz.angTo(this.kAqMF().postL)
          , t = b.yAjCz.angTo(this.kAqMF().postR);
        return btovy(n, t)
    }
    ,
    n.prototype.fGCAf = function() {
        this.p.forEach(function(n) {
            sgn(n.yAjCz.SDHsM) == sgn(b.yAjCz.SDHsM) && Math.abs(n.yAjCz.SDHsM) > pitch.wmdto - pitch.QPztY.width && (n.yAjCz.SDHsM = (pitch.wmdto - pitch.QPztY.width) * sgn(n.yAjCz.SDHsM))
        });
        this.AxvNR.sweFh(-(pitch.wmdto - 2) * this.dir, 0)
    }
    ,
    n.prototype.QIDQR = function(n) {
        var i = this, t, r, u;
        if (n != "") {
            t = n.split(",");
            for (r in t)
                u = parseInt(t[r]),
                this.p.forEach(function(n, t) {
                    if (n.place == u) {
                        QwTxA(n.lastName);
                        i.OUEVQ.push(n);
                        i.p.splice(t, 1);
                        return
                    }
                });
            view.update()
        }
    }
    ,
    n.prototype.wBAzn = function() {
        this.p.forEach(function(n) {
            return n.Lqxpc()
        })
    }
    ,
    n.prototype.ygKtv = function() {
        this.p.forEach(function(n) {
            return n.JnnlF()
        })
    }
    ,
    n.prototype.Tfugl = function() {
        this.p.forEach(function(n) {
            return n.getUp()
        })
    }
    ,
    n.prototype.RixMQ = function() {
        var n = this, t, i;
        this.p.forEach(function(t) {
            t.sweFh(t.map.SDHsM * n.dir * .5 + 20 - Math.random() * 40, t.map.dTfhX * .5 * n.dir + 20 - Math.random() * 40);
            n.ZRRGb().isIn(t.yAjCz) && (t.yAjCz.SDHsM = -Math.random() * 50 * n.dir);
            t.yAjCz.distXY(pitch.center) < game.rules.cayfO && (t.yAjCz.SDHsM -= (game.rules.cayfO + Math.random() * 50) * n.dir);
            t.XoWzU = 0
        });
        this.AxvNR.yAjCz.SDHsM = -pitch.wmdto * .96 * this.dir;
        this.AxvNR.yAjCz.dTfhX = 0;
        t = this.Rlfmq(pitch.center);
        i = this.Rlfmq(pitch.center, t);
        t.sweFh(-this.dir * 3, -4);
        i.sweFh(-this.dir * 3, 4)
    }
    ,
    n.prototype.CSpPK = function() {
        this.p.forEach(function(n) {
            n.cpu == null || n.qstAW() || n.sweFh(n.yAjCz.SDHsM * .5 + n.cpu.zMbFr.SDHsM * .5, n.yAjCz.dTfhX * .5 + n.cpu.zMbFr.dTfhX * .5)
        })
    }
    ,
    n.prototype.yAfti = function() {
        this.p.forEach(function(n) {
            !n.Rnhbu() && n.map.SDHsM < -350 && n.UmftV(-5);
            !n.Rnhbu() && n.map.SDHsM < 100 && n.UmftV(-5)
        })
    }
    ,
    n.prototype.tEfWO = function() {
        var n = this;
        this.p.forEach(function(t) {
            !t.Rnhbu() && t.yAjCz.SDHsM * n.dir < n.kyfVy * n.dir + 50 && t.UmftV(5)
        })
    }
    ,
    n.prototype.jlQOV = function() {
        var n = this;
        this.p.forEach(function(t, i) {
            i > 0 && t.sweFh(Math.random() * 3, n.dir * 100 - 50 + i * 10 - Math.random() * 3)
        })
    }
    ,
    n.prototype.rWTHu = function() {
        var n = this;
        this.p.forEach(function(t, i) {
            t.sweFh(n.dir * 120 - 80 + i * 16 - Math.random() * 3, Math.random() * 3);
            t.watch.SDHsM = 0;
            t.watch.dTfhX = 5e3
        })
    }
    ,
    n.prototype.nNJyJ = function() {
        this.p.forEach(function(n) {
            n.rest()
        })
    }
    ,
    n.prototype.GVKUt = function() {
        this.p.forEach(function(n) {
            Math.random() > .7 && n.XZRoC();
            Math.random() > .7 && n.call()
        })
    }
    ,
    n.prototype.tjpHP = function() {
        this.p.forEach(function(n) {
            Math.random() > .7 && n.tjpHP()
        });
        Math.random() > .7 && this.AxvNR.XZRoC()
    }
    ,
    n.prototype.exult = function() {
        this.p.forEach(function(n) {
            n == b.vSdIU && Math.random() > .8 ? n.jump() : n.XZRoC();
            Math.random() > .3 && n.exult()
        })
    }
    ,
    n.prototype.call = function() {
        this.p.forEach(function(n) {
            Math.random() > .5 && n.call()
        })
    }
    ,
    n.prototype.wnkdC = function() {
        var n = this;
        this.p.forEach(function(t) {
            Math.random() > .5 && t.XZRoC();
            Math.random() > .5 && t.call();
            Math.random() > .3 && game.hoywu.t == n && t.exult();
            Math.random() > .3 && game.hoywu.t != n && t.tjpHP()
        })
    }
    ,
    n.prototype.qWnRz = function() {
        this.p.forEach(function(n) {
            n.QJaFL = game.hoywu != null ? n != game.hoywu : !0
        })
    }
    ,
    n.prototype.mpRKT = function() {
        this.p.forEach(function(n) {
            n.mpRKT()
        })
    }
    ,
    n.prototype.qihcS = function() {
        this.p.forEach(function(n) {
            n.QJaFL = !1
        })
    }
    ,
    n.prototype.lqByF = function() {
        return this.pHOXU && game.XfRzc ? (1 - this.opn.cover * .09) * this.sbUdj * .4 : .02 * this.sbUdj
    }
    ,
    n.prototype.zSndk = function() {
        this.p.forEach(function(n) {
            n.zSndk()
        })
    }
    ,
    n.prototype.record = function() {
        this.p.forEach(function(n) {
            n.record()
        })
    }
    ,
    n.prototype.iyHlH = function(n, t) {
        var i = "";
        return this.p.forEach(function(r) {
            i += (i == "" ? "" : ";") + r.iyHlH(n, t)
        }),
        i
    }
    ,
    n.prototype.pZlkX = function(n, t, i) {
        var u = n.split(";");
        for (var r in this.p)
            this.p[r].pZlkX(u[r], t, i)
    }
    ,
    n.prototype.efTQq = function() {
        var n = this;
        this.statistics = new ZHKkT;
        this.p.forEach(function(t) {
            n.statistics.add(t.statistics)
        })
    }
    ,
    n.prototype.HsYMP = function() {
        var n = "";
        return this.p.forEach(function(t) {
            n += t.HsYMP() + ";"
        }),
        n
    }
    ,
    n.prototype.displayName = function() {
        var t = game.WDTge ? 15 : 30, i, n;
        return this.name.length <= t ? this.name : this.name.indexOf(" ") < 0 ? this.name.substr(0, t) : (i = this.name.split(" "),
        n = "",
        i.forEach(function(t) {
            t[0] != undefined && t[0].toUpperCase() == t[0] && (n += t[0])
        }),
        n)
    }
    ,
    n.prototype.VMrII = function() {
        this.p.forEach(function(n) {
            n.UmftV(-n.VMrII)
        });
        this.Swkun()
    }
    ,
    n.prototype.Swkun = function() {
        this.p.forEach(function(n) {
            n.VMrII = 0
        })
    }
    ,
    n.prototype.Zrimx = function() {
        this.p.forEach(function(n) {
            n.cpu.HAcXs(Math.random() * 10)
        })
    }
    ,
    n.prototype.PsynU = function() {
        this.p.forEach(function(n) {
            n.cpu.ZmcFv(null)
        })
    }
    ,
    n.prototype.bdCtg = function(n) {
        this.p.forEach(function(t) {
            t.cpu.ACIPK(n)
        })
    }
    ,
    n.prototype.PDHZv = function() {
        this.p.forEach(function(n) {
            n.cpu.fQMps = new fBPhH(n.cpu)
        })
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Ball = function(n) {
    function t(t) {
        var i = n.call(this) || this;
        return i.VmddP = new Vector,
        i.ppzPB = new iLfep,
        i.yxmDO = new iLfep,
        i.crWZx = new iLfep,
        i.YQgRD = new iLfep,
        i.iaecV = new iLfep,
        i.spin = 0,
        i.sRUJy = 0,
        i.rotation = 0,
        i.eEicu = 0,
        i.niFJc = 0,
        i.QMRbU = new iLfep,
        i.hOFVm = new Vector,
        i.isOut = !1,
        i.LWJMi = 0,
        i.mLmSm = 0,
        game.Lxhhd = 0,
        i.HxCnF = !1,
        i.Soxzy = 0,
        i.jlIMp = 0,
        i.fuxxM = 0,
        i.radius = 4.5,
        i.shape = new createjs.Shape,
        i.shape.graphics.setStrokeStyle(.75),
        parameters.Llodm == 1 && t > 0 ? (i.ss = new createjs.SpriteSheet({
            images: ["balls/" + t + "_10.png"],
            frames: {
                height: 10,
                regX: 5,
                count: 400,
                regY: 5,
                width: 10
            }
        }),
        i.uGAgS = new createjs.Sprite(i.ss),
        yxdsY.addChild(i.uGAgS),
        parameters.graphics == 0 && i.shape.graphics.beginStroke("#000").drawCircle(0, 0, i.radius)) : parameters.graphics == 0 ? i.shape.graphics.beginStroke("#000").beginFill("#fff").drawCircle(0, 0, i.radius) : i.shape.graphics.beginFill("#fff").drawCircle(0, 0, i.radius),
        i.shape.cache(-5, -5, 10, 10),
        i.memCx = new Int16Array(400),
        i.memCy = new Int16Array(400),
        i.memCz = new Int16Array(400),
        i
    }
    return __extends(t, n),
    t.prototype.uJUbD = function() {
        var t, i, r;
        game.CnlZk ? (n.prototype.uJUbD.call(this),
        this.VmddP.TfgYn(.999)) : (this.yAjCz.SDHsM += this.VmddP.SDHsM * .5,
        this.yAjCz.dTfhX += this.VmddP.dTfhX * .5,
        this.yAjCz.hzrxR += this.VmddP.hzrxR * .5);
        this.vSdIU != null && (this.vSdIU.statistics.UiLDm += 1);
        (this.VmddP.SDHsM != 0 || this.VmddP.dTfhX != 0) && (this.qwWDw(this.spin),
        this.spin = this.spin * .99);
        pitch.isIn(b.yAjCz) || pitch.vXraR();
        this.yAjCz.hzrxR < this.radius && (this.yAjCz.hzrxR -= this.VmddP.hzrxR,
        this.VmddP.hzrxR *= -(.6 - PYgUk.Ctbzs * .2),
        t = vRzMg(.85 - this.VmddP.hzrxR * .15 + PYgUk.Ctbzs * .11, .6, .91),
        Math.random() < PYgUk.Ctbzs * .1 && (t = t * (.3 + Math.random() * .7)),
        this.VmddP.SDHsM *= t,
        this.VmddP.dTfhX *= t,
        this.spin = this.spin * .5,
        this.twRpe(),
        PYgUk.PRTwD(this.yAjCz),
        this.VmddP.hzrxR < .3 && (this.yAjCz.hzrxR = this.radius,
        this.VmddP.hzrxR = 0));
        this.yAjCz.hzrxR <= this.radius && this.VmddP.hzrxR == 0 ? (t = .98,
        Math.random() < PYgUk.Ctbzs * .02 && (t = t * (.3 + Math.random() * .7)),
        this.VmddP.SDHsM *= t,
        this.VmddP.dTfhX *= t) : this.VmddP.hzrxR -= .1;
        game.vjtYB && this.SDssJ() && (i = t1.Rlfmq(this.yAjCz),
        r = t2.Rlfmq(this.yAjCz),
        i.AjDvC < 250 && r.AjDvC > i.AjDvC && game.Jsjwy(i),
        r.AjDvC < 250 && i.AjDvC > r.AjDvC && game.Jsjwy(r));
        this.rotate();
        this.LWJMi += 1;
        game.XfRzc && (this.uincg += 1);
        this.Soxzy > 0 && (this.ppzPB = this.UQqJm(--this.Soxzy),
        this.yxmDO.SDHsM = this.ppzPB.SDHsM + this.VmddP.SDHsM * (--this.jlIMp - this.Soxzy),
        this.yxmDO.dTfhX = this.ppzPB.dTfhX + this.VmddP.dTfhX * (this.jlIMp - this.Soxzy));
        this.fuxxM > 0 && (this.fuxxM -= 1,
        this.kKEJq());
        this.OEDJp != null && this.OEDJp.OfiBh()
    }
    ,
    t.prototype.cVDad = function() {
        n.prototype.cVDad.call(this);
        this.draw();
        this.AwDPO()
    }
    ,
    t.prototype.isHigh = function() {
        return this.yAjCz.hzrxR > 40
    }
    ,
    t.prototype.SYkzz = function() {
        var t = (this.yAjCz.hzrxR - game.rules.rpqWH.height) / game.rules.rpqWH.height
          , n = (Math.abs(this.yAjCz.dTfhX) - game.rules.rpqWH.wmdto) / game.rules.rpqWH.width
          , i = t;
        return (t < 0 || n > 0 && n < 0) && (i = n),
        1 - vRzMg(i, 0, 1)
    }
    ,
    t.prototype.bfGuu = function() {
        return this.vSdIU == game.Nudsf().opn.AxvNR && this.ewpBc != null ? this.ewpBc : this.vSdIU
    }
    ,
    t.prototype.cpxIl = function() {
        this.yAjCz = this.iaecV.clone().deSCM(pitch, 0);
        this.QMRbU = this.yAjCz.clone();
        this.hOFVm.reset();
        pitch.goal1.rGmSf();
        pitch.goal2.rGmSf();
        this.VmddP.reset();
        this.MgmLe.reset();
        this.Soxzy = 0;
        this.jlIMp = 0;
        this.fuxxM = 0;
        this.isOut = !1;
        this.pENtg = !1;
        this.vSdIU = null;
        this.ewpBc = null;
        this.OEDJp = null;
        this.ARaNi = 0;
        game.Ozvkf()
    }
    ,
    Object.defineProperty(t.prototype, "HxCnF", {
        get: function() {
            return this.pENtg
        },
        set: function(n) {
            this.pENtg = n;
            nXmAQ && nXmAQ.HflRS(new Events.mJKol(game.kirRk,n))
        },
        enumerable: !1,
        configurable: !0
    }),
    t.prototype.xHdWf = function() {
        return game.XfRzc && this.OEDJp == null ? this.Soxzy > 0 ? this.ppzPB : this.yAjCz : this.YQgRD
    }
    ,
    t.prototype.ORQzc = function() {
        return this.isHigh() ? this.ppzPB : this.yAjCz
    }
    ,
    t.prototype.UQqJm = function(n) {
        var t = this.VmddP.xJwON()
          , i = this.VmddP.angXY();
        return new iLfep(this.yAjCz.SDHsM + Math.cos(i + this.spin * n * .5) * t * n * vMiiJ[~~n],this.yAjCz.dTfhX + Math.sin(i + this.spin * n * .5) * t * n * vMiiJ[~~n],this.yAjCz.hzrxR + (this.VmddP.hzrxR - .02) * n)
    }
    ,
    t.prototype.xTsKX = function(n) {
        return new iLfep(this.QMRbU.SDHsM + this.hOFVm.SDHsM * (this.LWJMi + n),this.QMRbU.dTfhX + this.hOFVm.dTfhX * (this.LWJMi + n),this.QMRbU.hzrxR + this.hOFVm.hzrxR * (this.LWJMi + n))
    }
    ,
    t.prototype.zSndk = function() {
        var t = migOb.frame()
          , n = t
          , i = (n + 1) % EhvrD;
        this.VmddP.SDHsM = this.memCx[i] - this.memCx[n];
        this.VmddP.dTfhX = this.memCy[i] - this.memCy[n];
        this.VmddP.hzrxR = this.memCz[i] - this.memCz[n];
        this.yAjCz.SDHsM = this.memCx[n] + this.VmddP.SDHsM * (t - n);
        this.yAjCz.dTfhX = this.memCy[n] + this.VmddP.dTfhX * (t - n);
        this.yAjCz.hzrxR = this.memCz[n] + this.VmddP.hzrxR * (t - n);
        this.VmddP.SDHsM = this.VmddP.SDHsM * migOb.WIMds;
        this.VmddP.dTfhX = this.VmddP.dTfhX * migOb.WIMds;
        this.VmddP.hzrxR = this.VmddP.hzrxR * migOb.WIMds;
        game.vjtYB && (this.HxCnF = replay.isGoal && Math.abs(this.yAjCz.SDHsM) > pitch.wmdto && Math.abs(this.yAjCz.dTfhX) < 80 && Math.abs(this.yAjCz.SDHsM) < pitch.wmdto + 100 && this.yAjCz.hzrxR < 46 && migOb.frame() > 100)
    }
    ,
    t.prototype.iyHlH = function(n, t) {
        var i;
        if (t)
            i = ~~this.memCx[n].toString() + ",",
            i += ~~this.memCy[n].toString() + ",",
            i += ~~this.memCz[n].toString();
        else {
            var r = (n + 399) % 400
              , f = ~~this.memCx[n] - ~~this.memCx[r]
              , e = ~~this.memCy[n] - ~~this.memCy[r]
              , u = ~~this.memCz[n] - ~~this.memCz[r];
            i = FiNll(f, e);
            u != 0 && (i += "," + u.toString())
        }
        return i
    }
    ,
    t.prototype.pZlkX = function(n, t, i) {
        var r = n.split(","), f = 0, u;
        i ? (this.memCx[t] = parseInt(r[0]),
        this.memCy[t] = parseInt(r[1]),
        this.memCz[t] = parseInt(r[2])) : (u = (t + 399) % 400,
        r[0] >= "A" && r[0] <= "Z" ? (this.memCx[t] = this.memCx[u] + TzYKh(r[0]),
        this.memCy[t] = this.memCy[u] + oucUs(r[0]),
        f = 1) : (this.memCx[t] = this.memCx[u] + (r[0] == "" ? 0 : parseInt(r[0])),
        this.memCy[t] = this.memCy[u] + (r[1] == "" ? 0 : parseInt(r[1])),
        f = 2),
        this.memCz[t] = this.memCz[u] + (r.length > f && r[f] != "" ? parseInt(r[f]) : 0))
    }
    ,
    t.prototype.aNSZS = function() {
        var n = 2e3
          , t = 2e3;
        return this.VmddP.SDHsM != 0 && (n = Math.abs((pitch.wmdto * sgn(this.VmddP.SDHsM) - this.yAjCz.SDHsM) / this.VmddP.SDHsM)),
        this.VmddP.dTfhX != 0 && (t = Math.abs((pitch.FpLNn * sgn(this.VmddP.dTfhX) - this.yAjCz.dTfhX) / this.VmddP.dTfhX)),
        n < t ? n : t
    }
    ,
    t.prototype.move = function(n, t, i, r, u) {
        (r === void 0 && (r = 0),
        u === void 0 && (u = 1),
        game.BNNtp(t)) && (u == 0 || isNaN(n.SDHsM) || isNaN(n.dTfhX) || isNaN(n.hzrxR) || (this.cncem(),
        r == 0 ? (this.VmddP.vYMgl(n, u),
        this.MgmLe.reset()) : this.MgmLe = new Vector((n.SDHsM - this.VmddP.SDHsM) / r,(n.dTfhX - this.VmddP.dTfhX) / r,(n.hzrxR - this.VmddP.hzrxR) / r),
        this.WZXDL = r,
        this.mLmSm = this.LWJMi,
        this.LWJMi = 0,
        this.RvolO = this.dSldC,
        this.dSldC = i,
        this.twRpe(),
        b.npBeQ(),
        t != null && game.DrwbR(t)))
    }
    ,
    t.prototype.igvTj = function(n, t, i) {
        this.spin = this.VmddP.xJwON() * .002 * (Math.random() * .3 + vRzMg(btovy(n, this.VmddP.angXY()) * .5, 0, .5));
        btovy(n - .1, this.VmddP.angXY()) < btovy(n, this.VmddP.angXY()) && (this.spin = -this.spin);
        btovy(n, this.VmddP.angXY()) < Math.random() && (this.spin = this.spin * .5);
        this.spin = this.spin * (.2 + i.effect * .15);
        this.qwWDw(-this.spin * .4 * t / this.VmddP.xJwON())
    }
    ,
    t.prototype.Lqxpc = function() {
        var n = this;
        this.qdKyK = [];
        pitch.UBuyH.forEach(function(t, i) {
            n.qdKyK[i] = new YTUYD(n,t,1)
        })
    }
    ,
    t.prototype.npBeQ = function() {
        var n, t;
        (game.GkqOy != 7 || this.ARaNi != 0) && (n = this.VmddP.CCsyu(this.hOFVm),
        n > 2 && (t = ~~((n - 2) * 10) * .01,
        sounds.sound(2, t)))
    }
    ,
    t.prototype.record = function() {
        var n = migOb.frame();
        this.memCx[n] = this.yAjCz.SDHsM;
        this.memCy[n] = this.yAjCz.dTfhX;
        this.memCz[n] = this.yAjCz.hzrxR
    }
    ,
    t.prototype.SDssJ = function() {
        var n = migOb.frame() - 4;
        n < 0 && (n = 0);
        var t = Math.abs(this.memCx[n + 4] - this.memCx[n])
          , i = Math.abs(this.memCy[n + 4] - this.memCy[n])
          , r = Math.abs(this.memCx[n + 8] - this.memCx[n + 4])
          , u = Math.abs(this.memCy[n + 8] - this.memCy[n + 4]);
        return Math.abs(t - r) < 2 && Math.abs(i - u) < 2 ? !1 : t < r * .5 || t > r * 2 || i < u * .5 || i > u * 2
    }
    ,
    t.prototype.cncem = function() {
        this.QMRbU = this.yAjCz.clone();
        this.hOFVm = this.VmddP.clone()
    }
    ,
    t.prototype.qwWDw = function(n) {
        var t = this.VmddP.angXY() + n, i;
        isNaN(t) || (i = this.VmddP.xJwON(),
        this.VmddP.SDHsM = Math.cos(t) * i,
        this.VmddP.dTfhX = Math.sin(t) * i)
    }
    ,
    t.prototype.draw = function() {
        this.shape.x = this.pfnbt.SDHsM;
        this.shape.y = this.pfnbt.dTfhX;
        this.uGAgS != null && (this.uGAgS.x = this.shape.x,
        this.uGAgS.y = this.shape.y,
        this.uGAgS.rotation = cPvOd(this.rotation),
        this.uGAgS.Hozxs(this.sRUJy));
        this.HxCnF && this.ugzVW()
    }
    ,
    t.prototype.ugzVW = function() {
        this.yAjCz.SDHsM < 0 ? pitch.goal1.VzOFL() : pitch.goal2.VzOFL()
    }
    ,
    t.prototype.twRpe = function() {
        for (var t = 0, r = this.aNSZS(), i = this.yAjCz.hzrxR, n = this.VmddP.hzrxR; n > 0 || i > 50; )
            i += n,
            n -= .1,
            n *= .999,
            t += 1;
        for (this.Soxzy = min(t, r - 1); i > 30; )
            i += n,
            n -= .1,
            n *= .999,
            t += 1;
        for (this.jlIMp = min(t, r - 1); i > 0; )
            i += n,
            n -= .1,
            n *= .999,
            t += 1;
        this.fuxxM = t;
        this.RbFsj()
    }
    ,
    t.prototype.kKEJq = function() {
        game.CnlZk && (this.Soxzy > 0 && this.jDesl(this.ppzPB.SDHsM + this.VmddP.SDHsM * (this.fuxxM - this.Soxzy), this.ppzPB.dTfhX + this.VmddP.dTfhX * (this.fuxxM - this.Soxzy)),
        pitch.IZCDO.shape.visible && (pitch.IZCDO.shape.alpha < .5 && this.fuxxM > 5 && (pitch.IZCDO.shape.alpha += .1),
        this.fuxxM > 0 && this.fuxxM < 5 && (pitch.IZCDO.shape.alpha -= .1)))
    }
    ,
    t.prototype.jDesl = function(n, t) {
        this.crWZx = new iLfep(n,t);
        view.apply(pitch.IZCDO.shape, this.crWZx)
    }
    ,
    t.prototype.RbFsj = function() {
        if (game.CnlZk) {
            if (game.isDemo || game.GopxG) {
                pitch.IZCDO.shape.visible = !1;
                return
            }
            pitch.IZCDO.shape.alpha = 0;
            pitch.IZCDO.shape.visible = this.fuxxM > 40
        }
    }
    ,
    t.prototype.rotate = function() {
        this.uGAgS != null && (view.PIlOD ? (this.rotation += this.VmddP.SDHsM * .1 * migOb.WIMds,
        this.eEicu += this.VmddP.dTfhX * .5 * Math.cos(this.rotation) * migOb.WIMds,
        this.niFJc += this.VmddP.dTfhX * .5 * Math.sin(this.rotation) * migOb.WIMds) : (this.rotation -= this.VmddP.dTfhX * .1,
        this.eEicu += this.VmddP.SDHsM * .5 * Math.cos(this.rotation) * migOb.WIMds,
        this.niFJc += this.VmddP.SDHsM * .5 * Math.sin(this.rotation) * migOb.WIMds),
        this.rotation >= 3.14 && (this.rotation -= 3.14),
        this.rotation < 0 && (this.rotation += 3.14),
        this.eEicu >= 20 && (this.eEicu -= 20),
        this.eEicu < 0 && (this.eEicu += 20),
        this.niFJc >= 20 && (this.niFJc -= 20),
        this.niFJc < 0 && (this.niFJc += 20),
        this.sRUJy = ~~this.eEicu * 20 + ~~this.niFJc)
    }
    ,
    t
}(DNprm);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
YTUYD = function(n) {
    function t(t, i, r) {
        var u = n.call(this, t, i, r) || this;
        return u.source = i,
        u.dcPcy = r,
        u.radius = 4,
        u.shape = new createjs.Shape,
        u.shape.graphics.beginFill("#000").drawCircle(0, 0, u.radius),
        u.shape.cache(-u.radius, -u.radius, u.radius * 2, u.radius * 2),
        u.shape.scaleY = vRzMg(r, 1, 10),
        u
    }
    return __extends(t, n),
    t
}(Shadow);
yqESJ = function() {
    function n(n, t) {
        this.cpu = n;
        this.player = n.p;
        this.duration = t
    }
    return n.prototype.QXsju = function() {}
    ,
    n.prototype.aqiOl = function() {
        return --this.duration < 0
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
fBPhH = function(n) {
    function t(t) {
        return n.call(this, t, null) || this
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        this.cpu.zMbFr = this.player.yAjCz.clone()
    }
    ,
    t.prototype.aqiOl = function() {
        return !game.RJuhr
    }
    ,
    t
}(yqESJ);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
QACuZ = function(n) {
    function t(t) {
        var i = n.call(this, t, null) || this;
        return i.NUrBB = Math.random() * 20,
        i
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        if (this.cpu.CNnYs == 2) {
            if (--this.NUrBB > 0) {
                this.cpu.zMbFr = this.player.yAjCz.clone();
                return
            }
            this.cpu.zMbFr = Math.abs(this.player.yAjCz.dTfhX) < pitch.FpLNn - 10 ? new iLfep(0,pitch.FpLNn * pitch.YMefK) : new iLfep(0,pitch.FpLNn * pitch.YMefK * 2)
        }
    }
    ,
    t.prototype.aqiOl = function() {
        return !game.mrEkW
    }
    ,
    t
}(yqESJ);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
BBvSX = function(n) {
    function t(t) {
        return n.call(this, t, null) || this
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        Math.random() > .8 && (this.cpu.zMbFr = b.YQgRD.SPPZQ(Math.PI * Math.random() * 2, pitch.FpLNn * Math.random() * .3))
    }
    ,
    t.prototype.aqiOl = function() {
        return this.cpu.CNnYs != 0
    }
    ,
    t
}(yqESJ);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
jNhGy = function(n) {
    function t(t, i) {
        var r = n.call(this, t, null) || this;
        return i.distXY(r.cpu.p) < 200 + Math.random() * 500 && (r.scorer = i),
        r
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        this.scorer != null && (this.scorer == this.player ? (this.cpu.zMbFr.SDHsM = 900 * this.cpu.t.dir,
        this.cpu.zMbFr.dTfhX = (this.cpu.vSQaG - .5) * 600,
        this.cpu.klVAA > .5 && (this.cpu.zMbFr.SDHsM = 0,
        this.cpu.zMbFr.dTfhX = pitch.YMefK * 500),
        game.jXyjm != null && (this.cpu.zMbFr = game.jXyjm.yAjCz.clone())) : (this.cpu.zMbFr.SDHsM = this.scorer.yAjCz.SDHsM + Math.cos(this.cpu.TltLu * 10) * this.cpu.uKMVE * 100,
        this.cpu.zMbFr.dTfhX = this.scorer.yAjCz.dTfhX + Math.sin(this.cpu.TltLu * 10) * this.cpu.uKMVE * 100),
        Math.random() > .99 && this.player.jump())
    }
    ,
    t.prototype.aqiOl = function() {
        return !game.mrEkW
    }
    ,
    t
}(yqESJ);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
IDyVn = function(n) {
    function t(t, i) {
        return n.call(this, t, i) || this
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        this.cpu.CNnYs == 2 && (this.cpu.zMbFr = this.player.yAjCz.clone())
    }
    ,
    t
}(yqESJ);
FsOgA = function() {
    function n(n) {
        this.zMbFr = new iLfep(0,0,0);
        this.RJTQo = 0;
        this.czxrF = 0;
        this.NhNqC = 0;
        this.IKKus = 0;
        this.rEFvH = new Vector(0,0,0);
        this.Hfnzg = 0;
        this.JdlBS = !1;
        this.kAaRR = 0;
        this.rgRGf = 0;
        this.PXzcN = !1;
        this.CNnYs = 0;
        this.p = n;
        this.t = n.t;
        this.cZGqTs()
    }
    return n.prototype.move = function() {
        if (this.vMSTX() && this.p.AjDvC < 1600) {
            if (this.p.AjDvC > 900)
                return;
            this.RJTQo = b.yAjCz.angTo(this.p.yAjCz) + (this.TuUof > .5 ? .5 : -.5);
            this.czxrF = Math.cos(this.RJTQo);
            this.NhNqC = Math.cos(this.RJTQo);
            this.p.ePkcc(this.RJTQo);
            return
        }
        if (this.IKKus = this.p.yAjCz.wapWW(this.zMbFr),
        this.DSCzY) {
            if (this.IKKus < 100 && isNaN(this.TZmcV))
                return
        } else if (this.IKKus < 100 + this.p.AjDvC * (this.p == this.t.AxvNR ? .001 : .03))
            return;
        if (!(this.p.ftg < 0) || !this.wCwMp) {
            if (this.p.AjDvC < 400 && this.DSCzY && b.OEDJp == null) {
                this.RJTQo = this.p.yAjCz.angTo(b.yAjCz);
                this.p.ePkcc(this.RJTQo);
                return
            }
            if (this.IKKus > 10)
                if (this.DSCzY) {
                    var n = this.p.yAjCz.angTo(this.zMbFr);
                    this.p.ePkcc(n)
                } else
                    this.p.chSCa(this.RJTQo, this.czxrF, this.NhNqC)
        }
    }
    ,
    n.prototype.vMSTX = function() {
        return b.vSdIU && b.vSdIU.t == this.t && b.vSdIU != this.p && b.dSldC == 0
    }
    ,
    n.prototype.IoQbi = function() {
        if (this.Hfnzg = Math.random() * 30,
        Math.random() > .4 && (this.Hfnzg = 10 + Math.random() * 10),
        this.Hfnzg = this.Hfnzg / this.p.GtTtd,
        game.MuVtU > this.Hfnzg && this.GrDZi(game.Bueic()),
        Math.random() > .9 && this.cZGqTs(),
        this.t.pHOXU)
            this.PXzcN = !1;
        else {
            var n = this.t.kAqMF().yAjCz.wapWW(this.p.yAjCz)
              , t = this.t.kAqMF().yAjCz.wapWW(b.xHdWf());
            this.PXzcN = n * 1.44 > t && n < t * 2.25
        }
        this.APMvD();
        this.QXsju();
        this.GvbDt();
        this.RJTQo = this.p.yAjCz.angTo(this.zMbFr);
        this.NhNqC = Math.sin(this.RJTQo);
        this.czxrF = Math.cos(this.RJTQo)
    }
    ,
    n.prototype.APMvD = function() {
        if (game.hoywu || this.t.RCcbW.KoFFH()) {
            this.DSCzY = this.t.IXdhI == this.p;
            return
        }
        this.DSCzY = !0;
        for (var n in this.t.p)
            if (this.t.p[n] != this.p && this.t.p[n].ADhld * (.25 + this.TuUof * .5) < this.p.ADhld * .45) {
                this.DSCzY = !1;
                break
            }
    }
    ,
    n.prototype.GvbDt = function() {
        if (this.MwaKl) {
            this.p.pace = game.GkqOy == 1 ? game.Nudsf() == this.t ? 1 : 0 : game.MuVtU < Math.random() * 20 + this.Hfnzg ? 0 : .2;
            return
        }
        this.p.pace = this.IKKus > 1e4 ? 1 : .7;
        this.p == this.t.IXdhI && (this.t.pHOXU ? (this.kAaRR = 2,
        (this.t.opn.risk > .8 || this.aowlW > .7 || this.p.HIzpT()) && (this.p.pace = 1),
        this.t.opn.IXdhI != null && this.p.AjDvC * (1 + this.aowlW) > this.t.opn.IXdhI.AjDvC && (this.p.pace = 1)) : (this.kAaRR = 0,
        this.t.risk > .5 - this.TltLu * .5 && (this.kAaRR = 1),
        this.t.risk > 2 - this.aowlW * 2 - this.t.pFhbE * .002 && (this.kAaRR = 2,
        this.p.pace = 1),
        this.DSCzY && this.t.opn.IXdhI != null && this.t.opn.IXdhI.HIzpT() && (this.p.pace = 1),
        this.t.opn.IXdhI != null && this.t.opn.IXdhI.AjDvC < this.p.AjDvC * 2 && (this.p.pace = 1),
        this.t.opn.IXdhI != null && this.p.AjDvC < this.t.opn.IXdhI.AjDvC && (this.kAaRR = 2)))
    }
    ,
    n.prototype.ayBkfW = function() {
        return this.DSCzY && b.OEDJp == null && (this.UPvuR || this.wCwMp && this.p == game.hoywu) && this.kAaRR != 0
    }
    ,
    n.prototype.QXsju = function() {
        if (this.fQMps) {
            this.fQMps.QXsju();
            this.fQMps.aqiOl() && (this.fQMps = null);
            return
        }
        this.ayBkfW() ? this.afdgTE() : this.uNXEui();
        game.GkqOy != 3 && this.zMbFr.deSCM(pitch)
    }
    ,
    n.prototype.cZGqTs = function() {
        this.klVAA = this.glQqyK();
        this.vSQaG = this.glQqyK();
        this.uKMVE = this.glQqyK();
        this.TltLu = this.glQqyK();
        this.aowlW = this.glQqyK();
        this.TuUof = this.glQqyK();
        this.ngjtK = this.glQqyK()
    }
    ,
    n.prototype.glQqyK = function() {
        return Math.random() > .3 ? .4 + Math.random() * .2 : Math.random() > .3 ? .3 + Math.random() * .4 : Math.random() > .3 ? .2 + Math.random() * .6 : .1 + Math.random() * .8
    }
    ,
    n.prototype.unmark = function() {
        if (!this.MwaKl) {
            var t = (.3 + Math.random() * this.aowlW * .18) * pitch.width
              , n = this.bOlcNJ(t, !game.rules.kqBBq);
            this.rEFvH.SDHsM = n.SDHsM - this.zMbFr.SDHsM;
            this.rEFvH.dTfhX = n.dTfhX - this.zMbFr.dTfhX
        }
    }
    ,
    n.prototype.mark = function() {
        this.p.opn != null && (this.rEFvH.SDHsM = this.p.opn.yAjCz.SDHsM - this.p.yAjCz.SDHsM,
        this.rEFvH.dTfhX = this.p.opn.yAjCz.dTfhX * .95 - this.p.yAjCz.dTfhX)
    }
    ,
    n.prototype.uNXEui = function() {
        var n, i, t;
        this.t.pHOXU ? (Math.random() > .9 && (this.unmark(),
        Math.random() > .95 && this.p.CfNwk > 3e4 && this.p.AjDvC > 2e5 && this.p.call()),
        game.rules.kqBBq && this.p.yAjCz.SDHsM * this.t.dir < this.t.opn.hawot * 1.2 * this.t.dir - 150 && (this.rEFvH.SDHsM = -20 + Math.random() * 40),
        this.aowlW < Math.random() && this.wPlGtK()) : (Math.random() > .8 && this.mark(),
        game.rules.kqBBq && this.p.yAjCz.SDHsM * this.t.dir < this.t.opn.hawot * 1.15 * this.t.dir - 125 && (this.rEFvH.SDHsM = -10 + Math.random() * 20));
        (this.p.mate == this.t.IXdhI || this.aowlW > .8) && this.t.pHOXU && (this.rEFvH.SDHsM += this.t.dir * 5);
        this.p.ouzDO() && (this.cZGqTs(),
        sgn(this.rEFvH.SDHsM) == this.t.dir && (this.rEFvH.SDHsM *= .5),
        this.rEFvH.SDHsM = this.rEFvH.SDHsM - this.t.dir * 10 * this.p.VnCOO());
        n = b.xHdWf();
        this.zMbFr.SDHsM = (this.p.map.SDHsM * this.t.dir + n.SDHsM) * .5 + this.rEFvH.SDHsM;
        this.zMbFr.dTfhX = (this.p.map.dTfhX * 2 * this.t.dir + n.dTfhX) * .4 + this.rEFvH.dTfhX;
        i = 1 - (n.SDHsM * this.t.dir + pitch.wmdto) / pitch.width;
        this.t.pHOXU && this.UPvuR ? this.t.risk < i && (this.p.pace = 1,
        this.rEFvH.SDHsM += this.t.dir * 5) : (this.zMbFr.dTfhX *= .8,
        t = 1 - this.t.risk * .7,
        this.PXzcN && this.t.risk > i && (this.UPvuR && (sgn(this.rEFvH.SDHsM) == this.t.dir && (this.rEFvH.SDHsM = 0),
        sgn(this.rEFvH.dTfhX) == sgn(this.p.yAjCz.dTfhX) && (this.rEFvH.dTfhX = 0),
        this.p.pace = 1),
        this.zMbFr.SDHsM = -pitch.wmdto * this.t.dir * (1 - t) + this.zMbFr.SDHsM * t,
        this.zMbFr.dTfhX = this.zMbFr.dTfhX * t))
    }
    ,
    n.prototype.wPlGtK = function() {
        this.p.opn != null && Math.abs(this.p.yAjCz.dTfhX) > Math.abs(this.p.opn.yAjCz.dTfhX) && (this.rEFvH.dTfhX = this.rEFvH.dTfhX / 2)
    }
    ,
    n.prototype.afdgTE = function() {
        if (b.yAjCz.hzrxR > this.p.YKlsJ || b.Soxzy > 0) {
            if (this.zMbFr.SDHsM = b.ppzPB.SDHsM,
            this.zMbFr.dTfhX = b.ppzPB.dTfhX,
            this.mRLUVt() && this.p.jump(),
            (this.p.CfNwk > 6400 || b.crWZx.SDHsM * this.t.dir > this.t.opn.kyfVy * this.t.dir) && this.t.risk < .7) {
                var n = this.aowlW * 2 - 1;
                this.zMbFr.SDHsM = b.yxmDO.SDHsM * n + b.crWZx.SDHsM * (1 - n);
                this.zMbFr.dTfhX = b.yxmDO.dTfhX * n + b.crWZx.dTfhX * (1 - n)
            }
            !this.JdlBS && this.p.CfNwk > this.p.AjDvC && (this.rgRGf = this.fvmojB() + b.VmddP.xJwON(),
            this.zMbFr = this.pVaouU(this.rgRGf))
        } else
            this.kAaRR == 2 ? this.t.pHOXU || this.p.AjDvC < this.p.opn.AjDvC ? this.axEydZ() : this.grNjOK() : this.aaXSvx();
        this.sIclfu() && this.p.slide()
    }
    ,
    n.prototype.grNjOK = function() {
        var t, r;
        this.JdlBS = !0;
        r = 10 + vRzMg(this.vSQaG * 20, 0, 20);
        t = this.pVaouU(r);
        var n = this.t.kAqMF().yAjCz
          , i = n.angTo(t)
          , e = n.angTo(this.p.yAjCz)
          , o = n.distXY(t)
          , u = btovy(i, e)
          , s = vRzMg(1 - u * (1.5 - this.aowlW) * 2, .3, 1)
          , f = o * s;
        u > .1 && (this.p.pace = 1);
        this.zMbFr.SDHsM = n.SDHsM + Math.cos(i) * f;
        this.zMbFr.dTfhX = n.dTfhX + Math.sin(i) * f
    }
    ,
    n.prototype.axEydZ = function() {
        this.rgRGf = this.fvmojB();
        this.p.opn != null && this.p.opn.cpu.rgRGf > this.rgRGf + 20 && !this.JdlBS && (this.rgRGf += b.VmddP.xJwON());
        var n = b.aNSZS();
        this.rgRGf > n - 10 && n > 10 && (this.rgRGf = n - 10,
        this.p.pace = 1);
        this.zMbFr = this.pVaouU(this.rgRGf)
    }
    ,
    n.prototype.pVaouU = function(n) {
        return b.LWJMi > this.Hfnzg || b.vSdIU == this.p && b.dSldC == 0 ? b.UQqJm(n) : b.xTsKX(n)
    }
    ,
    n.prototype.aaXSvx = function() {
        var t = b.yAjCz.angTo(this.t.kAqMF().yAjCz)
          , i = this.t.kAqMF().wapWW(b)
          , n = Math.sqrt(min(this.p.AjDvC, i * .04));
        n = vRzMg(n, 30 - 15 * this.TltLu, 80 - 40 * this.TltLu);
        this.zMbFr = this.pVaouU(vRzMg(n * .5, 0, 10)).SPPZQ(t, n)
    }
    ,
    n.prototype.fvmojB = function() {
        var i = this.p.yAjCz.SDHsM, r = this.p.yAjCz.dTfhX, u = b.yAjCz.SDHsM, f = b.yAjCz.dTfhX, e = b.VmddP.SDHsM * .5, o = b.VmddP.dTfhX * .5, c = this.p.VnCOO(), t, n, h, s = 0;
        return t = e * e + o * o - c * c,
        n = u * e - i * e + f * o - r * o,
        h = u * u + f * f + i * i + r * r - 2 * (u * i + f * r),
        t != 0 && (s = (-n - Math.sqrt(n * n - t * h)) / t),
        (n * n < t * h || s <= 0) && (s = 200),
        vRzMg(s, 1, 200)
    }
    ,
    n.prototype.mRLUVt = function() {
        var n = this.fCESFo();
        return n > 0 && n < 25 && b.yAjCz.hzrxR + b.VmddP.hzrxR * n - 9 > this.p.YKlsJ && b.yAjCz.hzrxR + b.VmddP.hzrxR * n < 60 && this.p.AjDvC < 4e4 ? sqSum(b.yAjCz.SDHsM + b.VmddP.SDHsM * n - this.p.yAjCz.SDHsM - this.p.VmddP.SDHsM * n * .5, b.yAjCz.dTfhX + b.VmddP.dTfhX * n - this.p.yAjCz.dTfhX - this.p.VmddP.dTfhX * n * .5) < 100 : !1
    }
    ,
    n.prototype.bOlcNJ = function(n, t) {
        for (var r, e, u = this.p.yAjCz.clone(), o = -1e5, i = new iLfep, f = -3; f < 4; f++)
            for (i.SDHsM = this.p.yAjCz.SDHsM + n * f * .33,
            r = -3; r < 4; r++)
                i.dTfhX = this.p.yAjCz.dTfhX + n * r * .33,
                pitch.isIn(i) && (e = this.CQKpC(i, !0, t, 0, !0) + Math.random() * n * .1,
                e > o && (o = e,
                u.SDHsM = i.SDHsM,
                u.dTfhX = i.dTfhX));
        return u
    }
    ,
    n.prototype.CQKpC = function(n, t, i, r, u) {
        var o, e, f, s, h, c;
        if (!pitch.isIn(n))
            return -5e4;
        if (o = this.t.opn.Rlfmq(n),
        e = o.yAjCz.distXY(n),
        e * e < r)
            return -1e4 + e;
        if (f = vRzMg(e, 0, 150) * this.vSQaG - Math.abs(n.SDHsM - this.t.IXBtu().oROkp.SDHsM) * this.aowlW * (1600 / pitch.width) - Math.abs(n.dTfhX) * this.aowlW * (800 / pitch.height) * .2 - n.distXY(this.p.DCsAY()) * this.TuUof,
        t && (s = this.t.Rlfmq(n, this.p),
        h = s.yAjCz.distXY(n),
        f += vRzMg(h, 0, 150) * this.klVAA),
        this.t.kkBYG(n.SDHsM) && (f += i ? 50 + this.aowlW * 50 : -200),
        c = n.SDHsM * this.t.dir > b.yAjCz.SDHsM * this.t.dir ? this.t.opn.xgWlG(b.yAjCz, n) : this.t.opn.sGhEI(b.yAjCz, n),
        c) {
            if (!u)
                return f - 1e3;
            f -= (100 + 200 * this.ngjtK) * vRzMg(1.5 - b.yAjCz.distXY(n) * .002, 0, 1)
        }
        return this.t.IXBtu().isIn(n) && (f += 50 * this.aowlW),
        this.t.bKxNc().isIn(n) && (f -= 50 * this.aowlW),
        f
    }
    ,
    n.prototype.fwKhG = function(n) {
        var t = this
          , i = -1e3
          , r = this.p;
        return this.t.p.forEach(function(u) {
            var s = b.distXY(u), c = t.t.opn.riskIn(u.yAjCz), o = (50 + 100 * c + vRzMg(s, 0, 500) * .3 * u.VnCOO() * .3) * c, h = o * o, l = t.t.riskIn(u.yAjCz), a = vRzMg(s * l * .5, 0, 200), f = t.CQKpC(u.yAjCz, !1, !1, a * a, !1) - vRzMg(300 - Math.sqrt(u.CfNwk), 0, 300) * l, v = b.yAjCz.angTo(u.yAjCz), e;
            s > 200 && btovy(t.p.angle, v) > Math.PI * .6 ? f -= 500 : (e = u.cpu.CQKpC(new iLfep(u.yAjCz.SDHsM + t.t.dir * o,u.yAjCz.dTfhX), !1, !0, h, !1),
            e > f && (f = e),
            e = u.cpu.CQKpC(new iLfep(u.yAjCz.SDHsM + t.t.dir * o * .7,vRzMg(u.yAjCz.dTfhX - o * .7, -pitch.FpLNn, pitch.FpLNn)), !1, !0, h, !1),
            e > f && (f = e),
            e = u.cpu.CQKpC(new iLfep(u.yAjCz.SDHsM + t.t.dir * o * .7,vRzMg(u.yAjCz.dTfhX + o * .7, -pitch.FpLNn, pitch.FpLNn)), !1, !0, h, !1),
            e > f && (f = e),
            e = u.cpu.CQKpC(new iLfep(u.yAjCz.SDHsM,vRzMg(u.yAjCz.dTfhX - o, -pitch.FpLNn, pitch.FpLNn)), !1, !0, h, !1),
            e > f && (f = e),
            e = u.cpu.CQKpC(new iLfep(u.yAjCz.SDHsM,vRzMg(u.yAjCz.dTfhX + o, -pitch.FpLNn, pitch.FpLNn)), !1, !0, h, !1),
            e > f && (f = e));
            s > 300 && (f -= (s - 300) * .1);
            u != t.p && (f -= vRzMg(btovy(t.p.angle, v) - Math.PI * .4, 0, Math.PI) * (200 + s * .2));
            t.p == t.t.AxvNR && (f -= 50);
            n || t.iyZsS() || u != t.p || (f += 200 + 200 * t.uKMVE - vRzMg(b.uincg * .5, 0, 300));
            game.rules.kqBBq && t.t.kkBYG(u.yAjCz.SDHsM) && u != t.p && (f -= 200);
            u == game.YUWPz && (b.ewpBc != u || b.ZaQZA != t.p) && (f += u.ZnunN() ? 600 : 300);
            f += Math.random() * 50;
            u.qsuWa && (f -= 1e3);
            f > i && (i = f,
            r = u)
        }),
        r
    }
    ,
    n.prototype.XVyLM = function() {
        var u = b.yAjCz.angTo(this.t.XSIgd().yAjCz), n, t, i, r;
        return this.iyZsS() && this.t.risk > (this.t.opn.pHOXU ? .6 : .8) + btovy(u, this.p.angle) * .2 - Math.random() * .1 ? !0 : this.JVfHz() && Math.random() > .25 ? !1 : btovy(this.p.oVbdJ(), this.p.angle) > Math.PI * .75 ? !1 : this.t.opn.AxvNR.fZwjA() ? !0 : (n = vRzMg(this.t.opn.cover * 2 - 1, 0, 11) + Math.random() * 9,
        t = this.p.ftZuv * .2,
        game.WDTge && this.t.opn.AxvNR == game.YUWPz ? t = 50 : this.t.opn.cover <= 1 && (n = n * .75),
        i = 200 + t + n * n - btovy(this.p.oVbdJ(), this.p.angle) * 100 + this.t.opn.ZTpKZ() * 150,
        r = i * game.rules.rpqWH.width / 120,
        this.p.distXY(this.t.XSIgd()) < r)
    }
    ,
    n.prototype.lWihuR = function() {
        var n = this.t.XSIgd().distXY(b);
        return n < 100 + Math.random() * 600 ? !1 : this.t.opn.AxvNR.fZwjA() ? n > 400 || !this.t.opn.AxvNR.olSOnZ() : !1
    }
    ,
    n.prototype.bmSylv = function() {
        for (var i, u = this.CQKpC(this.p.yAjCz, !0, !0, 0, !0), r = undefined, f = this.p.pace * this.p.VnCOO() * 30, n = new iLfep, t = 0; t < Math.PI * 2; t = t + Math.PI * .25)
            n.SDHsM = this.p.yAjCz.SDHsM + Math.cos(t) * f,
            n.dTfhX = this.p.yAjCz.dTfhX + Math.sin(t) * f,
            i = this.CQKpC(n, !0, !0, 0, !0) + Math.random() * 5,
            i -= vRzMg(Math.abs(n.dTfhX) + 20 - pitch.FpLNn, 0, 20) * 2,
            i -= vRzMg(Math.abs(n.SDHsM) + 20 - pitch.wmdto, 0, 20) * 2,
            btovy(this.p.angle, t) > 1.6 && (i -= 10),
            sgn(n.SDHsM - this.p.yAjCz.SDHsM) == this.t.dir && n.SDHsM * this.t.dir < pitch.wmdto * .2 && (i += 10),
            i > u && (u = i,
            r = t);
        return sgn(Math.sin(r)) == -this.t.dir && (this.p.pace = .7),
        this.TZmcV = r,
        r
    }
    ,
    n.prototype.bHmDqI = function(n, t) {
        for (var r, o, f = n.clone(), s = -1e3, e, h, i = new iLfep, u = 0; u <= 5; u++)
            for (r = -5; r <= 5; r++)
                i.SDHsM = n.SDHsM + t * u * .2 * this.t.dir,
                i.dTfhX = n.dTfhX + t * r * .2,
                e = sqSum(t * u * .2, t * r * .2),
                h = i.wapWW(b.yAjCz),
                h > e && (o = this.CQKpC(i, !1, !0, e, !1),
                o > s && (s = o,
                f.SDHsM = i.SDHsM,
                f.dTfhX = i.dTfhX));
        return f
    }
    ,
    n.prototype.mwMerU = function() {
        var n = 150 + this.t.risk * 200;
        return this.t.pHOXU || this.p.AjDvC < n * n
    }
    ,
    n.prototype.fCESFo = function() {
        var n = b.VmddP.SDHsM * b.VmddP.SDHsM + b.VmddP.dTfhX * b.VmddP.dTfhX
          , t = b.VmddP.SDHsM * (b.yAjCz.SDHsM - this.p.yAjCz.SDHsM) + b.VmddP.dTfhX * (b.yAjCz.dTfhX - this.p.yAjCz.dTfhX);
        return n != 0 ? -t / n : 100
    }
    ,
    n.prototype.sIclfu = function() {
        var r = 30 + this.p.ijNhI * .2, n, t, i;
        return this.p.AjDvC > r * r || !this.UPvuR ? !1 : (n = this.pVaouU(20),
        n.hzrxR > 15 && (max(this.t.risk, this.t.opn.risk) < .7 || b.LWJMi < 40)) ? !1 : (t = this.p.yAjCz.angTo(n),
        i = this.p.yAjCz.SPPZQ(t, 20 + this.p.ijNhI * .2),
        btovy(t, b.VmddP.angXY()) < Math.PI * .2) ? !1 : this.t.pHOXU ? n.wapWW(i) < n.wapWW(this.p.yAjCz) && b.wgicf() > this.p.VnCOO() * 2 : Math.random() > .9 - this.t.risk * .6 && n.wapWW(i) < n.wapWW(this.p.yAjCz) && this.p.AjDvC > this.t.opn.IXdhI.AjDvC
    }
    ,
    n.prototype.JVfHz = function() {
        var n = this.t.opn.AxvNR;
        if (!this.t.IXBtu().isIn(n.yAjCz))
            return !1;
        var i = this.t.XSIgd().yAjCz.angTo(n.yAjCz)
          , t = 30 + n.t.kAqMF().distXY(n) * .2
          , r = new iLfep(n.yAjCz.SDHsM + Math.cos(i) * t,n.yAjCz.dTfhX + Math.sin(i) * t);
        return r.distXY(b.yAjCz) < t
    }
    ,
    n.prototype.iyZsS = function() {
        if (this.t.opn.IXdhI != null) {
            var n = 30 + this.t.risk * 100
              , t = this.p.yAjCz.MVOWz(this.t.dir * n * .8, 0).wapWW(this.t.opn.IXdhI.yAjCz);
            return t < n * n
        }
        return !1
    }
    ,
    n.prototype.GrDZi = function(n) {
        this.CNnYs != n;
        this.CNnYs = n;
        this.UPvuR = this.CNnYs == 1;
        this.MwaKl = this.CNnYs == 2;
        this.wCwMp = this.CNnYs == 0
    }
    ,
    n.prototype.DGAcu = function() {
        return this.CNnYs
    }
    ,
    n.prototype.HAcXs = function(n) {
        this.fQMps = new IDyVn(this,n)
    }
    ,
    n.prototype.ZmcFv = function() {
        this.fQMps = new QACuZ(this)
    }
    ,
    n.prototype.ACIPK = function(n) {
        this.fQMps = new jNhGy(this,n)
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
NZpgG = function(n) {
    function t(t) {
        return n.call(this, t) || this
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        var t, i;
        if (b.OEDJp == this.p) {
            this.p.opn.AjDvC < 1e4 && Math.random() > .9 && this.p.yAjCz.wapWW(this.zMbFr) < 400 && (this.zMbFr = new iLfep(b.yAjCz.SDHsM,b.yAjCz.dTfhX).rhHby(100).deSCM(this.t.bKxNc(), -10));
            return
        }
        this.rEFvH.SDHsM = 0;
        this.rEFvH.dTfhX = 0;
        this.wCwMp || this.UPvuR ? (t = vRzMg((this.t.pHOXU ? 100 : 400 - this.t.cover * 60) + this.aowlW * 100, 0, 600),
        t *= game.rules.rpqWH.width / 120,
        i = this.t.kAqMF().yAjCz.wapWW(b.ORQzc()),
        this.DSCzY || this.UPvuR && i < t * t ? b.isHigh() && this.t.bKxNc().isIn(b.ppzPB) ? this.zMbFr = b.ppzPB : b.VmddP.xJwON() < this.p.VnCOO() * 3 && this.t.opn.IXdhI != null ? this.p.AjDvC < this.t.opn.IXdhI.AjDvC ? this.axEydZ() : this.grNjOK() : this.oxGsGY() : this.oxGsGY()) : game.GkqOy != 3 ? this.oxGsGY() : n.prototype.uNXEui.call(this)
    }
    ,
    t.prototype.oxGsGY = function() {
        var n = 1 - this.aowlW * .4;
        this.t.pHOXU || (n = (1 + n) * .5);
        this.zMbFr.SDHsM = -(pitch.wmdto - 4) * this.t.dir * n + b.yAjCz.SDHsM * (1 - n);
        n = .15 + this.vSQaG * .15;
        this.zMbFr.dTfhX = vRzMg(b.yAjCz.dTfhX * n, -60, 60)
    }
    ,
    t.prototype.dUdYSn = function() {
        var n, t;
        if (!this.wCwMp && !b.isOut && this.p.handsOk()) {
            if (game.GkqOy == 2 && b.ARaNi < 2 && Math.random() > .7) {
                n = new iLfep(this.p.yAjCz.SDHsM - Math.random() * 5 * sgn(this.p.yAjCz.SDHsM),-40 + Math.random() * 80);
                this.p.dive(n);
                return
            }
            t = min(this.fCESFo(), b.aNSZS());
            n = b.UQqJm(t);
            var i = this.p.yAjCz.distXY(n)
              , u = b.yAjCz.hzrxR == 0 ? 1.1 : .9
              , r = b.VmddP.xJwON();
            i < 80 && t > -5 && t < 16 && (r > this.p.VnCOO() * .5 * u && n.hzrxR < 25 && (this.zMbFr = n),
            i > 4 + t * this.p.VnCOO() * u && i < t * 5 && r > this.p.VnCOO() ? b.LWJMi > (105 - this.p.xeoAV) * (.02 + this.Hfnzg * .012) && this.p.dive(n) : i < 8 && t < 10 && n.hzrxR > 25 && r > this.p.VnCOO() && this.p.jump())
        }
    }
    ,
    t
}(FsOgA);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
View = function(n) {
    function t(t) {
        var i = n.call(this, 0, 0, t) || this;
        return i.RxpeY = new Vector,
        i.lxAiB = parameters.gameView,
        i.JugmR = new KsDsI,
        i.yZMGk = (2 + 1366 / i.width) / 3,
        i.UXSzX = (2 + 1024 / i.height) / 3,
        i.gjQFv = null,
        i.SRSSU = null,
        i.radar = null,
        i.dsYsj = null,
        i.sHqAM = new KsDsI,
        i.liEDy(),
        i
    }
    return __extends(t, n),
    t.prototype.resize = function(t) {
        n.prototype.resize.call(this, t);
        this.lZies();
        this.LfbCn()
    }
    ,
    t.prototype.cVDad = function() {
        var n = ~~-this.x
          , t = ~~-this.y;
        PvRyJ.x = n;
        PvRyJ.y = t;
        yxdsY.x = n;
        yxdsY.y = t;
        WUUhY.x = n;
        WUUhY.y = t;
        yZMSU.x = n;
        yZMSU.y = t;
        XOpAD.x = n;
        XOpAD.y = t;
        this.x += this.RxpeY.SDHsM;
        this.y += this.RxpeY.dTfhX;
        this.JugmR = game.mrEkW && game.sDHsu != null ? this.wuNti(new iLfep((game.sDHsu.author.yAjCz.SDHsM + b.yAjCz.SDHsM) * .5,(game.sDHsu.author.yAjCz.dTfhX + b.yAjCz.dTfhX) * .5)) : b.pfnbt;
        this.JugmR.vRzMg(this.XPrQM);
        this.RxpeY.SDHsM += this.JugmR.SDHsM - this.x - this.wmdto;
        this.RxpeY.dTfhX += this.JugmR.dTfhX - this.y - this.FpLNn;
        this.RxpeY.SDHsM = this.RxpeY.SDHsM * .1 * this.yZMGk;
        this.RxpeY.dTfhX = this.RxpeY.dTfhX * .1 * this.UXSzX;
        this.radar != null && this.radar.cVDad();
        this.gjQFv != null && this.gjQFv.cVDad()
    }
    ,
    t.prototype.Kejyy = function(n) {
        n && (this.lxAiB = (this.lxAiB + 1) % 4,
        this.liEDy());
        this.PIlOD = this.lxAiB == 0 || this.lxAiB == 2 || this.lxAiB == 4;
        this.FwtxG(!1);
        pitch.QacVs();
        this.LfbCn();
        this.ksZKy = pitch.lines.sOPEM();
        this.ksZKy.vwfTJ(400, 400);
        this.lZies();
        this.FwtxG(!0)
    }
    ,
    t.prototype.lZies = function() {
        pitch != null && pitch.lines != null && (this.XPrQM = pitch.lines.sOPEM(),
        this.XPrQM.crop(this.width - 300, this.height - 300))
    }
    ,
    t.prototype.liEDy = function() {
        this.x = -this.wmdto;
        this.y = -this.FpLNn
    }
    ,
    t.prototype.qPMDA = function() {
        this.gjQFv == null && (this.gjQFv = new fDILa);
        this.SRSSU == null && (this.SRSSU = new Result);
        this.radar == null && parameters.radar == 1 && (this.radar = new Radar);
        this.LfbCn()
    }
    ,
    t.prototype.LfbCn = function() {
        this.radar != null && (this.radar.TZYxo.alpha = .6,
        this.lxAiB == 0 || this.lxAiB == 2 ? (this.radar.TZYxo.x = this.width - this.radar.wmdto - 10,
        this.radar.TZYxo.y = this.radar.FpLNn + 10,
        this.radar.TZYxo.rotation = 0) : (this.radar.TZYxo.rotation = 90,
        this.radar.TZYxo.x = this.width - this.radar.FpLNn - 10,
        this.radar.TZYxo.y = this.radar.wmdto + 10));
        this.gjQFv != null && (this.gjQFv.TZYxo.x = this.width - this.gjQFv.width / 2 - 5,
        this.gjQFv.TZYxo.y = this.height - 25);
        this.SRSSU != null && (this.SRSSU.TZYxo.x = 5 + this.SRSSU.width / 2,
        this.SRSSU.TZYxo.y = this.height - 25);
        DMryL != null && DMryL.eSUPo();
        PYgUk != null && PYgUk.resize();
        this.IQhyv()
    }
    ,
    t.prototype.IQhyv = function() {
        this.radar != null && (this.radar.TZYxo.visible = this.width > 400 && !game.isDemo);
        this.gjQFv != null && (this.gjQFv.TZYxo.visible = (this.width >= 800 || !game.mrEkW) && this.height > 200 && !game.isDemo);
        this.SRSSU != null && (this.SRSSU.TZYxo.visible = (this.width >= 800 || game.mrEkW) && this.height > 200 && !game.isDemo)
    }
    ,
    t.prototype.FwtxG = function(n) {
        n ? WUUhY.cache(this.ksZKy.x, this.ksZKy.y, this.ksZKy.width, this.ksZKy.height) : WUUhY.uncache()
    }
    ,
    t.prototype.update = function() {
        this.radar != null && this.radar.lgxoX()
    }
    ,
    t.prototype.IqwDC = function(n) {
        n && this.dsYsj == null ? (this.dsYsj = new rcmWb,
        this.dsYsj.TZYxo.x = this.wmdto,
        this.dsYsj.TZYxo.y = this.FpLNn,
        stage.addChild(this.dsYsj.TZYxo)) : this.dsYsj != null && (stage.removeChild(this.dsYsj.TZYxo),
        this.dsYsj = null)
    }
    ,
    t.prototype.showWait = function(n) {
        QwTxA("showWait" + n);
        var t = document.getElementById("waitdiv");
        n ? t != null && (t.style.cssText = "position:absolute; width:200px; height:150px; color:#fff; top:" + ~~((this.height - 150) / 2).toString() + "px; left:" + ~~((this.width - 200) / 2).toString() + "px;display:block; text-align:center;",
        t.className = "img-rounded",
        t.innerHTML = "<img src='images/wait.gif' alt='loading' />") : (t != null && (t.style.cssText = "display:none"),
        TkkRI(!0),
        document.getElementById("fmCanvas").style.backgroundColor = pitch.mfdoU)
    }
    ,
    t.prototype.EYvRf = function(n) {
        switch (this.lxAiB) {
        case 2:
            CpJgo = ~~(n.SDHsM * (1.25 + n.dTfhX * .0002));
            hTbgM = ~~(n.dTfhX * .75 - n.hzrxR);
            break;
        case 3:
            CpJgo = ~~(-n.dTfhX * (1.25 + n.SDHsM * .0002));
            hTbgM = ~~(n.SDHsM * .75 - n.hzrxR);
            break;
        case 0:
            CpJgo = ~~(n.SDHsM * (1 + n.hzrxR * .00015));
            hTbgM = ~~(n.dTfhX * .9 - n.hzrxR);
            break;
        case 1:
            CpJgo = ~~-n.dTfhX;
            hTbgM = ~~(n.SDHsM * .9 * (1 + n.hzrxR * .00015) - n.hzrxR);
            break;
        case 4:
            CpJgo = ~~(n.SDHsM * (1.5 + n.dTfhX * .0003));
            hTbgM = ~~(n.dTfhX * .1 - n.hzrxR);
            break;
        case 5:
            CpJgo = ~~(-n.dTfhX * (1.5 + n.SDHsM * .0002));
            hTbgM = ~~(n.SDHsM * .3 - n.hzrxR)
        }
    }
    ,
    t.prototype.wuNti = function(n) {
        return this.EYvRf(n),
        new KsDsI(CpJgo,hTbgM)
    }
    ,
    t.prototype.apply = function(n, t) {
        this.EYvRf(t);
        n.x = CpJgo;
        n.y = hTbgM
    }
    ,
    t.prototype.gXREa = function(n, t, i) {
        var r = this.wuNti(t);
        r.vRzMg(this, i);
        n.x = r.SDHsM;
        n.y = r.dTfhX
    }
    ,
    t.prototype.DjlBG = function(n, t) {
        var i = t.angTo(n)
          , r = t.distXY(n)
          , u = n.hzrxR * r / t.hzrxR;
        return this.wuNti(n.SPPZQ(i, u, !0))
    }
    ,
    t
}(bTvce);
Game = function() {
    function n() {
        this.rules = new Rules;
        this.jNSAr = new IKXWT;
        this.GqmPU = 0;
        this.clientSeed = (~~(Math.random() * 128)).toString();
        this.qkAuh = window.location.href;
        this.switchPlayerMode = parameters.switchPlayerMode;
        this.vFSMK(0);
        this.VZEWj = !1;
        this.CnlZk = !0;
        this.YUWPz = null;
        this.LZXFT = null;
        this.night = !1;
        this.quitReason = 0;
        this.zwNMT = !1;
        this.kirRk = 0;
        this.MuVtU = 0;
        this.half = 0;
        this.minute = 0;
        this.loaded = !1;
        this.isDemo = parameters.clientMode == 0;
        this.cFZJo = parameters.clientMode == 1;
        this.sqFEF = parameters.editionStageMatch == 0;
        this.WDTge = parameters.gameMode == 1;
        this.MYBqI = this.WDTge && parameters.team1 == parameters.team2;
        this.xbRtm = parameters.gameMode == 2;
        this.vjtYB = parameters.clientMode == 2;
        this.ixkqG = parameters.clientMode == 3;
        this.GopxG = parameters.clientMode == 2 || parameters.clientMode == 3;
        this.efjMJ = parameters.clientMode != 2 && parameters.clientMode != 3;
        this.LBlKM = [];
        this.EoAzJ = 0;
        this.Lxhhd = 0
    }
    return n.prototype.QacVs = function() {
        var r = this, i, t, n;
        view = new View(CqUAp);
        view.showWait(!0);
        i = (parameters.team1 + parameters.team2 + parameters.absWeek) % 8;
        b = new Ball(i);
        t = this.vjtYB ? "/api/match/getbyreplay/" + parameters.replay : parameters.editionStageMatch > 0 ? "/api/match/getbyesm/" + parameters.editionStageMatch + "/" + parameters.author : this.ixkqG ? "/api/match/getbychannel/" + parameters.channel : "/api/match/getbyteams/" + parameters.team1 + "/" + parameters.team2 + "/" + (this.MYBqI ? 1 : 0);
        QwTxA(t);
        n = new XMLHttpRequest;
        n.open("GET", t, !0);
        n.onload = function() {
            r.YyTaK(n)
        }
        ;
        n.send(null)
    }
    ,
    n.prototype.YyTaK = function(n) {
        var t, i;
        QwTxA(n);
        t = JSON.parse(n.responseText);
        parameters.penalties == 2 ? (this.half = 5,
        QwTxA("Starting directly with penalties")) : t.half && (this.half = t.half);
        DPZaw.wQQiA(this.half);
        i = t.data ? ATtwR.wSerX(t.data) : null;
        t1 = new Team(parameters.team1,1,1,t.team1,i);
        t2 = new Team(parameters.team2,-1,2,t.team2,i);
        this.loadComplete()
    }
    ,
    n.prototype.loadComplete = function() {
        this.UTYWn = new vkTSQ;
        (new koYxx).gnAbo();
        t1.name == t2.name && (t1.name += " A",
        t2.name += " B");
        this.MYBqI && (t1.stadiumCapacity = 500);
        sounds = new oqJtT;
        nXmAQ = this.ixkqG || this.vjtYB ? new Events.odRTt : new Events.YEmdv;
        migOb = new uQgUi;
        chat = new Chat;
        replay = this.ixkqG ? null : this.vjtYB ? new FfSyR : new mbBwy;
        stream = this.vjtYB ? null : this.ixkqG ? new XjVWq : new fLZQH;
        speaker = new JpAaA;
        PYgUk = new ymzaC(t1.name,t2.name,parameters.absWeek);
        wHUbV = new mRsGo;
        this.eTooA();
        KRdPs = new bcVLQ;
        VAR = new vmEgn;
        MlOlR = new FxDRC;
        EjGIl = new SuggestedPosition;
        b.Lqxpc();
        b.JnnlF();
        yxdsY.addChild(b.shape);
        t1.wBAzn();
        t2.wBAzn();
        t1.ygKtv();
        t2.ygKtv();
        t1.opn = t2;
        t2.opn = t1;
        t1.sbUdj = .8;
        t2.sbUdj = .2;
        createjs.Touch.enable(stage);
        stage.enableMouseOver(10);
        this.cJIax();
        PYgUk.addFog();
        view.Kejyy(!1);
        t1.QacVs();
        t2.QacVs();
        this.GopxG || view.showWait(!1);
        view.qPMDA();
        QwTxA("game.loadComplete end")
    }
    ,
    n.prototype.cJIax = function() {
        DMryL = null;
        this.cFZJo && this.WDTge ? (this.LZXFT.RCcbW.KlBDy[0] = XZKec ? new IreLH(0,this.LZXFT,this.YUWPz,!1,!0) : new Keyboard(0,this.LZXFT,this.YUWPz,!1,!0),
        DMryL = this.LZXFT.RCcbW.KlBDy[0]) : this.cFZJo && this.xbRtm ? this.CnlZk ? (this.LZXFT.RCcbW.KlBDy[0] = XZKec ? new IreLH(0,this.LZXFT,null,!1,!0) : new Keyboard(0,this.LZXFT,null,!1,!0),
        parameters.usersMode == 1 && (this.LZXFT.RCcbW.KlBDy[1] = new uSTzW(1,this.LZXFT,null,!0,!1)),
        DMryL = this.LZXFT.RCcbW.KlBDy[0]) : (this.LZXFT.RCcbW.KlBDy[0] = new uSTzW(0,this.LZXFT,null,!1,!1),
        this.LZXFT.RCcbW.KlBDy[1] = new Keyboard(1,this.LZXFT,null,!1,!0),
        DMryL = this.LZXFT.RCcbW.KlBDy[1]) : this.WDTge && (this.LZXFT.RCcbW.KlBDy[0] = new uSTzW(0,this.LZXFT,this.YUWPz,!1,!1));
        DMryL == null && (DMryL = new Keyboard(0,null,null,!1,!0))
    }
    ,
    n.prototype.KplmC = function() {
        t1.dir = (parameters.absWeek + t1.id + this.half) % 2 == 0 ? 1 : -1;
        t2.dir = -t1.dir
    }
    ,
    n.prototype.start = function() {
        QwTxA("start");
        this.half == 0 && (this.half = 1,
        DPZaw.wQQiA(this.half));
        this.GkqOy = 0;
        this.vFSMK(2);
        this.reprise();
        QwTxA("end start")
    }
    ,
    n.prototype.uJUbD = function() {
        this.UTYWn.uJUbD();
        migOb.uJUbD();
        nXmAQ.uJUbD();
        replay && replay.uJUbD();
        stream && stream.uJUbD();
        sounds && sounds.uJUbD();
        this.LBlKM.forEach(function(n) {
            return n.uJUbD()
        })
    }
    ,
    n.prototype.cVDad = function() {
        while (this.kirRk < KRdPs.tNLaS)
            this.uJUbD(),
            this.kirRk += 1;
        b.cVDad();
        t1.cVDad();
        t2.cVDad();
        referee && (referee.cVDad(),
        ar1.cVDad(),
        ar2.cVDad());
        MlOlR.cVDad();
        EjGIl.cVDad();
        wHUbV.cVDad()
    }
    ,
    n.prototype.stop = function(n, t) {
        if (!this.mrEkW && !this.GopxG && (this.CnlZk || t) && (!this.paeHS() || n == 9 || n == 10)) {
            if (QwTxA("Handle Event " + n),
            this.UTYWn.ljXxR() && (n != 1 || game.Nudsf() == this.UTYWn.foul.author.t)) {
                this.UTYWn.ikJxz();
                return
            }
            this.GqmPU = 100;
            this.MuVtU = 0;
            this.GkqOy = n;
            switch (n) {
            case 4:
                this.isfic();
                break;
            case 2:
                this.eHQlP();
                break;
            case 7:
                this.woJgz();
                break;
            case 5:
                this.HjVCi();
                break;
            case 6:
                this.FApan();
                break;
            case 8:
                this.KLERb();
                break;
            case 1:
                this.IOvGa();
                break;
            case 3:
            case 10:
                this.cHqBj()
            }
            this.vFSMK(2);
            view.IQhyv();
            KRdPs.dAuKS && n != 3 && this.quitReason == 0 || this.save()
        }
    }
    ,
    n.prototype.reprise = function() {
        QwTxA("reprise");
        this.QYYHD();
        t2.CSpPK();
        t1.CSpPK();
        t1.mpRKT();
        t2.mpRKT();
        switch (this.GkqOy) {
        case 0:
        case 3:
            this.rtSmd();
            break;
        case 10:
            this.finish();
            break;
        case 7:
            this.wVhsb();
            break;
        case 6:
            this.FMktw();
            break;
        case 4:
            this.RXJhY();
            break;
        case 1:
            this.hWbON();
            break;
        case 8:
            this.lgaez();
            break;
        case 5:
            this.YQTgT();
            break;
        case 2:
            this.nwmdh();
            break;
        case 9:
            this.PlrdC()
        }
        this.hoywu != null && (this.hoywu.t.pHOXU = !0,
        this.hoywu.t.opn.pHOXU = !1);
        this.vFSMK(0);
        pitch.IZCDO.shape.visible = !1;
        this.GqmPU = 100;
        this.hoywu != null && ((this.GkqOy == 4 || this.GkqOy == 2 || this.GkqOy == 8) && this.hoywu.t.XSIgd().yAjCz.distXY(b.YQgRD) < 200 && sounds.sound(5, this.hoywu.t.opn.sbUdj * .3 * Math.random()),
        this.hoywu.ftg = -50,
        this.Jsjwy(this.hoywu));
        this.quitReason == 3 && this.close();
        QwTxA("end reprise")
    }
    ,
    n.prototype.OUSfd = function() {
        return this.GkqOy == null && this.tcjdw
    }
    ,
    n.prototype.finish = function() {
        this.quitReason = 3;
        this.save()
    }
    ,
    n.prototype.close = function() {
        parameters.edition > 0 ? duAGL("/Edition/" + parameters.edition.toString()) : duAGL("/Main")
    }
    ,
    n.prototype.Jsjwy = function(n) {
        nXmAQ.HflRS(new Events.PYZdB(game.kirRk,n.t.number,n.t.p.indexOf(n)));
        view.gjQFv.Jsjwy(n.displayName())
    }
    ,
    n.prototype.QYYHD = function() {}
    ,
    n.prototype.Hzbjh = function() {
        return .1 + (t1.lqByF() + t2.lqByF() + Math.abs(b.yAjCz.SDHsM) * 5e-5) * pitch.stadiumSize * 1e-5
    }
    ,
    n.prototype.RbCCR = function() {
        return parameters.night == 1
    }
    ,
    n.prototype.NZniw = function(n) {
        KRdPs.dAuKS != n && (KRdPs.dAuKS = n,
        KRdPs.rJHYSS(),
        n ? (view.showWait(!0),
        PvRyJ.alpha = .1,
        yxdsY.alpha = .1) : (view.showWait(!1),
        PvRyJ.alpha = 1,
        yxdsY.alpha = 1))
    }
    ,
    n.prototype.izQtY = function() {
        this.zwNMT || (this.VZEWj = !0,
        this.zwNMT = !0,
        view.showWait(!0))
    }
    ,
    n.prototype.nOwSN = function() {
        this.zwNMT && (this.VZEWj = !1,
        this.zwNMT = !1,
        view.showWait(!1))
    }
    ,
    n.prototype.IqwDC = function() {
        this.NZniw(!1);
        view.IqwDC(!0);
        this.VZEWj = !0
    }
    ,
    n.prototype.AQsEp = function() {
        view.IqwDC(!1);
        this.VZEWj = !1
    }
    ,
    n.prototype.paeHS = function() {
        return !1
    }
    ,
    n.prototype.LUBng = function() {
        return !0
    }
    ,
    n.prototype.GJQCN = function() {
        return this.UTYWn.ljXxR()
    }
    ,
    n.prototype.QINYx = function(n, t, i, r) {
        if (r === void 0 && (r = null),
        b.iaecV = i.clone(),
        r != null)
            b.YQgRD = r.clone();
        else {
            var f = n.IXBtu().oROkp
              , u = vRzMg((i.SDHsM * n.dir + pitch.wmdto) / pitch.width, .5, 1);
            b.YQgRD = new iLfep(f.SDHsM * u + i.SDHsM * (1 - u),f.dTfhX * u + i.dTfhX * (1 - u))
        }
        this.hoywu = t != null ? t : n.Rlfmq(i)
    }
    ,
    n.prototype.ABsAC = function(n, t) {
        this.UTYWn.ABsAC(n, t)
    }
    ,
    n.prototype.HhxVf = function() {
        b.cpxIl();
        this.hoywu.HgPHX(qJAsQ(3))
    }
    ,
    n.prototype.RXJhY = function() {
        this.HhxVf();
        this.hoywu.t.opn.FZFLq();
        this.hoywu.t.CrMel();
        this.hoywu.t.opn.WmZbZ()
    }
    ,
    n.prototype.lgaez = function() {
        this.hoywu.t.CrMel();
        this.hoywu.t.opn.WmZbZ();
        this.hoywu.t.opn.AxvNR.sweFh((pitch.wmdto - 5) * this.hoywu.t.dir, 0);
        this.hoywu.statistics.corners++;
        this.HhxVf()
    }
    ,
    n.prototype.nwmdh = function() {
        this.hoywu.t.CrMel();
        this.hoywu.t.opn.WmZbZ();
        this.HhxVf();
        t1.fGCAf();
        t2.fGCAf();
        t1.qWnRz();
        t2.qWnRz()
    }
    ,
    n.prototype.wVhsb = function() {
        b.cpxIl();
        this.hoywu.XXqNk();
        this.hoywu.HgPHX(3);
        this.hoywu.QJaFL = !0
    }
    ,
    n.prototype.FMktw = function() {
        this.HhxVf()
    }
    ,
    n.prototype.YQTgT = function() {
        this.HhxVf()
    }
    ,
    n.prototype.hWbON = function() {
        t1.RixMQ();
        t2.RixMQ();
        this.QINYx(this.cbWSl, null, pitch.center, pitch.center);
        t1.qWnRz();
        t2.qWnRz();
        this.GkqOy = null;
        b.cpxIl()
    }
    ,
    n.prototype.PlrdC = function() {
        this.penalties.change();
        this.penalties.locate();
        this.HhxVf();
        this.GkqOy = 2
    }
    ,
    n.prototype.SWQkS = function() {}
    ,
    n.prototype.VOkaD = function() {
        DPZaw.VOkaD(this.minute);
        view.SRSSU.VOkaD(this.minute)
    }
    ,
    n.prototype.vFSMK = function(n) {
        QwTxA("SetActionStatus " + n);
        this.kpUcD = n;
        this.RJuhr = n == -1;
        this.tcjdw = n == 0;
        this.XfRzc = n == 1;
        this.mrEkW = n == 2
    }
    ,
    n.prototype.Bueic = function() {
        return this.kpUcD
    }
    ,
    n.prototype.TOzFJ = function(n, t) {
        this.LBlKM[this.EoAzJ] == null ? this.LBlKM[this.EoAzJ] = new jxpMf(n,this.EoAzJ,t) : this.LBlKM[this.EoAzJ].vcabn(n, t);
        this.EoAzJ++;
        this.EoAzJ >= 30 && (this.EoAzJ = 0)
    }
    ,
    n.prototype.Nudsf = function() {
        return t1.dir == sgn(b.yAjCz.SDHsM) ? t1 : t2
    }
    ,
    n.prototype.Qmccu = function() {
        return t1.dir == sgn(b.yAjCz.SDHsM) ? t2 : t1
    }
    ,
    n.prototype.gPIEk = function() {
        return this.Lxhhd > 0 && this.jXyjm != null && this.jXyjm.t == game.Nudsf()
    }
    ,
    n.prototype.ojmVV = function() {
        return this.gPIEk() ? this.jXyjm.PqKIS() : !1
    }
    ,
    n.prototype.IrwnE = function(n) {
        this.jXyjm = n;
        this.Lxhhd = 20
    }
    ,
    n.prototype.Ozvkf = function() {
        b.dSldC != 5 && b.dSldC != 3 && (this.Lxhhd = 0,
        this.jXyjm = null)
    }
    ,
    n.prototype.BNNtp = function(n) {
        return this.hoywu ? this.tcjdw ? n == this.hoywu : n != this.hoywu : b.OEDJp ? b.OEDJp == n : !0
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Match = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.lesMD = 50,
        t.mTViY = null,
        t.mpoXN = 0,
        t.TFuea = 600,
        t
    }
    return __extends(t, n),
    t.prototype.loadComplete = function() {
        var t = this;
        n.prototype.loadComplete.call(this);
        QwTxA("Match load complete");
        this.sRxnxb();
        this.loaded = !0;
        game.WDTge && (DPZaw.SyaPY(this.YUWPz.statistics.rFMkh()),
        DPZaw.fJpjB(this.YUWPz.statistics.AGweP),
        DPZaw.jrJAI(this.YUWPz.hptUp));
        DPZaw.VOkaD(this.minute);
        DPZaw.wQQiA(this.half);
        this.GopxG ? this.FmLLS() : this.half == 0 && t1.SKQKN && p2p == null && !COwvc() ? (QwTxA("anth"),
        anthems = new KTgav,
        anthems.ZarRK = function() {
            t.start()
        }
        ,
        anthems.start()) : this.start()
    }
    ,
    t.prototype.sRxnxb = function() {
        if (parameters.referee == 1) {
            var n = vRzMg((t1.stadium() + t2.stadium()) % t1.p.length, 0, 4);
            referee = new Referee(t1.p[n]);
            referee.sWNMoH();
            referee.Lqxpc();
            referee.JnnlF();
            n = vRzMg((t1.stadium() * 2 + t2.stadium()) % t1.p.length, 0, 4);
            ar1 = new zjWzu(1,t1.p[n]);
            ar1.sWNMoH();
            ar1.Lqxpc();
            ar1.JnnlF();
            n = vRzMg((t1.stadium() + t2.stadium() * 2) % t2.p.length, 0, 4);
            ar2 = new zjWzu(-1,t2.p[n]);
            ar2.sWNMoH();
            ar2.Lqxpc();
            ar2.JnnlF()
        }
    }
    ,
    t.prototype.LUBng = function() {
        return (parameters.penalties == 0 || game.WDTge) && this.half > 1 ? !0 : this.paeHS() ? this.penalties.iSWcfs() : !this.isTie() && (this.half == 2 || this.half == 4)
    }
    ,
    t.prototype.isTie = function() {
        return parameters.firstLeg == null ? t1.LTpCB == t2.LTpCB : parameters.firstLeg == this.result()
    }
    ,
    t.prototype.cVDad = function() {
        (this.zwNMT && (--this.lesMD < 0 && this.save(),
        stream && stream.tONpJy()),
        this.VZEWj) || (n.prototype.cVDad.call(this),
        sounds.lqByF = this.Hzbjh(),
        parameters.acceleratedTime == 1 && this.aYrCyZ() ? this.NZniw(!0) : this.NZniw(!1))
    }
    ,
    t.prototype.aYrCyZ = function() {
        return !this.WDTge || this.GopxG ? !1 : this.YUWPz != this.LZXFT.AxvNR ? !1 : this.LZXFT.pHOXU && b.yAjCz.SDHsM * this.LZXFT.dir < -400 ? !1 : !this.LZXFT.pHOXU && b.yAjCz.SDHsM * this.LZXFT.dir < -200 ? !1 : this.YUWPz.fZwjA() ? !1 : !0
    }
    ,
    t.prototype.uJUbD = function() {
        if (this.penalties && this.penalties.uJUbD(),
        VAR.uJUbD(),
        this.RJuhr || (this.GqmPU -= 1,
        this.MuVtU += 1),
        this.jNSAr.uJUbD(),
        this.GqmPU != 1 || this.GkqOy != 3 || this.isDemo || this.IqwDC(),
        this.GqmPU == 0 && this.mrEkW && this.reprise(),
        this.XfRzc && !this.vjtYB) {
            var t = ~~this.minute;
            this.minute += this.xbRtm ? .008 : KRdPs.dAuKS ? .0045 : .005;
            t < ~~this.minute && (DPZaw.VOkaD(this.minute),
            this.VOkaD(),
            this.WDTge ? nXmAQ.HflRS(new Events.Bamyu(this.kirRk,this.minute,this.half,this.YUWPz.statistics.rFMkh(),this.YUWPz.statistics.AGweP,this.YUWPz.hptUp,null,null)) : nXmAQ.HflRS(new Events.Bamyu(this.kirRk,this.minute,this.half,null,null,null,t1.LTpCB,t2.LTpCB)),
            !this.GopxG && this.WpAkF() && (this.stop(3, !1),
            speaker.comment(this.half == 1 ? 28 : 29, b.vSdIU)));
            b.vSdIU != null && game.XfRzc && b.dSldC != 1 && b.dSldC != 2 && b.vSdIU.t.IXdhI.ZZPKE > 0 && b.vSdIU.t.IXdhI.AjDvC < 2e4 && b.VmddP.sNbSL() < 25 && this.gwdGT(b.vSdIU.t.IXdhI)
        }
        b.uJUbD();
        t1.uJUbD();
        t2.uJUbD();
        referee != null && (referee.uJUbD(),
        ar1.uJUbD(),
        ar2.uJUbD());
        n.prototype.uJUbD.call(this)
    }
    ,
    t.prototype.DrwbR = function(n) {
        if (!game.mrEkW) {
            if (game.tcjdw && game.FmLLS(),
            game.hoywu != n && (game.hoywu = null),
            n != b.vSdIU && (game.Jsjwy(n),
            n.ZZPKE > 0 && this.gwdGT(n)),
            b.ARaNi += 1,
            n.t.pHOXU = !0,
            n.t.opn.pHOXU = !1,
            t1.lmgIs(),
            t2.lmgIs(),
            b.dSldC == 0 && (n.t.RCcbW.LCzzj = 70),
            b.vSdIU != null) {
                n.t != b.vSdIU.t && b.dSldC == 0;
                n.t != b.vSdIU.t && b.vSdIU == b.vSdIU.t.AxvNR && b.RvolO == 0 && b.vSdIU.UmftV(vRzMg(-b.mLmSm, -50, -10));
                var t = vRzMg(1.1 - b.mLmSm * .005, .25, 1);
                b.ewpBc != null || n.Rnhbu || (t = t * .5);
                b.RvolO == 3 && (t = t * .25);
                b.dSldC != 3 && (b.vSdIU.t == n.t ? b.vSdIU == n ? n.UmftV(n.t.BzoVx() * .06 * t) : b.mLmSm > 5 && (b.vSdIU.UmftV(vRzMg(5 + b.vSdIU.t.BzoVx() * .1 * t, 0, 100)),
                b.vSdIU.statistics.passes += 1) : (b.vSdIU.UmftV(-b.vSdIU.t.risk * 25 * t),
                b.ewpBc == null || b.ewpBc == n ? n.UmftV(n.t.risk * 30 * t) : n.UmftV(5 + n.t.risk * 50 * t),
                n.t.risk > .7 && n.t.opn.IXdhI.AjDvC < 50 && migOb.addTag("D", n.PqKIS()),
                b.vSdIU.AjDvC > 2500 && (b.vSdIU.statistics.passes += 1,
                b.vSdIU.statistics.MBtyq += 1)))
            }
            this.Lxhhd -= 1;
            n.ftg > 0 && n.QOeNg && (n.ftg = 0);
            b.vSdIU != null && b.vSdIU != n && (b.uincg = 0,
            b.vSdIU.t == n.t ? game.IrwnE(b.vSdIU) : game.Ozvkf(),
            b.ZaQZA = b.ewpBc,
            b.ewpBc = b.vSdIU);
            b.vSdIU = n;
            n.t.pFhbE = 0;
            n.t.opn.kJAZr();
            b.ARaNi < 2 && (game.GkqOy == 8 || game.GkqOy == 7 || game.GkqOy == 2) ? n.t.kJAZr() : n.t.HiPBr();
            switch (b.dSldC) {
            case 10:
                speaker.comment(5, n);
                n.opn.AjDvC < 1e3 && n.UmftV(10 - n.t.cover);
                break;
            case 6:
                speaker.comment(6, n);
                n.UmftV(20 - n.t.cover * 2);
                break;
            case 1:
                speaker.comment(10, n);
                game.GkqOy == 2 && b.ARaNi < 2 ? replay.save("P", 150, n.PqKIS()) : replay.save("S", 150, n.PqKIS());
                break;
            case 2:
                speaker.comment(11, n);
                game.GkqOy == 2 && b.ARaNi < 2 ? replay.save("P", 150, n.PqKIS()) : replay.save("S", 150, n.PqKIS());
                break;
            case 11:
                speaker.comment(14, n);
                replay.save("H", 150, n.PqKIS());
                break;
            case 4:
                speaker.comment(4, n);
                break;
            case 8:
                speaker.comment(12, n);
                n.UmftV(8);
                break;
            case 9:
                speaker.comment(13, n);
                n.UmftV(8);
                break;
            case 7:
                speaker.comment(7, n)
            }
        }
    }
    ,
    t.prototype.gwdGT = function(n) {
        if (n.ZZPKE != 0) {
            var t = n.t.opn.riskIn(n.yAjCz) > .85;
            Math.random() > n.ZZPKE ? (t && n.ZZPKE > .1 && migOb.addTag("V", n.PqKIS()),
            n.ZZPKE = 0) : (t && n.ZZPKE < .9 && replay.save("O", 100, n.PqKIS()),
            this.eGtZH(n))
        }
    }
    ,
    t.prototype.eGtZH = function(n) {
        game.XfRzc && game.rules.kqBBq && (game.sDHsu = new Foul(n,null,n.yAjCz),
        game.stop(5, !1),
        speaker.comment(25, n),
        n.UmftV(-5),
        n.t.opn.tEfWO(),
        Math.random() > .8 && n.XZRoC())
    }
    ,
    t.prototype.WpAkF = function() {
        var n = this.nwWzy(this.half + 1);
        return this.minute > n + this.mpoXN + 1 && b.vSdIU != null && b.vSdIU.t != null && b.vSdIU.t.opn.risk < .5 && b.vSdIU.t.opn.IXdhI.AjDvC > 2500
    }
    ,
    t.prototype.isfic = function() {
        sounds.sound(6, .45);
        this.ynUME();
        this.QINYx(this.sDHsu.victim.t, this.sDHsu.victim, this.sDHsu.point)
    }
    ,
    t.prototype.eHQlP = function() {
        sounds.sound(6, .5);
        sounds.sound(0, game.Nudsf().sbUdj * .4);
        this.ynUME();
        var n = this.sDHsu.victim.t.IXBtu().oROkp;
        this.QINYx(this.sDHsu.victim.t, this.sDHsu.victim, n);
        this.GqmPU = 200;
        t1.wnkdC();
        t2.wnkdC()
    }
    ,
    t.prototype.HjVCi = function() {
        ar1 != null && ar1.offside();
        ar2 != null && ar2.offside();
        view.gjQFv.offside(this.sDHsu.author.displayName());
        this.sDHsu.author.statistics.offsides += 1;
        sounds.sound(6, .5);
        this.QINYx(this.sDHsu.author.t.opn, null, this.sDHsu.author.yAjCz);
        b.iaecV.deSCM(this.hoywu.t.fGhOw());
        t1.Zrimx();
        t2.Zrimx()
    }
    ,
    t.prototype.FApan = function() {
        VAR.reset();
        b.SYkzz() > .8 && game.Nudsf().tjpHP();
        sounds.sound(1, b.SYkzz() * game.Nudsf().sbUdj);
        b.VmddP.xJwON() > 4 && b.SYkzz() < .1 && sounds.sound(5, game.Nudsf().opn.sbUdj * .5);
        speaker.comment(18, b.vSdIU);
        b.dSldC == 4 ? b.vSdIU.UmftV(-5) : b.vSdIU.UmftV(b.SYkzz() * 30 - 10);
        b.SYkzz() > 0 && (b.vSdIU.statistics.rLFrH += 1);
        this.QINYx(b.vSdIU.t.opn, null, new iLfep(pitch.wmdto * .925 * sgn(b.yAjCz.SDHsM),pitch.FpLNn * .2 * sgn(b.yAjCz.dTfhX)), pitch.center);
        t1.Zrimx();
        t2.Zrimx()
    }
    ,
    t.prototype.woJgz = function() {
        b.isOut = !0;
        b.dSldC == 5 && sounds.sound(3, Math.random());
        ar1 && ar1.xqiKi();
        ar2 && ar2.xqiKi();
        speaker.comment(17, b.vSdIU);
        b.dSldC != 5 && b.vSdIU.UmftV(-b.vSdIU.t.risk * 25);
        t1.Zrimx();
        t2.Zrimx();
        this.QINYx(b.vSdIU.t.opn, null, new iLfep(vRzMg(b.yAjCz.SDHsM, -pitch.wmdto + 10, pitch.wmdto - 10),(pitch.FpLNn + 10) * sgn(b.yAjCz.dTfhX)))
    }
    ,
    t.prototype.KLERb = function() {
        VAR.reset();
        b.SYkzz() > .8 && game.Nudsf().tjpHP();
        sounds.sound(1, b.SYkzz() * game.Nudsf().sbUdj);
        speaker.comment(19, b.vSdIU);
        b.VmddP.xJwON() > 3 && b.dSldC == 3 && sounds.sound(3, game.Nudsf().sbUdj * Math.random());
        this.QINYx(b.vSdIU.t.opn, null, new iLfep((pitch.wmdto - b.radius) * sgn(b.yAjCz.SDHsM),(pitch.FpLNn - b.radius) * sgn(b.yAjCz.dTfhX)));
        t1.Zrimx();
        t2.Zrimx()
    }
    ,
    t.prototype.IOvGa = function() {
        var t, n;
        sounds.sound(0, game.Nudsf().sbUdj);
        game.Nudsf().exult();
        game.Nudsf().opn.tjpHP();
        game.Nudsf().LTpCB++;
        sounds.gAcKe();
        t = game.Nudsf().opn.AxvNR;
        t.sFjOQj(~~this.minute);
        t.statistics.WkvqA++;
        t.UmftV(-vRzMg(b.LWJMi - 10 - 20 * (Math.abs(b.yAjCz.dTfhX) / game.rules.rpqWH.wmdto), 0, 50));
        t.ZpfgI();
        n = b.bfGuu();
        game.Nudsf() == n.t ? (speaker.comment(26, n),
        n.statistics.TtWmN++,
        n.ZpfgI(),
        n.UmftV(50),
        game.Nudsf().bdCtg(n),
        game.Nudsf().opn.yAfti(),
        game.gPIEk() && (game.jXyjm.statistics.AGweP++,
        game.jXyjm == game.YUWPz && DPZaw.fJpjB(game.YUWPz.statistics.AGweP),
        game.jXyjm.UmftV(40),
        (game.ojmVV() || n.PqKIS()) && replay.save("A", 100, game.jXyjm.PqKIS())),
        (n.PqKIS() || game.ojmVV() || t.PqKIS()) && replay.save("G", 100, n.PqKIS())) : n != t && (n.UmftV(-50),
        n.statistics.WkvqA++,
        speaker.comment(30, n));
        (n == game.YUWPz || t == game.YUWPz) && DPZaw.SyaPY(game.YUWPz.statistics.rFMkh());
        this.cbWSl = game.Nudsf().opn;
        this.GqmPU = 200
    }
    ,
    t.prototype.oAPpo = function() {
        sounds.sound(0, game.Nudsf().sbUdj * .3);
        game.Nudsf().tjpHP();
        game.Nudsf().opn.call()
    }
    ,
    t.prototype.vRtPS = function(n) {
        n.t.opn.GVKUt();
        b.vSdIU != n && b.dSldC != 1 && b.dSldC != 2 && n.VmddP.value() > n.VnCOO() * .1 ? game.ABsAC(new Foul(n,n.opn,n.opn.yAjCz), !0) : (n.t.bKxNc().isIn(n.opn.yAjCz) ? (sounds.sound(8, .2 + Math.random() * .3),
        speaker.comment(31, n),
        n.opn.qsuWa && replay.save("N", 100, n.opn.PqKIS())) : speaker.comment(24, n),
        Math.random() > .7 && sounds.cDphz(5, n.opn.t.sbUdj * .6 * Math.random(), 50 + Math.random() * 30),
        referee != null && n.opn.qsuWa && Math.random() > .8 && referee.zDAJW())
    }
    ,
    t.prototype.cHqBj = function() {
        sounds.sound(7, .5);
        this.LUBng() ? (sounds.sound(9, .5),
        this.finish()) : sounds.sound(4, .5);
        this.mpoXN = Math.random() * 5;
        this.QINYx(this.cbWSl.opn, null, pitch.center, new iLfep(0,0));
        this.cbWSl = this.cbWSl.opn;
        this.half = vRzMg(this.half + 1, 1, 6);
        this.minute = this.nwWzy(this.half);
        DPZaw.wQQiA(this.half);
        DPZaw.VOkaD(this.minute);
        this.GqmPU = 300;
        t1.PsynU();
        t2.PsynU()
    }
    ,
    t.prototype.aMyYy = function(n) {
        this.sDHsu = n;
        n.victim.UmftV(5);
        n.author.UmftV(-5);
        n.author.statistics.NyVLh += 1;
        n.victim.statistics.RuMOd += 1;
        n.victim.t.IXBtu().isIn(n.point) ? (this.stop(2, !1),
        speaker.comment(27, n.victim)) : (this.stop(4, !1),
        speaker.comment(22, n.author),
        Math.random() > .8 && n.author.XZRoC())
    }
    ,
    t.prototype.ynUME = function() {
        var n, t;
        this.sDHsu != null && (n = this.sDHsu.author.statistics.PcyRv,
        this.mTViY == null && (t = this.sDHsu.kWVvT,
        this.sDHsu.author.statistics.PcyRv += t,
        sounds.sound(8, t * .01),
        QwTxA("card level:" + this.sDHsu.author.statistics.PcyRv.toString()),
        this.sDHsu.author.statistics.PcyRv > 44 && this.sDHsu.author.statistics.PcyRv < 50 ? this.hADPj() : n < 50 && this.sDHsu.author.statistics.PcyRv >= 100 ? this.eEKSz() : n < 50 && this.sDHsu.author.statistics.PcyRv >= 50 && this.sDHsu.author.statistics.PcyRv < 100 ? this.kWXpw() : n >= 50 && n < 100 && this.sDHsu.author.statistics.PcyRv >= 100 && this.kWXpw()),
        n < 100 && this.sDHsu.author.statistics.PcyRv >= 100 && this.mTViY == 1 && this.eEKSz())
    }
    ,
    t.prototype.kWXpw = function() {
        this.sDHsu.author.UmftV(-25);
        referee != null && referee.kWXpw();
        view.gjQFv.kWXpw(this.sDHsu.author.displayName());
        this.sDHsu.author.statistics.tJEtY++;
        this.GqmPU = 150;
        this.mTViY = 1
    }
    ,
    t.prototype.eEKSz = function() {
        (this.sDHsu.author == this.YUWPz || this.sDHsu.author != this.sDHsu.author.t.AxvNR) && (this.sDHsu.author.UmftV(-50),
        referee != null && referee.eEKSz(),
        view.gjQFv.eEKSz(this.sDHsu.author.displayName()),
        this.sDHsu.author.statistics.Zzebs++,
        this.GqmPU = 200,
        sounds.sound(0, this.sDHsu.author.t.opn.sbUdj * .3),
        this.mTViY = 2)
    }
    ,
    t.prototype.hADPj = function() {
        referee != null && new Comic(0,20,15,referee,100);
        view.gjQFv.hADPj(this.sDHsu.author.displayName());
        this.GqmPU = 150
    }
    ,
    t.prototype.Cvsrg = function() {
        this.cbWSl = (parameters.absWeek + t1.id + t2.id + this.half) % 2 == 0 ? t1 : t2;
        this.cbWSl.pHOXU = !0;
        this.cbWSl.opn.pHOXU = !1;
        this.KplmC()
    }
    ,
    t.prototype.rtSmd = function() {
        t1.nNJyJ();
        t2.nNJyJ();
        this.Cvsrg();
        this.half < 5 ? this.hWbON() : (this.penalties = new YeStj,
        this.penalties.start())
    }
    ,
    t.prototype.nwWzy = function(n) {
        switch (n) {
        case 2:
            return 45;
        case 3:
            return 90;
        case 4:
            return 105;
        case 5:
            return 120
        }
        return 0
    }
    ,
    t.prototype.save = function() {
        this.jNSAr.save()
    }
    ,
    t.prototype.result = function() {
        return t1.LTpCB.toString() + "-" + t2.LTpCB.toString()
    }
    ,
    t.prototype.reprise = function() {
        this.mTViY == 1 && this.ynUME();
        this.mTViY == 2 && (this.WDTge && this.sDHsu.author == this.YUWPz && (this.quitReason = 2),
        this.sDHsu.author.t.tLmpq(this.sDHsu.author));
        n.prototype.reprise.call(this)
    }
    ,
    t.prototype.FmLLS = function() {
        this.vFSMK(1);
        view.IQhyv();
        this.GqmPU = -1;
        t1.pFhbE = 0;
        t2.pFhbE = 0;
        t1.kJAZr();
        t2.kJAZr();
        this.paeHS() ? (this.penalties.sSnhVk(),
        this.penalties.ktVqr.opn.AxvNR.QJaFL = !1) : (this.WDTge && this.QYYHD(),
        t1.qihcS(),
        t2.qihcS());
        this.hoywu != null && (this.GkqOy == 8 && migOb.addTag("C", this.hoywu.qstAW()),
        this.GkqOy == 4 && migOb.addTag("F", this.hoywu.qstAW()));
        b.isOut = !1;
        b.HxCnF = !1;
        this.mTViY = null;
        this.sDHsu = null;
        this.UTYWn.reset()
    }
    ,
    t.prototype.paeHS = function() {
        return this.half == 5
    }
    ,
    t.prototype.QYYHD = function() {
        var n = t1.displayName() + " - " + t2.displayName() + " ";
        this.xbRtm ? (n += " " + t1.LTpCB.toString() + " - " + t2.LTpCB.toString(),
        parameters.firstLeg != null && (n += " (" + parameters.firstLeg + ")"),
        view.SRSSU.QYYHD(n)) : this.WDTge && view.SRSSU.uZjKhr(n, this.YUWPz);
        this.penalties != null && view.SRSSU.uCLBrm(t1.XSAun, t2.XSAun)
    }
    ,
    t.prototype.SWQkS = function(n) {
        var t = 0;
        switch (this.half) {
        case 1:
            t = this.minute;
            break;
        case 2:
            t = 45 * .5 + (this.minute - 45);
            break;
        case 3:
            t = this.minute - 45;
            break;
        case 4:
            t = 45 + 15 * .5 + (this.minute - 105)
        }
        n.vaGFK = n.QeJPA - (1 - n.lKvLo * .01) * .002 * t
    }
    ,
    t
}(Game);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
NQEqi = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.rules.kqBBq = !0,
        t.rules.cayfO = qJAsQ(9.15),
        t.rules.jnvLG = qJAsQ(11),
        t.rules.rpqWH = new Size(120,47),
        t.rules.Osawo = 11,
        t.rules.uNEhc = !0,
        t.rules.tbUwY = !1,
        t.rules.DLgLG = !0,
        t.rules.nASZn = new Size(1600,1e3),
        t.rules.uVTWK = new Size(qJAsQ(16.5),qJAsQ(40.32)),
        t
    }
    return __extends(t, n),
    t.prototype.eTooA = function() {
        pitch = new uJMKP(t1.stadiumCapacity,game.rules.nASZn)
    }
    ,
    t
}(Match);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Match5 = function(n) {
    function t() {
        var t = n.call(this) || this;
        return t.rules.kqBBq = !1,
        t.rules.cayfO = qJAsQ(5),
        t.rules.jnvLG = qJAsQ(6),
        t.rules.rpqWH = new Size(qJAsQ(4),qJAsQ(2)),
        t.rules.Osawo = 5,
        t.rules.uNEhc = !1,
        t.rules.tbUwY = !0,
        t.rules.DLgLG = !1,
        t
    }
    return __extends(t, n),
    t.prototype.FApan = function() {
        n.prototype.FApan.call(this);
        this.hoywu = this.hoywu.t.AxvNR
    }
    ,
    t.prototype.wVhsb = function() {
        b.cpxIl();
        QwTxA("match 5 throw in");
        this.hoywu.HgPHX(1);
        this.hoywu.QJaFL = !0
    }
    ,
    t.prototype.FMktw = function() {
        this.hoywu.t.AxvNR.HgPHX(.2);
        this.hoywu.t.AxvNR.XXqNk()
    }
    ,
    t.prototype.eTooA = function() {
        pitch = new Pitch5(t1.stadiumCapacity,this.rules.nASZn)
    }
    ,
    t
}(Match);
nthMn = function() {
    function n() {
        this.kBCnG = [];
        this.kBCnG[0] = [];
        this.kBCnG[0][0] = [];
        this.kBCnG[0][0][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][0][1] = [-37, -102, -30, -4, -59, -45, 20, -33, -45, 37, 1, -60, 66, -31, -90, -64, -62, -60, -11, -86, -45];
        this.kBCnG[0][0][2] = [-69, -26, -80, -15, -18, -90, 20, -19, -90, 57, -6, -100, 85, -22, -135, -64, 0, -80, -54, -10, -90];
        this.kBCnG[0][1] = [];
        this.kBCnG[0][1][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][1][1] = [-20, -112, -10, -4, -60, -30, 10, -28, -30, 7, 10, -45, 42, -7, -80, -48, -84, -45, 18, -93, -20];
        this.kBCnG[0][1][2] = [-60, -67, -35, -25, -22, -45, 0, 3, -45, 15, 38, -30, 45, 18, -40, -73, -23, -30, -15, -60, -45];
        this.kBCnG[0][2] = [];
        this.kBCnG[0][2][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][2][1] = [0, -105, 0, 0, -57, 0, 0, -27, 0, -17, -1, 0, 16, 0, 0, -27, -56, 0, 34, -67, 0];
        this.kBCnG[0][2][2] = [1, -82, 20, -1, -36, 0, 0, -4, 0, -13, 32, -20, 22, 37, 0, -37, -75, 20, 34, -78, 0];
        this.kBCnG[0][3] = [];
        this.kBCnG[0][3][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][3][1] = [20, -112, 10, 4, -60, 30, -10, -28, 30, -7, 10, 45, -42, -7, 80, 48, -84, 45, -18, -93, 20];
        this.kBCnG[0][3][2] = [60, -67, 35, 25, -22, 45, 0, 3, 45, -15, 38, 30, -45, 18, 40, 73, -23, 30, 15, -60, 45];
        this.kBCnG[0][4] = [];
        this.kBCnG[0][4][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][4][1] = [37, -102, 30, 4, -59, 45, -20, -33, 45, -37, 1, 60, -66, -31, 90, 64, -62, 60, 11, -86, 45];
        this.kBCnG[0][4][2] = [69, -26, 80, 15, -18, 90, -20, -19, 90, -57, -6, 100, -85, -22, 135, 64, 0, 80, 54, -10, 90];
        this.kBCnG[0][5] = [];
        this.kBCnG[0][5][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][5][1] = [7, -91, 20, -8, -59, 35, -16, -35, 20, 1, -20, 20, -40, -28, 30, 33, -52, 0, -26, -67, 0];
        this.kBCnG[0][5][2] = [36, 36, 115, -3, 0, 125, -28, -25, 135, -40, -60, -20, -74, -37, -45, 54, 3, 0, 0, 49, 0];
        this.kBCnG[0][6] = [];
        this.kBCnG[0][6][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][6][1] = [1, -70, 0, 2, -56, 0, 0, -30, 0, -18, -15, 0, 16, -17, 0, -23, -46, 0, 29, -42, 0];
        this.kBCnG[0][6][2] = [1, 43, 0, 0, 1, 0, 0, -35, 0, -25, -68, -5, 25, -69, 5, -28, 37, 0, 35, 34, 0];
        this.kBCnG[0][7] = [];
        this.kBCnG[0][7][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[0][7][1] = [-7, -91, -20, 8, -59, -35, 16, -35, -20, -1, -20, -20, 40, -28, -30, -33, -52, 0, 26, -67, 0];
        this.kBCnG[0][7][2] = [-36, 36, -115, 3, 0, -125, 28, -25, -135, 40, -60, 20, 74, -37, 45, -54, 3, 0, 0, 49, 0];
        this.kBCnG[1] = [];
        this.kBCnG[1][0] = [];
        this.kBCnG[1][0][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][0][1] = [45, -92, 30, 15, -52, 45, -10, -27, 45, -70, -17, 10, 0, 7, 0, 18, -102, 10, 67, -82, 10];
        this.kBCnG[1][0][2] = [45, -55, 20, 9, -27, 80, -25, -18, 80, -80, -7, 80, -37, 0, 0, 32, -27, 30, 69, 0, 10];
        this.kBCnG[1][1] = [];
        this.kBCnG[1][1][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][1][1] = [42, -107, 30, 17, -59, 15, 4, -26, 15, -35, -38, 80, 12, 10, -10, 2, -107, -5, 56, -67, 10];
        this.kBCnG[1][1][2] = [88, 0, 100, 35, -1, 100, 0, -15, 92, -35, -56, 92, -11, -25, -20, 30, 12, -20, 68, 48, 5];
        this.kBCnG[1][2] = [];
        this.kBCnG[1][2][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][2][1] = [0, -78, 0, 0, -46, 0, 0, -27, 0, -15, -37, 0, 16, -1, 0, -34, -63, 0, 40, -72, 0];
        this.kBCnG[1][2][2] = [4, 3, 0, 0, -29, 0, 0, -57, 0, -11, -106, 85, 24, -62, 0, -27, 10, 0, 32, 33, 0];
        this.kBCnG[1][3] = [];
        this.kBCnG[1][3][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][3][1] = [-42, -107, -30, -17, -59, -15, -4, -26, -15, 35, -38, -80, -12, 10, 10, -2, -107, 5, -56, -67, -10];
        this.kBCnG[1][3][2] = [-88, 0, -100, -35, -1, -100, 0, -15, -92, 35, -56, -92, 11, -25, 20, -30, 12, 20, -68, 48, -5];
        this.kBCnG[1][4] = [];
        this.kBCnG[1][4][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][4][1] = [-45, -92, -30, -15, -52, -45, 10, -27, -45, 70, -17, -10, 0, 7, 0, -18, -102, -10, -67, -82, -10];
        this.kBCnG[1][4][2] = [-45, -55, -20, -9, -27, -80, 25, -18, -80, 80, -7, -80, 37, 0, 0, -32, -27, -30, -69, 0, -10];
        this.kBCnG[1][5] = [];
        this.kBCnG[1][5][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][5][1] = [1, -93, 0, 12, -47, -15, 21, -20, -30, 45, -9, -30, 37, 21, -15, -31, -67, 45, 34, -84, 45];
        this.kBCnG[1][5][2] = [-16, -90, 0, -9, -42, -15, 11, -13, -30, 37, -1, -30, 52, 38, -45, -56, -49, 45, -16, -66, 45];
        this.kBCnG[1][6] = [];
        this.kBCnG[1][6][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][6][1] = [1, -87, 0, 1, -50, 0, 2, -21, 0, -18, 15, 0, 16, -8, 0, 28, -57, 0, -23, -63, 0];
        this.kBCnG[1][6][2] = [1, -81, 0, 1, -37, 0, 0, -7, 0, -18, 32, 0, 32, -8, -25, 35, -72, 0, -28, -89, 0];
        this.kBCnG[1][7] = [];
        this.kBCnG[1][7][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[1][7][1] = [-1, -93, 0, -12, -47, 15, -21, -20, 30, -45, -9, 30, -37, 21, 15, 31, -67, -45, -34, -84, -45];
        this.kBCnG[1][7][2] = [16, -90, 0, 9, -42, 15, -11, -13, 30, -37, -1, 30, -52, 38, 45, 56, -49, -45, 16, -66, -45];
        this.kBCnG[2] = [];
        this.kBCnG[2][0] = [];
        this.kBCnG[2][0][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][0][1] = [-37, -102, -30, -4, -59, -45, 20, -33, -45, 37, 1, -60, 66, -31, -90, -64, -62, -60, -18, -115, -45];
        this.kBCnG[2][0][2] = [-65, -26, -90, -15, -18, -90, 20, -19, -90, 57, -6, -100, 85, -22, -135, -92, -5, -90, -93, -37, -90];
        this.kBCnG[2][1] = [];
        this.kBCnG[2][1][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][1][1] = [-20, -112, -10, -4, -60, -30, 10, -28, -30, 7, 10, -45, 42, -7, -80, -48, -84, -45, 18, -93, -20];
        this.kBCnG[2][1][2] = [-60, -67, -35, -25, -22, -45, 0, 3, -45, 15, 38, -30, 45, 18, -40, -78, -78, -30, -78, -91, -45];
        this.kBCnG[2][2] = [];
        this.kBCnG[2][2][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][2][1] = [0, -105, 0, 0, -57, 0, 0, -27, 0, -17, -1, 0, 16, 0, 0, -27, -56, 0, 34, -67, 0];
        this.kBCnG[2][2][2] = [1, -82, 20, -1, -36, 0, 0, -4, 0, -13, 32, -20, 22, 37, 0, 0, -105, 20, 11, -100, 0];
        this.kBCnG[2][3] = [];
        this.kBCnG[2][3][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][3][1] = [20, -112, 10, 4, -60, 30, -10, -28, 30, -7, 10, 45, -42, -7, 80, 41, -84, 45, -25, -93, 20];
        this.kBCnG[2][3][2] = [60, -67, 35, 25, -22, 45, 0, 3, 45, -15, 38, 30, -45, 18, 40, 78, -78, 30, 78, -91, 45];
        this.kBCnG[2][4] = [];
        this.kBCnG[2][4][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][4][1] = [37, -102, 30, 4, -59, 45, -20, -33, 45, -37, 1, 60, -66, -31, 90, 64, -62, 60, 11, -86, 45];
        this.kBCnG[2][4][2] = [65, -26, 90, 15, -18, 90, -20, -19, 90, -57, -6, 100, -85, -22, 135, 92, -5, 90, 93, -37, 90];
        this.kBCnG[2][5] = [];
        this.kBCnG[2][5][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][5][1] = [22, -91, 20, 7, -59, 35, -1, -35, 20, 17, -23, 20, -25, -28, 30, 33, -52, 0, -11, -67, 0];
        this.kBCnG[2][5][2] = [57, 36, 115, 18, 0, 125, -6, -25, 135, -18, -60, -20, -52, -37, -45, 76, 70, 0, 57, 36, 0];
        this.kBCnG[2][6] = [];
        this.kBCnG[2][6][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][6][1] = [1, -70, 0, 2, -56, 0, 0, -30, 0, -18, -15, 0, 16, -17, 0, 2, -56, 0, 1, -94, 0];
        this.kBCnG[2][6][2] = [1, 43, 0, 0, 1, 0, 0, -35, 0, -25, -68, -5, 25, -69, 5, -4, 58, 0, 5, 68, 0];
        this.kBCnG[2][7] = [];
        this.kBCnG[2][7][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[2][7][1] = [-7, -91, -20, 8, -59, -35, 16, -35, -20, -1, -20, -20, 40, -28, -30, -25, -52, 0, -7, -83, 0];
        this.kBCnG[2][7][2] = [-36, 36, -115, 3, 0, -125, 28, -25, -135, 40, -60, 20, 74, -37, 45, -54, 67, 0, -51, 45, 0];
        this.kBCnG[3] = [];
        this.kBCnG[3][0] = [];
        this.kBCnG[3][0][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][0][1] = [-37, -102, -30, -4, -59, -45, 20, -33, -45, 37, 1, -60, 66, -31, -90, -64, -62, -60, -11, -86, -45];
        this.kBCnG[3][0][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][1] = [];
        this.kBCnG[3][1][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][1][1] = [-20, -112, -10, -4, -60, -30, 10, -28, -30, 7, 10, -45, 42, -7, -80, -48, -84, -45, 18, -93, -20];
        this.kBCnG[3][1][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][2] = [];
        this.kBCnG[3][2][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][2][1] = [0, -105, 0, 0, -57, 0, 0, -27, 0, -17, -1, 0, 16, 0, 0, -27, -56, 0, 34, -67, 0];
        this.kBCnG[3][2][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][3] = [];
        this.kBCnG[3][3][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][3][1] = [20, -112, 10, 4, -60, 30, -10, -28, 30, -7, 10, 45, -42, -7, 80, 48, -84, 45, -18, -93, 20];
        this.kBCnG[3][3][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][4] = [];
        this.kBCnG[3][4][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][4][1] = [37, -102, 30, 4, -59, 45, -20, -33, 45, -37, 1, 60, -66, -31, 90, 64, -62, 60, 11, -86, 45];
        this.kBCnG[3][4][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][5] = [];
        this.kBCnG[3][5][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][5][1] = [7, -91, 20, -8, -59, 35, -16, -35, 20, 1, -20, 20, -40, -28, 30, 33, -52, 0, -26, -67, 0];
        this.kBCnG[3][5][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][6] = [];
        this.kBCnG[3][6][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][6][1] = [1, -70, 0, 2, -56, 0, 0, -30, 0, -18, -15, 0, 16, -17, 0, -23, -46, 0, 29, -42, 0];
        this.kBCnG[3][6][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][7] = [];
        this.kBCnG[3][7][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[3][7][1] = [-7, -91, -20, 8, -59, -35, 16, -35, -20, -1, -20, -20, 40, -28, -30, -33, -52, 0, 26, -67, 0];
        this.kBCnG[3][7][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4] = [];
        this.kBCnG[4][0] = [];
        this.kBCnG[4][0][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][0][1] = [45, -92, 30, 15, -52, 45, -10, -27, 45, -70, -17, 10, 0, 7, 0, 18, -102, 10, 67, -82, 10];
        this.kBCnG[4][0][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][1] = [];
        this.kBCnG[4][1][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][1][1] = [42, -107, 30, 17, -59, 15, 4, -26, 15, -35, -38, 80, 12, 10, -10, 2, -107, -5, 56, -67, 10];
        this.kBCnG[4][1][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][2] = [];
        this.kBCnG[4][2][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][2][1] = [0, -78, 0, 0, -46, 0, 0, -27, 0, -15, -37, 0, 16, -1, 0, -34, -63, 0, 40, -72, 0];
        this.kBCnG[4][2][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][3] = [];
        this.kBCnG[4][3][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][3][1] = [-42, -107, -30, -17, -59, -15, -4, -26, -15, 35, -38, -80, -12, 10, 10, -2, -107, 5, -56, -67, -10];
        this.kBCnG[4][3][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][4] = [];
        this.kBCnG[4][4][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][4][1] = [-45, -92, -30, -15, -52, -45, 10, -27, -45, 70, -17, -10, 0, 7, 0, -18, -102, -10, -67, -82, -10];
        this.kBCnG[4][4][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][5] = [];
        this.kBCnG[4][5][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][5][1] = [1, -93, 0, 12, -47, -15, 21, -20, -30, 45, -9, -30, 37, 21, -15, -31, -67, 45, 34, -84, 45];
        this.kBCnG[4][5][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][6] = [];
        this.kBCnG[4][6][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][6][1] = [1, -87, 0, 1, -50, 0, 2, -21, 0, -18, 15, 0, 16, -8, 0, 28, -57, 0, -23, -63, 0];
        this.kBCnG[4][6][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][7] = [];
        this.kBCnG[4][7][0] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0];
        this.kBCnG[4][7][1] = [-1, -93, 0, -12, -47, 15, -21, -20, 30, -45, -9, 30, -37, 21, 15, 31, -67, -45, -34, -84, -45];
        this.kBCnG[4][7][2] = [1, -114, 0, 1, -65, 0, 1, -35, 0, -17, 0, 0, 17, 0, 0, -8, -39, 0, 9, -44, 0]
    }
    return n.prototype.sxcndx = function(n) {
        var i = n.WZwCZ() - 1, o = (n.BIOdF - 10) % 20, t, r;
        n.BIOdF >= 200 && (o = (n.BIOdF - 200) % 20);
        n.BIOdF >= 400 && (o = (n.BIOdF - 400) % 20);
        n.BIOdF >= 600 && (o = (n.BIOdF - 600) % 20);
        t = n.tieAc();
        view.PIlOD || (t = t > 5 ? t - 6 : t + 2);
        var f = 0
          , u = 0
          , e = 0;
        o < 8 && (f = (8 - o) * .125,
        u = o * .125);
        o >= 8 && (u = (16 - o) * .125,
        e = (o - 8) * .125);
        r = 40 / 180;
        n.head.shape.x = this.kBCnG[i][t][0][0] * f * r + this.kBCnG[i][t][1][0] * u * r + this.kBCnG[i][t][2][0] * e * r;
        n.head.shape.y = this.kBCnG[i][t][0][1] * f * r + this.kBCnG[i][t][1][1] * u * r + this.kBCnG[i][t][2][1] * e * r;
        n.head.shape.rotation = this.kBCnG[i][t][0][2] * f + this.kBCnG[i][t][1][2] * u + this.kBCnG[i][t][2][2] * e;
        n.face.shape.x = this.kBCnG[i][t][0][0] * f * r + this.kBCnG[i][t][1][0] * u * r + this.kBCnG[i][t][2][0] * e * r;
        n.face.shape.y = this.kBCnG[i][t][0][1] * f * r + this.kBCnG[i][t][1][1] * u * r + this.kBCnG[i][t][2][1] * e * r;
        n.face.shape.rotation = this.kBCnG[i][t][0][2] * f + this.kBCnG[i][t][1][2] * u + this.kBCnG[i][t][2][2] * e;
        n.shirt.shape.x = this.kBCnG[i][t][0][3] * f * r + this.kBCnG[i][t][1][3] * u * r + this.kBCnG[i][t][2][3] * e * r;
        n.shirt.shape.y = this.kBCnG[i][t][0][4] * f * r + this.kBCnG[i][t][1][4] * u * r + this.kBCnG[i][t][2][4] * e * r;
        n.shirt.shape.rotation = this.kBCnG[i][t][0][5] * f + this.kBCnG[i][t][1][5] * u + this.kBCnG[i][t][2][5] * e;
        n.shorts.shape.x = this.kBCnG[i][t][0][6] * f * r + this.kBCnG[i][t][1][6] * u * r + this.kBCnG[i][t][2][6] * e * r;
        n.shorts.shape.y = this.kBCnG[i][t][0][7] * f * r + this.kBCnG[i][t][1][7] * u * r + this.kBCnG[i][t][2][7] * e * r;
        n.shorts.shape.rotation = this.kBCnG[i][t][0][8] * f + this.kBCnG[i][t][1][8] * u + this.kBCnG[i][t][2][8] * e;
        n.tAtiQ || (n.shoe1.shape.x = this.kBCnG[i][t][0][9] * f * r + this.kBCnG[i][t][1][9] * u * r + this.kBCnG[i][t][2][9] * e * r,
        n.shoe1.shape.y = this.kBCnG[i][t][0][10] * f * r + this.kBCnG[i][t][1][10] * u * r + this.kBCnG[i][t][2][10] * e * r,
        n.shoe1.shape.rotation = this.kBCnG[i][t][0][11] * f + this.kBCnG[i][t][1][11] * u + this.kBCnG[i][t][2][11] * e,
        n.shoe2.shape.x = this.kBCnG[i][t][0][12] * f * r + this.kBCnG[i][t][1][12] * u * r + this.kBCnG[i][t][2][12] * e * r,
        n.shoe2.shape.y = this.kBCnG[i][t][0][13] * f * r + this.kBCnG[i][t][1][13] * u * r + this.kBCnG[i][t][2][13] * e * r,
        n.shoe2.shape.rotation = this.kBCnG[i][t][0][14] * f + this.kBCnG[i][t][1][14] * u + this.kBCnG[i][t][2][14] * e);
        n.hand1.shape.x = this.kBCnG[i][t][0][15] * f * r + this.kBCnG[i][t][1][15] * u * r + this.kBCnG[i][t][2][15] * e * r;
        n.hand1.shape.y = this.kBCnG[i][t][0][16] * f * r + this.kBCnG[i][t][1][16] * u * r + this.kBCnG[i][t][2][16] * e * r;
        n.hand1.shape.rotation = this.kBCnG[i][t][0][17] * f + this.kBCnG[i][t][1][17] * u + this.kBCnG[i][t][2][17] * e;
        n.hand2.shape.x = this.kBCnG[i][t][0][18] * f * r + this.kBCnG[i][t][1][18] * u * r + this.kBCnG[i][t][2][18] * e * r;
        n.hand2.shape.y = this.kBCnG[i][t][0][19] * f * r + this.kBCnG[i][t][1][19] * u * r + this.kBCnG[i][t][2][19] * e * r;
        n.hand2.shape.rotation = this.kBCnG[i][t][0][20] * f + this.kBCnG[i][t][1][20] * u + this.kBCnG[i][t][2][20] * e;
        n.hand1.shape.visible = !0;
        n.hand2.shape.visible = !0;
        n.head.shape.x += n.pfnbt.SDHsM;
        n.head.shape.y += n.pfnbt.dTfhX;
        n.face.shape.x += n.pfnbt.SDHsM;
        n.face.shape.y += n.pfnbt.dTfhX;
        n.shirt.shape.x += n.pfnbt.SDHsM;
        n.shirt.shape.y += n.pfnbt.dTfhX;
        n.shorts.shape.x += n.pfnbt.SDHsM;
        n.shorts.shape.y += n.pfnbt.dTfhX;
        n.tAtiQ || (n.shoe1.shape.x += n.pfnbt.SDHsM,
        n.shoe1.shape.y += n.pfnbt.dTfhX,
        n.shoe2.shape.x += n.pfnbt.SDHsM,
        n.shoe2.shape.y += n.pfnbt.dTfhX);
        n.hand1.shape.x += n.pfnbt.SDHsM;
        n.hand1.shape.y += n.pfnbt.dTfhX;
        n.hand2.shape.x += n.pfnbt.SDHsM;
        n.hand2.shape.y += n.pfnbt.dTfhX
    }
    ,
    n.prototype.iBofhR = function(n) {
        return n > 1 && n < 200 ? (n - 10) % 20 == 16 : n >= 200 ? n % 20 == 16 : !0
    }
    ,
    n
}();
Card = function() {
    function n(n, t, i) {
        this.color = n;
        this.width = t;
        this.height = i
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill(this.color).drawRect(-this.width / 2, -this.height / 2, this.width, this.height)
    }
    ,
    n.prototype.clear = function() {
        this.shape.graphics.clear()
    }
    ,
    n
}();
Comic = function() {
    function n(t, i, r, u, f) {
        this.type = t;
        this.width = i;
        this.height = r;
        this.player = u;
        this.duration = f;
        this.ftg = 0;
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill("white").beginStroke("black").drawEllipse(-this.width / 2, -this.height / 2, this.width, this.height);
        this.shape.graphics.beginFill("white").beginStroke("black").moveTo(-this.width / 2, this.height / 2);
        this.shape.graphics.lineTo(-this.width * .35, 0);
        this.shape.graphics.lineTo(0, this.height * .35);
        this.shape.graphics.lineTo(-this.width / 2, this.height / 2);
        this.shape.graphics.endFill();
        this.shape.graphics.beginFill("white").beginStroke("transparent").drawRect(-this.width * .425, 0, this.width * .425, this.height * .425);
        this.player != null && (this.id = n.VctEg++,
        n.comics[this.id] = this,
        XOpAD.addChild(this.shape),
        n.VctEg > 20 && (n.VctEg = 0))
    }
    return n.prototype.uJUbD = function() {
        this.player != null && (this.ftg += 1,
        view.apply(this.shape, this.player.yAjCz.MVOWz(0, 0, this.player.YKlsJ)),
        this.shape.x += 25,
        this.ftg < 5 && (this.shape.alpha = this.ftg * .2),
        this.ftg >= 5 && this.ftg <= this.duration && (this.shape.alpha = 1),
        this.ftg > this.duration && this.ftg < this.duration + 5 && (this.shape.alpha = 1 - (this.ftg - this.duration) * .2),
        this.ftg >= this.duration + 5 && (this.clear(),
        XOpAD.removeChild(this.shape)))
    }
    ,
    n.prototype.clear = function() {
        this.shape.graphics.clear()
    }
    ,
    n.comics = [],
    n.VctEg = 0,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
qlBxG = function(n) {
    function t(t) {
        var i = n.call(this, "0", null, null, null) || this;
        return i.skin = t.skin,
        i.hair = t.hair,
        i.name = "Referee",
        i.map = new iLfep,
        i.JBkov = 1,
        i.zMbFr = new iLfep,
        i.yAjCz.SDHsM = 0,
        i.yAjCz.dTfhX = 200,
        i.ftg = 0,
        i
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {}
    ,
    t.prototype.uJUbD = function() {
        game.VZEWj || (this.shoe1.uJUbD(),
        this.shoe2.uJUbD(),
        this.AjDvC = this.wapWW(b),
        this.AjDvC < 10 && b.yAjCz.hzrxR < 40 && b.yAjCz.hzrxR > 5 && this.KrGdu(),
        this.QXsju(),
        this.yAjCz.SDHsM += this.VmddP.SDHsM * migOb.WIMds,
        this.yAjCz.dTfhX += this.VmddP.dTfhX * migOb.WIMds,
        this.VmddP.TfgYn(.5),
        this.ETYeg = this.yAjCz.wapWW(this.zMbFr),
        this.VmddP.SDHsM += this.cosAng * this.pace,
        this.VmddP.dTfhX += this.sinAng * this.pace,
        ++this.ftg > 10 && (this.ftg = 0,
        this.IoQbi()))
    }
    ,
    t.prototype.cVDad = function() {
        this.faFif.SDHsM = this.yAjCz.SDHsM + this.VmddP.SDHsM * (KRdPs.tNLaS - game.kirRk);
        this.faFif.dTfhX = this.yAjCz.dTfhX + this.VmddP.dTfhX * (KRdPs.tNLaS - game.kirRk);
        view.EYvRf(this.faFif);
        this.pfnbt.SDHsM = CpJgo;
        this.pfnbt.dTfhX = hTbgM;
        this.wQOUK += this.XbxZX > this.wQOUK ? .1 : -.1;
        this.qdKyK != null && this.qdKyK.forEach(function(n) {
            n.cVDad()
        });
        game.sDHsu != null && game.mrEkW ? (this.watch.SDHsM = game.sDHsu.author.yAjCz.SDHsM,
        this.watch.dTfhX = game.sDHsu.author.yAjCz.dTfhX) : this.AQtsE();
        this.draw();
        this.umxdc()
    }
    ,
    t.prototype.IoQbi = function() {
        this.pace = 1;
        this.ETYeg < 22500 && (this.pace = .7);
        this.ETYeg < 2500 && (this.pace = 0);
        this.face.update();
        var n = this.yAjCz.angTo(this.zMbFr);
        isNaN(n) || (this.angle = n,
        this.cosAng = Math.cos(this.angle),
        this.sinAng = Math.sin(this.angle));
        this.AwDPO()
    }
    ,
    t.prototype.KrGdu = function() {
        var n;
        if (!(b.LWJMi < 5) && b.dSldC != 1) {
            var r = this.angTo(b) + Math.PI * (.5 - Math.random())
              , t = b.VmddP.value() * (.3 + Math.random() * .5)
              , i = new Vector;
            i.set(r, Math.PI * (1 - Math.random() * 2), t);
            b.move(i, null, 5);
            n = (.02 + t * .1) * (1 - min(t1.cover, t2.cover) * .15);
            n > .2 && sounds.sound(1, n);
            this.XZRoC()
        }
    }
    ,
    t.prototype.cVTofA = function() {
        var t, n, i;
        for (this.kits = [],
        this.kits[0] = new Kit("#00FF00","#00FF00","#00FF00",0,"#000000","#000000",0,"#FFFFFF"),
        this.kits[1] = new Kit("#FFFF00","#FFFF00","#FFFF00",0,"#000000","#000000",0,"#FFFFFF"),
        this.kits[2] = new Kit("#FF0000","#FF0000","#FF0000",0,"#000000","#000000",0,"#FFFFFF"),
        this.kits[3] = new Kit("#8080FF","#8080FF","#8080FF",0,"#000000","#000000",0,"#FFFFFF"),
        t = -1,
        this.JBkov = 0,
        n = 0; n < 4; n++)
            i = min(t1.NXnGl().qFTdq(this.kits[n]), t2.NXnGl().qFTdq(this.kits[n])),
            i > t && (t = i,
            this.JBkov = n)
    }
    ,
    t.prototype.sWNMoH = function() {
        var n, t;
        this.cVTofA();
        n = this.kits[this.JBkov];
        this.hand2 = new Hand(this);
        this.hand2.dWoPA();
        yxdsY.addChild(this.hand2.shape);
        this.head = new Head(this);
        this.head.dWoPA();
        yxdsY.addChild(this.head.shape);
        this.shirt = new Shirt(n,this);
        this.shirt.dWoPA();
        yxdsY.addChild(this.shirt.shape);
        this.shorts = new Shorts(n,this);
        this.shorts.dWoPA();
        yxdsY.addChild(this.shorts.shape);
        t = Math.random() * 10;
        this.shoe1 = new Shoe(this,1,this.shoe2,null,t);
        this.shoe1.dWoPA();
        yxdsY.addChild(this.shoe1.shape);
        this.shoe2 = new Shoe(this,-1,this.shoe1,null,10 + t);
        this.shoe2.dWoPA();
        yxdsY.addChild(this.shoe2.shape);
        this.face = new Face(this);
        this.face.dWoPA();
        yxdsY.addChild(this.face.shape);
        this.hand1 = new Hand(this);
        this.hand1.dWoPA();
        yxdsY.addChild(this.hand1.shape);
        this.hand1.shape.visible = !1;
        this.hand2.shape.visible = !1
    }
    ,
    t
}(Player);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Referee = function(n) {
    function t(t) {
        var i = n.call(this, t) || this;
        return i.JBkov = 1,
        i.zMbFr = new iLfep,
        i.yAjCz.SDHsM = 0,
        i.yAjCz.dTfhX = 200,
        i.ftg = 0,
        i
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        game.XfRzc || game.GopxG ? this.AjDvC < 2e4 ? (this.zMbFr.SDHsM = this.yAjCz.SDHsM + this.yAjCz.SDHsM - b.yAjCz.SDHsM,
        this.zMbFr.dTfhX = this.yAjCz.dTfhX + this.yAjCz.dTfhX - b.yAjCz.dTfhX) : (this.zMbFr.SDHsM = b.yAjCz.SDHsM * .7 + (t1.pHOXU ? t1.dir : t2.dir) * 200,
        this.zMbFr.dTfhX = b.yAjCz.dTfhX * .7) : game.mrEkW && game.sDHsu != null ? (this.zMbFr.SDHsM = game.sDHsu.author.yAjCz.SDHsM + sgn(this.yAjCz.SDHsM - game.sDHsu.author.yAjCz.SDHsM) * 20,
        this.zMbFr.dTfhX = game.sDHsu.author.yAjCz.dTfhX + sgn(this.yAjCz.dTfhX - game.sDHsu.author.yAjCz.dTfhX) * 20) : (this.zMbFr.SDHsM = b.YQgRD.SDHsM * .7,
        this.zMbFr.dTfhX = b.YQgRD.dTfhX * .7,
        this.zMbFr.SDHsM == 0 && this.zMbFr.dTfhX == 0 && (this.zMbFr.dTfhX = 100))
    }
    ,
    t.prototype.kWXpw = function() {
        this.IiBVu = 6;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !1;
        this.KSSyt = ~~(90 + Math.random() * 20);
        this.card = new Card("yellow",5,8);
        this.card.dWoPA();
        yxdsY.addChild(this.card.shape)
    }
    ,
    t.prototype.eEKSz = function() {
        this.IiBVu = 7;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !1;
        this.KSSyt = ~~(100 + Math.random() * 20);
        this.card = new Card("red",5,8);
        this.card.dWoPA();
        yxdsY.addChild(this.card.shape)
    }
    ,
    t.prototype.RkpRN = function() {
        this.IiBVu = 10;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !0;
        this.KSSyt = ~~(100 + Math.random() * 20)
    }
    ,
    t.prototype.zDAJW = function() {
        this.IiBVu = 11;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !1;
        this.KSSyt = ~~(100 + Math.random() * 20)
    }
    ,
    t.prototype.umxdc = function() {
        n.prototype.umxdc.call(this);
        this.card != null && (this.card.shape.x = this.hand1.shape.x,
        this.card.shape.y = this.hand1.shape.y - 4,
        this.IiBVu == 0 && (yxdsY.removeChild(this.card.shape),
        this.card.clear(),
        this.card = null))
    }
    ,
    t.prototype.tsAyM = function() {
        return "ref"
    }
    ,
    t
}(qlBxG);
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
zjWzu = function(n) {
    function t(t, i) {
        var r = n.call(this, i) || this;
        return r.JBkov = 1,
        r.dir = t,
        r.yAjCz.SDHsM = 0,
        r.yAjCz.dTfhX = (pitch.FpLNn + 20) * r.dir,
        r.zMbFr = new iLfep,
        r.ftg = 5 + r.dir * 2,
        r
    }
    return __extends(t, n),
    t.prototype.QXsju = function() {
        this.zMbFr.SDHsM = t1.dir == this.dir ? (t2.kyfVy + t1.hawot) * .5 : (t1.kyfVy + t2.hawot) * .5;
        this.zMbFr.dTfhX = (pitch.FpLNn + 20) * this.dir;
        sgn(this.zMbFr.SDHsM) == -this.dir && (this.zMbFr.SDHsM = 0)
    }
    ,
    t.prototype.xqiKi = function() {
        this.IiBVu = 8;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !1;
        this.KSSyt = ~~(50 + Math.random() * 20)
    }
    ,
    t.prototype.offside = function() {
        this.IiBVu = 9;
        this.hand1.shape.visible = !0;
        this.hand2.shape.visible = !1;
        this.KSSyt = ~~(80 + Math.random() * 20)
    }
    ,
    t.prototype.umxdc = function() {
        switch (this.IiBVu) {
        case 0:
            this.hand1.shape.visible = !0;
            this.hand1.shape.x = this.pfnbt.SDHsM;
            this.hand1.shape.y = this.pfnbt.dTfhX - this.YKlsJ * .35;
            Math.abs(this.VmddP.SDHsM) > Math.random() * 4 && (this.flag.shape.rotation = 170 + Math.random() * 20);
            break;
        case 8:
            if (game.hoywu != null) {
                var n = game.hoywu.t.dir;
                this.hand1.shape.x = this.pfnbt.SDHsM + n * 10;
                this.hand1.shape.y = this.pfnbt.dTfhX - this.YKlsJ * .45;
                view.PIlOD ? n > 0 ? this.flag.animate(2) : this.flag.animate(3) : this.dir > 0 ? (this.flag.animate(1),
                this.flag.shape.rotation = 180) : (this.flag.animate(1),
                this.flag.shape.rotation = 0)
            }
            break;
        case 9:
            this.hand1.shape.x = this.pfnbt.SDHsM;
            this.hand1.shape.y = this.pfnbt.dTfhX - this.dir * 10 - 10;
            view.PIlOD ? (this.flag.animate(1),
            this.flag.shape.rotation = this.dir > 0 ? 0 : 180) : this.dir > 0 ? this.flag.animate(2) : this.flag.animate(3)
        }
        this.flag.shape.x = this.hand1.shape.x;
        this.flag.shape.y = this.hand1.shape.y;
        this.KSSyt -= 1;
        this.KSSyt < 0 && this.IiBVu != 0 && (this.IiBVu = 0,
        this.flag.animate(1))
    }
    ,
    t.prototype.sWNMoH = function() {
        n.prototype.sWNMoH.call(this);
        this.flag = new bMJVL;
        this.flag.dWoPA();
        yxdsY.addChild(this.flag.shape)
    }
    ,
    t
}(qlBxG);
bMJVL = function() {
    function n() {
        this.width = 10;
        this.height = 20
    }
    return n.prototype.dWoPA = function() {
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill("yellow").drawRect(0, -this.height, this.width, this.height / 2);
        this.shape.graphics.beginFill("red").drawRect(this.width / 2, -this.height, this.width / 2, this.height / 4);
        this.shape.graphics.beginFill("red").drawRect(0, -this.height * .75, this.width / 2, this.height / 4);
        this.shape.graphics.endFill();
        this.shape.graphics.beginStroke("#555");
        this.shape.graphics.setStrokeStyle(this.width / 5);
        this.shape.graphics.moveTo(0, 0);
        this.shape.graphics.lineTo(0, -this.height);
        this.shape.graphics.endStroke();
        this.shape.regY = -this.height / 6;
        this.animate(1)
    }
    ,
    n.prototype.animate = function(n) {
        switch (n) {
        case 1:
            this.shape.skewY = -60;
            this.shape.scaleX = 1;
            this.shape.rotation = 180;
            break;
        case 2:
            this.shape.skewY = 0;
            this.shape.scaleX = 1;
            this.shape.rotation = 90;
            break;
        case 3:
            this.shape.skewY = 0;
            this.shape.scaleX = -1;
            this.shape.rotation = -90
        }
    }
    ,
    n
}();
vmEgn = function() {
    function n() {
        this.frames = 0;
        this.SKipT = null
    }
    return n.prototype.uJUbD = function() {
        var n = b.yAjCz.SDHsM < 0 ? pitch.goal1.Poqsn : pitch.goal2.Poqsn;
        game.XfRzc && n.isIn(b.yAjCz, b.radius) && b.OEDJp == null && this.frames < -10 && (this.frames = 30,
        this.SKipT == null && (this.SKipT = b.vSdIU));
        this.frames > 0 && Math.abs(b.yAjCz.SDHsM) > pitch.wmdto + b.radius * 1.1 && this.reset();
        --this.frames == 0 && (this.SKipT && migOb.addTag("L", this.SKipT.PqKIS()),
        this.reset())
    }
    ,
    n.prototype.reset = function() {
        this.frames = 0;
        this.SKipT = null
    }
    ,
    n
}();
Foul = function() {
    function n(n, t, i) {
        this.author = n;
        this.victim = t;
        this.point = i;
        this.kWVvT = this.fddiN()
    }
    return n.prototype.fddiN = function() {
        if (this.victim == null)
            return 0;
        if (this.author.t.riskIn(b.yAjCz) == 1)
            return 100;
        if (this.author.qstAW() && !this.author.KlBDy.hasbar())
            return 0;
        var n = (10 - this.author.t.WphkO(b.yAjCz)) * 2;
        return this.author.AvZos && (n += 10),
        this.victim.HIzpT() && (n += 10),
        n += Math.random() * 5,
        btovy(this.author.angle, this.victim.angle) < Math.PI * .2 && (n = n * 2),
        this.author.AjDvC > 1600 && (n = n * 2),
        vRzMg(n, 0, 100)
    }
    ,
    n
}();
vkTSQ = function() {
    function n() {
        this.rAOLa = !0;
        this.foul = null;
        this.sXtJp = 0;
        this.nXjqW = !1
    }
    return n.prototype.ljXxR = function() {
        return this.sXtJp > 0 && this.foul != null && !this.nXjqW
    }
    ,
    n.prototype.uJUbD = function() {
        game.XfRzc && (this.sXtJp -= 1,
        this.ljXxR() && (b.vSdIU != null && b.vSdIU.t == this.foul.author.t && (referee != null && referee.mpRKT(),
        this.ikJxz()),
        this.sXtJp == 80 && referee != null && referee.RkpRN()),
        this.sXtJp == 0 && this.foul.victim.t.IXdhI.AjDvC > this.foul.author.t.IXdhI.AjDvC && this.ikJxz())
    }
    ,
    n.prototype.ABsAC = function(n, t) {
        this.foul = n;
        this.rAOLa && t ? (this.sXtJp = 100,
        t1.Swkun(),
        t2.Swkun()) : game.aMyYy(this.foul)
    }
    ,
    n.prototype.reset = function() {
        this.sXtJp = 0;
        this.foul = null;
        this.nXjqW = !1
    }
    ,
    n.prototype.ikJxz = function() {
        this.ljXxR() && (t1.VMrII(),
        t2.VMrII(),
        referee != null && referee.mpRKT(),
        this.nXjqW = !0,
        game.aMyYy(this.foul))
    }
    ,
    n
}();
YeStj = function() {
    function n() {
        this.frames = -1
    }
    return n.prototype.uJUbD = function() {
        this.frames == 0 && (this.iSWcfs() ? (game.QYYHD(),
        t1.qihcS(),
        t2.qihcS(),
        this.wtdwxL().exult(),
        game.stop(10, !1)) : game.stop(9, !1));
        this.frames -= 1
    }
    ,
    n.prototype.start = function() {
        t1.tICkn = 0;
        t1.GRAUc = 0;
        t2.tICkn = 0;
        t2.GRAUc = 0;
        t1.XSAun = "";
        t2.XSAun = "";
        this.number = 0;
        this.sktef = 0;
        this.mloOJ = 0;
        this.dir = Math.random() > .5 ? 1 : -1;
        this.GsuIF = Math.random() > .5 ? t1 : t2;
        this.ktVqr = null;
        this.frames = 0
    }
    ,
    n.prototype.change = function() {
        this.ktVqr = this.ktVqr == null ? this.GsuIF : this.ktVqr.opn;
        this.ktVqr == this.GsuIF && this.number++;
        this.ktVqr.dir = this.dir;
        this.ktVqr.opn.dir = -this.dir
    }
    ,
    n.prototype.iSWcfs = function() {
        if (this.number < 6) {
            if (t1.GRAUc + 5 - t1.tICkn < t2.GRAUc || t2.GRAUc + 5 - t2.tICkn < t1.GRAUc)
                return !0
        } else if (t1.GRAUc != t2.GRAUc && t1.tICkn == t2.tICkn)
            return !0;
        return !1
    }
    ,
    n.prototype.locate = function() {
        t1.jlQOV();
        t2.jlQOV();
        var n;
        if (this.ktVqr == t1) {
            do
                this.sktef -= 1,
                this.sktef < 0 && (this.sktef = 10);
            while (t1.p[this.sktef] == null);
            n = t1.p[this.sktef]
        }
        if (this.ktVqr == t2) {
            do
                this.mloOJ -= 1,
                this.mloOJ < 0 && (this.mloOJ = 10);
            while (t2.p[this.mloOJ] == null);
            n = t2.p[this.mloOJ]
        }
        game.QINYx(this.ktVqr, n, (this.dir == -1 ? pitch.QPztY : pitch.tWdPg).oROkp);
        this.ktVqr.AxvNR.sweFh((pitch.wmdto + 40) * this.dir, sgn(Math.random() - .5) * 200);
        this.ktVqr.opn.AxvNR.sweFh(pitch.wmdto * this.dir, 0);
        t1.qWnRz();
        t2.qWnRz();
        game.Jsjwy(game.hoywu)
    }
    ,
    n.prototype.sSnhVk = function() {
        this.frames = 100;
        this.ktVqr.tICkn++;
        this.ktVqr.XSAun += "x"
    }
    ,
    n.prototype.score = function() {
        this.ktVqr.GRAUc++;
        this.ktVqr.XSAun = this.ktVqr.XSAun.substring(0, this.ktVqr.XSAun.length - 1) + "o"
    }
    ,
    n.prototype.wtdwxL = function() {
        return t1.GRAUc > t2.GRAUc ? t1 : t2
    }
    ,
    n.prototype.result = function() {
        return t1.GRAUc + "-" + t2.GRAUc
    }
    ,
    n
}();
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}();
Training = function(n) {
    function t() {
        return n.call(this) || this
    }
    return __extends(t, n),
    t.prototype.loadComplete = function() {
        n.prototype.loadComplete.call(this);
        QwTxA("Training load complete");
        this.loaded = !0;
        this.start()
    }
    ,
    t.prototype.Cvsrg = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.eTooA = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.save = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.rtSmd = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.KLERb = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.isfic = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.vRtPS = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.eHQlP = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.IOvGa = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.cHqBj = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.zeLZP = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.woJgz = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.HjVCi = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.FApan = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.oAPpo = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.aMyYy = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.FmLLS = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.DrwbR = function() {
        throw new Error("Method not implemented.");
    }
    ,
    t.prototype.cVDad = function() {
        n.prototype.cVDad.call(this)
    }
    ,
    t.prototype.uJUbD = function() {
        n.prototype.uJUbD.call(this)
    }
    ,
    t
}(Game);
nsHxV = function() {
    function n(n, t, i) {
        this.RioWd = -Math.cos(n) / Math.sin(n);
        this.FWzcJ = Math.cos(n) * 500 * (1 - t * .2);
        this.mAyPp = Math.sin(n) * 500 * (1 - t * .2);
        this.uETjZ = -this.mAyPp + this.RioWd * this.FWzcJ;
        this.shadow = new RuKqE([new iLfep(0,-1e3), new iLfep(1e3,-1e3), new iLfep(1e3,1e3), new iLfep(0,1e3)]);
        this.shadow.YfWoP(n);
        this.shadow.YulwW(new iLfep(this.FWzcJ,this.mAyPp));
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill("#000");
        this.shadow.render(this.shape);
        this.shape.graphics.endFill();
        this.shape.alpha = i * .4;
        var r = this.shadow.sOPEM();
        this.shape.cache(r.x, r.y, r.width, r.height);
        XOpAD.addChild(this.shape)
    }
    return n
}();
koYxx = function() {
    function n() {}
    return n.prototype.gnAbo = function() {
        var r, n, t, i;
        for (t1.JBkov = 0,
        t2.JBkov = 0,
        r = 0,
        n = 0; n < 2; n++)
            for (t = 0; t < 2; t++)
                i = t1.kits[n].qFTdq(t2.kits[t]),
                i > r && (r = i,
                t1.JBkov = n,
                t2.JBkov = t);
        t2.kits[4] != null && (i = t1.kits[t1.JBkov].qFTdq(t2.kits[4]),
        i > r && (t2.JBkov = 4));
        t1.eWknp = 2;
        t2.eWknp = 2;
        t1.kits[2].qFTdq(t2.NXnGl()) < t1.kits[3].qFTdq(t2.NXnGl()) && (t1.eWknp = 3);
        t2.kits[2].qFTdq(t1.NXnGl()) < t2.kits[3].qFTdq(t1.NXnGl()) && (t2.eWknp = 3);
        QwTxA("final choice: " + t1.JBkov + " " + t2.JBkov)
    }
    ,
    n
}();
Fog = function() {
    function n(n) {
        this.shape = new createjs.Shape;
        this.width = view.width;
        this.height = view.height;
        this.shape.graphics.beginLinearGradientFill(["rgba(200,200,200,1)", "rgba(200,200,200,0)"], [0, 1], 0, 0, 0, view.height).drawRect(0, 0, view.width, view.height);
        this.shape.graphics.endFill();
        this.shape.alpha = n * .8;
        this.shape.cache(0, 0, view.width, view.height);
        stage.addChild(this.shape)
    }
    return n.prototype.resize = function() {
        this.shape.uncache();
        this.shape.scaleX = view.width / this.width;
        this.shape.scaleY = view.height / this.height;
        this.shape.cache(0, 0, this.width, this.height)
    }
    ,
    n
}();
Splash = function() {
    function n(n, t) {
        this.id = t;
        this.frame = 0;
        this.size = .05 + Math.random() * .3;
        this.shape = new createjs.Shape;
        this.shape.graphics.beginFill("#ccc").drawEllipse(-5, -3, 10, 6);
        this.shape.graphics.endFill();
        this.shape.cache(-5, -3, 10, 6);
        this.uYIqv = !0;
        view.apply(this.shape, n);
        PvRyJ.addChild(this.shape)
    }
    return n.prototype.uJUbD = function() {
        ++this.frame <= 10 && (this.shape.alpha = .8 - this.frame * .08,
        this.shape.scaleX = .5 + this.frame * this.size,
        this.shape.scaleY = .5 + this.frame * this.size,
        this.frame == 10 && this.shape != null && (PvRyJ.removeChild(this.shape),
        this.uYIqv = !1))
    }
    ,
    n.prototype.cVDad = function() {}
    ,
    n.prototype.vcabn = function(n) {
        this.uYIqv || (view.apply(this.shape, n),
        PvRyJ.addChild(this.shape),
        this.uYIqv = !0,
        this.frame = 0)
    }
    ,
    n
}();
ymzaC = function() {
    function n(n, t, i) {
        var r = 0, u;
        n != undefined && t != undefined && (u = n.length + t.length * 2 + n.charCodeAt(0) * 3 + t.charCodeAt(0) * 5 + i,
        r = u % 40);
        this.Ctbzs = 0;
        this.afrsV = 0;
        this.PPrPS = 0;
        this.bqcSy = [];
        this.ZSqaG = 0;
        this.wrBTe = .1 + Math.PI * ((t1.stadium() + parameters.absWeek) % 16) / 8;
        this.yqZow = 1 + (t1.stadium() + parameters.absWeek * 2) % 6 / 2;
        r > 30 && (this.Ctbzs = r % 4 / 3);
        r > 25 && r < 35 && (this.afrsV = r % 5 / 4);
        r > 15 && r < 35 && (this.PPrPS = r % 8 / 7);
        this.sun = new DIUlF(Math.cos(this.wrBTe) * 5e3,Math.sin(this.wrBTe) * 5e3,1e4,this.ycPWa())
    }
    return n.prototype.addFog = function() {
        this.afrsV > 0 && (this.fog = new Fog(this.afrsV))
    }
    ,
    n.prototype.resize = function() {
        this.fog != null && this.fog.resize()
    }
    ,
    n.prototype.uJUbD = function() {
        this.bqcSy.forEach(function(n) {
            return n.uJUbD()
        })
    }
    ,
    n.prototype.cVDad = function() {}
    ,
    n.prototype.PRTwD = function(n) {
        Math.random() > .2 * this.Ctbzs || (this.bqcSy[this.ZSqaG] == null ? this.bqcSy[this.ZSqaG] = new Splash(n,this.ZSqaG) : this.bqcSy[this.ZSqaG].vcabn(n),
        this.ZSqaG++,
        this.ZSqaG >= 30 && (this.ZSqaG = 0))
    }
    ,
    n.prototype.ycPWa = function() {
        return 1 - max(this.PPrPS, this.Ctbzs) * .8
    }
    ,
    n
}(),
function(n) {
    var t = function() {
        function n(n, t) {
            this.owYHI = n;
            this.frame = t
        }
        return n
    }();
    n.WQAsV = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i, r, u) {
            var f = n.call(this, 1, t) || this;
            return f.fwoJl = i,
            f.CRlkh = r,
            f.volume = u,
            f
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + this.fwoJl + "," + this.CRlkh + "," + this.volume.toFixed(2)
        }
        ,
        t.prototype.UBLaq = function() {
            sounds.QgwXJ(this)
        }
        ,
        t
    }(n.WQAsV);
    n.YYvyi = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i, r) {
            var u = n.call(this, 2, t) || this;
            return u.hptUp = i,
            u.yAjCz = r.clone().round(),
            u
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + this.hptUp + "," + this.yAjCz.SDHsM + "," + this.yAjCz.dTfhX + "," + this.yAjCz.hzrxR
        }
        ,
        t.prototype.UBLaq = function() {
            parameters.score == 1 && new Score(this.yAjCz,this.hptUp)
        }
        ,
        t
    }(n.WQAsV);
    n.YfAwS = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i, r, u, f, e, o, s) {
            var h = n.call(this, 3, t) || this;
            return h.minute = ~~i,
            h.half = r,
            h.LTpCB = u,
            h.AGweP = f,
            h.score = e,
            h.result1 = o,
            h.result2 = s,
            h
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + this.minute + "," + this.half + "," + this.LTpCB + "," + this.AGweP + "," + this.score + "," + this.result1 + "," + this.result2
        }
        ,
        t.prototype.UBLaq = function() {
            game.minute = this.minute;
            game.half = this.half;
            game.WDTge ? (game.YUWPz.statistics.TtWmN = this.LTpCB > 0 ? this.LTpCB : 0,
            game.YUWPz.statistics.WkvqA = this.LTpCB < 0 ? -this.LTpCB : 0,
            game.YUWPz.statistics.AGweP = this.AGweP,
            game.YUWPz.hptUp = this.score) : (t1.LTpCB = this.result1,
            t2.LTpCB = this.result2);
            game.VOkaD();
            game.QYYHD()
        }
        ,
        t
    }(n.WQAsV);
    n.Bamyu = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i) {
            var r = n.call(this, 5, t) || this;
            return r.yAjCz = i.clone().round(),
            r
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + this.yAjCz.SDHsM + "," + this.yAjCz.dTfhX
        }
        ,
        t.prototype.UBLaq = function() {
            EjGIl.blink(this.yAjCz)
        }
        ,
        t
    }(n.WQAsV);
    n.qAaQu = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i, r, u) {
            var f = n.call(this, 4, t) || this;
            return f.draIJ = i,
            f.AZBJY = r,
            f.dUMcE = u,
            f
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + this.draIJ + "," + this.AZBJY + "," + this.dUMcE
        }
        ,
        t.prototype.UBLaq = function() {
            var n = this.AZBJY == 1 ? t1 : t2
              , t = n.p[this.dUMcE];
            n.RCcbW.KlBDy[this.draIJ] || (n.RCcbW.KlBDy[this.draIJ] = new uSTzW(this.draIJ,n,t,!1,!1));
            n.RCcbW.KlBDy[this.draIJ].player = t
        }
        ,
        t
    }(n.WQAsV);
    n.vZGRz = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i, r) {
            var u = n.call(this, 6, t) || this;
            return u.AZBJY = i,
            u.dUMcE = r,
            u
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + this.AZBJY + "," + this.dUMcE
        }
        ,
        t.prototype.UBLaq = function() {
            var n = this.AZBJY == 1 ? t1 : t2
              , t = n.p[this.dUMcE];
            game.Jsjwy(t)
        }
        ,
        t
    }(n.WQAsV);
    n.PYZdB = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t(t, i) {
            var r = n.call(this, 7, t) || this;
            return r.HxCnF = i,
            r
        }
        return __extends(t, n),
        t.prototype.cunCf = function() {
            return this.owYHI + "," + this.frame + "," + CvEEI(this.HxCnF)
        }
        ,
        t.prototype.UBLaq = function() {
            b.HxCnF = this.HxCnF
        }
        ,
        t
    }(n.WQAsV);
    n.mJKol = t
}(Events || (Events = {})),
function(n) {
    var t = function() {
        function t() {
            this.jCLeo = [];
            this.ksACv = []
        }
        return t.prototype.uJUbD = function() {}
        ,
        t.prototype.rFhvCz = function() {
            if (this.jCLeo.length != 0)
                while (this.jCLeo.length > 0 && this.jCLeo[0].frame < game.kirRk - EhvrD * 2)
                    this.jCLeo.splice(0, 1)
        }
        ,
        t.prototype.gzFIou = function(n, t) {
            var r = [], i;
            return this.jCLeo.forEach(function(i) {
                i.frame >= n && i.frame < n + t && r.push(i)
            }),
            i = "",
            r.forEach(function(t) {
                t.frame -= n;
                i += t.cunCf() + ";"
            }),
            i.length > 0 && (i = i.substr(0, i.length - 1)),
            i
        }
        ,
        t.prototype.AuLhQ = function(t, i) {
            var r = this, u;
            t && (u = t.split(";"),
            u.forEach(function(t) {
                var u = t.split(",");
                switch (+u[0]) {
                case 1:
                    r.ksACv.push(new n.YYvyi(+u[1] + i,+u[2],u[3],+u[4]));
                    break;
                case 2:
                    r.ksACv.push(new n.YfAwS(+u[1] + i,+u[2],new iLfep(+u[3],+u[4],+u[5])));
                    break;
                case 3:
                    r.ksACv.push(new n.Bamyu(+u[1] + i,+u[2],+u[3],+u[4],+u[5],+u[6],+u[7],+u[8]));
                    break;
                case 5:
                    r.ksACv.push(new n.qAaQu(+u[1] + i,new iLfep(+u[2],+u[3])));
                    break;
                case 4:
                    r.ksACv.push(new n.vZGRz(+u[1] + i,+u[2],+u[3],+u[4]));
                    break;
                case 6:
                    r.ksACv.push(new n.PYZdB(+u[1] + i,+u[2],+u[3]));
                    break;
                case 7:
                    r.ksACv.push(new n.mJKol(+u[1] + i,+u[2] == 1));
                    break;
                default:
                    QwTxA("invalid EventType " + u[0])
                }
            }))
        }
        ,
        t
    }();
    n.hSIhQ = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t() {
            return n.call(this) || this
        }
        return __extends(t, n),
        t.prototype.HflRS = function() {}
        ,
        t.prototype.uJUbD = function() {
            var t, n;
            this.ksACv.length != 0 && ((t = game.vjtYB ? migOb.frame() : game.kirRk,
            this.ksACv[0].frame > t) || (n = this.ksACv.splice(0, 1)[0],
            this.jCLeo.push(n),
            n.frame + 5 < t) || (n.UBLaq(),
            game.vjtYB || this.rFhvCz()))
        }
        ,
        t
    }(n.hSIhQ);
    n.odRTt = t
}(Events || (Events = {}));
__extends = this && this.__extends || function() {
    var n = function(t, i) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(n, t) {
            n.__proto__ = t
        }
        || function(n, t) {
            for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i])
        }
        ,
        n(t, i)
    };
    return function(t, i) {
        function r() {
            this.cTrECY = t
        }
        if (typeof i != "function" && i !== null)
            throw new TypeError("Class extends value " + String(i) + " is not a cTrECY or null");
        n(t, i);
        t.prototype = i === null ? Object.create(i) : (r.prototype = i.prototype,
        new r)
    }
}(),
function(n) {
    var t = function(n) {
        function t() {
            return n.call(this) || this
        }
        return __extends(t, n),
        t.prototype.uJUbD = function() {
            var n, t;
            this.ksACv.length != 0 && ((n = game.vjtYB ? migOb.frame() : game.kirRk,
            this.ksACv[0].frame > n) || (t = this.ksACv.splice(0, 1)[0],
            this.jCLeo.push(t)))
        }
        ,
        t.prototype.HflRS = function(n) {
            this.ksACv.push(n);
            this.rFhvCz()
        }
        ,
        t
    }(n.hSIhQ);
    n.YEmdv = t
}(Events || (Events = {}));
