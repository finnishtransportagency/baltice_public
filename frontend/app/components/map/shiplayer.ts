import { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Style from "ol/style/Style";
import CircleStyle from "ol/style/Circle";
import Stroke from "ol/style/Stroke";
import EsriJSON from "ol/format/EsriJSON";
import { tile as tileStrategy } from "ol/loadingstrategy";
import { createXYZ } from "ol/tilegrid";
import type { FeatureLike } from "ol/Feature";
import Fill from "ol/style/Fill";

import { LayerName } from "./layerstate";

export const ShipState = {
    Commented: "COMMENTED",
    Assisted: "ASSISTED",
    Planned: "PLANNED",
    Coordinator: "COORDINATOR",
} as const;

export type ShipStateValue = typeof ShipState[keyof typeof ShipState];

export const ShipClass = {
    Icebreaker: "ICEBREAKER",
    Other: "OTHER",
} as const;

export type ShipClassValue = (typeof ShipClass)[keyof typeof ShipClass];

const styleFunction = (feature: FeatureLike, resolution: number, showFeatures: Set<LayerName>): Style | void => {
    //const r = Math.ceil(1024 / Math.max(resolution, 4));
    const show = showShip(feature, showFeatures);
    if (!show) return;

    const c = getShipColor(feature);
    if (!c) return;

    const fill = new Fill({
        color: c,
    });
    const stroke = new Stroke({
        color: c.map((v) => v * 0.8),
        width: 2,
    });
    const style = new Style({
        image: new CircleStyle({
            fill: fill,
            stroke: stroke,
            radius: 5,
        }),
        fill: fill,
        stroke: stroke,
    });

    return style;
};

function showShip(feature: FeatureLike, showFeatures: Set<LayerName>): boolean {
    const sState = getShipState(feature);
    const sClass = getShipClass(feature);
    if (sState.has(ShipState.Commented) && showFeatures.has(ShipState.Commented)) {
        return true;
    }
    if (sState.has(ShipState.Assisted) && showFeatures.has(ShipState.Assisted)) {
        return true;
    }
    if (sState.has(ShipState.Planned) && showFeatures.has(ShipState.Planned)) {
        return true;
    }
    if (sState.has(ShipState.Coordinator) && showFeatures.has(ShipState.Coordinator)) {
        return true;
    }
    if (sClass === ShipClass.Icebreaker && showFeatures.has(ShipClass.Icebreaker)) {
        return true;
    }
    if (sClass === ShipClass.Other && showFeatures.has(ShipClass.Other)) {
        return true;
    }
    return false;
}

function getShipColor(feature: FeatureLike): number[] | void {
    const sState = getShipState(feature);
    const sClass = getShipClass(feature);
    
    if (sState.has(ShipState.Assisted)) {
        return [0, 172, 65]; // Green
    }
    if (sState.has(ShipState.Planned)) {
        return [175, 96, 162]; // Purple
    }
    if (sState.has(ShipState.Commented)) {
        return [245, 194, 8]; // Yellow
    }
    if (sState.has(ShipState.Coordinator)) {
        return [38, 75, 115]; // Dark Blue
    }
    if (sClass === ShipClass.Icebreaker) {
        return [0, 162, 229]; // Light Blue
    }
    if (sClass === ShipClass.Other) {
        return [192, 192, 192]; // Gray
    }
    return;
} 

function getShipClass(feature: FeatureLike): ShipClassValue {
    if (feature.get("shipclass") === "Icebreaker" || feature.get("shipclass") === "Coordinator") {
        return ShipClass.Icebreaker;
    }
    return ShipClass.Other;
}

function getShipState(feature: FeatureLike): Set<ShipStateValue> {
    const flags: Set<ShipStateValue> = new Set();
    
    if (getShipClass(feature) === ShipClass.Icebreaker) {
        if (feature.get("shipclass") === "Coordinator") {
            flags.add(ShipState.Coordinator);
        }
        return flags;
    }

    const plan = feature.get("plannedactivities");

    if (plan?.includes(`"PLG"`)) {
        flags.add(ShipState.Planned);
    }
    if (plan?.includes(`"PLA"`)) {
        flags.add(ShipState.Planned);
    }

    const activities = feature.get("activities");

    if (activities?.includes(`"LED"`)) {
        flags.add(ShipState.Assisted);
    }
    if (activities?.includes(`"BOG"`)) {
        flags.add(ShipState.Assisted);
    }
    if (activities?.includes(`"OVE"`)) {
        flags.add(ShipState.Assisted);
    }
    if (activities?.includes(`"STOP"`)) {
        flags.add(ShipState.Commented);
    }
    return flags;
}

function createShipSource(baseUrl: string, layerId: string) {
    const vs = new VectorSource({
        format: new EsriJSON(),
        url: function (extent, resolution, projection) {
            // ArcGIS Server only wants the numeric portion of the projection ID.
            const srid = projection
                .getCode()
                .split(/:(?=\d+$)/)
                .pop();

            const url =
                baseUrl +
                layerId +
                "/query/?f=json&" +
                "returnGeometry=true&spatialRel=esriSpatialRelIntersects&geometry=" +
                encodeURIComponent(
                    '{"xmin":' +
                    extent[0] +
                    ',"ymin":' +
                    extent[1] +
                    ',"xmax":' +
                    extent[2] +
                    ',"ymax":' +
                    extent[3] +
                    ',"spatialReference":{"wkid":' +
                    srid +
                    "}}"
                ) +
                "&geometryType=esriGeometryEnvelope&inSR=" +
                srid +
                "&outFields=*" +
                "&outSR=" +
                srid;

            return url;
        },
        strategy: tileStrategy(
            createXYZ({
                tileSize: 512,
            })
        ),
        attributions: "Copyright baltice.org",
    });
    return vs;
}

export function useShipLayer(
    url: string,
    layerId: string,
): [
    VectorLayer<VectorSource> | null,
    Set<LayerName>,
    Dispatch<SetStateAction<Set<LayerName>>>,
] {
    const [showFeatures, setShowFeatures] = useState<Set<LayerName>>(
        new Set([...Object.values(ShipState), ...Object.values(ShipClass)])
    );
    const [vectorLayer, setVectorLayer] = useState<VectorLayer<VectorSource> | null>(null);

    const sFunc = useCallback((feature: FeatureLike, resolution: number) => {
        return styleFunction(feature, resolution, showFeatures);
    }, [showFeatures]);
    
    useEffect(() => {
        const boatSource = createShipSource(url, layerId);
        const vl = new VectorLayer({
            source: boatSource,
        });
        setVectorLayer(vl);
    }, [url, layerId]);

    useEffect(() => {
        vectorLayer?.setStyle(sFunc);
    }, [vectorLayer, sFunc]);

    return [vectorLayer, showFeatures, setShowFeatures];
}
