import { Dispatch, SetStateAction, useState } from "react";

import { ShipClass, ShipClassValue, ShipState, ShipStateValue } from "./shiplayer";
import { IceLayerType, IceLayerTypeValue } from "./icelayer";

export type LayerName = ShipClassValue | ShipStateValue | IceLayerTypeValue;
export type LayerOptions = {
    visible: boolean;
    label: string;
};

export type LayerState = Map<LayerName, LayerOptions>;

export function useLayerState(): [LayerState, Dispatch<SetStateAction<LayerState>>] {
    const initialState: LayerState = new Map([
        [
            ShipState.Commented,
            {
                visible: true,
                label: "Commented ships",
            },
        ],
        [
            ShipState.Assisted,
            {
                visible: true,
                label: "Assisted ships",
            },
        ],
        [
            ShipState.Planned,
            {
                visible: true,
                label: "Planned assitances",
            },
        ],
        [
            ShipClass.Other,
            {
                visible: true,
                label: "Other ships",
            },
        ],
        [
            ShipClass.Icebreaker,
            {
                visible: true,
                label: "Icebreakers",
            },
        ],
        [
            ShipState.Coordinator,
            {
                visible: true,
                label: "Coordinators",
            },
        ],
        [
            IceLayerType.IceSituation,
            {
                visible: true,
                label: "Ice Situation",
            }
        ]
    ]);

    const [layerState, setLayerState] = useState(initialState);

    return [layerState, setLayerState];
}