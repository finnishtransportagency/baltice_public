"use client";

import useSWR from 'swr';

import { fetcher } from './util';

export type ShipRow = {
    id: string;
    name: string;
    x: number;
    y: number;
    heading: number;
    states: string[];
    comment?: string;
};

const defaultBounds = [
    // Northwestern corner:
    500000, // X
    10000000, // Y

    // Southeastern corner:
    4000000, // X
    7000000 // Y
];

export function useShips(bounds?: number[]) {
    if (!bounds) {
        bounds = defaultBounds;
    }
    const { data, error, isLoading } = useSWR<ShipRow[]>(`ships/${bounds.join("/")}`, fetcher);
    return {
        ships: data,
        isLoading,
        isError: error
    };
}