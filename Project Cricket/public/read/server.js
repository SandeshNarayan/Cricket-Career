( () => {
    "use strict";
    var e, t, n, r = {};
    r.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    function(e) {
        const t = []
          , n = "__jsObjectId"
          , r = "__dotNetObject"
          , o = "__byte[]"
          , s = "__dotNetStream"
          , i = "__jsStreamReferenceLength";
        let a, c;
        class l {
            constructor(e) {
                this._jsObject = e,
                this._cachedFunctions = new Map
            }
            findFunction(e) {
                const t = this._cachedFunctions.get(e);
                if (t)
                    return t;
                let n, r = this._jsObject;
                if (e.split(".").forEach((t => {
                    if (!(t in r))
                        throw new Error(`Could not find '${e}' ('${t}' was undefined).`);
                    n = r,
                    r = r[t]
                }
                )),
                r instanceof Function)
                    return r = r.bind(n),
                    this._cachedFunctions.set(e, r),
                    r;
                throw new Error(`The value '${e}' is not a function.`)
            }
            getWrappedObject() {
                return this._jsObject
            }
        }
        const h = {
            0: new l(window)
        };
        h[0]._cachedFunctions.set("import", (e => ("string" == typeof e && e.startsWith("./") && (e = new URL(e.substr(2),document.baseURI).toString()),
        import(e))));
        let d, u = 1;
        function p(e) {
            t.push(e)
        }
        function f(e) {
            if (e && "object" == typeof e) {
                h[u] = new l(e);
                const t = {
                    [n]: u
                };
                return u++,
                t
            }
            throw new Error(`Cannot create a JSObjectReference from the value '${e}'.`)
        }
        function g(e) {
            let t = -1;
            if (e instanceof ArrayBuffer && (e = new Uint8Array(e)),
            e instanceof Blob)
                t = e.size;
            else {
                if (!(e.buffer instanceof ArrayBuffer))
                    throw new Error("Supplied value is not a typed array or blob.");
                if (void 0 === e.byteLength)
                    throw new Error(`Cannot create a JSStreamReference from the value '${e}' as it doesn't have a byteLength.`);
                t = e.byteLength
            }
            const r = {
                [i]: t
            };
            try {
                const t = f(e);
                r[n] = t[n]
            } catch (t) {
                throw new Error(`Cannot create a JSStreamReference from the value '${e}'.`)
            }
            return r
        }
        function m(e, n) {
            c = e;
            const r = n ? JSON.parse(n, ( (e, n) => t.reduce(( (t, n) => n(e, t)), n))) : null;
            return c = void 0,
            r
        }
        function v() {
            if (void 0 === a)
                throw new Error("No call dispatcher has been set.");
            if (null === a)
                throw new Error("There are multiple .NET runtimes present, so a default dispatcher could not be resolved. Use DotNetObject to invoke .NET instance methods.");
            return a
        }
        e.attachDispatcher = function(e) {
            const t = new y(e);
            return void 0 === a ? a = t : a && (a = null),
            t
        }
        ,
        e.attachReviver = p,
        e.invokeMethod = function(e, t, ...n) {
            return v().invokeDotNetStaticMethod(e, t, ...n)
        }
        ,
        e.invokeMethodAsync = function(e, t, ...n) {
            return v().invokeDotNetStaticMethodAsync(e, t, ...n)
        }
        ,
        e.createJSObjectReference = f,
        e.createJSStreamReference = g,
        e.disposeJSObjectReference = function(e) {
            const t = e && e[n];
            "number" == typeof t && b(t)
        }
        ,
        function(e) {
            e[e.Default = 0] = "Default",
            e[e.JSObjectReference = 1] = "JSObjectReference",
            e[e.JSStreamReference = 2] = "JSStreamReference",
            e[e.JSVoidResult = 3] = "JSVoidResult"
        }(d = e.JSCallResultType || (e.JSCallResultType = {}));
        class y {
            constructor(e) {
                this._dotNetCallDispatcher = e,
                this._byteArraysToBeRevived = new Map,
                this._pendingDotNetToJSStreams = new Map,
                this._pendingAsyncCalls = {},
                this._nextAsyncCallId = 1
            }
            getDotNetCallDispatcher() {
                return this._dotNetCallDispatcher
            }
            invokeJSFromDotNet(e, t, n, r) {
                const o = m(this, t)
                  , s = I(_(e, r)(...o || []), n);
                return null == s ? null : T(this, s)
            }
            beginInvokeJSFromDotNet(e, t, n, r, o) {
                const s = new Promise((e => {
                    const r = m(this, n);
                    e(_(t, o)(...r || []))
                }
                ));
                e && s.then((t => T(this, [e, !0, I(t, r)]))).then((t => this._dotNetCallDispatcher.endInvokeJSFromDotNet(e, !0, t)), (t => this._dotNetCallDispatcher.endInvokeJSFromDotNet(e, !1, JSON.stringify([e, !1, w(t)]))))
            }
            endInvokeDotNetFromJS(e, t, n) {
                const r = t ? m(this, n) : new Error(n);
                this.completePendingCall(parseInt(e, 10), t, r)
            }
            invokeDotNetStaticMethod(e, t, ...n) {
                return this.invokeDotNetMethod(e, t, null, n)
            }
            invokeDotNetStaticMethodAsync(e, t, ...n) {
                return this.invokeDotNetMethodAsync(e, t, null, n)
            }
            invokeDotNetMethod(e, t, n, r) {
                if (this._dotNetCallDispatcher.invokeDotNetFromJS) {
                    const o = T(this, r)
                      , s = this._dotNetCallDispatcher.invokeDotNetFromJS(e, t, n, o);
                    return s ? m(this, s) : null
                }
                throw new Error("The current dispatcher does not support synchronous calls from JS to .NET. Use invokeDotNetMethodAsync instead.")
            }
            invokeDotNetMethodAsync(e, t, n, r) {
                if (e && n)
                    throw new Error(`For instance method calls, assemblyName should be null. Received '${e}'.`);
                const o = this._nextAsyncCallId++
                  , s = new Promise(( (e, t) => {
                    this._pendingAsyncCalls[o] = {
                        resolve: e,
                        reject: t
                    }
                }
                ));
                try {
                    const s = T(this, r);
                    this._dotNetCallDispatcher.beginInvokeDotNetFromJS(o, e, t, n, s)
                } catch (e) {
                    this.completePendingCall(o, !1, e)
                }
                return s
            }
            receiveByteArray(e, t) {
                this._byteArraysToBeRevived.set(e, t)
            }
            processByteArray(e) {
                const t = this._byteArraysToBeRevived.get(e);
                return t ? (this._byteArraysToBeRevived.delete(e),
                t) : null
            }
            supplyDotNetStream(e, t) {
                if (this._pendingDotNetToJSStreams.has(e)) {
                    const n = this._pendingDotNetToJSStreams.get(e);
                    this._pendingDotNetToJSStreams.delete(e),
                    n.resolve(t)
                } else {
                    const n = new C;
                    n.resolve(t),
                    this._pendingDotNetToJSStreams.set(e, n)
                }
            }
            getDotNetStreamPromise(e) {
                let t;
                if (this._pendingDotNetToJSStreams.has(e))
                    t = this._pendingDotNetToJSStreams.get(e).streamPromise,
                    this._pendingDotNetToJSStreams.delete(e);
                else {
                    const n = new C;
                    this._pendingDotNetToJSStreams.set(e, n),
                    t = n.streamPromise
                }
                return t
            }
            completePendingCall(e, t, n) {
                if (!this._pendingAsyncCalls.hasOwnProperty(e))
                    throw new Error(`There is no pending async call with ID ${e}.`);
                const r = this._pendingAsyncCalls[e];
                delete this._pendingAsyncCalls[e],
                t ? r.resolve(n) : r.reject(n)
            }
        }
        function w(e) {
            return e instanceof Error ? `${e.message}\n${e.stack}` : e ? e.toString() : "null"
        }
        function _(e, t) {
            const n = h[t];
            if (n)
                return n.findFunction(e);
            throw new Error(`JS object instance with ID ${t} does not exist (has it been disposed?).`)
        }
        function b(e) {
            delete h[e]
        }
        e.findJSFunction = _,
        e.disposeJSObjectReferenceById = b;
        class S {
            constructor(e, t) {
                this._id = e,
                this._callDispatcher = t
            }
            invokeMethod(e, ...t) {
                return this._callDispatcher.invokeDotNetMethod(null, e, this._id, t)
            }
            invokeMethodAsync(e, ...t) {
                return this._callDispatcher.invokeDotNetMethodAsync(null, e, this._id, t)
            }
            dispose() {
                this._callDispatcher.invokeDotNetMethodAsync(null, "__Dispose", this._id, null).catch((e => console.error(e)))
            }
            serializeAsArg() {
                return {
                    [r]: this._id
                }
            }
        }
        e.DotNetObject = S,
        p((function(e, t) {
            if (t && "object" == typeof t) {
                if (t.hasOwnProperty(r))
                    return new S(t[r],c);
                if (t.hasOwnProperty(n)) {
                    const e = t[n]
                      , r = h[e];
                    if (r)
                        return r.getWrappedObject();
                    throw new Error(`JS object instance with Id '${e}' does not exist. It may have been disposed.`)
                }
                if (t.hasOwnProperty(o)) {
                    const e = t[o]
                      , n = c.processByteArray(e);
                    if (void 0 === n)
                        throw new Error(`Byte array index '${e}' does not exist.`);
                    return n
                }
                if (t.hasOwnProperty(s)) {
                    const e = t[s]
                      , n = c.getDotNetStreamPromise(e);
                    return new E(n)
                }
            }
            return t
        }
        ));
        class E {
            constructor(e) {
                this._streamPromise = e
            }
            stream() {
                return this._streamPromise
            }
            async arrayBuffer() {
                return new Response(await this.stream()).arrayBuffer()
            }
        }
        class C {
            constructor() {
                this.streamPromise = new Promise(( (e, t) => {
                    this.resolve = e,
                    this.reject = t
                }
                ))
            }
        }
        function I(e, t) {
            switch (t) {
            case d.Default:
                return e;
            case d.JSObjectReference:
                return f(e);
            case d.JSStreamReference:
                return g(e);
            case d.JSVoidResult:
                return null;
            default:
                throw new Error(`Invalid JS call result type '${t}'.`)
            }
        }
        let k = 0;
        function T(e, t) {
            k = 0,
            c = e;
            const n = JSON.stringify(t, D);
            return c = void 0,
            n
        }
        function D(e, t) {
            if (t instanceof S)
                return t.serializeAsArg();
            if (t instanceof Uint8Array) {
                c.getDotNetCallDispatcher().sendByteArray(k, t);
                const e = {
                    [o]: k
                };
                return k++,
                e
            }
            return t
        }
    }(e || (e = {})),
    function(e) {
        e[e.prependFrame = 1] = "prependFrame",
        e[e.removeFrame = 2] = "removeFrame",
        e[e.setAttribute = 3] = "setAttribute",
        e[e.removeAttribute = 4] = "removeAttribute",
        e[e.updateText = 5] = "updateText",
        e[e.stepIn = 6] = "stepIn",
        e[e.stepOut = 7] = "stepOut",
        e[e.updateMarkup = 8] = "updateMarkup",
        e[e.permutationListEntry = 9] = "permutationListEntry",
        e[e.permutationListEnd = 10] = "permutationListEnd"
    }(t || (t = {})),
    function(e) {
        e[e.element = 1] = "element",
        e[e.text = 2] = "text",
        e[e.attribute = 3] = "attribute",
        e[e.component = 4] = "component",
        e[e.region = 5] = "region",
        e[e.elementReferenceCapture = 6] = "elementReferenceCapture",
        e[e.markup = 8] = "markup",
        e[e.namedEvent = 10] = "namedEvent"
    }(n || (n = {}));
    class o {
        constructor(e, t) {
            this.componentId = e,
            this.fieldValue = t
        }
        static fromEvent(e, t) {
            const n = t.target;
            if (n instanceof Element) {
                const t = function(e) {
                    return e instanceof HTMLInputElement ? e.type && "checkbox" === e.type.toLowerCase() ? {
                        value: e.checked
                    } : {
                        value: e.value
                    } : e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement ? {
                        value: e.value
                    } : null
                }(n);
                if (t)
                    return new o(e,t.value)
            }
            return null
        }
    }
    const s = new Map
      , i = new Map
      , a = [];
    function c(e) {
        return s.get(e)
    }
    function l(e) {
        const t = s.get(e);
        return (null == t ? void 0 : t.browserEventName) || e
    }
    function h(e, t) {
        e.forEach((e => s.set(e, t)))
    }
    function d(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
            const r = e[n];
            t.push({
                identifier: r.identifier,
                clientX: r.clientX,
                clientY: r.clientY,
                screenX: r.screenX,
                screenY: r.screenY,
                pageX: r.pageX,
                pageY: r.pageY
            })
        }
        return t
    }
    function u(e) {
        return {
            detail: e.detail,
            screenX: e.screenX,
            screenY: e.screenY,
            clientX: e.clientX,
            clientY: e.clientY,
            offsetX: e.offsetX,
            offsetY: e.offsetY,
            pageX: e.pageX,
            pageY: e.pageY,
            movementX: e.movementX,
            movementY: e.movementY,
            button: e.button,
            buttons: e.buttons,
            ctrlKey: e.ctrlKey,
            shiftKey: e.shiftKey,
            altKey: e.altKey,
            metaKey: e.metaKey,
            type: e.type
        }
    }
    h(["input", "change"], {
        createEventArgs: function(e) {
            const t = e.target;
            if (function(e) {
                return -1 !== p.indexOf(e.getAttribute("type"))
            }(t)) {
                const e = function(e) {
                    const t = e.value
                      , n = e.type;
                    switch (n) {
                    case "date":
                    case "month":
                    case "week":
                        return t;
                    case "datetime-local":
                        return 16 === t.length ? t + ":00" : t;
                    case "time":
                        return 5 === t.length ? t + ":00" : t
                    }
                    throw new Error(`Invalid element type '${n}'.`)
                }(t);
                return {
                    value: e
                }
            }
            if (function(e) {
                return e instanceof HTMLSelectElement && "select-multiple" === e.type
            }(t)) {
                const e = t;
                return {
                    value: Array.from(e.options).filter((e => e.selected)).map((e => e.value))
                }
            }
            {
                const e = function(e) {
                    return !!e && "INPUT" === e.tagName && "checkbox" === e.getAttribute("type")
                }(t);
                return {
                    value: e ? !!t.checked : t.value
                }
            }
        }
    }),
    h(["copy", "cut", "paste"], {
        createEventArgs: e => ({
            type: e.type
        })
    }),
    h(["drag", "dragend", "dragenter", "dragleave", "dragover", "dragstart", "drop"], {
        createEventArgs: e => {
            return {
                ...u(t = e),
                dataTransfer: t.dataTransfer ? {
                    dropEffect: t.dataTransfer.dropEffect,
                    effectAllowed: t.dataTransfer.effectAllowed,
                    files: Array.from(t.dataTransfer.files).map((e => e.name)),
                    items: Array.from(t.dataTransfer.items).map((e => ({
                        kind: e.kind,
                        type: e.type
                    }))),
                    types: t.dataTransfer.types
                } : null
            };
            var t
        }
    }),
    h(["focus", "blur", "focusin", "focusout"], {
        createEventArgs: e => ({
            type: e.type
        })
    }),
    h(["keydown", "keyup", "keypress"], {
        createEventArgs: e => {
            return {
                key: (t = e).key,
                code: t.code,
                location: t.location,
                repeat: t.repeat,
                ctrlKey: t.ctrlKey,
                shiftKey: t.shiftKey,
                altKey: t.altKey,
                metaKey: t.metaKey,
                type: t.type
            };
            var t
        }
    }),
    h(["contextmenu", "click", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "mouseleave", "mouseenter", "dblclick"], {
        createEventArgs: e => u(e)
    }),
    h(["error"], {
        createEventArgs: e => {
            return {
                message: (t = e).message,
                filename: t.filename,
                lineno: t.lineno,
                colno: t.colno,
                type: t.type
            };
            var t
        }
    }),
    h(["loadstart", "timeout", "abort", "load", "loadend", "progress"], {
        createEventArgs: e => {
            return {
                lengthComputable: (t = e).lengthComputable,
                loaded: t.loaded,
                total: t.total,
                type: t.type
            };
            var t
        }
    }),
    h(["touchcancel", "touchend", "touchmove", "touchenter", "touchleave", "touchstart"], {
        createEventArgs: e => {
            return {
                detail: (t = e).detail,
                touches: d(t.touches),
                targetTouches: d(t.targetTouches),
                changedTouches: d(t.changedTouches),
                ctrlKey: t.ctrlKey,
                shiftKey: t.shiftKey,
                altKey: t.altKey,
                metaKey: t.metaKey,
                type: t.type
            };
            var t
        }
    }),
    h(["gotpointercapture", "lostpointercapture", "pointercancel", "pointerdown", "pointerenter", "pointerleave", "pointermove", "pointerout", "pointerover", "pointerup"], {
        createEventArgs: e => {
            return {
                ...u(t = e),
                pointerId: t.pointerId,
                width: t.width,
                height: t.height,
                pressure: t.pressure,
                tiltX: t.tiltX,
                tiltY: t.tiltY,
                pointerType: t.pointerType,
                isPrimary: t.isPrimary
            };
            var t
        }
    }),
    h(["wheel", "mousewheel"], {
        createEventArgs: e => {
            return {
                ...u(t = e),
                deltaX: t.deltaX,
                deltaY: t.deltaY,
                deltaZ: t.deltaZ,
                deltaMode: t.deltaMode
            };
            var t
        }
    }),
    h(["cancel", "close", "toggle"], {
        createEventArgs: () => ({})
    });
    const p = ["date", "datetime-local", "month", "time", "week"]
      , f = new Map;
    let g, m, v = 0;
    const y = {
        async add(e, t, n) {
            if (!n)
                throw new Error("initialParameters must be an object, even if empty.");
            const r = "__bl-dynamic-root:" + (++v).toString();
            f.set(r, e);
            const o = await b().invokeMethodAsync("AddRootComponent", t, r)
              , s = new _(o,m[t]);
            return await s.setParameters(n),
            s
        }
    };
    class w {
        invoke(e) {
            return this._callback(e)
        }
        setCallback(t) {
            this._selfJSObjectReference || (this._selfJSObjectReference = e.createJSObjectReference(this)),
            this._callback = t
        }
        getJSObjectReference() {
            return this._selfJSObjectReference
        }
        dispose() {
            this._selfJSObjectReference && e.disposeJSObjectReference(this._selfJSObjectReference)
        }
    }
    class _ {
        constructor(e, t) {
            this._jsEventCallbackWrappers = new Map,
            this._componentId = e;
            for (const e of t)
                "eventcallback" === e.type && this._jsEventCallbackWrappers.set(e.name.toLowerCase(), new w)
        }
        setParameters(e) {
            const t = {}
              , n = Object.entries(e || {})
              , r = n.length;
            for (const [e,r] of n) {
                const n = this._jsEventCallbackWrappers.get(e.toLowerCase());
                n && r ? (n.setCallback(r),
                t[e] = n.getJSObjectReference()) : t[e] = r
            }
            return b().invokeMethodAsync("SetRootComponentParameters", this._componentId, r, t)
        }
        async dispose() {
            if (null !== this._componentId) {
                await b().invokeMethodAsync("RemoveRootComponent", this._componentId),
                this._componentId = null;
                for (const e of this._jsEventCallbackWrappers.values())
                    e.dispose()
            }
        }
    }
    function b() {
        if (!g)
            throw new Error("Dynamic root components have not been enabled in this application.");
        return g
    }
    const S = new Map
      , E = []
      , C = new Map;
    function I(t, n, r, o) {
        var s, i;
        if (S.has(t))
            throw new Error(`Interop methods are already registered for renderer ${t}`);
        S.set(t, n),
        r && o && Object.keys(r).length > 0 && function(t, n, r) {
            if (g)
                throw new Error("Dynamic root components have already been enabled.");
            g = t,
            m = n;
            for (const [t,o] of Object.entries(r)) {
                const r = e.findJSFunction(t, 0);
                for (const e of o)
                    r(e, n[e])
            }
        }(T(t), r, o),
        null === (i = null === (s = C.get(t)) || void 0 === s ? void 0 : s[0]) || void 0 === i || i.call(s),
        function(e) {
            for (const t of E)
                t(e)
        }(t)
    }
    function k(e, t, n) {
        return D(e, t.eventHandlerId, ( () => T(e).invokeMethodAsync("DispatchEventAsync", t, n)))
    }
    function T(e) {
        const t = S.get(e);
        if (!t)
            throw new Error(`No interop methods are registered for renderer ${e}`);
        return t
    }
    let D = (e, t, n) => n();
    const R = M(["abort", "blur", "cancel", "canplay", "canplaythrough", "change", "close", "cuechange", "durationchange", "emptied", "ended", "error", "focus", "load", "loadeddata", "loadedmetadata", "loadend", "loadstart", "mouseenter", "mouseleave", "pointerenter", "pointerleave", "pause", "play", "playing", "progress", "ratechange", "reset", "scroll", "seeked", "seeking", "stalled", "submit", "suspend", "timeupdate", "toggle", "unload", "volumechange", "waiting", "DOMNodeInsertedIntoDocument", "DOMNodeRemovedFromDocument"])
      , x = {
        submit: !0
    }
      , A = M(["click", "dblclick", "mousedown", "mousemove", "mouseup"]);
    class P {
        constructor(e) {
            this.browserRendererId = e,
            this.afterClickCallbacks = [];
            const t = ++P.nextEventDelegatorId;
            this.eventsCollectionKey = `_blazorEvents_${t}`,
            this.eventInfoStore = new U(this.onGlobalEvent.bind(this))
        }
        setListener(e, t, n, r) {
            const o = this.getEventHandlerInfosForElement(e, !0)
              , s = o.getHandler(t);
            if (s)
                this.eventInfoStore.update(s.eventHandlerId, n);
            else {
                const s = {
                    element: e,
                    eventName: t,
                    eventHandlerId: n,
                    renderingComponentId: r
                };
                this.eventInfoStore.add(s),
                o.setHandler(t, s)
            }
        }
        getHandler(e) {
            return this.eventInfoStore.get(e)
        }
        removeListener(e) {
            const t = this.eventInfoStore.remove(e);
            if (t) {
                const e = t.element
                  , n = this.getEventHandlerInfosForElement(e, !1);
                n && n.removeHandler(t.eventName)
            }
        }
        notifyAfterClick(e) {
            this.afterClickCallbacks.push(e),
            this.eventInfoStore.addGlobalListener("click")
        }
        setStopPropagation(e, t, n) {
            this.getEventHandlerInfosForElement(e, !0).stopPropagation(t, n)
        }
        setPreventDefault(e, t, n) {
            this.getEventHandlerInfosForElement(e, !0).preventDefault(t, n)
        }
        onGlobalEvent(e) {
            if (!(e.target instanceof Element))
                return;
            this.dispatchGlobalEventToAllElements(e.type, e);
            const t = (n = e.type,
            i.get(n));
            var n;
            t && t.forEach((t => this.dispatchGlobalEventToAllElements(t, e))),
            "click" === e.type && this.afterClickCallbacks.forEach((t => t(e)))
        }
        dispatchGlobalEventToAllElements(e, t) {
            const n = t.composedPath();
            let r = n.shift()
              , s = null
              , i = !1;
            const a = Object.prototype.hasOwnProperty.call(R, e);
            let l = !1;
            for (; r; ) {
                const u = r
                  , p = this.getEventHandlerInfosForElement(u, !1);
                if (p) {
                    const n = p.getHandler(e);
                    if (n && (h = u,
                    d = t.type,
                    !((h instanceof HTMLButtonElement || h instanceof HTMLInputElement || h instanceof HTMLTextAreaElement || h instanceof HTMLSelectElement) && Object.prototype.hasOwnProperty.call(A, d) && h.disabled))) {
                        if (!i) {
                            const n = c(e);
                            s = (null == n ? void 0 : n.createEventArgs) ? n.createEventArgs(t) : {},
                            i = !0
                        }
                        Object.prototype.hasOwnProperty.call(x, t.type) && t.preventDefault(),
                        k(this.browserRendererId, {
                            eventHandlerId: n.eventHandlerId,
                            eventName: e,
                            eventFieldInfo: o.fromEvent(n.renderingComponentId, t)
                        }, s)
                    }
                    p.stopPropagation(e) && (l = !0),
                    p.preventDefault(e) && t.preventDefault()
                }
                r = a || l ? void 0 : n.shift()
            }
            var h, d
        }
        getEventHandlerInfosForElement(e, t) {
            return Object.prototype.hasOwnProperty.call(e, this.eventsCollectionKey) ? e[this.eventsCollectionKey] : t ? e[this.eventsCollectionKey] = new N : null
        }
    }
    P.nextEventDelegatorId = 0;
    class U {
        constructor(e) {
            this.globalListener = e,
            this.infosByEventHandlerId = {},
            this.countByEventName = {},
            a.push(this.handleEventNameAliasAdded.bind(this))
        }
        add(e) {
            if (this.infosByEventHandlerId[e.eventHandlerId])
                throw new Error(`Event ${e.eventHandlerId} is already tracked`);
            this.infosByEventHandlerId[e.eventHandlerId] = e,
            this.addGlobalListener(e.eventName)
        }
        get(e) {
            return this.infosByEventHandlerId[e]
        }
        addGlobalListener(e) {
            if (e = l(e),
            Object.prototype.hasOwnProperty.call(this.countByEventName, e))
                this.countByEventName[e]++;
            else {
                this.countByEventName[e] = 1;
                const t = Object.prototype.hasOwnProperty.call(R, e);
                document.addEventListener(e, this.globalListener, t)
            }
        }
        update(e, t) {
            if (Object.prototype.hasOwnProperty.call(this.infosByEventHandlerId, t))
                throw new Error(`Event ${t} is already tracked`);
            const n = this.infosByEventHandlerId[e];
            delete this.infosByEventHandlerId[e],
            n.eventHandlerId = t,
            this.infosByEventHandlerId[t] = n
        }
        remove(e) {
            const t = this.infosByEventHandlerId[e];
            if (t) {
                delete this.infosByEventHandlerId[e];
                const n = l(t.eventName);
                0 == --this.countByEventName[n] && (delete this.countByEventName[n],
                document.removeEventListener(n, this.globalListener))
            }
            return t
        }
        handleEventNameAliasAdded(e, t) {
            if (Object.prototype.hasOwnProperty.call(this.countByEventName, e)) {
                const n = this.countByEventName[e];
                delete this.countByEventName[e],
                document.removeEventListener(e, this.globalListener),
                this.addGlobalListener(t),
                this.countByEventName[t] += n - 1
            }
        }
    }
    class N {
        constructor() {
            this.handlers = {},
            this.preventDefaultFlags = null,
            this.stopPropagationFlags = null
        }
        getHandler(e) {
            return Object.prototype.hasOwnProperty.call(this.handlers, e) ? this.handlers[e] : null
        }
        setHandler(e, t) {
            this.handlers[e] = t
        }
        removeHandler(e) {
            delete this.handlers[e]
        }
        preventDefault(e, t) {
            return void 0 !== t && (this.preventDefaultFlags = this.preventDefaultFlags || {},
            this.preventDefaultFlags[e] = t),
            !!this.preventDefaultFlags && this.preventDefaultFlags[e]
        }
        stopPropagation(e, t) {
            return void 0 !== t && (this.stopPropagationFlags = this.stopPropagationFlags || {},
            this.stopPropagationFlags[e] = t),
            !!this.stopPropagationFlags && this.stopPropagationFlags[e]
        }
    }
    function M(e) {
        const t = {};
        return e.forEach((e => {
            t[e] = !0
        }
        )),
        t
    }
    const B = Symbol()
      , L = Symbol()
      , $ = Symbol();
    function O(e, t) {
        if (B in e)
            return e;
        const n = [];
        if (e.childNodes.length > 0) {
            if (!t)
                throw new Error("New logical elements must start empty, or allowExistingContents must be true");
            e.childNodes.forEach((t => {
                const r = O(t, !0);
                r[L] = e,
                n.push(r)
            }
            ))
        }
        return e[B] = n,
        e
    }
    function F(e) {
        const t = K(e);
        for (; t.length; )
            W(e, 0)
    }
    function H(e, t) {
        const n = document.createComment("!");
        return j(n, e, t),
        n
    }
    function j(e, t, n) {
        const r = e;
        let o = e;
        if (e instanceof Comment) {
            const t = K(r);
            if ((null == t ? void 0 : t.length) > 0) {
                const t = Q(r)
                  , n = new Range;
                n.setStartBefore(e),
                n.setEndAfter(t),
                o = n.extractContents()
            }
        }
        const s = z(r);
        if (s) {
            const e = K(s)
              , t = Array.prototype.indexOf.call(e, r);
            e.splice(t, 1),
            delete r[L]
        }
        const i = K(t);
        if (n < i.length) {
            const e = i[n];
            e.parentNode.insertBefore(o, e),
            i.splice(n, 0, r)
        } else
            G(o, t),
            i.push(r);
        r[L] = t,
        B in r || (r[B] = [])
    }
    function W(e, t) {
        const n = K(e).splice(t, 1)[0];
        if (n instanceof Comment) {
            const e = K(n);
            if (e)
                for (; e.length > 0; )
                    W(n, 0)
        }
        const r = n;
        r.parentNode.removeChild(r)
    }
    function z(e) {
        return e[L] || null
    }
    function q(e, t) {
        return K(e)[t]
    }
    function J(e) {
        const t = Y(e);
        return "http://www.w3.org/2000/svg" === t.namespaceURI && "foreignObject" !== t.tagName
    }
    function K(e) {
        return e[B]
    }
    function V(e) {
        const t = K(z(e));
        return t[Array.prototype.indexOf.call(t, e) + 1] || null
    }
    function X(e, t) {
        const n = K(e);
        t.forEach((e => {
            e.moveRangeStart = n[e.fromSiblingIndex],
            e.moveRangeEnd = Q(e.moveRangeStart)
        }
        )),
        t.forEach((t => {
            const r = document.createComment("marker");
            t.moveToBeforeMarker = r;
            const o = n[t.toSiblingIndex + 1];
            o ? o.parentNode.insertBefore(r, o) : G(r, e)
        }
        )),
        t.forEach((e => {
            const t = e.moveToBeforeMarker
              , n = t.parentNode
              , r = e.moveRangeStart
              , o = e.moveRangeEnd;
            let s = r;
            for (; s; ) {
                const e = s.nextSibling;
                if (n.insertBefore(s, t),
                s === o)
                    break;
                s = e
            }
            n.removeChild(t)
        }
        )),
        t.forEach((e => {
            n[e.toSiblingIndex] = e.moveRangeStart
        }
        ))
    }
    function Y(e) {
        if (e instanceof Element || e instanceof DocumentFragment)
            return e;
        if (e instanceof Comment)
            return e.parentNode;
        throw new Error("Not a valid logical element")
    }
    function G(e, t) {
        if (t instanceof Element || t instanceof DocumentFragment)
            t.appendChild(e);
        else {
            if (!(t instanceof Comment))
                throw new Error(`Cannot append node because the parent is not a valid logical element. Parent: ${t}`);
            {
                const n = V(t);
                n ? n.parentNode.insertBefore(e, n) : G(e, z(t))
            }
        }
    }
    function Q(e) {
        if (e instanceof Element || e instanceof DocumentFragment)
            return e;
        const t = V(e);
        if (t)
            return t.previousSibling;
        {
            const t = z(e);
            return t instanceof Element || t instanceof DocumentFragment ? t.lastChild : Q(t)
        }
    }
    function Z(e) {
        return `_bl_${e}`
    }
    const ee = "__internalId";
    e.attachReviver(( (e, t) => t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, ee) && "string" == typeof t[ee] ? function(e) {
        const t = `[${Z(e)}]`;
        return document.querySelector(t)
    }(t[ee]) : t));
    const te = "_blazorDeferredValue";
    function ne(e) {
        return "select-multiple" === e.type
    }
    function re(e, t) {
        e.value = t || ""
    }
    function oe(e, t) {
        e instanceof HTMLSelectElement ? ne(e) ? function(e, t) {
            t || (t = []);
            for (let n = 0; n < e.options.length; n++)
                e.options[n].selected = -1 !== t.indexOf(e.options[n].value)
        }(e, t) : re(e, t) : e.value = t
    }
    function se(e) {
        const t = function(e) {
            for (; e; ) {
                if (e instanceof HTMLSelectElement)
                    return e;
                e = e.parentElement
            }
            return null
        }(e);
        if (!function(e) {
            return !!e && te in e
        }(t))
            return !1;
        if (ne(t))
            e.selected = -1 !== t._blazorDeferredValue.indexOf(e.value);
        else {
            if (t._blazorDeferredValue !== e.value)
                return !1;
            re(t, e.value),
            delete t._blazorDeferredValue
        }
        return !0
    }
    const ie = document.createElement("template")
      , ae = document.createElementNS("http://www.w3.org/2000/svg", "g")
      , ce = new Set
      , le = Symbol()
      , he = Symbol();
    class de {
        constructor(e) {
            this.rootComponentIds = new Set,
            this.childComponentLocations = {},
            this.eventDelegator = new P(e),
            this.eventDelegator.notifyAfterClick((e => {
                ke() && function(e, t) {
                    if (0 !== e.button || function(e) {
                        return e.ctrlKey || e.shiftKey || e.altKey || e.metaKey
                    }(e))
                        return;
                    if (e.defaultPrevented)
                        return;
                    const n = function(e) {
                        const t = e.composedPath && e.composedPath();
                        if (t)
                            for (let e = 0; e < t.length; e++) {
                                const n = t[e];
                                if (n instanceof HTMLAnchorElement || n instanceof SVGAElement)
                                    return n
                            }
                        return null
                    }(e);
                    if (n && function(e) {
                        const t = e.getAttribute("target");
                        return (!t || "_self" === t) && e.hasAttribute("href") && !e.hasAttribute("download")
                    }(n)) {
                        const t = Ie(n.getAttribute("href"));
                        be(t) && (e.preventDefault(),
                        Be(t, !0, !1))
                    }
                }(e)
            }
            ))
        }
        getRootComponentCount() {
            return this.rootComponentIds.size
        }
        attachRootComponentToLogicalElement(e, t, n) {
            if (function(e) {
                return e[le]
            }(t))
                throw new Error(`Root component '${e}' could not be attached because its target element is already associated with a root component`);
            n && (t = H(t, K(t).length)),
            ue(t, !0),
            this.attachComponentToElement(e, t),
            this.rootComponentIds.add(e),
            ce.add(t)
        }
        updateComponent(e, t, n, r) {
            var o;
            const s = this.childComponentLocations[t];
            if (!s)
                throw new Error(`No element is currently associated with component ${t}`);
            ce.delete(s) && (F(s),
            s instanceof Comment && (s.textContent = "!"));
            const i = null === (o = Y(s)) || void 0 === o ? void 0 : o.getRootNode()
              , a = i && i.activeElement;
            this.applyEdits(e, t, s, 0, n, r),
            a instanceof HTMLElement && i && i.activeElement !== a && a.focus()
        }
        disposeComponent(e) {
            if (this.rootComponentIds.delete(e)) {
                const t = this.childComponentLocations[e];
                ue(t, !1),
                !0 === t[he] ? ce.add(t) : F(t)
            }
            delete this.childComponentLocations[e]
        }
        disposeEventHandler(e) {
            this.eventDelegator.removeListener(e)
        }
        attachComponentToElement(e, t) {
            this.childComponentLocations[e] = t
        }
        applyEdits(e, n, r, o, s, i) {
            let a, c = 0, l = o;
            const h = e.arrayBuilderSegmentReader
              , d = e.editReader
              , u = e.frameReader
              , p = h.values(s)
              , f = h.offset(s)
              , g = f + h.count(s);
            for (let s = f; s < g; s++) {
                const h = e.diffReader.editsEntry(p, s)
                  , f = d.editType(h);
                switch (f) {
                case t.prependFrame:
                    {
                        const t = d.newTreeIndex(h)
                          , o = e.referenceFramesEntry(i, t)
                          , s = d.siblingIndex(h);
                        this.insertFrame(e, n, r, l + s, i, o, t);
                        break
                    }
                case t.removeFrame:
                    W(r, l + d.siblingIndex(h));
                    break;
                case t.setAttribute:
                    {
                        const t = d.newTreeIndex(h)
                          , o = e.referenceFramesEntry(i, t)
                          , s = q(r, l + d.siblingIndex(h));
                        if (!(s instanceof Element))
                            throw new Error("Cannot set attribute on non-element child");
                        this.applyAttribute(e, n, s, o);
                        break
                    }
                case t.removeAttribute:
                    {
                        const e = q(r, l + d.siblingIndex(h));
                        if (!(e instanceof Element))
                            throw new Error("Cannot remove attribute from non-element child");
                        {
                            const t = d.removedAttributeName(h);
                            this.setOrRemoveAttributeOrProperty(e, t, null)
                        }
                        break
                    }
                case t.updateText:
                    {
                        const t = d.newTreeIndex(h)
                          , n = e.referenceFramesEntry(i, t)
                          , o = q(r, l + d.siblingIndex(h));
                        if (!(o instanceof Text))
                            throw new Error("Cannot set text content on non-text child");
                        o.textContent = u.textContent(n);
                        break
                    }
                case t.updateMarkup:
                    {
                        const t = d.newTreeIndex(h)
                          , n = e.referenceFramesEntry(i, t)
                          , o = d.siblingIndex(h);
                        W(r, l + o),
                        this.insertMarkup(e, r, l + o, n);
                        break
                    }
                case t.stepIn:
                    r = q(r, l + d.siblingIndex(h)),
                    c++,
                    l = 0;
                    break;
                case t.stepOut:
                    r = z(r),
                    c--,
                    l = 0 === c ? o : 0;
                    break;
                case t.permutationListEntry:
                    a = a || [],
                    a.push({
                        fromSiblingIndex: l + d.siblingIndex(h),
                        toSiblingIndex: l + d.moveToSiblingIndex(h)
                    });
                    break;
                case t.permutationListEnd:
                    X(r, a),
                    a = void 0;
                    break;
                default:
                    throw new Error(`Unknown edit type: ${f}`)
                }
            }
        }
        insertFrame(e, t, r, o, s, i, a) {
            const c = e.frameReader
              , l = c.frameType(i);
            switch (l) {
            case n.element:
                return this.insertElement(e, t, r, o, s, i, a),
                1;
            case n.text:
                return this.insertText(e, r, o, i),
                1;
            case n.attribute:
                throw new Error("Attribute frames should only be present as leading children of element frames.");
            case n.component:
                return this.insertComponent(e, r, o, i),
                1;
            case n.region:
                return this.insertFrameRange(e, t, r, o, s, a + 1, a + c.subtreeLength(i));
            case n.elementReferenceCapture:
                if (r instanceof Element)
                    return h = r,
                    d = c.elementReferenceCaptureId(i),
                    h.setAttribute(Z(d), ""),
                    0;
                throw new Error("Reference capture frames can only be children of element frames.");
            case n.markup:
                return this.insertMarkup(e, r, o, i),
                1;
            case n.namedEvent:
                return 0;
            default:
                throw new Error(`Unknown frame type: ${l}`)
            }
            var h, d
        }
        insertElement(e, t, r, o, s, i, a) {
            const c = e.frameReader
              , l = c.elementName(i)
              , h = "svg" === l || J(r) ? document.createElementNS("http://www.w3.org/2000/svg", l) : document.createElement(l)
              , d = O(h);
            let u = !1;
            const p = a + c.subtreeLength(i);
            for (let i = a + 1; i < p; i++) {
                const a = e.referenceFramesEntry(s, i);
                if (c.frameType(a) !== n.attribute) {
                    j(h, r, o),
                    u = !0,
                    this.insertFrameRange(e, t, d, 0, s, i, p);
                    break
                }
                this.applyAttribute(e, t, h, a)
            }
            var f;
            u || j(h, r, o),
            (f = h)instanceof HTMLOptionElement ? se(f) : te in f && oe(f, f[te])
        }
        insertComponent(e, t, n, r) {
            const o = H(t, n)
              , s = e.frameReader.componentId(r);
            this.attachComponentToElement(s, o)
        }
        insertText(e, t, n, r) {
            const o = e.frameReader.textContent(r);
            j(document.createTextNode(o), t, n)
        }
        insertMarkup(e, t, n, r) {
            const o = H(t, n)
              , s = (i = e.frameReader.markupContent(r),
            J(t) ? (ae.innerHTML = i || " ",
            ae) : (ie.innerHTML = i || " ",
            ie.content.querySelectorAll("script").forEach((e => {
                const t = document.createElement("script");
                t.textContent = e.textContent,
                e.getAttributeNames().forEach((n => {
                    t.setAttribute(n, e.getAttribute(n))
                }
                )),
                e.parentNode.replaceChild(t, e)
            }
            )),
            ie.content));
            var i;
            let a = 0;
            for (; s.firstChild; )
                j(s.firstChild, o, a++)
        }
        applyAttribute(e, t, n, r) {
            const o = e.frameReader
              , s = o.attributeName(r)
              , i = o.attributeEventHandlerId(r);
            if (i) {
                const e = fe(s);
                return void this.eventDelegator.setListener(n, e, i, t)
            }
            const a = o.attributeValue(r);
            this.setOrRemoveAttributeOrProperty(n, s, a)
        }
        insertFrameRange(e, t, n, r, o, s, i) {
            const a = r;
            for (let a = s; a < i; a++) {
                const s = e.referenceFramesEntry(o, a);
                r += this.insertFrame(e, t, n, r, o, s, a),
                a += pe(e, s)
            }
            return r - a
        }
        setOrRemoveAttributeOrProperty(e, t, n) {
            (function(e, t, n) {
                switch (t) {
                case "value":
                    return function(e, t) {
                        switch (t && "INPUT" === e.tagName && (t = function(e, t) {
                            switch (t.getAttribute("type")) {
                            case "time":
                                return 8 !== e.length || !e.endsWith("00") && t.hasAttribute("step") ? e : e.substring(0, 5);
                            case "datetime-local":
                                return 19 !== e.length || !e.endsWith("00") && t.hasAttribute("step") ? e : e.substring(0, 16);
                            default:
                                return e
                            }
                        }(t, e)),
                        e.tagName) {
                        case "INPUT":
                        case "SELECT":
                        case "TEXTAREA":
                            return t && e instanceof HTMLSelectElement && ne(e) && (t = JSON.parse(t)),
                            oe(e, t),
                            e[te] = t,
                            !0;
                        case "OPTION":
                            return t || "" === t ? e.setAttribute("value", t) : e.removeAttribute("value"),
                            se(e),
                            !0;
                        default:
                            return !1
                        }
                    }(e, n);
                case "checked":
                    return function(e, t) {
                        return "INPUT" === e.tagName && (e.checked = null !== t,
                        !0)
                    }(e, n);
                default:
                    return !1
                }
            }
            )(e, t, n) || (t.startsWith("__internal_") ? this.applyInternalAttribute(e, t.substring(11), n) : null !== n ? e.setAttribute(t, n) : e.removeAttribute(t))
        }
        applyInternalAttribute(e, t, n) {
            if (t.startsWith("stopPropagation_")) {
                const r = fe(t.substring(16));
                this.eventDelegator.setStopPropagation(e, r, null !== n)
            } else {
                if (!t.startsWith("preventDefault_"))
                    throw new Error(`Unsupported internal attribute '${t}'`);
                {
                    const r = fe(t.substring(15));
                    this.eventDelegator.setPreventDefault(e, r, null !== n)
                }
            }
        }
    }
    function ue(e, t) {
        e[le] = t
    }
    function pe(e, t) {
        const r = e.frameReader;
        switch (r.frameType(t)) {
        case n.component:
        case n.element:
        case n.region:
            return r.subtreeLength(t) - 1;
        default:
            return 0
        }
    }
    function fe(e) {
        if (e.startsWith("on"))
            return e.substring(2);
        throw new Error(`Attribute should be an event name, but doesn't start with 'on'. Value: '${e}'`)
    }
    const ge = {};
    let me, ve, ye, we, _e = !1;
    function be(e) {
        const t = (n = document.baseURI).substring(0, n.lastIndexOf("/"));
        var n;
        const r = e.charAt(t.length);
        return e.startsWith(t) && ("" === r || "/" === r || "?" === r || "#" === r)
    }
    function Se(e) {
        var t;
        null === (t = document.getElementById(e)) || void 0 === t || t.scrollIntoView()
    }
    function Ee() {
        return void 0 !== ve
    }
    function Ce(e, t) {
        if (!ve)
            throw new Error("No enhanced programmatic navigation handler has been attached");
        ve(e, t)
    }
    function Ie(e) {
        return we = we || document.createElement("a"),
        we.href = e,
        we.href
    }
    function ke() {
        return void 0 !== me
    }
    function Te() {
        return me
    }
    let De = !1
      , Re = 0
      , xe = 0;
    const Ae = new Map;
    let Pe = async function(e) {
        var t, n, r;
        Oe();
        const o = We();
        if (null == o ? void 0 : o.hasLocationChangingEventListeners) {
            const s = null !== (n = null === (t = e.state) || void 0 === t ? void 0 : t._index) && void 0 !== n ? n : 0
              , i = null === (r = e.state) || void 0 === r ? void 0 : r.userState
              , a = s - Re
              , c = location.href;
            if (await $e(-a),
            !await Fe(c, i, !1, o))
                return;
            await $e(a)
        }
        await He(!1)
    }
      , Ue = null;
    const Ne = {
        listenForNavigationEvents: function(e, t, n) {
            var r, o;
            Ae.set(e, {
                rendererId: e,
                hasLocationChangingEventListeners: !1,
                locationChanged: t,
                locationChanging: n
            }),
            De || (De = !0,
            window.addEventListener("popstate", je),
            Re = null !== (o = null === (r = history.state) || void 0 === r ? void 0 : r._index) && void 0 !== o ? o : 0,
            ye = (e, t) => {
                He(t, e)
            }
            )
        },
        enableNavigationInterception: function(e) {
            if (void 0 !== me && me !== e)
                throw new Error("Only one interactive runtime may enable navigation interception at a time.");
            me = e
        },
        setHasLocationChangingListeners: function(e, t) {
            const n = Ae.get(e);
            if (!n)
                throw new Error(`Renderer with ID '${e}' is not listening for navigation events`);
            n.hasLocationChangingEventListeners = t
        },
        endLocationChanging: function(e, t) {
            Ue && e === xe && (Ue(t),
            Ue = null)
        },
        navigateTo: function(e, t) {
            Me(e, t, !0)
        },
        refresh: function(e) {
            !e && Ee() ? Ce(location.href, !0) : location.reload()
        },
        getBaseURI: () => document.baseURI,
        getLocationHref: () => location.href,
        scrollToElement: Se
    };
    function Me(e, t, n=!1) {
        const r = Ie(e)
          , o = ze();
        if (t.forceLoad || !be(r) || "serverside-fullpageload" === o)
            !function(e, t) {
                if (location.href === e) {
                    const t = e + "?";
                    history.replaceState(null, "", t),
                    location.replace(e)
                } else
                    t ? location.replace(e) : location.href = e
            }(e, t.replaceHistoryEntry);
        else if ("clientside-router" === o)
            Be(r, !1, t.replaceHistoryEntry, t.historyEntryState, n);
        else {
            if ("serverside-enhanced" !== o)
                throw new Error(`Unsupported page load mechanism: ${o}`);
            Ce(r, t.replaceHistoryEntry)
        }
    }
    async function Be(e, t, n, r=void 0, o=!1) {
        if (Oe(),
        function(e) {
            const t = new URL(e);
            return "" !== t.hash && location.origin === t.origin && location.pathname === t.pathname && location.search === t.search
        }(e))
            return Le(e, n, r),
            void function(e) {
                const t = e.indexOf("#");
                t !== e.length - 1 && Se(e.substring(t + 1))
            }(e);
        const s = We();
        (o || !(null == s ? void 0 : s.hasLocationChangingEventListeners) || await Fe(e, r, t, s)) && (_e = !0,
        Le(e, n, r),
        await He(t))
    }
    function Le(e, t, n=void 0) {
        t ? history.replaceState({
            userState: n,
            _index: Re
        }, "", e) : (Re++,
        history.pushState({
            userState: n,
            _index: Re
        }, "", e))
    }
    function $e(e) {
        return new Promise((t => {
            const n = Pe;
            Pe = () => {
                Pe = n,
                t()
            }
            ,
            history.go(e)
        }
        ))
    }
    function Oe() {
        Ue && (Ue(!1),
        Ue = null)
    }
    function Fe(e, t, n, r) {
        return new Promise((o => {
            Oe(),
            xe++,
            Ue = o,
            r.locationChanging(xe, e, t, n)
        }
        ))
    }
    async function He(e, t) {
        const n = null != t ? t : location.href;
        await Promise.all(Array.from(Ae, (async ([t,r]) => {
            var o, s;
            s = t,
            S.has(s) && await r.locationChanged(n, null === (o = history.state) || void 0 === o ? void 0 : o.userState, e)
        }
        )))
    }
    async function je(e) {
        var t, n;
        Pe && "serverside-enhanced" !== ze() && await Pe(e),
        Re = null !== (n = null === (t = history.state) || void 0 === t ? void 0 : t._index) && void 0 !== n ? n : 0
    }
    function We() {
        const e = Te();
        if (void 0 !== e)
            return Ae.get(e)
    }
    function ze() {
        return ke() ? "clientside-router" : Ee() ? "serverside-enhanced" : window.Blazor._internal.isBlazorWeb ? "serverside-fullpageload" : "clientside-router"
    }
    const qe = {
        focus: function(e, t) {
            if (e instanceof HTMLElement)
                e.focus({
                    preventScroll: t
                });
            else {
                if (!(e instanceof SVGElement))
                    throw new Error("Unable to focus an invalid element.");
                if (!e.hasAttribute("tabindex"))
                    throw new Error("Unable to focus an SVG element that does not have a tabindex.");
                e.focus({
                    preventScroll: t
                })
            }
        },
        focusBySelector: function(e, t) {
            const n = document.querySelector(e);
            n && (n.hasAttribute("tabindex") || (n.tabIndex = -1),
            n.focus({
                preventScroll: !0
            }))
        }
    }
      , Je = {
        init: function(e, t, n, r=50) {
            const o = Ve(t);
            (o || document.documentElement).style.overflowAnchor = "none";
            const s = document.createRange();
            u(n.parentElement) && (t.style.display = "table-row",
            n.style.display = "table-row");
            const i = new IntersectionObserver((function(r) {
                r.forEach((r => {
                    var o;
                    if (!r.isIntersecting)
                        return;
                    s.setStartAfter(t),
                    s.setEndBefore(n);
                    const i = s.getBoundingClientRect().height
                      , a = null === (o = r.rootBounds) || void 0 === o ? void 0 : o.height;
                    r.target === t ? e.invokeMethodAsync("OnSpacerBeforeVisible", r.intersectionRect.top - r.boundingClientRect.top, i, a) : r.target === n && n.offsetHeight > 0 && e.invokeMethodAsync("OnSpacerAfterVisible", r.boundingClientRect.bottom - r.intersectionRect.bottom, i, a)
                }
                ))
            }
            ),{
                root: o,
                rootMargin: `${r}px`
            });
            i.observe(t),
            i.observe(n);
            const a = d(t)
              , c = d(n)
              , {observersByDotNetObjectId: l, id: h} = Xe(e);
            function d(e) {
                const t = {
                    attributes: !0
                }
                  , n = new MutationObserver(( (n, r) => {
                    u(e.parentElement) && (r.disconnect(),
                    e.style.display = "table-row",
                    r.observe(e, t)),
                    i.unobserve(e),
                    i.observe(e)
                }
                ));
                return n.observe(e, t),
                n
            }
            function u(e) {
                return null !== e && (e instanceof HTMLTableElement && "" === e.style.display || "table" === e.style.display || e instanceof HTMLTableSectionElement && "" === e.style.display || "table-row-group" === e.style.display)
            }
            l[h] = {
                intersectionObserver: i,
                mutationObserverBefore: a,
                mutationObserverAfter: c
            }
        },
        dispose: function(e) {
            const {observersByDotNetObjectId: t, id: n} = Xe(e)
              , r = t[n];
            r && (r.intersectionObserver.disconnect(),
            r.mutationObserverBefore.disconnect(),
            r.mutationObserverAfter.disconnect(),
            e.dispose(),
            delete t[n])
        }
    }
      , Ke = Symbol();
    function Ve(e) {
        return e && e !== document.body && e !== document.documentElement ? "visible" !== getComputedStyle(e).overflowY ? e : Ve(e.parentElement) : null
    }
    function Xe(e) {
        var t;
        const n = e._callDispatcher
          , r = e._id;
        return null !== (t = n[Ke]) && void 0 !== t || (n[Ke] = {}),
        {
            observersByDotNetObjectId: n[Ke],
            id: r
        }
    }
    const Ye = {
        getAndRemoveExistingTitle: function() {
            var e;
            const t = document.head ? document.head.getElementsByTagName("title") : [];
            if (0 === t.length)
                return null;
            let n = null;
            for (let r = t.length - 1; r >= 0; r--) {
                const o = t[r]
                  , s = o.previousSibling;
                s instanceof Comment && null !== z(s) || (null === n && (n = o.textContent),
                null === (e = o.parentNode) || void 0 === e || e.removeChild(o))
            }
            return n
        }
    }
      , Ge = {
        init: function(e, t) {
            t._blazorInputFileNextFileId = 0,
            t.addEventListener("click", (function() {
                t.value = ""
            }
            )),
            t.addEventListener("change", (function() {
                t._blazorFilesById = {};
                const n = Array.prototype.map.call(t.files, (function(e) {
                    const n = {
                        id: ++t._blazorInputFileNextFileId,
                        lastModified: new Date(e.lastModified).toISOString(),
                        name: e.name,
                        size: e.size,
                        contentType: e.type,
                        readPromise: void 0,
                        arrayBuffer: void 0,
                        blob: e
                    };
                    return t._blazorFilesById[n.id] = n,
                    n
                }
                ));
                e.invokeMethodAsync("NotifyChange", n)
            }
            ))
        },
        toImageFile: async function(e, t, n, r, o) {
            const s = Qe(e, t)
              , i = await new Promise((function(e) {
                const t = new Image;
                t.onload = function() {
                    URL.revokeObjectURL(t.src),
                    e(t)
                }
                ,
                t.onerror = function() {
                    t.onerror = null,
                    URL.revokeObjectURL(t.src)
                }
                ,
                t.src = URL.createObjectURL(s.blob)
            }
            ))
              , a = await new Promise((function(e) {
                var t;
                const s = Math.min(1, r / i.width)
                  , a = Math.min(1, o / i.height)
                  , c = Math.min(s, a)
                  , l = document.createElement("canvas");
                l.width = Math.round(i.width * c),
                l.height = Math.round(i.height * c),
                null === (t = l.getContext("2d")) || void 0 === t || t.drawImage(i, 0, 0, l.width, l.height),
                l.toBlob(e, n)
            }
            ))
              , c = {
                id: ++e._blazorInputFileNextFileId,
                lastModified: s.lastModified,
                name: s.name,
                size: (null == a ? void 0 : a.size) || 0,
                contentType: n,
                blob: a || s.blob
            };
            return e._blazorFilesById[c.id] = c,
            c
        },
        readFileData: async function(e, t) {
            return Qe(e, t).blob
        }
    };
    function Qe(e, t) {
        const n = e._blazorFilesById[t];
        if (!n)
            throw new Error(`There is no file with ID ${t}. The file list may have changed. See https://aka.ms/aspnet/blazor-input-file-multiple-selections.`);
        return n
    }
    const Ze = new Set
      , et = {
        enableNavigationPrompt: function(e) {
            0 === Ze.size && window.addEventListener("beforeunload", tt),
            Ze.add(e)
        },
        disableNavigationPrompt: function(e) {
            Ze.delete(e),
            0 === Ze.size && window.removeEventListener("beforeunload", tt)
        }
    };
    function tt(e) {
        e.preventDefault(),
        e.returnValue = !0
    }
    async function nt(e, t, n) {
        return e instanceof Blob ? await async function(e, t, n) {
            const r = e.slice(t, t + n)
              , o = await r.arrayBuffer();
            return new Uint8Array(o)
        }(e, t, n) : function(e, t, n) {
            return new Uint8Array(e.buffer,e.byteOffset + t,n)
        }(e, t, n)
    }
    new Map;
    const rt = {
        navigateTo: function(e, t, n=!1) {
            Me(e, t instanceof Object ? t : {
                forceLoad: t,
                replaceHistoryEntry: n
            })
        },
        registerCustomEventType: function(e, t) {
            if (!t)
                throw new Error("The options parameter is required.");
            if (s.has(e))
                throw new Error(`The event '${e}' is already registered.`);
            if (t.browserEventName) {
                const n = i.get(t.browserEventName);
                n ? n.push(e) : i.set(t.browserEventName, [e]),
                a.forEach((n => n(e, t.browserEventName)))
            }
            s.set(e, t)
        },
        rootComponents: y,
        runtime: {},
        _internal: {
            navigationManager: Ne,
            domWrapper: qe,
            Virtualize: Je,
            PageTitle: Ye,
            InputFile: Ge,
            NavigationLock: et,
            getJSDataStreamChunk: nt,
            attachWebRendererInterop: I
        }
    };
    var ot;
    function st(e) {
        const t = {
            ...it,
            ...e
        };
        return e && e.reconnectionOptions && (t.reconnectionOptions = {
            ...it.reconnectionOptions,
            ...e.reconnectionOptions
        }),
        t
    }
    window.Blazor = rt,
    function(e) {
        e[e.Trace = 0] = "Trace",
        e[e.Debug = 1] = "Debug",
        e[e.Information = 2] = "Information",
        e[e.Warning = 3] = "Warning",
        e[e.Error = 4] = "Error",
        e[e.Critical = 5] = "Critical",
        e[e.None = 6] = "None"
    }(ot || (ot = {}));
    const it = {
        configureSignalR: e => {}
        ,
        logLevel: ot.Warning,
        initializers: void 0,
        circuitHandlers: [],
        reconnectionOptions: {
            maxRetries: 8,
            retryIntervalMilliseconds: 2e4,
            dialogId: "components-reconnect-modal"
        }
    };
    class at {
        log(e, t) {}
    }
    at.instance = new at;
    class ct {
        constructor(e) {
            this.minLevel = e
        }
        log(e, t) {
            if (e >= this.minLevel) {
                const n = `[${(new Date).toISOString()}] ${ot[e]}: ${t}`;
                switch (e) {
                case ot.Critical:
                case ot.Error:
                    console.error(n);
                    break;
                case ot.Warning:
                    console.warn(n);
                    break;
                case ot.Information:
                    console.info(n);
                    break;
                default:
                    console.log(n)
                }
            }
        }
    }
    const lt = /^\s*Blazor-Server-Component-State:(?<state>[a-zA-Z0-9+/=]+)$/;
    function ht(e, t, n="state") {
        var r;
        if (e.nodeType === Node.COMMENT_NODE) {
            const o = e.textContent || ""
              , s = t.exec(o)
              , i = s && s.groups && s.groups[n];
            return i && (null === (r = e.parentNode) || void 0 === r || r.removeChild(e)),
            i
        }
        if (!e.hasChildNodes())
            return;
        const o = e.childNodes;
        for (let e = 0; e < o.length; e++) {
            const r = ht(o[e], t, n);
            if (r)
                return r
        }
    }
    function dt(e, t) {
        const n = []
          , r = new yt(e.childNodes);
        for (; r.next() && r.currentElement; ) {
            const e = pt(r, t);
            if (e)
                n.push(e);
            else if (r.currentElement.hasChildNodes()) {
                const e = dt(r.currentElement, t);
                for (let t = 0; t < e.length; t++) {
                    const r = e[t];
                    n.push(r)
                }
            }
        }
        return n
    }
    const ut = new RegExp(/^\s*Blazor:[^{]*(?<descriptor>.*)$/);
    function pt(e, t) {
        const n = e.currentElement;
        var r, o, s;
        if (n && n.nodeType === Node.COMMENT_NODE && n.textContent) {
            const i = ut.exec(n.textContent)
              , a = i && i.groups && i.groups.descriptor;
            if (!a)
                return;
            !function(e) {
                if (e.parentNode instanceof Document)
                    throw new Error("Root components cannot be marked as interactive. The <html> element must be rendered statically so that scripts are not evaluated multiple times.")
            }(n);
            try {
                const i = function(e) {
                    const t = JSON.parse(e)
                      , {type: n} = t;
                    if ("server" !== n && "webassembly" !== n && "auto" !== n)
                        throw new Error(`Invalid component type '${n}'.`);
                    return t
                }(a)
                  , c = function(e, t, n) {
                    const {prerenderId: r} = e;
                    if (r) {
                        for (; n.next() && n.currentElement; ) {
                            const e = n.currentElement;
                            if (e.nodeType !== Node.COMMENT_NODE)
                                continue;
                            if (!e.textContent)
                                continue;
                            const t = ut.exec(e.textContent)
                              , o = t && t[1];
                            if (o)
                                return vt(o, r),
                                e
                        }
                        throw new Error(`Could not find an end component comment for '${t}'.`)
                    }
                }(i, n, e);
                if (t !== i.type)
                    return;
                switch (i.type) {
                case "webassembly":
                    return o = n,
                    s = c,
                    mt(r = i),
                    {
                        ...r,
                        uniqueId: ft++,
                        start: o,
                        end: s
                    };
                case "server":
                    return function(e, t, n) {
                        return gt(e),
                        {
                            ...e,
                            uniqueId: ft++,
                            start: t,
                            end: n
                        }
                    }(i, n, c);
                case "auto":
                    return function(e, t, n) {
                        return gt(e),
                        mt(e),
                        {
                            ...e,
                            uniqueId: ft++,
                            start: t,
                            end: n
                        }
                    }(i, n, c)
                }
            } catch (e) {
                throw new Error(`Found malformed component comment at ${n.textContent}`)
            }
        }
    }
    let ft = 0;
    function gt(e) {
        const {descriptor: t, sequence: n} = e;
        if (!t)
            throw new Error("descriptor must be defined when using a descriptor.");
        if (void 0 === n)
            throw new Error("sequence must be defined when using a descriptor.");
        if (!Number.isInteger(n))
            throw new Error(`Error parsing the sequence '${n}' for component '${JSON.stringify(e)}'`)
    }
    function mt(e) {
        const {assembly: t, typeName: n} = e;
        if (!t)
            throw new Error("assembly must be defined when using a descriptor.");
        if (!n)
            throw new Error("typeName must be defined when using a descriptor.");
        e.parameterDefinitions = e.parameterDefinitions && atob(e.parameterDefinitions),
        e.parameterValues = e.parameterValues && atob(e.parameterValues)
    }
    function vt(e, t) {
        const n = JSON.parse(e);
        if (1 !== Object.keys(n).length)
            throw new Error(`Invalid end of component comment: '${e}'`);
        const r = n.prerenderId;
        if (!r)
            throw new Error(`End of component comment must have a value for the prerendered property: '${e}'`);
        if (r !== t)
            throw new Error(`End of component comment prerendered property must match the start comment prerender id: '${t}', '${r}'`)
    }
    class yt {
        constructor(e) {
            this.childNodes = e,
            this.currentIndex = -1,
            this.length = e.length
        }
        next() {
            return this.currentIndex++,
            this.currentIndex < this.length ? (this.currentElement = this.childNodes[this.currentIndex],
            !0) : (this.currentElement = void 0,
            !1)
        }
    }
    class wt {
        static write(e) {
            return `${e}${wt.RecordSeparator}`
        }
        static parse(e) {
            if (e[e.length - 1] !== wt.RecordSeparator)
                throw new Error("Message is incomplete.");
            const t = e.split(wt.RecordSeparator);
            return t.pop(),
            t
        }
    }
    var _t;
    wt.RecordSeparatorCode = 30,
    wt.RecordSeparator = String.fromCharCode(wt.RecordSeparatorCode),
    function(e) {
        e[e.Trace = 0] = "Trace",
        e[e.Debug = 1] = "Debug",
        e[e.Information = 2] = "Information",
        e[e.Warning = 3] = "Warning",
        e[e.Error = 4] = "Error",
        e[e.Critical = 5] = "Critical",
        e[e.None = 6] = "None"
    }(_t || (_t = {}));
    class bt {
        constructor() {}
        log(e, t) {}
    }
    bt.instance = new bt;
    const St = "0.0.0-DEV_BUILD";
    class Et {
        static isRequired(e, t) {
            if (null == e)
                throw new Error(`The '${t}' argument is required.`)
        }
        static isNotEmpty(e, t) {
            if (!e || e.match(/^\s*$/))
                throw new Error(`The '${t}' argument should not be empty.`)
        }
        static isIn(e, t, n) {
            if (!(e in t))
                throw new Error(`Unknown ${n} value: ${e}.`)
        }
    }
    class Ct {
        static get isBrowser() {
            return !Ct.isNode && "object" == typeof window && "object" == typeof window.document
        }
        static get isWebWorker() {
            return !Ct.isNode && "object" == typeof self && "importScripts"in self
        }
        static get isReactNative() {
            return !Ct.isNode && "object" == typeof window && void 0 === window.document
        }
        static get isNode() {
            return "undefined" != typeof process && process.release && "node" === process.release.name
        }
    }
    function It(e, t) {
        let n = "";
        return kt(e) ? (n = `Binary data of length ${e.byteLength}`,
        t && (n += `. Content: '${function(e) {
            const t = new Uint8Array(e);
            letn = "";
            return t.forEach((e => {
                n += `0x${e < 16 ? "0" : ""}${e.toString(16)} `
            }
            )),
            n.substr(0, n.length - 1)
        }(e)}'`)) : "string" == typeof e && (n = `String data of length ${e.length}`,
        t && (n += `. Content: '${e}'`)),
        n
    }
    function kt(e) {
        return e && "undefined" != typeof ArrayBuffer && (e instanceof ArrayBuffer || e.constructor && "ArrayBuffer" === e.constructor.name)
    }
    async function Tt(e, t, n, r, o, s) {
        const i = {}
          , [a,c] = xt();
        i[a] = c,
        e.log(_t.Trace, `(${t} transport) sending data. ${It(o, s.logMessageContent)}.`);
        const l = kt(o) ? "arraybuffer" : "text"
          , h = await n.post(r, {
            content: o,
            headers: {
                ...i,
                ...s.headers
            },
            responseType: l,
            timeout: s.timeout,
            withCredentials: s.withCredentials
        });
        e.log(_t.Trace, `(${t} transport) request complete. Response status: ${h.statusCode}.`)
    }
    class Dt {
        constructor(e, t) {
            this._subject = e,
            this._observer = t
        }
        dispose() {
            const e = this._subject.observers.indexOf(this._observer);
            e > -1 && this._subject.observers.splice(e, 1),
            0 === this._subject.observers.length && this._subject.cancelCallback && this._subject.cancelCallback().catch((e => {}
            ))
        }
    }
    class Rt {
        constructor(e) {
            this._minLevel = e,
            this.out = console
        }
        log(e, t) {
            if (e >= this._minLevel) {
                const n = `[${(new Date).toISOString()}] ${_t[e]}: ${t}`;
                switch (e) {
                case _t.Critical:
                case _t.Error:
                    this.out.error(n);
                    break;
                case _t.Warning:
                    this.out.warn(n);
                    break;
                case _t.Information:
                    this.out.info(n);
                    break;
                default:
                    this.out.log(n)
                }
            }
        }
    }
    function xt() {
        let e = "X-SignalR-User-Agent";
        return Ct.isNode && (e = "User-Agent"),
        [e, At(St, Pt(), Ct.isNode ? "NodeJS" : "Browser", Ut())]
    }
    function At(e, t, n, r) {
        let o = "Microsoft SignalR/";
        const s = e.split(".");
        return o += `${s[0]}.${s[1]}`,
        o += ` (${e}; `,
        o += t && "" !== t ? `${t}; ` : "Unknown OS; ",
        o += `${n}`,
        o += r ? `; ${r}` : "; Unknown Runtime Version",
        o += ")",
        o
    }
    function Pt() {
        if (!Ct.isNode)
            return "";
        switch (process.platform) {
        case "win32":
            return "Windows NT";
        case "darwin":
            return "macOS";
        case "linux":
            return "Linux";
        default:
            return process.platform
        }
    }
    function Ut() {
        if (Ct.isNode)
            return process.versions.node
    }
    function Nt(e) {
        return e.stack ? e.stack : e.message ? e.message : `${e}`
    }
    class Mt {
        writeHandshakeRequest(e) {
            return wt.write(JSON.stringify(e))
        }
        parseHandshakeResponse(e) {
            let t, n;
            if (kt(e)) {
                const r = new Uint8Array(e)
                  , o = r.indexOf(wt.RecordSeparatorCode);
                if (-1 === o)
                    throw new Error("Message is incomplete.");
                const s = o + 1;
                t = String.fromCharCode.apply(null, Array.prototype.slice.call(r.slice(0, s))),
                n = r.byteLength > s ? r.slice(s).buffer : null
            } else {
                const r = e
                  , o = r.indexOf(wt.RecordSeparator);
                if (-1 === o)
                    throw new Error("Message is incomplete.");
                const s = o + 1;
                t = r.substring(0, s),
                n = r.length > s ? r.substring(s) : null
            }
            const r = wt.parse(t)
              , o = JSON.parse(r[0]);
            if (o.type)
                throw new Error("Expected a handshake response from the server.");
            return [n, o]
        }
    }
    class Bt extends Error {
        constructor(e, t) {
            const n = new.target.prototype;
            super(`${e}: Status code '${t}'`),
            this.statusCode = t,
            this.__proto__ = n
        }
    }
    class Lt extends Error {
        constructor(e="A timeout occurred.") {
            const t = new.target.prototype;
            super(e),
            this.__proto__ = t
        }
    }
    class $t extends Error {
        constructor(e="An abort occurred.") {
            const t = new.target.prototype;
            super(e),
            this.__proto__ = t
        }
    }
    class Ot extends Error {
        constructor(e, t) {
            const n = new.target.prototype;
            super(e),
            this.transport = t,
            this.errorType = "UnsupportedTransportError",
            this.__proto__ = n
        }
    }
    class Ft extends Error {
        constructor(e, t) {
            const n = new.target.prototype;
            super(e),
            this.transport = t,
            this.errorType = "DisabledTransportError",
            this.__proto__ = n
        }
    }
    class Ht extends Error {
        constructor(e, t) {
            const n = new.target.prototype;
            super(e),
            this.transport = t,
            this.errorType = "FailedToStartTransportError",
            this.__proto__ = n
        }
    }
    class jt extends Error {
        constructor(e) {
            const t = new.target.prototype;
            super(e),
            this.errorType = "FailedToNegotiateWithServerError",
            this.__proto__ = t
        }
    }
    class Wt extends Error {
        constructor(e, t) {
            const n = new.target.prototype;
            super(e),
            this.innerErrors = t,
            this.__proto__ = n
        }
    }
    var zt, qt;
    !function(e) {
        e[e.Invocation = 1] = "Invocation",
        e[e.StreamItem = 2] = "StreamItem",
        e[e.Completion = 3] = "Completion",
        e[e.StreamInvocation = 4] = "StreamInvocation",
        e[e.CancelInvocation = 5] = "CancelInvocation",
        e[e.Ping = 6] = "Ping",
        e[e.Close = 7] = "Close",
        e[e.Ack = 8] = "Ack",
        e[e.Sequence = 9] = "Sequence"
    }(zt || (zt = {}));
    class Jt {
        constructor() {
            this.observers = []
        }
        next(e) {
            for (const t of this.observers)
                t.next(e)
        }
        error(e) {
            for (const t of this.observers)
                t.error && t.error(e)
        }
        complete() {
            for (const e of this.observers)
                e.complete && e.complete()
        }
        subscribe(e) {
            return this.observers.push(e),
            new Dt(this,e)
        }
    }
    class Kt {
        constructor(e, t, n) {
            this._bufferSize = 1e5,
            this._messages = [],
            this._totalMessageCount = 0,
            this._waitForSequenceMessage = !1,
            this._nextReceivingSequenceId = 1,
            this._latestReceivedSequenceId = 0,
            this._bufferedByteCount = 0,
            this._reconnectInProgress = !1,
            this._protocol = e,
            this._connection = t,
            this._bufferSize = n
        }
        async _send(e) {
            const t = this._protocol.writeMessage(e);
            let n = Promise.resolve();
            if (this._isInvocationMessage(e)) {
                this._totalMessageCount++;
                let e = () => {}
                  , r = () => {}
                ;
                kt(t) ? this._bufferedByteCount += t.byteLength : this._bufferedByteCount += t.length,
                this._bufferedByteCount >= this._bufferSize && (n = new Promise(( (t, n) => {
                    e = t,
                    r = n
                }
                ))),
                this._messages.push(new Vt(t,this._totalMessageCount,e,r))
            }
            try {
                this._reconnectInProgress || await this._connection.send(t)
            } catch {
                this._disconnected()
            }
            await n
        }
        _ack(e) {
            let t = -1;
            for (let n = 0; n < this._messages.length; n++) {
                const r = this._messages[n];
                if (r._id <= e.sequenceId)
                    t = n,
                    kt(r._message) ? this._bufferedByteCount -= r._message.byteLength : this._bufferedByteCount -= r._message.length,
                    r._resolver();
                else {
                    if (!(this._bufferedByteCount < this._bufferSize))
                        break;
                    r._resolver()
                }
            }
            -1 !== t && (this._messages = this._messages.slice(t + 1))
        }
        _shouldProcessMessage(e) {
            if (this._waitForSequenceMessage)
                return e.type === zt.Sequence && (this._waitForSequenceMessage = !1,
                !0);
            if (!this._isInvocationMessage(e))
                return !0;
            const t = this._nextReceivingSequenceId;
            return this._nextReceivingSequenceId++,
            t <= this._latestReceivedSequenceId ? (t === this._latestReceivedSequenceId && this._ackTimer(),
            !1) : (this._latestReceivedSequenceId = t,
            this._ackTimer(),
            !0)
        }
        _resetSequence(e) {
            e.sequenceId > this._nextReceivingSequenceId ? this._connection.stop(new Error("Sequence ID greater than amount of messages we've received.")) : this._nextReceivingSequenceId = e.sequenceId
        }
        _disconnected() {
            this._reconnectInProgress = !0,
            this._waitForSequenceMessage = !0
        }
        async _resend() {
            const e = 0 !== this._messages.length ? this._messages[0]._id : this._totalMessageCount + 1;
            await this._connection.send(this._protocol.writeMessage({
                type: zt.Sequence,
                sequenceId: e
            }));
            const t = this._messages;
            for (const e of t)
                await this._connection.send(e._message);
            this._reconnectInProgress = !1
        }
        _dispose(e) {
            null != e || (e = new Error("Unable to reconnect to server."));
            for (const t of this._messages)
                t._rejector(e)
        }
        _isInvocationMessage(e) {
            switch (e.type) {
            case zt.Invocation:
            case zt.StreamItem:
            case zt.Completion:
            case zt.StreamInvocation:
            case zt.CancelInvocation:
                return !0;
            case zt.Close:
            case zt.Sequence:
            case zt.Ping:
            case zt.Ack:
                return !1
            }
        }
        _ackTimer() {
            void 0 === this._ackTimerHandle && (this._ackTimerHandle = setTimeout((async () => {
                try {
                    this._reconnectInProgress || await this._connection.send(this._protocol.writeMessage({
                        type: zt.Ack,
                        sequenceId: this._latestReceivedSequenceId
                    }))
                } catch {}
                clearTimeout(this._ackTimerHandle),
                this._ackTimerHandle = void 0
            }
            ), 1e3))
        }
    }
    class Vt {
        constructor(e, t, n, r) {
            this._message = e,
            this._id = t,
            this._resolver = n,
            this._rejector = r
        }
    }
    !function(e) {
        e.Disconnected = "Disconnected",
        e.Connecting = "Connecting",
        e.Connected = "Connected",
        e.Disconnecting = "Disconnecting",
        e.Reconnecting = "Reconnecting"
    }(qt || (qt = {}));
    class Xt {
        static create(e, t, n, r, o, s, i) {
            return new Xt(e,t,n,r,o,s,i)
        }
        constructor(e, t, n, r, o, s, i) {
            this._nextKeepAlive = 0,
            this._freezeEventListener = () => {
                this._logger.log(_t.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep")
            }
            ,
            Et.isRequired(e, "connection"),
            Et.isRequired(t, "logger"),
            Et.isRequired(n, "protocol"),
            this.serverTimeoutInMilliseconds = null != o ? o : 3e4,
            this.keepAliveIntervalInMilliseconds = null != s ? s : 15e3,
            this._statefulReconnectBufferSize = null != i ? i : 1e5,
            this._logger = t,
            this._protocol = n,
            this.connection = e,
            this._reconnectPolicy = r,
            this._handshakeProtocol = new Mt,
            this.connection.onreceive = e => this._processIncomingData(e),
            this.connection.onclose = e => this._connectionClosed(e),
            this._callbacks = {},
            this._methods = {},
            this._closedCallbacks = [],
            this._reconnectingCallbacks = [],
            this._reconnectedCallbacks = [],
            this._invocationId = 0,
            this._receivedHandshakeResponse = !1,
            this._connectionState = qt.Disconnected,
            this._connectionStarted = !1,
            this._cachedPingMessage = this._protocol.writeMessage({
                type: zt.Ping
            })
        }
        get state() {
            return this._connectionState
        }
        get connectionId() {
            return this.connection && this.connection.connectionId || null
        }
        get baseUrl() {
            return this.connection.baseUrl || ""
        }
        set baseUrl(e) {
            if (this._connectionState !== qt.Disconnected && this._connectionState !== qt.Reconnecting)
                throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
            if (!e)
                throw new Error("The HubConnection url must be a valid url.");
            this.connection.baseUrl = e
        }
        start() {
            return this._startPromise = this._startWithStateTransitions(),
            this._startPromise
        }
        async _startWithStateTransitions() {
            if (this._connectionState !== qt.Disconnected)
                return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
            this._connectionState = qt.Connecting,
            this._logger.log(_t.Debug, "Starting HubConnection.");
            try {
                await this._startInternal(),
                Ct.isBrowser && window.document.addEventListener("freeze", this._freezeEventListener),
                this._connectionState = qt.Connected,
                this._connectionStarted = !0,
                this._logger.log(_t.Debug, "HubConnection connected successfully.")
            } catch (e) {
                return this._connectionState = qt.Disconnected,
                this._logger.log(_t.Debug, `HubConnection failed to start successfully because of error '${e}'.`),
                Promise.reject(e)
            }
        }
        async _startInternal() {
            this._stopDuringStartError = void 0,
            this._receivedHandshakeResponse = !1;
            const e = new Promise(( (e, t) => {
                this._handshakeResolver = e,
                this._handshakeRejecter = t
            }
            ));
            await this.connection.start(this._protocol.transferFormat);
            try {
                let t = this._protocol.version;
                this.connection.features.reconnect || (t = 1);
                const n = {
                    protocol: this._protocol.name,
                    version: t
                };
                if (this._logger.log(_t.Debug, "Sending handshake request."),
                await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(n)),
                this._logger.log(_t.Information, `Using HubProtocol '${this._protocol.name}'.`),
                this._cleanupTimeout(),
                this._resetTimeoutPeriod(),
                this._resetKeepAliveInterval(),
                await e,
                this._stopDuringStartError)
                    throw this._stopDuringStartError;
                !!this.connection.features.reconnect && (this._messageBuffer = new Kt(this._protocol,this.connection,this._statefulReconnectBufferSize),
                this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer),
                this.connection.features.resend = () => {
                    if (this._messageBuffer)
                        return this._messageBuffer._resend()
                }
                ),
                this.connection.features.inherentKeepAlive || await this._sendMessage(this._cachedPingMessage)
            } catch (e) {
                throw this._logger.log(_t.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`),
                this._cleanupTimeout(),
                this._cleanupPingTimer(),
                await this.connection.stop(e),
                e
            }
        }
        async stop() {
            const e = this._startPromise;
            this.connection.features.reconnect = !1,
            this._stopPromise = this._stopInternal(),
            await this._stopPromise;
            try {
                await e
            } catch (e) {}
        }
        _stopInternal(e) {
            if (this._connectionState === qt.Disconnected)
                return this._logger.log(_t.Debug, `Call to HubConnection.stop(${e}) ignored because it is already in the disconnected state.`),
                Promise.resolve();
            if (this._connectionState === qt.Disconnecting)
                return this._logger.log(_t.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),
                this._stopPromise;
            const t = this._connectionState;
            return this._connectionState = qt.Disconnecting,
            this._logger.log(_t.Debug, "Stopping HubConnection."),
            this._reconnectDelayHandle ? (this._logger.log(_t.Debug, "Connection stopped during reconnect delay. Done reconnecting."),
            clearTimeout(this._reconnectDelayHandle),
            this._reconnectDelayHandle = void 0,
            this._completeClose(),
            Promise.resolve()) : (t === qt.Connected && this._sendCloseMessage(),
            this._cleanupTimeout(),
            this._cleanupPingTimer(),
            this._stopDuringStartError = e || new $t("The connection was stopped before the hub handshake could complete."),
            this.connection.stop(e))
        }
        async _sendCloseMessage() {
            try {
                await this._sendWithProtocol(this._createCloseMessage())
            } catch {}
        }
        stream(e, ...t) {
            const [n,r] = this._replaceStreamingParams(t)
              , o = this._createStreamInvocation(e, t, r);
            let s;
            const i = new Jt;
            return i.cancelCallback = () => {
                const e = this._createCancelInvocation(o.invocationId);
                return delete this._callbacks[o.invocationId],
                s.then(( () => this._sendWithProtocol(e)))
            }
            ,
            this._callbacks[o.invocationId] = (e, t) => {
                t ? i.error(t) : e && (e.type === zt.Completion ? e.error ? i.error(new Error(e.error)) : i.complete() : i.next(e.item))
            }
            ,
            s = this._sendWithProtocol(o).catch((e => {
                i.error(e),
                delete this._callbacks[o.invocationId]
            }
            )),
            this._launchStreams(n, s),
            i
        }
        _sendMessage(e) {
            return this._resetKeepAliveInterval(),
            this.connection.send(e)
        }
        _sendWithProtocol(e) {
            return this._messageBuffer ? this._messageBuffer._send(e) : this._sendMessage(this._protocol.writeMessage(e))
        }
        send(e, ...t) {
            const [n,r] = this._replaceStreamingParams(t)
              , o = this._sendWithProtocol(this._createInvocation(e, t, !0, r));
            return this._launchStreams(n, o),
            o
        }
        invoke(e, ...t) {
            const [n,r] = this._replaceStreamingParams(t)
              , o = this._createInvocation(e, t, !1, r);
            return new Promise(( (e, t) => {
                this._callbacks[o.invocationId] = (n, r) => {
                    r ? t(r) : n && (n.type === zt.Completion ? n.error ? t(new Error(n.error)) : e(n.result) : t(new Error(`Unexpected message type: ${n.type}`)))
                }
                ;
                const r = this._sendWithProtocol(o).catch((e => {
                    t(e),
                    delete this._callbacks[o.invocationId]
                }
                ));
                this._launchStreams(n, r)
            }
            ))
        }
        on(e, t) {
            e && t && (e = e.toLowerCase(),
            this._methods[e] || (this._methods[e] = []),
            -1 === this._methods[e].indexOf(t) && this._methods[e].push(t))
        }
        off(e, t) {
            if (!e)
                return;
            e = e.toLowerCase();
            const n = this._methods[e];
            if (n)
                if (t) {
                    const r = n.indexOf(t);
                    -1 !== r && (n.splice(r, 1),
                    0 === n.length && delete this._methods[e])
                } else
                    delete this._methods[e]
        }
        onclose(e) {
            e && this._closedCallbacks.push(e)
        }
        onreconnecting(e) {
            e && this._reconnectingCallbacks.push(e)
        }
        onreconnected(e) {
            e && this._reconnectedCallbacks.push(e)
        }
        _processIncomingData(e) {
            if (this._cleanupTimeout(),
            this._receivedHandshakeResponse || (e = this._processHandshakeResponse(e),
            this._receivedHandshakeResponse = !0),
            e) {
                const t = this._protocol.parseMessages(e, this._logger);
                for (const e of t)
                    if (!this._messageBuffer || this._messageBuffer._shouldProcessMessage(e))
                        switch (e.type) {
                        case zt.Invocation:
                            this._invokeClientMethod(e).catch((e => {
                                this._logger.log(_t.Error, `Invoke client method threw error: ${Nt(e)}`)
                            }
                            ));
                            break;
                        case zt.StreamItem:
                        case zt.Completion:
                            {
                                const t = this._callbacks[e.invocationId];
                                if (t) {
                                    e.type === zt.Completion && delete this._callbacks[e.invocationId];
                                    try {
                                        t(e)
                                    } catch (e) {
                                        this._logger.log(_t.Error, `Stream callback threw error: ${Nt(e)}`)
                                    }
                                }
                                break
                            }
                        case zt.Ping:
                            break;
                        case zt.Close:
                            {
                                this._logger.log(_t.Information, "Close message received from server.");
                                const t = e.error ? new Error("Server returned an error on close: " + e.error) : void 0;
                                !0 === e.allowReconnect ? this.connection.stop(t) : this._stopPromise = this._stopInternal(t);
                                break
                            }
                        case zt.Ack:
                            this._messageBuffer && this._messageBuffer._ack(e);
                            break;
                        case zt.Sequence:
                            this._messageBuffer && this._messageBuffer._resetSequence(e);
                            break;
                        default:
                            this._logger.log(_t.Warning, `Invalid message type: ${e.type}.`)
                        }
            }
            this._resetTimeoutPeriod()
        }
        _processHandshakeResponse(e) {
            let t, n;
            try {
                [n,t] = this._handshakeProtocol.parseHandshakeResponse(e)
            } catch (e) {
                const t = "Error parsing handshake response: " + e;
                this._logger.log(_t.Error, t);
                const n = new Error(t);
                throw this._handshakeRejecter(n),
                n
            }
            if (t.error) {
                const e = "Server returned handshake error: " + t.error;
                this._logger.log(_t.Error, e);
                const n = new Error(e);
                throw this._handshakeRejecter(n),
                n
            }
            return this._logger.log(_t.Debug, "Server handshake complete."),
            this._handshakeResolver(),
            n
        }
        _resetKeepAliveInterval() {
            this.connection.features.inherentKeepAlive || (this._nextKeepAlive = (new Date).getTime() + this.keepAliveIntervalInMilliseconds,
            this._cleanupPingTimer())
        }
        _resetTimeoutPeriod() {
            if (!(this.connection.features && this.connection.features.inherentKeepAlive || (this._timeoutHandle = setTimeout(( () => this.serverTimeout()), this.serverTimeoutInMilliseconds),
            void 0 !== this._pingServerHandle))) {
                let e = this._nextKeepAlive - (new Date).getTime();
                e < 0 && (e = 0),
                this._pingServerHandle = setTimeout((async () => {
                    if (this._connectionState === qt.Connected)
                        try {
                            await this._sendMessage(this._cachedPingMessage)
                        } catch {
                            this._cleanupPingTimer()
                        }
                }
                ), e)
            }
        }
        serverTimeout() {
            this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."))
        }
        async _invokeClientMethod(e) {
            const t = e.target.toLowerCase()
              , n = this._methods[t];
            if (!n)
                return this._logger.log(_t.Warning, `No client method with the name '${t}' found.`),
                void (e.invocationId && (this._logger.log(_t.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`),
                await this._sendWithProtocol(this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null))));
            const r = n.slice()
              , o = !!e.invocationId;
            let s, i, a;
            for (const n of r)
                try {
                    const r = s;
                    s = await n.apply(this, e.arguments),
                    o && s && r && (this._logger.log(_t.Error, `Multiple results provided for '${t}'. Sending error to server.`),
                    a = this._createCompletionMessage(e.invocationId, "Client provided multiple results.", null)),
                    i = void 0
                } catch (e) {
                    i = e,
                    this._logger.log(_t.Error, `A callback for the method '${t}' threw error '${e}'.`)
                }
            a ? await this._sendWithProtocol(a) : o ? (i ? a = this._createCompletionMessage(e.invocationId, `${i}`, null) : void 0 !== s ? a = this._createCompletionMessage(e.invocationId, null, s) : (this._logger.log(_t.Warning, `No result given for '${t}' method and invocation ID '${e.invocationId}'.`),
            a = this._createCompletionMessage(e.invocationId, "Client didn't provide a result.", null)),
            await this._sendWithProtocol(a)) : s && this._logger.log(_t.Error, `Result given for '${t}' method but server is not expecting a result.`)
        }
        _connectionClosed(e) {
            this._logger.log(_t.Debug, `HubConnection.connectionClosed(${e}) called while in state ${this._connectionState}.`),
            this._stopDuringStartError = this._stopDuringStartError || e || new $t("The underlying connection was closed before the hub handshake could complete."),
            this._handshakeResolver && this._handshakeResolver(),
            this._cancelCallbacksWithError(e || new Error("Invocation canceled due to the underlying connection being closed.")),
            this._cleanupTimeout(),
            this._cleanupPingTimer(),
            this._connectionState === qt.Disconnecting ? this._completeClose(e) : this._connectionState === qt.Connected && this._reconnectPolicy ? this._reconnect(e) : this._connectionState === qt.Connected && this._completeClose(e)
        }
        _completeClose(e) {
            if (this._connectionStarted) {
                this._connectionState = qt.Disconnected,
                this._connectionStarted = !1,
                this._messageBuffer && (this._messageBuffer._dispose(null != e ? e : new Error("Connection closed.")),
                this._messageBuffer = void 0),
                Ct.isBrowser && window.document.removeEventListener("freeze", this._freezeEventListener);
                try {
                    this._closedCallbacks.forEach((t => t.apply(this, [e])))
                } catch (t) {
                    this._logger.log(_t.Error, `An onclose callback called with error '${e}' threw error '${t}'.`)
                }
            }
        }
        async _reconnect(e) {
            const t = Date.now();
            let n = 0
              , r = void 0 !== e ? e : new Error("Attempting to reconnect due to a unknown error.")
              , o = this._getNextRetryDelay(n++, 0, r);
            if (null === o)
                return this._logger.log(_t.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt."),
                void this._completeClose(e);
            if (this._connectionState = qt.Reconnecting,
            e ? this._logger.log(_t.Information, `Connection reconnecting because of error '${e}'.`) : this._logger.log(_t.Information, "Connection reconnecting."),
            0 !== this._reconnectingCallbacks.length) {
                try {
                    this._reconnectingCallbacks.forEach((t => t.apply(this, [e])))
                } catch (t) {
                    this._logger.log(_t.Error, `An onreconnecting callback called with error '${e}' threw error '${t}'.`)
                }
                if (this._connectionState !== qt.Reconnecting)
                    return void this._logger.log(_t.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.")
            }
            for (; null !== o; ) {
                if (this._logger.log(_t.Information, `Reconnect attempt number ${n} will start in ${o} ms.`),
                await new Promise((e => {
                    this._reconnectDelayHandle = setTimeout(e, o)
                }
                )),
                this._reconnectDelayHandle = void 0,
                this._connectionState !== qt.Reconnecting)
                    return void this._logger.log(_t.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                try {
                    if (await this._startInternal(),
                    this._connectionState = qt.Connected,
                    this._logger.log(_t.Information, "HubConnection reconnected successfully."),
                    0 !== this._reconnectedCallbacks.length)
                        try {
                            this._reconnectedCallbacks.forEach((e => e.apply(this, [this.connection.connectionId])))
                        } catch (e) {
                            this._logger.log(_t.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`)
                        }
                    return
                } catch (e) {
                    if (this._logger.log(_t.Information, `Reconnect attempt failed because of error '${e}'.`),
                    this._connectionState !== qt.Reconnecting)
                        return this._logger.log(_t.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`),
                        void (this._connectionState === qt.Disconnecting && this._completeClose());
                    r = e instanceof Error ? e : new Error(e.toString()),
                    o = this._getNextRetryDelay(n++, Date.now() - t, r)
                }
            }
            this._logger.log(_t.Information, `Reconnect retries have been exhausted after ${Date.now() - t} ms and ${n} failed attempts. Connection disconnecting.`),
            this._completeClose()
        }
        _getNextRetryDelay(e, t, n) {
            try {
                return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                    elapsedMilliseconds: t,
                    previousRetryCount: e,
                    retryReason: n
                })
            } catch (n) {
                return this._logger.log(_t.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${e}, ${t}) threw error '${n}'.`),
                null
            }
        }
        _cancelCallbacksWithError(e) {
            const t = this._callbacks;
            this._callbacks = {},
            Object.keys(t).forEach((n => {
                const r = t[n];
                try {
                    r(null, e)
                } catch (t) {
                    this._logger.log(_t.Error, `Stream 'error' callback called with '${e}' threw error: ${Nt(t)}`)
                }
            }
            ))
        }
        _cleanupPingTimer() {
            this._pingServerHandle && (clearTimeout(this._pingServerHandle),
            this._pingServerHandle = void 0)
        }
        _cleanupTimeout() {
            this._timeoutHandle && clearTimeout(this._timeoutHandle)
        }
        _createInvocation(e, t, n, r) {
            if (n)
                return 0 !== r.length ? {
                    arguments: t,
                    streamIds: r,
                    target: e,
                    type: zt.Invocation
                } : {
                    arguments: t,
                    target: e,
                    type: zt.Invocation
                };
            {
                const n = this._invocationId;
                return this._invocationId++,
                0 !== r.length ? {
                    arguments: t,
                    invocationId: n.toString(),
                    streamIds: r,
                    target: e,
                    type: zt.Invocation
                } : {
                    arguments: t,
                    invocationId: n.toString(),
                    target: e,
                    type: zt.Invocation
                }
            }
        }
        _launchStreams(e, t) {
            if (0 !== e.length) {
                t || (t = Promise.resolve());
                for (const n in e)
                    e[n].subscribe({
                        complete: () => {
                            t = t.then(( () => this._sendWithProtocol(this._createCompletionMessage(n))))
                        }
                        ,
                        error: e => {
                            let r;
                            r = e instanceof Error ? e.message : e && e.toString ? e.toString() : "Unknown error",
                            t = t.then(( () => this._sendWithProtocol(this._createCompletionMessage(n, r))))
                        }
                        ,
                        next: e => {
                            t = t.then(( () => this._sendWithProtocol(this._createStreamItemMessage(n, e))))
                        }
                    })
            }
        }
        _replaceStreamingParams(e) {
            const t = []
              , n = [];
            for (let r = 0; r < e.length; r++) {
                const o = e[r];
                if (this._isObservable(o)) {
                    const s = this._invocationId;
                    this._invocationId++,
                    t[s] = o,
                    n.push(s.toString()),
                    e.splice(r, 1)
                }
            }
            return [t, n]
        }
        _isObservable(e) {
            return e && e.subscribe && "function" == typeof e.subscribe
        }
        _createStreamInvocation(e, t, n) {
            const r = this._invocationId;
            return this._invocationId++,
            0 !== n.length ? {
                arguments: t,
                invocationId: r.toString(),
                streamIds: n,
                target: e,
                type: zt.StreamInvocation
            } : {
                arguments: t,
                invocationId: r.toString(),
                target: e,
                type: zt.StreamInvocation
            }
        }
        _createCancelInvocation(e) {
            return {
                invocationId: e,
                type: zt.CancelInvocation
            }
        }
        _createStreamItemMessage(e, t) {
            return {
                invocationId: e,
                item: t,
                type: zt.StreamItem
            }
        }
        _createCompletionMessage(e, t, n) {
            return t ? {
                error: t,
                invocationId: e,
                type: zt.Completion
            } : {
                invocationId: e,
                result: n,
                type: zt.Completion
            }
        }
        _createCloseMessage() {
            return {
                type: zt.Close
            }
        }
    }
    const Yt = [0, 2e3, 1e4, 3e4, null];
    class Gt {
        constructor(e) {
            this._retryDelays = void 0 !== e ? [...e, null] : Yt
        }
        nextRetryDelayInMilliseconds(e) {
            return this._retryDelays[e.previousRetryCount]
        }
    }
    class Qt {
    }
    Qt.Authorization = "Authorization",
    Qt.Cookie = "Cookie";
    class Zt {
        constructor(e, t, n) {
            this.statusCode = e,
            this.statusText = t,
            this.content = n
        }
    }
    class en {
        get(e, t) {
            return this.send({
                ...t,
                method: "GET",
                url: e
            })
        }
        post(e, t) {
            return this.send({
                ...t,
                method: "POST",
                url: e
            })
        }
        delete(e, t) {
            return this.send({
                ...t,
                method: "DELETE",
                url: e
            })
        }
        getCookieString(e) {
            return ""
        }
    }
    class tn extends en {
        constructor(e, t) {
            super(),
            this._innerClient = e,
            this._accessTokenFactory = t
        }
        async send(e) {
            let t = !0;
            this._accessTokenFactory && (!this._accessToken || e.url && e.url.indexOf("/negotiate?") > 0) && (t = !1,
            this._accessToken = await this._accessTokenFactory()),
            this._setAuthorizationHeader(e);
            const n = await this._innerClient.send(e);
            return t && 401 === n.statusCode && this._accessTokenFactory ? (this._accessToken = await this._accessTokenFactory(),
            this._setAuthorizationHeader(e),
            await this._innerClient.send(e)) : n
        }
        _setAuthorizationHeader(e) {
            e.headers || (e.headers = {}),
            this._accessToken ? e.headers[Qt.Authorization] = `Bearer ${this._accessToken}` : this._accessTokenFactory && e.headers[Qt.Authorization] && delete e.headers[Qt.Authorization]
        }
        getCookieString(e) {
            return this._innerClient.getCookieString(e)
        }
    }
    class nn extends en {
        constructor(e) {
            if (super(),
            this._logger = e,
            "undefined" == typeof fetch) {
                const e = require;
                this._jar = new (e("tough-cookie").CookieJar),
                "undefined" == typeof fetch ? this._fetchType = e("node-fetch") : this._fetchType = fetch,
                this._fetchType = e("fetch-cookie")(this._fetchType, this._jar)
            } else
                this._fetchType = fetch.bind(function() {
                    if ("undefined" != typeof globalThis)
                        return globalThis;
                    if ("undefined" != typeof self)
                        return self;
                    if ("undefined" != typeof window)
                        return window;
                    if (void 0 !== r.g)
                        return r.g;
                    throw new Error("could not find global")
                }());
            if ("undefined" == typeof AbortController) {
                const e = require;
                this._abortControllerType = e("abort-controller")
            } else
                this._abortControllerType = AbortController
        }
        async send(e) {
            if (e.abortSignal && e.abortSignal.aborted)
                throw new $t;
            if (!e.method)
                throw new Error("No method defined.");
            if (!e.url)
                throw new Error("No url defined.");
            const t = new this._abortControllerType;
            let n;
            e.abortSignal && (e.abortSignal.onabort = () => {
                t.abort(),
                n = new $t
            }
            );
            let r, o = null;
            if (e.timeout) {
                const r = e.timeout;
                o = setTimeout(( () => {
                    t.abort(),
                    this._logger.log(_t.Warning, "Timeout from HTTP request."),
                    n = new Lt
                }
                ), r)
            }
            "" === e.content && (e.content = void 0),
            e.content && (e.headers = e.headers || {},
            kt(e.content) ? e.headers["Content-Type"] = "application/octet-stream" : e.headers["Content-Type"] = "text/plain;charset=UTF-8");
            try {
                r = await this._fetchType(e.url, {
                    body: e.content,
                    cache: "no-cache",
                    credentials: !0 === e.withCredentials ? "include" : "same-origin",
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        ...e.headers
                    },
                    method: e.method,
                    mode: "cors",
                    redirect: "follow",
                    signal: t.signal
                })
            } catch (e) {
                if (n)
                    throw n;
                throw this._logger.log(_t.Warning, `Error from HTTP request. ${e}.`),
                e
            } finally {
                o && clearTimeout(o),
                e.abortSignal && (e.abortSignal.onabort = null)
            }
            if (!r.ok) {
                const e = await rn(r, "text");
                throw new Bt(e || r.statusText,r.status)
            }
            const s = rn(r, e.responseType)
              , i = await s;
            return new Zt(r.status,r.statusText,i)
        }
        getCookieString(e) {
            return ""
        }
    }
    function rn(e, t) {
        let n;
        switch (t) {
        case "arraybuffer":
            n = e.arrayBuffer();
            break;
        case "text":
        default:
            n = e.text();
            break;
        case "blob":
        case "document":
        case "json":
            throw new Error(`${t} is not supported.`)
        }
        return n
    }
    class on extends en {
        constructor(e) {
            super(),
            this._logger = e
        }
        send(e) {
            return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new $t) : e.method ? e.url ? new Promise(( (t, n) => {
                const r = new XMLHttpRequest;
                r.open(e.method, e.url, !0),
                r.withCredentials = void 0 === e.withCredentials || e.withCredentials,
                r.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                "" === e.content && (e.content = void 0),
                e.content && (kt(e.content) ? r.setRequestHeader("Content-Type", "application/octet-stream") : r.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"));
                const o = e.headers;
                o && Object.keys(o).forEach((e => {
                    r.setRequestHeader(e, o[e])
                }
                )),
                e.responseType && (r.responseType = e.responseType),
                e.abortSignal && (e.abortSignal.onabort = () => {
                    r.abort(),
                    n(new $t)
                }
                ),
                e.timeout && (r.timeout = e.timeout),
                r.onload = () => {
                    e.abortSignal && (e.abortSignal.onabort = null),
                    r.status >= 200 && r.status < 300 ? t(new Zt(r.status,r.statusText,r.response || r.responseText)) : n(new Bt(r.response || r.responseText || r.statusText,r.status))
                }
                ,
                r.onerror = () => {
                    this._logger.log(_t.Warning, `Error from HTTP request. ${r.status}: ${r.statusText}.`),
                    n(new Bt(r.statusText,r.status))
                }
                ,
                r.ontimeout = () => {
                    this._logger.log(_t.Warning, "Timeout from HTTP request."),
                    n(new Lt)
                }
                ,
                r.send(e.content)
            }
            )) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
        }
    }
    class sn extends en {
        constructor(e) {
            if (super(),
            "undefined" != typeof fetch)
                this._httpClient = new nn(e);
            else {
                if ("undefined" == typeof XMLHttpRequest)
                    throw new Error("No usable HttpClient found.");
                this._httpClient = new on(e)
            }
        }
        send(e) {
            return e.abortSignal && e.abortSignal.aborted ? Promise.reject(new $t) : e.method ? e.url ? this._httpClient.send(e) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined."))
        }
        getCookieString(e) {
            return this._httpClient.getCookieString(e)
        }
    }
    var an, cn;
    !function(e) {
        e[e.None = 0] = "None",
        e[e.WebSockets = 1] = "WebSockets",
        e[e.ServerSentEvents = 2] = "ServerSentEvents",
        e[e.LongPolling = 4] = "LongPolling"
    }(an || (an = {})),
    function(e) {
        e[e.Text = 1] = "Text",
        e[e.Binary = 2] = "Binary"
    }(cn || (cn = {}));
    class ln {
        constructor() {
            this._isAborted = !1,
            this.onabort = null
        }
        abort() {
            this._isAborted || (this._isAborted = !0,
            this.onabort && this.onabort())
        }
        get signal() {
            return this
        }
        get aborted() {
            return this._isAborted
        }
    }
    class hn {
        get pollAborted() {
            return this._pollAbort.aborted
        }
        constructor(e, t, n) {
            this._httpClient = e,
            this._logger = t,
            this._pollAbort = new ln,
            this._options = n,
            this._running = !1,
            this.onreceive = null,
            this.onclose = null
        }
        async connect(e, t) {
            if (Et.isRequired(e, "url"),
            Et.isRequired(t, "transferFormat"),
            Et.isIn(t, cn, "transferFormat"),
            this._url = e,
            this._logger.log(_t.Trace, "(LongPolling transport) Connecting."),
            t === cn.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof (new XMLHttpRequest).responseType)
                throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
            const [n,r] = xt()
              , o = {
                [n]: r,
                ...this._options.headers
            }
              , s = {
                abortSignal: this._pollAbort.signal,
                headers: o,
                timeout: 1e5,
                withCredentials: this._options.withCredentials
            };
            t === cn.Binary && (s.responseType = "arraybuffer");
            const i = `${e}&_=${Date.now()}`;
            this._logger.log(_t.Trace, `(LongPolling transport) polling: ${i}.`);
            const a = await this._httpClient.get(i, s);
            200 !== a.statusCode ? (this._logger.log(_t.Error, `(LongPolling transport) Unexpected response code: ${a.statusCode}.`),
            this._closeError = new Bt(a.statusText || "",a.statusCode),
            this._running = !1) : this._running = !0,
            this._receiving = this._poll(this._url, s)
        }
        async _poll(e, t) {
            try {
                for (; this._running; )
                    try {
                        const n = `${e}&_=${Date.now()}`;
                        this._logger.log(_t.Trace, `(LongPolling transport) polling: ${n}.`);
                        const r = await this._httpClient.get(n, t);
                        204 === r.statusCode ? (this._logger.log(_t.Information, "(LongPolling transport) Poll terminated by server."),
                        this._running = !1) : 200 !== r.statusCode ? (this._logger.log(_t.Error, `(LongPolling transport) Unexpected response code: ${r.statusCode}.`),
                        this._closeError = new Bt(r.statusText || "",r.statusCode),
                        this._running = !1) : r.content ? (this._logger.log(_t.Trace, `(LongPolling transport) data received. ${It(r.content, this._options.logMessageContent)}.`),
                        this.onreceive && this.onreceive(r.content)) : this._logger.log(_t.Trace, "(LongPolling transport) Poll timed out, reissuing.")
                    } catch (e) {
                        this._running ? e instanceof Lt ? this._logger.log(_t.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this._closeError = e,
                        this._running = !1) : this._logger.log(_t.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`)
                    }
            } finally {
                this._logger.log(_t.Trace, "(LongPolling transport) Polling complete."),
                this.pollAborted || this._raiseOnClose()
            }
        }
        async send(e) {
            return this._running ? Tt(this._logger, "LongPolling", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"))
        }
        async stop() {
            this._logger.log(_t.Trace, "(LongPolling transport) Stopping polling."),
            this._running = !1,
            this._pollAbort.abort();
            try {
                await this._receiving,
                this._logger.log(_t.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
                const e = {}
                  , [t,n] = xt();
                e[t] = n;
                const r = {
                    headers: {
                        ...e,
                        ...this._options.headers
                    },
                    timeout: this._options.timeout,
                    withCredentials: this._options.withCredentials
                };
                let o;
                try {
                    await this._httpClient.delete(this._url, r)
                } catch (e) {
                    o = e
                }
                o ? o instanceof Bt && (404 === o.statusCode ? this._logger.log(_t.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.") : this._logger.log(_t.Trace, `(LongPolling transport) Error sending a DELETE request: ${o}`)) : this._logger.log(_t.Trace, "(LongPolling transport) DELETE request accepted.")
            } finally {
                this._logger.log(_t.Trace, "(LongPolling transport) Stop finished."),
                this._raiseOnClose()
            }
        }
        _raiseOnClose() {
            if (this.onclose) {
                let e = "(LongPolling transport) Firing onclose event.";
                this._closeError && (e += " Error: " + this._closeError),
                this._logger.log(_t.Trace, e),
                this.onclose(this._closeError)
            }
        }
    }
    class dn {
        constructor(e, t, n, r) {
            this._httpClient = e,
            this._accessToken = t,
            this._logger = n,
            this._options = r,
            this.onreceive = null,
            this.onclose = null
        }
        async connect(e, t) {
            return Et.isRequired(e, "url"),
            Et.isRequired(t, "transferFormat"),
            Et.isIn(t, cn, "transferFormat"),
            this._logger.log(_t.Trace, "(SSE transport) Connecting."),
            this._url = e,
            this._accessToken && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`),
            new Promise(( (n, r) => {
                let o, s = !1;
                if (t === cn.Text) {
                    if (Ct.isBrowser || Ct.isWebWorker)
                        o = new this._options.EventSource(e,{
                            withCredentials: this._options.withCredentials
                        });
                    else {
                        const t = this._httpClient.getCookieString(e)
                          , n = {};
                        n.Cookie = t;
                        const [r,s] = xt();
                        n[r] = s,
                        o = new this._options.EventSource(e,{
                            withCredentials: this._options.withCredentials,
                            headers: {
                                ...n,
                                ...this._options.headers
                            }
                        })
                    }
                    try {
                        o.onmessage = e => {
                            if (this.onreceive)
                                try {
                                    this._logger.log(_t.Trace, `(SSE transport) data received. ${It(e.data, this._options.logMessageContent)}.`),
                                    this.onreceive(e.data)
                                } catch (e) {
                                    return void this._close(e)
                                }
                        }
                        ,
                        o.onerror = e => {
                            s ? this._close() : r(new Error("EventSource failed to connect. The connection could not be found on the server, either the connection ID is not present on the server, or a proxy is refusing/buffering the connection. If you have multiple servers check that sticky sessions are enabled."))
                        }
                        ,
                        o.onopen = () => {
                            this._logger.log(_t.Information, `SSE connected to ${this._url}`),
                            this._eventSource = o,
                            s = !0,
                            n()
                        }
                    } catch (e) {
                        return void r(e)
                    }
                } else
                    r(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"))
            }
            ))
        }
        async send(e) {
            return this._eventSource ? Tt(this._logger, "SSE", this._httpClient, this._url, e, this._options) : Promise.reject(new Error("Cannot send until the transport is connected"))
        }
        stop() {
            return this._close(),
            Promise.resolve()
        }
        _close(e) {
            this._eventSource && (this._eventSource.close(),
            this._eventSource = void 0,
            this.onclose && this.onclose(e))
        }
    }
    class un {
        constructor(e, t, n, r, o, s) {
            this._logger = n,
            this._accessTokenFactory = t,
            this._logMessageContent = r,
            this._webSocketConstructor = o,
            this._httpClient = e,
            this.onreceive = null,
            this.onclose = null,
            this._headers = s
        }
        async connect(e, t) {
            let n;
            return Et.isRequired(e, "url"),
            Et.isRequired(t, "transferFormat"),
            Et.isIn(t, cn, "transferFormat"),
            this._logger.log(_t.Trace, "(WebSockets transport) Connecting."),
            this._accessTokenFactory && (n = await this._accessTokenFactory()),
            new Promise(( (r, o) => {
                let s;
                e = e.replace(/^http/, "ws");
                const i = this._httpClient.getCookieString(e);
                let a = !1;
                if (Ct.isReactNative) {
                    const t = {}
                      , [r,o] = xt();
                    t[r] = o,
                    n && (t[Qt.Authorization] = `Bearer ${n}`),
                    i && (t[Qt.Cookie] = i),
                    s = new this._webSocketConstructor(e,void 0,{
                        headers: {
                            ...t,
                            ...this._headers
                        }
                    })
                } else
                    n && (e += (e.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(n)}`);
                s || (s = new this._webSocketConstructor(e)),
                t === cn.Binary && (s.binaryType = "arraybuffer"),
                s.onopen = t => {
                    this._logger.log(_t.Information, `WebSocket connected to ${e}.`),
                    this._webSocket = s,
                    a = !0,
                    r()
                }
                ,
                s.onerror = e => {
                    let t = null;
                    t = "undefined" != typeof ErrorEvent && e instanceof ErrorEvent ? e.error : "There was an error with the transport",
                    this._logger.log(_t.Information, `(WebSockets transport) ${t}.`)
                }
                ,
                s.onmessage = e => {
                    if (this._logger.log(_t.Trace, `(WebSockets transport) data received. ${It(e.data, this._logMessageContent)}.`),
                    this.onreceive)
                        try {
                            this.onreceive(e.data)
                        } catch (e) {
                            return void this._close(e)
                        }
                }
                ,
                s.onclose = e => {
                    if (a)
                        this._close(e);
                    else {
                        let t = null;
                        t = "undefined" != typeof ErrorEvent && e instanceof ErrorEvent ? e.error : "WebSocket failed to connect. The connection could not be found on the server, either the endpoint may not be a SignalR endpoint, the connection ID is not present on the server, or there is a proxy blocking WebSockets. If you have multiple servers check that sticky sessions are enabled.",
                        o(new Error(t))
                    }
                }
            }
            ))
        }
        send(e) {
            return this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN ? (this._logger.log(_t.Trace, `(WebSockets transport) sending data. ${It(e, this._logMessageContent)}.`),
            this._webSocket.send(e),
            Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state")
        }
        stop() {
            return this._webSocket && this._close(void 0),
            Promise.resolve()
        }
        _close(e) {
            this._webSocket && (this._webSocket.onclose = () => {}
            ,
            this._webSocket.onmessage = () => {}
            ,
            this._webSocket.onerror = () => {}
            ,
            this._webSocket.close(),
            this._webSocket = void 0),
            this._logger.log(_t.Trace, "(WebSockets transport) socket closed."),
            this.onclose && (!this._isCloseEvent(e) || !1 !== e.wasClean && 1e3 === e.code ? e instanceof Error ? this.onclose(e) : this.onclose() : this.onclose(new Error(`WebSocket closed with status code: ${e.code} (${e.reason || "no reason given"}).`)))
        }
        _isCloseEvent(e) {
            return e && "boolean" == typeof e.wasClean && "number" == typeof e.code
        }
    }
    class pn {
        constructor(e, t={}) {
            if (this._stopPromiseResolver = () => {}
            ,
            this.features = {},
            this._negotiateVersion = 1,
            Et.isRequired(e, "url"),
            this._logger = function(e) {
                return void 0 === e ? new Rt(_t.Information) : null === e ? bt.instance : void 0 !== e.log ? e : new Rt(e)
            }(t.logger),
            this.baseUrl = this._resolveUrl(e),
            (t = t || {}).logMessageContent = void 0 !== t.logMessageContent && t.logMessageContent,
            "boolean" != typeof t.withCredentials && void 0 !== t.withCredentials)
                throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
            t.withCredentials = void 0 === t.withCredentials || t.withCredentials,
            t.timeout = void 0 === t.timeout ? 1e5 : t.timeout,
            "undefined" == typeof WebSocket || t.WebSocket || (t.WebSocket = WebSocket),
            "undefined" == typeof EventSource || t.EventSource || (t.EventSource = EventSource),
            this._httpClient = new tn(t.httpClient || new sn(this._logger),t.accessTokenFactory),
            this._connectionState = "Disconnected",
            this._connectionStarted = !1,
            this._options = t,
            this.onreceive = null,
            this.onclose = null
        }
        async start(e) {
            if (e = e || cn.Binary,
            Et.isIn(e, cn, "transferFormat"),
            this._logger.log(_t.Debug, `Starting connection with transfer format '${cn[e]}'.`),
            "Disconnected" !== this._connectionState)
                return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
            if (this._connectionState = "Connecting",
            this._startInternalPromise = this._startInternal(e),
            await this._startInternalPromise,
            "Disconnecting" === this._connectionState) {
                const e = "Failed to start the HttpConnection before stop() was called.";
                return this._logger.log(_t.Error, e),
                await this._stopPromise,
                Promise.reject(new $t(e))
            }
            if ("Connected" !== this._connectionState) {
                const e = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
                return this._logger.log(_t.Error, e),
                Promise.reject(new $t(e))
            }
            this._connectionStarted = !0
        }
        send(e) {
            return "Connected" !== this._connectionState ? Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State.")) : (this._sendQueue || (this._sendQueue = new fn(this.transport)),
            this._sendQueue.send(e))
        }
        async stop(e) {
            return "Disconnected" === this._connectionState ? (this._logger.log(_t.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnected state.`),
            Promise.resolve()) : "Disconnecting" === this._connectionState ? (this._logger.log(_t.Debug, `Call to HttpConnection.stop(${e}) ignored because the connection is already in the disconnecting state.`),
            this._stopPromise) : (this._connectionState = "Disconnecting",
            this._stopPromise = new Promise((e => {
                this._stopPromiseResolver = e
            }
            )),
            await this._stopInternal(e),
            void await this._stopPromise)
        }
        async _stopInternal(e) {
            this._stopError = e;
            try {
                await this._startInternalPromise
            } catch (e) {}
            if (this.transport) {
                try {
                    await this.transport.stop()
                } catch (e) {
                    this._logger.log(_t.Error, `HttpConnection.transport.stop() threw error '${e}'.`),
                    this._stopConnection()
                }
                this.transport = void 0
            } else
                this._logger.log(_t.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.")
        }
        async _startInternal(e) {
            let t = this.baseUrl;
            this._accessTokenFactory = this._options.accessTokenFactory,
            this._httpClient._accessTokenFactory = this._accessTokenFactory;
            try {
                if (this._options.skipNegotiation) {
                    if (this._options.transport !== an.WebSockets)
                        throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                    this.transport = this._constructTransport(an.WebSockets),
                    await this._startTransport(t, e)
                } else {
                    let n = null
                      , r = 0;
                    do {
                        if (n = await this._getNegotiationResponse(t),
                        "Disconnecting" === this._connectionState || "Disconnected" === this._connectionState)
                            throw new $t("The connection was stopped during negotiation.");
                        if (n.error)
                            throw new Error(n.error);
                        if (n.ProtocolVersion)
                            throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                        if (n.url && (t = n.url),
                        n.accessToken) {
                            const e = n.accessToken;
                            this._accessTokenFactory = () => e,
                            this._httpClient._accessToken = e,
                            this._httpClient._accessTokenFactory = void 0
                        }
                        r++
                    } while (n.url && r < 100);
                    if (100 === r && n.url)
                        throw new Error("Negotiate redirection limit exceeded.");
                    await this._createTransport(t, this._options.transport, n, e)
                }
                this.transport instanceof hn && (this.features.inherentKeepAlive = !0),
                "Connecting" === this._connectionState && (this._logger.log(_t.Debug, "The HttpConnection connected successfully."),
                this._connectionState = "Connected")
            } catch (e) {
                return this._logger.log(_t.Error, "Failed to start the connection: " + e),
                this._connectionState = "Disconnected",
                this.transport = void 0,
                this._stopPromiseResolver(),
                Promise.reject(e)
            }
        }
        async _getNegotiationResponse(e) {
            const t = {}
              , [n,r] = xt();
            t[n] = r;
            const o = this._resolveNegotiateUrl(e);
            this._logger.log(_t.Debug, `Sending negotiation request: ${o}.`);
            try {
                const e = await this._httpClient.post(o, {
                    content: "",
                    headers: {
                        ...t,
                        ...this._options.headers
                    },
                    timeout: this._options.timeout,
                    withCredentials: this._options.withCredentials
                });
                if (200 !== e.statusCode)
                    return Promise.reject(new Error(`Unexpected status code returned from negotiate '${e.statusCode}'`));
                const n = JSON.parse(e.content);
                return (!n.negotiateVersion || n.negotiateVersion < 1) && (n.connectionToken = n.connectionId),
                n.useStatefulReconnect && !0 !== this._options._useStatefulReconnect ? Promise.reject(new jt("Client didn't negotiate Stateful Reconnect but the server did.")) : n
            } catch (e) {
                let t = "Failed to complete negotiation with the server: " + e;
                return e instanceof Bt && 404 === e.statusCode && (t += " Either this is not a SignalR endpoint or there is a proxy blocking the connection."),
                this._logger.log(_t.Error, t),
                Promise.reject(new jt(t))
            }
        }
        _createConnectUrl(e, t) {
            return t ? e + (-1 === e.indexOf("?") ? "?" : "&") + `id=${t}` : e
        }
        async _createTransport(e, t, n, r) {
            let o = this._createConnectUrl(e, n.connectionToken);
            if (this._isITransport(t))
                return this._logger.log(_t.Debug, "Connection was provided an instance of ITransport, using that directly."),
                this.transport = t,
                await this._startTransport(o, r),
                void (this.connectionId = n.connectionId);
            const s = []
              , i = n.availableTransports || [];
            let a = n;
            for (const n of i) {
                const i = this._resolveTransportOrError(n, t, r, !0 === (null == a ? void 0 : a.useStatefulReconnect));
                if (i instanceof Error)
                    s.push(`${n.transport} failed:`),
                    s.push(i);
                else if (this._isITransport(i)) {
                    if (this.transport = i,
                    !a) {
                        try {
                            a = await this._getNegotiationResponse(e)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                        o = this._createConnectUrl(e, a.connectionToken)
                    }
                    try {
                        return await this._startTransport(o, r),
                        void (this.connectionId = a.connectionId)
                    } catch (e) {
                        if (this._logger.log(_t.Error, `Failed to start the transport '${n.transport}': ${e}`),
                        a = void 0,
                        s.push(new Ht(`${n.transport} failed: ${e}`,an[n.transport])),
                        "Connecting" !== this._connectionState) {
                            const e = "Failed to select transport before stop() was called.";
                            return this._logger.log(_t.Debug, e),
                            Promise.reject(new $t(e))
                        }
                    }
                }
            }
            return s.length > 0 ? Promise.reject(new Wt(`Unable to connect to the server with any of the available transports. ${s.join(" ")}`,s)) : Promise.reject(new Error("None of the transports supported by the client are supported by the server."))
        }
        _constructTransport(e) {
            switch (e) {
            case an.WebSockets:
                if (!this._options.WebSocket)
                    throw new Error("'WebSocket' is not supported in your environment.");
                return new un(this._httpClient,this._accessTokenFactory,this._logger,this._options.logMessageContent,this._options.WebSocket,this._options.headers || {});
            case an.ServerSentEvents:
                if (!this._options.EventSource)
                    throw new Error("'EventSource' is not supported in your environment.");
                return new dn(this._httpClient,this._httpClient._accessToken,this._logger,this._options);
            case an.LongPolling:
                return new hn(this._httpClient,this._logger,this._options);
            default:
                throw new Error(`Unknown transport: ${e}.`)
            }
        }
        _startTransport(e, t) {
            return this.transport.onreceive = this.onreceive,
            this.features.reconnect ? this.transport.onclose = async n => {
                let r = !1;
                if (this.features.reconnect) {
                    try {
                        this.features.disconnected(),
                        await this.transport.connect(e, t),
                        await this.features.resend()
                    } catch {
                        r = !0
                    }
                    r && this._stopConnection(n)
                } else
                    this._stopConnection(n)
            }
            : this.transport.onclose = e => this._stopConnection(e),
            this.transport.connect(e, t)
        }
        _resolveTransportOrError(e, t, n, r) {
            const o = an[e.transport];
            if (null == o)
                return this._logger.log(_t.Debug, `Skipping transport '${e.transport}' because it is not supported by this client.`),
                new Error(`Skipping transport '${e.transport}' because it is not supported by this client.`);
            if (!function(e, t) {
                return !e || 0 != (t & e)
            }(t, o))
                return this._logger.log(_t.Debug, `Skipping transport '${an[o]}' because it was disabled by the client.`),
                new Ft(`'${an[o]}' is disabled by the client.`,o);
            if (!(e.transferFormats.map((e => cn[e])).indexOf(n) >= 0))
                return this._logger.log(_t.Debug, `Skipping transport '${an[o]}' because it does not support the requested transfer format '${cn[n]}'.`),
                new Error(`'${an[o]}' does not support ${cn[n]}.`);
            if (o === an.WebSockets && !this._options.WebSocket || o === an.ServerSentEvents && !this._options.EventSource)
                return this._logger.log(_t.Debug, `Skipping transport '${an[o]}' because it is not supported in your environment.'`),
                new Ot(`'${an[o]}' is not supported in your environment.`,o);
            this._logger.log(_t.Debug, `Selecting transport '${an[o]}'.`);
            try {
                return this.features.reconnect = o === an.WebSockets ? r : void 0,
                this._constructTransport(o)
            } catch (e) {
                return e
            }
        }
        _isITransport(e) {
            return e && "object" == typeof e && "connect"in e
        }
        _stopConnection(e) {
            if (this._logger.log(_t.Debug, `HttpConnection.stopConnection(${e}) called while in state ${this._connectionState}.`),
            this.transport = void 0,
            e = this._stopError || e,
            this._stopError = void 0,
            "Disconnected" !== this._connectionState) {
                if ("Connecting" === this._connectionState)
                    throw this._logger.log(_t.Warning, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is still in the connecting state.`),
                    new Error(`HttpConnection.stopConnection(${e}) was called while the connection is still in the connecting state.`);
                if ("Disconnecting" === this._connectionState && this._stopPromiseResolver(),
                e ? this._logger.log(_t.Error, `Connection disconnected with error '${e}'.`) : this._logger.log(_t.Information, "Connection disconnected."),
                this._sendQueue && (this._sendQueue.stop().catch((e => {
                    this._logger.log(_t.Error, `TransportSendQueue.stop() threw error '${e}'.`)
                }
                )),
                this._sendQueue = void 0),
                this.connectionId = void 0,
                this._connectionState = "Disconnected",
                this._connectionStarted) {
                    this._connectionStarted = !1;
                    try {
                        this.onclose && this.onclose(e)
                    } catch (t) {
                        this._logger.log(_t.Error, `HttpConnection.onclose(${e}) threw error '${t}'.`)
                    }
                }
            } else
                this._logger.log(_t.Debug, `Call to HttpConnection.stopConnection(${e}) was ignored because the connection is already in the disconnected state.`)
        }
        _resolveUrl(e) {
            if (0 === e.lastIndexOf("https://", 0) || 0 === e.lastIndexOf("http://", 0))
                return e;
            if (!Ct.isBrowser)
                throw new Error(`Cannot resolve '${e}'.`);
            const t = window.document.createElement("a");
            return t.href = e,
            this._logger.log(_t.Information, `Normalizing '${e}' to '${t.href}'.`),
            t.href
        }
        _resolveNegotiateUrl(e) {
            const t = new URL(e);
            t.pathname.endsWith("/") ? t.pathname += "negotiate" : t.pathname += "/negotiate";
            const n = new URLSearchParams(t.searchParams);
            return n.has("negotiateVersion") || n.append("negotiateVersion", this._negotiateVersion.toString()),
            n.has("useStatefulReconnect") ? "true" === n.get("useStatefulReconnect") && (this._options._useStatefulReconnect = !0) : !0 === this._options._useStatefulReconnect && n.append("useStatefulReconnect", "true"),
            t.search = n.toString(),
            t.toString()
        }
    }
    class fn {
        constructor(e) {
            this._transport = e,
            this._buffer = [],
            this._executing = !0,
            this._sendBufferedData = new gn,
            this._transportResult = new gn,
            this._sendLoopPromise = this._sendLoop()
        }
        send(e) {
            return this._bufferData(e),
            this._transportResult || (this._transportResult = new gn),
            this._transportResult.promise
        }
        stop() {
            return this._executing = !1,
            this._sendBufferedData.resolve(),
            this._sendLoopPromise
        }
        _bufferData(e) {
            if (this._buffer.length && typeof this._buffer[0] != typeof e)
                throw new Error(`Expected data to be of type ${typeof this._buffer} but was of type ${typeof e}`);
            this._buffer.push(e),
            this._sendBufferedData.resolve()
        }
        async _sendLoop() {
            for (; ; ) {
                if (await this._sendBufferedData.promise,
                !this._executing) {
                    this._transportResult && this._transportResult.reject("Connection stopped.");
                    break
                }
                this._sendBufferedData = new gn;
                const e = this._transportResult;
                this._transportResult = void 0;
                const t = "string" == typeof this._buffer[0] ? this._buffer.join("") : fn._concatBuffers(this._buffer);
                this._buffer.length = 0;
                try {
                    await this._transport.send(t),
                    e.resolve()
                } catch (t) {
                    e.reject(t)
                }
            }
        }
        static _concatBuffers(e) {
            const t = e.map((e => e.byteLength)).reduce(( (e, t) => e + t))
              , n = new Uint8Array(t);
            let r = 0;
            for (const t of e)
                n.set(new Uint8Array(t), r),
                r += t.byteLength;
            return n.buffer
        }
    }
    class gn {
        constructor() {
            this.promise = new Promise(( (e, t) => [this._resolver,this._rejecter] = [e, t]))
        }
        resolve() {
            this._resolver()
        }
        reject(e) {
            this._rejecter(e)
        }
    }
    class mn {
        constructor() {
            this.name = "json",
            this.version = 2,
            this.transferFormat = cn.Text
        }
        parseMessages(e, t) {
            if ("string" != typeof e)
                throw new Error("Invalid input for JSON hub protocol. Expected a string.");
            if (!e)
                return [];
            null === t && (t = bt.instance);
            const n = wt.parse(e)
              , r = [];
            for (const e of n) {
                const n = JSON.parse(e);
                if ("number" != typeof n.type)
                    throw new Error("Invalid payload.");
                switch (n.type) {
                case zt.Invocation:
                    this._isInvocationMessage(n);
                    break;
                case zt.StreamItem:
                    this._isStreamItemMessage(n);
                    break;
                case zt.Completion:
                    this._isCompletionMessage(n);
                    break;
                case zt.Ping:
                case zt.Close:
                    break;
                case zt.Ack:
                    this._isAckMessage(n);
                    break;
                case zt.Sequence:
                    this._isSequenceMessage(n);
                    break;
                default:
                    t.log(_t.Information, "Unknown message type '" + n.type + "' ignored.");
                    continue
                }
                r.push(n)
            }
            return r
        }
        writeMessage(e) {
            return wt.write(JSON.stringify(e))
        }
        _isInvocationMessage(e) {
            this._assertNotEmptyString(e.target, "Invalid payload for Invocation message."),
            void 0 !== e.invocationId && this._assertNotEmptyString(e.invocationId, "Invalid payload for Invocation message.")
        }
        _isStreamItemMessage(e) {
            if (this._assertNotEmptyString(e.invocationId, "Invalid payload for StreamItem message."),
            void 0 === e.item)
                throw new Error("Invalid payload for StreamItem message.")
        }
        _isCompletionMessage(e) {
            if (e.result && e.error)
                throw new Error("Invalid payload for Completion message.");
            !e.result && e.error && this._assertNotEmptyString(e.error, "Invalid payload for Completion message."),
            this._assertNotEmptyString(e.invocationId, "Invalid payload for Completion message.")
        }
        _isAckMessage(e) {
            if ("number" != typeof e.sequenceId)
                throw new Error("Invalid SequenceId for Ack message.")
        }
        _isSequenceMessage(e) {
            if ("number" != typeof e.sequenceId)
                throw new Error("Invalid SequenceId for Sequence message.")
        }
        _assertNotEmptyString(e, t) {
            if ("string" != typeof e || "" === e)
                throw new Error(t)
        }
    }
    const vn = {
        trace: _t.Trace,
        debug: _t.Debug,
        info: _t.Information,
        information: _t.Information,
        warn: _t.Warning,
        warning: _t.Warning,
        error: _t.Error,
        critical: _t.Critical,
        none: _t.None
    };
    class yn {
        configureLogging(e) {
            if (Et.isRequired(e, "logging"),
            function(e) {
                return void 0 !== e.log
            }(e))
                this.logger = e;
            else if ("string" == typeof e) {
                const t = function(e) {
                    const t = vn[e.toLowerCase()];
                    if (void 0 !== t)
                        return t;
                    throw new Error(`Unknown log level: ${e}`)
                }(e);
                this.logger = new Rt(t)
            } else
                this.logger = new Rt(e);
            return this
        }
        withUrl(e, t) {
            return Et.isRequired(e, "url"),
            Et.isNotEmpty(e, "url"),
            this.url = e,
            this.httpConnectionOptions = "object" == typeof t ? {
                ...this.httpConnectionOptions,
                ...t
            } : {
                ...this.httpConnectionOptions,
                transport: t
            },
            this
        }
        withHubProtocol(e) {
            return Et.isRequired(e, "protocol"),
            this.protocol = e,
            this
        }
        withAutomaticReconnect(e) {
            if (this.reconnectPolicy)
                throw new Error("A reconnectPolicy has already been set.");
            return e ? Array.isArray(e) ? this.reconnectPolicy = new Gt(e) : this.reconnectPolicy = e : this.reconnectPolicy = new Gt,
            this
        }
        withServerTimeout(e) {
            return Et.isRequired(e, "milliseconds"),
            this._serverTimeoutInMilliseconds = e,
            this
        }
        withKeepAliveInterval(e) {
            return Et.isRequired(e, "milliseconds"),
            this._keepAliveIntervalInMilliseconds = e,
            this
        }
        withStatefulReconnect(e) {
            return void 0 === this.httpConnectionOptions && (this.httpConnectionOptions = {}),
            this.httpConnectionOptions._useStatefulReconnect = !0,
            this._statefulReconnectBufferSize = null == e ? void 0 : e.bufferSize,
            this
        }
        build() {
            const e = this.httpConnectionOptions || {};
            if (void 0 === e.logger && (e.logger = this.logger),
            !this.url)
                throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
            const t = new pn(this.url,e);
            return Xt.create(t, this.logger || bt.instance, this.protocol || new mn, this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize)
        }
    }
    var wn;
    !function(e) {
        e[e.Default = 0] = "Default",
        e[e.Server = 1] = "Server",
        e[e.WebAssembly = 2] = "WebAssembly",
        e[e.WebView = 3] = "WebView"
    }(wn || (wn = {}));
    var _n, bn, Sn, En = 4294967295;
    function Cn(e, t, n) {
        var r = Math.floor(n / 4294967296)
          , o = n;
        e.setUint32(t, r),
        e.setUint32(t + 4, o)
    }
    function In(e, t) {
        return 4294967296 * e.getInt32(t) + e.getUint32(t + 4)
    }
    var kn = ("undefined" == typeof process || "never" !== (null === (_n = null === process || void 0 === process ? void 0 : process.env) || void 0 === _n ? void 0 : _n.TEXT_ENCODING)) && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;
    function Tn(e) {
        for (var t = e.length, n = 0, r = 0; r < t; ) {
            var o = e.charCodeAt(r++);
            if (0 != (4294967168 & o))
                if (0 == (4294965248 & o))
                    n += 2;
                else {
                    if (o >= 55296 && o <= 56319 && r < t) {
                        var s = e.charCodeAt(r);
                        56320 == (64512 & s) && (++r,
                        o = ((1023 & o) << 10) + (1023 & s) + 65536)
                    }
                    n += 0 == (4294901760 & o) ? 3 : 4
                }
            else
                n++
        }
        return n
    }
    var Dn = kn ? new TextEncoder : void 0
      , Rn = kn ? "undefined" != typeof process && "force" !== (null === (bn = null === process || void 0 === process ? void 0 : process.env) || void 0 === bn ? void 0 : bn.TEXT_ENCODING) ? 200 : 0 : En
      , xn = (null == Dn ? void 0 : Dn.encodeInto) ? function(e, t, n) {
        Dn.encodeInto(e, t.subarray(n))
    }
    : function(e, t, n) {
        t.set(Dn.encode(e), n)
    }
    ;
    function An(e, t, n) {
        for (var r = t, o = r + n, s = [], i = ""; r < o; ) {
            var a = e[r++];
            if (0 == (128 & a))
                s.push(a);
            else if (192 == (224 & a)) {
                var c = 63 & e[r++];
                s.push((31 & a) << 6 | c)
            } else if (224 == (240 & a)) {
                c = 63 & e[r++];
                var l = 63 & e[r++];
                s.push((31 & a) << 12 | c << 6 | l)
            } else if (240 == (248 & a)) {
                var h = (7 & a) << 18 | (c = 63 & e[r++]) << 12 | (l = 63 & e[r++]) << 6 | 63 & e[r++];
                h > 65535 && (h -= 65536,
                s.push(h >>> 10 & 1023 | 55296),
                h = 56320 | 1023 & h),
                s.push(h)
            } else
                s.push(a);
            s.length >= 4096 && (i += String.fromCharCode.apply(String, s),
            s.length = 0)
        }
        return s.length > 0 && (i += String.fromCharCode.apply(String, s)),
        i
    }
    var Pn, Un = kn ? new TextDecoder : null, Nn = kn ? "undefined" != typeof process && "force" !== (null === (Sn = null === process || void 0 === process ? void 0 : process.env) || void 0 === Sn ? void 0 : Sn.TEXT_DECODER) ? 200 : 0 : En, Mn = function(e, t) {
        this.type = e,
        this.data = t
    }, Bn = (Pn = function(e, t) {
        return Pn = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(e, t) {
            e.__proto__ = t
        }
        || function(e, t) {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }
        ,
        Pn(e, t)
    }
    ,
    function(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
        function n() {
            this.constructor = e
        }
        Pn(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), Ln = function(e) {
        function t(n) {
            var r = e.call(this, n) || this
              , o = Object.create(t.prototype);
            return Object.setPrototypeOf(r, o),
            Object.defineProperty(r, "name", {
                configurable: !0,
                enumerable: !1,
                value: t.name
            }),
            r
        }
        return Bn(t, e),
        t
    }(Error), $n = {
        type: -1,
        encode: function(e) {
            var t, n, r, o;
            return e instanceof Date ? function(e) {
                var t, n = e.sec, r = e.nsec;
                if (n >= 0 && r >= 0 && n <= 17179869183) {
                    if (0 === r && n <= 4294967295) {
                        var o = new Uint8Array(4);
                        return (t = new DataView(o.buffer)).setUint32(0, n),
                        o
                    }
                    var s = n / 4294967296
                      , i = 4294967295 & n;
                    return o = new Uint8Array(8),
                    (t = new DataView(o.buffer)).setUint32(0, r << 2 | 3 & s),
                    t.setUint32(4, i),
                    o
                }
                return o = new Uint8Array(12),
                (t = new DataView(o.buffer)).setUint32(0, r),
                Cn(t, 4, n),
                o
            }((r = 1e6 * ((t = e.getTime()) - 1e3 * (n = Math.floor(t / 1e3))),
            {
                sec: n + (o = Math.floor(r / 1e9)),
                nsec: r - 1e9 * o
            })) : null
        },
        decode: function(e) {
            var t = function(e) {
                var t = new DataView(e.buffer,e.byteOffset,e.byteLength);
                switch (e.byteLength) {
                case 4:
                    return {
                        sec: t.getUint32(0),
                        nsec: 0
                    };
                case 8:
                    var n = t.getUint32(0);
                    return {
                        sec: 4294967296 * (3 & n) + t.getUint32(4),
                        nsec: n >>> 2
                    };
                case 12:
                    return {
                        sec: In(t, 4),
                        nsec: t.getUint32(0)
                    };
                default:
                    throw new Ln("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(e.length))
                }
            }(e);
            return new Date(1e3 * t.sec + t.nsec / 1e6)
        }
    }, On = function() {
        function e() {
            this.builtInEncoders = [],
            this.builtInDecoders = [],
            this.encoders = [],
            this.decoders = [],
            this.register($n)
        }
        return e.prototype.register = function(e) {
            var t = e.type
              , n = e.encode
              , r = e.decode;
            if (t >= 0)
                this.encoders[t] = n,
                this.decoders[t] = r;
            else {
                var o = 1 + t;
                this.builtInEncoders[o] = n,
                this.builtInDecoders[o] = r
            }
        }
        ,
        e.prototype.tryToEncode = function(e, t) {
            for (var n = 0; n < this.builtInEncoders.length; n++)
                if (null != (r = this.builtInEncoders[n]) && null != (o = r(e, t)))
                    return new Mn(-1 - n,o);
            for (n = 0; n < this.encoders.length; n++) {
                var r, o;
                if (null != (r = this.encoders[n]) && null != (o = r(e, t)))
                    return new Mn(n,o)
            }
            return e instanceof Mn ? e : null
        }
        ,
        e.prototype.decode = function(e, t, n) {
            var r = t < 0 ? this.builtInDecoders[-1 - t] : this.decoders[t];
            return r ? r(e, t, n) : new Mn(t,e)
        }
        ,
        e.defaultCodec = new e,
        e
    }();
    function Fn(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer,e.byteOffset,e.byteLength) : e instanceof ArrayBuffer ? new Uint8Array(e) : Uint8Array.from(e)
    }
    var Hn = function() {
        function e(e, t, n, r, o, s, i, a) {
            void 0 === e && (e = On.defaultCodec),
            void 0 === t && (t = void 0),
            void 0 === n && (n = 100),
            void 0 === r && (r = 2048),
            void 0 === o && (o = !1),
            void 0 === s && (s = !1),
            void 0 === i && (i = !1),
            void 0 === a && (a = !1),
            this.extensionCodec = e,
            this.context = t,
            this.maxDepth = n,
            this.initialBufferSize = r,
            this.sortKeys = o,
            this.forceFloat32 = s,
            this.ignoreUndefined = i,
            this.forceIntegerToFloat = a,
            this.pos = 0,
            this.view = new DataView(new ArrayBuffer(this.initialBufferSize)),
            this.bytes = new Uint8Array(this.view.buffer)
        }
        return e.prototype.reinitializeState = function() {
            this.pos = 0
        }
        ,
        e.prototype.encodeSharedRef = function(e) {
            return this.reinitializeState(),
            this.doEncode(e, 1),
            this.bytes.subarray(0, this.pos)
        }
        ,
        e.prototype.encode = function(e) {
            return this.reinitializeState(),
            this.doEncode(e, 1),
            this.bytes.slice(0, this.pos)
        }
        ,
        e.prototype.doEncode = function(e, t) {
            if (t > this.maxDepth)
                throw new Error("Too deep objects in depth ".concat(t));
            null == e ? this.encodeNil() : "boolean" == typeof e ? this.encodeBoolean(e) : "number" == typeof e ? this.encodeNumber(e) : "string" == typeof e ? this.encodeString(e) : this.encodeObject(e, t)
        }
        ,
        e.prototype.ensureBufferSizeToWrite = function(e) {
            var t = this.pos + e;
            this.view.byteLength < t && this.resizeBuffer(2 * t)
        }
        ,
        e.prototype.resizeBuffer = function(e) {
            var t = new ArrayBuffer(e)
              , n = new Uint8Array(t)
              , r = new DataView(t);
            n.set(this.bytes),
            this.view = r,
            this.bytes = n
        }
        ,
        e.prototype.encodeNil = function() {
            this.writeU8(192)
        }
        ,
        e.prototype.encodeBoolean = function(e) {
            !1 === e ? this.writeU8(194) : this.writeU8(195)
        }
        ,
        e.prototype.encodeNumber = function(e) {
            Number.isSafeInteger(e) && !this.forceIntegerToFloat ? e >= 0 ? e < 128 ? this.writeU8(e) : e < 256 ? (this.writeU8(204),
            this.writeU8(e)) : e < 65536 ? (this.writeU8(205),
            this.writeU16(e)) : e < 4294967296 ? (this.writeU8(206),
            this.writeU32(e)) : (this.writeU8(207),
            this.writeU64(e)) : e >= -32 ? this.writeU8(224 | e + 32) : e >= -128 ? (this.writeU8(208),
            this.writeI8(e)) : e >= -32768 ? (this.writeU8(209),
            this.writeI16(e)) : e >= -2147483648 ? (this.writeU8(210),
            this.writeI32(e)) : (this.writeU8(211),
            this.writeI64(e)) : this.forceFloat32 ? (this.writeU8(202),
            this.writeF32(e)) : (this.writeU8(203),
            this.writeF64(e))
        }
        ,
        e.prototype.writeStringHeader = function(e) {
            if (e < 32)
                this.writeU8(160 + e);
            else if (e < 256)
                this.writeU8(217),
                this.writeU8(e);
            else if (e < 65536)
                this.writeU8(218),
                this.writeU16(e);
            else {
                if (!(e < 4294967296))
                    throw new Error("Too long string: ".concat(e, " bytes in UTF-8"));
                this.writeU8(219),
                this.writeU32(e)
            }
        }
        ,
        e.prototype.encodeString = function(e) {
            if (e.length > Rn) {
                var t = Tn(e);
                this.ensureBufferSizeToWrite(5 + t),
                this.writeStringHeader(t),
                xn(e, this.bytes, this.pos),
                this.pos += t
            } else
                t = Tn(e),
                this.ensureBufferSizeToWrite(5 + t),
                this.writeStringHeader(t),
                function(e, t, n) {
                    for (var r = e.length, o = n, s = 0; s < r; ) {
                        var i = e.charCodeAt(s++);
                        if (0 != (4294967168 & i)) {
                            if (0 == (4294965248 & i))
                                t[o++] = i >> 6 & 31 | 192;
                            else {
                                if (i >= 55296 && i <= 56319 && s < r) {
                                    var a = e.charCodeAt(s);
                                    56320 == (64512 & a) && (++s,
                                    i = ((1023 & i) << 10) + (1023 & a) + 65536)
                                }
                                0 == (4294901760 & i) ? (t[o++] = i >> 12 & 15 | 224,
                                t[o++] = i >> 6 & 63 | 128) : (t[o++] = i >> 18 & 7 | 240,
                                t[o++] = i >> 12 & 63 | 128,
                                t[o++] = i >> 6 & 63 | 128)
                            }
                            t[o++] = 63 & i | 128
                        } else
                            t[o++] = i
                    }
                }(e, this.bytes, this.pos),
                this.pos += t
        }
        ,
        e.prototype.encodeObject = function(e, t) {
            var n = this.extensionCodec.tryToEncode(e, this.context);
            if (null != n)
                this.encodeExtension(n);
            else if (Array.isArray(e))
                this.encodeArray(e, t);
            else if (ArrayBuffer.isView(e))
                this.encodeBinary(e);
            else {
                if ("object" != typeof e)
                    throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(e)));
                this.encodeMap(e, t)
            }
        }
        ,
        e.prototype.encodeBinary = function(e) {
            var t = e.byteLength;
            if (t < 256)
                this.writeU8(196),
                this.writeU8(t);
            else if (t < 65536)
                this.writeU8(197),
                this.writeU16(t);
            else {
                if (!(t < 4294967296))
                    throw new Error("Too large binary: ".concat(t));
                this.writeU8(198),
                this.writeU32(t)
            }
            var n = Fn(e);
            this.writeU8a(n)
        }
        ,
        e.prototype.encodeArray = function(e, t) {
            var n = e.length;
            if (n < 16)
                this.writeU8(144 + n);
            else if (n < 65536)
                this.writeU8(220),
                this.writeU16(n);
            else {
                if (!(n < 4294967296))
                    throw new Error("Too large array: ".concat(n));
                this.writeU8(221),
                this.writeU32(n)
            }
            for (var r = 0, o = e; r < o.length; r++) {
                var s = o[r];
                this.doEncode(s, t + 1)
            }
        }
        ,
        e.prototype.countWithoutUndefined = function(e, t) {
            for (var n = 0, r = 0, o = t; r < o.length; r++)
                void 0 !== e[o[r]] && n++;
            return n
        }
        ,
        e.prototype.encodeMap = function(e, t) {
            var n = Object.keys(e);
            this.sortKeys && n.sort();
            var r = this.ignoreUndefined ? this.countWithoutUndefined(e, n) : n.length;
            if (r < 16)
                this.writeU8(128 + r);
            else if (r < 65536)
                this.writeU8(222),
                this.writeU16(r);
            else {
                if (!(r < 4294967296))
                    throw new Error("Too large map object: ".concat(r));
                this.writeU8(223),
                this.writeU32(r)
            }
            for (var o = 0, s = n; o < s.length; o++) {
                var i = s[o]
                  , a = e[i];
                this.ignoreUndefined && void 0 === a || (this.encodeString(i),
                this.doEncode(a, t + 1))
            }
        }
        ,
        e.prototype.encodeExtension = function(e) {
            var t = e.data.length;
            if (1 === t)
                this.writeU8(212);
            else if (2 === t)
                this.writeU8(213);
            else if (4 === t)
                this.writeU8(214);
            else if (8 === t)
                this.writeU8(215);
            else if (16 === t)
                this.writeU8(216);
            else if (t < 256)
                this.writeU8(199),
                this.writeU8(t);
            else if (t < 65536)
                this.writeU8(200),
                this.writeU16(t);
            else {
                if (!(t < 4294967296))
                    throw new Error("Too large extension object: ".concat(t));
                this.writeU8(201),
                this.writeU32(t)
            }
            this.writeI8(e.type),
            this.writeU8a(e.data)
        }
        ,
        e.prototype.writeU8 = function(e) {
            this.ensureBufferSizeToWrite(1),
            this.view.setUint8(this.pos, e),
            this.pos++
        }
        ,
        e.prototype.writeU8a = function(e) {
            var t = e.length;
            this.ensureBufferSizeToWrite(t),
            this.bytes.set(e, this.pos),
            this.pos += t
        }
        ,
        e.prototype.writeI8 = function(e) {
            this.ensureBufferSizeToWrite(1),
            this.view.setInt8(this.pos, e),
            this.pos++
        }
        ,
        e.prototype.writeU16 = function(e) {
            this.ensureBufferSizeToWrite(2),
            this.view.setUint16(this.pos, e),
            this.pos += 2
        }
        ,
        e.prototype.writeI16 = function(e) {
            this.ensureBufferSizeToWrite(2),
            this.view.setInt16(this.pos, e),
            this.pos += 2
        }
        ,
        e.prototype.writeU32 = function(e) {
            this.ensureBufferSizeToWrite(4),
            this.view.setUint32(this.pos, e),
            this.pos += 4
        }
        ,
        e.prototype.writeI32 = function(e) {
            this.ensureBufferSizeToWrite(4),
            this.view.setInt32(this.pos, e),
            this.pos += 4
        }
        ,
        e.prototype.writeF32 = function(e) {
            this.ensureBufferSizeToWrite(4),
            this.view.setFloat32(this.pos, e),
            this.pos += 4
        }
        ,
        e.prototype.writeF64 = function(e) {
            this.ensureBufferSizeToWrite(8),
            this.view.setFloat64(this.pos, e),
            this.pos += 8
        }
        ,
        e.prototype.writeU64 = function(e) {
            this.ensureBufferSizeToWrite(8),
            function(e, t, n) {
                var r = n / 4294967296
                  , o = n;
                e.setUint32(t, r),
                e.setUint32(t + 4, o)
            }(this.view, this.pos, e),
            this.pos += 8
        }
        ,
        e.prototype.writeI64 = function(e) {
            this.ensureBufferSizeToWrite(8),
            Cn(this.view, this.pos, e),
            this.pos += 8
        }
        ,
        e
    }();
    function jn(e) {
        return "".concat(e < 0 ? "-" : "", "0x").concat(Math.abs(e).toString(16).padStart(2, "0"))
    }
    var Wn = function() {
        function e(e, t) {
            void 0 === e && (e = 16),
            void 0 === t && (t = 16),
            this.maxKeyLength = e,
            this.maxLengthPerKey = t,
            this.hit = 0,
            this.miss = 0,
            this.caches = [];
            for (var n = 0; n < this.maxKeyLength; n++)
                this.caches.push([])
        }
        return e.prototype.canBeCached = function(e) {
            return e > 0 && e <= this.maxKeyLength
        }
        ,
        e.prototype.find = function(e, t, n) {
            e: for (var r = 0, o = this.caches[n - 1]; r < o.length; r++) {
                for (var s = o[r], i = s.bytes, a = 0; a < n; a++)
                    if (i[a] !== e[t + a])
                        continue e;
                return s.str
            }
            return null
        }
        ,
        e.prototype.store = function(e, t) {
            var n = this.caches[e.length - 1]
              , r = {
                bytes: e,
                str: t
            };
            n.length >= this.maxLengthPerKey ? n[Math.random() * n.length | 0] = r : n.push(r)
        }
        ,
        e.prototype.decode = function(e, t, n) {
            var r = this.find(e, t, n);
            if (null != r)
                return this.hit++,
                r;
            this.miss++;
            var o = An(e, t, n)
              , s = Uint8Array.prototype.slice.call(e, t, t + n);
            return this.store(s, o),
            o
        }
        ,
        e
    }()
      , zn = function(e, t) {
        var n, r, o, s, i = {
            label: 0,
            sent: function() {
                if (1 & o[0])
                    throw o[1];
                return o[1]
            },
            trys: [],
            ops: []
        };
        return s = {
            next: a(0),
            throw: a(1),
            return: a(2)
        },
        "function" == typeof Symbol && (s[Symbol.iterator] = function() {
            return this
        }
        ),
        s;
        function a(s) {
            return function(a) {
                return function(s) {
                    if (n)
                        throw new TypeError("Generator is already executing.");
                    for (; i; )
                        try {
                            if (n = 1,
                            r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r),
                            0) : r.next) && !(o = o.call(r, s[1])).done)
                                return o;
                            switch (r = 0,
                            o && (s = [2 & s[0], o.value]),
                            s[0]) {
                            case 0:
                            case 1:
                                o = s;
                                break;
                            case 4:
                                return i.label++,
                                {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                i.label++,
                                r = s[1],
                                s = [0];
                                continue;
                            case 7:
                                s = i.ops.pop(),
                                i.trys.pop();
                                continue;
                            default:
                                if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                                    i = 0;
                                    continue
                                }
                                if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {
                                    i.label = s[1];
                                    break
                                }
                                if (6 === s[0] && i.label < o[1]) {
                                    i.label = o[1],
                                    o = s;
                                    break
                                }
                                if (o && i.label < o[2]) {
                                    i.label = o[2],
                                    i.ops.push(s);
                                    break
                                }
                                o[2] && i.ops.pop(),
                                i.trys.pop();
                                continue
                            }
                            s = t.call(e, i)
                        } catch (e) {
                            s = [6, e],
                            r = 0
                        } finally {
                            n = o = 0
                        }
                    if (5 & s[0])
                        throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }([s, a])
            }
        }
    }
      , qn = function(e) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = "function" == typeof __values ? __values(e) : e[Symbol.iterator](),
        t = {},
        r("next"),
        r("throw"),
        r("return"),
        t[Symbol.asyncIterator] = function() {
            return this
        }
        ,
        t);
        function r(n) {
            t[n] = e[n] && function(t) {
                return new Promise((function(r, o) {
                    !function(e, t, n, r) {
                        Promise.resolve(r).then((function(t) {
                            e({
                                value: t,
                                done: n
                            })
                        }
                        ), t)
                    }(r, o, (t = e[n](t)).done, t.value)
                }
                ))
            }
        }
    }
      , Jn = function(e) {
        return this instanceof Jn ? (this.v = e,
        this) : new Jn(e)
    }
      , Kn = new DataView(new ArrayBuffer(0))
      , Vn = new Uint8Array(Kn.buffer)
      , Xn = function() {
        try {
            Kn.getInt8(0)
        } catch (e) {
            return e.constructor
        }
        throw new Error("never reached")
    }()
      , Yn = new Xn("Insufficient data")
      , Gn = new Wn
      , Qn = function() {
        function e(e, t, n, r, o, s, i, a) {
            void 0 === e && (e = On.defaultCodec),
            void 0 === t && (t = void 0),
            void 0 === n && (n = En),
            void 0 === r && (r = En),
            void 0 === o && (o = En),
            void 0 === s && (s = En),
            void 0 === i && (i = En),
            void 0 === a && (a = Gn),
            this.extensionCodec = e,
            this.context = t,
            this.maxStrLength = n,
            this.maxBinLength = r,
            this.maxArrayLength = o,
            this.maxMapLength = s,
            this.maxExtLength = i,
            this.keyDecoder = a,
            this.totalPos = 0,
            this.pos = 0,
            this.view = Kn,
            this.bytes = Vn,
            this.headByte = -1,
            this.stack = []
        }
        return e.prototype.reinitializeState = function() {
            this.totalPos = 0,
            this.headByte = -1,
            this.stack.length = 0
        }
        ,
        e.prototype.setBuffer = function(e) {
            this.bytes = Fn(e),
            this.view = function(e) {
                if (e instanceof ArrayBuffer)
                    return new DataView(e);
                var t = Fn(e);
                return new DataView(t.buffer,t.byteOffset,t.byteLength)
            }(this.bytes),
            this.pos = 0
        }
        ,
        e.prototype.appendBuffer = function(e) {
            if (-1 !== this.headByte || this.hasRemaining(1)) {
                var t = this.bytes.subarray(this.pos)
                  , n = Fn(e)
                  , r = new Uint8Array(t.length + n.length);
                r.set(t),
                r.set(n, t.length),
                this.setBuffer(r)
            } else
                this.setBuffer(e)
        }
        ,
        e.prototype.hasRemaining = function(e) {
            return this.view.byteLength - this.pos >= e
        }
        ,
        e.prototype.createExtraByteError = function(e) {
            var t = this.view
              , n = this.pos;
            return new RangeError("Extra ".concat(t.byteLength - n, " of ").concat(t.byteLength, " byte(s) found at buffer[").concat(e, "]"))
        }
        ,
        e.prototype.decode = function(e) {
            this.reinitializeState(),
            this.setBuffer(e);
            var t = this.doDecodeSync();
            if (this.hasRemaining(1))
                throw this.createExtraByteError(this.pos);
            return t
        }
        ,
        e.prototype.decodeMulti = function(e) {
            return zn(this, (function(t) {
                switch (t.label) {
                case 0:
                    this.reinitializeState(),
                    this.setBuffer(e),
                    t.label = 1;
                case 1:
                    return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
                case 2:
                    return t.sent(),
                    [3, 1];
                case 3:
                    return [2]
                }
            }
            ))
        }
        ,
        e.prototype.decodeAsync = function(e) {
            var t, n, r, o, s, i, a;
            return s = this,
            void 0,
            a = function() {
                var s, i, a, c, l, h, d, u;
                return zn(this, (function(p) {
                    switch (p.label) {
                    case 0:
                        s = !1,
                        p.label = 1;
                    case 1:
                        p.trys.push([1, 6, 7, 12]),
                        t = qn(e),
                        p.label = 2;
                    case 2:
                        return [4, t.next()];
                    case 3:
                        if ((n = p.sent()).done)
                            return [3, 5];
                        if (a = n.value,
                        s)
                            throw this.createExtraByteError(this.totalPos);
                        this.appendBuffer(a);
                        try {
                            i = this.doDecodeSync(),
                            s = !0
                        } catch (e) {
                            if (!(e instanceof Xn))
                                throw e
                        }
                        this.totalPos += this.pos,
                        p.label = 4;
                    case 4:
                        return [3, 2];
                    case 5:
                        return [3, 12];
                    case 6:
                        return c = p.sent(),
                        r = {
                            error: c
                        },
                        [3, 12];
                    case 7:
                        return p.trys.push([7, , 10, 11]),
                        n && !n.done && (o = t.return) ? [4, o.call(t)] : [3, 9];
                    case 8:
                        p.sent(),
                        p.label = 9;
                    case 9:
                        return [3, 11];
                    case 10:
                        if (r)
                            throw r.error;
                        return [7];
                    case 11:
                        return [7];
                    case 12:
                        if (s) {
                            if (this.hasRemaining(1))
                                throw this.createExtraByteError(this.totalPos);
                            return [2, i]
                        }
                        throw h = (l = this).headByte,
                        d = l.pos,
                        u = l.totalPos,
                        new RangeError("Insufficient data in parsing ".concat(jn(h), " at ").concat(u, " (").concat(d, " in the current buffer)"))
                    }
                }
                ))
            }
            ,
            new ((i = void 0) || (i = Promise))((function(e, t) {
                function n(e) {
                    try {
                        o(a.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    try {
                        o(a.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(t) {
                    var o;
                    t.done ? e(t.value) : (o = t.value,
                    o instanceof i ? o : new i((function(e) {
                        e(o)
                    }
                    ))).then(n, r)
                }
                o((a = a.apply(s, [])).next())
            }
            ))
        }
        ,
        e.prototype.decodeArrayStream = function(e) {
            return this.decodeMultiAsync(e, !0)
        }
        ,
        e.prototype.decodeStream = function(e) {
            return this.decodeMultiAsync(e, !1)
        }
        ,
        e.prototype.decodeMultiAsync = function(e, t) {
            return function(n, r, o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var s, i = function() {
                    var n, r, o, s, i, a, c, l, h;
                    return zn(this, (function(d) {
                        switch (d.label) {
                        case 0:
                            n = t,
                            r = -1,
                            d.label = 1;
                        case 1:
                            d.trys.push([1, 13, 14, 19]),
                            o = qn(e),
                            d.label = 2;
                        case 2:
                            return [4, Jn(o.next())];
                        case 3:
                            if ((s = d.sent()).done)
                                return [3, 12];
                            if (i = s.value,
                            t && 0 === r)
                                throw this.createExtraByteError(this.totalPos);
                            this.appendBuffer(i),
                            n && (r = this.readArraySize(),
                            n = !1,
                            this.complete()),
                            d.label = 4;
                        case 4:
                            d.trys.push([4, 9, , 10]),
                            d.label = 5;
                        case 5:
                            return [4, Jn(this.doDecodeSync())];
                        case 6:
                            return [4, d.sent()];
                        case 7:
                            return d.sent(),
                            0 == --r ? [3, 8] : [3, 5];
                        case 8:
                            return [3, 10];
                        case 9:
                            if (!((a = d.sent())instanceof Xn))
                                throw a;
                            return [3, 10];
                        case 10:
                            this.totalPos += this.pos,
                            d.label = 11;
                        case 11:
                            return [3, 2];
                        case 12:
                            return [3, 19];
                        case 13:
                            return c = d.sent(),
                            l = {
                                error: c
                            },
                            [3, 19];
                        case 14:
                            return d.trys.push([14, , 17, 18]),
                            s && !s.done && (h = o.return) ? [4, Jn(h.call(o))] : [3, 16];
                        case 15:
                            d.sent(),
                            d.label = 16;
                        case 16:
                            return [3, 18];
                        case 17:
                            if (l)
                                throw l.error;
                            return [7];
                        case 18:
                            return [7];
                        case 19:
                            return [2]
                        }
                    }
                    ))
                }
                .apply(n, r || []), a = [];
                return s = {},
                c("next"),
                c("throw"),
                c("return"),
                s[Symbol.asyncIterator] = function() {
                    return this
                }
                ,
                s;
                function c(e) {
                    i[e] && (s[e] = function(t) {
                        return new Promise((function(n, r) {
                            a.push([e, t, n, r]) > 1 || l(e, t)
                        }
                        ))
                    }
                    )
                }
                function l(e, t) {
                    try {
                        (n = i[e](t)).value instanceof Jn ? Promise.resolve(n.value.v).then(h, d) : u(a[0][2], n)
                    } catch (e) {
                        u(a[0][3], e)
                    }
                    var n
                }
                function h(e) {
                    l("next", e)
                }
                function d(e) {
                    l("throw", e)
                }
                function u(e, t) {
                    e(t),
                    a.shift(),
                    a.length && l(a[0][0], a[0][1])
                }
            }(this, arguments)
        }
        ,
        e.prototype.doDecodeSync = function() {
            e: for (; ; ) {
                var e = this.readHeadByte()
                  , t = void 0;
                if (e >= 224)
                    t = e - 256;
                else if (e < 192)
                    if (e < 128)
                        t = e;
                    else if (e < 144) {
                        if (0 != (r = e - 128)) {
                            this.pushMapState(r),
                            this.complete();
                            continue e
                        }
                        t = {}
                    } else if (e < 160) {
                        if (0 != (r = e - 144)) {
                            this.pushArrayState(r),
                            this.complete();
                            continue e
                        }
                        t = []
                    } else {
                        var n = e - 160;
                        t = this.decodeUtf8String(n, 0)
                    }
                else if (192 === e)
                    t = null;
                else if (194 === e)
                    t = !1;
                else if (195 === e)
                    t = !0;
                else if (202 === e)
                    t = this.readF32();
                else if (203 === e)
                    t = this.readF64();
                else if (204 === e)
                    t = this.readU8();
                else if (205 === e)
                    t = this.readU16();
                else if (206 === e)
                    t = this.readU32();
                else if (207 === e)
                    t = this.readU64();
                else if (208 === e)
                    t = this.readI8();
                else if (209 === e)
                    t = this.readI16();
                else if (210 === e)
                    t = this.readI32();
                else if (211 === e)
                    t = this.readI64();
                else if (217 === e)
                    n = this.lookU8(),
                    t = this.decodeUtf8String(n, 1);
                else if (218 === e)
                    n = this.lookU16(),
                    t = this.decodeUtf8String(n, 2);
                else if (219 === e)
                    n = this.lookU32(),
                    t = this.decodeUtf8String(n, 4);
                else if (220 === e) {
                    if (0 !== (r = this.readU16())) {
                        this.pushArrayState(r),
                        this.complete();
                        continue e
                    }
                    t = []
                } else if (221 === e) {
                    if (0 !== (r = this.readU32())) {
                        this.pushArrayState(r),
                        this.complete();
                        continue e
                    }
                    t = []
                } else if (222 === e) {
                    if (0 !== (r = this.readU16())) {
                        this.pushMapState(r),
                        this.complete();
                        continue e
                    }
                    t = {}
                } else if (223 === e) {
                    if (0 !== (r = this.readU32())) {
                        this.pushMapState(r),
                        this.complete();
                        continue e
                    }
                    t = {}
                } else if (196 === e) {
                    var r = this.lookU8();
                    t = this.decodeBinary(r, 1)
                } else if (197 === e)
                    r = this.lookU16(),
                    t = this.decodeBinary(r, 2);
                else if (198 === e)
                    r = this.lookU32(),
                    t = this.decodeBinary(r, 4);
                else if (212 === e)
                    t = this.decodeExtension(1, 0);
                else if (213 === e)
                    t = this.decodeExtension(2, 0);
                else if (214 === e)
                    t = this.decodeExtension(4, 0);
                else if (215 === e)
                    t = this.decodeExtension(8, 0);
                else if (216 === e)
                    t = this.decodeExtension(16, 0);
                else if (199 === e)
                    r = this.lookU8(),
                    t = this.decodeExtension(r, 1);
                else if (200 === e)
                    r = this.lookU16(),
                    t = this.decodeExtension(r, 2);
                else {
                    if (201 !== e)
                        throw new Ln("Unrecognized type byte: ".concat(jn(e)));
                    r = this.lookU32(),
                    t = this.decodeExtension(r, 4)
                }
                this.complete();
                for (var o = this.stack; o.length > 0; ) {
                    var s = o[o.length - 1];
                    if (0 === s.type) {
                        if (s.array[s.position] = t,
                        s.position++,
                        s.position !== s.size)
                            continue e;
                        o.pop(),
                        t = s.array
                    } else {
                        if (1 === s.type) {
                            if ("string" != (i = typeof t) && "number" !== i)
                                throw new Ln("The type of key must be string or number but " + typeof t);
                            if ("__proto__" === t)
                                throw new Ln("The key __proto__ is not allowed");
                            s.key = t,
                            s.type = 2;
                            continue e
                        }
                        if (s.map[s.key] = t,
                        s.readCount++,
                        s.readCount !== s.size) {
                            s.key = null,
                            s.type = 1;
                            continue e
                        }
                        o.pop(),
                        t = s.map
                    }
                }
                return t
            }
            var i
        }
        ,
        e.prototype.readHeadByte = function() {
            return -1 === this.headByte && (this.headByte = this.readU8()),
            this.headByte
        }
        ,
        e.prototype.complete = function() {
            this.headByte = -1
        }
        ,
        e.prototype.readArraySize = function() {
            var e = this.readHeadByte();
            switch (e) {
            case 220:
                return this.readU16();
            case 221:
                return this.readU32();
            default:
                if (e < 160)
                    return e - 144;
                throw new Ln("Unrecognized array type byte: ".concat(jn(e)))
            }
        }
        ,
        e.prototype.pushMapState = function(e) {
            if (e > this.maxMapLength)
                throw new Ln("Max length exceeded: map length (".concat(e, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
            this.stack.push({
                type: 1,
                size: e,
                key: null,
                readCount: 0,
                map: {}
            })
        }
        ,
        e.prototype.pushArrayState = function(e) {
            if (e > this.maxArrayLength)
                throw new Ln("Max length exceeded: array length (".concat(e, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
            this.stack.push({
                type: 0,
                size: e,
                array: new Array(e),
                position: 0
            })
        }
        ,
        e.prototype.decodeUtf8String = function(e, t) {
            var n;
            if (e > this.maxStrLength)
                throw new Ln("Max length exceeded: UTF-8 byte length (".concat(e, ") > maxStrLength (").concat(this.maxStrLength, ")"));
            if (this.bytes.byteLength < this.pos + t + e)
                throw Yn;
            var r, o = this.pos + t;
            return r = this.stateIsMapKey() && (null === (n = this.keyDecoder) || void 0 === n ? void 0 : n.canBeCached(e)) ? this.keyDecoder.decode(this.bytes, o, e) : e > Nn ? function(e, t, n) {
                var r = e.subarray(t, t + n);
                return Un.decode(r)
            }(this.bytes, o, e) : An(this.bytes, o, e),
            this.pos += t + e,
            r
        }
        ,
        e.prototype.stateIsMapKey = function() {
            return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type
        }
        ,
        e.prototype.decodeBinary = function(e, t) {
            if (e > this.maxBinLength)
                throw new Ln("Max length exceeded: bin length (".concat(e, ") > maxBinLength (").concat(this.maxBinLength, ")"));
            if (!this.hasRemaining(e + t))
                throw Yn;
            var n = this.pos + t
              , r = this.bytes.subarray(n, n + e);
            return this.pos += t + e,
            r
        }
        ,
        e.prototype.decodeExtension = function(e, t) {
            if (e > this.maxExtLength)
                throw new Ln("Max length exceeded: ext length (".concat(e, ") > maxExtLength (").concat(this.maxExtLength, ")"));
            var n = this.view.getInt8(this.pos + t)
              , r = this.decodeBinary(e, t + 1);
            return this.extensionCodec.decode(r, n, this.context)
        }
        ,
        e.prototype.lookU8 = function() {
            return this.view.getUint8(this.pos)
        }
        ,
        e.prototype.lookU16 = function() {
            return this.view.getUint16(this.pos)
        }
        ,
        e.prototype.lookU32 = function() {
            return this.view.getUint32(this.pos)
        }
        ,
        e.prototype.readU8 = function() {
            var e = this.view.getUint8(this.pos);
            return this.pos++,
            e
        }
        ,
        e.prototype.readI8 = function() {
            var e = this.view.getInt8(this.pos);
            return this.pos++,
            e
        }
        ,
        e.prototype.readU16 = function() {
            var e = this.view.getUint16(this.pos);
            return this.pos += 2,
            e
        }
        ,
        e.prototype.readI16 = function() {
            var e = this.view.getInt16(this.pos);
            return this.pos += 2,
            e
        }
        ,
        e.prototype.readU32 = function() {
            var e = this.view.getUint32(this.pos);
            return this.pos += 4,
            e
        }
        ,
        e.prototype.readI32 = function() {
            var e = this.view.getInt32(this.pos);
            return this.pos += 4,
            e
        }
        ,
        e.prototype.readU64 = function() {
            var e, t, n = (e = this.view,
            t = this.pos,
            4294967296 * e.getUint32(t) + e.getUint32(t + 4));
            return this.pos += 8,
            n
        }
        ,
        e.prototype.readI64 = function() {
            var e = In(this.view, this.pos);
            return this.pos += 8,
            e
        }
        ,
        e.prototype.readF32 = function() {
            var e = this.view.getFloat32(this.pos);
            return this.pos += 4,
            e
        }
        ,
        e.prototype.readF64 = function() {
            var e = this.view.getFloat64(this.pos);
            return this.pos += 8,
            e
        }
        ,
        e
    }();
    class Zn {
        static write(e) {
            let t = e.byteLength || e.length;
            const n = [];
            do {
                let e = 127 & t;
                t >>= 7,
                t > 0 && (e |= 128),
                n.push(e)
            } while (t > 0);
            t = e.byteLength || e.length;
            const r = new Uint8Array(n.length + t);
            return r.set(n, 0),
            r.set(e, n.length),
            r.buffer
        }
        static parse(e) {
            const t = []
              , n = new Uint8Array(e)
              , r = [0, 7, 14, 21, 28];
            for (let o = 0; o < e.byteLength; ) {
                let s, i = 0, a = 0;
                do {
                    s = n[o + i],
                    a |= (127 & s) << r[i],
                    i++
                } while (i < Math.min(5, e.byteLength - o) && 0 != (128 & s));
                if (0 != (128 & s) && i < 5)
                    throw new Error("Cannot read message size.");
                if (5 === i && s > 7)
                    throw new Error("Messages bigger than 2GB are not supported.");
                if (!(n.byteLength >= o + i + a))
                    throw new Error("Incomplete message.");
                t.push(n.slice ? n.slice(o + i, o + i + a) : n.subarray(o + i, o + i + a)),
                o = o + i + a
            }
            return t
        }
    }
    const er = new Uint8Array([145, zt.Ping]);
    class tr {
        constructor(e) {
            this.name = "messagepack",
            this.version = 2,
            this.transferFormat = cn.Binary,
            this._errorResult = 1,
            this._voidResult = 2,
            this._nonVoidResult = 3,
            e = e || {},
            this._encoder = new Hn(e.extensionCodec,e.context,e.maxDepth,e.initialBufferSize,e.sortKeys,e.forceFloat32,e.ignoreUndefined,e.forceIntegerToFloat),
            this._decoder = new Qn(e.extensionCodec,e.context,e.maxStrLength,e.maxBinLength,e.maxArrayLength,e.maxMapLength,e.maxExtLength)
        }
        parseMessages(e, t) {
            if (!(n = e) || "undefined" == typeof ArrayBuffer || !(n instanceof ArrayBuffer || n.constructor && "ArrayBuffer" === n.constructor.name))
                throw new Error("Invalid input for MessagePack hub protocol. Expected an ArrayBuffer.");
            var n;
            null === t && (t = bt.instance);
            const r = Zn.parse(e)
              , o = [];
            for (const e of r) {
                const n = this._parseMessage(e, t);
                n && o.push(n)
            }
            return o
        }
        writeMessage(e) {
            switch (e.type) {
            case zt.Invocation:
                return this._writeInvocation(e);
            case zt.StreamInvocation:
                return this._writeStreamInvocation(e);
            case zt.StreamItem:
                return this._writeStreamItem(e);
            case zt.Completion:
                return this._writeCompletion(e);
            case zt.Ping:
                return Zn.write(er);
            case zt.CancelInvocation:
                return this._writeCancelInvocation(e);
            case zt.Close:
                return this._writeClose();
            case zt.Ack:
                return this._writeAck(e);
            case zt.Sequence:
                return this._writeSequence(e);
            default:
                throw new Error("Invalid message type.")
            }
        }
        _parseMessage(e, t) {
            if (0 === e.length)
                throw new Error("Invalid payload.");
            const n = this._decoder.decode(e);
            if (0 === n.length || !(n instanceof Array))
                throw new Error("Invalid payload.");
            const r = n[0];
            switch (r) {
            case zt.Invocation:
                return this._createInvocationMessage(this._readHeaders(n), n);
            case zt.StreamItem:
                return this._createStreamItemMessage(this._readHeaders(n), n);
            case zt.Completion:
                return this._createCompletionMessage(this._readHeaders(n), n);
            case zt.Ping:
                return this._createPingMessage(n);
            case zt.Close:
                return this._createCloseMessage(n);
            case zt.Ack:
                return this._createAckMessage(n);
            case zt.Sequence:
                return this._createSequenceMessage(n);
            default:
                return t.log(_t.Information, "Unknown message type '" + r + "' ignored."),
                null
            }
        }
        _createCloseMessage(e) {
            if (e.length < 2)
                throw new Error("Invalid payload for Close message.");
            return {
                allowReconnect: e.length >= 3 ? e[2] : void 0,
                error: e[1],
                type: zt.Close
            }
        }
        _createPingMessage(e) {
            if (e.length < 1)
                throw new Error("Invalid payload for Ping message.");
            return {
                type: zt.Ping
            }
        }
        _createInvocationMessage(e, t) {
            if (t.length < 5)
                throw new Error("Invalid payload for Invocation message.");
            const n = t[2];
            return n ? {
                arguments: t[4],
                headers: e,
                invocationId: n,
                streamIds: [],
                target: t[3],
                type: zt.Invocation
            } : {
                arguments: t[4],
                headers: e,
                streamIds: [],
                target: t[3],
                type: zt.Invocation
            }
        }
        _createStreamItemMessage(e, t) {
            if (t.length < 4)
                throw new Error("Invalid payload for StreamItem message.");
            return {
                headers: e,
                invocationId: t[2],
                item: t[3],
                type: zt.StreamItem
            }
        }
        _createCompletionMessage(e, t) {
            if (t.length < 4)
                throw new Error("Invalid payload for Completion message.");
            const n = t[3];
            if (n !== this._voidResult && t.length < 5)
                throw new Error("Invalid payload for Completion message.");
            let r, o;
            switch (n) {
            case this._errorResult:
                r = t[4];
                break;
            case this._nonVoidResult:
                o = t[4]
            }
            return {
                error: r,
                headers: e,
                invocationId: t[2],
                result: o,
                type: zt.Completion
            }
        }
        _createAckMessage(e) {
            if (e.length < 1)
                throw new Error("Invalid payload for Ack message.");
            return {
                sequenceId: e[1],
                type: zt.Ack
            }
        }
        _createSequenceMessage(e) {
            if (e.length < 1)
                throw new Error("Invalid payload for Sequence message.");
            return {
                sequenceId: e[1],
                type: zt.Sequence
            }
        }
        _writeInvocation(e) {
            let t;
            return t = e.streamIds ? this._encoder.encode([zt.Invocation, e.headers || {}, e.invocationId || null, e.target, e.arguments, e.streamIds]) : this._encoder.encode([zt.Invocation, e.headers || {}, e.invocationId || null, e.target, e.arguments]),
            Zn.write(t.slice())
        }
        _writeStreamInvocation(e) {
            let t;
            return t = e.streamIds ? this._encoder.encode([zt.StreamInvocation, e.headers || {}, e.invocationId, e.target, e.arguments, e.streamIds]) : this._encoder.encode([zt.StreamInvocation, e.headers || {}, e.invocationId, e.target, e.arguments]),
            Zn.write(t.slice())
        }
        _writeStreamItem(e) {
            const t = this._encoder.encode([zt.StreamItem, e.headers || {}, e.invocationId, e.item]);
            return Zn.write(t.slice())
        }
        _writeCompletion(e) {
            const t = e.error ? this._errorResult : void 0 !== e.result ? this._nonVoidResult : this._voidResult;
            let n;
            switch (t) {
            case this._errorResult:
                n = this._encoder.encode([zt.Completion, e.headers || {}, e.invocationId, t, e.error]);
                break;
            case this._voidResult:
                n = this._encoder.encode([zt.Completion, e.headers || {}, e.invocationId, t]);
                break;
            case this._nonVoidResult:
                n = this._encoder.encode([zt.Completion, e.headers || {}, e.invocationId, t, e.result])
            }
            return Zn.write(n.slice())
        }
        _writeCancelInvocation(e) {
            const t = this._encoder.encode([zt.CancelInvocation, e.headers || {}, e.invocationId]);
            return Zn.write(t.slice())
        }
        _writeClose() {
            const e = this._encoder.encode([zt.Close, null]);
            return Zn.write(e.slice())
        }
        _writeAck(e) {
            const t = this._encoder.encode([zt.Ack, e.sequenceId]);
            return Zn.write(t.slice())
        }
        _writeSequence(e) {
            const t = this._encoder.encode([zt.Sequence, e.sequenceId]);
            return Zn.write(t.slice())
        }
        _readHeaders(e) {
            const t = e[1];
            if ("object" != typeof t)
                throw new Error("Invalid headers.");
            return t
        }
    }
    const nr = "function" == typeof TextDecoder ? new TextDecoder("utf-8") : null
      , rr = nr ? nr.decode.bind(nr) : function(e) {
        let t = 0;
        const n = e.length
          , r = []
          , o = [];
        for (; t < n; ) {
            const n = e[t++];
            if (0 === n)
                break;
            if (0 == (128 & n))
                r.push(n);
            else if (192 == (224 & n)) {
                const o = 63 & e[t++];
                r.push((31 & n) << 6 | o)
            } else if (224 == (240 & n)) {
                const o = 63 & e[t++]
                  , s = 63 & e[t++];
                r.push((31 & n) << 12 | o << 6 | s)
            } else if (240 == (248 & n)) {
                let o = (7 & n) << 18 | (63 & e[t++]) << 12 | (63 & e[t++]) << 6 | 63 & e[t++];
                o > 65535 && (o -= 65536,
                r.push(o >>> 10 & 1023 | 55296),
                o = 56320 | 1023 & o),
                r.push(o)
            }
            r.length > 1024 && (o.push(String.fromCharCode.apply(null, r)),
            r.length = 0)
        }
        return o.push(String.fromCharCode.apply(null, r)),
        o.join("")
    }
      , or = Math.pow(2, 32)
      , sr = Math.pow(2, 21) - 1;
    function ir(e, t) {
        return e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24
    }
    function ar(e, t) {
        return e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24 >>> 0)
    }
    function cr(e, t) {
        const n = ar(e, t + 4);
        if (n > sr)
            throw new Error(`Cannot read uint64 with high order part ${n}, because the result would exceed Number.MAX_SAFE_INTEGER.`);
        return n * or + ar(e, t)
    }
    class lr {
        constructor(e) {
            this.batchData = e;
            const t = new pr(e);
            this.arrayRangeReader = new fr(e),
            this.arrayBuilderSegmentReader = new gr(e),
            this.diffReader = new hr(e),
            this.editReader = new dr(e,t),
            this.frameReader = new ur(e,t)
        }
        updatedComponents() {
            return ir(this.batchData, this.batchData.length - 20)
        }
        referenceFrames() {
            return ir(this.batchData, this.batchData.length - 16)
        }
        disposedComponentIds() {
            return ir(this.batchData, this.batchData.length - 12)
        }
        disposedEventHandlerIds() {
            return ir(this.batchData, this.batchData.length - 8)
        }
        updatedComponentsEntry(e, t) {
            const n = e + 4 * t;
            return ir(this.batchData, n)
        }
        referenceFramesEntry(e, t) {
            return e + 20 * t
        }
        disposedComponentIdsEntry(e, t) {
            const n = e + 4 * t;
            return ir(this.batchData, n)
        }
        disposedEventHandlerIdsEntry(e, t) {
            const n = e + 8 * t;
            return cr(this.batchData, n)
        }
    }
    class hr {
        constructor(e) {
            this.batchDataUint8 = e
        }
        componentId(e) {
            return ir(this.batchDataUint8, e)
        }
        edits(e) {
            return e + 4
        }
        editsEntry(e, t) {
            return e + 16 * t
        }
    }
    class dr {
        constructor(e, t) {
            this.batchDataUint8 = e,
            this.stringReader = t
        }
        editType(e) {
            return ir(this.batchDataUint8, e)
        }
        siblingIndex(e) {
            return ir(this.batchDataUint8, e + 4)
        }
        newTreeIndex(e) {
            return ir(this.batchDataUint8, e + 8)
        }
        moveToSiblingIndex(e) {
            return ir(this.batchDataUint8, e + 8)
        }
        removedAttributeName(e) {
            const t = ir(this.batchDataUint8, e + 12);
            return this.stringReader.readString(t)
        }
    }
    class ur {
        constructor(e, t) {
            this.batchDataUint8 = e,
            this.stringReader = t
        }
        frameType(e) {
            return ir(this.batchDataUint8, e)
        }
        subtreeLength(e) {
            return ir(this.batchDataUint8, e + 4)
        }
        elementReferenceCaptureId(e) {
            const t = ir(this.batchDataUint8, e + 4);
            return this.stringReader.readString(t)
        }
        componentId(e) {
            return ir(this.batchDataUint8, e + 8)
        }
        elementName(e) {
            const t = ir(this.batchDataUint8, e + 8);
            return this.stringReader.readString(t)
        }
        textContent(e) {
            const t = ir(this.batchDataUint8, e + 4);
            return this.stringReader.readString(t)
        }
        markupContent(e) {
            const t = ir(this.batchDataUint8, e + 4);
            return this.stringReader.readString(t)
        }
        attributeName(e) {
            const t = ir(this.batchDataUint8, e + 4);
            return this.stringReader.readString(t)
        }
        attributeValue(e) {
            const t = ir(this.batchDataUint8, e + 8);
            return this.stringReader.readString(t)
        }
        attributeEventHandlerId(e) {
            return cr(this.batchDataUint8, e + 12)
        }
    }
    class pr {
        constructor(e) {
            this.batchDataUint8 = e,
            this.stringTableStartIndex = ir(e, e.length - 4)
        }
        readString(e) {
            if (-1 === e)
                return null;
            {
                const n = ir(this.batchDataUint8, this.stringTableStartIndex + 4 * e)
                  , r = function(e, t) {
                    let n = 0
                      , r = 0;
                    for (let o = 0; o < 4; o++) {
                        const s = e[t + o];
                        if (n |= (127 & s) << r,
                        s < 128)
                            break;
                        r += 7
                    }
                    return n
                }(this.batchDataUint8, n)
                  , o = n + ((t = r) < 128 ? 1 : t < 16384 ? 2 : t < 2097152 ? 3 : 4)
                  , s = new Uint8Array(this.batchDataUint8.buffer,this.batchDataUint8.byteOffset + o,r);
                return rr(s)
            }
            var t
        }
    }
    class fr {
        constructor(e) {
            this.batchDataUint8 = e
        }
        count(e) {
            return ir(this.batchDataUint8, e)
        }
        values(e) {
            return e + 4
        }
    }
    class gr {
        constructor(e) {
            this.batchDataUint8 = e
        }
        offset(e) {
            return 0
        }
        count(e) {
            return ir(this.batchDataUint8, e)
        }
        values(e) {
            return e + 4
        }
    }
    class mr {
        constructor(e) {
            this.nextBatchId = 2,
            this.logger = e
        }
        async processBatch(e, t, n) {
            if (e < this.nextBatchId)
                return await this.completeBatch(n, e),
                void this.logger.log(ot.Debug, `Batch ${e} already processed. Waiting for batch ${this.nextBatchId}.`);
            if (e > this.nextBatchId)
                return this.fatalError ? (this.logger.log(ot.Debug, `Received a new batch ${e} but errored out on a previous batch ${this.nextBatchId - 1}`),
                void await n.send("OnRenderCompleted", this.nextBatchId - 1, this.fatalError.toString())) : void this.logger.log(ot.Debug, `Waiting for batch ${this.nextBatchId}. Batch ${e} not processed.`);
            try {
                this.nextBatchId++,
                this.logger.log(ot.Debug, `Applying batch ${e}.`),
                function(e, t) {
                    const n = ge[e];
                    if (!n)
                        throw new Error(`There is no browser renderer with ID ${e}.`);
                    const r = t.arrayRangeReader
                      , o = t.updatedComponents()
                      , s = r.values(o)
                      , i = r.count(o)
                      , a = t.referenceFrames()
                      , c = r.values(a)
                      , l = t.diffReader;
                    for (let e = 0; e < i; e++) {
                        const r = t.updatedComponentsEntry(s, e)
                          , o = l.componentId(r)
                          , i = l.edits(r);
                        n.updateComponent(t, o, i, c)
                    }
                    const h = t.disposedComponentIds()
                      , d = r.values(h)
                      , u = r.count(h);
                    for (let e = 0; e < u; e++) {
                        const r = t.disposedComponentIdsEntry(d, e);
                        n.disposeComponent(r)
                    }
                    const p = t.disposedEventHandlerIds()
                      , f = r.values(p)
                      , g = r.count(p);
                    for (let e = 0; e < g; e++) {
                        const r = t.disposedEventHandlerIdsEntry(f, e);
                        n.disposeEventHandler(r)
                    }
                    _e && (_e = !1,
                    window.scrollTo && window.scrollTo(0, 0))
                }(wn.Server, new lr(t)),
                await this.completeBatch(n, e)
            } catch (t) {
                throw this.fatalError = t.toString(),
                this.logger.log(ot.Error, `There was an error applying batch ${e}.`),
                n.send("OnRenderCompleted", e, t.toString()),
                t
            }
        }
        getLastBatchid() {
            return this.nextBatchId - 1
        }
        async completeBatch(e, t) {
            try {
                await e.send("OnRenderCompleted", t, null)
            } catch {
                this.logger.log(ot.Warning, `Failed to deliver completion notification for render '${t}'.`)
            }
        }
    }
    let vr, yr, wr, _r, br, Sr, Er = !1;
    function Cr() {
        const e = document.querySelector("#blazor-error-ui");
        e && (e.style.display = "block"),
        Er || (Er = !0,
        document.querySelectorAll("#blazor-error-ui .reload").forEach((e => {
            e.onclick = function(e) {
                location.reload(),
                e.preventDefault()
            }
        }
        )),
        document.querySelectorAll("#blazor-error-ui .dismiss").forEach((e => {
            e.onclick = function(e) {
                const t = document.querySelector("#blazor-error-ui");
                t && (t.style.display = "none"),
                e.preventDefault()
            }
        }
        )))
    }
    class Ir {
        constructor(t, n, r, o) {
            this._firstUpdate = !0,
            this._renderingFailed = !1,
            this._disposed = !1,
            this._circuitId = void 0,
            this._applicationState = n,
            this._componentManager = t,
            this._options = r,
            this._logger = o,
            this._renderQueue = new mr(this._logger),
            this._dispatcher = e.attachDispatcher(this)
        }
        start() {
            if (this.isDisposedOrDisposing())
                throw new Error("Cannot start a disposed circuit.");
            return this._startPromise || (this._startPromise = this.startCore()),
            this._startPromise
        }
        updateRootComponents(e) {
            var t, n;
            return this._firstUpdate ? (this._firstUpdate = !1,
            null === (t = this._connection) || void 0 === t ? void 0 : t.send("UpdateRootComponents", e, this._applicationState)) : null === (n = this._connection) || void 0 === n ? void 0 : n.send("UpdateRootComponents", e, "")
        }
        async startCore() {
            if (this._connection = await this.startConnection(),
            this._connection.state !== qt.Connected)
                return !1;
            const e = JSON.stringify(this._componentManager.initialComponents.map((e => {
                return t = e,
                {
                    ...t,
                    start: void 0,
                    end: void 0
                };
                var t
            }
            )));
            if (this._circuitId = await this._connection.invoke("StartCircuit", Ne.getBaseURI(), Ne.getLocationHref(), e, this._applicationState || ""),
            !this._circuitId)
                return !1;
            for (const e of this._options.circuitHandlers)
                e.onCircuitOpened && e.onCircuitOpened();
            return !0
        }
        async startConnection() {
            var e, t;
            const n = new tr;
            n.name = "blazorpack";
            const r = (new yn).withUrl("_blazor").withHubProtocol(n);
            this._options.configureSignalR(r);
            const o = r.build();
            o.on("JS.AttachComponent", ( (e, t) => function(e, t, n, r) {
                let o = ge[e];
                o || (o = new de(e),
                ge[e] = o),
                o.attachRootComponentToLogicalElement(n, t, !1)
            }(wn.Server, this.resolveElement(t), e))),
            o.on("JS.BeginInvokeJS", this._dispatcher.beginInvokeJSFromDotNet.bind(this._dispatcher)),
            o.on("JS.EndInvokeDotNet", this._dispatcher.endInvokeDotNetFromJS.bind(this._dispatcher)),
            o.on("JS.ReceiveByteArray", this._dispatcher.receiveByteArray.bind(this._dispatcher)),
            o.on("JS.BeginTransmitStream", (e => {
                const t = new ReadableStream({
                    start: t => {
                        o.stream("SendDotNetStreamToJS", e).subscribe({
                            next: e => t.enqueue(e),
                            complete: () => t.close(),
                            error: e => t.error(e)
                        })
                    }
                });
                this._dispatcher.supplyDotNetStream(e, t)
            }
            )),
            o.on("JS.RenderBatch", (async (e, t) => {
                var n, r;
                this._logger.log(_t.Debug, `Received render batch with id ${e} and ${t.byteLength} bytes.`),
                await this._renderQueue.processBatch(e, t, this._connection),
                null === (r = (n = this._componentManager).onAfterRenderBatch) || void 0 === r || r.call(n, wn.Server)
            }
            )),
            o.on("JS.EndUpdateRootComponents", (e => {
                var t, n;
                null === (n = (t = this._componentManager).onAfterUpdateRootComponents) || void 0 === n || n.call(t, e)
            }
            )),
            o.on("JS.EndLocationChanging", rt._internal.navigationManager.endLocationChanging),
            o.onclose((e => {
                this._interopMethodsForReconnection = function(e) {
                    const t = S.get(e);
                    if (!t)
                        throw new Error(`Interop methods are not registered for renderer ${e}`);
                    return S.delete(e),
                    t
                }(wn.Server),
                this._disposed || this._renderingFailed || this._options.reconnectionHandler.onConnectionDown(this._options.reconnectionOptions, e)
            }
            )),
            o.on("JS.Error", (e => {
                this._renderingFailed = !0,
                this.unhandledError(e),
                Cr()
            }
            ));
            try {
                await o.start()
            } catch (e) {
                if (this.unhandledError(e),
                "FailedToNegotiateWithServerError" === e.errorType)
                    throw e;
                Cr(),
                e.innerErrors && (e.innerErrors.some((e => "UnsupportedTransportError" === e.errorType && e.transport === an.WebSockets)) ? this._logger.log(_t.Error, "Unable to connect, please ensure you are using an updated browser that supports WebSockets.") : e.innerErrors.some((e => "FailedToStartTransportError" === e.errorType && e.transport === an.WebSockets)) ? this._logger.log(_t.Error, "Unable to connect, please ensure WebSockets are available. A VPN or proxy may be blocking the connection.") : e.innerErrors.some((e => "DisabledTransportError" === e.errorType && e.transport === an.LongPolling)) && this._logger.log(_t.Error, "Unable to initiate a SignalR connection to the server. This might be because the server is not configured to support WebSockets. For additional details, visit https://aka.ms/blazor-server-websockets-error."))
            }
            return (null === (t = null === (e = o.connection) || void 0 === e ? void 0 : e.features) || void 0 === t ? void 0 : t.inherentKeepAlive) && this._logger.log(_t.Warning, "Failed to connect via WebSockets, using the Long Polling fallback transport. This may be due to a VPN or proxy blocking the connection. To troubleshoot this, visit https://aka.ms/blazor-server-using-fallback-long-polling."),
            o
        }
        async disconnect() {
            var e;
            await (null === (e = this._connection) || void 0 === e ? void 0 : e.stop())
        }
        async reconnect() {
            if (!this._circuitId)
                throw new Error("Circuit host not initialized.");
            return this._connection.state === qt.Connected || (this._connection = await this.startConnection(),
            this._interopMethodsForReconnection && (I(wn.Server, this._interopMethodsForReconnection),
            this._interopMethodsForReconnection = void 0),
            !!await this._connection.invoke("ConnectCircuit", this._circuitId) && (this._options.reconnectionHandler.onConnectionUp(),
            !0))
        }
        beginInvokeDotNetFromJS(e, t, n, r, o) {
            this.throwIfDispatchingWhenDisposed(),
            this._connection.send("BeginInvokeDotNetFromJS", e ? e.toString() : null, t, n, r || 0, o)
        }
        endInvokeJSFromDotNet(e, t, n) {
            this.throwIfDispatchingWhenDisposed(),
            this._connection.send("EndInvokeJSFromDotNet", e, t, n)
        }
        sendByteArray(e, t) {
            this.throwIfDispatchingWhenDisposed(),
            this._connection.send("ReceiveByteArray", e, t)
        }
        throwIfDispatchingWhenDisposed() {
            if (this._disposed)
                throw new Error("The circuit associated with this dispatcher is no longer available.")
        }
        sendLocationChanged(e, t, n) {
            return this._connection.send("OnLocationChanged", e, t, n)
        }
        sendLocationChanging(e, t, n, r) {
            return this._connection.send("OnLocationChanging", e, t, n, r)
        }
        sendJsDataStream(e, t, n) {
            return function(e, t, n, r) {
                setTimeout((async () => {
                    let o = 5
                      , s = (new Date).valueOf();
                    try {
                        const i = t instanceof Blob ? t.size : t.byteLength;
                        let a = 0
                          , c = 0;
                        for (; a < i; ) {
                            const l = Math.min(r, i - a)
                              , h = await nt(t, a, l);
                            if (o--,
                            o > 1)
                                await e.send("ReceiveJSDataChunk", n, c, h, null);
                            else {
                                if (!await e.invoke("ReceiveJSDataChunk", n, c, h, null))
                                    break;
                                const t = (new Date).valueOf()
                                  , r = t - s;
                                s = t,
                                o = Math.max(1, Math.round(500 / Math.max(1, r)))
                            }
                            a += l,
                            c++
                        }
                    } catch (t) {
                        await e.send("ReceiveJSDataChunk", n, -1, null, t.toString())
                    }
                }
                ), 0)
            }(this._connection, e, t, n)
        }
        resolveElement(e) {
            const t = function(e) {
                const t = f.get(e);
                if (t)
                    return f.delete(e),
                    t
            }(e);
            if (t)
                return O(t, !0);
            const n = Number.parseInt(e);
            if (!Number.isNaN(n))
                return function(e) {
                    const {start: t, end: n} = e
                      , r = t[$];
                    if (r) {
                        if (r !== e)
                            throw new Error("The start component comment was already associated with another component descriptor.");
                        return t
                    }
                    const o = t.parentNode;
                    if (!o)
                        throw new Error(`Comment not connected to the DOM ${t.textContent}`);
                    const s = O(o, !0)
                      , i = K(s);
                    t[L] = s,
                    t[$] = e;
                    const a = O(t);
                    if (n) {
                        const e = K(a)
                          , r = Array.prototype.indexOf.call(i, a) + 1;
                        let o = null;
                        for (; o !== n; ) {
                            const n = i.splice(r, 1)[0];
                            if (!n)
                                throw new Error("Could not find the end component comment in the parent logical node list");
                            n[L] = t,
                            e.push(n),
                            o = n
                        }
                    }
                    return a
                }(this._componentManager.resolveRootComponent(n));
            throw new Error(`Invalid sequence number or identifier '${e}'.`)
        }
        getRootComponentManager() {
            return this._componentManager
        }
        unhandledError(e) {
            this._logger.log(_t.Error, e),
            this.disconnect()
        }
        getDisconnectFormData() {
            const e = new FormData
              , t = this._circuitId;
            return e.append("circuitId", t),
            e
        }
        didRenderingFail() {
            return this._renderingFailed
        }
        isDisposedOrDisposing() {
            return void 0 !== this._disposePromise
        }
        sendDisconnectBeacon() {
            if (this._disposed)
                return;
            const e = this.getDisconnectFormData();
            this._disposed = navigator.sendBeacon("_blazor/disconnect", e)
        }
        dispose() {
            return this._disposePromise || (this._disposePromise = this.disposeCore()),
            this._disposePromise
        }
        async disposeCore() {
            var e;
            if (!this._startPromise)
                return void (this._disposed = !0);
            await this._startPromise,
            this._disposed = !0,
            null === (e = this._connection) || void 0 === e || e.stop();
            const t = this.getDisconnectFormData();
            fetch("_blazor/disconnect", {
                method: "POST",
                body: t
            });
            for (const e of this._options.circuitHandlers)
                e.onCircuitClosed && e.onCircuitClosed()
        }
    }
    class kr {
        constructor(e, t, n, r) {
            this.maxRetries = t,
            this.document = n,
            this.logger = r,
            this.modal = this.document.createElement("div"),
            this.modal.id = e,
            this.maxRetries = t,
            this.modal.style.cssText = ["position: fixed", "top: 0", "right: 0", "bottom: 0", "left: 0", "z-index: 1050", "display: none", "overflow: hidden", "background-color: #fff", "opacity: 0.8", "text-align: center", "font-weight: bold", "transition: visibility 0s linear 500ms"].join(";"),
            this.message = this.document.createElement("h5"),
            this.message.style.cssText = "margin-top: 20px",
            this.button = this.document.createElement("button"),
            this.button.style.cssText = "margin:5px auto 5px",
            this.button.textContent = "Retry";
            const o = this.document.createElement("a");
            o.addEventListener("click", ( () => location.reload())),
            o.textContent = "reload",
            this.reloadParagraph = this.document.createElement("p"),
            this.reloadParagraph.textContent = "Alternatively, ",
            this.reloadParagraph.appendChild(o),
            this.modal.appendChild(this.message),
            this.modal.appendChild(this.button),
            this.modal.appendChild(this.reloadParagraph),
            this.loader = this.getLoader(),
            this.message.after(this.loader),
            this.button.addEventListener("click", (async () => {
                this.show();
                try {
                    await rt.reconnect() || this.rejected()
                } catch (e) {
                    this.logger.log(ot.Error, e),
                    this.failed()
                }
            }
            ))
        }
        show() {
            this.document.contains(this.modal) || this.document.body.appendChild(this.modal),
            this.modal.style.display = "block",
            this.loader.style.display = "inline-block",
            this.button.style.display = "none",
            this.reloadParagraph.style.display = "none",
            this.message.textContent = "Attempting to reconnect to the server...",
            this.modal.style.visibility = "hidden",
            setTimeout(( () => {
                this.modal.style.visibility = "visible"
            }
            ), 0)
        }
        update(e) {
            this.message.textContent = `Attempting to reconnect to the server: ${e} of ${this.maxRetries}`
        }
        hide() {
            this.modal.style.display = "none"
        }
        failed() {
            this.button.style.display = "block",
            this.reloadParagraph.style.display = "none",
            this.loader.style.display = "none";
            const e = this.document.createTextNode("Reconnection failed. Try ")
              , t = this.document.createElement("a");
            t.textContent = "reloading",
            t.setAttribute("href", ""),
            t.addEventListener("click", ( () => location.reload()));
            const n = this.document.createTextNode(" the page if you're unable to reconnect.");
            this.message.replaceChildren(e, t, n)
        }
        rejected() {
            this.button.style.display = "none",
            this.reloadParagraph.style.display = "none",
            this.loader.style.display = "none";
            const e = this.document.createTextNode("Could not reconnect to the server. ")
              , t = this.document.createElement("a");
            t.textContent = "Reload",
            t.setAttribute("href", ""),
            t.addEventListener("click", ( () => location.reload()));
            const n = this.document.createTextNode(" the page to restore functionality.");
            this.message.replaceChildren(e, t, n)
        }
        getLoader() {
            const e = this.document.createElement("div");
            return e.style.cssText = ["border: 0.3em solid #f3f3f3", "border-top: 0.3em solid #3498db", "border-radius: 50%", "width: 2em", "height: 2em", "display: inline-block"].join(";"),
            e.animate([{
                transform: "rotate(0deg)"
            }, {
                transform: "rotate(360deg)"
            }], {
                duration: 2e3,
                iterations: 1 / 0
            }),
            e
        }
    }
    class Tr {
        constructor(e, t, n) {
            this.dialog = e,
            this.maxRetries = t,
            this.document = n,
            this.document = n;
            const r = this.document.getElementById(Tr.MaxRetriesId);
            r && (r.innerText = this.maxRetries.toString())
        }
        show() {
            this.removeClasses(),
            this.dialog.classList.add(Tr.ShowClassName)
        }
        update(e) {
            const t = this.document.getElementById(Tr.CurrentAttemptId);
            t && (t.innerText = e.toString())
        }
        hide() {
            this.removeClasses(),
            this.dialog.classList.add(Tr.HideClassName)
        }
        failed() {
            this.removeClasses(),
            this.dialog.classList.add(Tr.FailedClassName)
        }
        rejected() {
            this.removeClasses(),
            this.dialog.classList.add(Tr.RejectedClassName)
        }
        removeClasses() {
            this.dialog.classList.remove(Tr.ShowClassName, Tr.HideClassName, Tr.FailedClassName, Tr.RejectedClassName)
        }
    }
    Tr.ShowClassName = "components-reconnect-show",
    Tr.HideClassName = "components-reconnect-hide",
    Tr.FailedClassName = "components-reconnect-failed",
    Tr.RejectedClassName = "components-reconnect-rejected",
    Tr.MaxRetriesId = "components-reconnect-max-retries",
    Tr.CurrentAttemptId = "components-reconnect-current-attempt";
    class Dr {
        constructor(e, t, n) {
            this._currentReconnectionProcess = null,
            this._logger = e,
            this._reconnectionDisplay = t,
            this._reconnectCallback = n || rt.reconnect
        }
        onConnectionDown(e, t) {
            if (!this._reconnectionDisplay) {
                const t = document.getElementById(e.dialogId);
                this._reconnectionDisplay = t ? new Tr(t,e.maxRetries,document) : new kr(e.dialogId,e.maxRetries,document,this._logger)
            }
            this._currentReconnectionProcess || (this._currentReconnectionProcess = new Rr(e,this._logger,this._reconnectCallback,this._reconnectionDisplay))
        }
        onConnectionUp() {
            this._currentReconnectionProcess && (this._currentReconnectionProcess.dispose(),
            this._currentReconnectionProcess = null)
        }
    }
    class Rr {
        constructor(e, t, n, r) {
            this.logger = t,
            this.reconnectCallback = n,
            this.isDisposed = !1,
            this.reconnectDisplay = r,
            this.reconnectDisplay.show(),
            this.attemptPeriodicReconnection(e)
        }
        dispose() {
            this.isDisposed = !0,
            this.reconnectDisplay.hide()
        }
        async attemptPeriodicReconnection(e) {
            for (let t = 0; t < e.maxRetries; t++) {
                this.reconnectDisplay.update(t + 1);
                const n = 0 === t && e.retryIntervalMilliseconds > Rr.MaximumFirstRetryInterval ? Rr.MaximumFirstRetryInterval : e.retryIntervalMilliseconds;
                if (await this.delay(n),
                this.isDisposed)
                    break;
                try {
                    return await this.reconnectCallback() ? void 0 : void this.reconnectDisplay.rejected()
                } catch (e) {
                    this.logger.log(ot.Error, e)
                }
            }
            this.reconnectDisplay.failed()
        }
        delay(e) {
            return new Promise((t => setTimeout(t, e)))
        }
    }
    Rr.MaximumFirstRetryInterval = 3e3;
    class xr {
        constructor(e=!0, t, n, r=0) {
            this.singleRuntime = e,
            this.logger = t,
            this.webRendererId = r,
            this.afterStartedCallbacks = [],
            n && this.afterStartedCallbacks.push(...n)
        }
        async importInitializersAsync(e, t) {
            await Promise.all(e.map((e => async function(e, n) {
                const r = function(e) {
                    const t = document.baseURI;
                    return t.endsWith("/") ? `${t}${e}` : `${t}/${e}`
                }(n)
                  , o = await import(r);
                if (void 0 !== o) {
                    if (e.singleRuntime) {
                        const {beforeStart: n, afterStarted: r, beforeWebAssemblyStart: i, afterWebAssemblyStarted: a, beforeServerStart: c, afterServerStarted: l} = o;
                        let h = n;
                        e.webRendererId === wn.Server && c && (h = c),
                        e.webRendererId === wn.WebAssembly && i && (h = i);
                        let d = r;
                        return e.webRendererId === wn.Server && l && (d = l),
                        e.webRendererId === wn.WebAssembly && a && (d = a),
                        s(e, h, d, t)
                    }
                    return function(e, t, n) {
                        var o;
                        const i = n[0]
                          , {beforeStart: a, afterStarted: c, beforeWebStart: l, afterWebStarted: h, beforeWebAssemblyStart: d, afterWebAssemblyStarted: u, beforeServerStart: p, afterServerStarted: f} = t
                          , g = !(l || h || d || u || p || f || !a && !c)
                          , m = g && i.enableClassicInitializers;
                        if (g && !i.enableClassicInitializers)
                            null === (o = e.logger) || void 0 === o || o.log(ot.Warning, `Initializer '${r}' will be ignored because multiple runtimes are available. use 'before(web|webAssembly|server)Start' and 'after(web|webAssembly|server)Started?' instead.)`);
                        else if (m)
                            return s(e, a, c, n);
                        if (function(e) {
                            e.webAssembly ? e.webAssembly.initializers || (e.webAssembly.initializers = {
                                beforeStart: [],
                                afterStarted: []
                            }) : e.webAssembly = {
                                initializers: {
                                    beforeStart: [],
                                    afterStarted: []
                                }
                            },
                            e.circuit ? e.circuit.initializers || (e.circuit.initializers = {
                                beforeStart: [],
                                afterStarted: []
                            }) : e.circuit = {
                                initializers: {
                                    beforeStart: [],
                                    afterStarted: []
                                }
                            }
                        }(i),
                        d && i.webAssembly.initializers.beforeStart.push(d),
                        u && i.webAssembly.initializers.afterStarted.push(u),
                        p && i.circuit.initializers.beforeStart.push(p),
                        f && i.circuit.initializers.afterStarted.push(f),
                        h && e.afterStartedCallbacks.push(h),
                        l)
                            return l(i)
                    }(e, o, t)
                }
                function s(e, t, n, r) {
                    if (n && e.afterStartedCallbacks.push(n),
                    t)
                        return t(...r)
                }
            }(this, e))))
        }
        async invokeAfterStartedCallbacks(e) {
            const t = function(e) {
                var t;
                return null === (t = C.get(e)) || void 0 === t ? void 0 : t[1]
            }(this.webRendererId);
            t && await t,
            await Promise.all(this.afterStartedCallbacks.map((t => t(e))))
        }
    }
    function Ar(e) {
        if (void 0 !== Sr)
            throw new Error("Blazor Server has already started.");
        return Sr = new Promise(Pr.bind(null, e)),
        Sr
    }
    async function Pr(e, t, n) {
        await vr;
        const r = await async function(e) {
            if (e.initializers)
                return await Promise.all(e.initializers.beforeStart.map((t => t(e)))),
                new xr(!1,void 0,e.initializers.afterStarted,wn.Server);
            const t = await fetch("_blazor/initializers", {
                method: "GET",
                credentials: "include",
                cache: "no-cache"
            })
              , n = await t.json()
              , r = new xr(!0,void 0,void 0,wn.Server);
            return await r.importInitializersAsync(n, [e]),
            r
        }(_r);
        var o;
        if (o = document,
        yr = ht(o, lt) || "",
        br = new ct(_r.logLevel),
        wr = new Ir(e,yr,_r,br),
        br.log(ot.Information, "Starting up Blazor server-side application."),
        rt.reconnect = async () => !(wr.didRenderingFail() || !await wr.reconnect() && (br.log(ot.Information, "Reconnection attempt to the circuit was rejected by the server. This may indicate that the associated state is no longer available on the server."),
        1)),
        rt.defaultReconnectionHandler = new Dr(br),
        _r.reconnectionHandler = _r.reconnectionHandler || rt.defaultReconnectionHandler,
        rt._internal.navigationManager.listenForNavigationEvents(wn.Server, ( (e, t, n) => wr.sendLocationChanged(e, t, n)), ( (e, t, n, r) => wr.sendLocationChanging(e, t, n, r))),
        rt._internal.forceCloseConnection = () => wr.disconnect(),
        rt._internal.sendJSDataStream = (e, t, n) => wr.sendJsDataStream(e, t, n),
        !await wr.start())
            return br.log(ot.Error, "Failed to start the circuit."),
            void t();
        const s = () => {
            wr.sendDisconnectBeacon()
        }
        ;
        rt.disconnect = s,
        window.addEventListener("unload", s, {
            capture: !1,
            once: !0
        }),
        br.log(ot.Information, "Blazor server-side application started."),
        r.invokeAfterStartedCallbacks(rt),
        t()
    }
    class Ur {
        constructor(e) {
            this.initialComponents = e
        }
        resolveRootComponent(e) {
            return this.initialComponents[e]
        }
    }
    class Nr {
        constructor() {
            this._eventListeners = new Map
        }
        static create(e) {
            const t = new Nr;
            return e.addEventListener = t.addEventListener.bind(t),
            e.removeEventListener = t.removeEventListener.bind(t),
            t
        }
        addEventListener(e, t) {
            let n = this._eventListeners.get(e);
            n || (n = new Set,
            this._eventListeners.set(e, n)),
            n.add(t)
        }
        removeEventListener(e, t) {
            var n;
            null === (n = this._eventListeners.get(e)) || void 0 === n || n.delete(t)
        }
        dispatchEvent(e, t) {
            const n = this._eventListeners.get(e);
            if (!n)
                return;
            const r = {
                ...t,
                type: e
            };
            for (const e of n)
                e(r)
        }
    }
    let Mr = !1;
    function Br(e) {
        if (Mr)
            throw new Error("Blazor has already started.");
        Mr = !0;
        const t = st(e);
        !function(e) {
            if (_r)
                throw new Error("Circuit options have already been configured.");
            if (_r)
                throw new Error("WebAssembly options have already been configured.");
            vr = async function(e) {
                const t = await e;
                _r = st(t)
            }(e)
        }(Promise.resolve(t || {})),
        Nr.create(rt);
        const n = function(e) {
            return dt(e, "server").sort(( (e, t) => e.sequence - t.sequence))
        }(document);
        return Ar(new Ur(n))
    }
    rt.start = Br,
    window.DotNet = e,
    document && document.currentScript && "false" !== document.currentScript.getAttribute("autostart") && Br()
}
)();
