import { LayerIface } from "./Layer";
import { LayerManagerEvent } from "./LayerManagerEvent";
import { LayerManagerEventListener } from "./LayerManagerEventListener";
export interface LayerManagerIface {
    activeLayer: LayerIface;
    activeLayerIndex: number;
    readonly layers: LayerIface[];
    readonly layersLength: number;
    findLayer(object: fabric.Object): LayerIface;
    getLayer(index: number): LayerIface;
    getLayerIndex(layer: LayerIface): number;
    addLayer(index?: number): LayerIface;
    removeLayer(layer: LayerIface): boolean;
    removeLayerByIndex(index: number): void;
    moveLayer(from: number, to: number): void;
    addListener(listener: LayerManagerEventListener): void;
    removeListener(listener: LayerManagerEventListener): boolean;
    dispose(): void;
}
declare class LayerManager implements LayerManagerIface {
    private canvas;
    get activeLayer(): LayerIface;
    set activeLayer(value: LayerIface);
    private _activeLayer;
    get activeLayerIndex(): number;
    set activeLayerIndex(value: number);
    private _activeLayerIndex;
    get layers(): LayerIface[];
    set layers(_value: LayerIface[]);
    private _layers;
    get layersLength(): number;
    private _listeners;
    constructor(canvas: fabric.StaticCanvas);
    findLayer(object: fabric.Object): LayerIface;
    getLayer(index: number): LayerIface;
    getLayerIndex(layer: LayerIface): number;
    addLayer(index?: number): LayerIface;
    removeLayer(layer: LayerIface): boolean;
    removeLayerByIndex(index: number): void;
    moveLayer(from: number, to: number): void;
    /**
     * Monitor object addition
     *
     * @param e - Fabric.js event
     */
    private onObjectAdd;
    /**
     * Monitor object deletion
     *
     * @param e - Fabric.js event
     */
    private onObjectRemove;
    addListener(listener: LayerManagerEventListener): void;
    removeListener(listener: LayerManagerEventListener): boolean;
    fire(e: LayerManagerEvent): void;
    dispose(): void;
}
export default LayerManager;
