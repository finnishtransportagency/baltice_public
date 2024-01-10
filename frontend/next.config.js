/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = function(phase) {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        const rewrites = () => {
            return [
                {
                    source: `${process.env.NEXT_PUBLIC_MAP_ICE_LAYER_URL}:slug*`,
                    destination: `${process.env.MAP_ICE_LAYER_REDIRECT_URL}:slug*`,
                },
                {
                    source: `${process.env.NEXT_PUBLIC_MAP_SHIP_LAYER_URL}:slug*`,
                    destination: `${process.env.MAP_SHIP_LAYER_REDIRECT_URL}:slug*`,
                },
                {
                    source: `${process.env.NEXT_PUBLIC_BALTICE_API_URL}:slug*`,
                    destination: `${process.env.BALTICE_API_REDIRECT_URL}:slug*`,
                },
            ];
        };
        return {
            rewrites,
        };
    }

    return {
        /* config options for all phases except development here */
    }
}
