import React, { forwardRef } from "react";

import { LayerName, LayerOptions, LayerState } from "./layerstate";

export type LayerListRefType = HTMLUListElement | null;

type LayerListItemProps = {
    layer: LayerName;
    options: LayerOptions;
    toggle: (a: LayerName) => void;
};

function LayerListItem({ layer, options, toggle }: LayerListItemProps) {
    const checkboxId = `layerToggle-${layer}`;
    return (
        <li>
            <input 
                className="mx-2 my-2"
                checked={options.visible}
                type="checkbox" 
                id={checkboxId}
                onChange={() => {
                    toggle(layer)
                }}/>
            <label htmlFor={checkboxId}>{options.label}</label>
        </li>
    );
}

type LayerListProps = {
    layerState: LayerState;
    updateLayerState: (newState: LayerState) => void;
}

export const LayerList = forwardRef<HTMLUListElement, LayerListProps>(
    function LayerList({ layerState, updateLayerState }, ref) {
        function toggleLayer(layer: LayerName) {
            const options = layerState.get(layer);
            if (!options) {
                // Making TS happy, should never happen though.
                return;
            }
            const newOptions = { ...options }
            newOptions.visible = !options.visible;

            updateLayerState(new Map(layerState).set(layer, newOptions));
        }

        return (
            <ul
                ref={ref}
                className="absolute right-2 top-2 p-2 bg-white/80 "
            >
                {[...layerState].map(([layerName, layerOptions]) => (
                    <LayerListItem
                        key={layerName}
                        layer={layerName}
                        options={layerOptions}
                        toggle={(a) => toggleLayer(a)}
                    ></LayerListItem>
                ))}
            </ul>
        );
    }
);
