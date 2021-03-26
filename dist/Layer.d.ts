/*!
 * Copyright (c) 2020 Arch Inc. (Jun Kato)
 *
 * fabricjs-layer, lightweight layer management for Fabric.js
 * @license MIT
 */
import { LayerEvent } from "./LayerEvent";
import { LayerEventListener } from "./LayerEventListener";
export interface LayerIface {
    type: "Layer";
    createdTime: number;
    startIndex: number;
    endIndex: number;
    addListener(listener: LayerEventListener): void;
    removeListener(listener: LayerEventListener): boolean;
}
declare class Layer implements LayerIface {
    private canvas;
    type: "Layer";
    createdTime: number;
    startIndex: number;
    endIndex: number;
    private _listeners;
    constructor(canvas: fabric.StaticCanvas);
    addListener(listener: LayerEventListener): void;
    removeListener(listener: LayerEventListener): boolean;
    fire(e: LayerEvent): void;
}
export default Layer;
