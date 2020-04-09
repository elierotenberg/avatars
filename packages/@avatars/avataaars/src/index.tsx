import type { Random } from '@avatars/core';
import Options from './options';
import getMaskId from './utils/getMaskId';

export default function (random: Random, options: Options) {
    options.setDefaults(
        {
            style: 'transparent',
            top: [],
            topChance: 100,
            hatColor: [],
            hairColor: [],
            accessories: [],
            accessoriesChance: 10,
            facialHair: [],
            facialHairChance: 10,
            facialHairColor: [],
            clothes: [],
            clothesColor: [],
            eyes: [],
            eyebrow: [],
            mouth: [],
            skin: [],
        },
        false
    );

    let svg = `
        
    `;

    if (options.get('style') === 'circle') {
        svg = `
            <path fill-rule="evenodd" clip-rule="evenodd" d="M132 280C198.274 280 252 226.274 252 160C252 93.7258 198.274 40 132 40C65.7258 40 12 93.7258 12 160C12 226.274 65.7258 280 132 280Z" fill="#E6E6E6"/>
            <mask id="${getMaskId()}" mask-type="alpha" maskUnits="userSpaceOnUse" x="12" y="40" width="240" height="240">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M132 280C198.274 280 252 226.274 252 160C252 93.7258 198.274 40 132 40C65.7258 40 12 93.7258 12 160C12 226.274 65.7258 280 132 280Z" fill="white"/>
            </mask>
            <g mask="url(#${getMaskId(false)})">
                <rect x="12" y="40" width="240" height="240" fill="#65C9FF"/>
            </g>
            <mask id="${getMaskId()}" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="264" height="280">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M264 0H0V160H12C12 226.274 65.7258 280 132 280C198.274 280 252 226.274 252 160H264V0Z" fill="white"/>
            </mask>
            <g mask="url(#${getMaskId(false)})">
                ${svg}
            </g>
        `;
    }

    return `
        <svg viewBox="-8 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${svg}
        </svg>
    `;
}
