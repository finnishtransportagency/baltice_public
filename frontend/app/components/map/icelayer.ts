import { Dispatch, SetStateAction, useEffect, useState } from "react";
import TileLayer from "ol/layer/Tile";
import TileSource from "ol/source/Tile";
import TileWMS from "ol/source/TileWMS";
import Source from "ol/source/Source";
import Layer from "ol/layer/Layer";

export const IceLayerType = {
    IceSituation: "ICESITUATION"
} as const;

export type IceLayerTypeValue = typeof IceLayerType[keyof typeof IceLayerType];

export function useIceLayer(
    url: string, 
    layerName: string
):[
    Layer<Source> | null, 
    Dispatch<SetStateAction<boolean>>
] {
    const [iceLayer, setIceLayer] = useState<TileLayer<TileSource> | null>(null);
    const [show, setShow] = useState<boolean>(true);

    useEffect(() => {
        const il = new TileLayer({
            extent: [775225.182306, 7031678.17083, 3371519.21443, 9850373.81053],
            source: new TileWMS({
                url: url,
                params: { LAYERS: layerName, TILED: true },
                serverType: "geoserver",
                transition: 0,
                gutter: 1,
            }),
        });
        setIceLayer(il);
    }, [url, layerName]);

    useEffect(() => {
        iceLayer?.setVisible(show);
    }, [show, iceLayer])

    return [iceLayer, setShow];
}
