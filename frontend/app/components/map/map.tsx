"use client";

import { useEffect, useRef } from "react";
import "ol/ol.css";
import OLMap from "ol/Map";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import { Control, defaults as defaultControls } from "ol/control";

import { classNames } from "@/app/lib/style";

import styles from "./map.module.css";
import { useShipLayer } from "./shiplayer";
import { IceLayerType, useIceLayer } from "./icelayer";
import { LayerList, type LayerListRefType} from "./layerlist";
import { LayerState, useLayerState } from "./layerstate";

const Map = () => {
    const iceUrl = process.env.NEXT_PUBLIC_MAP_ICE_LAYER_URL;
    const iceLayerName = "fmi:ice:icechart_iceareas";
    const boatUrl = `${process.env.NEXT_PUBLIC_MAP_SHIP_LAYER_URL}/rest/services/Hosted/TestWinterships/FeatureServer/`
    const boatLayerId = "0";
    const layerListRef = useRef<LayerListRefType>(null);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);

    const mapRef = useRef<OLMap | null>(null);
    const [layerState, setLayerState] = useLayerState();
    const [iceLayer, setIceLayerVisibility] = useIceLayer(iceUrl, iceLayerName);
    const [boatLayer, , setShipLayerVisibility] = useShipLayer(boatUrl, boatLayerId);

    useEffect(() => {
        if (!boatLayer) return;
        if (!iceLayer) return;
        if (!mapContainerRef.current) return;
        if (!layerListRef.current) return;

        const layerListControl = new Control({ element: layerListRef.current });

        console.log("Creating new OpenLayers map.");
        if (mapRef.current) {
            mapRef.current.setTarget(undefined);
        }
        mapRef.current = new OLMap({
            target: mapContainerRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                iceLayer,
                boatLayer,
            ],
            view: new View({
                center: [2218500.0, 8419900.0],
                zoom: 7,
            }),
            controls: defaultControls().extend([layerListControl]),
        });
    }, [iceLayer, boatLayer]);

    useEffect(() => {
        setIceLayerVisibility(!!layerState.get(IceLayerType.IceSituation)?.visible);
    }, [layerState, setIceLayerVisibility]);

    useEffect(() => {
        setShipLayerVisibility(
            new Set([...layerState]
                .filter(layer => layer[1].visible)
                .map(layer => layer[0])))
    }, [layerState, setShipLayerVisibility]);

    return (
        <div>
            <div
                className={classNames(styles.mapContainer, "bg-slate-300")}
                ref={mapContainerRef}
            >
            </div>
            <div className="absolute hidden">
                <LayerList
                    ref={layerListRef}
                    layerState={layerState}
                    updateLayerState={(newState: LayerState) => setLayerState(newState)}
                />
            </div>
        </div>
    );
};

export default Map;
