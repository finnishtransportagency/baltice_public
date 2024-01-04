"use client";

import useSWR from 'swr';

import { fetcher } from './util';

export type ShipRow = {
    name: string;
    callsign: string;
    geoLocation: {
        x: number;
        y: number;
    }
    comment: string;
};

export function useShips() {
    const { data, error, isLoading } = useSWR<ShipRow[]>(`ships`, fetcher)
    return {
        ships: data,
        isLoading,
        isError: error
    }
}